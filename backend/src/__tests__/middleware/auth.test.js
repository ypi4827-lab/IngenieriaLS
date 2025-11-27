const jwt = require("jsonwebtoken");
const auth = require("../../middlewares/auth");

jest.mock("jsonwebtoken");

describe("Middleware Auth", () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      header: jest.fn(),
      usuario: null,
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    next = jest.fn();
  });

  test("debe devolver 401 si no se envía el header Authorization", () => {
    req.header.mockReturnValue(null);

    auth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      msg: "No autorizado. Falta token",
    });
    expect(next).not.toHaveBeenCalled();
  });

  test("debe devolver 401 si el token es inválido", () => {
    req.header.mockReturnValue("Bearer token_falso");

    jwt.verify.mockImplementation(() => {
      throw new Error("Token inválido");
    });

    auth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      msg: "Token inválido",
    });
    expect(next).not.toHaveBeenCalled();
  });

  test("debe permitir el acceso si el token es válido", () => {
    req.header.mockReturnValue("Bearer token_real");

    const decodedUser = { id: "123", rol: "admin" };

    jwt.verify.mockReturnValue(decodedUser);

    auth(req, res, next);

    expect(req.usuario).toEqual(decodedUser);
    expect(next).toHaveBeenCalled();
  });
});
