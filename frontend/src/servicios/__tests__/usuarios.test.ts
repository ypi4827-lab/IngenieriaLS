import API from "../api";
import {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../usuarios";

vi.mock("../api");

beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
  localStorage.setItem("token", "TEST_TOKEN");
});

describe("Servicios de Usuarios", () => {
  test("obtenerUsuarios() hace GET /usuarios con token", async () => {
    (API.get as any).mockResolvedValue({ data: ["u1"] });

    const res = await obtenerUsuarios();

    expect(API.get).toHaveBeenCalledWith("/usuarios", {
      headers: { Authorization: "Bearer TEST_TOKEN" },
    });

    expect(res).toEqual(["u1"]);
  });

  test("crearUsuario() hace POST /usuarios con token", async () => {
    const usuario = {
      nombre: "Test",
      correo: "test@mail.com",
      rol: "cliente",
    } as const;

    (API.post as any).mockResolvedValue({ data: { created: true } });

    const res = await crearUsuario(usuario);

    expect(API.post).toHaveBeenCalledWith("/usuarios", usuario, {
      headers: { Authorization: "Bearer TEST_TOKEN" },
    });

    expect(res).toEqual({ created: true });
  });

  test("actualizarUsuario() hace PUT /usuarios/:id con token", async () => {
    (API.put as any).mockResolvedValue({ data: { ok: true } });

    const res = await actualizarUsuario("50", { nombre: "Nuevo" });

    expect(API.put).toHaveBeenCalledWith("/usuarios/50", { nombre: "Nuevo" }, {
      headers: { Authorization: "Bearer TEST_TOKEN" },
    });

    expect(res).toEqual({ ok: true });
  });

  test("eliminarUsuario() hace DELETE /usuarios/:id con token", async () => {
    (API.delete as any).mockResolvedValue({ data: { removed: true } });

    const res = await eliminarUsuario("77");

    expect(API.delete).toHaveBeenCalledWith("/usuarios/77", {
      headers: { Authorization: "Bearer TEST_TOKEN" },
    });

    expect(res).toEqual({ removed: true });
  });
});
