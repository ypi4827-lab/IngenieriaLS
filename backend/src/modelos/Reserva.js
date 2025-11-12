const mongoose = require("mongoose");

const reservaSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  servicioId: { type: mongoose.Schema.Types.ObjectId, ref: "Servicio" },
  tecnicoAsignado: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  fechaSolicitud: { type: Date, default: Date.now },
  fechaProgramada: { type: Date },
  horaProgramada: { type: String },
  estado: { type: String, enum: ["Pendiente", "Confirmada", "Finalizada", "Cancelada"], default: "Pendiente" },
  notasCliente: { type: String },
  informeTecnico: { type: String },
});

module.exports = mongoose.model("Reserva", reservaSchema);
