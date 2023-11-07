// import "./App.css"
import Formulario from "../components/Formulario"
import Container from "../components/Container";
import Routers from "./Routers";
import Banner from "../components/Banner"

export const Productos = () => {
    return (
      <>
      {/* AQUI VA EL BANNER  */}
        <Banner/>

       {/* AQUI VA EL HEADER */}
        <Routers/>

    <h2>Nuestros productos</h2>
    <div className="contenedor">
        <figure>
            <img src="src/img/variedad.jpg" alt="Panes"/>
            <div className="cap">
                <h3>Panes</h3>
                <p>Ofrecemos pan de agua, sobao, integral, etc.</p>
            </div>
        </figure>
    </div>
    <Container imgUrl={`pan frances.jpg`} name={'Croissant'} precio={20}/>
    <Container imgUrl={`donas.jpg`} name={'Donas'} precio={15}/>
    <Container imgUrl={`pasteles.jpg`} name={'Pasteles'} precio={"Precio variado"}/>
    <Container imgUrl={`Galletas con chispas de chocolate.jpg`} name={'Galletas con chispas de chocolate'} precio={5}/>
    <Container imgUrl={`Galletas Maria.jpg`} name={'Galletas María'} precio={5}/>
    <Container imgUrl={`pastel.jpg`} name={'Pastel'} precio={250}/>
    <Container imgUrl={`Galletas Krispis.png`} name={'Galletas Krispiz'} precio={15}/>
    <Container imgUrl={`pan.jpeg`} name={'Bocadillos'} precio={25}/>

  <h2 id="psa">
  hola
  </h2>
  <Formulario/>
      </>
    )
  }
  
export default Productos