import React from 'react';
import { actualizarReserva } from '../../servicios/reservas';
import Boton from '../comunes/Boton';

interface Props {
  tipoUsuario?: string;
  reservaId: string;
  estadoActual: string;
  onActualizada: () => void;
}

const BotonesUsuario: React.FC<Props> = ({
  tipoUsuario,
  reservaId,
  estadoActual,
  onActualizada,
}) => {
  const ESTADOS = ['Pendiente', 'Confirmada', 'Finalizada', 'Cancelada'];

  const estadosDisponibles = ESTADOS.filter((e) => e !== estadoActual);

  const cambiarEstado = async (estado: string) => {
    try {
      await actualizarReserva(reservaId, { estado });
      onActualizada();
    } catch (error) {
      console.log(error);
      alert('Error al actualizar la reserva');
    }
  };

  return (
    <div className="acciones-tecnico">
      {tipoUsuario === 'cliente' && estadoActual === 'Pendiente' && (
        <Boton
          onClick={() => cambiarEstado('Cancelada')}
          classProp={`btn-cancelada`}
          texto="Cancelar"
        />
      )}
      {(tipoUsuario === "administrador" || tipoUsuario === 'tecnico') &&
        estadosDisponibles.map((estado) => (
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

export default BotonesUsuario;
