import React from 'react';
import '../styles/Languages.css';

const LanguageProgress = ({ language, level, percentage }) => (
    <div className="idioma">
        <span>{language} - {level}</span>
        <div className="barra-progreso">
            <div className="progreso" style={{ width: `${percentage}%` }}>{percentage}%</div>
        </div>
    </div>
);

const Languages = () => {
    const languagesData = [
        { language: 'Español', level: 'Nativo', percentage: 100 },
        { language: 'Inglés', level: 'Avanzado', percentage: 75 },
        { language: 'Francés', level: 'Intermedio', percentage: 60 },
    ];

    return (
        <div className="section" id="idiomas">
            <h2 className="section-title">Idiomas</h2>
            <div className="idioma-container">
                {languagesData.map((lang, index) => (
                    <LanguageProgress
                        key={index}
                        language={lang.language}
                        level={lang.level}
                        percentage={lang.percentage}
                    />
                ))}
            </div>
        </div>
    );
};

export default Languages;
