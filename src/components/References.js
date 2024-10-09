import React from "react";
import "../styles/References.css";

const References = () => {
  const referencesData = [
    {
      name: "German Edmundo Salcedo Diaz",
      position: "Arquitecto",
      company: "Independiente",
      cel: "3046754218",
    },
    {
      name: "Santiago Salcedo Mejia",
      position: "Analista QA",
      company: "HABI",
      cel: "3208464883",
    },
    {
      name: "Daniela Diaz",
      position: "Profesional I TI",
      company: "IPM",
      cel: "305 7070282",
    },
  ];

  return (
    <div className="referencia-container" id="referencias">
      <img
        src="https://recla.org/wp-content/uploads/2023/07/descubriendo-red-de-contactos-en-linea.webp"
        alt="Foto contacto"
        className="img-fluid fotoContacto rounded-circle"
      />

      {referencesData.map((ref, index) => (
        <div key={index} className="referencia">
          <li>
            <strong>{ref.name}</strong>
          </li>
          <li>
            {ref.position} en {ref.company}
          </li>
          <li>Numero de contacto: {ref.cel}</li>
        </div>
      ))}
    </div>
  );
};

export default References;
