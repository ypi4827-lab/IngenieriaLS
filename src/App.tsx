import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componentes/Header";
import Home from "./paginas/Home"
import Productos from "./paginas/Productos"
import Servicios from "./paginas/Servicios";
import Registro from "./paginas/Registro";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>    
    </div>
  );
};

export default App;