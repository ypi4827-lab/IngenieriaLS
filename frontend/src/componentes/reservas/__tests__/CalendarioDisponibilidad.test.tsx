import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CalendarioDisponibilidad from "../CalendarioDisponibilidad";

test("permite seleccionar fecha y hora", async () => {
  const setFecha = vi.fn();
  const setHora = vi.fn();
  const user = userEvent.setup();

  render(
    <CalendarioDisponibilidad
      fechaProgramada=""
      setFechaProgramada={setFecha}
      hora=""
      setHora={setHora}
    />
  );

  const fechaInput = screen.getByLabelText("Selecciona la fecha");
  const horaSelect = screen.getByLabelText("Selecciona la hora");

  await user.type(fechaInput, "2025-12-01");
  await user.selectOptions(horaSelect, "10:00");

  expect(setFecha).toHaveBeenCalled();
  expect(setHora).toHaveBeenCalledWith("10:00");
});
