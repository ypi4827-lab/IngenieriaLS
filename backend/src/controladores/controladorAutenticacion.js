const Usuario = require("../modelos/Usuario");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const transporter = require("../correo");

exports.registrar = async (req, res) => {
  try {
    const { nombre, correo, contraseña, telefono, rol } = req.body;

    const usuarioExistente = await Usuario.findOne({ correo });
    if (usuarioExistente) {
      return res.status(400).json({ msg: "El correo ya está registrado" });
    }

    const nuevoUsuario = new Usuario({
      nombre,
      correo,
      contraseña,
      telefono,
      rol,
    });
    await nuevoUsuario.save();

    res.status(201).json({ msg: "Usuario registrado correctamente" });
  } catch (error) {
    console.error("Error en registro:", error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

exports.login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    const usuario = await Usuario.findOne({ correo }).select("+contraseña");

    if (!usuario) {
      return res.status(400).json({ msg: "Usuario no encontrado" });
    }

    const passwordValida = await usuario.compararContraseña(contraseña);
    if (!passwordValida) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: usuario._id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      msg: "Inicio de sesión exitoso",
      token,
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        telefono: usuario.telefono,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

exports.cambiarContraseña = async (req, res) => {
  try {
    const id = req.usuario.id;
    const { nuevaContraseña } = req.body;

    if (!nuevaContraseña) {
      return res.status(400).json({ msg: "La contraseña es requerida" });
    }

    const usuario = await Usuario.findById(id).select("+contraseña");

    usuario.contraseña = nuevaContraseña;
    await usuario.save();

    res.json({ msg: "Contraseña cambiada correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "Error al cambiar la contraseña", error: error.message });
  }
};

exports.solicitarRecuperacion = async (req, res) => {
  try {
    const { correo } = req.body;
    const usuario = await Usuario.findOne({ correo });

    if (!usuario)
      return res
        .status(400)
        .json({ msg: "No existe un usuario con este correo" });

    const token = crypto.randomBytes(32).toString("hex");

    usuario.restablecerToken = token;
    usuario.expiraToken = Date.now() + 3600000;
    await usuario.save();

    const enlace = `${process.env.FRONTEND_URL}/recuperar/${token}`;

    await transporter.sendMail({
      from: "soporte@ingenierials.com",
      to: correo,
      subject: "Recuperación de contraseña",
      html: `
      <h2>Restablecer contraseña</h2>
      <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
      <a href="${enlace}" target="_blank">Restablecer contraseña</a>
      <p>El enlace expira en 15 minutos.</p>
    `,
    });

    res.json({ msg: "Correo enviado", enlace });
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "Error en servidor" });
  }
};

exports.restablecerContraseña = async (req, res) => {
  try {
    const { token } = req.params;
    const { nuevaContraseña } = req.body;

    const usuario = await Usuario.findOne({
      restablecerToken: token,
      expiraToken: { $gt: Date.now() },
    }).select("+contraseña");

    if (!usuario)
      return res.status(400).json({ msg: "Token inválido o expirado" });

    usuario.contraseña = nuevaContraseña;
    usuario.restablecerToken = undefined;
    usuario.expiraToken = undefined;

    await usuario.save();

    res.json({ msg: "Contraseña actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "Error en servidor" });
  }
};
