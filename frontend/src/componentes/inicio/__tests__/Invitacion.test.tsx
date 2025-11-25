import { render, screen } from '@testing-library/react';
import Invitacion from '../Invitacion';

test('renderiza el texto y tiene la clase invitacion', () => {
  render(<Invitacion />);

  const texto = screen.getByText(
    /TE INVITAMOS A CONOCER NUESTROS PRODUCTOS Y SERVICIOS/i
  );

  const section = texto.closest('section');

  expect(section).not.toBeNull();
  expect(section?.classList.contains('invitacion')).toBe(true);
});
