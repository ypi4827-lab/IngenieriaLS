import { render, screen } from '@testing-library/react';
import CardReserva from '../CardReserva';

vi.stubGlobal('localStorage', {
  getItem: () => JSON.stringify({ rol: 'tecnico' }),
  setItem: vi.fn(),
  removeItem: vi.fn(),
});

vi.mock('../BotonesUsuario', () => ({
  default: () => <div>BOTONES-TECNICO</div>,
}));

test('muestra datos de la reserva y BotonesUsuario si es técnico', () => {
  const reserva = {
    _id: '1',
    clienteId: '2',
    servicio: 'Reparación',
    tecnicoAsignado: {
      nombre: 'Juan',
      correo: 'juan@example.com',
      rol: 'tecnico' as const,
    },
    fechaProgramada: '2025-01-10',
    horaProgramada: '10:00',
    estado: 'Pendiente',
  };

  render(<CardReserva reserva={reserva} />);

  expect(screen.getByText('REPARACIÓN')).toBeInTheDocument();
  expect(screen.getByText('Juan')).toBeInTheDocument();
  expect(screen.getByText('10:00')).toBeInTheDocument();
  expect(screen.getByText('PENDIENTE')).toBeInTheDocument();
  expect(screen.getByText('BOTONES-TECNICO')).toBeInTheDocument();
});
