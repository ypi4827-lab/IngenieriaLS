const express = require("express");
const router = express.Router();
const controladorAutenticacion = require("../controladores/controladorAutenticacion");

router.post("/registro", controladorAutenticacion.registrar);
router.post("/login", controladorAutenticacion.login);

module.exports = router;
