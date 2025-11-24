import React from 'react';
import '../../estilos/botones.css';
import { Link } from 'react-router-dom';

interface Props {
  texto: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  tipo?: 'button' | 'submit' | 'reset';
  enlace?: string;
  classProp?: string;
}

const Boton: React.FC<Props> = ({
  texto,
  onClick,
  tipo = 'button',
  enlace,
  classProp,
}) => {
  const clases = `btn-general ${classProp}`.trim();
  if (enlace) {
    return (
      <Link to={enlace} className="enlace-boton">
        <button type={tipo} className={clases} onClick={onClick}>
          {texto}
        </button>
      </Link>
    );
  }
  return (
    <button
      type={tipo}
      className={clases}
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default Boton;
