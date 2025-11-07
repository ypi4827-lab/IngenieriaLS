// src/componentes/inventario/ModalEditar.tsx
import React, { useState, useEffect } from "react";
import "../../estilos/inventario.css";

interface Equipo {
  id: number;
  nombre: string;
  codigo: string;
  estado: "Disponible" | "En mantenimiento" | "Dañado";
}

interface Props {
  equipo: Equipo;
  onConfirmar: (equipo: Equipo) => void;
  onCancelar: () => void;
}

const ModalEditar: React.FC<Props> = ({ equipo, onConfirmar, onCancelar }) => {
  const [nombre, setNombre] = useState(equipo.nombre);
  const [codigo, setCodigo] = useState(equipo.codigo);
  const [estado, setEstado] = useState<Equipo["estado"]>(equipo.estado);

  useEffect(() => {
    setNombre(equipo.nombre);
    setCodigo(equipo.codigo);
    setEstado(equipo.estado);
  }, [equipo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmar({ ...equipo, nombre, codigo, estado });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-eliminar modal-editar">
        <h4>Editar equipo</h4>
        <form onSubmit={handleSubmit} className="formulario-modal">
          <label>Nombre</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

          <label>Código</label>
          <input value={codigo} onChange={(e) => setCodigo(e.target.value)} />

          <label>Estado</label>
          <select value={estado} onChange={(e) => setEstado(e.target.value as Equipo["estado"])}>
            <option value="Disponible">Disponible</option>
            <option value="En mantenimiento">En mantenimiento</option>
            <option value="Dañado">Dañado</option>
          </select>

          <div className="modal-botones">
            <button type="submit" className="btn-confirmar">Guardar</button>
            <button type="button" className="btn-cancelar" onClick={onCancelar}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditar;
