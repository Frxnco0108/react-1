import { Link } from 'react-router-dom'
import './Producto.css'

const perfiles = [
  {
    numero: '01',
    rol: 'Rusher L1',
    descripcion:
      'Jugadores agresivos, con buena movilidad, reflejos y capacidad para abrir espacio en los enfrentamientos de corta distancia.',
    habilidades: ['Buen movimiento', 'Juego agresivo', 'Buena comunicación', 'Reflejos rápidos'],
  },
  {
    numero: '02',
    rol: 'Rusher L2',
    descripcion:
      'Jugadores agresivos que acompañan al L1 en cada enfrentamiento y se encarga de cubrirlo y ayudarlo en el rush.',
    habilidades: ['Trabajo en equipo', 'Reflejos', 'Buena comunicación' , 'Buen movimiento'],
  },
  {
    numero: '03',
    rol: 'Granadero',
    descripcion:
      'Jugadores con inteligencia, precision con los explosivos y que se logre integrar al rush rapidamente con los rushers.',
    habilidades: ['Buena precisión con explosivos', 'versatilidad rusheando', 'Concentración' , 'Buena comunicación'],
  },
   {
    numero: '04',
    rol: 'Support',
    descripcion:
      'Jugadores con precisión, paciencia y capacidad para apoyar al equipo desde posiciones estratégicas.',
    habilidades: ['Buena precisión', 'Control de distancia', 'Concentración' , 'Buena comunicación' , 'Buen posicionamiento'],
  },
     {
    numero: '05',
    rol: 'IGL / Líder',
    descripcion:
      'Jugadores con liderazgo, visión estratégica y capacidad para tomar decisiones clave, coordinar al equipo y dirigir cada partida hacia la victoria.',
    habilidades: ['Liderazgo estratégico', 'Toma de decisiones', 'Visión de juego' , 'Comunicación efectiva'],
  },
]

function Productos() {
  return (
    <section className="reclutamiento">
      <div className="reclutamiento-encabezado">
        <span className="reclutamiento-etiqueta">
          NEXUS7 E-SPORT · RECLUTAMIENTO
        </span>

        <h1>
          TU NIVEL.
          <span> NUESTRO EQUIPO.</span>
        </h1>

        <p>
          Buscamos jugadores de Free Fire con mentalidad competitiva,
          disciplina y ganas de crecer en las ligas.
        </p>
      </div>

      <div className="reclutamiento-grid">
        {perfiles.map((perfil) => (
          <article className="perfil-card" key={perfil.numero}>
            <span className="perfil-numero">{perfil.numero}</span>

            <div className="perfil-icono">
              <img src="/logo-nexus7.png" alt="Logo Nexus7 E-SPORT" />
              </div>

            <h2>{perfil.rol}</h2>

            <p className="perfil-descripcion">{perfil.descripcion}</p>

            <ul>
              {perfil.habilidades.map((habilidad) => (
                <li key={habilidad}>{habilidad}</li>
              ))}
            </ul>

            <Link to="/contacto" className="perfil-boton">
              POSTULARME <span>↗</span>
            </Link>
          </article>
        ))}
      </div>

      <div className="reclutamiento-requisitos">
        <span className="reclutamiento-etiqueta">ANTES DE POSTULARTE</span>
        <h2>¿TIENES LO NECESARIO?</h2>

        <div className="requisitos-grid">
          <p><span>01</span> Compromiso con los entrenamientos.</p>
          <p><span>02</span> Respeto y comunicación con el equipo.</p>
          <p><span>03</span> Mentalidad de mejora continua.</p>
          <p><span>04</span> Disponibilidad para competir en ligas.</p>
        </div>

        <Link to="/contacto" className="boton-principal">
          QUIERO SER PARTE DE NEXUS7
        </Link>
      </div>
    </section>
  )
}

export default Productos