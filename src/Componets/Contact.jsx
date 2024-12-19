import React from "react";

const Contact = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 bg-[#FFFF]">
      {/* Título de la sección */}
      <h3 className="text-xl font-semibold text-[#020043] border border-[#020043] rounded-full px-8 py-2 w-fit mx-auto lg:mx-0">
          Contacto
        </h3>
      <h1 className="text-3xl lg:text-5xl text-[#020043] font-bold text-center mb-8">
        ¿Tienes alguna duda o necesitas ayuda? 
       
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Puedes redactar tu caso a través del formulario.
      </p>
      
      {/* Formulario */}
      <form className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Nombre"
            className="p-3 border rounded-lg focus:outline-none focus:ring focus:ring-[#020043]"
            required
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className="p-3 border rounded-lg focus:outline-none focus:ring focus:ring-[#020043]"
            required
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="max-w-3xl p-3 border rounded-lg focus:outline-none focus:ring focus:ring-[#020043]"
            required
          />
        </div>
        <textarea
          placeholder="Mensaje"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-[#020043] mb-4"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#020043] text-white py-3 rounded-lg hover:bg-[#030066] transition-all font-semibold"
        >
          Enviar Mensaje
        </button>
      </form>

    </div>
  );
};

export default Contact;
