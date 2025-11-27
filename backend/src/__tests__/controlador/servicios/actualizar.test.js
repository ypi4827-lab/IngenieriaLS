const { actualizarServicio } = require("../../../controladores/controladorServicios");
const Servicio = require("../../../modelos/Servicio");

jest.mock("../../../modelos/Servicio");

describe("Controlador Servicios - actualizarServicio", () => {
  let req, res;

  beforeEach(() => {
    req = { params: { id: "123" }, body: { nombre: "Actualizado" } };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
  });

  test("debe actualizar un servicio", async () => {
    const mockActualizado = { id: "123", nombre: "Actualizado" };

    Servicio.findByIdAndUpdate.mockResolvedValue(mockActualizado);

    await actualizarServicio(req, res);

    expect(res.json).toHaveBeenCalledWith(mockActualizado);
  });

  test("debe manejar error cuando el servicio no existe", async () => {
    Servicio.findByIdAndUpdate.mockRejectedValue(new Error("Not found"));

    await actualizarServicio(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Servicio no encontrado"
    });
  });
});
