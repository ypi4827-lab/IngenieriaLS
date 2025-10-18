import React from "react";
import "../../estilos/TipoAcceso.css";

interface TipoAccesoProps {
  icono: string;
  titulo: string;
  descripcion: string;
}

const TipoAcceso: React.FC<TipoAccesoProps> = ({ icono, titulo, descripcion }) => {
  return (
    <div className="tipo-acceso">
      <div className="acceso-header">
        <img src={icono} alt={titulo} className="icono-acceso" />
        <h3 className="titulo-acceso">{titulo}</h3>
      </div>
      <p className="descripcion-acceso">{descripcion}</p>
    </div>
  );
};

export default TipoAcceso;
 