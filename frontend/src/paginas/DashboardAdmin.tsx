import React, { useEffect, useState } from 'react';
import '../estilos/dashboard.css';
import TarjetaAccion from '../componentes/dashboard/TarjetaAccion';
import TarjetaMetrica from '../componentes/dashboard/TarjetaMetrica';
import { useNavigate } from 'react-router-dom';
import { obtenerUsuarios } from '../servicios/usuarios';
import { obtenerEquipos } from '../servicios/equipos';
import { obtenerReservas } from '../servicios/reservas';

const DashboardAdmin: React.FC = () => {
  const navigate = useNavigate();
  const [usuariosActivos, setUsuariosActivos] = useState(0);
  const [equiposRegistrados, setEquiposRegistrados] = useState(0);
  const [reservasEsteMes, setReservasEsteMes] = useState(0);
  const [serviciosFinalizados, setServiciosFinalizados] = useState(0);

  useEffect(() => {
    const fetchMetricas = async () => {
      try {
        const usuarios = await obtenerUsuarios();
        setUsuariosActivos(usuarios.filter((u) => u.activo).length);

        const equipos = await obtenerEquipos();
        setEquiposRegistrados(equipos.length);

        const reservas = await obtenerReservas();
        const ahora = new Date();
        const reservasMes = reservas.filter((r) => {
          const fechaReserva = new Date(r.fechaProgramada);
          return (
            fechaReserva.getMonth() === ahora.getMonth() &&
            fechaReserva.getFullYear() === ahora.getFullYear()
          );
        });
        setReservasEsteMes(reservasMes.length);

        const finalizados = reservas.filter((r) => r.estado === 'Finalizada');
        setServiciosFinalizados(finalizados.length);
      } catch (error) {
        console.error('Error al obtener métricas del dashboard:', error);
      }
    };
    fetchMetricas();
  }, []);

  const metricas = [
    {
      titulo: 'Usuarios activos',
      valor: usuariosActivos,
      icono: '👥',
      color: '#4caf50',
    },
    {
      titulo: 'Equipos registrados',
      valor: equiposRegistrados,
      icono: '🧰',
      color: '#2196f3',
    },
    {
      titulo: 'Reservas este mes',
      valor: reservasEsteMes,
      icono: '📅',
      color: '#ff9800',
    },
    {
      titulo: 'Servicios finalizados',
      valor: serviciosFinalizados,
      icono: '✅',
      color: '#9c27b0',
    },
  ];

  const acciones = [
    {
      titulo: 'Gestión de Usuarios',
      descripcion: 'Administra roles y estados de usuarios.',
      icono: '👤',
      ruta: '/gestionusuarios',
    },
    {
      titulo: 'Inventario',
      descripcion: 'Gestiona y controla equipos.',
      icono: '🧰',
      ruta: '/inventario',
    },
    {
      titulo: 'Reservas',
      descripcion: 'Consulta y administra servicios.',
      icono: '📅',
      ruta: '/misreservas',
    },
  ];

  return (
    <div className="dashboard-contenedor">
      <h2 className="dashboard-titulo">Panel del Administrador</h2>
      <p className="dashboard-descripcion">
        Revisa el estado general del sistema y accede a los módulos principales.
      </p>

      <div className="metricas-grid">
        {metricas.map((m) => (
          <TarjetaMetrica
            key={m.titulo}
            titulo={m.titulo}
            valor={m.valor}
            icono={m.icono}
            color={m.color}
          />
        ))}
      </div>

      <div className="dashboard-grid">
        {acciones.map((accion) => (
          <TarjetaAccion
            key={accion.titulo}
            icono={accion.icono}
            titulo={accion.titulo}
            descripcion={accion.descripcion}
            onClick={() => navigate(accion.ruta)}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardAdmin;
