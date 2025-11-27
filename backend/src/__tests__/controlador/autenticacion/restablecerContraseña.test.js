const {
  restablecerContraseña,
} = require("../../../controladores/controladorAutenticacion")
const Usuario = require("../../../modelos/Usuario")

jest.mock("../../../modelos/Usuario")

describe("Controlador Autenticación - restablecerContraseña", () => {
  let req, res

  beforeEach(() => {
    req = {
      params: { token: "ABC123" },
      body: { nuevaContraseña: "nueva123" },
    }

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
  })

  test("debe devolver error si el token es inválido o expirado", async () => {
    Usuario.findOne.mockReturnValue({
      select: jest.fn().mockResolvedValue(null),
    })

    await restablecerContraseña(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      msg: "Token inválido o expirado",
    })
  })

  test("debe actualizar la contraseña correctamente", async () => {
    const mockUser = {
      contraseña: "",
      restablecerToken: "ABC123",
      expiraToken: Date.now() + 10000,
      save: jest.fn().mockResolvedValue(true),
    }

    Usuario.findOne.mockReturnValue({
      select: jest.fn().mockResolvedValue(mockUser),
    })

    await restablecerContraseña(req, res)

    expect(mockUser.contraseña).toBe("nueva123")
    expect(mockUser.restablecerToken).toBeUndefined()
    expect(mockUser.expiraToken).toBeUndefined()
    expect(mockUser.save).toHaveBeenCalled()

    expect(res.json).toHaveBeenCalledWith({
      msg: "Contraseña actualizada correctamente",
    })
  })

  test("debe manejar errores del servidor", async () => {
    Usuario.findOne.mockImplementation(() => {
      throw new Error("DB error")
    })

    await restablecerContraseña(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
  })
})
