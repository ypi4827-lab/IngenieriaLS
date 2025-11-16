import API from './api';
import type { Usuario } from './usuarios';

interface DatosRegistro {
  nombre: string;
  correo: string;
  telefono?: string;
  contraseña: string;
  rol: string;
}

export const registrarUsuario = async (usuario: DatosRegistro) => {
  const { data } = await API.post('/autenticacion/registro', usuario);
  return data;
};

export const loginUsuario = async (credenciales: {
  correo: string;
  contraseña: string;
}) => {
  const { data } = await API.post('/autenticacion/login', credenciales);
  localStorage.setItem('token', data.token);
  return data;
};

export const actualizarPerfil = async (id: string, datos: Partial<Usuario>) => {
  const { data } = await API.put(`/usuarios/${id}`, datos, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return data;
};

export const cambiarContraseña = async (nuevaContraseña: string) => {
  const { data } = await API.put(
    '/autenticacion/cambiar-contraseña',
    { nuevaContraseña },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return data;
};

export const solicitarRecuperacion = async (correo: string) => {
  const { data } = await API.post('/autenticacion/recuperar', { correo });
  return data;
};

export const restablecerContraseña = async (token: string, nuevaContraseña: string) => {
  const { data } = await API.put(`/autenticacion/restablecer/${token}`, {
    nuevaContraseña
  });
  return data;
};

export const cerrarSesion = () => {
  localStorage.removeItem('token');
};
