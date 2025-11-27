const {
  actualizarReserva,
} = require("../../../controladores/controladorReservas")

const Reserva = require("../../../modelos/Reserva")
jest.mock("../../../modelos/Reserva")

describe("Controlador Reservas - actualizarReserva", () => {
  let req, res

  beforeEach(() => {
    req = {
      params: { id: "123" },
      body: { estado: "actualizado" },
    }

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
  })

  test("debe actualizar una reserva correctamente", async () => {
    const mockData = { id: "123", estado: "actualizado" }

    Reserva.findByIdAndUpdate.mockResolvedValue(mockData)

    await actualizarReserva(req, res)

    expect(res.json).toHaveBeenCalledWith(mockData)
  })

  test("debe manejar reserva no encontrada", async () => {
    Reserva.findByIdAndUpdate.mockRejectedValue(new Error("No encontrada"))

    await actualizarReserva(req, res)

    expect(res.status).toHaveBeenCalledWith(404)
  })
})
