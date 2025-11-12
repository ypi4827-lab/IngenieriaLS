const express = require("express");
const router = express.Router();
const controladorUsuarios = require("../controladores/controladorUsuarios");

router.get("/", controladorUsuarios.obtenerUsuarios);
router.post("/", controladorUsuarios.crearUsuario);
router.put("/:id", controladorUsuarios.actualizarUsuario);
router.delete("/:id", controladorUsuarios.eliminarUsuario);

module.exports = router;
