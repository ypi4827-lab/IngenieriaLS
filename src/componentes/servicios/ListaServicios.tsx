import React from 'react';
import '../../estilos/ListaServicios.css';
import Boton from '../comunes/Boton';

const ListaServicios: React.FC = () => {
  return (
    <section className="lista-servicios">
      <div className="servicio">
        <p>
          <span className="icono">⚒️</span>{' '}
          <strong>Mantenimiento técnico especializado</strong>
          <br />
          Revisamos y reparamos tus equipos con precisión y rapidez.
        </p>
      </div>

      <div className="servicio">
        <p>
          <span className="icono">📦</span>{' '}
          <strong>Instalación profesional</strong>
          <br />
          Montaje en sitio de balanzas, básculas y sierras, con garantía.
        </p>
      </div>

      <div className="servicio">
        <p>
          <span className="icono">📋</span>{' '}
          <strong>Asesoría personalizada</strong>
          <br />
          Te ayudamos a elegir el equipo ideal para tus necesidades.
        </p>
      </div>

      <p className="pregunta">
        ¿Quieres conocer tarifas, disponibilidad o agendar una visita?
      </p>  
      {window.location.pathname === '/servicios' && (
        <Boton texto="Atrás" onClick={() => window.history.back()} />
      )}
    </section>
  );
};

export default ListaServicios;
