const mongoose = require("mongoose");

const servicioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  tipo: {
    type: String,
    enum: ["Mantenimiento", "Reparación"],
    required: true,
  },
  costoBase: { type: Number },
  duracionEstimada: { type: String, required: true }, 
  imagenServicio: { type: String },
});

module.exports = mongoose.model("Servicio", servicioSchema);
