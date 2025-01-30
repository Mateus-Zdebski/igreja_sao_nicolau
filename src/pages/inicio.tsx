import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react';
import Header from '../components/Header';
import SaoNicolau from '../components/SaoNicolau';
import Founders from '../components/Founders';
import Priests from '../components/Priests';
import Communities from '../components/Communities';
import ScrollToTop from '../components/ScrollToTop';
import { Link } from 'react-router-dom';

// Importação da imagem da Igreja
import IgrejaHero from '/src/imagens/comunnitys/Igreja.jpg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={IgrejaHero} // Usando a imagem importada
            alt="Igreja Ucraniana São Nicolau"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-serif mb-6">
            Seja bem-vindo à Comunidade Católica Ucraniana São Nicolau de Joinville
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Uma comunidade unida pela fé, tradição e perseverança
          </p>
          {/* Botão para a seção de História */}
          <Link
            to="/history"
            className="inline-block px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
          >
            Conheça Nossa História
          </Link>
        </div>
      </section>

      {/* São Nicolau Section */}
      <SaoNicolau />

      {/* Founders Section */}
      <Founders />

      {/* Priests Section */}
      <Priests />

      {/* Communities Section */}
      <Communities />

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-16">Onde Estamos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0421832711986!2d-48.8852015!3d-26.2762254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dea52614e70df3%3A0x80cafbc10361bf67!2sIgreja%20Greco-Cat%C3%B3lica%20Ucraniana%20S%C3%A3o%20Nicolau!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Igreja"
                className="w-full"
              ></iframe>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif mb-4">Endereço</h3>
                <p className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  R. Walmor Harger, 257 - Costa e Silva, Joinville - SC
                </p>

                {/* Horários de Missa */}
                <div className="mb-4">
                  <h3 className="text-2xl font-serif mb-4">Horários de Missa</h3>
                  <p className="text-gray-600">
                    <strong>Segundo Sábado do Mês:</strong> 19h
                  </p>
                  <p className="text-gray-600">
                    <strong>Quarto Domingo do Mês:</strong> 9h
                  </p>
                </div>

                {/* Contato */}
                <div className="space-y-4">
                  <p className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-5 h-5" />
                    comunidadesaonicolau@gmail.com
                  </p>
                </div>

                {/* Botão "Como Chegar" */}
                <a
                  href="https://www.google.com.br/maps/place/Igreja+Greco-Cat%C3%B3lica+Ucraniana+S%C3%A3o+Nicolau/@-26.2762254,-48.8852015,17z/data=!3m1!4b1!4m6!3m5!1s0x94dea52614e70df3:0x80cafbc10361bf67!8m2!3d-26.2762302!4d-48.8826212!16s%2Fg%2F11fpj7gp90?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Como Chegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Links Rápidos */}
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/history"
                    className="hover:text-yellow-300"
                  >
                    Nossa História
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  comunidadesaonicolau@gmail.com
                </li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://pt-br.facebook.com/comunidadesaonicolaujoinville/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/igrejasaonicolaujoinville?igsh=dndiNnQ0OWxza3U5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Direitos Reservados */}
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p>
              Comunidade Católica Ucraniana São Nicolau de Joinville - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;
