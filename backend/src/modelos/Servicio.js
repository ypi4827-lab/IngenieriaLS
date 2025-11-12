const mongoose = require("mongoose");

const servicioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  tipo: {
    type: String,
    enum: ["Mantenimiento", "Reparación"],
    required: true,
  },
  sedeCliente: { type: String, required: true },
  costoBase: { type: Number },
  fechaProgramada: { type: Date },
  duracionEstimada: { type: String, required: true },
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  tecnicoId: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  estado: {
    type: String,
    enum: ["Activo", "Finalizado", "Cancelado"],
    default: "Activo",
  },
  fechaRegistro: { type: Date, default: Date.now },
  imagenServicio: { type: String },
});

module.exports = mongoose.model("Servicio", servicioSchema);
