import React from "react";
import "../../estilos/misreservas.css";
import Boton from "../comunes/Boton";

interface Reserva {
  id: number;
  servicio: string;
  tecnico: string;
  fecha: string;
  hora: string;
  estado: "pendiente" | "confirmada" | "completada" | "cancelada";
}

interface Props {
  reserva: Reserva;
  onCancelar: () => void;
}

const CardReserva: React.FC<Props> = ({ reserva, onCancelar }) => {
  const { servicio, tecnico, fecha, hora, estado } = reserva;

  const colorEstado = {
    pendiente: "#f1c40f",
    confirmada: "#2ecc71",
    completada: "#3498db",
    cancelada: "#e74c3c",
  }[estado];

  return (
    <div className="card-reserva">
      <h4 className="reserva-servicio">{servicio}</h4>
      <p><strong>Técnico:</strong> {tecnico}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {hora}</p>
      <p>
        <strong>Estado:</strong>{" "}
        <span className="estado-reserva" style={{ color: colorEstado }}>
          {estado.toUpperCase()}
        </span>
      </p>
      {estado !== "cancelada" && estado !== "completada" && (
        <Boton
          texto="Cancelar"
          onClick={onCancelar}
          classProp="btn-rojo"
        />
      )}
    </div>
  );
};

export default CardReserva;
