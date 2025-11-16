import React, { useState } from 'react';
import FormularioBase from '../componentes/comunes/FormularioBase';
import CampoTexto from '../componentes/comunes/CampoTexto';
import Boton from '../componentes/comunes/Boton';
import { solicitarRecuperacion } from '../servicios/autenticacion';
import { useNavigate } from 'react-router-dom';

const Recuperacion: React.FC = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');

  const enviar = async () => {
    if (correo.trim() === '') return alert('Ingresa un correo válido');

    try {
      await solicitarRecuperacion(correo);
      alert(`Se ha enviado un enlace de recuperación a ${correo}`);
      setCorreo('');
    } catch (error) {
      alert('No se pudo enviar el correo. Intenta nuevamente.');
      console.error(error);
    }
  };

  return (
    <FormularioBase titulo="Recuperación de contraseña">
      <CampoTexto
        label="Correo electrónico"
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="ejemplo@correo.com"
      />
      <Boton classProp="btn-recuperacion" texto="Enviar" onClick={enviar} />
      <Boton texto="Atrás" onClick={() => navigate(-1)} />
    </FormularioBase>
  );
};

export default Recuperacion;
