import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = vi.fn();

// Mock del módulo react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<any>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Header', () => {
  beforeEach(() => {
    localStorage.clear();
    mockNavigate.mockClear();
  });

  const renderWithRouter = (ui: React.ReactNode) =>
    render(<MemoryRouter>{ui}</MemoryRouter>);

  test('muestra opciones para usuarios NO autenticados', () => {
    renderWithRouter(<Header />);

    expect(screen.getByText('Ingresar')).toBeInTheDocument();
    expect(screen.getByText('Registrarse')).toBeInTheDocument();
  });

  test('muestra menú del rol cliente', () => {
    localStorage.setItem('token', 'abc123');
    localStorage.setItem('usuario', JSON.stringify({ rol: 'cliente' }));

    renderWithRouter(<Header />);

    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Mis Reservas')).toBeInTheDocument();
    expect(screen.getByText('Perfil')).toBeInTheDocument();
    expect(screen.getByText('Salir')).toBeInTheDocument();
  });

  test('muestra menú del rol tecnico', () => {
    localStorage.setItem('token', 'abc123');
    localStorage.setItem('usuario', JSON.stringify({ rol: 'tecnico' }));

    renderWithRouter(<Header />);

    expect(screen.getByText('Mis Reservas')).toBeInTheDocument();
    expect(screen.getByText('Perfil')).toBeInTheDocument();
  });

  test('muestra menú del rol asesor', () => {
    localStorage.setItem('token', 'abc123');
    localStorage.setItem('usuario', JSON.stringify({ rol: 'asesor' }));

    renderWithRouter(<Header />);

    expect(screen.getByText('Inventario')).toBeInTheDocument();
    expect(screen.getByText('Perfil')).toBeInTheDocument();
  });

  test('muestra menú del rol administrador', () => {
    localStorage.setItem('token', 'abc123');
    localStorage.setItem('usuario', JSON.stringify({ rol: 'administrador' }));

    renderWithRouter(<Header />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Usuarios')).toBeInTheDocument();
    expect(screen.getByText('Inventario')).toBeInTheDocument();
    expect(screen.getByText('Reservas')).toBeInTheDocument();
    expect(screen.getByText('Perfil')).toBeInTheDocument();
  });

  test("al hacer click en el logo navega a '/'", () => {
    renderWithRouter(<Header />);

    const logo = screen.getByRole('img');

    logo.click();

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
