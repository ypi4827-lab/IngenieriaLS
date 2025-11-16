import React, { useEffect, useState } from 'react';
import '../estilos/gestionusuarios.css';
import TablaUsuarios from '../componentes/gestionUsuarios/TablaUsuarios';
import { actualizarUsuario, obtenerUsuarios } from '../servicios/usuarios';
import type { Usuario } from '../servicios/usuarios';

const GestionUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    obtenerUsuarios().then((data) => setUsuarios(data));
  }, []);

  const cambiarRol = async (id: string, nuevoRol: Usuario['rol']) => {
    await actualizarUsuario(id, { rol: nuevoRol });
    setUsuarios((prev) =>
      prev.map((u) => (u._id === id ? { ...u, rol: nuevoRol } : u))
    );
  };

  const cambiarEstado = async (id: string) => {
    const usuarioActual = usuarios.find((u) => u._id === id);
    if (!usuarioActual) return;

    const nuevoEstado = !usuarioActual.activo;

    await actualizarUsuario(id, { activo: nuevoEstado });

    setUsuarios((prev) =>
      prev.map((u) => (u._id === id ? { ...u, activo: nuevoEstado } : u))
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
