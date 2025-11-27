const { solicitarRecuperacion } = require("../../../controladores/controladorAutenticacion");
const Usuario = require("../../../modelos/Usuario");
const transporter = require("../../../correo");

jest.mock("../../../modelos/Usuario");
jest.mock("../../../correo");

describe("Controlador Autenticación - solicitarRecuperacion", () => {
  let req, res;

  beforeEach(() => {
    req = { body: { correo: "test@test.com" } };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    transporter.sendMail.mockResolvedValue(true);

    process.env.FRONTEND_URL = "https://frontend.com";
  });

  test("debe dar error si el usuario no existe", async () => {
    Usuario.findOne.mockResolvedValue(null);

    await solicitarRecuperacion(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      msg: "No existe un usuario con este correo",
    });
  });

  test("debe generar token y enviar el correo", async () => {
    const mockUser = {
      restablecerToken: "",
      expiraToken: "",
      save: jest.fn().mockResolvedValue(true),
    };

    Usuario.findOne.mockResolvedValue(mockUser);

    await solicitarRecuperacion(req, res);

    expect(mockUser.restablecerToken).toHaveLength(64); // 32 bytes HEX
    expect(mockUser.save).toHaveBeenCalled();
    expect(transporter.sendMail).toHaveBeenCalled();

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        msg: "Correo enviado",
      })
    );
  });

  test("debe manejar errores del servidor", async () => {
    Usuario.findOne.mockRejectedValue(new Error("DB error"));

    await solicitarRecuperacion(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});
