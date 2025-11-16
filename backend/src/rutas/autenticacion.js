const express = require("express")
const router = express.Router()
const controladorAutenticacion = require("../controladores/controladorAutenticacion")

router.post("/registro", controladorAutenticacion.registrar)
router.post("/login", controladorAutenticacion.login)
router.put("/cambiar-contrasena", controladorAutenticacion.cambiarContraseña)
router.post("/recuperar", controladorAutenticacion.solicitarRecuperacion);
router.put("/restablecer/:token", controladorAutenticacion.restablecerContraseña);

module.exports = router
