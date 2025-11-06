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

    // ⚙️ Aquí podrías conectar con un servicio de correo (EmailJS, API, etc.)
    alert(`Gracias por contactarnos, ${nombre}. Te responderemos pronto.`);
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <form className="formulario-contacto" onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre completo"
      />

      <label>Correo electrónico</label>
      <input
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="ejemplo@correo.com"
      />

      <label>Mensaje</label>
      <textarea
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
