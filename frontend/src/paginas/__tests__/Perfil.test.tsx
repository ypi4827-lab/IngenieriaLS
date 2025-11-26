import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Perfil from '../Perfil';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../servicios/autenticacion', () => ({
  actualizarPerfil: vi.fn().mockResolvedValue({}),
  cerrarSesion: vi.fn(),
}));

test('permite editar y guardar perfil', async () => {
  localStorage.setItem(
    'usuario',
    JSON.stringify({
      id: '10',
      nombre: 'Juan',
      correo: 'test@mail.com',
      telefono: '300',
    })
  );

  render(
    <MemoryRouter>
      <Perfil />
    </MemoryRouter>
  );

  const inputNombre = screen.getByDisplayValue('Juan');

  await userEvent.clear(inputNombre);
  await userEvent.type(inputNombre, 'NuevoNombre');

  await userEvent.click(screen.getByText('Guardar cambios'));

  expect(JSON.parse(localStorage.getItem('usuario')!).nombre).toBe(
    'NuevoNombre'
  );
});

test('botón cerrar sesión está presente', () => {
  render(
    <MemoryRouter>
      <Perfil />
    </MemoryRouter>
  );
  expect(screen.getByText('Cerrar sesión')).toBeInTheDocument();
});
