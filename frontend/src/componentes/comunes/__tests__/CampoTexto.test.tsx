import { render, screen, fireEvent } from "@testing-library/react";
import CampoTexto from "../CampoTexto";

describe("CampoTexto", () => {
  test("muestra el label y el input correctamente", () => {
    render(
      <CampoTexto
        label="Nombre"
        value=""
        onChange={() => {}}
        placeholder="Ingresa tu nombre"
      />
    );

    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Ingresa tu nombre")).toBeInTheDocument();
  });

  test("usa el tipo de input correcto", () => {
    render(
      <CampoTexto
        label="Edad"
        type="number"
        value=""
        onChange={() => {}}
      />
    );

    const input = screen.getByLabelText("Edad");
    expect(input).toHaveAttribute("type", "number");
  });

  test("ejecuta onChange al escribir", () => {
    const mockFn = vi.fn();
    render(
      <CampoTexto
        label="Email"
        value=""
        onChange={mockFn}
      />
    );

    const input = screen.getByLabelText("Email");
    fireEvent.change(input, { target: { value: "correo@test.com" } });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
