import { MdArrowOutward } from "react-icons/md";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (
    <>
      <li>
        <a href="/">Inicio</a>
      </li>
      <li>
        <a href="/#service">Servicios</a>
      </li>
      <li>
        <a href="/#about">Conóceme</a>
      </li>
      <li>
        <a href="/#contact">Contacto</a>
      </li>
    </>
  );

  return (
    <div className={`navbar bg-base-100 ${isScrolled ? "fixed top-0 left-0 w-full shadow-md transition-all z-50" : ""}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg text-[#020043] font-semibold"
          >
            {navLink}
          </ul>
        </div>
        <a href="/" className="btn text-lg btn-ghost">
          <h1>Dr. Omar Espinosa Gonzalez</h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#020043] text-lg font-semibold">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <a href="https://api.whatsapp.com/send/?phone=5212221843622&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0" className="btn text-[#020043] btn-outline font-semibold md:text-xl" target="_blank">
          Agendar Cita <MdArrowOutward />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
