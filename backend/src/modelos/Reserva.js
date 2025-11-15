const mongoose = require("mongoose")

const reservaSchema = new mongoose.Schema(
  {
    clienteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    servicio: {
      type: String,
      enum: ["Mantenimiento", "Reparación", "Instalación"],
      default: "Mantenimiento",
      required: true,
    },
    tecnicoAsignado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    fechaProgramada: { type: Date, required: true },
    horaProgramada: { type: String, required: true },
    estado: {
      type: String,
      enum: ["Pendiente", "Confirmada", "Finalizada", "Cancelada"],
      default: "Pendiente",
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Reserva", reservaSchema)
