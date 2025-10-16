import React from "react";
import "../../estilos/BotonesRegistro.css";

const Botones: React.FC = () => {
  return (
    <div className="botones-registro">
      <div className="fila-botones">
        <button className="btn-registrarse">Registrarse</button>
        <button className="btn-iniciar">Iniciar sesión</button>
      </div>
      <button className="btn-atras">Atrás</button>
    </div>
  );
};

export default Botones;
