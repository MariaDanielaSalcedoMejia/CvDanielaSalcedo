import React from 'react';
import '../styles/References.css';

const References = () => {
    const referencesData = [
        { name: 'German Edmundo Salcedo Diaz', position: 'Arquitecto', company: 'Independiente', cel:'3046754218'},
        { name: 'Santiago Salcedo Mejia', position: 'Analista QA', company: 'HABI', cel: '3208464883' },
        { name: 'Daniela Diaz', position: 'Profesional I TI', company: 'IPM', cel: '305 7070282' },
    ];

    return (
        <div className="referencia-container" id="referencias">
            <h2>Referencias</h2>
            {referencesData.map((ref, index) => (
                <div key={index} className="referencia">
                    <li><strong>{ref.name}</strong></li>
                    <li>{ref.position} en {ref.company}</li>
                    <li>Numero de contacto: {ref.cel}</li>
                </div>
            ))}
        </div>
    );
};

export default References;
