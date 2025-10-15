import React from "react";
import "../../estilos/Encabezado.css";
import logo from "../../assets/logo.png";

const Encabezado: React.FC = () => {
  return (
    <header className="encabezado">
      <img src={logo} alt="Logo Ingeniería LS" className="logo" />
      <h2>¡Bienvenido!</h2>
      <p>Te invitamos a conocer algunos de nuestros productos.</p>
    </header>
  );
};

export default Encabezado;