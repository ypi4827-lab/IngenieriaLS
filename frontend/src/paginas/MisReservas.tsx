import React, { useState } from 'react';
import '../estilos/misreservas.css';
import ListaReservas from '../componentes/reservas/ListaReservas';

interface Reserva {
  id: number;
  servicio: string;
  tecnico: string;
  fecha: string;
  hora: string;
  estado: 'pendiente' | 'confirmada' | 'completada' | 'cancelada';
}

const MisReservas: React.FC = () => {
  const reservaGuardada = localStorage.getItem('ultimaReserva');
  const reservaInicial = reservaGuardada ? [JSON.parse(reservaGuardada)] : [];
  const [reservas, setReservas] = useState<Reserva[]>([...reservaInicial]);

  const cancelarReserva = (id: number) => {
    const actualizar = reservas.map((r) =>
      r.id === id ? { ...r, estado: 'cancelada' } : r
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
