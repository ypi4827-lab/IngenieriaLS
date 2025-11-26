import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../servicios/autenticacion', () => ({
  solicitarRecuperacion: vi.fn().mockResolvedValue(true),
}));

import { solicitarRecuperacion } from '../../servicios/autenticacion';
import Recuperacion from '../Recuperacion';

test('permite escribir el correo y enviar solicitud', async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <Recuperacion />
    </MemoryRouter>
  );

  const input = screen.getByPlaceholderText('ejemplo@correo.com');
  await user.type(input, 'test@correo.com');

  const btn = screen.getByText('Enviar');
  await user.click(btn);

  expect(solicitarRecuperacion).toHaveBeenCalledWith('test@correo.com');
});
