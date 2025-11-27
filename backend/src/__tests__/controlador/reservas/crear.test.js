const {
  crearReserva,
} = require("../../../controladores/controladorReservas")

const Reserva = require("../../../modelos/Reserva")
jest.mock("../../../modelos/Reserva")

describe("Controlador Reservas - crearReserva", () => {
  let req, res

  beforeEach(() => {
    req = { body: { clienteId: "123", fecha: "2025-10-22" } }
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }
  })

  test("debe crear una reserva correctamente", async () => {
    const mockSave = jest.fn().mockResolvedValue(true)

    Reserva.mockImplementation(() => ({
      save: mockSave,
      ...req.body,
    }))

    await crearReserva(req, res)

    expect(mockSave).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(201)
  })

  test("debe manejar error al crear reserva", async () => {
    Reserva.mockImplementation(() => ({
      save: jest.fn().mockRejectedValue(new Error("Error")),
    }))

    await crearReserva(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
  })
})
