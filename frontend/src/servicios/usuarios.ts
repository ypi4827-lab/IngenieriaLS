import API from './api';

export interface Usuario {
  _id: string;
  nombre: string;
  correo: string;
  telefono?: string;
  rol: 'cliente' | 'tecnico' | 'asesor' | 'administrador';
  activo?: boolean;
}

export const obtenerUsuarios = async (): Promise<Usuario[]> => {
  const { data } = await API.get('/usuarios', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

export const crearUsuario = async (usuario: Usuario): Promise<Usuario> => {
  const { data } = await API.post('/usuarios', usuario, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

export const actualizarUsuario = async (id: string, usuario: Partial<Usuario>): Promise<Usuario> => {
  const { data } = await API.put(`/usuarios/${id}`, usuario, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

export const eliminarUsuario = async (id: string): Promise<void> => {
  const { data } = await API.delete(`/usuarios/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};
