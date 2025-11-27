const request = require("supertest")
const express = require("express")

const equiposRouter = require("../../rutas/equipos")

jest.mock("../../controladores/controladorEquipos", () => ({
  obtenerEquipos: jest.fn((req, res) => res.json([{ id: 1 }])),
  crearEquipo: jest.fn((req, res) => res.status(201).json({ id: 2 })),
  actualizarEquipo: jest.fn((req, res) => res.json({ actualizado: true })),
  eliminarEquipo: jest.fn((req, res) =>
    res.json({ mensaje: "Equipo eliminado correctamente" })
  ),
}))

const controladorEquipos = require("../../controladores/controladorEquipos")

describe("Rutas de Equipos", () => {
  let app

  beforeEach(() => {
    app = express()
    app.use(express.json())
    app.use("/api/equipos", equiposRouter)
  })

  test("GET /api/equipos debe llamar obtenerEquipos", async () => {
    await request(app).get("/api/equipos")

    expect(controladorEquipos.obtenerEquipos).toHaveBeenCalled()
  })

  test("POST /api/equipos debe llamar crearEquipo", async () => {
    await request(app).post("/api/equipos").send({ nombre: "PC Gamer" })

    expect(controladorEquipos.crearEquipo).toHaveBeenCalled()
  })

  test("PUT /api/equipos/:id debe llamar actualizarEquipo", async () => {
    await request(app).put("/api/equipos/123").send({ nombre: "Actualizado" })

    expect(controladorEquipos.actualizarEquipo).toHaveBeenCalled()
  })

  test("DELETE /api/equipos/:id debe llamar eliminarEquipo", async () => {
    await request(app).delete("/api/equipos/123")

    expect(controladorEquipos.eliminarEquipo).toHaveBeenCalled()
  })
})
