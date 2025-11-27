const { obtenerEquipos } = require('../../../controladores/controladorEquipos')
const Equipo = require("../../../modelos/Equipo")

jest.mock("../../../modelos/Equipo")

describe("Controlador Equipo - obtenerEquipos", () => {
  let req, res

  beforeEach(() => {
    req = {}
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
  })

  test("debe devolver la lista de equipos", async () => {
    const mockEquipos = [{ nombre: "Equipo 1" }, { nombre: "Equipo 2" }]
    Equipo.find.mockResolvedValue(mockEquipos)

    await obtenerEquipos(req, res)

    expect(res.json).toHaveBeenCalledWith(mockEquipos)
  })

  test("debe manejar errores del servidor", async () => {
    Equipo.find.mockRejectedValue(new Error("DB error"))

    await obtenerEquipos(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Error del servidor",
      error: "DB error",
    })
  })
})
