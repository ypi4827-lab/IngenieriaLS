import React from "react";
import Formulario from "../componentes/formularioSesion/Formulario";
import Botones from "../componentes/formularioSesion/Botones";

const FormularioSesion: React.FC = () => {
  return (
    <div className="pagina-sesion-usuario">
      <Formulario />
      <Botones />
    </div>
  );
};

export default FormularioSesion;
