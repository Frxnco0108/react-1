import Navbar from "./Componentes/Navbar.jsx";

import Card from "./Componentes/Card";
import Footer from "./Componentes/Footer";
import Hero from "./Componentes/Hero";

function App() {

  return (

    <div>

      <Navbar />

      <Hero />

      <section>

        <Card
          nombre="Diseño web"
          descripcion="Diseño moderno y atractivo para tu sitio web"
          boton="Ver más"
          informacion="Este servicio incluye diseño de interfaz, HTML, CSS y JavaScript para crear una experiencia de usuario atractiva y funcional."
        />

        <Card
          nombre="Desarrollo web"
          descripcion="Desarrollo de aplicaciones web modernas y eficientes"
          boton="Ver más"
          informacion="Ofrecemos soluciones de desarrollo web personalizadas para satisfacer las necesidades específicas de tu negocio."
        />

        <Card
          nombre="Marketing digital"
          descripcion="Estrategias efectivas para promocionar tu negocio en línea"
          boton="Ver más"
          informacion="Nuestro equipo de expertos en marketing digital puede ayudarte a aumentar tu presencia en línea y atraer más clientes a tu negocio."
        />

      </section>

      <Footer />

    </div>

  );
}

export default App;