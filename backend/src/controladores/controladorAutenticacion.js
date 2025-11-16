const Usuario = require("../modelos/Usuario")
const jwt = require("jsonwebtoken")

exports.registrar = async (req, res) => {
  try {
    const { nombre, correo, contraseña, telefono, rol } = req.body

    const usuarioExistente = await Usuario.findOne({ correo })
    if (usuarioExistente) {
      return res.status(400).json({ msg: "El correo ya está registrado" })
    }

    const nuevoUsuario = new Usuario({
      nombre,
      correo,
      contraseña,
      telefono,
      rol,
    })
    await nuevoUsuario.save()

    res.status(201).json({ msg: "Usuario registrado correctamente" })
  } catch (error) {
    console.error("Error en registro:", error)
    res.status(500).json({ msg: "Error en el servidor" })
  }
}

exports.login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body
    const usuario = await Usuario.findOne({ correo })

    if (!usuario) {
      return res.status(400).json({ msg: "Usuario no encontrado" })
    }

    const passwordValida = await usuario.compararContraseña(contraseña)
    if (!passwordValida) {
      return res.status(400).json({ msg: "Contraseña incorrecta" })
    }

    const token = jwt.sign(
      { id: usuario._id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    )

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
    })
  } catch (error) {
    console.error("Error en login:", error)
    res.status(500).json({ msg: "Error en el servidor" })
  }
}
