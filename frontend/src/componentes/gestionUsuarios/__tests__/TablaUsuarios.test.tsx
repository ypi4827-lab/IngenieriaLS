import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TablaUsuarios from "../TablaUsuarios";

describe("TablaUsuarios", () => {
  const usuarios = [
    {
      _id: "1",
      nombre: "Carlos",
      correo: "carlos@test.com",
      rol: "cliente",
      activo: true
    }
  ] as any[];

  test("muestra los datos del usuario en la tabla", () => {
    render(
      <TablaUsuarios
        usuarios={usuarios}
        onCambiarRol={() => {}}
        onCambiarEstado={() => {}}
      />
    );

    expect(screen.getByText("Carlos")).toBeInTheDocument();
    expect(screen.getByText("carlos@test.com")).toBeInTheDocument();
    expect(screen.getByText("cliente")).toBeInTheDocument();
    expect(screen.getByText("Activo")).toBeInTheDocument();
  });

  test("abre el modal de editar rol al hacer clic en ✏️", async () => {
    const user = userEvent.setup();

    render(
      <TablaUsuarios
        usuarios={usuarios}
        onCambiarRol={() => {}}
        onCambiarEstado={() => {}}
      />
    );

    await user.click(screen.getByTitle("Editar"));

    expect(
      screen.getByText("Cambiar rol de Carlos")
    ).toBeInTheDocument();
  });

  test("abre el modal de activar/desactivar al hacer clic en ❌", async () => {
    const user = userEvent.setup();

    render(
      <TablaUsuarios
        usuarios={usuarios}
        onCambiarRol={() => {}}
        onCambiarEstado={() => {}}
      />
    );

    await user.click(screen.getByTitle("Activar/Desactivar"));

    expect(
      screen.getByText("¿Desactivar a Carlos?")
    ).toBeInTheDocument();
  });

  test("llama a onCambiarEstado cuando se confirma desactivar", async () => {
    const user = userEvent.setup();
    const onCambiarEstado = vi.fn();

    render(
      <TablaUsuarios
        usuarios={usuarios}
        onCambiarRol={() => {}}
        onCambiarEstado={onCambiarEstado}
      />
    );

    await user.click(screen.getByTitle("Activar/Desactivar"));
    await user.click(screen.getByText("Sí"));

    expect(onCambiarEstado).toHaveBeenCalledWith("1");
  });
});
