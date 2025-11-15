import React from 'react';
import '../estilos/confirmaciones.css';
import CardConfirmacion from '../componentes/confirmaciones/CardConfirmacion';
import { useNavigate } from 'react-router-dom';

const Confirmaciones: React.FC = () => {
  const navigate = useNavigate();

  const reservaGuardada = localStorage.getItem('ultimaReserva');
  const reserva = reservaGuardada
    ? JSON.parse(reservaGuardada)
    : { servicio: '', tecnico: '', fecha: '', hora: '', estado: '' };

  return (
    <div className="confirmacion-contenedor">
      <h2 className="confirmacion-titulo">¡Reserva Confirmada!</h2>
      <CardConfirmacion reserva={reserva} />
      <div className="confirmacion-botones">
        <button className="btn-volver" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
        <button
          className="btn-misreservas"
          onClick={() => navigate('/misreservas')}
        >
          Ver mis reservas
        </button>
      </div>
    </div>
  );
};

export default Confirmaciones;
