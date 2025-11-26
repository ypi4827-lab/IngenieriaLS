import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../componentes/registro/Formulario', () => ({
  default: () => <div>FORM-REGISTRO</div>,
}));

import Registro from '../Registro';

test('renderiza formulario y botones', () => {
  render(
    <MemoryRouter>
      <Registro />
    </MemoryRouter>
  );

  expect(screen.getByText('FORM-REGISTRO')).toBeInTheDocument();
  expect(screen.getByText('Iniciar sesión')).toBeInTheDocument();
  expect(screen.getByText('Atrás')).toBeInTheDocument();
});
