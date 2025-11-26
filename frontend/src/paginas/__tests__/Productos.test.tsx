import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../componentes/productos/ListaProductos', () => ({
  default: () => <div>LISTA-PRODUCTOS</div>,
}));

import Productos from '../Productos';

test('renderiza la lista de productos', () => {
  render(
    <MemoryRouter>
      <Productos />
    </MemoryRouter>
  );

  expect(screen.getByText('LISTA-PRODUCTOS')).toBeInTheDocument();
});
