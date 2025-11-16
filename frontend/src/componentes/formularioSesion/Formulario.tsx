import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormularioBase from '../comunes/FormularioBase';
import CampoTexto from '../comunes/CampoTexto';
import CampoContraseña from '../comunes/CampoContraseña';
import Boton from '../comunes/BotonFormulario';
import { loginUsuario } from '../../servicios/autenticacion';

const Formulario: React.FC = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const iniciarSesion = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const datosUsuario = {
      correo,
      contraseña,
    };
    try {
      const data = await loginUsuario(datosUsuario);
      localStorage.setItem('usuario', JSON.stringify(data.usuario));
      alert('Inicio de sesión exitoso');
      setCorreo('');
      setContraseña('');
      navigate('/perfil');
    } catch (error) {
      alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
    }
  };
  return (
    <FormularioBase titulo="Iniciar sesión">
      <CampoTexto
        label="Correo electrónico"
        type="text"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="Ingresa tu correo"
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
        onClick={iniciarSesion}
      />
    </FormularioBase>
  );
};

export default Formulario;
