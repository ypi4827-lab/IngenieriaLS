import React from 'react';
import '../estilos/header.css';
import logo from '../assets/logo.png';
import Boton from './comunes/Boton';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        onClick={() => (window.location.href = '/')}
        src={logo}
        alt="Logo Ingeniería LS"
        className="logo"
      />
      <h2>
        BIENVENIDOS <br className="header-spacing" /> A INGENIERIA LS
      </h2>
      <Boton texto="Ingresar" enlace="/registro"></Boton>
    </header>
  );
};
export default Header;
