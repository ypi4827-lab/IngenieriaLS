import React from "react";
import "../../estilos/formulariocorreo.css";

const FormularioCorreo: React.FC = () => {
  return (
    <form className="formulario-correo">
      <label>Ingresa tu correo electrónico</label>
      <input required type="email" placeholder="ejemplo@correo.com" />
    </form>
  );
};

export default FormularioCorreo;
