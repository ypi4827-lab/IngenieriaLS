import React from "react";
import "../../estilos/reservas.css";

interface Props {
  fechaProgramada: string;
  setFechaProgramada: (value: string) => void;
  hora: string;
  setHora: (value: string) => void;
}

const CalendarioDisponibilidad: React.FC<Props> = ({
  fechaProgramada,
  setFechaProgramada,
  hora,
  setHora,
}) => {
  return (
    <div className="calendario-disponibilidad">
      <label htmlFor="fecha">Selecciona la fecha</label>
      <input
        id="fecha"
        type="date"
        value={fechaProgramada}
        onChange={(e) => setFechaProgramada(e.target.value)}
      />

      <label htmlFor="hora">Selecciona la hora</label>
      <select id="hora" value={hora} onChange={(e) => setHora(e.target.value)}>
        <option value="">Selecciona una hora</option>
        <option value="08:00">08:00 AM</option>
        <option value="10:00">10:00 AM</option>
        <option value="13:00">01:00 PM</option>
        <option value="15:00">03:00 PM</option>
      </select>
    </div>
  );
};

export default CalendarioDisponibilidad;
