import React from 'react';
import '../styles/Habilidades.css';

const Habilidades = () => {
    const HabilidadesData = [
        { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/919/919827.png' },
        { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/919/919826.png' },
        { name: 'JavaScript', icon: 'https://thumbs.dreamstime.com/b/logotipo-del-javascript-136765881.jpg' },
        { name: 'React', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFe3Fcf0KBPIgv0nOd3CM9nr6xHoZoWlKKt4Em81HbbeIROphh0-S44evn3MP1Swd1fek&usqp=CAU' },
        { name: 'Angular', icon: 'https://w7.pngwing.com/pngs/271/444/png-transparent-angular-icon-hd-logo.png' },
        { name: 'Bootstrap', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Vwq2o3rdEjNxdTlclPJ9ya_xhPhrBZ_5fA&s' },
        { name: 'Tailwind', icon: 'https://www.drupal.org/files/styles/grid-3-2x/public/project-images/screenshot_361.png?itok=w4CzcWyb' },
        { name: 'GitHub', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s' },

   
   
    ];

    return (
        <div className="habilidadesTech" id="habilidades">
           
            <div className="grid-container">
                {HabilidadesData.map((skill, index) => (
                    <div key={index} className="grid-item">
                        <img src={skill.icon} alt={skill.name} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Habilidades;
