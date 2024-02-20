import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-center mt-10" id="contact">
      <div className="w-3/4 mx-auto border-b-2 mb-8"></div>
      <div className="mb-4">
        <img
          src="/profile.jpeg"
          alt="Imagen"
          className="rounded-full w-96 h-96 mx-auto"
        />
      </div>
      <h1 className="text-6xl font-bold text-sky-900">
        ¿Quieres contactar conmigo?
      </h1>
      <h3 className="text-3xl font-medium mt-16 ">
        Mandame un mensaje y conversemos 👋🏻
      </h3>
      <div className="flex justify-center mb-16 mt-12">
        <a
          href="https://www.linkedin.com/in/leonardo-manuel-arrieta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="mr-20 transform transition-transform hover:-translate-y-1"
        >
          <FaLinkedin size={"2.5em"} color="#0e76a8" />
        </a>
        <a
          href="mailto:leo.arrieta93@hotmail.com"
          className="mr-20 transform transition-transform hover:-translate-y-1"
        >
          <BiLogoGmail size={"2.5em"} color="#db4a39" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=1127682286"
          className="mr-20 transform transition-transform hover:-translate-y-1"
        >
          <FaWhatsapp size={"2.5em"} color="#25D366" />
        </a>
        <a
          href="https://github.com/Leon2192"
          className="transform transition-transform hover:-translate-y-1"
        >
          <FaGithub size={"2.5em"} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
