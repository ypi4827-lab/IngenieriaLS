import React from 'react';
import '../../estilos/ListaProductos.css';
import bascula1 from '../../assets/bascula 1.png';
import bascula2 from '../../assets/bascula 2.png';
import bascula3 from '../../assets/bascula 3.png';
import sierra1 from '../../assets/sierra 1.png';
import sierra2 from '../../assets/sierra 2.png';
import sierra3 from '../../assets/sierra 3.png';
import balanza1 from '../../assets/balanza 1.png';
import balanza2 from '../../assets/balanza 2.png';
import balanza3 from '../../assets/balanza 3.png';

const ListaProductos: React.FC = () => {
  const imagenesBasculas = [bascula1, bascula2, bascula3];
  const imagenesSierras = [sierra1, sierra2, sierra3];
  const imagenesBalanzas = [balanza1, balanza2, balanza3];
  return (
    <section className="productos">
      <div className="producto">
        <h2>Productos</h2>
        <p>
          <strong>Básculas digitales:</strong> Alta precisión para procesos de
          pesaje en entornos exigentes.
        </p>

        {imagenesBasculas.map((img, i) => (
          <img key={i} src={img} alt="Báscula digital" />
        ))}
      </div>

      <div className="producto">
        <p>
          <strong>Sierras cárnicas:</strong> Diseñadas para cortes seguros,
          rápidos y eficientes en el sector alimentario.
        </p>

        {imagenesSierras.map((i) => (
          <img src={i} alt="Sierra cárnica" />
        ))}
      </div>
      <div className="producto">
        <p>
          <strong>Balanzas comerciales:</strong> Solución ideal para puntos de
          venta, mercados y almacenes.
        </p>

        {imagenesBalanzas.map((i) => (
          <img src={i} alt="Balanza comercial" />
        ))}
      </div>
    </section>
  );
};

export default ListaProductos;
