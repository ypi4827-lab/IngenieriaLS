import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormularioReserva from "../FormularioReserva";
import { obtenerUsuarios } from "../../../servicios/usuarios";

vi.mock("../../../servicios/usuarios", () => ({
  obtenerUsuarios: vi.fn(),
}));

test("carga técnicos y permite seleccionar valores", async () => {
  (obtenerUsuarios as any).mockResolvedValue([
    { _id: "1", nombre: "Juan", rol: "tecnico" },
  ]);

  const setServicio = vi.fn();
  const setTecnico = vi.fn();
  const user = userEvent.setup();

  render(
    <FormularioReserva
      servicio=""
      setServicio={setServicio}
      tecnico=""
      setTecnico={setTecnico}
    />
  );

  expect(await screen.findByText("Juan")).toBeInTheDocument();

  await user.selectOptions(screen.getByLabelText("Tipo de Servicio"), "Mantenimiento");
  expect(setServicio).toHaveBeenCalledWith("Mantenimiento");

  await user.selectOptions(screen.getByLabelText("Técnico Disponible"), "1");
  expect(setTecnico).toHaveBeenCalledWith("1");
});
