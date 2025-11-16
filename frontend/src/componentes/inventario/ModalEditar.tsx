import React, { useState } from 'react';
import '../../estilos/inventario.css';
import { type Equipo } from '../../servicios/equipos';

interface Props {
  equipo: Equipo;
  onConfirmar: (equipo: Equipo) => void;
  onCancelar: () => void;
}

const ModalEditar: React.FC<Props> = ({ equipo, onConfirmar, onCancelar }) => {
  const [nombre, setNombre] = useState(equipo.nombre);
  const [marca, setMarca] = useState(equipo.marca);
  const [modelo, setModelo] = useState(equipo.modelo);
  const [estado, setEstado] = useState<Equipo['estado']>(equipo.estado);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !marca) {
      alert('Los campos nombre, código y marca son obligatorios.');
      return;
    }

    onConfirmar({
      ...equipo,
      nombre,
      marca,
      modelo,
      estado,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-eliminar modal-editar">
        <h4>Editar equipo</h4>
        <form onSubmit={handleSubmit} className="formulario-modal">
          <label>Nombre</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

          <label>Marca</label>
          <input value={marca} onChange={(e) => setMarca(e.target.value)} />

          <label>Modelo</label>
          <input value={modelo} onChange={(e) => setModelo(e.target.value)} />

          <label>Estado</label>
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value as Equipo['estado'])}
          >
            <option value="Disponible">Disponible</option>
            <option value="En mantenimiento">En mantenimiento</option>
            <option value="Dañado">Dañado</option>
          </select>

          <div className="modal-botones">
            <button type="submit" className="btn-confirmar">
              Guardar
            </button>
            <button type="button" className="btn-cancelar" onClick={onCancelar}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditar;
