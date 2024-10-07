import React from "react";
import '../styles/Header.css';

const Header = ({ activeSection, setActiveSection }) => {
    // Función para manejar el clic en los enlaces de navegación
    const handleLinkClick = (section) => {
        setActiveSection(section);
        const targetElement = document.querySelector(`#${section}`);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id "${section}" not found`);
        }
    };

    return (
        <header id="header" className="header-container bg-dark text-white">
            <div className="text-center py-3">
                <h1 className="header-title">
                    El Camino hacia el Diseño: Una Historia de Evolución y Código
                </h1>
            </div>
            <nav className="barraNavegacion d-flex justify-content-center py-2">
                <a
                    href="#informacionPersonal"
                    className={`linkNav px-3 ${activeSection === 'informacionPersonal' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('informacionPersonal')}
                >
                    Información Personal
                </a>
                <a
                    href="#educacion"
                    className={`linkNav px-3 ${activeSection === 'educacion' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('educacion')}
                >
                    Educación
                </a>
                <a
                    href="#habilidades"
                    className={`linkNav px-3 ${activeSection === 'habilidades' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('habilidades')}
                >
                    Habilidades Técnicas
                </a>
                <a
                    href="#proyectos"
                    className={`linkNav px-3 ${activeSection === 'proyectos' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('proyectos')}
                >
                    Proyectos
                </a>
                <a
                    href="#idiomas"
                    className={`linkNav px-3 ${activeSection === 'idiomas' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('idiomas')}
                >
                    Idiomas
                </a>
                <a
                    href="#referencias"
                    className={`linkNav px-3 ${activeSection === 'referencias' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('referencias')}
                >
                    Referencias
                </a>
            </nav>
        </header>
    );
};

export default Header;
