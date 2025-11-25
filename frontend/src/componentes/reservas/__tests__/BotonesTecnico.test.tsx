import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BotonesTecnico from '../BotonesTecnico';
import { actualizarReserva } from '../../../servicios/reservas';

vi.mock('../../../servicios/reservas', () => ({
  actualizarReserva: vi.fn(),
}));

test('muestra los botones de cambio de estado correctamente', () => {
  render(
    <BotonesTecnico
      reservaId="123"
      estadoActual="Pendiente"
      onActualizada={() => {}}
    />
  );

  expect(screen.queryByText('Pendiente')).toBeNull();
  expect(screen.getByText('Confirmada')).toBeInTheDocument();
  expect(screen.getByText('Finalizada')).toBeInTheDocument();
  expect(screen.getByText('Cancelada')).toBeInTheDocument();
});

test('ejecuta actualizarReserva al hacer clic en un botón', async () => {
  const user = userEvent.setup();
  const onActualizada = vi.fn();

  render(
    <BotonesTecnico
      reservaId="123"
      estadoActual="Pendiente"
      onActualizada={onActualizada}
    />
  );

  await user.click(screen.getByText('Confirmada'));

  expect(actualizarReserva).toHaveBeenCalledWith('123', {
    estado: 'Confirmada',
  });
  expect(onActualizada).toHaveBeenCalled();
});
