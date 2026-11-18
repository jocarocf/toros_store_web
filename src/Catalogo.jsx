import React, { useState } from 'react';
import { categorias, productosData } from './data/productos';

export default function Catalogo() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  // Filtrar productos según la pestaña seleccionada
  const productosFiltrados = categoriaActiva === 'todos' 
    ? productosData 
    : productosData.filter(p => p.categoria === categoriaActiva);

  return (
    <section id="catalogo" className="w-full py-24 px-6 bg-[#09090b] text-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold uppercase tracking-widest text-xs md:text-sm bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
            Catálogo 2026
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider mt-4 mb-4 text-white">
            Catálogo Destacado
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Soluciones textiles con el respaldo de nuestros procesos especializados en DTF, Vinilo Textil y Plastisol.
          </p>
        </div>

        {/* Cuadrícula de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productosFiltrados.map(prod => (
            <div 
              key={prod.id} 
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:border-purple-500/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-black">
                  <img 
                    src={prod.imagen} 
                    alt={prod.nombre} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <span className="absolute bottom-0 right-4 bg-zinc-950/80 backdrop-blur-md text-purple-300 border border-purple-500/30 text-xs font-bold px-3 py-1 rounded-full">
                    {prod.tecnica}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2">
                    {prod.nombre}
                  </h3>
                  <p className="text-purple-400 font-extrabold text-sm mb-3">
                    {prod.precio}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {prod.descripcion}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/573113818595?text=Hola%20TOROS,%20estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(prod.nombre)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-zinc-800 text-zinc-100 border border-zinc-700 hover:bg-purple-600 hover:border-purple-500 hover:text-white transition-all shadow-md"
                >
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}