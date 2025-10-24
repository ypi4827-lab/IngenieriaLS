import React from "react";
import "../../estilos/campos.css";

interface Props {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CampoTexto: React.FC<Props> = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="campo">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default CampoTexto;
