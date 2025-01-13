import React from "react";

const MapComponent = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h3 className="text-xl my-6 sm:my-8 font-semibold text-[#020043] border border-[#020043] rounded-full px-8 py-2 w-fit mx-auto sm:mx-0">
        Ubicación
      </h3>
      <h1 className="text-2xl sm:text-3xl lg:text-5xl text-[#020043] font-bold text-center sm:text-left my-4 sm:my-6">
        Estamos aquí para ayudarte y brindarte el mejor servicio. ¡Te esperamos!
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.7568359803445!2d-98.23113522479579!3d19.03043378216481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAxJzQ5LjYiTiA5OMKwMTMnNDIuOCJX!5e0!3m2!1ses!2smx!4v1736439626261!5m2!1ses!2smx"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h2 className="text-center">Hospital Puebla. Priv. de las Ramblas 4, Reserva Territorial Atlixcáyotl, Corredor Comercial Desarrollo Atlixcayotl, 72197 Heroica Puebla de Zaragoza, Pue.</h2>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;