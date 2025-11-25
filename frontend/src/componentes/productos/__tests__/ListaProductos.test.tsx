import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ListaProductos from "../ListaProductos";

// Mock del componente Boton para poder detectar los clics
vi.mock("../../comunes/Boton", () => ({
  default: ({ texto, onClick }: { texto: string; onClick: () => void }) => (
    <button onClick={onClick}>{texto}</button>
  ),
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

test("renderiza títulos, textos y todas las imágenes", () => {
  render(
    <MemoryRouter initialEntries={["/productos"]}>
      <ListaProductos />
    </MemoryRouter>
  );

  // Título principal
  expect(screen.getByRole("heading", { name: /productos/i })).toBeInTheDocument();

  // 3 categorías
  expect(screen.getByText(/Básculas digitales/i)).toBeInTheDocument();
  expect(screen.getByText(/Sierras cárnicas/i)).toBeInTheDocument();
  expect(screen.getByText(/Balanzas comerciales/i)).toBeInTheDocument();

  // Imágenes: 3 + 3 + 3 = 9
  expect(screen.getAllByRole("img")).toHaveLength(9);
});

test("muestra el Boton Atrás cuando está en /productos", () => {
  render(
    <MemoryRouter initialEntries={["/productos"]}>
      <ListaProductos />
    </MemoryRouter>
  );

  expect(screen.getByRole("button", { name: /atrás/i })).toBeInTheDocument();
});

test("NO muestra botón Atrás si la ruta no es /productos", () => {
  render(
    <MemoryRouter initialEntries={["/otra"]}>
      <ListaProductos />
    </MemoryRouter>
  );

  expect(screen.queryByRole("button", { name: /atrás/i })).not.toBeInTheDocument();
});

test("hace navigate(-1) al dar clic en Atrás", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={["/productos"]}>
      <ListaProductos />
    </MemoryRouter>
  );

  const boton = screen.getByRole("button", { name: /atrás/i });
  await user.click(boton);

  expect(mockNavigate).toHaveBeenCalledWith(-1);
});
