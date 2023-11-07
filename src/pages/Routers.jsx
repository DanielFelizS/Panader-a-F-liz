// import '../App.css'
import { Outlet, Link } from "react-router-dom"
export const Routers = () => {
  return (
    <>
        <header className="header">
        <nav className="nav">
            <img src="src\img\Panaderia Felíz.png" alt="logo"/>
          <button className="nav-toggle" aria-label="Abrir menú">
            {/* <i className="fas fa-bars"></i> */}
          </button>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-menu-link nav-link nav-menu-link_active">Inicio</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/Servicios" className="nav-menu-link nav-link">Servicios</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/Nosotros" className="nav-menu-link nav-link">Nosotros</Link>
            </li>
            <li className="nav-menu-item">
   
              <Link to="/Productos" className="nav-menu-link nav-link">Productos</Link>
            </li>
          </ul>
        </nav>
        </header>
        <Outlet/>
    </>
  )
}

export default Routers