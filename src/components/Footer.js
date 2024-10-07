import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>

            <div className="social-links">
                <i className="bi bi-envelope-fill"></i> daniela.salcedo@correo.com<br />
                <i className="bi bi-phone-fill"></i> +123 456 7890<br />
                <i className="bi bi-geo-alt-fill"></i> Bogotá, Colombia
            </div>
           
            <div className="social-links">
                <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>

            <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>

        </footer>
    );
};

export default Footer;
