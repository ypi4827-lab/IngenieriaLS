import API from "./api";
import type { Usuario } from "./usuarios";

export interface Reserva {
  _id?: string;
  clienteId: string | Usuario;
  servicio: string;
  tecnicoAsignado?: string | Usuario;
  fechaProgramada: string;
  horaProgramada: string;
  estado?: string;
}

export const obtenerReservas = async (): Promise<Reserva[]> => {
  const { data } = await API.get("/reservas");
  return data;
};

export const obtenerReservasCliente = async (clienteId: string): Promise<Reserva[]> => {
  const { data } = await API.get(`/reservas?clienteId=${clienteId}`);
  return data;
};

export const obtenerReservasTecnico = async (tecnicoId: string): Promise<Reserva[]> => {
  const { data } = await API.get(`/reservas?tecnicoAsignado=${tecnicoId}`);
  return data;
};

export const crearReserva = async (reserva: Reserva): Promise<Reserva[]> => {
  const { data } = await API.post("/reservas", reserva);
  return data;
};

export const actualizarReserva = async (id: string, reserva: Partial<Reserva>): Promise<Reserva[]> => {
  const { data } = await API.put(`/reservas/${id}`, reserva);
  return data;
};

export const eliminarReserva = async (id: string): Promise<Reserva[]> => {
  const { data } = await API.delete(`/reservas/${id}`);
  return data;
};
