const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  telefono: { type: String },
  rol: {
    type: String,
    enum: ["cliente", "tecnico", "asesor", "administrador"],
    default: "cliente",
  },
  activo: { type: Boolean, default: true },
});

module.exports = mongoose.model("Usuario", usuarioSchema);
