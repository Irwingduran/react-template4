import { MdArrowOutward } from "react-icons/md";
import advancedTech from "../../public/Media/service1.jpeg";
import onlineDoctor from "../../public/Media/service2.webp";
import consultancy from "../../public/Media/service3.webp";


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
          <a href="https://api.whatsapp.com/send/?phone=5212221843622&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0" target="_blank">
            <btn className="btn bg-[#FFC637] font-semibold text-xl">
              Agendar Cita<MdArrowOutward />
            </btn>
            </a>
          </div>
       
      </div>
      {/* col span 4 */}
      <a href="/Service">
      <div className="relative">
        <div>
          <img
            className="w-full h-96 opacity-90 rounded-3xl"
            src={consultancy}
            alt=""
          />
        </div>
        <div>
          <div className="shadow-xl cursor-pointer bg-[#020043] opacity-85 text-white rounded-3xl p-5 lg:p-10 space-y-3 lg:space-y-6 lg:absolute left-6 bottom-6 w-fit mx-auto -mt-28 lg:-mt-0">
            <h2 className="text-xl md:text-3xl font-semibold">
            Colecistectomía Laparoscópica
            </h2>
          </div>
        </div>
      </div>
      </a>
      {/* col span- 3 */}
      <a href="/Service">
      <div className=" relative">
        <div>
          <img
            className="w-full h-96 opacity-90 rounded-3xl"
            src={onlineDoctor}
            alt=""
          />
        </div>
        <div>
        <div className="shadow-xl cursor-pointer bg-[#020043] opacity-85 text-white rounded-3xl p-5 lg:p-10 space-y-3 lg:space-y-6 lg:absolute left-6 bottom-6 w-fit mx-auto -mt-28 lg:-mt-0">
            <h2 className="text-xl md:text-3xl font-semibold">
            Bypass Gástrico Laparoscópico
            </h2>
          </div>
        </div>
      </div>
      </a>
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
            <h2 className="text-xl md:text-3xl font-semibold">
              Manga Gástrica Laparoscópica
            </h2>
          </div>
        </div>
      </div>
      </a>
      
      
     
    </div>
  );
};

export default Service;
