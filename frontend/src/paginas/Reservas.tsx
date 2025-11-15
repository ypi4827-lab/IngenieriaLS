import React, { useState } from 'react';
import '../estilos/reservas.css';
import FormularioReserva from '../componentes/reservas/FormularioReserva';
import CalendarioDisponibilidad from '../componentes/reservas/CalendarioDisponibilidad';
import { useNavigate } from 'react-router-dom';
import { crearReserva } from '../servicios/reservas';

const Reservas: React.FC = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  const [servicio, setServicio] = useState('');
  const [fechaProgramada, setFechaProgramada] = useState('');
  const [hora, setHora] = useState('');
  const [tecnico, setTecnico] = useState('');
  const navigate = useNavigate();

  const handleConfirmar = async () => {
    if (!servicio || !fechaProgramada || !hora || !tecnico) {
      return alert('Por favor completa todos los campos antes de confirmar.');
    }

    try {
      const nuevaReserva = {
        clienteId: usuario.id,
        servicio,
        tecnicoAsignado: tecnico,
        fechaProgramada,
        horaProgramada: hora,
        estado: 'pendiente',
      };

      const respuesta = await crearReserva(nuevaReserva);
      localStorage.setItem('ultimaReserva', JSON.stringify(respuesta));
      navigate('/confirmacion');
    } catch (error) {
      console.log(error);
      alert('Error al crear la reserva. Intenta nuevamente.');
    }
  };

  return (
    <div className="reserva-contenedor">
      <h2 className="reserva-titulo">Reserva tu servicio</h2>

      <FormularioReserva
        servicio={servicio}
        setServicio={setServicio}
        tecnico={tecnico}
        setTecnico={setTecnico}
      />
      <CalendarioDisponibilidad
        fechaProgramada={fechaProgramada}
        setFechaProgramada={setFechaProgramada}
        hora={hora}
        setHora={setHora}
      />
      <button className="btn-confirmar" onClick={handleConfirmar}>
        Confirmar Reserva
      </button>
    </div>
  );
};

export default Reservas;
