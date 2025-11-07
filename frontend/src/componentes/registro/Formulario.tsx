import React, { useState } from 'react';
import FormularioBase from '../comunes/FormularioBase';
import CampoTexto from '../comunes/CampoTexto';
import CampoContraseña from '../comunes/CampoContraseña';
import CampoTelefono from '../comunes/CampoTelefono';
import Boton from '../comunes/Boton';

const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');

  const registrarse = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (contraseña !== confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }
    const nuevoUsuario = {
      nombre,
      correo,
      telefono,
      TipoAcceso: "cliente",
      contraseña,
    };
    localStorage.setItem(nombre, JSON.stringify(nuevoUsuario));
    alert('Registro exitoso');
  };
  return (
    <FormularioBase titulo="Registro de nuevo usuario">
      <CampoTexto
        label="Nombre completo"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre"
      />
      <CampoTexto
        label="Correo electrónico"
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="tucorreo@ejemplo.com"
      />
      <CampoTelefono
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <CampoContraseña
        label="Contraseña"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
      />
      <CampoContraseña
        label="Confirmar Contraseña"
        value={confirmarContraseña}
        onChange={(e) => setConfirmarContraseña(e.target.value)}
      />

      <Boton
        onClick={() => registrarse}
        tipo="submit"
        classProp="btn-verde"
        texto="Registrarse"
      ></Boton>
    </FormularioBase>
  );
};

export default Formulario;
