import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../estilos/header.css';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');
  const token = localStorage.getItem('token');

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/ingreso');
  };

  const renderMenu = () => {
    if (!token) {
      return (
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/ingreso">Ingresar</Link>
          <Link to="/registro">Registrarse</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      );
    }

    switch (usuario?.rol) {
      case 'cliente':
        return (
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/reservas">Reservas</Link>
            <Link to="/misreservas">Mis Reservas</Link>
            <Link to="/perfil">Perfil</Link>
            <button onClick={cerrarSesion}>Salir</button>
          </nav>
        );

      case 'tecnico':
        return (
          <nav>
            <Link to="/misreservas">Mis Reservas</Link>
            <Link to="/perfil">Perfil</Link>
            <button onClick={cerrarSesion}>Salir</button>
          </nav>
        );

      case 'asesor':
        return (
          <nav>
            <Link to="/inventario">Inventario</Link>
            <Link to="/perfil">Perfil</Link>
            <button onClick={cerrarSesion}>Salir</button>
          </nav>
        );

      case 'administrador':
        return (
          <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/gestionusuarios">Usuarios</Link>
            <Link to="/inventario">Inventario</Link>
            <Link to="/misreservas">Reservas</Link>
            <Link to="/perfil">Perfil</Link>
            <button onClick={cerrarSesion}>Salir</button>
          </nav>
        );

      default:
        return null;
    }
  };

  return (
    <header className="header">
      <img
        onClick={() => navigate('/')}
        src={logo}
        alt="Logo Ingeniería LS"
        className="logo"
      />
      {renderMenu()}
    </header>
  );
};

export default Header;
