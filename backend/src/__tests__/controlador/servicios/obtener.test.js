const { obtenerServicios } = require("../../../controladores/controladorServicios");
const Servicio = require("../../../modelos/Servicio");

jest.mock("../../../modelos/Servicio");

describe("Controlador Servicios - obtenerServicios", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
  });

  test("debe devolver todos los servicios", async () => {
    const mockServicios = [{ id: 1 }, { id: 2 }];
    Servicio.find.mockResolvedValue(mockServicios);

    await obtenerServicios(req, res);

    expect(res.json).toHaveBeenCalledWith(mockServicios);
  });

  test("debe manejar errores del servidor", async () => {
    Servicio.find.mockRejectedValue(new Error("DB error"));

    await obtenerServicios(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Error del servidor",
      error: "DB error"
    });
  });
});
