import Image from "next/image";

const About = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-sky-400 about"
      id="about"
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className=" rounded-full overflow-hidden">
          <Image
            src="/profile.jpeg"
            width={500}
            height={500}
            alt="Imagen"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="w-1/2">
        <div className="text-center">
          <h1 className="text-6xl font-bold w-4/5 text-white underline">
            Sobre mí
          </h1>
          <p className="text-3xl mt-6 w-4/5 text-white">
            Soy un apasionado desarrollador Full Stack con un enfoque
            especializado en el Front-End. Mi principal foco radica en la
            optimización del rendimiento de las aplicaciones web. Con una sólida
            formación en desarrollo web y una amplia experiencia en la creación
            de interfaces de usuario dinámicas, mi objetivo es impulsar la
            eficiencia y la velocidad en cada proyecto en el que trabajo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
