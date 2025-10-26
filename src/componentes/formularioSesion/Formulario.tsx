import React, { useState } from 'react';
import FormularioBase from '../comunes/FormularioBase';
import CampoTexto from '../comunes/CampoTexto';
import CampoContraseña from '../comunes/CampoContraseña';
import Boton from '../comunes/Boton';

const Formulario: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const iniciarSesion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const datosUsuario = {
      usuario,
      contraseña,
    };
    localStorage.setItem(usuario, JSON.stringify(datosUsuario));
    alert('Inicio de sesión exitoso');
  };
  return (
    <FormularioBase titulo="Iniciar sesión">
      <CampoTexto
        label="Usuario"
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Ingresa tu usuario"
      />
      <CampoContraseña
        label="Contraseña"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
      />

      <Boton
        texto="Iniciar sesión"
        tipo="submit"
        classProp="btn-iniciar"
        onClick={() => iniciarSesion}
      />
    </FormularioBase>
  );
};

export default Formulario;
