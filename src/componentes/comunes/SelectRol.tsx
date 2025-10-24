import React from "react";
import "../../estilos/campos.css";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectRol: React.FC<Props> = ({ value, onChange }) => (
  <div className="campo">
    <label>Tipo de usuario</label>
    <select value={value} onChange={onChange}>
      <option value="">Selecciona una opción</option>
      <option value="administrador">Administrador</option>
      <option value="tecnico">Técnico</option>
      <option value="asesor">Asesor</option>
    </select>
  </div>
);

export default SelectRol;
