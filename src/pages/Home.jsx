import "../App.css"
import Formulario from "../components/Formulario"
import Container from "../components/Container";
import Routers from "./Routers";
import Banner from "../components/Banner";

export const Home = () => {
  return (
    <>

      {/* Aqui va el banner */}
      <Banner/>

      {/* Aqui va el header */}
      <Routers/>

    <h2>Noticias</h2>
    <p>¡Oferta Especial!</p>
    <p>Presentamos nuestros nuevos productos a buen precio</p>

    {/* Aqui van los productos */}
    <Container imgUrl={`Tostada.jpeg`} name={'Tostada'} precio={25}/>
    <Container imgUrl={`Sandwichs.jpg`} name={'Sandwich'} precio={30}/>
    <Container imgUrl={`Pan con mermelada.jpeg`} name={'Pan con mermelada'} precio={15}/>
    <Container imgUrl={`Pan de yuca.jpeg`} name={'Pan de Yuca'} precio={25}/>
    <Container imgUrl={`Pan de batata.jpeg`} name={'Pan de batata'} precio={20}/>
    <Container imgUrl={`Pan de maíz.jpeg`} name={'Pan de maíz'} precio={25}/>
    
    <h2 id="horario">Horarios</h2>
    <p><b>Domingos: </b>No laborable</p><br/>
    <p><b>Lunes - Jueves:  </b> 9:00AM-8:00PM</p><br/>
    <p><b>Viernes - Sábados </b>9:00AM-6:00PM</p>

  {/* Aqui va el footer */}
    <Formulario/>

  </>
  )
}
export default Home;