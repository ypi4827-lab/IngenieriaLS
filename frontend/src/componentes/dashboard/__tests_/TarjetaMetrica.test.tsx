import { render, screen } from '@testing-library/react';
import TarjetaMetrica from '../TarjetaMetrica';

describe('TarjetaMetrica', () => {
  test('renderiza icono, título y valor', () => {
    render(
      <TarjetaMetrica icono="📈" titulo="Ventas" valor={150} color="#00ff00" />
    );

    expect(screen.getByText('📈')).toBeInTheDocument();
    expect(screen.getByText('Ventas')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
  });

  test('aplica el color correctamente en el borde izquierdo', () => {
    const { container } = render(
      <TarjetaMetrica icono="📊" titulo="Ingresos" valor={500} color="red" />
    );

    const tarjeta = container.querySelector('.tarjeta-metrica') as HTMLElement;
    expect(tarjeta.style.borderLeft).toBe('6px solid red');
  });

  test('el icono tiene aplicado el color', () => {
    const { container } = render(
      <TarjetaMetrica icono="⭐" titulo="Calificación" valor={5} color="blue" />
    );

    const icono = container.querySelector(
      '.tarjeta-metrica-icono'
    ) as HTMLElement;

    expect(icono.style.color).toBe('blue');
  });
});
