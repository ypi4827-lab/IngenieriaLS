import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalEliminar from "../ModalEliminar";

test("ejecuta confirmación", async () => {
  const user = userEvent.setup();
  const mockConfirmar = vi.fn();

  render(<ModalEliminar onConfirmar={mockConfirmar} onCancelar={() => {}} />);

  await user.click(screen.getByRole("button", { name: /sí, eliminar/i }));
  expect(mockConfirmar).toHaveBeenCalled();
});

test("ejecuta cancelar", async () => {
  const user = userEvent.setup();
  const mockCancelar = vi.fn();

  render(<ModalEliminar onConfirmar={() => {}} onCancelar={mockCancelar} />);

  await user.click(screen.getByRole("button", { name: /cancelar/i }));
  expect(mockCancelar).toHaveBeenCalled();
});
