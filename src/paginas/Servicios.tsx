import React from 'react';
import '../estilos/Servicios.css';
import ListaServicios from '../componentes/servicios/ListaServicios';

const Servicios: React.FC = () => {
  return (
    <div className="pagina-servicios">
      <h2>Servicios</h2>
      <ListaServicios />
    </div>
  );
};

export default Servicios;
