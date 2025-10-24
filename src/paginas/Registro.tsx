import React from 'react';
import '../estilos/Registro.css';
import BotonesSociales from '../componentes/registro/BotonesSociales';
import Formulario from '../componentes/registro/Formulario';
import Boton from '../componentes/comunes/Boton';

const Registro: React.FC = () => {
  return (
    <div className="pagina-registro">
      <BotonesSociales />
      <Formulario /> 
      <div className="botones-registro">
        <div className="fila-botones">
          <Boton
            enlace="/ingreso"
            texto="Iniciar sesión"
            classProp="btn-iniciar"
          />
          <Boton
            texto="Atrás"
            onClick={() => window.history.back()}
            classProp="btn-verde"
          />
        </div>
      </div>
    </div>
  );
};

export default Registro;
