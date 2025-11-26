import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DashboardAdmin from "../DashboardAdmin";
import { useNavigate } from "react-router-dom";
import { obtenerUsuarios } from "../../servicios/usuarios";
import { obtenerEquipos } from "../../servicios/equipos";
import { obtenerReservas } from "../../servicios/reservas";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

vi.mock("../../servicios/usuarios", () => ({
  obtenerUsuarios: vi.fn(),
}));

vi.mock("../../servicios/equipos", () => ({
  obtenerEquipos: vi.fn(),
}));

vi.mock("../../servicios/reservas", () => ({
  obtenerReservas: vi.fn(),
}));

test("carga métricas correctamente", async () => {
  (obtenerUsuarios as any).mockResolvedValue([
    { activo: true },
    { activo: false },
  ]);

  (obtenerEquipos as any).mockResolvedValue([{}, {}, {}]);

  (obtenerReservas as any).mockResolvedValue([
    { fechaProgramada: new Date().toISOString(), estado: "Finalizada" },
  ]);

  const navigate = vi.fn();
  (useNavigate as any).mockReturnValue(navigate);

  render(<DashboardAdmin />);

  expect(await screen.findByText("Usuarios activos")).toBeInTheDocument();
  expect(await screen.findByText("Equipos registrados")).toBeInTheDocument();
  expect(await screen.findByText("Reservas este mes")).toBeInTheDocument();
  expect(await screen.findByText("Servicios finalizados")).toBeInTheDocument();
});

test("las tarjetas de acción navegan correctamente", async () => {
  const user = userEvent.setup();
  (obtenerUsuarios as any).mockResolvedValue([]);
  (obtenerEquipos as any).mockResolvedValue([]);
  (obtenerReservas as any).mockResolvedValue([]);
  const navigate = vi.fn();
  (useNavigate as any).mockReturnValue(navigate);

  render(<DashboardAdmin />);

  const btn = await screen.findByText("Gestión de Usuarios");
  await user.click(btn);

  expect(navigate).toHaveBeenCalledWith("/gestionusuarios");
});
