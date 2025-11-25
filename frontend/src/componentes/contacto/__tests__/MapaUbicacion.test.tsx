import { render, screen } from '@testing-library/react';
import MapaUbicacion from '../MapaUbicacion';

describe('MapaUbicacion', () => {
  test('renderiza el iframe con el título correcto', () => {
    render(<MapaUbicacion />);

    const iframe = screen.getByTitle('Ubicación Ingeniería LS - Cali');
    expect(iframe).toBeInTheDocument();
    expect(iframe.tagName).toBe('IFRAME');
  });
});
