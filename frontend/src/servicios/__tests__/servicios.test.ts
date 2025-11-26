import API from "../api";
import {
  obtenerServicios,
  crearServicio,
  actualizarServicio,
  eliminarServicio,
} from "../servicios";

vi.mock("../api");

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Servicios de Servicios (valga la redundancia)", () => {
  test("obtenerServicios() hace GET /servicios", async () => {
    (API.get as any).mockResolvedValue({ data: ["s1"] });

    const res = await obtenerServicios();

    expect(API.get).toHaveBeenCalledWith("/servicios");
    expect(res).toEqual(["s1"]);
  });

  test("crearServicio() hace POST /servicios", async () => {
    const nuevo = { nombre: "Mantenimiento", tipo: "Mantenimiento" as const };

    (API.post as any).mockResolvedValue({ data: { ok: true } });

    const res = await crearServicio(nuevo);

    expect(API.post).toHaveBeenCalledWith("/servicios", nuevo);
    expect(res).toEqual({ ok: true });
  });

  test("actualizarServicio() hace PUT /servicios/:id", async () => {
    (API.put as any).mockResolvedValue({ data: { updated: true } });

    const res = await actualizarServicio("33", { nombre: "Nuevo" });

    expect(API.put).toHaveBeenCalledWith("/servicios/33", {
      nombre: "Nuevo",
    });
    expect(res).toEqual({ updated: true });
  });

  test("eliminarServicio() hace DELETE /servicios/:id", async () => {
    (API.delete as any).mockResolvedValue({});

    await eliminarServicio("11");

    expect(API.delete).toHaveBeenCalledWith("/servicios/11");
  });
});
