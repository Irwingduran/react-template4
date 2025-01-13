import { FaStar } from "react-icons/fa6";
import circleImg from "../../public/Media/circle.png";
import contractImg from "../../public/Media/contract.png";
import groupImg from "../../public/Media/Group.png";
import group1Img from "../../public/Media/Group1.png";
import group2Img from "../../public/Media/Group2.png";
const CareSection = () => {
  return (
    <div className="mt-10 lg:mt-20 grid grid-cols-2 lg:grid-cols-10 lg:grid-rows-12 gap-3 lg:gap-6 lg:max-h-96">
      <div className="lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-span-6">
        <h1 className="text-[#020043]  text-4xl md:text-4xl lg:text-4xl xl:text-5xl  font-bold text-center">
        Servicios de alta calidad y atención personalizada 
        </h1>
      </div>

      <div className="shadow-xl p-3 lg:p-6 rounded-3xl lg:space-y-4 lg:col-start-1 lg:col-end-3 border lg:row-start-1 lg:row-end-12">
        <h1 className="text-2xl lg:text-5xl font-bold text-[#020043]">+2,000</h1>
        <p className="text-[#020043]">
        Cirugías <br /> realizadas
        </p>
        <div className="flex justify-end items-end">
          <img className="w-96 lg:24" src={circleImg} alt="" />
        </div>
      </div>
      <div className="bg-[#FFFFF5] shadow-xl rounded-3xl border lg:row-start-6 lg:row-end-12 p-4 lg:col-start-3 lg:col-end-5">
        <h1 className="text-2xl lg:text-4xl font-bold text-[#020043]">+10</h1>
        <p className="text-[#020043]">
          Años de <br /> experiencia
        </p>
        <div className="flex justify-end lg:-mt-4">
          <img className="lg:w-20" src={contractImg} alt="" />
        </div>
      </div>
      <div className="shadow-xl rounded-3xl border lg:row-start-7 lg:row-end-12 py-3 px-5 space-y-2 lg:col-start-5 lg:col-end-7">
        <div className="flex items-center text-2xl lg:text-4xl gap-2">
          <h1 className=" font-bold text-[#020043]">5.0</h1>
          <FaStar className="text-[#FFE03D]" />
        </div>
        <p className="text-[#020043]">Servicio de calidad</p>
        <div className="">
          <img className="" src={groupImg} alt="" />
        </div>
      </div>
      <div className="bg-[#FFFFF5] shadow-xl rounded-3xl border lg:row-start-6 lg:row-end-12 p-5 lg:col-start-7 lg:col-end-9">
        <h1 className="text-2xl lg:text-4xl font-bold text-[#020043]">+15,000</h1>
        <p className="text-[#020043]">
          Consultas
        </p>
        <div className="flex justify-end -mt-4">
          <img className="lg:w-20" src={group1Img} alt="" />
        </div>
      </div>
      <div className="shadow-xl p-3 lg:p-6 rounded-3xl space-y-2 lg:space-y-4 border lg:row-start-1 lg:row-end-12 lg:col-start-9 lg:col-end-11">
        <h1 className="text-2xl lg:text-5xl font-bold text-[#020043]">+25</h1>
        <p className="text-[#020043]">
          Casos documentados
        </p>
        <div className="flex justify-center items-end">
          <img className="w-1/4 lg:w-fit" src={group2Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CareSection;
