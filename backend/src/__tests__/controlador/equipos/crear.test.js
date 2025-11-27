const { crearEquipo } = require("../../../controladores/controladorEquipos")
const Equipo = require("../../../modelos/Equipo")

jest.mock("../../../modelos/Equipo")

describe("Controlador Equipo - crearEquipo", () => {
  let req, res

  beforeEach(() => {
    req = { body: { nombre: "Nuevo equipo" } }
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
  })

  test("debe crear un equipo correctamente", async () => {
    const mockSave = jest.fn().mockResolvedValue(true)

    Equipo.mockImplementation(() => ({
      save: mockSave,
      ...req.body,
    }))

    await crearEquipo(req, res)

    expect(mockSave).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith({
      nombre: "Nuevo equipo",
      save: expect.any(Function),
    })
  })

  test("debe manejar errores al crear el equipo", async () => {
    Equipo.mockImplementation(() => ({
      save: jest.fn().mockRejectedValue(new Error("Error creando")),
    }))

    await crearEquipo(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
  })
})
