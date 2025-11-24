import { render, screen, fireEvent } from '@testing-library/react';
import CampoContraseña from '../CampoContraseña';

describe('CampoContraseña', () => {
  test('renderiza el label y el input', () => {
    render(<CampoContraseña label="Contraseña" value="" onChange={() => {}} />);

    expect(screen.getByText('Contraseña')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('********')).toBeInTheDocument();
  });

  test('el input inicia como type password', () => {
    render(<CampoContraseña label="Password" value="" onChange={() => {}} />);

    const input = screen.getByPlaceholderText('********');
    expect(input).toHaveAttribute('type', 'password');
  });

  test('cambia a texto cuando se hace clic en el botón de mostrar', () => {
    render(<CampoContraseña label="Password" value="" onChange={() => {}} />);

    const boton = screen.getByRole('button');
    const input = screen.getByPlaceholderText('********');

    // inicialmente es password
    expect(input).toHaveAttribute('type', 'password');

    fireEvent.click(boton);

    // debe cambiar a texto
    expect(input).toHaveAttribute('type', 'text');
  });

  test('ejecuta onChange cuando el usuario escribe', () => {
    const handleChange = vi.fn();

    render(
      <CampoContraseña label="Password" value="" onChange={handleChange} />
    );

    const input = screen.getByPlaceholderText('********');

    fireEvent.change(input, { target: { value: '123456' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
