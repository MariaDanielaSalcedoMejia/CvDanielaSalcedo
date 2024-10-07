import React, { useState } from 'react';
import '../styles/Educacion.css';

// Datos de educación divididos en categorías
const EducacionData = [
    { institution: 'Platzi', degree: 'Certificación en UX/UI Design', year: '2022' },
    { institution: 'Platzi', degree: 'Curso básico de programación orientada a objetos con JS', year: '2024' },
    { institution: 'Platzi', degree: 'Curso de JS desde cero', year: '2024' },
    { institution: 'Platzi', degree: 'Curso definitivo de html y css', year: '2024' },
    { institution: 'Platzi', degree: 'Consumo de api rest con JS', year: '2024' },
    { institution: 'Platzi', degree: 'Curso práctico de consumo de api rest con JS', year: '2024' },
    { institution: 'Platzi', degree: 'Curso profesional de consumo de api rest con JS', year: '2024' },
    { institution: 'Platzi', degree: 'Curso de JS: Manipulacion del Dom', year: '2024' },
    { institution: 'Meta', degree: 'Control de versiones', year: '2024' },
    { institution: 'Meta', degree: 'HTML y CSS en detalle', year: '2024' },
    { institution: 'Meta', degree: 'Introducción al desarrollo de front-end', year: '2024' },
    { institution: 'Meta', degree: 'Programación con JS', year: '2024' },
    { institution: 'Meta', degree: 'React basics', year: '2024' },
    { institution: 'Meta', degree: 'Advanced React', year: '2024' },
    { institution: 'SENA - Servicio Nacional de Aprendizaje', degree: 'Técnico en Programación de Software', year: '2023' },
    { institution: 'SENA - Servicio Nacional de Aprendizaje', degree: 'Tecnologo de análisis y desarrollo de software', year: 'Proceso de inscripción' },
    { institution: 'Udemy', degree: 'Certificación en Desarrollo Web', year: '2021' },
    { institution: 'Talento Tech', degree: 'Bootcamp Fullstack Avanzado', year: '2024' },
    { institution: 'Google', degree: 'Certificación en Inteligencia Artificial', year: '2024' },
    { institution: 'Google', degree: 'Certificación en Python', year: '2024' },
    { institution: 'UCDAVIS', degree: 'SQL for Data Science', year: '2024' }
];

const Educacion = () => {
    // Estado para almacenar la categoría seleccionada
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Principal');

    // Filtrar los datos en función de la categoría seleccionada
    const filtrarEducacion = () => {
        if (categoriaSeleccionada === 'Platzi') {
            return EducacionData.filter(edu => edu.institution === 'Platzi');
        } else if (categoriaSeleccionada === 'Meta') {
            return EducacionData.filter(edu => edu.institution === 'Meta');
        } else if (categoriaSeleccionada === 'Principal') {
            return EducacionData.filter(edu => edu.institution.includes('SENA'));
        } else {
            return EducacionData.filter(edu => edu.institution !== 'Platzi' && edu.institution !== 'Meta' && !edu.institution.includes('SENA'));
        }
    };

    return (
        <div className="educacion" id="educacion">
            {/* Imágenes como enlaces para filtrar */}
            <div className="categorias">

                <img
                    src="https://bogota.gov.co/sites/default/files/styles/1050px/public/field/image/9010.jpg"
                    alt="Principal"
                    onClick={() => setCategoriaSeleccionada('Principal')}
                    className={categoriaSeleccionada === 'Principal' ? 'active' : ''}
                />
                <img
                    src="https://static.platzi.com/media/blog/unnamed-8089fc33-6322-4bd3-85de-1da032257d4b.png" 
                    alt="Platzi"
                    onClick={() => setCategoriaSeleccionada('Platzi')}
                    className={categoriaSeleccionada === 'Platzi' ? 'active' : ''}
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfm0ooWZDodEBD2zlKPK3xt37ot4lUZHIBw&s" 
                    alt="Meta"
                    onClick={() => setCategoriaSeleccionada('Meta')}
                    className={categoriaSeleccionada === 'Meta' ? 'active' : ''}
                />
                
                <img
                    src="https://media.istockphoto.com/id/1034906324/es/vector/agregar.jpg?s=612x612&w=0&k=20&c=lS5PRWb4VQdooJgX-phcaf8ug1PrUyf_Cclb7g5OzWk=" 
                    alt="Otros"
                    onClick={() => setCategoriaSeleccionada('Otros')}
                    className={categoriaSeleccionada === 'Otros' ? 'active' : ''}
                />
            </div>

            {/* Mostrar la tabla solo si hay una categoría seleccionada */}
            {categoriaSeleccionada && (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Institución</th>
                                <th>Título</th>
                                <th>Año</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtrarEducacion().map((edu, index) => (
                                <tr key={index}>
                                    <td>{edu.institution}</td>
                                    <td>{edu.degree}</td>
                                    <td>{edu.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Educacion;
