import API from "../api";
import {
  obtenerEquipos,
  crearEquipo,
  actualizarEquipo,
  eliminarEquipo,
} from "../equipos";

vi.mock("../api", () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
  },
}));

beforeEach(() => vi.clearAllMocks());

test("obtenerEquipos hace GET", async () => {
  (API.get as any).mockResolvedValue({ data: ["eq1"] });

  const result = await obtenerEquipos();

  expect(API.get).toHaveBeenCalledWith("/equipos");
  expect(result).toEqual(["eq1"]);
});

test("crearEquipo hace POST", async () => {
  (API.post as any).mockResolvedValue({ data: "creado" });

  const equipo = { nombre: "Balanza", estado: "Disponible" as const };
  const res = await crearEquipo(equipo);

  expect(API.post).toHaveBeenCalledWith("/equipos", equipo);
  expect(res).toBe("creado");
});

test("actualizarEquipo hace PUT", async () => {
  (API.put as any).mockResolvedValue({ data: "ok" });

  const res = await actualizarEquipo("1", { nombre: "Nuevo" });

  expect(API.put).toHaveBeenCalledWith("/equipos/1", { nombre: "Nuevo" });
  expect(res).toBe("ok");
});

test("eliminarEquipo hace DELETE", async () => {
  await eliminarEquipo("1");

  expect(API.delete).toHaveBeenCalledWith("/equipos/1");
});
