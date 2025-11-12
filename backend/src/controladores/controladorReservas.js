const Reserva = require("../modelos/Reserva");

exports.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error del servidor", error: error.message });
  }
};

exports.crearReserva = async (req, res) => {
  try {
    const nueva = new Reserva(req.body);
    await nueva.save();
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear la reserva", error });
  }
};

exports.actualizarReserva = async (req, res) => {
  try {
    const actualizado = await Reserva.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(404).json({ mensaje: "Reserva no encontrada" });
  }
};

exports.eliminarReserva = async (req, res) => {
  try {
    await Reserva.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Reserva eliminada correctamente" });
  } catch (error) {
    res.status(404).json({ mensaje: "Reserva no encontrada" });
  }
};
