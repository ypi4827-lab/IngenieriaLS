const request = require("supertest");
const express = require("express");

const routerUsuarios = require("../../rutas/usuarios");
const controladorUsuarios = require("../../controladores/controladorUsuarios");

jest.mock("../../controladores/controladorUsuarios");

const app = express();
app.use(express.json());
app.use("/usuarios", routerUsuarios);

describe("Rutas Usuarios", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("GET /usuarios debe llamar obtenerUsuarios", async () => {
    controladorUsuarios.obtenerUsuarios.mockImplementation((req, res) =>
      res.json([{ id: 1 }])
    );

    const res = await request(app).get("/usuarios");

    expect(controladorUsuarios.obtenerUsuarios).toHaveBeenCalled();
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: 1 }]);
  });

  test("POST /usuarios debe llamar crearUsuario", async () => {
    controladorUsuarios.crearUsuario.mockImplementation((req, res) =>
      res.status(201).json({ creado: true })
    );

    const res = await request(app)
      .post("/usuarios")
      .send({ nombre: "Nuevo Usuario" });

    expect(controladorUsuarios.crearUsuario).toHaveBeenCalled();
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ creado: true });
  });

  test("PUT /usuarios/:id debe llamar actualizarUsuario", async () => {
    controladorUsuarios.actualizarUsuario.mockImplementation((req, res) =>
      res.json({ actualizado: true })
    );

    const res = await request(app)
      .put("/usuarios/123")
      .send({ nombre: "Actualizado" });

    expect(controladorUsuarios.actualizarUsuario).toHaveBeenCalled();
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ actualizado: true });
  });

  test("DELETE /usuarios/:id debe llamar eliminarUsuario", async () => {
    controladorUsuarios.eliminarUsuario.mockImplementation((req, res) =>
      res.json({ eliminado: true })
    );

    const res = await request(app).delete("/usuarios/123");

    expect(controladorUsuarios.eliminarUsuario).toHaveBeenCalled();
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ eliminado: true });
  });
});
