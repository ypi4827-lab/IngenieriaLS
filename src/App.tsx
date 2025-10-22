import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componentes/Header";
import Home from "./paginas/Home"
import Productos from "./paginas/Productos"
import Servicios from "./paginas/Servicios";
import Registro from "./paginas/Registro";
import IniciarSesion from "./paginas/IniciarSesion";
import FormularioSesion from "./paginas/FormularioSesion";
import Recuperacion from "./paginas/Recuperacion";

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
        <Route path="/iniciarsesion" element={<FormularioSesion />} />
        <Route path="/recuperacion" element={<Recuperacion />} />
      </Routes>    
    </div>
  );
};

export default App;