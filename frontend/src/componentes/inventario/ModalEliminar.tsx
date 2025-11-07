import React from "react";
import "../../estilos/inventario.css";

interface Props {
  onConfirmar: () => void;
  onCancelar: () => void;
}

const ModalEliminar: React.FC<Props> = ({ onConfirmar, onCancelar }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-eliminar">
        <h4>¿Seguro que deseas eliminar este equipo?</h4>
        <div className="modal-botones">
          <button className="btn-confirmar" onClick={onConfirmar}>
            Sí, eliminar
          </button>
          <button className="btn-cancelar" onClick={onCancelar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEliminar;
