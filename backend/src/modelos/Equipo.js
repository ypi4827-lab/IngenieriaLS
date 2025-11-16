const mongoose = require("mongoose")

const equipoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: String, unique: true },
  modelo: { type: String },
  marca: { type: String, required: true },
  estado: {
    type: String,
    enum: ["Disponible", "En mantenimiento", "Dañado"],
    default: "Disponible",
  },
})

equipoSchema.pre("save", async function (next) {
  try {
    console.log("Entrado al pre-save")

    if (this.codigo) {
      console.log("Ya tiene codigo", this.codigo)

      return next()
    }

    const ultimo = await mongoose
      .model("Equipo")
      .findOne({ codigo: /^EQ-/ }, {}, { sort: { codigo: -1 } })

    console.log("Ultimo equipo encontrado:", ultimo)

    let nuevoNumero = 1

    if (ultimo && ultimo.codigo) {
      const numero = parseInt(ultimo.codigo.replace("EQ-", ""), 10)
      nuevoNumero = numero + 1
    }

    this.codigo = `EQ-${String(nuevoNumero).padStart(3, "0")}`

    console.log("Nuevo codigo asignado:", this.codigo)
    next()
  } catch (err) {
    next(err)
  }
})

module.exports = mongoose.model("Equipo", equipoSchema)
