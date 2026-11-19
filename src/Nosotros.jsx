import React from 'react';
import torosLogo from './assets/toros5.jpeg';

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-20 bg-back border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">
            Tradición y Experiencia
          </span>
          <h2 className="text-white-900 font-extrabold mt-2">
            45 años vistiendo la identidad de familias, equipos y empresas
          </h2>
          <p className="text-stone-600 mt-4 leading-relaxed">
            En <strong>Toros Store</strong> unimos lo mejor de dos mundos: un taller familiar con más de cuatro décadas de experiencia perfeccionando técnicas de estampado (Plastisol, Vinilo y DTF), y el acceso directo a un inventario de ropa deportiva que se actualiza a diario en Cali.
          </p>
          <p className="text-stone-600 mt-3 leading-relaxed">
            Nuestro compromiso es ofrecerte soluciones textiles ágiles, combinando calidad prémium en cada prenda con la confianza y el respaldo que solo un negocio con historia puede garantizar.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-stone-100">
            <div>
              {/* Cambia text-stone-900 por el color que prefieras, por ejemplo text-blue-600 */}
                <p className="text-3xl font-bold text-white-600">45+</p>
                <p className="text-xs text-stone-500 mt-1 uppercase font-semibold">Años de Taller Familiar</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-white-600">100%</p>
                <p className="text-xs text-stone-500 mt-1 uppercase font-semibold">Hecho en Cali, Colombia</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-stone-100 shadow-lg">
            <img 
              src={torosLogo}
              alt="Taller de estampados Toros Store" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}