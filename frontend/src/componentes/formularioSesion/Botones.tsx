import React from "react";
import "../../estilos/botonesinicio.css";
import Boton from "../comunes/Boton";
import { Link } from "react-router-dom";

const Botones: React.FC = () => {
  return (
    <>
    <div className="botones-login">
      <Boton classProp="btn-atras" texto="Atrás" onClick={() => window.history.back()} />
    </div>
    <div className="enlace-recuperar">
      <Link to="/recuperacion" className="texto-recuperar">
        ¿Olvidaste tu contraseña?
      </Link>
    </div>
    </>
  );
};

export default Botones;
