// import "./App.css"
import Formulario from "../components/Formulario"
import Container from "../components/Container";
import Routers from "./Routers";
import Banner from "../components/Banner";

export const Servicios = () => {
    return(
        <>
            {/* Banner */}
            <Banner />

            {/* Header */}
            <Routers />

            <h2>Servicios</h2>
            <p>Ofrecemos los mejores servicios para todo tipo de ocasión</p><br/>

            <h2>Desayunos</h2>
            <p>Con nuestros productos su día va a comenzar con energía</p>

            <Container imgUrl={`Desayuno1.jpg`} name={'Combo de donas con café'} precio={25} />
            <Container imgUrl={`Desayuno2.jpg`} name={'Croissant con bebida'} precio={35} />
            <Container imgUrl={`Desayuno3.jpg`} name={'Pancake'} precio={35} />
            <Container imgUrl={`Desayuno4.jpg`} name={'Pan integral con ensalada'} precio={20} />
            <Container imgUrl={`Desayuno5.jpg`} name={'Combo personalizado'} precio={50} />
            <Container imgUrl={`Jugos Nutritivos.jpg`} name={'Jugos Nutritivos'} precio={20} />

            <h2>Picaderas</h2>
            <p>Ofrecemos todo tipo de picaderas</p>

            <Container imgUrl={`Picaderas1.jpg`} name={'Empanadas'} precio={15} />
            <Container imgUrl={`Picaderas2.jpg`} name={'Pan en forma de triángulo'} precio={15} />
            <Container imgUrl={`Picaderas3.jpg`} name={'Kipes'} precio={15} />
            <Container imgUrl={`Picaderas4.jpg`} name={'Harina Tostada'} precio={20} />
            <Container imgUrl={`Picaderas5.jpg`} name={'Picaderas con palitos'} precio={10} />
            <Container imgUrl={`Picaderas6.jpg`} name={'Pinchos'} precio={30} />

            <h2>Cumpleaños</h2>
            <p>Ofrecemos servicios para cumpleaños</p>

            <Container imgUrl={`pastel.jpg`} name={'Bizcochos pequeños'} precio={100} />
            <Container imgUrl={`pasteles.jpg`} name={'Bizcochos'} precio={250} />
            <Container imgUrl={`Compleaños1.jpg`} name={'Decoraciones de cumpleaños'} precio={"500 - 4000"} />
            <Container imgUrl={`BizcochoHombres.jpg`} name={'Bizcochos decorados'} precio={300} />
            <Container imgUrl={`Refrescos.jpg`} name={'Refrescos'} precio={60} />
            <Container imgUrl={`Cumpleaños1.jpg`} name={'Decoraciones de pinchos'} precio={50} />

            <h2>Empresas</h2>
            <p>Diferentes tipos de servicios para empresas</p>
            <p>Para más información <a href="Contacto.html">Contáctenos</a></p>

            <Formulario />
        </>
    )
}

export default Servicios