import React, { useState } from 'react';
import '../../estilos/FormularioRegistro.css';

const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [tipoAcceso, setAcceso] = useState('');
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
      tipoAcceso,
      contraseña,
    };
    localStorage.setItem(nombre, JSON.stringify(nuevoUsuario));
    alert('Registro exitoso');
  };
  return (
    <form className="formulario-registro">
      <label>Nombre completo</label>
      <input
        required
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        type="text"
        placeholder="Tu nombre"
      />

      <label>Correo electrónico</label>
      <input
        required
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        type="email"
        placeholder="tucorreo@ejemplo.com"
      />

      <label>Tipo de acceso</label>
      <select
        value={tipoAcceso}
        onChange={(e) => setAcceso(e.target.value)}
        required
      >
        <option value="">Selecciona una opción</option>
        <option value="administrador">Administrador</option>
        <option value="tecnico">Tecnico</option>
        <option value="asesor">Asesor</option>
      </select>
      <label>Contraseña</label>
      <input
        required
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
        type="password"
        placeholder="********"
      />

      <label>Confirmar contraseña</label>
      <input
        required
        value={confirmarContraseña}
        onChange={(e) => setConfirmarContraseña(e.target.value)}
        type="password"
        placeholder="********"
      />
      <button onClick={registrarse} type="submit" className="btn-registrarse">
        Registrarse
      </button>
    </form>
  );
};

export default Formulario;
