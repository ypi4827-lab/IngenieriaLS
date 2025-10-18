import React from "react";
import "../../estilos/listaacceso.css";
import TipoAcceso from "./TipoAcceso";
import adminIcono from "../../assets/asesoria.png";
import tecnicoIcono from "../../assets/tecnico.png";
import asesorIcono from "../../assets/asesor.png";

const ListaAcceso: React.FC = () => {
  return (
    <section className="lista-accesos">
      <h2 className="titulo-principal">INGRESO AL SISTEMA</h2>
      <p className="subtitulo">Seleccione su tipo de acceso</p>

      <TipoAcceso
        icono={adminIcono}
        titulo="ADMINISTRADOR"
        descripcion="Es el encargado de gestionar todo el sistema y de configuración general."
      />

      <TipoAcceso
        icono={tecnicoIcono}
        titulo="TECNICO"
        descripcion="Gestiona tareas de mantenimiento y soporte."
      />

      <TipoAcceso
        icono={asesorIcono}
        titulo="ASESOR COMERCIAL"
        descripcion="Consulta productos y atiende clientes."
      />
    </section>
  );
};

export default ListaAcceso;
