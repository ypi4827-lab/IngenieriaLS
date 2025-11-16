import API from "./api";

export interface Equipo {
  _id?: string;
  nombre: string;
  codigo?: string;
  estado: "Disponible" | "En mantenimiento" | "Dañado";
  marca?: string;
  modelo?: string;
}

export const obtenerEquipos = async (): Promise<Equipo[]> => {
  const { data } = await API.get("/equipos");
  return data;
};

export const crearEquipo = async (equipo: Equipo): Promise<Equipo> => {
  const { data } = await API.post("/equipos", equipo);
  return data;
};

export const actualizarEquipo = async (id: string, equipo: Partial<Equipo>): Promise<Equipo> => {
  const { data } = await API.put(`/equipos/${id}`, equipo);
  return data;
};

export const eliminarEquipo = async (id: string): Promise<void> => {
  await API.delete(`/equipos/${id}`);
};
