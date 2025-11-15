import React from 'react';
import Boton from '../componentes/comunes/Boton';
import '../estilos/home.css';

const Home: React.FC = () => {
    const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

    if (!usuario) {
        return (
        <div className="home-container">
            <section className="hero">
            <h1>Mantenimiento y reparación profesional de equipos</h1>
            <p>
                Somos expertos en el servicio técnico de balanzas, sierras, básculas
                y equipos industriales. Programa tu servicio de manera rápida y
                segura.
            </p>

            <div className="hero-buttons">
                <Boton
                texto="Reservar Servicio"
                enlace="/ingreso"
                classProp="btn-principal"
                />
                <Boton
                texto="Ver Servicios"
                enlace="/servicios"
                classProp="btn-secundario"
                />
            </div>
            </section>

            <section className="cards-servicios">
            <h2>Nuestros Servicios</h2>

            <div className="cards-grid">
                <div className="card">
                <h3>Mantenimiento Preventivo</h3>
                <p>
                    Asegura la vida útil de tus equipos con revisiones completas.
                </p>
                </div>

                <div className="card">
                <h3>Reparación Técnica</h3>
                <p>Solución rápida y profesional a fallas y daños mecánicos.</p>
                </div>

                <div className="card">
                <h3>Instalación de Equipos</h3>
                <p>Montaje profesional de sierras, balanzas y básculas.</p>
                </div>
            </div>

            <Boton
                texto="Conocer más"
                enlace="/servicios"
                classProp="btn-principal"
            />
            </section>
        </div>
        );
    }

    if (usuario.rol === 'cliente') {
        return (
        <div className="home-container">
            <h1>Bienvenido, {usuario.nombre}</h1>
            <p>Administra tus reservas y programa nuevos servicios.</p>

            <div className="acciones-grid">
            <Boton
                texto="Reservar mantenimiento"
                enlace="/reservas"
                classProp="btn-principal"
            />
            <Boton
                texto="Mis reservas"
                enlace="/misreservas"
                classProp="btn-secundario"
            />
            </div>

            <h2 className="subtitulo">Servicios disponibles</h2>
            <div className="cards-grid">
            <div className="card">
                <h3>Mantenimiento</h3>
            </div>
            <div className="card">
                <h3>Reparación</h3>
            </div>
            </div>
        </div>
        );
    }

    if (usuario.rol === 'tecnico') {
        return (
        <div className="home-container">
            <h1>Panel Técnico</h1>
            <p>Consulta los servicios asignados y reporta avances.</p>

            <Boton
            texto="Ver mis servicios"
            enlace="/misreservas"
            classProp="btn-principal"
            />
        </div>
        );
    }

    if (usuario.rol === 'asesor') {
        return (
        <div className="home-container">
            <h1>Bienvenido, Asesor</h1>
            <p>Gestiona el inventario de equipos.</p>

            <Boton
            texto="Inventario"
            enlace="/inventario"
            classProp="btn-principal"
            />
        </div>
        );
    }

    return (
        <div className="home-container">
        <h1>Panel Administrativo</h1>
        <p>Gestiona usuarios, reservas, servicios y equipos.</p>

        <div className="acciones-grid">
            <Boton
            texto="Dashboard"
            enlace="/dashboard"
            classProp="btn-principal"
            />
            <Boton
            texto="Usuarios"
            enlace="/gestionusuarios"
            classProp="btn-secundario"
            />
            <Boton
            texto="Inventario"
            enlace="/inventario"
            classProp="btn-secundario"
            />
            <Boton texto="Reservas" enlace="/misreservas" classProp="btn-secundario" />
        </div>
        </div>
    );
};

export default Home;
