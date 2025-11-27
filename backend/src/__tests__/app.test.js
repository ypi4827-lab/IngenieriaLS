const request = require("supertest");
const app = require("../app");

describe("API básica", () => {
  test("GET / debe responder correctamente", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("API de Ingeniería LS funcionando correctamente");
  });
});
