import React from 'react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Importação das imagens
import IgrejaHero from '/src/imagens/comunnitys/Igreja.jpg';
import VisitaCanonica1 from '/src/imagens/visita_canonica/Captura de tela de 2025-01-14 09-32-06.png';
import VisitaCanonica2 from '/src/imagens/visita_canonica/Captura de tela de 2025-01-14 09-33-02.png';
import VisitaCanonica27dejulho from '/src/imagens/visita_canonica/27 de julho/27 de julho.png';
import VisitaCanonica27dejulho2 from '/src/imagens/visita_canonica/27 de julho/27 de julho 2.png';
import VisitaCanonica27dejulho3 from '/src/imagens/visita_canonica/27 de julho/27 de julho 3.png';
import VisitaCanonica201701 from '/src/imagens/visita_canonica/2017/2017 1.JPG';
import VisitaCanonica201702 from '/src/imagens/visita_canonica/2017/2017 2.JPG';
import VisitaCanonica201703 from '/src/imagens/visita_canonica/2017/2017 3.JPG';
import VisitaCanonica201705 from '/src/imagens/visita_canonica/2017/2017 5.JPG';
import Missao1 from '/src/imagens/missao/WhatsApp Image 2025-01-14 at 10.25.01.jpeg';
import Missao2 from '/src/imagens/missao/WhatsApp Image 2025-01-14 at 10.25.45.jpeg';
import Missao3 from '/src/imagens/missao/WhatsApp Image 2025-01-14 at 10.26.09.jpeg';
import Inauguracao1 from '/src/imagens/inauguracao/2.1.jpeg';
import Inauguracao2 from '/src/imagens/inauguracao/2.2.jpg';
import Inauguracao3 from '/src/imagens/inauguracao/4.3.jpeg';
import Inauguracao4 from '/src/imagens/inauguracao/99245dd4-7e0c-4b88-8e96-27b19975764e.jpg';
import Inauguracao5 from '/src/imagens/inauguracao/9.3.jpeg';
import Inauguracao6 from '/src/imagens/inauguracao/IMG_8842.JPEG';
import Inauguracao7 from '/src/imagens/inauguracao/IMG_9170.JPEG';
import Inauguracao8 from '/src/imagens/inauguracao/IMG_9297.JPEG';
import Inauguracao9 from '/src/imagens/inauguracao/WhatsApp Image 2025-01-28 at 07.16.27.jpeg';
import Padres from '/src/imagens/inauguracao/9.1 (1).jpeg';

function History() {
  return (
    <div id="topo" className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={IgrejaHero}
            alt="Primeira Divina Liturgia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-serif mb-6">Nossa História</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Uma jornada de fé, perseverança e união na Comunidade Católica Ucraniana São Nicolau de Joinville.
          </p>
        </div>
      </section>

      {/* História da Comunidade */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-serif text-center mb-6">História da Comunidade Católica Ucraniana de Joinville</h1>

          {/* Parágrafo 1 */}
          <div className="text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              A comunidade católica ucraniana de Joinville teve seu início com o contato de Sra. Sofia Maistrovicz Jarenko e Pe. Dionísio Zaluski, o qual ele pediu para que fizesse um levantamento das famílias ucranianas de Joinville para ver a viabilidade de formar uma comunidade. E em 22 de maio de 2005, quando o Pe. Geraldo Emílio Daciuk, OSBM, celebrou a primeira missa no rito bizantino-ucraniano na cidade. Na época, as celebrações eram realizadas em igrejas latinas, como a Paróquia Santo Antônio e a Igreja Nossa Senhora Aparecida, devido à falta de um espaço próprio para a comunidade ucraniana. O trabalho pastoral foi iniciado a pedido do Pe. Provincial Meron Mazur, OSBM, e com a bênção do Eparca Dom Efraim B. Krevei, OSBM, que viabilizou a presença de padres para atender às famílias ucranianas que haviam migrado de várias cidades do Paraná e Santa Catarina.
            </p>
          </div>

          {/* Parágrafo 2 */}
          <div className="text-left mt-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde o início, a comunidade contou com o apoio fundamental do Sr. Aertes Bobato e da Sra. Cecília Huida, que ofereceram hospedagem para os padres e espaço para as celebrações em Joinville. A dedicação desses fundadores foi crucial para o crescimento inicial da comunidade.
            </p>
          </div>

          {/* Parágrafo 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <Swiper
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              className="w-full rounded-lg shadow-lg"
            >
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={VisitaCanonica1}
                  alt="Visita de Dom Volodemer"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={VisitaCanonica2}
                  alt="Visita de Dom Volodemer"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
            </Swiper>
            <div className="text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Em 29 de julho de 2007, a comunidade recebeu a primeira visita canônica do Arcebispo Metropolita Dom Volodemer Koubetch, OSBM, que destacou a necessidade de um terreno para a construção de uma igreja própria. Durante essa visita, Dom Volodemer celebrou uma missa, reuniu-se com a comunidade e reforçou a importância de preservar a identidade religiosa e cultural ucraniana. A falta de um espaço próprio era um desafio constante, pois as famílias moravam distantes das igrejas onde as celebrações eram realizadas, e muitos paroquianos enfrentavam dificuldades para participar devido aos compromissos de trabalho.
              </p>
            </div>
          </div>

          {/* Parágrafo 4 */}
          <div className="text-left mt-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ao longo dos anos, a comunidade organizou diversos eventos para fortalecer a fé e a cultura ucraniana. Em janeiro de 2011, foi iniciada uma oficina de pêssankas (ovos pintados tradicionalmente na Páscoa ucraniana), que se tornou uma atividade anual e ajudou a manter viva a tradição cultural entre os fiéis. Além disso, a comunidade participou de romarias e encontros com outras paróquias ucranianas, como as de Mafra, São Bento do Sul e Guaramirim, fortalecendo os laços entre os fiéis.
            </p>
          </div>
            {/* Parágrafo 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <Swiper
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              className="w-full rounded-lg shadow-lg"
            >
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={VisitaCanonica27dejulho}
                  alt="VisitaCanonica27dejulho"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={VisitaCanonica27dejulho2}
                  alt="VisitaCanonica27dejulho2"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={VisitaCanonica27dejulho3}
                  alt="VisitaCanonica27dejulho3"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
            </Swiper>
            <p className="text-lg text-gray-700 leading-relaxed">
            Em 26 de julho de 2014, Dom Volodemer Koubetch visitou a comunidade ucraniana de Joinville. Ele ficou hospedado na casa do Sr. Celso Jarenko e sua esposa Sofia Maistrovicz. No dia 27 de julho, ele participou de uma celebração e foi recepcionado com um almoço na casa do Sr. Mário Korinhoski. Durante essa visita, foram discutidas questões relacionadas à aquisição de um terreno para a construção de uma igreja.</p>
          </div>

             {/* Parágrafo 7 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <div className="text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
               Nos dias 25 e 26 de novembro de 2017, a Comunidade Católica Ucraniana São Nicolau, em Joinville-SC, recebeu a Visita Canônica do Arcebispo Metropolita Dom Volodemer Koubetch, OSBM. A programação incluiu reuniões com o Conselho Administrativo Paroquial, onde foram discutidos desafios como a distância das famílias ao local das celebrações, dificuldades financeiras e a necessidade urgente de um terreno para a construção da igreja própria.  
               No domingo, Dom Volodemer celebrou a Divina Liturgia, sendo recebido com o tradicional pão e sal. A celebração contou com a concelebração do Pe. Inácio Benedito Giacomelli, pároco da comunidade latina, e do Pe. Sérgio Ivantchuk, OSBM. Em sua homilia, o Metropolita destacou que, apesar dos desafios enfrentados pela comunidade, "o Reino de Deus já está presente no meio de nós, mas ainda não em plenitude". Ele reforçou a importância da união para preservar a identidade religiosa e cultural, contribuindo para o fortalecimento da comunidade ucraniana em Joinville.</p>
            </div>
            <Swiper
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              className="w-full rounded-lg shadow-lg"
            >
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={VisitaCanonica201701}
                  alt="VisitaCanonica201701"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={VisitaCanonica201702}
                  alt="VisitaCanonica201702"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={VisitaCanonica201703}
                  alt="VisitaCanonica201701"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={VisitaCanonica201705}
                  alt="VisitaCanonica201701"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          
          {/* Parágrafo 6 */}
          <div className="text-left mt-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              A aquisição de um terreno para a construção da igreja própria foi uma luta constante. Em 2019, após anos de esforços e com o apoio decisivo da Diocese de Joinville (Igreja Católica Latina), a comunidade finalmente conseguiu adquirir um imóvel para servir como sede própria. A primeira Divina Liturgia na nova sede foi celebrada pelo Pe. Jaime Fernando Valus, OSBM, em 13 de julho de 2019, marcando um momento histórico e de grande júbilo para a comunidade. Esse dia concretizou um sonho que havia sido iniciado pelo Pe. Geraldo Daciuk, OSBM, e que contou com o empenho de toda a comunidade ao longo dos anos.
            </p>
          </div>

          {/* Parágrafo 7 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <div className="text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                A nova sede não apenas proporcionou um local adequado para as celebrações, mas também se tornou um espaço para a promoção da cultura ucraniana. A comunidade recebeu doações importantes, como bancos e altares da Comunidade de Iracema, que foram essenciais para a estruturação do espaço. Além disso, as Irmãs Servas de Maria Imaculada de Mafra auxiliaram nas celebrações e na organização de eventos, reforçando a presença da espiritualidade ucraniana na região.
              </p>
            </div>
            <Swiper
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              className="w-full rounded-lg shadow-lg"
            >
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={IgrejaHero}
                  alt="Nova Sede"
                  className="w-[544px] h-[244px] object-cover md:w-[544px] md:h-[285px]"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Parágrafo 8 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <Swiper
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              className="w-full rounded-lg shadow-lg"
            >
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Missao1}
                  alt="Missões"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Missao2}
                  alt="Missões"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Missao3}
                  alt="Missões"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
            </Swiper>
            <div className="text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Em 2024, a comunidade realizou suas primeiras missões, com a presença dos padres Pe. Antonio Roik, OSBM e Pe. Marcos Chmilouski, OSBM. As missões ocorreram de 21 a 26 de julho de 2024 e incluíram celebrações, palestras e momentos de confissão, fortalecendo a fé e a união dos paroquianos. Essas missões foram um marco importante para a comunidade, que continuou a crescer tanto espiritualmente quanto em número de fiéis.
              </p>
            </div>
          </div>

          {/* Parágrafo 9 */}
          <div className="text-left mt-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hoje, a Comunidade São Nicolau de Joinville é um testemunho vivo da perseverança e da fé de seus membros. Com uma sede própria, a comunidade continua a celebrar sua liturgia no rito bizantino-ucraniano, preservando suas tradições e contribuindo para o enriquecimento cultural e espiritual da cidade de Joinville.
            </p>
          </div>

          {/* Inauguração da Nova Igreja */}
          <h2 className="text-4xl font-serif text-center mt-16 mb-6">Inauguração e Bênção da Nova Igreja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <Swiper
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              className="w-full rounded-lg shadow-lg"
            >
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Inauguracao1}
                  alt="Inauguração"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Inauguracao2}
                  alt="Inauguração"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Inauguracao3}
                  alt="Inauguração"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Inauguracao4}
                  alt="Inauguração"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Inauguracao5}
                  alt="Inauguração"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Inauguracao6}
                  alt="Inauguração"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Inauguracao7}
                  alt="Inauguração"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Inauguracao8}
                  alt="Inauguração"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={Inauguracao9}
                  alt="Inauguração"
                  className="w-[544px] h-[244px] object-cover md:w-[380px] md:h-[285px]"
                />
              </SwiperSlide>
            </Swiper>
            <div className="text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                No dia 1º de dezembro de 2024, foi inaugurada oficialmente a nova igreja dedicada a São Nicolau, localizada na Rua Walmor Harger, 257, no Bairro Costa e Silva, em Joinville. A solenidade foi presidida por Sua Excelência Dom Volodemer Koubetch, Arcebispo Metropolita, e concelebrada por Dom Francisco Carlos Bach, Arcebispo Metropolitano de Joinville, além de outros padres e autoridades eclesiásticas. A celebração contou com a presença de fiéis de várias localidades, que vieram prestigiar a inauguração e bênção da nova igreja bizantino-ucraniana.
              </p>
            </div>
          </div>

          {/* Seção de Padres */}
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-serif text-center mt-16 mb-6">Padres que Participaram da Celebração</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A celebração de inauguração da nova igreja foi concelebrada pelos seguintes padres:
                  </p>
                  <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                    <li>Pe. Antonio Zubek, OSBM – Superior Provincial dos Padres Basilianos</li>
                    <li>Pe. Jaime Fernando Valus, OSBM – Conselheiro Provincial e Vigário Paroquial em Prudentópolis</li>
                    <li>Pe. João Karpovicz Sobrinho, OSBM – Pároco de Mafra</li>
                    <li>Pe. Antonio Nazarko, OSBM – Vigário Paroquial da Paróquia de Mafra</li>
                    <li>Pe. Arsenio Krefer, OSBM – Pároco de Irati e Ecônomo Provincial</li>
                    <li>Pe. Emerson Sérgio Spack, OSBM – Pároco de Iracema</li>
                    <li>Pe. Sérgio Iwantchuk, OSBM – Vigário Paroquial de Pitanga</li>
                    <li>Pe. Fernando Maico Baraúna – Ecônomo da Diocese de Joinville</li>
                  </ul>
                </div>
                <Swiper
                  pagination={{ clickable: true }}
                  navigation={true}
                  modules={[Pagination, Navigation, Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  className="w-full rounded-lg shadow-lg"
                >
                  <SwiperSlide className="flex items-center justify-center">
                    <img
                      src={Padres}
                      alt="Padres"
                      className=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Botão "Voltar ao Início" */}
              <div className="text-center mt-12">
                <a
                  href="/"
                  className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Voltar ao Início da Pagina
                </a>
              </div>
            </div>
          </section>

          <ScrollToTop />
        </div>
      </section>
    </div>
  );
}

export default History;
