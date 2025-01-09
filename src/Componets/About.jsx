import React from "react";
import whoWeAreImg from "../../public/Media/Rectangle 24.jpg";
import { MdArrowOutward } from "react-icons/md";
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 gap-10 lg:gap-40">
                                  {/* left side */}
      <div className="space-y-6 lg:space-y-12 lg:w-1/2 text-center lg:text-start">
        <h3 className="text-xl font-semibold text-[#020043] border border-[#020043] rounded-full px-8 py-2 w-fit mx-auto lg:mx-0">
          Sobre Mí
        </h3>
        <h1 className="text-3xl md:text-3xl lg:text-5xl text-[#020043] font-bold">
          Un poco sobre mi trayectoría
        </h1>
        <p className="text-[#020043] text-xl font-semibold">
       Formado en la BUAP, completó su alta especialidad en Cirugía Laparoscópica Avanzada en La Salle y en Cirugía Bariátrica en la UNAM, destacándose como Cirujano Bariatra Certificado. Su compromiso y experiencia han transformado la vida de numerosos pacientes, ofreciendo soluciones quirúrgicas avanzadas y seguras.
          <div className="mt-6 lg:mt-12">
           
          </div>
        </p>
      </div>
                                {/* right side */}
      <div className="lg:w-1/2 relative">
        <div>
          <img className="w-full h-full  rounded-3xl" src={whoWeAreImg} alt="" />
        </div>
        <div>
          <div className="shadow-xl bg-[#020043] opacity-85 text-white rounded-3xl p-5 lg:p-10 space-y-3 lg:space-y-6 lg:absolute -left-28 -bottom-6 w-fit mx-auto -mt-28 lg:-mt-0">
            <h2 className="text-4xl font-semibold">Dr. Omar Espinosa Gonzalez</h2>
            <p className="text-xl font-medium">
            Cirugía General, Cirugía Laparoscópica Avanzada, Cirugía Bariátrica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
