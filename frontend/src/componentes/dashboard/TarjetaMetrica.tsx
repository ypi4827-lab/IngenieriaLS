import React from "react";
import "../../estilos/dashboard.css";

interface Props {
  icono: string;
  titulo: string;
  valor: number;
  color: string;
}

const TarjetaMetrica: React.FC<Props> = ({ icono, titulo, valor, color }) => {
  return (
    <div className="tarjeta-metrica" style={{ borderLeft: `6px solid ${color}` }}>
      <div className="tarjeta-metrica-icono" style={{ color }}>
        {icono}
      </div>
      <div className="tarjeta-metrica-info">
        <p className="tarjeta-metrica-titulo">{titulo}</p>
        <h3 className="tarjeta-metrica-valor">{valor}</h3>
      </div>
    </div>
  );
};

export default TarjetaMetrica;
