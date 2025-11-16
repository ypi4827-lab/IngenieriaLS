import { useParams, useNavigate } from 'react-router-dom';
import { restablecerContraseña } from '../servicios/autenticacion';
import { useState } from 'react';

const RestablecerContraseña = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [contraseña1, setContraseña1] = useState('');
  const [contraseña2, setContraseña2] = useState('');

  const cambiar = async () => {
    if (contraseña1 !== contraseña2)
      return alert('Las contraseñas no coinciden');
    try {
      await restablecerContraseña(token!, contraseña1);
      alert('Contraseña cambiada correctamente');
      navigate('/ingreso');
    } catch (error) {
      alert('Token inválido o expirado');
    }
  };

  return (
    <form className="formulario-cambiar-contraseña">
      <h2>Restablecer Contraseña</h2>
      <label>Nueva contraseña</label>
      <input
        type="password"
        placeholder="Nueva contraseña"
        onChange={(e) => setContraseña1(e.target.value)}
      />
      <label>Confirmar contraseña</label>
      <input
        type="password"
        placeholder="Confirmar contraseña"
        onChange={(e) => setContraseña2(e.target.value)}
      />
      <button onClick={cambiar}>Cambiar contraseña</button>
    </form>
  );
};

export default RestablecerContraseña;
