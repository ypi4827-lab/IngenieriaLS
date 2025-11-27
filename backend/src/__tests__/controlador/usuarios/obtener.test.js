const { obtenerUsuarios } = require("../../../controladores/controladorUsuarios")
const Usuario = require("../../../modelos/Usuario")

jest.mock("../../../modelos/Usuario")

describe("Controlador Usuarios - obtenerUsuarios", () => {
  let req, res

  beforeEach(() => {
    req = {}
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    }
  })

  test("debe devolver la lista de usuarios", async () => {
    const mockUsuarios = [{ id: 1 }, { id: 2 }]
    Usuario.find.mockResolvedValue(mockUsuarios)

    await obtenerUsuarios(req, res)

    expect(res.json).toHaveBeenCalledWith(mockUsuarios)
  })

  test("debe manejar errores del servidor", async () => {
    Usuario.find.mockRejectedValue(new Error("DB error"))

    await obtenerUsuarios(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
  })
})
