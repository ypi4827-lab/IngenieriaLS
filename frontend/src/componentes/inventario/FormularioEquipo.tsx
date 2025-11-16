import React, { useState } from 'react';
import '../../estilos/inventario.css';
import { type Equipo } from '../../servicios/equipos';

interface Props {
  onAgregar: (equipo: Equipo) => void;
}

const FormularioEquipo: React.FC<Props> = ({ onAgregar }) => {
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [estado, setEstado] = useState<Equipo['estado']>('Disponible');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !marca) {
      alert('Los campos nombre, código y marca son obligatorios.');
      return;
    }
    try {
      await onAgregar({ nombre, marca, modelo, estado });
      setNombre('');
      setMarca('');
      setModelo('');
      setEstado('Disponible');
      alert('Equipo agregado exitosamente.');
    } catch (error) {
      alert('Error al agregar el equipo.');
    }
  };

  return (
    <form className="formulario-equipo" onSubmit={handleSubmit}>
      <label>Nombre del equipo</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ej. Multímetro Digital"
      />

      <label>Marca</label>
      <input
        type="text"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
        placeholder="Ej. Fluke"
      />

      <label>Modelo (opcional)</label>
      <input
        type="text"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        placeholder="Ej. 117C"
      />

      <label>Estado</label>
      <select
        value={estado}
        onChange={(e) => setEstado(e.target.value as Equipo['estado'])}
      >
        <option value="Disponible">Disponible</option>
        <option value="En mantenimiento">En mantenimiento</option>
        <option value="Dañado">Dañado</option>
      </select>

      <button type="submit" className="btn-agregar">
        Agregar equipo
      </button>
    </form>
  );
};

export default FormularioEquipo;
