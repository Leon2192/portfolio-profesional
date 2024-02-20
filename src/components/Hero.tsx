import React from "react";
import techs from "@/app/techs.json";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-12 py-4">
        <div className="flex items-center  mt-2">
          <Image src="/favicon.png" alt="Logo" width={50} height={50} />
        </div>
        <div className="flex items-center space-x-8 mobile-links">
          <a
            href="#about"
            className="hover:text-gray-400 text-xl text-sky-900 font-bold"
          >
            Sobre mi
          </a>
          <a
            href="#projects"
            className="hover:text-gray-400 text-xl text-sky-900 font-bold"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 text-xl text-sky-900 font-bold"
          >
            Contacto
          </a>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center h-screen mobile-hero">
        <h1 className="text-7xl font-bold mb-4">
          ¡HOLA! Soy{" "}
          <span className="text-blue-400">Leonardo Manuel Arrieta 👋🏻</span>
        </h1>
        <br />
        <p className="text-4xl mb-8 text-center w-3/5">
          Soy un desarrollador web Full Stack, apasionado de la programación,
          con un enfoque principal en Front-End y sólidos conocimientos en
          Back-End.
        </p>
        <div className="flex space-x-4 mt-4 mb-4 techs">
          {techs.map((tech) => (
            <div key={tech.name} className="p-5">
              <Image src={tech.path} alt={tech.name} width={50} height={50} />
            </div>
          ))}
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-8 rounded-full mt-10 border border-transparent hover:from-blue-600 hover:to-blue-800 hover:border-blue-300 hover:text-blue-300 transition duration-300 ease-in-out">
          <a href="#contact">¡Mándame un mensaje!</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
