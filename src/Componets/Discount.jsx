import { MdArrowOutward } from "react-icons/md";
import descriptionbannerImg from "../../public/Media/Rectangle 32.jpg";

const Discount = () => {
  return (
    <div className="relative w-full my-6 lg:my-24">
      <img
        className="w-full h-96 rounded-2xl"
        src={descriptionbannerImg}
        alt="doctor-background"
      />
      {/* left side  */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#020043] to-[#0200434D] opacity-95 rounded-2xl">
        <div className="absolute top-3 md:top-1/3 left-6 md:left-10 space-y-6">
        <h2 className="md:text-xl lg:text-4xl text-white font-semibold">
          ¡Agende su cita ahora mismo! Estaré encantado de atender su caso con calidad y profesionalismo.
        </h2>
          <h3 className="md:text-l lg:text-1xl text-white font-semibold">
          Hospital Puebla. Priv. de las Ramblas 4, Reserva Territorial Atlixcáyotl, Corredor Comercial Desarrollo Atlixcayotl, 72197 Heroica Puebla de Zaragoza, Pue.
          </h3>
          <div className="space-x-3 md:space-x-6">
            <a href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta">
            <btn className="btn bg-[#FFC637]  font-semibold md:text-xl">
              Agendar Cita <MdArrowOutward />
            </btn>
            </a>
            <a href="https://maps.app.goo.gl/BVu57wNRpgDragLt6">
            <btn className="btn btn-outline text-white font-semibold md:text-xl">
              Ver Ubicación <MdArrowOutward />
            </btn>
            </a>
          </div>
        </div>
        {/* right side  */}
        <div className="absolute right-6 top-4 md:right-10 md:top-10">
         <h1 className="text-white  ">Dr. Omar Espinosa Gonzalez</h1>
        </div>
      </div>
    </div>
  );
};

export default Discount;