import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Botones from "../Botones";

describe("Botones de navegación", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.history.back = vi.fn();
  });

  test("renderiza los botones y el enlace correctamente", () => {
    render(
      <MemoryRouter>
        <Botones />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /atrás/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /¿olvidaste tu contraseña\?/i })).toHaveAttribute(
      "href",
      "/recuperacion"
    );
  });

  test("el botón Atrás llama a window.history.back", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Botones />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: /atrás/i }));

    expect(window.history.back).toHaveBeenCalled();
  });
});
