import { render, screen } from '@testing-library/react';
import { obtenerUsuarios } from '../../../servicios/usuarios';
import ResumenReserva from '../ResumenReserva';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../../servicios/usuarios', () => ({
  obtenerUsuarios: vi.fn(),
}));

test('muestra la información de la reserva y carga el nombre del técnico', async () => {
  (obtenerUsuarios as any).mockResolvedValue([
    { _id: 'abc', nombre: 'Pedro', rol: 'tecnico' },
  ]);

  render(
    <MemoryRouter>
      <ResumenReserva
        servicio="Reparación"
        fechaProgramada="2025-02-01"
        hora="08:00"
        tecnico="abc"
      />
    </MemoryRouter>
  );

  expect(await screen.findByText('Pedro')).toBeInTheDocument();
  expect(screen.getByText('Reparación')).toBeInTheDocument();
});
