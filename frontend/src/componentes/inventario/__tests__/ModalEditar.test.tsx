import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalEditar from "../ModalEditar";

const mockEquipo = {
  _id: "1",
  nombre: "Tester",
  marca: "MarcaX",
  modelo: "M1",
  estado: "Disponible" as const,
  codigo: "C1"
};

test("cancelar ejecuta onCancelar", async () => {
  const user = userEvent.setup();
  const mockCancelar = vi.fn();

  render(
    <ModalEditar
      equipo={mockEquipo}
      onConfirmar={() => {}}
      onCancelar={mockCancelar}
    />
  );

  await user.click(screen.getByRole("button", { name: /cancelar/i }));
  expect(mockCancelar).toHaveBeenCalled();
});

test("envía datos editados al confirmar", async () => {
  const user = userEvent.setup();
  const mockConfirmar = vi.fn();

  render(
    <ModalEditar
      equipo={mockEquipo}
      onConfirmar={mockConfirmar}
      onCancelar={() => {}}
    />
  );

  const inputNombre = screen.getByDisplayValue("Tester");
  await user.clear(inputNombre);
  await user.type(inputNombre, "NuevoNombre");

  await user.click(screen.getByRole("button", { name: /guardar/i }));

  expect(mockConfirmar).toHaveBeenCalledWith(
    expect.objectContaining({
      nombre: "NuevoNombre",
      marca: "MarcaX",
      modelo: "M1",
      estado: "Disponible",
    })
  );
});
