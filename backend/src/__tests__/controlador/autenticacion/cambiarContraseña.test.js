const {
  cambiarContraseña,
} = require("../../../controladores/controladorAutenticacion")
const Usuario = require("../../../modelos/Usuario")

jest.mock("../../../modelos/Usuario")

describe("Controlador Autenticación - cambiarContraseña", () => {
  let req, res

  beforeEach(() => {
    req = {
      usuario: { id: "123" },
      body: { nuevaContraseña: "nueva123" },
    }

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
  })

  test("debe devolver error si no se envía la nueva contraseña", async () => {
    req.body = {}

    await cambiarContraseña(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      msg: "La contraseña es requerida",
    })
  })

  test("debe cambiar la contraseña correctamente", async () => {
    const mockUser = {
      contraseña: "",
      save: jest.fn().mockResolvedValue(true),
    }

    Usuario.findById.mockReturnValue({
      select: jest.fn().mockResolvedValue(mockUser),
    })

    await cambiarContraseña(req, res)

    expect(mockUser.contraseña).toBe("nueva123")
    expect(mockUser.save).toHaveBeenCalled()
    expect(res.json).toHaveBeenCalledWith({
      msg: "Contraseña cambiada correctamente",
    })
  })

  test("debe manejar errores del servidor", async () => {
    Usuario.findById.mockImplementationOnce(() => {
      throw new Error("DB error")
    })

    await cambiarContraseña(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
  })
})
