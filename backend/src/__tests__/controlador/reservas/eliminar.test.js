const {
  eliminarReserva,
} = require("../../../controladores/controladorReservas")

const Reserva = require("../../../modelos/Reserva")
jest.mock("../../../modelos/Reserva")

describe("Controlador Reservas - eliminarReserva", () => {
  let req, res

  beforeEach(() => {
    req = { params: { id: "123" } }
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
  })

  test("debe eliminar una reserva correctamente", async () => {
    Reserva.findByIdAndDelete.mockResolvedValue(true)

    await eliminarReserva(req, res)

    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Reserva eliminada correctamente",
    })
  })

  test("debe manejar reserva no encontrada", async () => {
    Reserva.findByIdAndDelete.mockRejectedValue(new Error("No encontrada"))

    await eliminarReserva(req, res)

    expect(res.status).toHaveBeenCalledWith(404)
  })
})
