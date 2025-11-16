import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../estilos/listaservicios.css';
import Boton from '../comunes/Boton';

const ListaServicios: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

  const renderCTA = () => {
    if (!usuario) {
      return (
        <>
          <p className="pregunta">¿Quieres solicitar un servicio técnico?</p>
          <div className="cta-servicios">
            <Boton
              texto="Crear cuenta"
              enlace="/registro"
              classProp="btn-principal"
            />
            <Boton
              texto="Iniciar sesión"
              enlace="/ingreso"
              classProp="btn-secundario"
            />
          </div>
        </>
      );
    }

    if (usuario.rol === 'cliente') {
      return (
        <>
          <p className="pregunta">
            ¿Listo para agendar tu mantenimiento o reparación?
          </p>
          <Boton
            texto="Reservar servicio"
            enlace="/reservas"
            classProp="btn-principal"
          />
        </>
      );
    }

    return null;
  };

  return (
    <section className="lista-servicios">
      <div className="servicio">
        <p>
          <span className="icono">⚒️</span>{' '}
          <strong>Mantenimiento técnico especializado</strong>
          <br />
          Diagnóstico y mantenimiento preventivo y correctivo para asegurar el
          funcionamiento óptimo de tus equipos
        </p>
      </div>

      <div className="servicio">
        <p>
          <span className="icono">📦</span>{' '}
          <strong>Instalación profesional</strong>
          <br />
          Instalación certificada de balanzas, básculas y sierras, garantizando
          calibración correcta y funcionamiento seguro.
        </p>
      </div>

      <div className="servicio">
        <p>
          <span className="icono">📋</span>{' '}
          <strong>Asesoría personalizada</strong>
          <br />
          Acompañamiento experto para seleccionar el equipo adecuado según tu
          industria y volumen de trabajo.
        </p>
      </div>

      {renderCTA()}

      {location.pathname === '/servicios' && (
        <Boton texto="Atrás" onClick={() => navigate(-1)} />
      )}
    </section>
  );
};

export default ListaServicios;
