import React from "react";
import "../../estilos/gestionusuarios.css";
import type { Usuario } from "../../servicios/usuarios";

interface Props {
  usuario: Usuario;
  onConfirmar: () => void;
  onCancelar: () => void;
}

const ModalConfirmarDesactivar: React.FC<Props> = ({ usuario, onConfirmar, onCancelar }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-desactivar">
        <h4>
          {usuario.activo
            ? `¿Desactivar a ${usuario.nombre}?`
            : `¿Activar a ${usuario.nombre}?`}
        </h4>
        <div className="modal-botones">
          <button className="btn-confirmar" onClick={onConfirmar}>
            Sí
          </button>
          <button className="btn-cancelar" onClick={onCancelar}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmarDesactivar;
