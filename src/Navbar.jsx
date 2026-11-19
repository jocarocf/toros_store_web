import React from 'react';
import torosLogo from './assets/toros.png';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo y Nombre */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-700 bg-black flex items-center justify-center">
            <img src={torosLogo} alt="TOROS" className="w-full h-full object-cover" />
          </div>
          <span className="font-extrabold text-lg tracking-wider text-white uppercase">
            TOROS
          </span>
        </div>

        {/* Menú de enlaces */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-zinc-300 uppercase">
          <a href="#" className="hover:text-white">Inicio</a>
          <a href="#catalogo" className="hover:text-white">Catálogo</a>
          <a href="#nosotros" className="hover:text-white">Nosotros</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </nav>

      </div>
    </header>
  );
}