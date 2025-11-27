const { crearServicio } = require("../../../controladores/controladorServicios");
const Servicio = require("../../../modelos/Servicio");

jest.mock("../../../modelos/Servicio");

describe("Controlador Servicios - crearServicio", () => {
  let req, res;

  beforeEach(() => {
    req = { body: { nombre: "Nuevo servicio" } };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
  });

  test("debe crear un servicio", async () => {
    const mockServicio = {
      ...req.body,
      save: jest.fn().mockResolvedValue(true)
    };

    Servicio.mockImplementation(() => mockServicio);

    await crearServicio(req, res);

    expect(mockServicio.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockServicio);
  });

  test("debe manejar error al crear el servicio", async () => {
    Servicio.mockImplementation(() => ({
      save: jest.fn().mockRejectedValue(new Error("DB error"))
    }));

    await crearServicio(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Error al crear el servicio",
      error: expect.any(Error)
    });
  });
});
