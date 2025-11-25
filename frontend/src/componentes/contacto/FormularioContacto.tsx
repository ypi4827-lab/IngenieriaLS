import React, { useState } from 'react';
import '../../estilos/contacto.css';

const FormularioContacto: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !correo || !mensaje) {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }

    alert(`Gracias por contactarnos, ${nombre}. Te responderemos pronto.`);
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <form className="formulario-contacto" onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre completo"
      />

      <label htmlFor='correo'>Correo electrónico</label>
      <input
        id="correo"
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="ejemplo@correo.com"
      />

      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        id="mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder="Escribe tu mensaje aquí..."
        rows={4}
      ></textarea>

      <button type="submit" className="btn-enviar">
        Enviar mensaje
      </button>
    </form>
  );
};

export default FormularioContacto;
