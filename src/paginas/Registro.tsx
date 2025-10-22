import React from "react";
import "../estilos/Registro.css";
import BotonesSociales from "../componentes/registro/BotonesSociales";
import Formulario from "../componentes/registro/Formulario";
import Botones from "../componentes/registro/Botones";

const Registro: React.FC = () => {
  return (
    <div className="pagina-registro">
            <BotonesSociales />
      <Formulario />
      <Botones />
    </div>
  );
};

export default Registro;
