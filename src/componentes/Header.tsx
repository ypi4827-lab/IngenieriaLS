import React from 'react';
import '../estilos/header.css';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        onClick={() => (window.location.href = '/')}
        src={logo}
        alt="Logo Ingeniería LS"
        className="logo"
      />
      <h2>Bienvenidos <br className='header-spacing' /> A INGENIERIA LS</h2>
    </header>
  );
};
export default Header;
