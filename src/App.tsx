
import { Routes, Route } from 'react-router-dom'

import Navbar from './Componentes/Navbar'
import Footer from './Componentes/Footer'

import Inicio from './Views/Inicio'
import Productos from './Views/Productos'
import Contacto from './Views/Contacto'

import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="contenido-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
