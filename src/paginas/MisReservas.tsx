import React, { useState } from "react";
import "../estilos/misreservas.css";
import ListaReservas from "../componentes/reservas/ListaReservas";

interface Reserva {
  id: number;
  servicio: string;
  tecnico: string;
  fecha: string;
  hora: string;
  estado: "pendiente" | "confirmada" | "completada" | "cancelada";
}

const MisReservas: React.FC = () => {
  const [reservas, setReservas] = useState<Reserva[]>([
    {
      id: 1,
      servicio: "Mantenimiento preventivo",
      tecnico: "Juan Pérez",
      fecha: "2025-11-10",
      hora: "10:00 AM",
      estado: "confirmada",
    },
    {
      id: 2,
      servicio: "Reparación de motor",
      tecnico: "María Gómez",
      fecha: "2025-11-15",
      hora: "02:00 PM",
      estado: "pendiente",
    },
  ]);

  const cancelarReserva = (id: number) => {
    const actualizar = reservas.map((r) =>
      r.id === id ? { ...r, estado: "cancelada" } : r
    );
    setReservas(actualizar);
  };

  return (
    <div className="misreservas-contenedor">
      <h2 className="misreservas-titulo">Mis Reservas</h2>
      {reservas.length > 0 ? (
        <ListaReservas reservas={reservas} onCancelar={cancelarReserva} />
      ) : (
        <p className="mensaje-vacio">No tienes reservas registradas.</p>
      )}
    </div>
  );
};

export default MisReservas;
