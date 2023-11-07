import Iframe from "react-iframe";

export const Formulario = () => {
  return (
    <>
      <footer className="pie-pagina">
        <div className="grupo1">
          <div className="box">
            <h2>Contáctanos</h2>
            <form>
              <label htmlFor="iname">Nombre:</label>
              <input id="Nombre" type="text" name="Nombre" autoFocus required />
              <label htmlFor="Apellido">Apellido:</label>
              <input id="Apellido" type="text" name="Apellido" />
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" name="email" />
              {/* onKeyUp="countChars(this);" */}
              <textarea
                name="message"
                placeholder="Mándanos un comentario"
              ></textarea>
              <p id="charNum">300 caracteres restantes</p>
              <a className="enviar" href="index.html">
                Enviar
              </a>
              <input type="checkbox" name="" id="" />
              Al seleccionar esta casilla admito que he leído y acepto los
              términos y condiciones del sitio, la política de privacidad de
              Panadería Feliz.
            </form>
          </div>
        </div>
        <div className="box">
          <h2>Siguenos</h2>
          <div className="red-social">
            <a
              href="https://discord.com/channels/@me"
              className="fa-brands fa-discord"
            ></a>
            <a
              href="https://www.instagram.com/danielfeliz012345/"
              className="fa fa-instagram"
            ></a>
            <a
              href="https://www.youtube.com/channel/UCjozBd7ufizvA5XEGnrOG_A"
              className="fa fa-youtube"
            ></a>
            <a
              href="https://pin.it/7nfn5Nu"
              className="fa-brands fa-pinterest"
            ></a>
          </div>
          <div className="grupo2">
            <small>
              &copy; 2022 <b>Panadería Felíz</b> - Todos los derechos
              reservaddos
            </small>
          </div>
        </div>
        <Iframe className="iframe"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9885495763756!2d-69.87134688545643!3d18.529419573740434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf88a379e6157d%3A0xb50ba4af597f9b68!2sInstituto%20Polit%C3%A9cnico%20El%20Ave%20Mar%C3%ADa!5e0!3m2!1ses-419!2sdo!4v1654646028469!5m2!1ses-419!2sdo"
          width="600"
          height="450"
          styles={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </footer>
    </>
  );
};

export default Formulario;
