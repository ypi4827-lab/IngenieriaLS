const express = require("express")
const cors = require("cors")
require("dotenv").config({
  debug: false,
})

const conectarDB = require("./db")

const app = express()

// No llamamos conectarDB aquí durante testing.
if (process.env.NODE_ENV !== "test") {
  conectarDB()
}

app.use(cors())
app.use(express.json())

// Rutas
app.use("/api/autenticacion", require("./rutas/autenticacion"))
app.use("/api/usuarios", require("./rutas/usuarios"))
app.use("/api/equipos", require("./rutas/equipos"))
app.use("/api/reservas", require("./rutas/reservas"))
app.use("/api/servicios", require("./rutas/servicios"))

app.get("/", (req, res) => {
  res.send("API de Ingeniería LS funcionando correctamente")
})

module.exports = app
