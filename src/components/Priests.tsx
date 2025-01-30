import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Importação das imagens
import PeGeraldoDaciuk from '/src/imagens/padres/Pe. Geraldo Emílio Daciuk.jpeg';
import PeArcênioKrefer from '/src/imagens/padres/Pe. Arcênio Krefer.jpeg';
import PeSergioSaplak from '/src/imagens/padres/Sergio saplacka.jpeg';
import PeJaimeFernandoValus from '/src/imagens/padres/Pe Jaime Fernando valuz.jpeg';
import PeEmersonSpack from '/src/imagens/padres/Sergio Spack.jpeg';
import PeAntonioRoik from '/src/imagens/padres/Pe Antonio Roick.jpeg';
import PeMarcosChmilouski from '/src/imagens/padres/Pe Marcos.jpeg';
import PeSergioIwantchuk from '/src/imagens/padres/WhatsApp Image 2025-01-15 at 09.36.50.jpeg';
import PeGregorioHunka from '/src/imagens/padres/WhatsApp Image 2025-01-15 at 09.55.47.jpeg';
import PeAntonioNazarko from '/src/imagens/padres/Antonio Nazarko.jpeg';

const priests = [
  {
    name: 'Pe. Geraldo Emílio Daciuk, OSBM',
    description: 'Iniciou o trabalho pastoral em Joinville em 2005, realizando celebrações e visitando 80 famílias para bênçãos domiciliares.',
    image: PeGeraldoDaciuk,
  },
  {
    name: 'Pe. Arcênio Krefer, OSBM',
    description: 'Atuou em 2005, transferindo as celebrações para a Igreja Sagrado Coração de Jesus, aproximando Joinville, Jaraguá do Sul e Guaramirim.',
    image: PeArcênioKrefer,
  },
  {
    name: 'Pe. Sérgio Saplak, OSBM',
    description: 'Contribuiu com celebrações em novembro de 2005, fortalecendo o vínculo com a comunidade e apoiando a continuidade do trabalho pastoral.',
    image: PeSergioSaplak,
  },
  {
    name: 'Pe. Jaime Fernando Valus, OSBM',
    description: 'Liderou a primeira Divina Liturgia na sede própria em 13 de julho de 2019, concretizando o sonho de uma igreja para a comunidade de Joinville.',
    image: PeJaimeFernandoValus,
  },
  {
    name: 'Pe. Emerson Sérgio Spack, OSBM',
    description: 'Organizou ações comunitárias como a doação de bancos em 2023 e altares em 2024, fortalecendo os laços e a estrutura da igreja.',
    image: PeEmersonSpack,
  },
  {
    name: 'Pe. Antônio Roik, OSBM',
    description: 'Participou das primeiras missões em Joinville em julho de 2024, contribuindo para fortalecer a fé e unir a comunidade em momentos de celebração e reflexão.',
    image: PeAntonioRoik,
  },
  {
    name: 'Pe. Marcos Chmilouski, OSBM',
    description: 'Atuou junto com Pe. Antônio nas missões de julho de 2024, promovendo a união entre os fiéis.',
    image: PeMarcosChmilouski,
  },
  {
    name: 'Pe. Sérgio Iwantchuk, OSBM',
    description: 'Atuou como Padre de 2017 a 2020, participando de celebrações e fortalecendo a comunidade ucraniana de Joinville.',
    image: PeSergioIwantchuk,
  },
  {
    name: 'Pe. Gregorio Hunka, OSBM',
    description: 'Atuou como Padre de 2020 a 2024, participando de celebrações e fortalecendo a comunidade ucraniana de Joinville.',
    image: PeGregorioHunka,
  },
  {
    name: 'Pe. Antônio Nazarko, OSBM',
    description: 'Atualmente é o padre responsável pela comunidade, contribuindo para o fortalecimento espiritual e cultural dos fiéis.',
    image: PeAntonioNazarko,
  },
];

function Priests() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">
          Padres que Ajudaram Nossa Comunidade
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
          {priests.map((priest, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-2 flex flex-col h-full">
                <div className="w-full h-48 overflow-hidden flex items-center justify-center">
                  <img
                    src={priest.image}
                    alt={priest.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{priest.name}</h3>
                  <p className="text-gray-600">{priest.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Priests;
