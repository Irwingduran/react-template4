import { MdArrowOutward } from "react-icons/md";
import advancedTech from "../../public/Media/Rectangle 27.jpg";
import onlineDoctor from "../../public/Media/Rectangle 27.jpg";
import consultancy from "../../public/Media/Rectangle 27.jpg";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="mt-10 lg:mt-28 bg-[#FFFFF5] rounded-3xl p-10 grid md:grid-cols-2 gap-8 border">
      <div className="space-y-4 lg:space-y-12 text-center lg:text-start">
        <h3 className="text-xl font-semibold text-[#020043] border border-[#020043] rounded-full px-10 py-2 w-fit mx-auto lg:mx-0">
          Servicio
        </h3>
        <h1 className="text-3xl lg:text-5xl text-[#020043] font-bold">
        Servicios de alta calidad y atención personalizada para<br /> cuidar de tu salud y bienestar.
        </h1>
        <div className="mt-6 lg:mt-12">
            <btn className="btn bg-[#FFC637] font-semibold text-xl">
              Agendar Cita<MdArrowOutward />
            </btn>
          </div>
       
      </div>
      {/* col span-2 */}
       <a href="/Service">
      <div className="relative">
        <div>
          <img
            className="w-full h-full opacity-90 rounded-3xl"
            src={advancedTech}
            alt=""
          />
        </div>
        <div>
          <div className="shadow-xl cursor-pointer bg-[#020043] opacity-85 text-white rounded-3xl p-5 lg:p-10 space-y-3 lg:space-y-6 lg:absolute left-6 bottom-6 w-fit mx-auto -mt-28 lg:-mt-0">
            <h2 className="text-xl md:text-4xl font-semibold">
              Manga Gástrica Laparoscópica
            </h2>
            <p className="md:text-xl font-medium">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> ipsa beatae sequi debitis {" "}
              <br /> Itaque maiores neque voluptatibus, <br />  a quia voluptatum nesciunt odio esse!
            </p>
          </div>
        </div>
      </div>
      </a>
    
      {/* col span- 3 */}
      <a href="/Service">
      <div className=" relative">
        <div>
          <img
            className="w-full h-full opacity-90 rounded-3xl"
            src={onlineDoctor}
            alt=""
          />
        </div>
        <div>
        <div className="shadow-xl cursor-pointer bg-[#020043] opacity-85 text-white rounded-3xl p-5 lg:p-10 space-y-3 lg:space-y-6 lg:absolute left-6 bottom-6 w-fit mx-auto -mt-28 lg:-mt-0">
            <h2 className="text-xl md:text-4xl font-semibold">
            Bypass Gástrico Laparoscópico
            </h2>
            <p className="md:text-xl font-medium">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> ipsa beatae sequi debitis {" "}
              <br /> Itaque maiores neque voluptatibus, <br />  a quia voluptatum nesciunt odio esse!
              
            </p>
          </div>
        </div>
      </div>
      </a>
      {/* col span 4 */}
      <a href="/Service">
      <div className="relative">
        <div>
          <img
            className="w-full h-full opacity-90 rounded-3xl"
            src={consultancy}
            alt=""
          />
        </div>
        <div>
          <div className="shadow-xl cursor-pointer bg-[#020043] opacity-85 text-white rounded-3xl p-5 lg:p-10 space-y-3 lg:space-y-6 lg:absolute left-6 bottom-6 w-fit mx-auto -mt-28 lg:-mt-0">
            <h2 className="text-xl md:text-4xl font-semibold">
            Colecistectomía Laparoscópica
            </h2>
            <p className="md:text-xl font-medium">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> ipsa beatae sequi debitis {" "}
              <br /> Itaque maiores neque voluptatibus, <br />  a quia voluptatum nesciunt odio esse!
            </p>
          </div>
        </div>
      </div>
      </a>
    </div>
  );
};

export default Service;
