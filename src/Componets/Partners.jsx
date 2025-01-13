import React from 'react';

// Lista de logos (puedes reemplazar las URLs por las tuyas)
const insurancePartners = [
  { id: 1, name: 'AXA', logo: '/icon/AXA.jpg' },
  { id: 2, name: 'ATLAS', logo: '/icon/ATLAS.jpg' },
  { id: 3, name: 'BUPA', logo: '/icon/BUPA.jpg' },
  { id: 4, name: 'GNP', logo: '/icon/GNP.jpg' },
  { id: 5, name: 'INBURSA', logo: '/icon/inbursa.jpg' },
  { id: 6, name: 'MAPFRE', logo: '/icon/MAPFRE.jpg' },
  { id: 7, name: 'METLIFE', logo: '/icon/METLIFE.jpg' },
  { id: 8, name: 'ALLIANZ', logo: '/icon/ALLIANZ.jpg' },
  { id: 9, name: 'ZURICH', logo: '/icon/ZURICH.jpg' },
  { id: 11, name: 'FIRA', logo: '/icon/FIRA.jpg' },
  { id: 12, name: 'QUALITAS', logo: '/icon/QUALITAS.jpg' },
  { id: 13, name: 'SURA', logo: '/icon/SURA.jpg' },
  { id: 14, name: 'BTX', logo: '/icon/BANCOMIN.jpg' },
];

const Partners = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Aseguradoras Socias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
          {insurancePartners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;