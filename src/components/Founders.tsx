import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Importação das imagens (mesmo caminho que no componente Communities)
import PeGeraldoDaciuk from '/src/imagens/padres/Pe. Geraldo Emílio Daciuk.jpeg';
import SofiaCelsoJarenko from '/src/imagens/fundadores/WhatsApp Image 2025-01-14 at 12.32.59.jpeg';
import DomEfraim from '/src/imagens/padres/Dom Efraim.jpeg';
import AertesCecilia from '/src/imagens/fundadores/WhatsApp Image 2025-01-17 at 14.07.14.jpeg';
import PeDionisioZaluski from '/src/imagens/fundadores/WhatsApp Image 2025-01-14 at 12.29.17.jpeg';

const foundersData = [
  {
    name: 'Pe. Geraldo Emílio Daciuk, OSBM',
    description: 'Iniciou o trabalho pastoral em Joinville em 2005, realizando celebrações e visitando 80 famílias para bênçãos domiciliares.',
    image: PeGeraldoDaciuk,
  },
  {
    name: 'Sra. Sofia Maistrovicz Jarenko e Sr. Celso Karpen Jarenko',
    description: 'Em 2005, colaboraram ativamente no levantamento das famílias ucranianas em Joinville, SC, contribuindo para a formação da comunidade católica ucraniana na cidade.',
    image: SofiaCelsoJarenko,
  },
  {
    name: 'Dom Efraim B. Krevei, OSBM',
    description: 'Contribuiu em 2005, fortalecendo o vínculo com a comunidade e apoiando a continuidade do trabalho pastoral.',
    image: DomEfraim,
  },
  {
    name: 'Sr. Aertes Bobato e sua esposa Cecília Huida',
    description: 'Foi de suma importância, pois estes disponibilizaram a sua residência para a hospedagem do padre e também foram celebrados as missas.',
    image: AertesCecilia,
  },
  {
    name: 'Pe. Dionísio Zaluski',
    description: 'Teve papel fundamental ao apoiar a formação da comunidade católica ucraniana em Joinville. Além do levantamento de famílias ucranianas na cidade, facilitando a organização das atividades religiosas.',
    image: PeDionisioZaluski,
  },
];

function Founders() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Nossos Fundadores</h2>
        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {foundersData.map((founder, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-2 flex flex-col h-full">
                <div className="w-full h-48 overflow-hidden flex items-center justify-center">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-gray-600">{founder.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Founders;
