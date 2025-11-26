import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../componentes/reservas/FormularioReserva", () => ({
  default: () => <div>FORM-RESERVA</div>,
}));

vi.mock("../../componentes/reservas/CalendarioDisponibilidad", () => ({
  default: () => <div>CALENDARIO</div>,
}));

vi.mock("../../servicios/reservas", () => ({
  crearReserva: vi.fn().mockResolvedValue({ ok: true }),
}));

import Reservas from "../Reservas";

test("renderiza formulario y calendario", () => {
  render(
    <MemoryRouter>
      <Reservas />
    </MemoryRouter>
  );

  expect(screen.getByText("FORM-RESERVA")).toBeInTheDocument();
  expect(screen.getByText("CALENDARIO")).toBeInTheDocument();
});
