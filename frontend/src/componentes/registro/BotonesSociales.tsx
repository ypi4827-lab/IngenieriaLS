import React from "react";
import "../../estilos/BotonesSociales.css";
import googleLogo from "../../assets/google.png";
import facebookLogo from "../../assets/facebook.png";

const BotonesSociales: React.FC = () => {
  return (
    <div className="botones-sociales">
      <button className="btn-google">
        <img src={googleLogo} alt="Google" className="icono" />
        Continuar con Google
      </button>

      <button className="btn-facebook">
        <img src={facebookLogo} alt="Facebook" className="icono" />
        Continuar con Facebook
      </button>
    </div>
  );
};

export default BotonesSociales;
