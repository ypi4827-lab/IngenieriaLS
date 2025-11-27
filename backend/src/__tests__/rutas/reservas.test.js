const request = require("supertest");
const express = require("express");

jest.mock("../../controladores/controladorReservas", () => ({
  obtenerReservas: jest.fn((req, res) => res.json([])),
  crearReserva: jest.fn((req, res) => res.status(201).json({})),
  actualizarReserva: jest.fn((req, res) => res.json({})),
  eliminarReserva: jest.fn((req, res) => res.json({ mensaje: "ok" })),
}));

const controladorReservas = require("../../controladores/controladorReservas");
const rutasReservas = require("../../rutas/reservas");

describe("Rutas de Reservas", () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use("/reservas", rutasReservas);
  });

  test("GET /reservas debe llamar obtenerReservas", async () => {
    await request(app).get("/reservas");

    expect(controladorReservas.obtenerReservas).toHaveBeenCalled();
  });

  test("POST /reservas debe llamar crearReserva", async () => {
    await request(app).post("/reservas").send({});

    expect(controladorReservas.crearReserva).toHaveBeenCalled();
  });

  test("PUT /reservas/:id debe llamar actualizarReserva", async () => {
    await request(app).put("/reservas/123").send({});

    expect(controladorReservas.actualizarReserva).toHaveBeenCalled();
    expect(controladorReservas.actualizarReserva.mock.calls[0][0].params.id)
      .toBe("123");
  });

  test("DELETE /reservas/:id debe llamar eliminarReserva", async () => {
    await request(app).delete("/reservas/321");

    expect(controladorReservas.eliminarReserva).toHaveBeenCalled();
    expect(controladorReservas.eliminarReserva.mock.calls[0][0].params.id)
      .toBe("321");
  });
});
