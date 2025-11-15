import React, { useEffect, useState } from 'react';
import '../../estilos/reservas.css';
import Boton from '../comunes/Boton';
import { obtenerUsuarios } from '../../servicios/usuarios';

interface Props {
  servicio: string;
  fechaProgramada: string;
  hora: string;
  tecnico: string;
}

const ResumenReserva: React.FC<Props> = ({
  servicio,
  fechaProgramada,
  hora,
  tecnico,
}) => {
  const [nombreTecnico, setNombreTecnico] = useState('');

  useEffect(() => {
    const cargarTecnico = async () => {
      const usuarios = await obtenerUsuarios();
      const encontrado = usuarios.find((u) => u._id === tecnico);
      setNombreTecnico(encontrado?.nombre || 'Técnico asignado');
    };
    cargarTecnico();
  }, [tecnico]);

  return (
    <div className="resumen-reserva">
      <h3>✅ ¡Reserva confirmada!</h3>
      <p>
        <strong>Servicio:</strong> {servicio}
      </p>
      <p>
        <strong>Técnico asignado:</strong> {nombreTecnico}
      </p>
      <p>
        <strong>Fecha:</strong> {fechaProgramada}
      </p>
      <p>
        <strong>Hora:</strong> {hora}
      </p>
      <Boton texto="Volver al inicio" enlace="/" classProp="btn-principal" />
    </div>
  );
};

export default ResumenReserva;
