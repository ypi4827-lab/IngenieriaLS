const Usuario = require("../modelos/Usuario");

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error del servidor", error: error.message });
  }
};

exports.crearUsuario = async (req, res) => {
  try {
    const nuevo = new Usuario(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el usuario", error });
  }
};

exports.actualizarUsuario = async (req, res) => {
  try {
    const actualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
};
