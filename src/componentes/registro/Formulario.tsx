import React from "react";
import "../../estilos/FormularioRegistro.css";

const Formulario: React.FC = () => {
  return (
    <form className="formulario-registro">
      <label>Nombre completo</label>
      <input required type="text" placeholder="Tu nombre" />

      <label>Correo electrónico</label>
      <input required type="email" placeholder="tucorreo@ejemplo.com" />

      <label>Tipo de acceso</label>
      <select>
        <option value="">Selecciona una opción</option>
        <option value="administrador">Administrador</option>
        <option value="tecnico">Tecnico</option>
        <option value="asesor">Asesor</option>
      </select>      
      <label>Contraseña</label>
      <input required type="password" placeholder="********" />

      <label>Confirmar contraseña</label>
      <input required type="password" placeholder="********" />
    </form>
  );
};

export default Formulario;
