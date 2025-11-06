import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/header.css';
import logo from '../assets/logo.png';
import Boton from './comunes/Boton';

const Header: React.FC = () => {
  const user = localStorage.getItem('usuario');
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        onClick={() => navigate('/')}
        src={logo}
        alt="Logo Ingeniería LS"
        className="logo"
      />
      <h2>
        BIENVENIDOS <br className="header-spacing" /> A INGENIERIA LS
      </h2>
      {!user && <Boton texto="Ingresar" enlace="/registro"></Boton>}
    </header>
  );
};
export default Header;
