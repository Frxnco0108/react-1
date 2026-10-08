import Navbar from "./Componentes/Navbar.jsx";

import Card from "./Componentes/Card";
import Footer from "./Componentes/Footer";
import Hero from "./Componentes/Hero";
import Formulario from "./Componentes/Formulario";


function App() {
  const servicios = [
    {
      nombre: "Diseño Web",
      descripcion: "Creación de interfaces modernas.",
      boton: "Ver más",
      informacion: "Aprenderás a crear interfaces atractivas con HTML, CSS y React."
    },
    {
      nombre: "Desarrollo Backend",
      descripcion: "Construcción de APIs y bases de datos.",
      boton: "Ver más",
      informacion: "Aprenderás a crear APIs RESTful y manejar bases de datos con Node.js y Express."
    },
    {
      nombre: "Marketing Digital",
      descripcion: "Estrategias para aumentar tu presencia online.",
      boton: "Ver más",
      informacion: "Aprenderás a optimizar tu presencia en línea mediante SEO, SEM y redes sociales."
    },
    {
      nombre: "Bases de Datos",
      descripcion: "Gestión y administración de datos.",
      boton: "Ver más",
      informacion: "Aprenderás a almacenar y consultar información."
    }
  ];

  return (
    <div>
      <Navbar />

      <Hero />

      <Footer />

      <Formulario />

      <section>
        {servicios.map((servicio, index) => (
          <Card
            key={index}
            nombre={servicio.nombre}
            descripcion={servicio.descripcion}
            boton={servicio.boton}
            informacion={servicio.informacion}
          />
        ))}
      </section>
    </div>
  );
}

export default App;