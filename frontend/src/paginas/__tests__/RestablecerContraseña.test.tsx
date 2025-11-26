import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../servicios/autenticacion", () => ({
  restablecerContraseña: vi.fn().mockResolvedValue(true),
}));

import { restablecerContraseña } from "../../servicios/autenticacion";
import RestablecerContraseña from "../RestablecerContraseña";

test("envía nueva contraseña cuando coinciden", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={["/restablecer/123"]}>
      <RestablecerContraseña />
    </MemoryRouter>
  );

  const pass1 = screen.getByPlaceholderText('Nueva contraseña');
  const pass2 = screen.getByPlaceholderText('Confirmar contraseña');
  const btn = screen.getByText("Cambiar contraseña");

  await user.type(pass1, "abc123");
  await user.type(pass2, "abc123");
  await user.click(btn);

  expect(restablecerContraseña).toHaveBeenCalled();
});
