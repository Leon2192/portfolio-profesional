"use client";
import React, { useState } from "react";
import estudios from "@/app/estudios.json";
import experiencia from "@/app/experiencia.json";
import CardExperience from "./CardExperience";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Experience = () => {
  const [vista, setVista] = useState("Estudios");

  const toggleVista = () => {
    if (vista === "Estudios") {
      setVista("Experiencia");
    } else {
      setVista("Estudios");
    }
  };
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = vista === "Estudios" ? 4 : 4;

  const handleNext = () => {
    setStartIndex(startIndex + cardsToShow);
  };

  const handlePrev = () => {
    setStartIndex(startIndex - cardsToShow);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen experience">
        <div className="flex flex-col items-center">
          <div className="flex mb-4">
            <div
              className={`cursor-pointer mr-4 ${
                vista === "Estudios" ? "text-sky-500 font-bold" : ""
              }`}
              onClick={() => setVista("Estudios")}
            >
              <h1 className="text-4xl">Educación</h1>
            </div>
            <div
              className={`cursor-pointer ${
                vista === "Experiencia" ? "text-sky-500 font-bold" : ""
              }`}
              onClick={() => setVista("Experiencia")}
            >
              <h1 className="text-4xl ml-6">Trabajo</h1>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-bold text-sky-900 toggle-h1">
              {vista === "Estudios"
                ? "Mi camino en la educación"
                : "Mi experiencia laboral"}
            </h1>
            <p className="mt-4 text-3xl w-3/4 lg:w-2/3 xl:w-3/4 mx-auto whitespace-pre-line">
              {vista === "Estudios"
                ? `Considero que una de mis mayores fortalezas es mi insaciable pasión por aprender mas. Constantemente busco adquirir nuevos conocimientos, habilidades y experiencias en diversos campos.
              
              Me encanta sumergirme en libros, cursos en linea y conferencias, asi como participar en proyectos desafiantes que me permitan ampliar mis horizontes.`
                : `Soy un desarrollador Full Stack con experiencia en la creacion de interfaces atractivas y funcionales. He colaborado en equipos multiisciplinarios, utilizando habilidades como HTML, CSS y Javascript para convertir disenos en sitios web optimizados. 
              
              Me destaco por la optimizacion de rendimiento y la compatibilidad multiplataforma, entregando resultados excepcionales y superando expectativas.`}
            </p>
          </div>
        </div>
      </div>
      {vista === "Estudios" && (
        <div className="flex flex-wrap gap-6 card-estudios">
          {estudios
            .slice(startIndex, startIndex + cardsToShow)
            .map((estudio) => (
              <CardExperience
                key={estudio.name}
                path={estudio.path}
                school={estudio.school}
                name={estudio.name}
                description={estudio.description}
                begin={estudio.begin}
                status={estudio.status}
              />
            ))}
        </div>
      )}

      {vista === "Experiencia" && (
        <div className="flex flex-wrap gap-6 card-experiencia">
          {experiencia.map((exp) => (
            <CardExperience
              key={exp.name}
              path={exp.path}
              school={exp.place}
              name={exp.name}
              description={exp.description}
              begin={exp.begin}
              status={exp.status}
            />
          ))}
        </div>
      )}

      <div className="flex justify-around mt-4 mb-4">
        {startIndex > 0 && vista === "Estudios" && (
          <button
            onClick={handlePrev}
            className="mt-4 mb-4 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-500 hover:to-purple-400 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Anterior
          </button>
        )}
        {startIndex + cardsToShow < estudios.length && vista === "Estudios" && (
          <button
            onClick={handleNext}
            className="mt-4 mb-4 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-500 hover:to-purple-400 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Siguiente
          </button>
        )}
      </div>
    </>
  );
};

export default Experience;
