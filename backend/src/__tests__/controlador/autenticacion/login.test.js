const { login } = require("../../../controladores/controladorAutenticacion")
const jwt = require("jsonwebtoken")
const Usuario = require("../../../modelos/Usuario")

jest.mock("jsonwebtoken")
jest.mock("../../../modelos/Usuario")

describe("Controlador Autenticación - login", () => {
  let req, res

  beforeEach(() => {
    req = {
      body: {
        correo: "test@test.com",
        contraseña: "123456",
      },
    }

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
  })

  test("debe devolver error si el usuario no existe", async () => {
    Usuario.findOne.mockReturnValue({
      select: jest.fn().mockResolvedValue(null),
    })

    await login(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ msg: "Usuario no encontrado" })
  })

  test("debe devolver error si la contraseña es incorrecta", async () => {
    const mockUser = {
      compararContraseña: jest.fn().mockResolvedValue(false),
    }

    Usuario.findOne.mockReturnValue({
      select: jest.fn().mockResolvedValue(mockUser),
    })

    await login(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ msg: "Contraseña incorrecta" })
  })

  test("debe iniciar sesión correctamente", async () => {
    const mockUser = {
      _id: "123",
      nombre: "Juan",
      correo: "test@test.com",
      telefono: "3001112222",
      rol: "cliente",
      compararContraseña: jest.fn().mockResolvedValue(true),
    }

    Usuario.findOne.mockReturnValue({
      select: jest.fn().mockResolvedValue(mockUser),
    })
    jwt.sign.mockReturnValue("FAKE_TOKEN")

    await login(req, res)

    expect(res.json).toHaveBeenCalledWith({
      msg: "Inicio de sesión exitoso",
      token: "FAKE_TOKEN",
      usuario: {
        id: "123",
        nombre: "Juan",
        correo: "test@test.com",
        telefono: "3001112222",
        rol: "cliente",
      },
    })
  })
})
