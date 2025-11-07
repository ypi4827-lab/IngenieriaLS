import React from 'react';
import '../../estilos/formularios.css';

interface Props {
  titulo: string;
  children: React.ReactNode;
}

const FormularioBase: React.FC<Props> = ({ titulo, children }) => (
  <form className="formulario-base">
    <h2>{titulo}</h2>
    {children}
  </form>
);

export default FormularioBase;
