
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div className="inicio">

      <section className="inicio-hero">
        <div className="inicio-contenido">

          <span className="inicio-etiqueta">
            NEXUS7 E-SPORT · FREE FIRE
          </span>

          <h1>
            EL TALENTO
            <br />
            <span>NO SE ESCONDE.</span>
            <br />
            SE DEMUESTRA.
          </h1>

          <p className="inicio-descripcion">
            Buscamos jugadores competitivos con disciplina,
            habilidad y mentalidad ganadora para formar parte
            de Nexus7 E-SPORT y competir en ligas de Free Fire.
          </p>

          <div className="inicio-botones">
            <Link to="/productos" className="boton-principal">
              POSTÚLATE AL EQUIPO
            </Link>

            <Link to="/contacto" className="boton-secundario">
              CONTÁCTANOS
            </Link>
          </div>

          <div className="inicio-estadisticas">
            <div>
              <h3>SKILL</h3>
              <p>Habilidad</p>
            </div>

            <div>
              <h3>DISCIPLINA</h3>
              <p>Compromiso</p>
            </div>

            <div>
              <h3>TEAMWORK</h3>
              <p>Trabajo en equipo</p>
            </div>
          </div>

        </div>
        <div className="inicio-imagen"></div>
        <div className="inicio-decoracion">
          <div className="inicio-simbolo">
            <img src="/logo-nexus7.png" alt="Logo Nexus7 E-SPORT" />
          </div>
          <span>BUILT TO COMPETE</span>
        </div>
      </section>

      <section className="inicio-presentacion">
        <span className="seccion-etiqueta">NUESTRA IDENTIDAD</span>

        <h2>
          MÁS QUE UN EQUIPO.
          <span> UNA MENTALIDAD.</span>
        </h2>

        <p>
          En Nexus7 E-SPORT creemos en el talento, la constancia
          y la coordinación. Queremos conectar con jugadores que
          estén dispuestos a mejorar y demostrar su nivel en la
          escena competitiva de Free Fire.
        </p>

        <Link to="/productos" className="boton-principal">
          CONOCE EL RECLUTAMIENTO
        </Link>
      </section>

    </div>
  )
}

export default Inicio
