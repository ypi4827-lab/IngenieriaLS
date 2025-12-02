import React, { useEffect, useState } from 'react';
import '../../estilos/confirmaciones.css';
import { obtenerUsuarios } from '../../servicios/usuarios';

interface Reserva {
  servicio: string;
  tecnicoAsignado: string;
  fechaProgramada: string;
  horaProgramada: string;
  estado: string;
}

interface Props {
  reserva: Reserva;
}

const CardConfirmacion: React.FC<Props> = ({ reserva }) => {
  const { servicio, tecnicoAsignado, fechaProgramada, horaProgramada, estado } =
    reserva;
  const [tecnico, setTecnico] = useState('');
  useEffect(() => {
    const nombreTecnico = async () => {
      const usuarios = await obtenerUsuarios();
      const tecnico = usuarios.find((u) => u._id === tecnicoAsignado);
      if (tecnico) setTecnico(tecnico.nombre);
    };
    nombreTecnico();
  }, [tecnicoAsignado]);

  return (
    <div className="card-confirmacion">
      <div className="icono-exito">✅</div>
      <h3>{estado}</h3>
      <p>
        <strong>Servicio:</strong> {servicio}
      </p>
      <p>
        <strong>Técnico asignado:</strong> {tecnico}
      </p>
      <p>
        <strong>Fecha:</strong>{' '}
        {new Date(
          new Date(fechaProgramada).getTime() + 24 * 60 * 60 * 1000
        ).toLocaleDateString('es-CO')}
      </p>
      <p>
        <strong>Hora:</strong> {horaProgramada}
      </p>
      <p className="mensaje-final">
        Te enviaremos un correo con los detalles de la cita. ¡Gracias por
        confiar en Ingeniería LS!
      </p>
    </div>
  );
};

export default CardConfirmacion;
