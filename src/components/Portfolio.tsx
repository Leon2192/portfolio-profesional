"use client";
import React, { useState, useEffect } from "react";
import portfolio from "@/app/proyectos.json";

const Portfolio = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects");
      if (element && window.scrollY + window.innerHeight >= element.offsetTop) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-center mt-20" id="projects">
      <h1 className="text-7xl font-bold mt-8 text-sky-900">Portfolio</h1>
      <h2 className="text-3xl mt-4">
        Puedes ver mi portfolio completo en{" "}
        <a
          href="https://github.com/Leon2192"
          target="blank"
          className="text-sky-400 font-bold hover:underline"
        >
          Github
        </a>
      </h2>
      <div className="flex flex-wrap justify-center mt-8">
        {portfolio.map((proyecto, index) => (
          <div
            key={index}
            className={`m-2 w-1/4 lg:w-1/3 xl:w-1/4 relative`}
            style={{ perspective: "1000px" }}
          >
            <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={proyecto.image}
                  alt={proyecto.url}
                  className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-300 hover:opacity-100">
                  <span className="text-white text-xl font-bold">
                    {proyecto.nombre}
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
