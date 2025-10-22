import React from "react";
import "../../estilos/botones.css";
                
const Botones: React.FC = () => {
  return (
    <div className="botones">
      <a href="/productos"><button className="btn-productos">PRODUCTOS</button></a>
      <a href="/servicios"><button className="btn-servicios">SERVICIOS</button></a>
    </div>
  );
};

export default Botones;