import React from "react";
import "../../estilos/botonesinicio.css";

const Botones: React.FC = () => {
  return (
    <>
    <div className="botones-login">
      <button onClick={() => window.history.back()} className="btn-atras">Atrás</button>
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
