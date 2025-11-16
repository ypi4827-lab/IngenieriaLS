import React, { useEffect, useState } from 'react';
import '../estilos/inventario.css';
import TablaInventario from '../componentes/inventario/TablaInventario';
import FormularioEquipo from '../componentes/inventario/FormularioEquipo';
import {
  obtenerEquipos,
  crearEquipo,
  actualizarEquipo,
  eliminarEquipo,
  type Equipo,
} from '../servicios/equipos';

const Inventario: React.FC = () => {
  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await obtenerEquipos();
        setEquipos(data);
      } catch (error) {
        console.error('Error al cargar equipos:', error);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);

  const agregarEquipo = async (eq: Equipo) => {
    const nuevo = await crearEquipo(eq);
    setEquipos((prev) => [...prev, nuevo]);
    return nuevo;
  };

  const borrarEquipo = async (id: string) => {
    try {
      await eliminarEquipo(id);
      setEquipos((prev) => prev.filter((eq) => eq._id !== id));
    } catch (error) {
      console.log(error);
      alert('Error al eliminar el equipo.');
    }
  };

  const editarEquipo = async (equipoActualizado: Equipo) => {
    if (!equipoActualizado._id) return;

    try {
      const actualizado = await actualizarEquipo(
        equipoActualizado._id,
        equipoActualizado
      );
      setEquipos((prev) =>
        prev.map((eq) => (eq._id === actualizado._id ? actualizado : eq))
      );
    } catch (error) {
      console.log(error);
      alert('Error al actualizar el equipo.');
    }
  };

  return (
    <div className="inventario-contenedor">
      <h2 className="inventario-titulo">Gestión de Inventario</h2>

      {cargando ? (
        <p>Cargando equipos...</p>
      ) : (
        <>
          <FormularioEquipo onAgregar={agregarEquipo} />
          <TablaInventario
            equipos={equipos}
            onEliminar={borrarEquipo}
            onEditar={editarEquipo}
          />
        </>
      )}
    </div>
  );
};

export default Inventario;
