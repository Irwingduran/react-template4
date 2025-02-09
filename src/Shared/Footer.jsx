const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#020043] text-white mt-14 lg:py-20">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 ml-0 md:ml-36 lg:ml-64">
        <div className="lg:w-[20%]">
          <a rel="noopener noreferrer" href="/">
            <h1 className="text-4xl text-white">Dr Omar Espinosa Gonzalez</h1>
            <p className="text-lg lg:-ml-10 mt-4 font-barlow text-white">
              <p className="mt-2">
                Servicios de alta calidad y atención personalizada
              </p>
            </p>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 w-full lg:w-2/3 lg:grid-cols-4 font-semibold lg:mr-40">
          <div className="space-y-3">
            <ul className="space-y-1 text-lg text-white">
              <li>
                <a
                  className="flex items-center gap-2 text-white"
                  rel="noopener noreferrer"
                  href="/"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 text-white"
                  rel="noopener noreferrer"
                  href="/#about"
                >
                  Conóceme
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 text-white"
                  rel="noopener noreferrer"
                  href="/#service"
                >
                  Servicio
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3 lg:ml-20">
            <ul className="space-y-1 text-lg text-white">
              <li>
                <a
                  className="text-white"
                  rel="noopener noreferrer"
                  href="https://wa.me/5212221843622?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta"
                  target="_blank"
                >
                  Agendar Cita
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  rel="noopener noreferrer"
                  href="/#location"
                >
                  Ubicación
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3 lg:ml-40 lg:w-[200px]">
            <div className="uppercase text-white">Sígueme</div>
            <div className="flex justify-start space-x-4">
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/bariatrapue?mibextid=ZbWKwL"
                title="Facebook"
                className="flex items-center p-1"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current text-white"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>

              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/drespinosabariatra/?igshid=YTQwZjQ0NmI0OA%3D%3D#"
                title="Instagram"
                className="flex items-center p-1"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current text-white"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="pt-8 text-center text-white">
          <a href="https://delta-digital.com.mx/">Delta Agency &copy; 2025</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
