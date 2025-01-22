import React from "react";
import { FaStar } from "react-icons/fa6";
import itProfessionalImg from "../../public/Media/Ellipse 10.png";
import bussinessExImg from "../../public/Media/Ellipse 10 (1).png";
import lawyerImg from "../../public/Media/Ellipse 10 (2).png";

const Testimonial = () => {
  return (
    <div className="mt-10 lg:mt-28">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-[#020043] border border-[#020043] rounded-full px-10 py-2 w-fit mx-auto lg:mx-0">
         Testimonios
        </h3>
        <h1 className="text-3xl lg:text-5xl text-[#020043] font-bold text-center lg:text-start">
          Lo que mis pacientes opinan...
        </h1>
      </div>
      {/* it professional person card  */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-16">
        <div className="bg-[#FFFFF5] shadow-xl rounded-3xl border lg:row-start-6 lg:row-end-12 p-5 lg:col-start-7 lg:col-end-9 space-y-3">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#020043]">
            Experiencia y compasión combinadas
          </h1>
          <p className="text-[#020043] font-medium">
            Desde la primera consulta, el Dr. fue muy claro y empático al explicar mi condición. Después de la cirugía, mi calidad de vida ha mejorado significativamente. ¡Lo recomiendo ampliamente!
          </p>
          <div className="flex gap-4">
            <div>
              <img src={itProfessionalImg} alt="" />
            </div>
            <div>
              <h5 className="text-[#020043]">
                <span className="font-bold text-[#020043]">Sarah D, </span> Marzo 2024
              </h5>
              <div className="flex gap-1">
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
              </div>
            </div>
          </div>
        </div>
        {/* bussiness Executive person card  */}
        <div className="bg-[#FFFFF5] shadow-xl rounded-3xl border lg:row-start-6 lg:row-end-12 p-5 lg:col-start-7 lg:col-end-9 space-y-3">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#020043]">
            Mi experiencia fue genial
          </h1>
          <p className="text-[#020043] font-medium">
            El procedimiento fue rápido y el equipo del Dr. siempre estuvo pendiente de mi recuperación. Ahora puedo disfrutar de mi día a día sin molestias. ¡Gracias!
          </p>
          <div className="flex gap-4">
            <div>
              <img src={bussinessExImg} alt="" />
            </div>
            <div>
              <h5 className="text-[#020043]">
                <span className="font-bold text-[#020043]">Miguel R, </span> Junio 2024
              </h5>
              <div className="flex gap-1">
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
              </div>
            </div>
          </div>
        </div>
        {/* lawyer person card  */}
        <div className="bg-[#FFFFF5] shadow-xl rounded-3xl border lg:row-start-6 lg:row-end-12 p-5 lg:col-start-7 lg:col-end-9 space-y-3">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#020043]">
            El Dr. fue muy profesional durante todo el proceso
          </h1>
          <p className="text-[#020043] font-medium">
            Su conocimiento y experiencia me dieron la confianza que necesitaba para realizarme la cirugía. Todo salió perfecto y el seguimiento postoperatorio fue excepcional.
          </p>
          <div className="flex gap-4">
            <div>
              <img src={lawyerImg} alt="" />
            </div>
            <div>
              <h5 className="text-[#020043]">
                <span className="font-bold text-[#020043]">David S, </span> Septiembre 2024
              </h5>
              <div className="flex gap-1">
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
                <FaStar className="text-[#FFE03D]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
