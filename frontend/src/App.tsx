import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Home from './paginas/Home';
import Productos from './paginas/Productos';
import Servicios from './paginas/Servicios';
import Registro from './paginas/Registro';
import IniciarSesion from './paginas/IniciarSesion';
import Recuperacion from './paginas/Recuperacion';
import Footer from './componentes/Footer';
import Cambiarcontraseña from './paginas/Cambiarcontraseña';
import Perfil from './paginas/Perfil';
import Boton from './componentes/comunes/Boton';
import Reservas from './paginas/Reservas';
import MisReservas from './paginas/MisReservas';
import Confirmaciones from './paginas/Confirmaciones';
import Inventario from './paginas/Inventario';
import GestionUsuarios from './paginas/GestionUsuarios';
import Contacto from './paginas/Contacto';
import DashboardAdmin from './paginas/DashboardAdmin';
import RutaProtegida from './paginas/RutaProtegida';
import RestablecerContraseña from './paginas/RestablecerContraseña';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/ingreso" element={<IniciarSesion />} />
        <Route path="/recuperacion" element={<Recuperacion />} />
        <Route
          path="/cambiarcontraseña"
          element={
            <RutaProtegida>
              <Cambiarcontraseña />
            </RutaProtegida>
          }
        />
        <Route
          path="/perfil"
          element={
            <RutaProtegida>
              <Perfil />
            </RutaProtegida>
          }
        />
        <Route
          path="/reservas"
          element={
            <RutaProtegida rolPermitido='cliente'>
              <Reservas />
            </RutaProtegida>
          }
        />
        <Route
          path="/misreservas"
          element={
            <RutaProtegida rolPermitido='cliente'>
              <MisReservas />
            </RutaProtegida>
          }
        />
        <Route
          path="/confirmacion"
          element={
            <RutaProtegida rolPermitido='cliente'>
              <Confirmaciones />
            </RutaProtegida>
          }
        />
        <Route
          path="/inventario"
          element={
            <RutaProtegida rolPermitido='asesor'>
              <Inventario />
            </RutaProtegida>
          }
        />
        <Route
          path="/gestionusuarios"
          element={
            <RutaProtegida rolPermitido='administrador'>
              <GestionUsuarios />
            </RutaProtegida>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RutaProtegida rolPermitido='administrador'>
              <DashboardAdmin />
            </RutaProtegida>
          }
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/recuperar/:token" element={<RestablecerContraseña />} />
        <Route
          path="*"
          element={
            <>
              <h2>Página no encontrada</h2>
              <Boton
                texto="Volver al inicio"
                enlace="/"
                classProp="btn-volver-inicio"
              />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
