import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BotonesUsuario from '../BotonesUsuario';
import { actualizarReserva } from '../../../servicios/reservas';

vi.mock('../../../servicios/reservas', () => ({
  actualizarReserva: vi.fn(),
}));

test("cliente solo ve el botón 'Cancelar' cuando el estado es 'Pendiente'", () => {
  render(
    <BotonesUsuario
      tipoUsuario="cliente"
      reservaId="123"
      estadoActual="Pendiente"
      onActualizada={() => {}}
    />
  );
  expect(screen.getByText('Cancelar')).toBeInTheDocument();
  expect(screen.queryByText('Confirmada')).toBeNull();
  expect(screen.queryByText('Finalizada')).toBeNull();
  expect(screen.queryByText('Cancelada')).toBeNull();
});

test('tecnico ve botones de cambio de estado correctamente', () => {
  render(
    <BotonesUsuario
      tipoUsuario="tecnico"
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
    <BotonesUsuario
      tipoUsuario="tecnico"
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

test('administrador ve botones de cambio de estado correctamente', () => {
  render(
    <BotonesUsuario
      tipoUsuario="administrador"
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