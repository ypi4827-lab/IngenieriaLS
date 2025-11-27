const { eliminarServicio } = require("../../../controladores/controladorServicios");
const Servicio = require("../../../modelos/Servicio");

jest.mock("../../../modelos/Servicio");

describe("Controlador Servicios - eliminarServicio", () => {
  let req, res;

  beforeEach(() => {
    req = { params: { id: "123" } };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
  });

  test("debe eliminar un servicio", async () => {
    Servicio.findByIdAndDelete.mockResolvedValue(true);

    await eliminarServicio(req, res);

    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Servicio eliminado correctamente"
    });
  });

  test("debe manejar error cuando no se puede eliminar", async () => {
    Servicio.findByIdAndDelete.mockRejectedValue(new Error("Error"));

    await eliminarServicio(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Servicio no encontrado"
    });
  });
});
