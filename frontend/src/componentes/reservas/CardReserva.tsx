import React from 'react';
import '../../estilos/misreservas.css';
import type { Reserva } from '../../servicios/reservas';
import BotonesUsuario from './BotonesUsuario';

interface Props {
  reserva: Reserva;
}

const CardReserva: React.FC<Props> = ({ reserva }) => {
  const { servicio, tecnicoAsignado, fechaProgramada, horaProgramada, estado } =
    reserva;

  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  const actualizarUI = () => window.location.reload();

  const nombreTecnico =
    typeof tecnicoAsignado === 'string'
      ? 'Sin nombre'
      : tecnicoAsignado?.nombre || '—';

  const fechaFormateada = new Date(
    new Date(fechaProgramada).getTime() + 24 * 60 * 60 * 1000
  ).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const colorEstado = {
    Pendiente: '#f1c40f',
    Confirmada: '#2ecc71',
    Finalizada: '#3498db',
    Cancelada: '#e74c3c',
  }[estado ?? 'Pendiente'];

  return (
    <div className="card-reserva">
      <h4 className="reserva-servicio">{servicio.toUpperCase()}</h4>
      <p>
        <strong>Técnico:</strong> {nombreTecnico}
      </p>
      <p>
        <strong>Fecha:</strong> {fechaFormateada}
      </p>
      <p>
        <strong>hora:</strong> {horaProgramada}
      </p>

      <p>
        <strong>Estado:</strong>
        <span className="estado-reserva" style={{ color: colorEstado }}>
          {estado?.toUpperCase()}
        </span>
      </p>

      {usuario.rol === 'cliente' && (
        <BotonesUsuario
          tipoUsuario="cliente"
          reservaId={reserva._id!}
          onActualizada={actualizarUI}
          estadoActual={reserva.estado || 'Pendiente'}
        />
      )}

      {(usuario.rol === 'administrador' || usuario.rol === 'tecnico') && (
        <BotonesUsuario
          tipoUsuario="tecnico"
          reservaId={reserva._id!}
          onActualizada={actualizarUI}
          estadoActual={reserva.estado || 'Pendiente'}
        />
      )}
    </div>
  );
};

export default CardReserva;
