import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CambiarContraseña from "../CambiarContraseña";
import { cambiarContraseña } from "../../servicios/autenticacion";
import { useNavigate } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

vi.mock("../../servicios/autenticacion", () => ({
  cambiarContraseña: vi.fn(),
}));


test("muestra alert si las contraseñas no coinciden", async () => {
  const user = userEvent.setup();
  const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
  const navigate = vi.fn();
  (useNavigate as any).mockReturnValue(navigate);

  render(<CambiarContraseña />);

  const inputs = screen.getAllByPlaceholderText("********");
  await user.type(inputs[0], "1234");
  await user.type(inputs[1], "4567");

  await user.click(screen.getByRole("button", { name: /^Cambiar contraseña$/ }));

  expect(alertMock).toHaveBeenCalledWith("Las contraseñas no coinciden");
});

test("cambia contraseña y navega si todo es correcto", async () => {
  const user = userEvent.setup();
  const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

  const navigate = vi.fn();
  (useNavigate as any).mockReturnValue(navigate);
  (cambiarContraseña as any).mockResolvedValueOnce({});

  render(<CambiarContraseña />);

  const inputs = screen.getAllByPlaceholderText("********");
  await user.type(inputs[0], "abcd1234");
  await user.type(inputs[1], "abcd1234");

  await user.click(screen.getByRole("button", { name: /^Cambiar contraseña$/ }));

  expect(cambiarContraseña).toHaveBeenCalledWith("abcd1234");
  expect(alertMock).toHaveBeenCalledWith("Contraseña cambiada exitosamente");
  expect(navigate).toHaveBeenCalledWith("/perfil");
});

test("botón atrás navega correctamente", async () => {
  const user = userEvent.setup();
  const navigate = vi.fn();
  (useNavigate as any).mockReturnValue(navigate);

  render(<CambiarContraseña />);

  await user.click(screen.getByText("Atrás"));
  expect(navigate).toHaveBeenCalledWith(-1);
});
