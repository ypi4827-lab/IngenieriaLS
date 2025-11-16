import API from './api';
import type { Usuario } from './usuarios';

export const registrarUsuario = async (usuario: Usuario) => {
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

export const actualizarPerfil = async (id: string, datos: Usuario) => {
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
