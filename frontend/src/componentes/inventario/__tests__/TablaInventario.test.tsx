import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TablaInventario from "../TablaInventario";

const equiposMock = [
  {
    _id: "1",
    nombre: "Tester",
    marca: "MarcaX",
    modelo: "M1",
    estado: "Disponible" as const,
    codigo: "C01"
  }
];

test("muestra mensaje si no hay equipos", () => {
  render(<TablaInventario equipos={[]} onEliminar={() => {}} onEditar={() => {}} />);

  expect(screen.getByText(/no hay equipos/i)).toBeInTheDocument();
});

test("abre modal de eliminar al hacer click", async () => {
  const user = userEvent.setup();

  render(
    <TablaInventario
      equipos={equiposMock}
      onEliminar={() => {}}
      onEditar={() => {}}
    />
  );

  await user.click(screen.getByTitle("Eliminar"));

  expect(
    screen.getByText(/¿seguro que deseas eliminar/i)
  ).toBeInTheDocument();
});

test("abre modal de edición al hacer click", async () => {
  const user = userEvent.setup();

  render(
    <TablaInventario
      equipos={equiposMock}
      onEliminar={() => {}}
      onEditar={() => {}}
    />
  );

  await user.click(screen.getByTitle("Editar"));

  expect(screen.getByText(/editar equipo/i)).toBeInTheDocument();
});
