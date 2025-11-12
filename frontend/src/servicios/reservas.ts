import API from "./api";

export interface Reserva {
  _id?: string;
  clienteId: string;
  servicioId: string;
  tecnicoAsignado?: string;
  fechaProgramada: string;
  horaProgramada: string;
  estado?: string;
  notasCliente?: string;
  informeTecnico?: string;
}

export const crearReserva = async (reserva: Reserva): Promise<Reserva[]> => {
  const { data } = await API.post("/reservas", reserva);
  return data;
};

export const obtenerReservas = async (): Promise<Reserva[]> => {
  const { data } = await API.get("/reservas");
  return data;
};

export const actualizarReserva = async (id: string, reserva: Partial<Reserva>): Promise<Reserva[]> => {
  const { data } = await API.put(`/reservas/${id}`, reserva);
  return data;
};

export const eliminarReserva = async (id: string): Promise<Reserva[]> => {
  const { data } = await API.put(`/reservas/${id}`);
  return data;
};
