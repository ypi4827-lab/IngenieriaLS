import React, { useState } from "react";
import "../../estilos/inventario.css";

interface Equipo {
  id?: number;
  nombre: string;
  codigo: string;
  estado: "Disponible" | "En mantenimiento" | "Dañado";
}

interface Props {
  onAgregar: (equipo: Equipo) => void;
}

const FormularioEquipo: React.FC<Props> = ({ onAgregar }) => {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [estado, setEstado] = useState<Equipo["estado"]>("Disponible");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !codigo) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    onAgregar({ nombre, codigo, estado });
    setNombre("");
    setCodigo("");
    setEstado("Disponible");
  };

  return (
    <form className="formulario-equipo" onSubmit={handleSubmit}>
      <label>Nombre del equipo</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ej. Multímetro"
      />

      <label>Código</label>
      <input
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        placeholder="Ej. EQ001"
      />

      <label>Estado</label>
      <select value={estado} onChange={(e) => setEstado(e.target.value as Equipo["estado"])}>
        <option value="Disponible">Disponible</option>
        <option value="En mantenimiento">En mantenimiento</option>
        <option value="Dañado">Dañado</option>
      </select>

      <button type="submit" className="btn-agregar">Agregar equipo</button>
    </form>
  );
};

export default FormularioEquipo;
