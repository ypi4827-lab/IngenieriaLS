import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormularioEquipo from "../FormularioEquipo";

test("muestra alerta si falta nombre o marca", async () => {
  const user = userEvent.setup();
  const mockAgregar = vi.fn();

  vi.spyOn(window, "alert").mockImplementation(() => {});

  render(<FormularioEquipo onAgregar={mockAgregar} />);

  const btn = screen.getByRole("button", { name: /agregar equipo/i });
  await user.click(btn);

  expect(window.alert).toHaveBeenCalledWith(
    "Los campos nombre, código y marca son obligatorios."
  );
  expect(mockAgregar).not.toHaveBeenCalled();
});

test("envía datos correctamente y limpia los campos", async () => {
  const user = userEvent.setup();
  const mockAgregar = vi.fn().mockResolvedValue(undefined);

  vi.spyOn(window, "alert").mockImplementation(() => {});

  render(<FormularioEquipo onAgregar={mockAgregar} />);

  await user.type(screen.getByPlaceholderText(/multímetro/i), "Tester");
  await user.type(screen.getByPlaceholderText(/fluke/i), "MarcaX");
  await user.type(screen.getByPlaceholderText(/117c/i), "M123");

  await user.selectOptions(screen.getByRole("combobox"), "Dañado");

  await user.click(screen.getByRole("button", { name: /agregar equipo/i }));

  expect(mockAgregar).toHaveBeenCalledWith({
    nombre: "Tester",
    marca: "MarcaX",
    modelo: "M123",
    estado: "Dañado",
  });

  expect(window.alert).toHaveBeenCalledWith("Equipo agregado exitosamente.");
});
