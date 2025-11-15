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
      <label>Selecciona la fecha</label>
      <input
        type="date"
        value={fechaProgramada}
        onChange={(e) => setFechaProgramada(e.target.value)}
      />

      <label>Selecciona la hora</label>
      <select value={hora} onChange={(e) => setHora(e.target.value)}>
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
