import React from "react";
import "../../estilos/BotonesRegistro.css";

const Botones: React.FC = () => {
  return (
    <div className="botones-registro">
      <div className="fila-botones">
        <button className="btn-registrarse">Registrarse</button>
        <a href="/ingreso" className="enlace-boton"><button className="btn-iniciar">Iniciar sesión</button></a>
      </div>
      <button onClick={() => window.history.back()} className="btn-atras">Atrás</button>
    </div>
  );
};

export default Botones;
