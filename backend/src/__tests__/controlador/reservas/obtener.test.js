const { obtenerReservas } = require("../../../controladores/controladorReservas")
const Reserva = require("../../../modelos/Reserva")

jest.mock("../../../modelos/Reserva")

describe("Controlador Reservas - obtenerReservas", () => {
  let req, res

  beforeEach(() => {
    req = { query: {} }

    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    }
  })

  test("debe devolver todas las reservas", async () => {
    const mockReservas = [{ id: 1 }, { id: 2 }]

    // M O C K  D E  L A  C A D E N A
    Reserva.find.mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockResolvedValue(mockReservas),
      }),
    })

    await obtenerReservas(req, res)

    expect(res.json).toHaveBeenCalledWith(mockReservas)
  })

  test("debe aplicar filtros correctamente", async () => {
    req.query = { clienteId: "123" }

    const mockReservas = [{ id: 99 }]

    Reserva.find.mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockResolvedValue(mockReservas),
      }),
    })

    await obtenerReservas(req, res)

    expect(Reserva.find).toHaveBeenCalledWith({ clienteId: "123" })
    expect(res.json).toHaveBeenCalledWith(mockReservas)
  })

  test("debe manejar errores del servidor", async () => {
    Reserva.find.mockImplementation(() => {
      throw new Error("DB Error")
    })

    await obtenerReservas(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Error del servidor",
      error: "DB Error",
    })
  })
})
