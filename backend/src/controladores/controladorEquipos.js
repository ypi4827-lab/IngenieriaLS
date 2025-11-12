const Equipo = require("../modelos/Equipo");

exports.obtenerEquipos = async (req, res) => {
  try {
    const equipos = await Equipo.find();
    res.json(equipos);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error del servidor", error: error.message });
  }
};

exports.crearEquipo = async (req, res) => {
  try {
    const nuevo = new Equipo(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el equipo", error });
  }
};

exports.actualizarEquipo = async (req, res) => {
  try {
    const actualizado = await Equipo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(404).json({ mensaje: "Equipo no encontrado" });
  }
};

exports.eliminarEquipo = async (req, res) => {
  try {
    await Equipo.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Equipo eliminado correctamente" });
  } catch (error) {
    res.status(404).json({ mensaje: "Equipo no encontrado" });
  }
};
