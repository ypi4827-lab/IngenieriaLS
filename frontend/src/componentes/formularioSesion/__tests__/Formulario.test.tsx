import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Formulario from '../Formulario';
import { loginUsuario } from '../../../servicios/autenticacion';

// Mock del servicio loginUsuario
vi.mock('../../../servicios/autenticacion', () => ({
  loginUsuario: vi.fn(),
}));

// Mock de useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router-dom')>();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Formulario (Login)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.alert = vi.fn();
    localStorage.clear();
  });

  test('renderiza los campos correctamente', () => {
    render(
      <MemoryRouter>
        <Formulario />
      </MemoryRouter>
    );

    expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /iniciar sesión/i })
    ).toBeInTheDocument();
  });

  test('muestra alerta si el login falla', async () => {
    (loginUsuario as any).mockRejectedValueOnce(
      new Error('Credenciales inválidas')
    );
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Formulario />
      </MemoryRouter>
    );

    await user.type(
      screen.getByLabelText('Correo electrónico'),
      'test@test.com'
    );
    await user.type(screen.getByLabelText('Contraseña'), '123456');

    await user.click(screen.getByRole('button', { name: /iniciar sesión/i }));

    expect(window.alert).toHaveBeenCalledWith(
      'Error al iniciar sesión. Por favor, verifica tus credenciales.'
    );
  });

  test('inicia sesión correctamente y navega al perfil', async () => {
    const user = userEvent.setup();
    (loginUsuario as any).mockResolvedValueOnce({
      usuario: { nombre: 'Edgar', correo: 'test@test.com' },
    });

    render(
      <MemoryRouter>
        <Formulario />
      </MemoryRouter>
    );

    await user.type(
      screen.getByLabelText('Correo electrónico'),
      'test@test.com'
    );
    await user.type(screen.getByLabelText('Contraseña'), '123456');

    await user.click(screen.getByRole('button', { name: /iniciar sesión/i }));

    expect(loginUsuario).toHaveBeenCalledWith({
      correo: 'test@test.com',
      contraseña: '123456',
    });

    expect(localStorage.getItem('usuario')).toContain('Edgar');

    expect(window.alert).toHaveBeenCalledWith('Inicio de sesión exitoso');

    expect(mockNavigate).toHaveBeenCalledWith('/perfil');
  });
});
