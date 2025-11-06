import React, { useState } from "react";
import "../estilos/gestionusuarios.css";
import TablaUsuarios from "../componentes/gestionUsuarios/TablaUsuarios";

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: "cliente" | "técnico" | "asesor" | "administrador";
  activo: boolean;
}

const GestionUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { id: 1, nombre: "Carlos Ruiz", correo: "carlos@correo.com", rol: "cliente", activo: true },
    { id: 2, nombre: "María Gómez", correo: "maria@correo.com", rol: "técnico", activo: true },
    { id: 3, nombre: "Edgar López", correo: "edgar@correo.com", rol: "asesor", activo: false },
  ]);

  const cambiarRol = (id: number, nuevoRol: Usuario["rol"]) => {
    setUsuarios((prev) =>
      prev.map((u) => (u.id === id ? { ...u, rol: nuevoRol } : u))
    );
  };

  const cambiarEstado = (id: number) => {
    setUsuarios((prev) =>
      prev.map((u) => (u.id === id ? { ...u, activo: !u.activo } : u))
    );
  };

  return (
    <div className="gestionusuarios-contenedor">
      <h2 className="gestionusuarios-titulo">Gestión de Usuarios</h2>
      <TablaUsuarios
        usuarios={usuarios}
        onCambiarRol={cambiarRol}
        onCambiarEstado={cambiarEstado}
      />
    </div>
  );
};

export default GestionUsuarios;
