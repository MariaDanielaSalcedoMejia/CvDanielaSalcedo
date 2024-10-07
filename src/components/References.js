import React from 'react';
import '../styles/References.css';

const References = () => {
    const referencesData = [
        { name: 'Juan Pérez', position: 'Gerente', company: 'Empresa ABC', email: 'juan.perez@abc.com' },
        { name: 'Ana García', position: 'Líder de Proyecto', company: 'Empresa XYZ', email: 'ana.garcia@xyz.com' },
    ];

    return (
        <div className="referencia-container" id="referencias">
            <h2>Referencias</h2>
            {referencesData.map((ref, index) => (
                <div key={index} className="referencia">
                    <strong>{ref.name}</strong> - {ref.position} en {ref.company}, <a href={`mailto:${ref.email}`}>{ref.email}</a>
                </div>
            ))}
        </div>
    );
};

export default References;
