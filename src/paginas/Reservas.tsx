import React, { useState } from 'react';
import '../estilos/reservas.css';
import FormularioReserva from '../componentes/reservas/FormularioReserva';
import CalendarioDisponibilidad from '../componentes/reservas/CalendarioDisponibilidad';
import ResumenReserva from '../componentes/reservas/ResumenReserva';

const Reservas: React.FC = () => {
  const [servicio, setServicio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [tecnico, setTecnico] = useState('');
  const [confirmado, setConfirmado] = useState(false);

  const handleConfirmar = () => {
    if (servicio && fecha && hora && tecnico) {
      setConfirmado(true);
    } else {
      alert('Por favor completa todos los campos antes de confirmar.');
    }
  };

  return (
    <div className="reserva-contenedor">
      <h2 className="reserva-titulo">Reserva tu servicio</h2>

      {!confirmado ? (
        <>
          <FormularioReserva
            servicio={servicio}
            setServicio={setServicio}
            tecnico={tecnico}
            setTecnico={setTecnico}
          />
          <CalendarioDisponibilidad
            fecha={fecha}
            setFecha={setFecha}
            hora={hora}
            setHora={setHora}
          />
          <button className="btn-confirmar" onClick={handleConfirmar}>
            Confirmar Reserva
          </button>
        </>
      ) : (
        <ResumenReserva
          servicio={servicio}
          fecha={fecha}
          hora={hora}
          tecnico={tecnico}
        />
      )}
    </div>
  );
};

export default Reservas;
