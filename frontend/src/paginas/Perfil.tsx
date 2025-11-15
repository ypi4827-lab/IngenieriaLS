import React, { useState } from 'react';
import '../estilos/perfil.css';
import Boton from '../componentes/comunes/Boton';
import { actualizarPerfil, cerrarSesion } from '../servicios/autenticacion';

const Perfil: React.FC = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  const [nombre, setNombre] = useState(usuario.nombre);
  const [correo, setCorreo] = useState(usuario.correo);
  const [telefono, setTelefono] = useState(usuario.telefono);

  const handleGuardar = async () => {
    try {
      await actualizarPerfil(usuario.id, {
        nombre,
        correo,
        telefono,
      });
      localStorage.setItem(
        'usuario',
        JSON.stringify({ ...usuario, nombre, correo, telefono })
      );
      alert('Cambios guardados exitosamente 💾');
    } catch (error) {
      alert('❌ Error al guardar cambios');
    }
  };

  return (
    <div className="perfil-container">
      <h2 className="perfil-titulo">Mi Perfil</h2>

      <div className="perfil-info">
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Correo:</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label>Telefono:</label>
        <input
          type="email"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>

      <div className="perfil-acciones">
        <Boton
          texto="Guardar cambios"
          onClick={handleGuardar}
          classProp="btn-principal"
        />
        <Boton
          texto="Cerrar sesión"
          onClick={cerrarSesion}
          enlace="/ingreso"
          classProp="btn-rojo"
        />
        <Boton texto="Cambiar Contraseña" enlace="/cambiarcontraseña"></Boton>
      </div>
    </div>
  );
};

export default Perfil;
