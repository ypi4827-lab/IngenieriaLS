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
  const { servicio, tecnicoAsignado, fechaProgramada, horaProgramada, estado } = reserva;
  const [tecnico, setTecnico] = useState('');
  useEffect(() => {
    const nombreTecnico = async () => {
      const usuarios = await obtenerUsuarios();
      const tecnico = usuarios.filter((u) => u._id === tecnicoAsignado);
      setTecnico(tecnico[0].nombre);
    };
    nombreTecnico();
  }, []);

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
        <strong>Fecha:</strong> {fechaProgramada}
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
