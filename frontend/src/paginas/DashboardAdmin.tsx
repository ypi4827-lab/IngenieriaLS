import React from 'react';
import '../estilos/dashboard.css';
import TarjetaAccion from '../componentes/dashboard/TarjetaAccion';
import TarjetaMetrica from '../componentes/dashboard/TarjetaMetrica';
import { useNavigate } from 'react-router-dom';

const DashboardAdmin: React.FC = () => {
  const navigate = useNavigate();

  // Ejemplo de métricas (pueden venir del backend)
  const metricas = [
    { titulo: 'Usuarios activos', valor: 128, icono: '👥', color: '#4caf50' },
    { titulo: 'Equipos registrados', valor: 42, icono: '🧰', color: '#2196f3' },
    { titulo: 'Reservas este mes', valor: 19, icono: '📅', color: '#ff9800' },
    {
      titulo: 'Servicios finalizados',
      valor: 11,
      icono: '✅',
      color: '#9c27b0',
    },
  ];

  // Acciones del panel
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

      {/* Sección de métricas */}
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

      {/* Sección de accesos rápidos */}
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
