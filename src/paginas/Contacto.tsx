import React from "react";
import "../estilos/contacto.css";
import FormularioContacto from "../componentes/contacto/FormularioContacto";
import MapaUbicacion from "../componentes/contacto/MapaUbicacion";

const Contacto: React.FC = () => {
  return (
    <div className="contacto-contenedor">
      <h2 className="contacto-titulo">Contáctanos</h2>
      <p className="contacto-descripcion">
        Si tienes dudas, comentarios o necesitas asistencia técnica, completa el formulario
        o visítanos en nuestras instalaciones.
      </p>

      <FormularioContacto />

      <div className="contacto-ubicacion">
        <h3>Ubicación</h3>
        <MapaUbicacion />
      </div>
    </div>
  );
};

export default Contacto;
