import React from "react";
import "./App.css";
import Header from "./componentes/Header";
import Home from "./paginas/Home"
import Productos from "./paginas/Productos"

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Productos />    
    </div>
  );
};

export default App;