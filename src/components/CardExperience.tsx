import Image from "next/image";
import React from "react";

const CardExperience = (props: any) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden w-full h-[22rem]">
      <div className="h-8 w-full bg-gradient-to-r from-sky-400 to-blue-900 to-purple-700"></div>

      <div className="flex items-center justify-between p-4">
        <div className="h-16 w-16 rounded-full overflow-hidden">
          <Image width={150} height={200} src={props.path} alt="Imagen" />
        </div>

        <div className="text-right">
          <p className="text-sky-300 text-bold text-3xl">{props.school}</p>
        </div>
      </div>

      <div className="pb-4 px-4"></div>

      <div className="px-4">
        <h1 className="text-xl font-bold text-sky-900">{props.name}</h1>
        <h2 className="text-lg font-semibold text-sky-600 font-bold">
          {props.description}
        </h2>

        <div className="flex justify-between mt-4">
          <p className="text-sky-300 font-bold text-xl ">Año: {props.begin}</p>
          <p className="text-sky-300 font-bold text-xl">{props.status}</p>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;
