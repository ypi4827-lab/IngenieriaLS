import React from "react";
import "../estilos/BotonesServicios.css";

const BotonesServicios: React.FC = () => {
  return (
    <div className="botones-servicios">
      <button className="btn-registrarse">Registrarse para continuar</button>
      <a className="btn-volver" href="/"><button className="btn-volver">volver al inicio</button></a>
    </div>
  );
};

export default BotonesServicios;
