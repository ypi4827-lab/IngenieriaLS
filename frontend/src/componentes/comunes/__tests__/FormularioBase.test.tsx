import { render, screen } from "@testing-library/react";
import FormularioBase from "../FormularioBase";

describe("FormularioBase", () => {
  test("renderiza el título y los children", () => {
    render(
      <FormularioBase titulo="Registro">
        <p>Contenido dentro del formulario</p>
      </FormularioBase>
    );

    expect(screen.getByText("Registro")).toBeInTheDocument();
    expect(screen.getByText("Contenido dentro del formulario")).toBeInTheDocument();
  });

  test("usa correctamente la clase del formulario", () => {
    const { container } = render(
      <FormularioBase titulo="Prueba">
        <span>child</span>
      </FormularioBase>
    );

    const form = container.querySelector("form");
    expect(form).toHaveClass("formulario-base");
  });
});
