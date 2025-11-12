import React from "react";
import "../../estilos/reservas.css";
import Boton from "../comunes/Boton";

interface Props {
  servicio: string;
  fechaProgramada: string;
  hora: string;
  tecnico: string;
}

const ResumenReserva: React.FC<Props> = ({
  servicio,
  fechaProgramada,
  hora,
  tecnico,
}) => {
  return (
    <div className="resumen-reserva">
      <h3>✅ ¡Reserva confirmada!</h3>
      <p><strong>Servicio:</strong> {servicio}</p>
      <p><strong>Técnico asignado:</strong> {tecnico}</p>
      <p><strong>FechaProgramada:</strong> {fechaProgramada}</p>
      <p><strong>Hora:</strong> {hora}</p>
      <Boton texto="Volver al inicio" enlace="/" classProp="btn-principal" />
    </div>
  );
};

export default ResumenReserva;
