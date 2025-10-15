import React from "react";
import "../estilos/botones.css";
                
const Botones: React.FC = () => {
  return (
    <div className="buttons">
      <button className="btn-productos">PRODUCTOS</button>
      <button className="btn-servicios">SERVICIOS</button>
    </div>
  );
};

export default Botones;