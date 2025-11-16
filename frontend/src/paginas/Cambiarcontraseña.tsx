import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/cambiarcontraseña.css';
import { cambiarContraseña } from '../servicios/autenticacion';
import FormularioBase from '../componentes/comunes/FormularioBase';
import CampoTexto from '../componentes/comunes/CampoTexto';
import Boton from '../componentes/comunes/BotonFormulario';

const Cambiarcontraseña: React.FC = () => {
  const navigate = useNavigate();
  const [contraseñaNueva, setContraseñaNueva] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');

  const modificarContraseña = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
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
      console.log(error);
      alert('Error al cambiar la contraseña');
    }
  };
  return (
    <FormularioBase titulo="Cambiar contraseña">
      <CampoTexto
        label="Ingresa tu nueva contraseña"
        value={contraseñaNueva}
        onChange={(e) => setContraseñaNueva(e.target.value)}
        type="password"
        placeholder="********"
      />
      <CampoTexto
        label="Confirma tu nueva contraseña"
        value={confirmarContraseña}
        onChange={(e) => setConfirmarContraseña(e.target.value)}
        type="password"
        placeholder="********"
      />
      <Boton texto="Cambiar contraseña" onClick={modificarContraseña}></Boton>
      <Boton texto="Atrás" onClick={() => navigate(-1)}></Boton>
    </FormularioBase>
  );
};

export default Cambiarcontraseña;
