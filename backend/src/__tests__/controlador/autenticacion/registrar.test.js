const { registrar } = require("../../../controladores/controladorAutenticacion");
const Usuario = require("../../../modelos/Usuario");

jest.mock("../../../modelos/Usuario");

describe("Controlador Autenticación - registrar", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        nombre: "Juan",
        correo: "test@test.com",
        contraseña: "123456",
        telefono: "3001112222",
        rol: "cliente"
      }
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  test("debe registrar un usuario correctamente", async () => {
    Usuario.findOne.mockResolvedValue(null); // No existe
    Usuario.prototype.save = jest.fn().mockResolvedValue(true);

    await registrar(req, res);

    expect(Usuario.findOne).toHaveBeenCalledWith({ correo: "test@test.com" });
    expect(Usuario.prototype.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      msg: "Usuario registrado correctamente"
    });
  });

  test("debe devolver error si el correo ya existe", async () => {
    Usuario.findOne.mockResolvedValue({ correo: "test@test.com" });

    await registrar(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      msg: "El correo ya está registrado"
    });
  });
});