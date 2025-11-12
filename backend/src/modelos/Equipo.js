const mongoose = require("mongoose");

const equipoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: String, required: true, unique: true },
  modelo: { type: String },
  marca: { type: String, required: true },
  estado: {
    type: String,
    enum: ["Disponible", "En mantenimiento", "Dañado"],
    default: "Disponible",
  },
  imagenEquipo: { type: String },
});

module.exports = mongoose.model("Equipo", equipoSchema);
