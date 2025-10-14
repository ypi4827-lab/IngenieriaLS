import React from "react";
import "./botones.css";
                
const Botones: React.FC = () => {
  return (
    <div className="buttons">
      <button className="btn-productos">PRODUCTOS</button>
      <button className="btn-servicios">SERVICIOS</button>
    </div>
  );
};

export default Botones;