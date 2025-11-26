import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../componentes/formularioSesion/Formulario', () => ({
  default: () => <div>FORMULARIO</div>,
}));

vi.mock('../../componentes/formularioSesion/Botones', () => ({
  default: () => <div>BOTONES</div>,
}));

import IniciarSesion from '../IniciarSesion';

test('renderiza formulario y botones', () => {
  render(
    <MemoryRouter>
      <IniciarSesion />
    </MemoryRouter>
  );

  expect(screen.getByText('FORMULARIO')).toBeInTheDocument();
  expect(screen.getByText('BOTONES')).toBeInTheDocument();
});
