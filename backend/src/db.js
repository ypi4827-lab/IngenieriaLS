const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error de conexión:", error.message);
    process.exit(1);
  }
};

module.exports = conectarDB;
