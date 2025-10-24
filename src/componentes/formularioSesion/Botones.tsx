import React from "react";
import "../../estilos/botonesinicio.css";
import Boton from "../comunes/Boton";

const Botones: React.FC = () => {
  return (
    <>
    <div className="botones-login">
      <Boton classProp="btn-atras" texto="Atrás" onClick={() => window.history.back()} />
    </div>
    <div className="enlace-recuperar">
      <a href="/recuperacion" className="texto-recuperar">
        ¿Olvidaste tu contraseña?
      </a>
    </div>
    </>
  );
};

export default Botones;
