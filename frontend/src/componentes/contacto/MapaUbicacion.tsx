import React from 'react';
import '../../estilos/contacto.css';

const MapaUbicacion: React.FC = () => {
  return (
    <div className="mapa-ubicacion">
      <iframe
        title="Ubicación Ingeniería LS - Cali"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254900.07173417337!2d-76.69048215755966!3d3.395622352900579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1762472237609!5m2!1ses!2sco"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapaUbicacion;
