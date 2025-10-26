import React from 'react';

const BotonesServicios: React.FC = () => {
  return (
    <div className="botones-servicios">
      <a className="enlace-boton" href="/registro">
        <button className="btn-registrarse">Registrarse para continuar</button>
      </a>
      <a className="enlace-boton" href="/">
        <button className="btn-atras">Volver al inicio</button>
      </a>
    </div>
  );
};

export default BotonesServicios;
