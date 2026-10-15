
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-marca">
          <h2>
            NEXUS<span>7</span>
          </h2>
          <p>E-SPORT</p>
        </div>

        <p className="footer-descripcion">
          Competitividad, disciplina y trabajo en equipo.
          Construimos nuestro camino en las ligas de Free Fire.
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} Nexus7 E-SPORT.
          Proyecto de demostración.
        </p>
      </div>
    </footer>
  )
}

export default Footer
