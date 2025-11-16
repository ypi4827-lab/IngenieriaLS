import React from 'react';
import '../estilos/servicios.css';
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
