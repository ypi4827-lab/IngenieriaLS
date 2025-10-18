import React from "react";
import "../estilos/IniciarSesion.css";
import ListaAcceso from "../componentes/iniciarSesion/ListaAcceso";
import Botones from "../componentes/iniciarSesion/Botones";

const IniciarSesion: React.FC = () => {
  return (
    <div className="pagina-sesion">
      <ListaAcceso />
      <Botones />
    </div>
  );
};

export default IniciarSesion;
