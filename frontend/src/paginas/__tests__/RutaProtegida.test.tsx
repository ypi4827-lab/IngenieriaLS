import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RutaProtegida from '../RutaProtegida';

function renderConRutas(elemento: React.ReactNode) {
  return render(
    <MemoryRouter initialEntries={['/privado']}>
      <Routes>
        <Route path="/privado" element={elemento} />
        <Route path="/ingreso" element={<div>PAGINA-INGRESO</div>} />
      </Routes>
    </MemoryRouter>
  );
}

test('redirige si no hay token', () => {
  localStorage.clear();
  localStorage.setItem('usuario', JSON.stringify({ rol: 'usuario' }));

  renderConRutas(
    <RutaProtegida>
      <div>SECRETO</div>
    </RutaProtegida>
  );

  expect(screen.queryByText('SECRETO')).not.toBeInTheDocument();
  expect(screen.getByText('PAGINA-INGRESO')).toBeInTheDocument();
});

test("permite acceso si el usuario es administrador", () => {
  localStorage.clear();
  localStorage.setItem("token", "abc123");
  localStorage.setItem("usuario", JSON.stringify({ rol: "administrador" }));

  renderConRutas(
    <RutaProtegida>
      <div>SECRETO</div>
    </RutaProtegida>
  );

  expect(screen.getByText("SECRETO")).toBeInTheDocument();
});

test("permite acceso si el usuario tiene un rol permitido", () => {
  localStorage.clear();
  localStorage.setItem("token", "abc123");
  localStorage.setItem("usuario", JSON.stringify({ rol: "cliente" }));

  renderConRutas(
    <RutaProtegida rolesPermitidos={["cliente", "tecnico"]}>
      <div>SECRETO</div>
    </RutaProtegida>
  );

  expect(screen.getByText("SECRETO")).toBeInTheDocument();
});

test("redirige si el rol del usuario NO está permitido", () => {
  localStorage.clear();
  localStorage.setItem("token", "abc123");
  localStorage.setItem("usuario", JSON.stringify({ rol: "cliente" }));

  renderConRutas(
    <RutaProtegida rolesPermitidos={["tecnico"]}>
      <div>SECRETO</div>
    </RutaProtegida>
  );

  expect(screen.queryByText("SECRETO")).not.toBeInTheDocument();
  expect(screen.getByText("PAGINA-INGRESO")).toBeInTheDocument();
});

test("redirige si no existe usuario en localStorage", () => {
  localStorage.clear();
  localStorage.setItem("token", "abc123");
  localStorage.setItem("usuario", "{}");

  renderConRutas(
    <RutaProtegida>
      <div>SECRETO</div>
    </RutaProtegida>
  );

  expect(screen.queryByText("SECRETO")).not.toBeInTheDocument();
  expect(screen.getByText("PAGINA-INGRESO")).toBeInTheDocument();
});