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
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="campo">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
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
