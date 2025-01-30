import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Importação da imagem do ícone
import IconeIgreja from '/src/imagens/icone/Captura de tela de 2025-01-16 08-09-54.png';

const links = [
  { name: 'Início', href: '/' },
  { name: 'História', href: '/history' },
  { name: 'São Nicolau', href: '/SaoNicolau' },
  { name: 'Fundadores', href: '/fundadores' },
  { name: 'Padres', href: '/padres' },
  { name: 'Comunidades', href: '/comunidades' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-blue-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="font-serif text-white flex items-center gap-2">
              {/* Foto como ícone */}
              <img
                src={IconeIgreja}
                alt="Logo da Igreja"
                className="w-10 h-10 rounded-full"
              />
              {/* Título completo em telas grandes e reduzido em telas pequenas */}
              <span className="hidden sm:inline lg:hidden">Igreja São Nicolau</span>
              <span className="hidden lg:inline">Igreja Católica Ucraniano São Nicolau do Rito Bizantino</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-white">
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="hover:text-yellow-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-blue-900">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="block px-3 py-2 text-white hover:bg-blue-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
