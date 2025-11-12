const express = require("express");
const router = express.Router();
const controladorEquipos = require("../controladores/controladorEquipos");

router.get("/", controladorEquipos.obtenerEquipos);
router.post("/", controladorEquipos.crearEquipo);
router.put("/:id", controladorEquipos.actualizarEquipo);
router.delete("/:id", controladorEquipos.eliminarEquipo);

module.exports = router;
