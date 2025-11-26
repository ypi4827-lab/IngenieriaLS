import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../componentes/servicios/ListaServicios', () => ({
  default: () => <div>LISTA-SERVICIOS</div>,
}));

import Servicios from '../Servicios';

test('renderiza lista de servicios', () => {
  render(
    <MemoryRouter>
      <Servicios />
    </MemoryRouter>
  );

  expect(screen.getByText('Servicios')).toBeInTheDocument();
  expect(screen.getByText('LISTA-SERVICIOS')).toBeInTheDocument();
});
