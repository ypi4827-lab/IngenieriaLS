const {
  actualizarUsuario,
} = require("../../../controladores/controladorUsuarios")
const Usuario = require("../../../modelos/Usuario")

jest.mock("../../../modelos/Usuario")

describe("Controlador Usuarios - actualizarUsuario", () => {
  let req, res

  beforeEach(() => {
    req = { params: { id: "1" }, body: { nombre: "Nuevo" } }
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    }
  })

  test("debe actualizar un usuario correctamente", async () => {
    const mockActualizado = { id: "1", nombre: "Nuevo" }
    Usuario.findByIdAndUpdate.mockResolvedValue(mockActualizado)

    await actualizarUsuario(req, res)

    expect(res.json).toHaveBeenCalledWith(mockActualizado)
  })

  test("debe manejar usuario no encontrado", async () => {
    Usuario.findByIdAndUpdate.mockRejectedValue(new Error())

    await actualizarUsuario(req, res)

    expect(res.status).toHaveBeenCalledWith(404)
  })
})
