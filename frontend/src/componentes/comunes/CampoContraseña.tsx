import React, { useState } from 'react';
import '../../estilos/campos.css';

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CampoContraseña: React.FC<Props> = ({ label, value, onChange }) => {
  const [mostrar, setMostrar] = useState(false);
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="campo">
      <label htmlFor={id}>{label}</label>
      <div className="contenedor-password">
        <input
          id={id}
          type={mostrar ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder="********"
          required
        />
        <button
          type="button"
          className="btn-ojito"
          onClick={() => setMostrar(!mostrar)}
        >
          {mostrar ? '🙈' : '👁️'}
        </button>
      </div>
    </div>
  );
};

export default CampoContraseña;
