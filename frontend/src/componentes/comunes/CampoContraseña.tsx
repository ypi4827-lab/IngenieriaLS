import React, { useState } from "react";
import "../../estilos/campos.css";

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CampoContraseña: React.FC<Props> = ({ label, value, onChange }) => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="campo">
      <label>{label}</label>
      <div className="contenedor-password">
        <input
          type={mostrar ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder="********"
          required
        />
        <button type="button" className="btn-ojito" onClick={() => setMostrar(!mostrar)}>
          {mostrar ? "🙈" : "👁️"}
        </button>
      </div>
    </div>
  );
};

export default CampoContraseña;
