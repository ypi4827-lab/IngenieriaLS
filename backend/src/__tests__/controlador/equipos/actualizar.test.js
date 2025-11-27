const { actualizarEquipo } = require("../../../controladores/controladorEquipos")
const Equipo = require("../../../modelos/Equipo")

jest.mock("../../../modelos/Equipo")

describe("Controlador Equipo - actualizarEquipo", () => {
  let req, res

  beforeEach(() => {
    req = {
      params: { id: "123" },
      body: { nombre: "Actualizado" },
    }
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
  })

  test("debe actualizar un equipo correctamente", async () => {
    const mockActualizado = { id: "123", nombre: "Actualizado" }
    Equipo.findByIdAndUpdate.mockResolvedValue(mockActualizado)

    await actualizarEquipo(req, res)

    expect(res.json).toHaveBeenCalledWith(mockActualizado)
  })

  test("debe manejar error si no se encuentra el equipo", async () => {
    Equipo.findByIdAndUpdate.mockRejectedValue(new Error("No encontrado"))

    await actualizarEquipo(req, res)

    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Equipo no encontrado",
    })
  })
})
