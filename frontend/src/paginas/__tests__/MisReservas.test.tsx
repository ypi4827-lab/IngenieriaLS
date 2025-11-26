import { render, screen, waitFor } from "@testing-library/react";
import MisReservas from "../MisReservas";

vi.mock("../../componentes/reservas/ListaReservas", () => ({
  default: ({ reservas }: any) => (
    <div>LISTA {reservas.length} reservas</div>
  )
}));

vi.mock("../../servicios/reservas", () => ({
  obtenerReservasCliente: vi.fn().mockResolvedValue([
    { _id: "1", estado: "Programada" }
  ]),
  obtenerReservasTecnico: vi.fn().mockResolvedValue([]),
  obtenerReservas: vi.fn().mockResolvedValue([])
}));

test("carga reservas del cliente", async () => {
  localStorage.setItem(
    "usuario",
    JSON.stringify({ rol: "cliente", id: "123" })
  );

  render(<MisReservas />);

  expect(screen.getByText("Cargando reservas...")).toBeInTheDocument();

  await waitFor(() =>
    expect(screen.getByText("LISTA 1 reservas")).toBeInTheDocument()
  );
});

test("muestra mensaje cuando no hay reservas", async () => {
  localStorage.setItem(
    "usuario",
    JSON.stringify({ rol: "tecnico", id: "123" })
  );

  render(<MisReservas />);

  await waitFor(() =>
    expect(
      screen.getByText("No tienes reservas registradas.")
    ).toBeInTheDocument()
  );
});
