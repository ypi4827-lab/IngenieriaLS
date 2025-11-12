const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const conectarDB = require("./db");

dotenv.config();
conectarDB();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/usuarios", require("./rutas/usuarios"));
app.use("/api/equipos", require("./rutas/equipos"));
app.use("/api/reservas", require("./rutas/reservas"));
app.use("/api/servicios", require("./rutas/servicios"));

app.get("/", (req, res) => {
  res.send("✅ API de Ingeniería LS funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
