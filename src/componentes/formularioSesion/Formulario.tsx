import React, { useState } from 'react';
import '../../estilos/formulariosesion.css';

const Formulario: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const iniciarSesion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const datosUsuario = {
      usuario,
      contraseña,
    }
    localStorage.setItem(usuario, JSON.stringify(datosUsuario));
    alert('Inicio de sesión exitoso');
  }
  return (
    <form className="formulario-login">
      <label htmlFor="">Usuario</label>
      <input
        required
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        type="text"
        placeholder="Ingresa tu usuario"
      />

      <label>Contraseña</label>
      <input
        required
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
        type="password"
        placeholder="********"
      />
      <button onClick={iniciarSesion}  type="submit" className="btn-iniciar">Iniciar sesión</button>
    </form>
  );
};

export default Formulario;
