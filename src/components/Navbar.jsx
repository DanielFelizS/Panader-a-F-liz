export const Navbar = () => {
  return (
    <>
        <header className="header">
        <nav className="nav">
            <img src="src\img\Panaderia Felíz.png" alt="logo"/>
          <button className="nav-toggle" aria-label="Abrir menú">
            <i className="fas fa-bars"></i>
          </button>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a href="index.html" className="nav-menu-link nav-link nav-menu-link_active">Inicio</a>
            </li>
            <li className="nav-menu-item">
              <a href="Servicios.html" className="nav-menu-link nav-link">Servicios</a>
            </li>
            <li className="nav-menu-item">
              <a href="Nosotros.html" className="nav-menu-link nav-link">Nosotros</a>
            </li>
            <li className="nav-menu-item">
              <a href ="Productos.html" className="nav-menu-link nav-link ">Productos</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar