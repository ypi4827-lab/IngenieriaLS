import React from 'react';
import '../../estilos/campos.css';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CampoTelefono: React.FC<Props> = ({ value, onChange }) => (
  <div className="campo">
    <label>Número de Telefono:</label>
    <input
      type="tel"
      value={value}
      onChange={onChange}
      placeholder="+57 3204567890"
      required
    />
  </div>
);

export default CampoTelefono;
