import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer'; // <--- IMPORTAR

// Páginas
import Home from './pages/Home/Home';
import Calidad from './pages/Calidad/Calidad';
import Servicios from './pages/Servicios/Servicios';
import RRHH from './pages/RRHH/RRHH';
import Contacto from './pages/Contacto/Contacto';

function App() {
  return (
    <Router>
      {/* Contenedor Flex para "Sticky Footer" */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Navbar />
        
        {/* El Main crece para ocupar el espacio disponible (flex: 1) */}
        <main style={{ 
          flex: 1, 
          paddingTop: '100px', 
          width: '100%' // Aseguramos ancho total para los fondos
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calidad" element={<Calidad />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/rrhh" element={<RRHH />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      
      </div>
    </Router>
  );
}

export default App;