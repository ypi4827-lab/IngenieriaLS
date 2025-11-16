import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaProtegida = ({
  children,
  rolPermitido,
}: {
  children: React.JSX.Element;
  rolPermitido?: string;
}) => {
  const token = localStorage.getItem('token');
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  if (!token) return <Navigate to="/ingreso" />;
  if (usuario.rol === 'admin') return children;
  if (rolPermitido && usuario.rol !== rolPermitido) return <Navigate to="/ingreso" />;

  return children;
};

export default RutaProtegida;
