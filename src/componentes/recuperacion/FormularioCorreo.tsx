import React, { useState } from 'react';
import '../../estilos/formulariocorreo.css';

const FormularioCorreo: React.FC = () => {
  const [email, setEmail] = useState('');
  return (
    <form className="formulario-correo">
      <label>Ingresa tu correo electrónico</label>
      <input 
        required 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        type="email" 
        placeholder="ejemplo@correo.com" />
    </form>
  );
};

export default FormularioCorreo;
