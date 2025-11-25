import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Formulario from "../Formulario";
import { registrarUsuario } from "../../../servicios/autenticacion";

// Mock del servicio
vi.mock("../../../servicios/autenticacion", () => ({
  registrarUsuario: vi.fn(),
}));

// Mock de useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<any>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Limpiar mocks entre tests
afterEach(() => {
  vi.clearAllMocks();
});

describe("Formulario Registro", () => {
  test("muestra todos los campos y botón", () => {
    render(
      <MemoryRouter>
        <Formulario />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Número de Telefono:/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Contraseña")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirmar Contraseña")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /registrarse/i })
    ).toBeInTheDocument();
  });

  test("muestra alerta si las contraseñas no coinciden", async () => {
    const user = userEvent.setup();
    window.alert = vi.fn();

    render(
      <MemoryRouter>
        <Formulario />
      </MemoryRouter>
    );

    await user.type(screen.getByLabelText("Contraseña"), "123456");
    await user.type(screen.getByLabelText("Confirmar Contraseña"), "1234567");

    await user.click(screen.getByRole("button", { name: /registrarse/i }));

    expect(window.alert).toHaveBeenCalledWith("Las contraseñas no coinciden");
  });

  test("realiza registro exitoso y navega", async () => {
    const user = userEvent.setup();
    window.alert = vi.fn();
    (registrarUsuario as any).mockResolvedValueOnce({});

    render(
      <MemoryRouter>
        <Formulario />
      </MemoryRouter>
    );

    await user.type(screen.getByLabelText(/Nombre completo/i), "Edgar");
    await user.type(screen.getByLabelText(/Correo electrónico/i), "test@test.com");
    await user.type(screen.getByLabelText(/Número de Telefono:/i), "3001234567");
    await user.type(screen.getByLabelText("Contraseña"), "12345");
    await user.type(screen.getByLabelText("Confirmar Contraseña"), "12345");

    await user.click(screen.getByRole("button", { name: /registrarse/i }));

    expect(registrarUsuario).toHaveBeenCalledTimes(1);
    expect(registrarUsuario).toHaveBeenCalledWith({
      nombre: "Edgar",
      correo: "test@test.com",
      telefono: "3001234567",
      rol: "cliente",
      contraseña: "12345",
    });

    expect(window.alert).toHaveBeenCalledWith("Registro exitoso");
    expect(mockNavigate).toHaveBeenCalledWith("/ingreso");
  });

  test("muestra error si registrarUsuario lanza excepción", async () => {
    const user = userEvent.setup();
    window.alert = vi.fn();
    (registrarUsuario as any).mockRejectedValueOnce(new Error("Error"));

    render(
      <MemoryRouter>
        <Formulario />
      </MemoryRouter>
    );

    await user.type(screen.getByLabelText(/Nombre completo/i), "Edgar");
    await user.type(screen.getByLabelText(/Correo electrónico/i), "test@test.com");
    await user.type(screen.getByLabelText(/Número de Telefono:/i), "3001234567");
    await user.type(screen.getByLabelText("Contraseña"), "12345");
    await user.type(screen.getByLabelText("Confirmar Contraseña"), "12345");

    await user.click(screen.getByRole("button", { name: /registrarse/i }));

    expect(window.alert).toHaveBeenCalledWith("Error al registrar usuario: ");
  });
});
