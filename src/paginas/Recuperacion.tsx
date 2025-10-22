import React from "react";
import "../estilos/recuperacion.css";
import FormularioCorreo from "../componentes/recuperacion/FormularioCorreo";
import BotonEnviar from "../componentes/recuperacion/BotonEnviar";

const Recuperacion: React.FC = () => {
  return (
    <div className="pagina-recuperacion">
      <FormularioCorreo />
      <BotonEnviar />
    </div>
  );
};

export default Recuperacion;
