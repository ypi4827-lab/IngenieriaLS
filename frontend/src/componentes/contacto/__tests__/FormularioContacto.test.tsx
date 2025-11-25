import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormularioContacto from '../FormularioContacto';

describe('FormularioContacto', () => {
  beforeAll(() => {
    // Mock de alert
    window.alert = vi.fn();
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renderiza los campos y labels correctamente', () => {
    render(<FormularioContacto />);

    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /enviar mensaje/i })
    ).toBeInTheDocument();
  });

  test('muestra una alerta si el formulario está incompleto', async () => {
    render(<FormularioContacto />);

    await userEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    expect(window.alert).toHaveBeenCalledWith(
      'Por favor, completa todos los campos antes de enviar.'
    );
  });

  test('envía el formulario cuando todos los campos están completos', async () => {
    render(<FormularioContacto />);

    await userEvent.type(screen.getByLabelText('Nombre'), 'Juan Pérez');
    await userEvent.type(screen.getByLabelText('Correo electrónico'), 'juan@example.com');
    await userEvent.type(screen.getByLabelText('Mensaje'), 'Hola, necesito información');

    await userEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    expect(window.alert).toHaveBeenCalledWith(
      'Gracias por contactarnos, Juan Pérez. Te responderemos pronto.'
    );
  });

  test('limpia los campos después de enviar', async () => {
    render(<FormularioContacto />);

    await userEvent.type(screen.getByLabelText('Nombre'), 'Ana');
    await userEvent.type(screen.getByLabelText('Correo electrónico'), 'ana@example.com');
    await userEvent.type(screen.getByLabelText('Mensaje'), 'Mensaje de prueba');

    await userEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    expect(screen.getByLabelText('Nombre')).toHaveValue('');
    expect(screen.getByLabelText('Correo electrónico')).toHaveValue('');
    expect(screen.getByLabelText('Mensaje')).toHaveValue('');
  });
});
