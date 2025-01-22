import React from 'react';
import { FaCheckCircle, FaUserMd, FaHospital, FaClipboardList, FaExclamationTriangle } from "react-icons/fa";

const ServiceDetails = () => {
  return (
    <div className="w-full bg-gray-50">
     {/* Hero Section */}
  <div className="relative h-[400px] bg-[#020043] w-full overflow-hidden">
  <div className="absolute inset-0 flex items-center">
    <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
      {/* Text Content */}
      <div className="max-w-2xl text-white">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Plastia Inguinal Laparoscópica
        </h1>
        <p className="text-lg lg:text-xl">
          Procedimiento quirúrgico mínimamente invasivo para reparar hernias inguinales de manera eficiente y segura.
        </p>
      </div>
      
      {/* Image */}
      <div className="hidden lg:block w-1/3">
        <img 
          src="/path-to-your-image.jpg" 
          alt="Descripción de la imagen" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
    </div>
  </div>


      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#020043] mb-6">
              ¿Qué es la Plastia Inguinal?
            </h2>
            <p className="text-[#4A4A68] text-lg mb-6">
              La plastia inguinal laparoscópica es un procedimiento quirúrgico diseñado para reparar hernias inguinales mediante pequeñas incisiones, reduciendo el dolor y el tiempo de recuperación.
            </p>
            <p className="text-[#4A4A68] text-lg">
              Se utiliza una malla quirúrgica para reforzar el área debilitada de la pared abdominal, minimizando la posibilidad de recurrencia.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-[267px] h-[476px] rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="absolute inset-0">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fbariatrapue%2Fvideos%2F542267478727100%2F&show_text=false&width=267&t=0" 
                  className="w-full h-full"
                  style={{
                    border: 'none',
                    overflow: 'hidden',
                  }}
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#020043] text-center mb-10">
            Beneficios del Procedimiento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-[#FFFFF5]">
              <div className="w-16 h-16 bg-[#020043] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserMd className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#020043] mb-3">
                Menor Dolor Postoperatorio
              </h3>
              <p className="text-[#4A4A68]">
                Gracias a la técnica laparoscópica, los pacientes experimentan menos molestias.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#FFFFF5]">
              <div className="w-16 h-16 bg-[#020043] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHospital className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#020043] mb-3">
                Recuperación Rápida
              </h3>
              <p className="text-[#4A4A68]">
                Alta hospitalaria en menos de 48 horas y rápido retorno a actividades cotidianas.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#FFFFF5]">
              <div className="w-16 h-16 bg-[#020043] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClipboardList className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#020043] mb-3">
                Bajo Riesgo de Recurrencia
              </h3>
              <p className="text-[#4A4A68]">
                Uso de malla quirúrgica para reforzar la zona debilitada de la pared abdominal.
              </p>
            </div>
          </div>
        </div>
        
        {/* Proceso del Tratamiento */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#020043] text-center mb-10">
            Proceso del Tratamiento
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {['Evaluación', 'Preparación', 'Cirugía', 'Seguimiento'].map((step, index) => (
              <div key={step} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-10 h-10 bg-[#020043] rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#020043] mb-3">{step}</h3>
                  <p className="text-[#4A4A68]">
                    {index === 0 && "Evaluación médica completa y estudios preoperatorios"}
                    {index === 1 && "Preparación específica previa al procedimiento"}
                    {index === 2 && "Realización del procedimiento laparoscópico"}
                    {index === 3 && "Control postoperatorio y seguimiento continuo"}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#020043]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
