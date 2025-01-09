import React from "react";

const Faq = () => {
  return (
    <div className="mt-10 lg:mt-28">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-[#020043] border border-[#020043] rounded-full px-10 py-2 w-fit mx-auto lg:mx-0">
          Preguntas Frecuentes 
        </h3>
        <h1 className="text-2xl lg:text-5xl text-[#020043] font-bold text-center lg:text-start">
         Preguntas comunes en mis pacientes...
        </h1>
      </div>
                   {/* question and answer part  */}
      <div className="collapse collapse-arrow bg-[#FFFFF5] mb-4 mt-6 md:px-6">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-[#020043]">
          {" "}
          ¿Qué es la cirugía laparoscópica?
        </div>
        <div className="collapse-content">
          <p>
          Es una técnica quirúrgica mínimamente invasiva que utiliza pequeñas incisiones, una cámara y herramientas especiales para realizar procedimientos sin abrir completamente el abdomen.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#FFFFF5] mb-4 mt-6 md:px-6">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-[#020043]">
          {" "}
          ¿Cuáles son los beneficios de la cirugía bariátrica?
        </div>
        <div className="collapse-content">
          <p>
          Ayuda a perder peso de forma significativa, mejora o resuelve enfermedades relacionadas como diabetes tipo 2, hipertensión y apnea del sueño.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#FFFFF5] mb-4 mt-6 md:px-6">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-[#020043]">
          {" "}
          ¿Cuánto tiempo dura la recuperación de una cirugía laparoscópica?
        </div>
        <div className="collapse-content">
          <p>
          Generalmente, entre 1 y 4 semanas, dependiendo del procedimiento y del paciente.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#FFFFF5] mb-4 mt-6 md:px-6">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-[#020043]">
          {" "}
          ¿Qué criterios debo cumplir para ser candidato a una cirugía bariátrica?
        </div>
        <div className="collapse-content">
          <p>
          Tener un IMC mayor a 40, o mayor a 35 con enfermedades asociadas como diabetes, y haber intentado otros métodos de pérdida de peso sin éxito.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#FFFFF5] mb-4 mt-6 md:px-6">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-[#020043]">
          {" "}
          ¿La cirugía laparoscópica deja cicatrices?
        </div>
        <div className="collapse-content">
          <p>
          Sí, pero son mínimas y suelen ser pequeñas marcas que con el tiempo se vuelven casi imperceptibles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
