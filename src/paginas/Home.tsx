import Boton from "../componentes/comunes/Boton";
import Invitacion from "../componentes/inicio/Invitacion";
import Productos from './Productos';
import Servicios from './Servicios';

function Home() {
    return (
        <>
        <Invitacion></Invitacion>
        <Productos></Productos>
        <Boton texto='Ver más' enlace='/productos'></Boton>
        <Servicios></Servicios>
        <Boton texto='Ver más' enlace='/servicios'></Boton>
        </>
    )
}

export default Home