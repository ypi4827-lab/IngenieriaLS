import React, { useEffect, useState } from 'react';
import '../../estilos/reservas.css';
import { obtenerUsuarios, type Usuario } from '../../servicios/usuarios';

interface Props {
  servicio: string;
  setServicio: (value: string) => void;
  tecnico: string;
  setTecnico: (value: string) => void;
}

const FormularioReserva: React.FC<Props> = ({
  servicio,
  setServicio,
  tecnico,
  setTecnico,
}) => {
  const [tecnicos, setTecnicos] = useState<Usuario[]>([]);
  useEffect(() => {
    const cargarTecnicos = async () => {
      try {
        const usuarios = await obtenerUsuarios();
        const listaTecnicos = usuarios.filter((u) => u.rol === 'tecnico');
        setTecnicos(listaTecnicos);
      } catch (error) {}
    };
    cargarTecnicos();
  }, []);
  return (
    <div className="formulario-reserva">
      <label>Tipo de Servicio</label>
      <select value={servicio} onChange={(e) => setServicio(e.target.value)}>
        <option value="">Selecciona un servicio</option>
        <option value="Mantenimiento">Mantenimiento</option>
        <option value="Reparación">Reparación</option>
        <option value="Instalación">Instalación</option>
      </select>

      <label>Técnico Disponible</label>
      <select value={tecnico} onChange={(e) => setTecnico(e.target.value)}>
        <option value="">Selecciona un técnico</option>
        {tecnicos.length === 0 ? (
          <option disabled>No hay técnicos disponibles</option>
        ) : (
          tecnicos.map((t) => (
            <option key={t._id} value={t._id}>
              {t.nombre}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default FormularioReserva;
