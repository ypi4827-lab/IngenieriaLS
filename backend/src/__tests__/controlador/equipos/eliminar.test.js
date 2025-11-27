const { eliminarEquipo } = require("../../../controladores/controladorEquipos")
const Equipo = require("../../../modelos/Equipo")

jest.mock("../../../modelos/Equipo")

describe("Controlador Equipo - eliminarEquipo", () => {
  let req, res

  beforeEach(() => {
    req = { params: { id: "123" } }
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
  })

  test("debe eliminar un equipo correctamente", async () => {
    Equipo.findByIdAndDelete.mockResolvedValue(true)

    await eliminarEquipo(req, res)

    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Equipo eliminado correctamente",
    })
  })

  test("debe manejar error si no se encuentra el equipo", async () => {
    Equipo.findByIdAndDelete.mockRejectedValue(new Error("No encontrado"))

    await eliminarEquipo(req, res)

    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Equipo no encontrado",
    })
  })
})
