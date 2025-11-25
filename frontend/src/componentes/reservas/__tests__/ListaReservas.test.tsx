import { render, screen } from '@testing-library/react';
import ListaReservas from '../ListaReservas';

vi.mock('../CardReserva', () => ({
  default: () => <div>CARD-RESERVA</div>,
}));

test('renderiza una lista de reservas', () => {
  const reservas = [
    {
      _id: '1',
      clienteId: 'cliente1',
      servicio: 'Servicio X',
      fechaProgramada: '2025-01-01',
      horaProgramada: '10:00',
    },
    {
      _id: '2',
      clienteId: 'cliente2',
      servicio: 'Servicio Y',
      fechaProgramada: '2025-01-02',
      horaProgramada: '11:00',
    },
  ];

  render(<ListaReservas reservas={reservas} />);

  const cards = screen.getAllByText('CARD-RESERVA');
  expect(cards.length).toBe(2);
});
