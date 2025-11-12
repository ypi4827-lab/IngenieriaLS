const express = require("express");
const router = express.Router();
const controladorServicios = require("../controladores/controladorServicios");

router.get("/", controladorServicios.obtenerServicios);
router.post("/", controladorServicios.crearServicio);
router.put("/:id", controladorServicios.actualizarServicio);
router.delete("/:id", controladorServicios.eliminarServicio);

module.exports = router;
