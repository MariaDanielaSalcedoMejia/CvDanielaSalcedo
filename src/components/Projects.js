import React from 'react';
import '../styles/Projects.css';

const ProjectCard = ({ title, description, image, link }) => (
    <div className="project-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
    </div>
);

const Projects = () => {
    const projectsData = [
        { title: 'Proyecto 1', description: 'Descripción del proyecto 1', image: 'https://example.com/proyecto1.png', link: 'http://proyecto1.com' },
        { title: 'Proyecto 2', description: 'Descripción del proyecto 2', image: 'https://example.com/proyecto2.png', link: 'http://proyecto2.com' },
    ];

    return (
        <div className="proyectos" id="proyectos">
            <h2>Proyectos</h2>
            <div className="project-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
