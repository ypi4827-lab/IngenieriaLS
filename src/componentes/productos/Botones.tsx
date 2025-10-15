import React from "react";
import "../estilos/Botones.css";

const Botones: React.FC = () => {
  return (
    <div className="botones">
      <p className="texto-vermas">¿Quieres ver más?</p>
      <button className="btn-registrarse">🔒 Registrarse para continuar</button>
      <button className="btn-atras">Atrás</button>
    </div>
  );
};

export default Botones;