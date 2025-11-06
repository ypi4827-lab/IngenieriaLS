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
        <Route path="/cambiarcontraseña" element={<Cambiarcontraseña />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/misreservas" element={<MisReservas />} />
        <Route path="/confirmacion" element={<Confirmaciones />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/gestionusuarios" element={<GestionUsuarios />} />
        <Route path="/contacto" element={<Contacto />} />
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
