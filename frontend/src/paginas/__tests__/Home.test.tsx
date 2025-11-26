import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { MemoryRouter } from "react-router-dom";

// Mock Boton para facilitar el test
vi.mock("../../componentes/comunes/Boton", () => ({
  default: ({ texto, onClick, enlace }: any) => (
    <button onClick={onClick} data-enlace={enlace}>{texto}</button>
  )
}));

test("muestra la versión pública cuando no hay usuario", () => {
  localStorage.removeItem("usuario");

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(
    screen.getByText("Mantenimiento y reparación profesional de equipos")
  ).toBeInTheDocument();
});

test("muestra bienvenida a cliente y botones correctos", () => {
  localStorage.setItem(
    "usuario",
    JSON.stringify({ rol: "cliente", nombre: "Carlos" })
  );

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText("Bienvenido, Carlos")).toBeInTheDocument();
  expect(screen.getByText("Mis reservas")).toBeInTheDocument();
});

test("muestra panel técnico", () => {
  localStorage.setItem(
    "usuario",
    JSON.stringify({ rol: "tecnico" })
  );

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText("Panel Técnico")).toBeInTheDocument();
});
