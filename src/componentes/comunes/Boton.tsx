import React from 'react';
import '../../estilos/botones.css';

interface Props {
  texto: string;
  onClick?: () => void;
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
      <a href={enlace} className="enlace-boton">
        <button type={tipo} className={clases} onClick={onClick}>
          {texto}
        </button>
      </a>
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
