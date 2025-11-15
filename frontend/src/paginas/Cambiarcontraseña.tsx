import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/cambiarcontraseña.css';
import { cambiarContraseña } from '../servicios/autenticacion';

const Cambiarcontraseña: React.FC = () => {
  const navigate = useNavigate();
  const [contraseñaNueva, setContraseñaNueva] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');

  const modificarContraseña = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (contraseñaNueva !== confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      await cambiarContraseña(contraseñaNueva);
      alert('Contraseña cambiada exitosamente');
      navigate('/perfil');
    } catch (error) {
      alert("Error al cambiar la contraseña");
    }
  };
  return (
    <form className="formulario-cambiar-contraseña">
      <label>Ingresa tu nueva contraseña</label>
      <input
        required
        value={contraseñaNueva}
        onChange={(e) => setContraseñaNueva(e.target.value)}
        type="password"
        placeholder="********"
      />
      <label>Confirma tu nueva contraseña</label>
      <input
        required
        value={confirmarContraseña}
        onChange={(e) => setConfirmarContraseña(e.target.value)}
        type="password"
        placeholder="********"
      />
      <button onClick={modificarContraseña} type="submit">
        Cambiar contraseña
      </button>
    </form>
  );
};

export default Cambiarcontraseña;
