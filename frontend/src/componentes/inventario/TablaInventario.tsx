import React, { useState } from 'react';
import '../../estilos/inventario.css';
import ModalEliminar from './ModalEliminar';
import ModalEditar from './ModalEditar';
import { type Equipo } from '../../servicios/equipos';

interface Props {
  equipos: Equipo[];
  onEliminar: (id: string) => void;
  onEditar: (eq: Equipo) => void;
}

const TablaInventario: React.FC<Props> = ({
  equipos,
  onEliminar,
  onEditar,
}) => {
  const [idSeleccionado, setIdSeleccionado] = useState<string | null>(null);
  const [equipoEditar, setEquipoEditar] = useState<Equipo | null>(null);

  return (
    <div className="tabla-inventario">
      {equipos.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Código</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {equipos.map((eq) => (
              <tr key={eq._id}>
                <td>{eq.nombre}</td>
                <td>{eq.codigo}</td>
                <td>{eq.marca}</td>
                <td>{eq.modelo || 'N/A'}</td>
                <td>
                  <span
                    className={`estado ${eq.estado
                      .replace(/\s/g, '-')
                      .toLowerCase()}`}
                  >
                    {eq.estado}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-editar"
                    onClick={() => setEquipoEditar(eq)}
                    title="Editar"
                  >
                    ✏️
                  </button>
                  <button
                    className="btn-eliminar"
                    onClick={() => setIdSeleccionado(eq._id ?? null)}
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mensaje-vacio">No hay equipos registrados.</p>
      )}

      {idSeleccionado && (
        <ModalEliminar
          onConfirmar={() => {
            onEliminar(idSeleccionado);
            setIdSeleccionado(null);
          }}
          onCancelar={() => setIdSeleccionado(null)}
        />
      )}

      {equipoEditar && (
        <ModalEditar
          equipo={equipoEditar}
          onConfirmar={(actualizado) => {
            onEditar(actualizado);
            setEquipoEditar(null);
          }}
          onCancelar={() => setEquipoEditar(null)}
        />
      )}
    </div>
  );
};

export default TablaInventario;
