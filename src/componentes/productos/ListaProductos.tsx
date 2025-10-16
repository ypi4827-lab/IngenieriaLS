import React from "react";
import "../../estilos/ListaProductos.css";
import bascula1 from "../../assets/bascula 1.jpg";
import bascula2 from "../../assets/bascula 2.jpg";
import bascula3 from"../../assets/bascula 3.jpg";
import sierra1 from "../../assets/sierra 1.jpg";
import sierra2 from "../../assets/sierra 2.jpg";
import sierra3 from "../../assets/sierra 3.jpg";
import balanza1 from "../../assets/balanza 1.jpg";
import balanza2 from "../../assets/balanza 2.jpg";
import balanza3 from "../../assets/balanza 3.jpg";

const ListaProductos: React.FC = () => {
  const imagenesBasculas = [bascula1,bascula2,bascula3]
  const imagenesSierras = [sierra1,sierra2,sierra3]
  const imagenesBalanzas = [balanza1,balanza2,balanza3]
  return (
    <section className="productos">
          <div className="producto">
        <p>
          <strong>Básculas digitales:</strong> Alta precisión para procesos de pesaje en entornos exigentes.
        </p>
      {imagenesBasculas.map((i) => (
        <img src={i} alt="Báscula digital" />
      ))}
      </div>
      
      <div className="producto">
        <p>
          <strong>Sierras cárnicas:</strong> Diseñadas para cortes seguros, rápidos y eficientes en el sector alimentario.
        </p>
       {imagenesSierras.map((i) => (
        <img src={i} alt="Sierra cárnica" />
      ))}
      </div>
      <div className="producto">
        <p>
          <strong>Balanzas comerciales:</strong> Solución ideal para puntos de venta, mercados y almacenes.
        </p>
      {imagenesBalanzas.map((i) => (
        <img src={i} alt="Balanza comercial" />
      ))}
      </div>
    </section>
  );
};

export default ListaProductos; 