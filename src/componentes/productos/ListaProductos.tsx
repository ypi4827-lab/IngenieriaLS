import React from "react";
import "../../estilos/ListaProductos.css";
import bascula from "../../assets/bascula 1.jpg";
import sierra from "../../assets/sierra1.jpg";
import balanza from "../../assets/balanza 1.jpg";

const ListaProductos: React.FC = () => {
  return (
    <section className="productos">
      <div className="producto">
        <p>
          <strong>Básculas digitales:</strong> Alta precisión para procesos de pesaje en entornos exigentes.
        </p>
        <img src={bascula} alt="Báscula digital" />
      </div>

      <div className="producto">
        <p>
          <strong>Sierras cárnicas:</strong> Diseñadas para cortes seguros, rápidos y eficientes en el sector alimentario.
        </p>
        <img src={sierra} alt="Sierra cárnica" />
      </div>

      <div className="producto">
        <p>
          <strong>Balanzas comerciales:</strong> Solución ideal para puntos de venta, mercados y almacenes.
        </p>
        <img src={balanza} alt="Balanza comercial" />
      </div>
    </section>
  );
};

export default ListaProductos;