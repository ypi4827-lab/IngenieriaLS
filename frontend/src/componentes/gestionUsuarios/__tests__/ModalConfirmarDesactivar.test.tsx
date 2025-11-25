import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalConfirmarDesactivar from "../ModalConfirmarDesactivar";

describe("ModalConfirmarDesactivar", () => {
  const usuario = { nombre: "Juan", activo: true } as any;

  test("muestra el mensaje correcto dependiendo del estado del usuario", () => {
    render(
      <ModalConfirmarDesactivar
        usuario={usuario}
        onConfirmar={() => {}}
        onCancelar={() => {}}
      />
    );

    expect(
      screen.getByText("¿Desactivar a Juan?")
    ).toBeInTheDocument();
  });

  test("ejecuta onConfirmar al hacer clic en Sí", async () => {
    const user = userEvent.setup();
    const onConfirmar = vi.fn();

    render(
      <ModalConfirmarDesactivar
        usuario={usuario}
        onConfirmar={onConfirmar}
        onCancelar={() => {}}
      />
    );

    await user.click(screen.getByText("Sí"));
    expect(onConfirmar).toHaveBeenCalled();
  });

  test("ejecuta onCancelar al hacer clic en No", async () => {
    const user = userEvent.setup();
    const onCancelar = vi.fn();

    render(
      <ModalConfirmarDesactivar
        usuario={usuario}
        onConfirmar={() => {}}
        onCancelar={onCancelar}
      />
    );

    await user.click(screen.getByText("No"));
    expect(onCancelar).toHaveBeenCalled();
  });
});
