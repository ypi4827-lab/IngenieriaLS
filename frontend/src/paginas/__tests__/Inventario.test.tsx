import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Inventario from "../Inventario";

vi.mock("../../componentes/inventario/TablaInventario", () => ({
  default: ({ equipos }: any) => (
    <div>
      TABLA
      {equipos.map((e: any) => (
        <p key={e._id}>{e.nombre}</p>
      ))}
    </div>
  )
}));

vi.mock("../../componentes/inventario/FormularioEquipo", () => ({
  default: ({ onAgregar }: any) => (
    <button onClick={() => onAgregar({ _id: "3", nombre: "NuevoEquipo" })}>
      AGREGAR-EQUIPO
    </button>
  )
}));

vi.mock("../../servicios/equipos", () => ({
  obtenerEquipos: vi.fn().mockResolvedValue([
    { _id: "1", nombre: "Equipo A" },
    { _id: "2", nombre: "Equipo B" },
  ]),
  crearEquipo: vi.fn().mockResolvedValue({ _id: "3", nombre: "NuevoEquipo" }),
  actualizarEquipo: vi.fn(),
  eliminarEquipo: vi.fn()
}));

test("carga equipos y los muestra", async () => {
  render(<Inventario />);

  expect(screen.getByText("Cargando equipos...")).toBeInTheDocument();

  await waitFor(() =>
    expect(screen.getByText("Equipo A")).toBeInTheDocument()
  );
});

test("agrega un equipo desde el formulario", async () => {
  render(<Inventario />);

  await waitFor(() =>
    expect(screen.getByText("Equipo B")).toBeInTheDocument()
  );

  await userEvent.click(screen.getByText("AGREGAR-EQUIPO"));

  expect(screen.getByText("NuevoEquipo")).toBeInTheDocument();
});
