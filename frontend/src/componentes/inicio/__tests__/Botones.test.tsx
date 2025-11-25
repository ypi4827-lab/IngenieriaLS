import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Botones from "../Botones";

describe("Botones", () => {
  test("renderiza los botones PRODUCTOS y SERVICIOS", () => {
    render(
      <MemoryRouter>
        <Botones />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: "PRODUCTOS" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "SERVICIOS" })).toBeInTheDocument();
  });

  test("los botones están dentro de sus enlaces correctos", async () => {
    render(
      <MemoryRouter>
        <Botones />
      </MemoryRouter>
    );

    const btnProductos = screen.getByRole("button", { name: "PRODUCTOS" });
    const btnServicios = screen.getByRole("button", { name: "SERVICIOS" });

    expect(btnProductos.closest("a")).toHaveAttribute("href", "/productos");
    expect(btnServicios.closest("a")).toHaveAttribute("href", "/servicios");
  });

  test("permite hacer click en ambos botones", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Botones />
      </MemoryRouter>
    );

    const btnProductos = screen.getByRole("button", { name: "PRODUCTOS" });
    const btnServicios = screen.getByRole("button", { name: "SERVICIOS" });

    await user.click(btnProductos);
    await user.click(btnServicios);

    expect(btnProductos).toBeEnabled();
    expect(btnServicios).toBeEnabled();
  });
});
