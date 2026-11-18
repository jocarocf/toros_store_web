import React from 'react';
import torosLogo from './assets/toros.png';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 bg-[#09090b] text-zinc-100 text-center overflow-hidden">
      
      {/* Halo de luz morado difuminado de fondo (Efecto glow) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Logo central con un sutil borde brillante */}
        <div className="mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.25)] bg-black flex items-center justify-center">
          <img
            src={torosLogo}
            alt="TOROS"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Insignia */}
        <span className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-semibold tracking-widest uppercase bg-zinc-900/90 text-purple-300 border border-purple-500/30 rounded-full shadow-inner">
            Dotaciones Corporativas & Ropa Deportiva
        </span>

        {/* Descripción */}
        <p className="max-w-xl text-sm md:text-base text-zinc-400 leading-relaxed mb-10">
          Uniformes empresariales, prendas deportivas de alta rotación y estampados profesionales en{' '}
          <span className="text-purple-300 font-semibold">DTF, Vinilo Textil y Plastisol</span>.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href="#catalogo"
            className="px-8 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-lg"
          >
            Ver Catálogo
          </a>
          <a
            href="https://wa.me/573000000000?text=Hola%20TOROS,%20quisiera%20cotizar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider bg-zinc-900 text-zinc-100 border border-zinc-800 hover:bg-zinc-800 transition-all"
          >
            Cotizar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}