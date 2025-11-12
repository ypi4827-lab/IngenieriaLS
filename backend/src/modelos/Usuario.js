const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
  fechaRegistro: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Usuario", usuarioSchema);

usuarioSchema.pre("save", async function (next) {
  if (!this.isModified("contraseña")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
    next();
  } catch (error) {
    next(error);
  }
});

usuarioSchema.methods.compararContraseña = function (passwordIngresada) {
  return bcrypt.compare(passwordIngresada, this.contraseña);
};

module.exports = mongoose.model("Usuario", usuarioSchema);