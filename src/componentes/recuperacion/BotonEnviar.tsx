import React from "react";
import "../../estilos/botonenviar.css";

const BotonEnviar: React.FC = () => {
  return (
    <div className="contenedor-boton">
      <a href="/iniciarsesion" className="enlace-boton">
        <button className="btn-enviar">Enviar</button>
      </a>
      <a href="/iniciarsesion" className="enlace-boton">
        <button className="btn-atras">Atrás</button>
      </a>
    </div>
  );
};

export default BotonEnviar;
