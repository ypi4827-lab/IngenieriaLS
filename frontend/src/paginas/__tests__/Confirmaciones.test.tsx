import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Confirmaciones from "../Confirmaciones";
import { useNavigate } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

test("carga datos desde localStorage", () => {
  const reserva = {
    servicio: "Mantenimiento",
    tecnico: "Juan",
    fecha: "2025-10-10",
    hora: "10:00",
    estado: "Confirmada",
  };

  vi.spyOn(Storage.prototype, "getItem").mockReturnValue(
    JSON.stringify(reserva)
  );

  const navigate = vi.fn();
  (useNavigate as any).mockReturnValue(navigate);

  render(<Confirmaciones />);

  expect(screen.getByText("¡Reserva Confirmada!")).toBeInTheDocument();
  expect(screen.getByText("Mantenimiento")).toBeInTheDocument();
});

test("botones de navegación funcionan", async () => {
  const user = userEvent.setup();
  const navigate = vi.fn();
  (useNavigate as any).mockReturnValue(navigate);

  render(<Confirmaciones />);

  await user.click(screen.getByText("Volver al inicio"));
  expect(navigate).toHaveBeenCalledWith("/");

  await user.click(screen.getByText("Ver mis reservas"));
  expect(navigate).toHaveBeenCalledWith("/misreservas");
});
