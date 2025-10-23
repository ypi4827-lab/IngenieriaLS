import React from 'react';
import '../../estilos/BotonesRegistro.css';

const Botones: React.FC = () => {
  return (
    <div className="botones-registro">
      <div className="fila-botones">
        <a href="/ingreso" className="enlace-boton">
          <button className="btn-iniciar">Iniciar sesión</button>
        </a>
        <button onClick={() => window.history.back()} className="btn-atras">
          Atrás
        </button>
      </div>
    </div>
  );
};

export default Botones;
