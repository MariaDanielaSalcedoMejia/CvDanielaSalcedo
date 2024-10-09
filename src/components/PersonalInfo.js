import React from "react";
import '../styles/PersonalInfo.css';
import fotoPerfil from "../assets/img/foto_perfil.jpeg"; // Asegúrate de agregar la imagen en esta ruta

const PersonalInfo = () => {
    return (
        <section id="informacionPersonal">
            
               
                <div className="detallesPersonales text-center text-md-start px-md-4">
                    <div id="fotoPerfil" className="fotoPerfil">
                    <img src={fotoPerfil} alt="Foto de perfil" className="img-fluid rounded-circle" />
                  
                    <div className="justified-text">
                        
                    <p>
                        <h2>¡Hola! Soy Maria Daniela Salcedo Mejia</h2>
                    
                        Desarrolladora web con pasión por crear experiencias digitales
                        excepcionales. Con una sólida formación en tecnologías frontend y un
                        enfoque constante en el diseño centrado en el usuario, he trabajado
                        en proyectos que combinan funcionalidad y estética. Mi objetivo es
                        continuar aprendiendo y creciendo en un entorno que me permita
                        aplicar mis habilidades en desarrollo web y diseño UI, aportando
                        soluciones innovadoras a cada desafío.
                   </p>
                   </div>
                    <h3 className="nombreOpcional">¡Hola! Soy Maria Daniela Salcedo Mejia</h3>
                   </div>
                   
                </div>
            
        </section>
    );
};

export default PersonalInfo;
