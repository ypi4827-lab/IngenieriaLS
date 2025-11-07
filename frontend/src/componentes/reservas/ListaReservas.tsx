import React from "react";
import "../../estilos/misreservas.css";
import CardReserva from "./CardReserva";

interface Reserva {
  id: number;
  servicio: string;
  tecnico: string;
  fecha: string;
  hora: string;
  estado: "pendiente" | "confirmada" | "completada" | "cancelada";
}

interface Props {
  reservas: Reserva[];
  onCancelar: (id: number) => void;
}

const ListaReservas: React.FC<Props> = ({ reservas, onCancelar }) => {
  return (
    <div className="lista-reservas">
      {reservas.map((reserva) => (
        <CardReserva
          key={reserva.id}
          reserva={reserva}
          onCancelar={() => onCancelar(reserva.id)}
        />
      ))}
    </div>
  );
};

export default ListaReservas;
