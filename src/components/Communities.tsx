import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Importação das imagens
import ParoquiaSantoAntonio from '/src/imagens/comunnitys/Paróquia Santo Antônio.png';
import NossaSenhoraAparecida from '/src/imagens/comunnitys/Igreja Nossa Senhora Aparecida.jpeg';
import CasaBobato from '/src/imagens/comunnitys/2006 bobato.jpeg';
import SagradoCoracaoJesus from '/src/imagens/comunnitys/1ª Visita canônica 2007 foto 2.jpg';
import NossaSenhoraAuxiliadora from '/src/imagens/comunnitys/WhatsApp Image 2025-01-17 at 09.38.16.jpeg';
import SantaRosaDeLima from '/src/imagens/comunnitys/santa_rosa_de_lima.jpg';

const communities = [
  {
    name: 'Paróquia Santo Antônio',
    description: 'Local das primeiras celebrações da comunidade ucraniana: 22/05/2005 a 24/07/2005. Com apoio do Pe. Renato dos Santos.',
    image: ParoquiaSantoAntonio,
  },
  {
    name: 'Igreja Nossa Senhora Aparecida',
    description: 'Tornou-se o local principal das celebrações mensais: 23/10/2005 a 27/11/2005. Celebrações lideradas por Pe. Arcênio e Pe. Sérgio Saplak.',
    image: NossaSenhoraAparecida,
  },
  {
    name: 'Casa da Família Bobato',
    description: 'Em janeiro de 2006, a residência da família Bobato foi usada para hospedagem do Pe. Geraldo e visitas às famílias, somando 80 casas abençoadas.',
    image: CasaBobato,
  },
  {
    name: 'Igreja Sagrado Coração de Jesus',
    description: 'Celebração realizada em 04/09/2005 para apresentar o Pe. Arcênio Krefer. Foi descartada posteriormente devido à distância do centro de Joinville.',
    image: SagradoCoracaoJesus,
  },
  {
    name: 'Igreja Nossa Senhora Auxiliadora',
    description: 'Local onde as celebrações da comunidade ucraniana foram realizadas posteriormente, com apoio do Pe. Wenceslau Nietzka.',
    image: NossaSenhoraAuxiliadora,
  },
  {
    name: 'Comunidade Santa Rosa de Lima',
    description: 'Ofereceu espaço para celebrações e eventos. A comunidade celebrou missas aqui até a aquisição da sede própria em 2019.',
    image: SantaRosaDeLima,
  },
];

function Communities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">
          Comunidades que Apoiaram Nossa Jornada
        </h2>

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
          {communities.map((community, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-2 flex flex-col h-full">
                <div className="w-full h-48 overflow-hidden flex items-center justify-center">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{community.name}</h3>
                  <p className="text-gray-600">{community.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Communities;
