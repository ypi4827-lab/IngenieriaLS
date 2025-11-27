const request = require("supertest")
const express = require("express")

jest.mock("../../middlewares/auth", () => jest.fn((req, res, next) => next()))
jest.mock("../../controladores/controladorAutenticacion", () => ({
  registrar: jest.fn((req, res) => res.json({ ruta: "registro" })),
  login: jest.fn((req, res) => res.json({ ruta: "login" })),
  cambiarContraseña: jest.fn((req, res) => res.json({ ruta: "cambiar-contrasena" })),
  solicitarRecuperacion: jest.fn((req, res) => res.json({ ruta: "recuperar" })),
  restablecerContraseña: jest.fn((req, res) => res.json({ ruta: "restablecer" }))
}))

const rutasAuth = require("../../rutas/autenticacion")

describe("Rutas - Autenticación", () => {
  let app

  beforeEach(() => {
    app = express()
    app.use(express.json())
    app.use("/auth", rutasAuth)
  })

  test("POST /auth/registro debe llamar al controlador registrar", async () => {
    const res = await request(app).post("/auth/registro").send({})

    expect(res.body).toEqual({ ruta: "registro" })
  })

  test("POST /auth/login debe llamar al controlador login", async () => {
    const res = await request(app).post("/auth/login").send({})

    expect(res.body).toEqual({ ruta: "login" })
  })

  test("PUT /auth/cambiar-contrasena debe usar el middleware auth y llamar a cambiarContraseña", async () => {
    const res = await request(app).put("/auth/cambiar-contrasena").send({})

    expect(res.body).toEqual({ ruta: "cambiar-contrasena" })
  })

  test("POST /auth/recuperar debe llamar a solicitarRecuperacion", async () => {
    const res = await request(app).post("/auth/recuperar").send({})

    expect(res.body).toEqual({ ruta: "recuperar" })
  })

  test("PUT /auth/restablecer/:token debe llamar a restablecerContraseña", async () => {
    const res = await request(app).put("/auth/restablecer/123abc").send({})

    expect(res.body).toEqual({ ruta: "restablecer" })
  })
})
