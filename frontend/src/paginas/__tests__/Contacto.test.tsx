import { render, screen } from '@testing-library/react';
import Contacto from '../Contacto';

vi.mock('../componentes/contacto/FormularioContacto', () => ({
  __esModule: true,
  default: () => <div>FormularioContacto</div>,
}));

vi.mock('../componentes/contacto/MapaUbicacion', () => ({
  __esModule: true,
  default: () => <div>MapaUbicacion</div>,
}));

test('renderiza título y descripción', () => {
  render(<Contacto />);

  expect(screen.getByText('Contáctanos')).toBeInTheDocument();
  expect(
    screen.getByText(
      'Si tienes dudas, comentarios o necesitas asistencia técnica, completa el formulario o visítanos en nuestras instalaciones.'
    )
  ).toBeInTheDocument();
  expect(screen.getByText('Ubicación')).toBeInTheDocument();
});
