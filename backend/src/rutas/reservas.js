const express = require("express");
const router = express.Router();
const controladorReservas = require("../controladores/controladorReservas");

router.get("/", controladorReservas.obtenerReservas);
router.post("/", controladorReservas.crearReserva);
router.put("/:id", controladorReservas.actualizarReserva);
router.delete("/:id", controladorReservas.eliminarReserva);

module.exports = router;
