import React, { useState } from 'react';
import FormularioBase from '../componentes/comunes/FormularioBase';
import CampoTexto from '../componentes/comunes/CampoTexto';
import Boton from '../componentes/comunes/Boton';
import { solicitarRecuperacion } from '../servicios/autenticacion';

const Recuperacion: React.FC = () => {
  const [correo, setCorreo] = useState('');

  const enviar = async () => {
    if (correo.trim() === '') return alert('Ingresa un correo válido');
    const res = await solicitarRecuperacion(correo);
    alert(`Se ha enviado un enlace de recuperación a ${correo}`);
    console.log('Link de recuperación:', res.enlace);
    setCorreo('');
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
      <Boton texto="Atrás" onClick={() => window.history.back()} />
    </FormularioBase>
  );
};

export default Recuperacion;
