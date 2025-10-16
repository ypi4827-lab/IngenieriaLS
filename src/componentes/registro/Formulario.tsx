import React from "react";
import "../../estilos/FormularioRegistro.css";

const Formulario: React.FC = () => {
  return (
    <form className="formulario-registro">
      <label>Nombre completo</label>
      <input type="text" placeholder="Tu nombre" />

      <label>Correo electrónico</label>
      <input type="email" placeholder="tucorreo@ejemplo.com" />

      <label>Contraseña</label>
      <input type="password" placeholder="********" />

      <label>Confirmar contraseña</label>
      <input type="password" placeholder="********" />
    </form>
  );
};

export default Formulario;
