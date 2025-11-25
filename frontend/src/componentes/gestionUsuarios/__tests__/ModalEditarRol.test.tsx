import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalEditarRol from "../ModalEditarRol";

describe("ModalEditarRol", () => {
  const usuario = { nombre: "Ana", rol: "cliente" } as any;

  test("muestra el nombre del usuario en el título", () => {
    render(
      <ModalEditarRol
        usuario={usuario}
        onConfirmar={() => {}}
        onCancelar={() => {}}
      />
    );

    expect(
      screen.getByText("Cambiar rol de Ana")
    ).toBeInTheDocument();
  });

  test("cambia el rol y ejecuta onConfirmar", async () => {
    const user = userEvent.setup();
    const onConfirmar = vi.fn();

    render(
      <ModalEditarRol
        usuario={usuario}
        onConfirmar={onConfirmar}
        onCancelar={() => {}}
      />
    );

    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "administrador");

    await user.click(screen.getByText("Guardar"));

    expect(onConfirmar).toHaveBeenCalledWith("administrador");
  });

  test("ejecuta onCancelar al dar clic en cancelar", async () => {
    const user = userEvent.setup();
    const onCancelar = vi.fn();

    render(
      <ModalEditarRol
        usuario={usuario}
        onConfirmar={() => {}}
        onCancelar={onCancelar}
      />
    );

    await user.click(screen.getByText("Cancelar"));
    expect(onCancelar).toHaveBeenCalled();
  });
});
