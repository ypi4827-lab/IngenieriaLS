import API from "../api";
import {
  registrarUsuario,
  loginUsuario,
  actualizarPerfil,
  cambiarContraseña,
  solicitarRecuperacion,
  restablecerContraseña,
  cerrarSesion,
} from "../autenticacion";

vi.mock("../api", () => ({
  default: {
    post: vi.fn(),
    put: vi.fn(),
  },
}));

beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
});

test("registrarUsuario hace POST correctamente", async () => {
  (API.post as any).mockResolvedValue({ data: "ok" });

  const result = await registrarUsuario({ nombre: "Test", correo: "a@a.com", contraseña: "123", rol: "cliente" });

  expect(API.post).toHaveBeenCalledWith("/autenticacion/registro", {
    nombre: "Test",
    correo: "a@a.com",
    contraseña: "123",
    rol: "cliente",
  });
  expect(result).toBe("ok");
});

test("loginUsuario guarda el token en localStorage", async () => {
  (API.post as any).mockResolvedValue({ data: { token: "TOKEN123" } });

  await loginUsuario({ correo: "a@a.com", contraseña: "123" });

  expect(localStorage.getItem("token")).toBe("TOKEN123");
});

test("actualizarPerfil hace PUT correctamente", async () => {
  localStorage.setItem("token", "ABC");

  (API.put as any).mockResolvedValue({ data: "updated" });

  const result = await actualizarPerfil("1", { nombre: "Nuevo" });

  expect(API.put).toHaveBeenCalledWith("/usuarios/1", { nombre: "Nuevo" }, {
    headers: { Authorization: "Bearer ABC" }
  });
  expect(result).toBe("updated");
});

test("cambiarContraseña hace PUT", async () => {
  localStorage.setItem("token", "ABC");

  (API.put as any).mockResolvedValue({ data: "ok" });

  const result = await cambiarContraseña("1234");

  expect(API.put).toHaveBeenCalledWith(
    "/autenticacion/cambiar-contrasena",
    { nuevaContraseña: "1234" },
    { headers: { Authorization: "Bearer ABC" } }
  );

  expect(result).toBe("ok");
});

test("solicitarRecuperacion hace POST", async () => {
  (API.post as any).mockResolvedValue({ data: "sent" });

  const result = await solicitarRecuperacion("test@mail.com");

  expect(API.post).toHaveBeenCalledWith("/autenticacion/recuperar", { correo: "test@mail.com" });
  expect(result).toBe("sent");
});

test("restablecerContraseña hace PUT", async () => {
  (API.put as any).mockResolvedValue({ data: "reset" });

  const result = await restablecerContraseña("TOKEN", "123");

  expect(API.put).toHaveBeenCalledWith("/autenticacion/restablecer/TOKEN", {
    nuevaContraseña: "123"
  });

  expect(result).toBe("reset");
});

test("cerrarSesion elimina token", () => {
  localStorage.setItem("token", "A");
  cerrarSesion();
  expect(localStorage.getItem("token")).toBe(null);
});
