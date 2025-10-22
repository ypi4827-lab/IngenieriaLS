import React from "react";
import "../../estilos/formulariosesion.css";

const Formulario: React.FC = () => {
  return (
    <form className="formulario-login">
      <label>Usuario</label>
      <input required type="text" placeholder="Ingresa tu usuario" />

      <label>Contraseña</label>
      <input required type="password" placeholder="********" />
    </form>
  );
};

export default Formulario;
