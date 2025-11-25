import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TarjetaAccion from "../TarjetaAccion";

describe("TarjetaAccion", () => {
  test("renderiza icono, título y descripción", () => {
    render(
      <TarjetaAccion
        icono="🔥"
        titulo="Alerta"
        descripcion="Algo importante ocurrió"
        onClick={() => {}}
      />
    );

    expect(screen.getByText("🔥")).toBeInTheDocument();
    expect(screen.getByText("Alerta")).toBeInTheDocument();
    expect(screen.getByText("Algo importante ocurrió")).toBeInTheDocument();
  });

  test("ejecuta onClick al hacer click", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <TarjetaAccion
        icono="✔️"
        titulo="Aceptar"
        descripcion="Presiona para continuar"
        onClick={handleClick}
      />
    );

    await user.click(screen.getByText("Aceptar"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
