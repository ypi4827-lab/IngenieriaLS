import React from "react";
import "../estilos/Servicios.css";
import ListaServicios from "../componentes/servicios/ListaServicios";
import Botones from "../componentes/Botones";

const Servicios: React.FC = () => {
  return (
    <div className="pagina-servicios">
      <ListaServicios />
      <Botones />
    </div>
  );
};

export default Servicios;
