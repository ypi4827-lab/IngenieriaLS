import React, { useState } from "react";
import "../../estilos/gestionusuarios.css";
import ModalEditarRol from "./ModalEditarRol";
import ModalConfirmarDesactivar from "./ModalConfirmarDesactivar";

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: "cliente" | "técnico" | "asesor" | "administrador";
  activo: boolean;
}

interface Props {
  usuarios: Usuario[];
  onCambiarRol: (id: number, nuevoRol: Usuario["rol"]) => void;
  onCambiarEstado: (id: number) => void;
}

const TablaUsuarios: React.FC<Props> = ({ usuarios, onCambiarRol, onCambiarEstado }) => {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<Usuario | null>(null);
  const [usuarioDesactivar, setUsuarioDesactivar] = useState<Usuario | null>(null);

  return (
    <div className="tabla-usuarios">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.nombre}</td>
              <td>{u.correo}</td>
              <td>{u.rol}</td>
              <td>
                <span className={`estado ${u.activo ? "activo" : "inactivo"}`}>
                  {u.activo ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td className="acciones-td">
                <button title="Editar" className="btn-editar" onClick={() => setUsuarioSeleccionado(u)}>✏️</button>
                <button title="Activar/Desactivar" className="btn-eliminar" onClick={() => setUsuarioDesactivar(u)}>
                  {u.activo ? "❌" : "✅"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {usuarioSeleccionado && (
        <ModalEditarRol
          usuario={usuarioSeleccionado}
          onConfirmar={(nuevoRol) => {
            onCambiarRol(usuarioSeleccionado.id, nuevoRol);
            setUsuarioSeleccionado(null);
          }}
          onCancelar={() => setUsuarioSeleccionado(null)}
        />
      )}

      {usuarioDesactivar && (
        <ModalConfirmarDesactivar
          usuario={usuarioDesactivar}
          onConfirmar={() => {
            onCambiarEstado(usuarioDesactivar.id);
            setUsuarioDesactivar(null);
          }}
          onCancelar={() => setUsuarioDesactivar(null)}
        />
      )}
    </div>
  );
};

export default TablaUsuarios;
