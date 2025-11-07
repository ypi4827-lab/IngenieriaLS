import React, { useState } from "react";
import "../../estilos/gestionusuarios.css";

interface Usuario {
  id: number;
  nombre: string;
  rol: "cliente" | "técnico" | "asesor" | "administrador";
}

interface Props {
  usuario: Usuario;
  onConfirmar: (nuevoRol: Usuario["rol"]) => void;
  onCancelar: () => void;
}

const ModalEditarRol: React.FC<Props> = ({ usuario, onConfirmar, onCancelar }) => {
  const [rol, setRol] = useState<Usuario["rol"]>(usuario.rol);

  return (
    <div className="modal-overlay">
      <div className="modal-editarrol">
        <h4>Cambiar rol de {usuario.nombre}</h4>
        <select value={rol} onChange={(e) => setRol(e.target.value as Usuario["rol"])}>
          <option value="cliente">Cliente</option>
          <option value="técnico">Técnico</option>
          <option value="asesor">Asesor</option>
          <option value="administrador">Administrador</option>
        </select>
        <div className="modal-botones">
          <button className="btn-confirmar" onClick={() => onConfirmar(rol)}>Guardar</button>
          <button className="btn-cancelar" onClick={onCancelar}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditarRol;
