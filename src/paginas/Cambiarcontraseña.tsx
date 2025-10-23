import React, { useState } from "react";
import "../estilos/cambiarcontraseña.css";

const Cambiarcontraseña: React.FC = () => {
  const [contraseñaNueva, setContraseñaNueva] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');       

  const modificarContraseña = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (contraseñaNueva !== confirmarContraseña) {
        alert('Las contraseñas no coinciden');
        return;
    }
    alert('Contraseña cambiada exitosamente');
    window.location.href = "/"
  }
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
      <button onClick={modificarContraseña} type="submit">Cambiar contraseña</button>
    </form>
  );
};

export default Cambiarcontraseña;   
