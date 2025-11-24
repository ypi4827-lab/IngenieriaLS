import { render, screen, fireEvent } from "@testing-library/react";
import CampoTelefono from "../CampoTelefono";

describe("CampoTelefono", () => {
  test("renderiza el label y el input", () => {
    render(<CampoTelefono value="" onChange={() => {}} />);

    expect(screen.getByLabelText("Número de Telefono:")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("+57 3204567890")).toBeInTheDocument();
  });

  test("muestra el valor correcto en el input", () => {
    render(<CampoTelefono value="3210001111" onChange={() => {}} />);
    expect(screen.getByLabelText("Número de Telefono:")).toHaveValue("3210001111");
  });

  test("ejecuta onChange cuando el usuario escribe", () => {
    const mockFn = vi.fn();
    render(<CampoTelefono value="" onChange={mockFn} />);

    const input = screen.getByLabelText("Número de Telefono:");
    fireEvent.change(input, { target: { value: "3001234567" } });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
