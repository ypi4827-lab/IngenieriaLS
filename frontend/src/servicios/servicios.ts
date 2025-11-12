import API from "./api";

export interface Servicio {
  _id?: string;
  nombre: string;
  descripcion?: string;
  tipo: "Mantenimiento" | "Reparación";
  costoBase?: number;
  duracionEstimada?: string;
  imagenServicio?: string;
}

export const obtenerServicios = async (): Promise<Servicio[]> => {
  const { data } = await API.get("/servicios");
  return data;
};

export const crearServicio = async (servicio: Servicio): Promise<Servicio> => {
  const { data } = await API.post("/servicios", servicio);
  return data;
};

export const actualizarServicio = async (id: string, servicio: Partial<Servicio>): Promise<Servicio> => {
  const { data } = await API.put(`/servicios/${id}`, servicio);
  return data;
};

export const eliminarServicio = async (id: string): Promise<void> => {
  await API.delete(`/servicios/${id}`);
};
