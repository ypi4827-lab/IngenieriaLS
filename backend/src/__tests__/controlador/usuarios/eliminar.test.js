const {
  eliminarUsuario,
} = require("../../../controladores/controladorUsuarios")
const Usuario = require("../../../modelos/Usuario")

jest.mock("../../../modelos/Usuario")

describe("Controlador Usuarios - eliminarUsuario", () => {
  let req, res

  beforeEach(() => {
    req = { params: { id: "1" } }
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    }
  })

  test("debe eliminar el usuario correctamente", async () => {
    Usuario.findByIdAndDelete.mockResolvedValue(true)

    await eliminarUsuario(req, res)

    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Usuario eliminado correctamente",
    })
  })

  test("debe manejar usuario no encontrado", async () => {
    Usuario.findByIdAndDelete.mockRejectedValue(new Error())

    await eliminarUsuario(req, res)

    expect(res.status).toHaveBeenCalledWith(404)
  })
})
