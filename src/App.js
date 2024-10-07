import React, { useState } from "react";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Educacion from "./components/Educacion";
import Habilidades from "./components/Habilidades";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import References from "./components/References";
import Footer from "./components/Footer";


function App() {
  // Estado para la sección activa
  const [activeSection, setActiveSection] = useState('informacionPersonal');

  return (
    <div className="App">
      {/* Pasamos el estado y el setter al Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        {/* Renderizamos las secciones condicionalmente según el valor de activeSection */}
        {activeSection === 'informacionPersonal' && <PersonalInfo />}
        {activeSection === 'educacion' && <Educacion />}
        {activeSection === 'habilidades' && <Habilidades />}
        {activeSection === 'proyectos' && <Projects />}
        {activeSection === 'idiomas' && <Languages />}
        {activeSection === 'referencias' && <References />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
