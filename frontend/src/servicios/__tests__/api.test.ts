import axios from "axios";
import API from "../api";

vi.mock("axios", () => {
  return {
    default: {
      create: vi.fn(() => ({
        get: vi.fn(),
        post: vi.fn(),
        put: vi.fn(),
        delete: vi.fn(),
        interceptors: {
          request: { use: vi.fn() }
        }
      }))
    }
  };
});

test("configura axios con baseURL correcto", () => {
  expect(axios.create).toHaveBeenCalledWith({
    baseURL: "https://ingenierials.onrender.com/api",
  });
});

test("interceptor agrega Authorization si hay token", () => {
  const token = "abc123";
  localStorage.setItem("token", token);

  const config = { headers: {} };
  const interceptor = (API as any).interceptors.request.use.mock.calls[0][0];

  const result = interceptor(config);

  expect(result.headers.Authorization).toBe(`Bearer ${token}`);
});
