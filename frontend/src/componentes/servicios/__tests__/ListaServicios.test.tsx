import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ListaServicios from "../ListaServicios";

let mockNavigate = vi.fn();

// Mock del componente Boton
vi.mock("../comunes/Boton", () => ({
  default: ({ texto, onClick, enlace }: any) => (
    <button onClick={onClick}>{texto || enlace}</button>
  ),
}));

// Para control total del localStorage
const setUserLS = (user: any) =>
  localStorage.setItem("usuario", JSON.stringify(user));

afterEach(() => {
  localStorage.clear();
  mockNavigate = vi.fn();
});

test("muestra CTA de registro e ingreso cuando no hay usuario", () => {
  render(
    <MemoryRouter>
      <ListaServicios />
    </MemoryRouter>
  );

  expect(screen.getByText("Crear cuenta")).toBeInTheDocument();
  expect(screen.getByText("Iniciar sesión")).toBeInTheDocument();
});

test("muestra botón para reservar cuando el usuario es cliente", () => {
  setUserLS({ rol: "cliente" });

  render(
    <MemoryRouter>
      <ListaServicios />
    </MemoryRouter>
  );

  expect(screen.getByText("Reservar servicio")).toBeInTheDocument();
});

test("muestra botón atrás cuando está en /servicios y permite hacer click", async () => {
  const user = userEvent.setup();

  // Mock de useNavigate
  vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual<any>("react-router-dom");
    return {
      ...actual,
      useNavigate: () => mockNavigate,
      useLocation: () => ({ pathname: "/servicios" }),
    };
  });

  const { default: ListaServiciosMock } = await import("../ListaServicios");

  render(
    <MemoryRouter>
      <ListaServiciosMock />
    </MemoryRouter>
  );

  const botonAtras = screen.getByText("Atrás");
  expect(botonAtras).toBeInTheDocument();

  await user.click(botonAtras);

  expect(mockNavigate).toHaveBeenCalledWith(-1);
});
