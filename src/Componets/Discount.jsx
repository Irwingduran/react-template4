import { MdArrowOutward } from "react-icons/md";
import descriptionbannerImg from "../../public/Media/Rectangle 32.jpg";

const Discount = () => {
  return (
    <div className="relative w-full my-6 lg:my-24">
      <img
        className="w-full h-96 rounded-2xl"
        src={descriptionbannerImg}
        alt="Description of the image"
      />
      {/* left side  */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#020043] to-[#0200434D] opacity-95 rounded-2xl">
        <div className="absolute top-3 md:top-1/3 left-6 md:left-10 space-y-6">
          <h2 className="md:text-xl lg:text-5xl text-white font-semibold">
            Espacio <br /> para algún anuncio <br />
            o comentario, etc
          </h2>
          <div className="space-x-3 md:space-x-6">
            <btn className="btn bg-[#FFC637]  font-semibold md:text-xl">
              Agendar Cita <MdArrowOutward />
            </btn>
            <btn className="btn btn-outline text-white font-semibold md:text-xl">
              Ver Más <MdArrowOutward />
            </btn>
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
