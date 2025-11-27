const { crearUsuario } = require("../../../controladores/controladorUsuarios")
const Usuario = require("../../../modelos/Usuario")

jest.mock("../../../modelos/Usuario")

describe("Controlador Usuarios - crearUsuario", () => {
  let req, res

  beforeEach(() => {
    req = { body: { nombre: "Test" } }
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    }
  })

  test("debe crear un usuario correctamente", async () => {
    const mockUser = { save: jest.fn().mockResolvedValue(true) }
    Usuario.mockImplementation(() => mockUser)

    await crearUsuario(req, res)

    expect(mockUser.save).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith(mockUser)
  })

  test("debe manejar errores al crear usuario", async () => {
    Usuario.mockImplementation(() => ({
      save: jest.fn().mockRejectedValue(new Error("Error")),
    }))

    await crearUsuario(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
  })
})
