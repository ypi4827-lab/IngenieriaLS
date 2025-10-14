import React from "react";
import "./App.css";
import Header from "./componentes/Header";
import Invitacion from "./componentes/Invitacion";
import Botones from "./componentes/Botones";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Invitacion />
      <Botones />
    </div>
  );
};

export default App;