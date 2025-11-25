import { render, screen } from "@testing-library/react";
import CardConfirmacion from "../CardConfirmacion";

describe("CardConfirmacion", () => {
  const reservaMock = {
    servicio: "Mantenimiento eléctrico",
    tecnico: "Juan Pérez",
    fechaProgramada: "2025-02-10",
    hora: "10:00 AM",
    estado: "Confirmada",
  };

  test("renderiza correctamente la información de la reserva", () => {
    render(<CardConfirmacion reserva={reservaMock} />);

    // Estado
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Confirmada");

    // Icono
    expect(screen.getByText("✅")).toBeInTheDocument();

    // Campos
    expect(screen.getByText(/Servicio:/)).toBeInTheDocument();
    expect(screen.getByText("Mantenimiento eléctrico")).toBeInTheDocument();

    expect(screen.getByText(/Técnico asignado:/)).toBeInTheDocument();
    expect(screen.getByText("Juan Pérez")).toBeInTheDocument();

    expect(screen.getByText(/Fecha:/)).toBeInTheDocument();
    expect(screen.getByText("2025-02-10")).toBeInTheDocument();

    expect(screen.getByText(/Hora:/)).toBeInTheDocument();
    expect(screen.getByText("10:00 AM")).toBeInTheDocument();

    // Mensaje final
    expect(
      screen.getByText(/Te enviaremos un correo con los detalles de la cita/i)
    ).toBeInTheDocument();
  });
});
