import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  test('renderiza el año actual y el texto correcto', () => {
    render(<Footer />);

    const year = new Date().getFullYear();
    const texto = screen.getByText(
      `© ${year} Ingeniería LS. Todos los derechos reservados.`,
      { exact: false }
    );

    expect(texto).toBeInTheDocument();
  });

  test('tiene la clase CSS correcta', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');

    expect(footer).toHaveClass('footer');
  });
});
