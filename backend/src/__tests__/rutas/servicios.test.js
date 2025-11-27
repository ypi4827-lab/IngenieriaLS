const request = require("supertest");
const express = require("express");

const routerServicios = require("../../rutas/servicios");
const controladorServicios = require("../../controladores/controladorServicios");

jest.mock("../../controladores/controladorServicios");

const app = express();
app.use(express.json());
app.use("/servicios", routerServicios);

describe("Rutas Servicios", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("GET /servicios debe llamar obtenerServicios", async () => {
    controladorServicios.obtenerServicios.mockImplementation((req, res) =>
      res.json([{ id: 1 }])
    );

    const res = await request(app).get("/servicios");

    expect(controladorServicios.obtenerServicios).toHaveBeenCalled();
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: 1 }]);
  });

  test("POST /servicios debe llamar crearServicio", async () => {
    controladorServicios.crearServicio.mockImplementation((req, res) =>
      res.status(201).json({ creado: true })
    );

    const res = await request(app)
      .post("/servicios")
      .send({ nombre: "Servicio X" });

    expect(controladorServicios.crearServicio).toHaveBeenCalled();
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ creado: true });
  });

  test("PUT /servicios/:id debe llamar actualizarServicio", async () => {
    controladorServicios.actualizarServicio.mockImplementation((req, res) =>
      res.json({ actualizado: true })
    );

    const res = await request(app)
      .put("/servicios/123")
      .send({ nombre: "Actualizado" });

    expect(controladorServicios.actualizarServicio).toHaveBeenCalled();
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ actualizado: true });
  });

  test("DELETE /servicios/:id debe llamar eliminarServicio", async () => {
    controladorServicios.eliminarServicio.mockImplementation((req, res) =>
      res.json({ eliminado: true })
    );

    const res = await request(app).delete("/servicios/123");

    expect(controladorServicios.eliminarServicio).toHaveBeenCalled();
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ eliminado: true });
  });
});
