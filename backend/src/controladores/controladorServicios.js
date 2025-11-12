const Servicio = require("../modelos/Servicio");

exports.obtenerServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error del servidor", error: error.message });
  }
};

exports.crearServicio = async (req, res) => {
  try {
    const nuevo = new Servicio(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el servicio", error });
  }
};

exports.actualizarServicio = async (req, res) => {
  try {
    const actualizado = await Servicio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(404).json({ mensaje: "Servicio no encontrado" });
  }
};

exports.eliminarServicio = async (req, res) => {
  try {
    const eliminado = await Servicio.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Servicio eliminado correctamente" });
  } catch (error) {
    res.status(404).json({ mensaje: "Servicio no encontrado" });
  }
};
