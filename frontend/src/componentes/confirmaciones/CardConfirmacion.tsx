import React from "react";
import "../../estilos/confirmaciones.css";

interface Reserva {
  servicio: string;
  tecnico: string;
  fecha: string;
  hora: string;
  estado: string;
}

interface Props {
  reserva: Reserva;
}

const CardConfirmacion: React.FC<Props> = ({ reserva }) => {
  const { servicio, tecnico, fecha, hora, estado } = reserva;

  return (
    <div className="card-confirmacion">
      <div className="icono-exito">✅</div>
      <h3>{estado}</h3>
      <p><strong>Servicio:</strong> {servicio}</p>
      <p><strong>Técnico asignado:</strong> {tecnico}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {hora}</p>
      <p className="mensaje-final">
        Te enviaremos un correo con los detalles de la cita.  
        ¡Gracias por confiar en Ingeniería LS!
      </p>
    </div>
  );
};

export default CardConfirmacion;
