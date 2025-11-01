import React from 'react';
import { Link } from 'react-router-dom';

const Botones: React.FC = () => {
  return (
    <div className="botones-sesion">
      <Link className="enlace-boton" to="/iniciarsesion">
        <button className="btn-iniciar">Iniciar sesión</button>
      </Link>
      <button onClick={() => window.history.back()} className="btn-atras">
        Atrás
      </button>
    </div>
  );
};

export default Botones;
