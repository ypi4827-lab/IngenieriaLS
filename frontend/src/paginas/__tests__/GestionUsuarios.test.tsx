import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GestionUsuarios from "../GestionUsuarios";
import { obtenerUsuarios, actualizarUsuario } from "../../servicios/usuarios";

vi.mock("../../servicios/usuarios", () => ({
  obtenerUsuarios: vi.fn(),
  actualizarUsuario: vi.fn(),
}));

vi.mock("../../componentes/gestionUsuarios/TablaUsuarios", () => ({
  __esModule: true,
  default: ({ usuarios, onCambiarRol, onCambiarEstado }: any) => (
    <div>
      <div data-testid="contador">Usuarios: {usuarios?.length}</div>

      <button
        data-testid="btn-rol"
        onClick={() => onCambiarRol("1", "admin")}
      >
        Cambiar Rol
      </button>

      <button
        data-testid="btn-estado"
        onClick={() => onCambiarEstado("1")}
      >
        Cambiar Estado
      </button>
    </div>
  ),
}));

test("carga usuarios al iniciar", async () => {
  (obtenerUsuarios as any).mockResolvedValue([{ _id: "1", rol: "user", activo: true }]);

  render(<GestionUsuarios />);

  expect(await screen.findByTestId("contador")).toHaveTextContent("Usuarios: 1");
});

test("permite cambiar rol", async () => {
  const user = userEvent.setup();

  (obtenerUsuarios as any).mockResolvedValue([{ _id: "1", rol: "user", activo: true }]);

  render(<GestionUsuarios />);

  await user.click(await screen.findByTestId("btn-rol"));
  expect(actualizarUsuario).toHaveBeenCalledWith("1", { rol: "admin" });
});

test("permite cambiar estado", async () => {
  const user = userEvent.setup();

  (obtenerUsuarios as any).mockResolvedValue([{ _id: "1", rol: "user", activo: true }]);

  render(<GestionUsuarios />);

  await user.click(await screen.findByTestId("btn-estado"));
  expect(actualizarUsuario).toHaveBeenCalledWith("1", { activo: false });
});
