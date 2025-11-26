import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaProtegida = ({
  children,
  rolesPermitidos,
}: {
  children: React.JSX.Element;
  rolesPermitidos?: string[];
}) => {
  const token = localStorage.getItem('token');
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  if (!token) return <Navigate to="/ingreso" />;
  if (!usuario?.rol) return <Navigate to="/ingreso" />;
  if (usuario.rol === 'administrador') return children;
  if (rolesPermitidos && !rolesPermitidos.includes(usuario.rol))
    return <Navigate to="/ingreso" />;

  return children;
};

export default RutaProtegida;
