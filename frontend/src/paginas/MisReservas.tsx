import React, { useEffect, useState } from 'react';
import '../estilos/misreservas.css';
import ListaReservas from '../componentes/reservas/ListaReservas';
import {
  obtenerReservasCliente,
  obtenerReservasTecnico,
  obtenerReservas,
  type Reserva,
} from '../servicios/reservas';

const MisReservas: React.FC = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarReservas = async () => {
      try {
        let data: Reserva[] = [];

        if (usuario.rol === 'cliente') {
          data = await obtenerReservasCliente(usuario.id);
        } else if (usuario.rol === 'tecnico') {
          data = await obtenerReservasTecnico(usuario.id);
        } else if (usuario.rol === 'administrador') {
          data = await obtenerReservas();
        }
        setReservas(data);
      } catch (error) {
        alert('Error al cargar las reservas');
      } finally {
        setCargando(false);
      }
    };
    cargarReservas();
  }, [usuario]);

  if (cargando) {
    return <p className="mensaje-cargando">Cargando reservas...</p>;
  }

  return (
    <div className="misreservas-contenedor">
      <h2 className="misreservas-titulo">Mis Reservas</h2>
      {reservas.length > 0 ? (
        <ListaReservas reservas={reservas} />
      ) : (
        <p className="mensaje-vacio">No tienes reservas registradas.</p>
      )}
    </div>
  );
};

export default MisReservas;
