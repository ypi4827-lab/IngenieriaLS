import React, { useState } from "react";
import FormularioBase from "../componentes/comunes/FormularioBase";
import CampoTexto from "../componentes/comunes/CampoTexto";
import Boton from "../componentes/comunes/Boton";

const Recuperacion: React.FC = () => {
  const [correo, setCorreo] = useState("");

  const enviar = () => {
    if (correo.trim() === "") return alert("Ingresa un correo válido");
    alert(`Se ha enviado un enlace de recuperación a ${correo}`);
    setCorreo("");
  };

  return (
    <FormularioBase titulo="Recuperación de contraseña">
      <CampoTexto
        label="Correo electrónico"
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="ejemplo@correo.com"
      />
      <Boton classProp="btn-recuperacion" texto="Enviar" onClick={enviar} />
    </FormularioBase>
  );
};

export default Recuperacion;
