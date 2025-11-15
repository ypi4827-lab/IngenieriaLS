import React from 'react';
import '../../estilos/misreservas.css';
import CardReserva from './CardReserva';
import type { Reserva } from '../../servicios/reservas';

interface Props {
  reservas: Reserva[];
}

const ListaReservas: React.FC<Props> = ({ reservas }) => {
  return (
    <div className="lista-reservas">
      {reservas.map((reserva) => (
        <CardReserva key={reserva._id} reserva={reserva} />
      ))}
    </div>
  );
};

export default ListaReservas;
