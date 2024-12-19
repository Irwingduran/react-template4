import React from 'react';
import { FaCheckCircle, FaUserMd, FaHospital, FaClipboardList, FaExclamationTriangle } from "react-icons/fa";

const ServiceDetails = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[#020043] w-full overflow-hidden">
        
        <div className="absolute inset-0 bg- flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Manga Gástrica Laparoscópica
              </h1>
              <p className="text-xl lg:text-2xl">
                Una solución efectiva y segura para el tratamiento de la obesidad
              </p>
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
              ¿Qué es la Manga Gástrica?
            </h2>
            <p className="text-[#4A4A68] text-lg mb-6">
              La manga gástrica es un procedimiento quirúrgico mínimamente invasivo que reduce el tamaño del estómago aproximadamente en un 80%, dejándolo en forma de tubo o manga.
            </p>
            <p className="text-[#4A4A68] text-lg">
              Este procedimiento se realiza por vía laparoscópica, lo que significa menores riesgos, recuperación más rápida y mínimas cicatrices.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/api/placeholder/600/400" 
              alt="Aquí va imagen del servcio o similar" 
              className="w-full h-full object-cover"
            />
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
                Pérdida de Peso Efectiva
              </h3>
              <p className="text-[#4A4A68]">
                70-80% del exceso de peso en el primer año post cirugía
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
                Alta hospitalaria en 24-48 horas y retorno temprano a actividades
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#FFFFF5]">
              <div className="w-16 h-16 bg-[#020043] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClipboardList className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#020043] mb-3">
                Mejora en Salud
              </h3>
              <p className="text-[#4A4A68]">
                Resolución o mejora de condiciones asociadas a la obesidad
              </p>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#020043] text-center mb-10">
            Proceso del Tratamiento
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {['Evaluación Inicial', 'Preparación', 'Cirugía', 'Seguimiento'].map((step, index) => (
              <div key={step} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="w-10 h-10 bg-[#020043] rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#020043] mb-3">{step}</h3>
                  <p className="text-[#4A4A68]">
                    {index === 0 && "Evaluación médica completa y estudios preoperatorios"}
                    {index === 1 && "Preparación física y nutricional pre-cirugía"}
                    {index === 2 && "Procedimiento laparoscópico de 1-2 horas"}
                    {index === 3 && "Control y seguimiento multidisciplinario"}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#020043]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-[#FFFFF5] rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <FaExclamationTriangle className="text-[#020043] text-3xl" />
            <h2 className="text-3xl font-bold text-[#020043]">
              Información Importante
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#020043] mb-4">
                Candidatos Ideales
              </h3>
              <ul className="space-y-3">
                {[
                  'IMC mayor a 40 o mayor a 35 con comorbilidades',
                  'Intentos previos de pérdida de peso sin éxito',
                  'Compromiso con cambios en el estilo de vida',
                  'Edad entre 18 y 65 años'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#00A859] flex-shrink-0" />
                    <span className="text-[#4A4A68]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#020043] mb-4">
                Recomendaciones Post-operatorias
              </h3>
              <ul className="space-y-3">
                {[
                  'Seguir estrictamente la dieta indicada',
                  'Mantener hidratación adecuada',
                  'Actividad física progresiva',
                  'Asistir a todas las consultas de seguimiento'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#00A859] flex-shrink-0" />
                    <span className="text-[#4A4A68]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
