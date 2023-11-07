import Formulario from "../components/Formulario";
// import Container from "../components/Container";
import Routers from "./Routers";
import Banner from "../components/Banner";

export const Nosotros = () => {
  return (
    <>
      <Banner />
      <Routers />

      <h2> Sobre Nosotros</h2>
      <h2>Visión</h2>
      <img id="vision-valores-mision" src="src/img/Vision.jfif" alt="" />
      <p>Ofrecer el mejor servicio de Panadería y Repostería a los clientes</p>
      <h2>Misión</h2>
      <img id="vision-valores-mision" src="src/img/mision.jpg" alt="mision" />
      <p>Brindamos los mejores precios de Panadería y Repostería</p>
      <h2>Valores</h2>
      <img id="vision-valores-mision" src="src/img/Valores.jfif" alt="" />
      <p>Responsabilidad</p>
      <p>Honestidad</p>
      <p>Empatía</p>
      <h2>Nuestros mejores empleados</h2>
      <div className="contenedor">
        <figure>
          <img id="Eli" src="src/img/Eli.jpg" alt="Gerente" title="Gerente" />
          <div className="cap">
            <h3>Eli R. Muñoz</h3>
            <p>Gerente</p>
          </div>
        </figure>
      </div>
      <div className="contenedor">
        <figure>
          <img src="src/img/Keily.jpeg" alt="Empleado del mes" title="Empleado del mes" />
          <div className="cap">
            <h3>Keily Alcantara Herasme</h3>
            <p>Empleado del mes</p>
          </div>
        </figure>
      </div>
      <h2 id="historia">Historia</h2>
      <div className="fundador">
        <figure>
          <img src="src/img/yo.jpeg" alt="Daniel Feliz" />
          <div className="cap">
            <h3>Daniel Feliz</h3>
            <p>fundador</p>
          </div>
        </figure>
      </div>
      <p id="parrafo"><b>Daniel Feliz</b> fundador de la empresa.
        <p>Fundó la empresa el 8 de junio de 2022.</p>
        <p>Terminó sus estudios de informática en el instituto politécnico el ave maría.</p>
        <p>Luego penso poner un negocio junto con sus padres, y así surgió la Panadería Feliz.</p>
      </p>

      <Formulario />
    </>
    )
}
export default Nosotros;