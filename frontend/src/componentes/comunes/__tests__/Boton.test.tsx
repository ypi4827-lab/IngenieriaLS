import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Boton from '../Boton';

describe('Boton', () => {
  test('renderiza el texto correctamente', () => {
    render(<Boton texto="Click aquí" />);
    expect(screen.getByText('Click aquí')).toBeInTheDocument();
  });

  test('ejecuta onClick cuando no hay enlace', async () => {
    const fn = vi.fn();
    const user = userEvent.setup();

    render(<Boton texto="Presionar" onClick={fn} />);

    await user.click(screen.getByText('Presionar'));

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('renderiza como Link cuando tiene enlace', () => {
    render(
      <MemoryRouter>
        <Boton texto="Ir" enlace="/login" />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/login');
  });

  test('usa el tipo de botón correcto', () => {
    render(<Boton texto="Guardar" tipo="submit" />);

    const boton = screen.getByRole('button');
    expect(boton).toHaveAttribute('type', 'submit');
  });

  test('agrega clases personalizadas correctamente', () => {
    render(<Boton texto="Hola" classProp="btn-rojo" />);

    const boton = screen.getByRole('button');
    expect(boton).toHaveClass('btn-general');
    expect(boton).toHaveClass('btn-rojo');
  });
});
