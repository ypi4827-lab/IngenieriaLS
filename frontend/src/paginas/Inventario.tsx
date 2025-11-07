import React, { useState } from 'react';
import '../estilos/inventario.css';
import TablaInventario from '../componentes/inventario/TablaInventario';
import FormularioEquipo from '../componentes/inventario/FormularioEquipo';

interface Equipo {
  id: number;
  nombre: string;
  codigo: string;
  estado: 'Disponible' | 'En mantenimiento' | 'Dañado';
}

const Inventario: React.FC = () => {
  const [equipos, setEquipos] = useState<Equipo[]>([
    { id: 1, nombre: 'Multímetro', codigo: 'EQ001', estado: 'Disponible' },
    {
      id: 2,
      nombre: 'Taladro eléctrico',
      codigo: 'EQ002',
      estado: 'En mantenimiento',
    },
  ]);

  const agregarEquipo = (nuevo: Equipo) => {
    setEquipos([...equipos, { ...nuevo, id: Date.now() }]);
  };

  const eliminarEquipo = (id: number) => {
    setEquipos(equipos.filter((eq) => eq.id !== id));
  };

  const editarEquipo = (actualizado: Equipo) => {
    setEquipos((prev) =>
      prev.map((eq) => (eq.id === actualizado.id ? actualizado : eq))
    );
  };

  return (
    <div className="inventario-contenedor">
      <h2 className="inventario-titulo">Gestión de Inventario</h2>
      <FormularioEquipo onAgregar={agregarEquipo} />
      <TablaInventario
        equipos={equipos}
        onEliminar={eliminarEquipo}
        onEditar={editarEquipo}
      />
    </div>
  );
};

export default Inventario;
