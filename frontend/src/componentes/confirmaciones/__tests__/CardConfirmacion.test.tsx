import { render, screen } from '@testing-library/react';
import CardConfirmacion from '../CardConfirmacion';
import { obtenerUsuarios } from '../../../servicios/usuarios';

vi.mock('../../../servicios/usuarios', () => ({
  obtenerUsuarios: vi.fn(),
}));

describe('CardConfirmacion', () => {
  const reservaMock = {
    servicio: 'Mantenimiento eléctrico',
    tecnicoAsignado: '123abc',
    fechaProgramada: '2025-10-02',
    horaProgramada: '10:00 AM',
    estado: 'Confirmada',
  };

  test('renderiza correctamente la información de la reserva', async () => {
    (obtenerUsuarios as any).mockResolvedValue([
      {
        _id: '123abc',
        nombre: 'Juan Pérez',
        correo: 'juanperez@gmail.com',
        telefono: '3204567890',
        rol: 'tecnico',
        activo: true,
      },
    ]);

    render(<CardConfirmacion reserva={reservaMock} />);

    // Estado
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Confirmada'
    );

    // Icono
    expect(screen.getByText('✅')).toBeInTheDocument();

    // Campos
    expect(screen.getByText(/Servicio:/)).toBeInTheDocument();
    expect(screen.getByText('Mantenimiento eléctrico')).toBeInTheDocument();

    expect(screen.getByText(/Técnico asignado:/)).toBeInTheDocument();
    expect(await screen.findByText('Juan Pérez')).toBeInTheDocument();

    expect(screen.getByText(/Fecha:/)).toBeInTheDocument();
    expect(screen.getByText('2/10/2025')).toBeInTheDocument();

    expect(screen.getByText(/Hora:/)).toBeInTheDocument();
    expect(screen.getByText('10:00 AM')).toBeInTheDocument();

    // Mensaje final
    expect(
      screen.getByText(/Te enviaremos un correo con los detalles de la cita/i)
    ).toBeInTheDocument();
  });
});
