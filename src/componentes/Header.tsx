import React from "react";
import "../estilos/header.css";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Ingeniería LS" className="logo" />
      <h2>Bienvenidos</h2>
      <h3>a INGENIERIA LS</h3>
    </header>
  );
};
export default Header; 