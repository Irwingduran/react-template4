
import { MdArrowOutward } from "react-icons/md";
const Navbar = () => {
  const navLink = (
    <>
      <li>
        <a>Inicio</a>
      </li>
      <li>
        <a>Servicio</a>
      </li>
      <li>
        <a>Conóceme</a>
      </li>
      <li>
        <a>Contacto</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
        <a className="btn text-lg btn-ghost">
          <h1>Dr. Omar Espinosa Gonzalez</h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#020043] text-lg font-semibold">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-[#020043] btn-outline font-semibold md:text-xl">
          Agendar Cita <MdArrowOutward />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
