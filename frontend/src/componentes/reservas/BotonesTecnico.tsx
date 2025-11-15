import React from 'react';
import { actualizarReserva } from '../../servicios/reservas';
import Boton from '../comunes/Boton';

interface Props {
  reservaId: string;
  estadoActual: string;
  onActualizada: () => void;
}

const BotonesTecnico: React.FC<Props> = ({
  reservaId,
  estadoActual,
  onActualizada,
}) => {
  const ESTADOS = ['Pendiente', 'Confirmada', 'Finalizada', 'Cancelada'];

  // Filtrar todos los estados EXCEPTO el actual
  const estadosDisponibles = ESTADOS.filter((e) => e !== estadoActual);

  const cambiarEstado = async (estado: string) => {
    try {
      await actualizarReserva(reservaId, { estado });
      onActualizada();
    } catch (error) {
      alert('Error al actualizar la reserva');
      console.log(error);
    }
  };

  return (
    <div className="acciones-tecnico">
      {estadosDisponibles.map((estado) => (
        <Boton
          key={estado}
          onClick={() => cambiarEstado(estado)}
          classProp={`btn-${estado.toLowerCase()}`}
          texto={estado}
        />
      ))}
    </div>
  );
};

export default BotonesTecnico;
