import React from "react";
import "../../estilos/dashboard.css";

interface Props {
  icono: string;
  titulo: string;
  descripcion: string;
  onClick: () => void;
}

const TarjetaAccion: React.FC<Props> = ({ icono, titulo, descripcion, onClick }) => {
  return (
    <div className="tarjeta-accion" onClick={onClick}>
      <div className="tarjeta-icono">{icono}</div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default TarjetaAccion;
