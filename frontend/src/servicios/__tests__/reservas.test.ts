import API from "../api";
import {
  obtenerReservas,
  obtenerReservasCliente,
  obtenerReservasTecnico,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
} from "../reservas";

vi.mock("../api");

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Servicios de Reservas", () => {
  test("obtenerReservas() debe hacer GET /reservas", async () => {
    (API.get as any).mockResolvedValue({ data: ["reserva1"] });

    const res = await obtenerReservas();

    expect(API.get).toHaveBeenCalledWith("/reservas");
    expect(res).toEqual(["reserva1"]);
  });

  test("obtenerReservasCliente() debe pasar el clienteId por query", async () => {
    (API.get as any).mockResolvedValue({ data: ["r1"] });

    const res = await obtenerReservasCliente("123");

    expect(API.get).toHaveBeenCalledWith("/reservas?clienteId=123");
    expect(res).toEqual(["r1"]);
  });

  test("obtenerReservasTecnico() debe pasar el tecnicoId por query", async () => {
    (API.get as any).mockResolvedValue({ data: ["r2"] });

    const res = await obtenerReservasTecnico("T-88");

    expect(API.get).toHaveBeenCalledWith("/reservas?tecnicoAsignado=T-88");
    expect(res).toEqual(["r2"]);
  });

  test("crearReserva() debe hacer POST /reservas", async () => {
    const reserva = {
      clienteId: "1",
      servicio: "Mantenimiento",
      fechaProgramada: "2025-01-01",
      horaProgramada: "10:00",
    };

    (API.post as any).mockResolvedValue({ data: { ok: true } });

    const res = await crearReserva(reserva);

    expect(API.post).toHaveBeenCalledWith("/reservas", reserva);
    expect(res).toEqual({ ok: true });
  });

  test("actualizarReserva() debe hacer PUT /reservas/:id", async () => {
    (API.put as any).mockResolvedValue({ data: { updated: true } });

    const res = await actualizarReserva("55", { estado: "Completado" });

    expect(API.put).toHaveBeenCalledWith("/reservas/55", {
      estado: "Completado",
    });
    expect(res).toEqual({ updated: true });
  });

  test("eliminarReserva() debe hacer DELETE /reservas/:id", async () => {
    (API.delete as any).mockResolvedValue({ data: { deleted: true } });

    const res = await eliminarReserva("99");

    expect(API.delete).toHaveBeenCalledWith("/reservas/99");
    expect(res).toEqual({ deleted: true });
  });
});
