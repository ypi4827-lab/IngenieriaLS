import React from "react";
import "../estilos/iniciarsesion.css"
import Formulario from "../componentes/formularioSesion/Formulario";
import Botones from "../componentes/formularioSesion/Botones";

const IniciarSesion: React.FC = () => {
  return (
    <div className="pagina-sesion-usuario">
      <Formulario />
      <Botones />
    </div>
  );
};

export default IniciarSesion;
