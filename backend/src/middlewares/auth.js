const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const header = req.header("Authorization");

  if (!header) {
    return res.status(401).json({ msg: "No autorizado. Falta token" });
  }

  const token = header.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.usuario = decoded; // ← AQUÍ SE AGREGA EL USUARIO AL REQUEST

    next();

  } catch (error) {
    return res.status(401).json({ msg: "Token inválido" });
  }
};
