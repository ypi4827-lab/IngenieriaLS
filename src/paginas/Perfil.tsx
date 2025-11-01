import React from 'react';
import { Navigate } from 'react-router-dom';

const Perfil: React.FC = () => {
  const user = localStorage.getItem('usuario');
  // if (!user) return <Navigate to="/ingreso" />;
  return <h2>Profile Page</h2>;
};

export default Perfil;
