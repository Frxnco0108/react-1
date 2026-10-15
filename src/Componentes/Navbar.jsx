
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo">
        <span className="logo-nexus">NEXUS<span>7</span></span>
        <span className="logo-esport">E-SPORT</span>
      </NavLink>

      <nav className="navbar-menu">
        <NavLink to="/" end>
          Inicio
        </NavLink>

        <NavLink to="/productos">
          Reclutamiento
        </NavLink>

        <NavLink to="/contacto">
          Contacto
        </NavLink>
      </nav>

      <NavLink to="/contacto" className="navbar-boton">
        Únete al equipo
      </NavLink>
    </header>
  )
}

export default Navbar
