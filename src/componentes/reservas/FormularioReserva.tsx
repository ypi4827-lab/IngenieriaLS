import React from "react";
import "../../estilos/reservas.css";

interface Props {
  servicio: string;
  setServicio: (value: string) => void;
  tecnico: string;
  setTecnico: (value: string) => void;
}

const FormularioReserva: React.FC<Props> = ({
  servicio,
  setServicio,
  tecnico,
  setTecnico,
}) => {
  return (
    <div className="formulario-reserva">
      <label>Tipo de Servicio</label>
      <select value={servicio} onChange={(e) => setServicio(e.target.value)}>
        <option value="">Selecciona un servicio</option>
        <option value="mantenimiento">Mantenimiento</option>
        <option value="reparacion">Reparación</option>
        <option value="instalacion">Instalación</option>
      </select>

      <label>Técnico Disponible</label>
      <select value={tecnico} onChange={(e) => setTecnico(e.target.value)}>
        <option value="">Selecciona un técnico</option>
        <option value="Juan Pérez">Juan Pérez</option>
        <option value="María Gómez">María Gómez</option>
        <option value="Carlos Ruiz">Carlos Ruiz</option>
      </select>
    </div>
  );
};

export default FormularioReserva;
