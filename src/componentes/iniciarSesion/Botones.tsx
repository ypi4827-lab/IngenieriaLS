import React from "react";

const Botones: React.FC = () => {
  return (
    <div className="botones-sesion">
      <a className="enlace-boton" href="/iniciarsesion"><button className="btn-iniciar">Iniciar sesión</button></a>
      <button onClick={() => window.history.back()} className="btn-atras">Atrás</button>
    </div>
  );
};

export default Botones;
