import React from "react";
import "../../estilos/botones.css";
import { Link } from "react-router-dom";

const Botones: React.FC = () => {
  return (
    <div className="botones">
      <Link to="/productos"><button className="btn-productos">PRODUCTOS</button></Link>
      <Link to="/servicios"><button className="btn-servicios">SERVICIOS</button></Link>
    </div>
  );
};

export default Botones;