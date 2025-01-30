import React from 'react';

// Importação da imagem de São Nicolau
import SaoNicolauImg from '/src/imagens/sao_nicolau/348237779_237197268997227_5334379759951676326_n.jpg';

function SaoNicolau() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Quem foi São Nicolau</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={SaoNicolauImg} // Usando a imagem importada
              alt="Ícone de São Nicolau"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              São Nicolau foi um bispo cristão de Mira, na antiga Lícia, região da atual Turquia. 
              Ele viveu durante o século IV e é conhecido por sua piedade e generosidade, 
              especialmente com os pobres e necessitados.
            </p>
            <p className="text-lg text-gray-700">
              Na tradição ucraniana, São Nicolau é especialmente venerado como protetor das 
              crianças, dos marinheiros e dos comerciantes. Sua festa é celebrada em 6 de dezembro 
              no calendário gregoriano e em 19 de dezembro no calendário juliano.
            </p>
            <p className="text-lg text-gray-700">
              Sua vida exemplar de caridade e dedicação aos necessitados continua inspirando 
              nossa comunidade até hoje, sendo um modelo de fé e amor ao próximo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SaoNicolau;
