const mongoose = require("mongoose");

const equipoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: String, required: true, unique: true },
  modelo: { type: String },
  marca: { type: String, required: true },
  numeroSerie: { type: String, unique: true },
  estado: {
    type: String,
    enum: ["Disponible", "En mantenimiento", "Dañado"],
    default: "Disponible",
  },
  fechaEjecucionMantenimiento: { type: Date },
  tipoServicio: {
    type: String,
    enum: ["Mantenimiento", "Reparación", "Instalación"],
  },
  numeroIdentificativo: { type: String, unique: true },
  fechaRegistro: { type: Date, default: Date.now },
  fechaVencimientoGarantia: { type: Date }, // alerta 1 mes anticipacion
  cantidad: { type: Number, default: 1 },
  asesorResponsable: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  imagenEquipo: { type: String },
});

module.exports = mongoose.model("Equipo", equipoSchema);
