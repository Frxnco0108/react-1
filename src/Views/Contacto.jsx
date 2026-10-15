import { useState } from 'react'
import './Contacto.css'

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    edad: '',
    idJuego: '',
    rol: '',
    experiencia: '',
  })

  const [mensaje, setMensaje] = useState('')

  const manejarCambio = (e) => {
    const { name, value } = e.target

    setFormulario({
      ...formulario,
      [name]: value,
    })

    setMensaje('')
  }

  const manejarEnvio = (e) => {
    e.preventDefault()

    const { nombre, edad, idJuego, rol, experiencia } = formulario

    if (!nombre.trim() || !edad || !idJuego.trim() || !rol || !experiencia) {
      setMensaje('Completa todos los campos para continuar.')
      return
    }

    if (Number(edad) < 13 || Number(edad) > 99) {
      setMensaje('Ingresa una edad válida entre 13 y 99 años.')
      return
    }

    setMensaje(
      `¡Solicitud registrada en esta página, ${nombre}! Tu perfil está listo para revisión.`
    )

    setFormulario({
      nombre: '',
      edad: '',
      idJuego: '',
      rol: '',
      experiencia: '',
    })
  }

  return (
    <section className="contacto">
      <div className="contacto-encabezado">
        <span className="contacto-etiqueta">
          NEXUS7 E-SPORT · ÚNETE A NOSOTROS
        </span>

        <h1>
          DEMUESTRA <span>TU NIVEL.</span>
        </h1>

        <p>
          ¿Tienes lo necesario para competir? Completa tu perfil
          y da el primer paso para formar parte de nuestro equipo.
        </p>
      </div>

      <div className="contacto-contenedor">
        <div className="contacto-info">
          <span className="contacto-numero">N7 / RECRUITMENT</span>

          <h2>EL PRÓXIMO JUGADOR PUEDES SER TÚ.</h2>

          <p>
            Buscamos talento, disciplina y compromiso.
            Queremos jugadores que estén dispuestos a mejorar,
            trabajar en equipo y competir en las ligas de mas alto nivel.
          </p>

          <div className="contacto-valor">
            <span>01</span>
            <div>
              <h3>COMPROMISO</h3>
              <p>Constancia y responsabilidad.</p>
            </div>
          </div>

          <div className="contacto-valor">
            <span>02</span>
            <div>
              <h3>MENTALIDAD</h3>
              <p>Aprender, mejorar y competir.</p>
            </div>
          </div>

          <div className="contacto-valor">
            <span>03</span>
            <div>
              <h3>TRABAJO EN EQUIPO</h3>
              <p>Comunicación y respeto.</p>
            </div>
          </div>
        </div>

        <form className="contacto-formulario" onSubmit={manejarEnvio}>
          <h2>FORMULARIO DE POSTULACIÓN</h2>
          <p className="formulario-descripcion">
            Completa tus datos para presentar tu perfil.
          </p>

          <label htmlFor="nombre">Nombre de jugador</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Tu nombre o nickname"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
          />

          <div className="contacto-fila">
            <div>
              <label htmlFor="edad">Edad</label>
              <input
                id="edad"
                name="edad"
                type="number"
                min="13"
                max="99"
                placeholder="Tu edad"
                value={formulario.edad}
                onChange={manejarCambio}
                required
              />
            </div>

            <div>
              <label htmlFor="idJuego">ID de Free Fire</label>
              <input
                id="idJuego"
                name="idJuego"
                type="text"
                placeholder="Tu ID"
                value={formulario.idJuego}
                onChange={manejarCambio}
                required
              />
            </div>
          </div>

          <label htmlFor="rol">Rol principal</label>
          <select
            id="rol"
            name="rol"
            value={formulario.rol}
            onChange={manejarCambio}
            required
          >
            <option value="">Selecciona tu rol</option>
            <option value="Rusher L1">Rusher L1</option>
            <option value="Rusher L2">Rusher L2</option>
            <option value="Support">Support</option>
            <option value="Granadero">Granadero</option>
            <option value="IGL">IGL / Líder</option>
          </select>

          <label htmlFor="experiencia">Experiencia competitiva</label>
          <select
            id="experiencia"
            name="experiencia"
            value={formulario.experiencia}
            onChange={manejarCambio}
            required
          >
            <option value="">Selecciona tu experiencia</option>
            <option value="Principiante">Estoy empezando</option>
            <option value="Intermedio">He jugado torneos</option>
            <option value="Avanzado">Tengo experiencia en ligas</option>
          </select>

          <button type="submit" className="contacto-boton">
            ENVIAR POSTULACIÓN <span>↗</span>
          </button>

          {mensaje && (
            <p className="contacto-mensaje" role="status">
              {mensaje}
            </p>
          )}

          <p className="contacto-nota">
            Demo académica: los datos no se envían a un servidor
            ni se guardan en una base de datos.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contacto