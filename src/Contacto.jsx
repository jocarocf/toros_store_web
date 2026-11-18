import React from 'react';

export default function Contacto() {
  const WHATSAPP_NUMBER = "573133528336"; // Número oficial de Toros Store

  const abrirWhatsApp = () => {
    const mensaje = "Hola Toros Store, quiero más información sobre sus productos y servicios.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-black border-t border-stone-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
          Hablemos de tu Proyecto
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-2">
          ¿Listo para cotizar tus dotaciones o ropa deportiva?
        </h2>
        <p className="text-stone-300 mt-3 max-w-xl mx-auto">
          Escríbenos directamente a nuestro WhatsApp oficial. Te atendemos de inmediato para revisar diseños, tallas y despachos desde Cali a todo el país.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button 
            onClick={abrirWhatsApp}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full transition shadow-md flex items-center justify-center gap-3 text-base cursor-pointer"
          >
            <span>💬 Escribir por WhatsApp Directo</span>
          </button>
          
          <a 
            href="https://www.instagram.com/toros_store" 
            target="_blank" 
            rel="noreferrer"
            className="bg-stone-900 hover:bg-stone-800 text-white border border-stone-700 font-bold px-8 py-4 rounded-full transition flex items-center justify-center gap-3 text-base shadow-sm"
          >
            <span>📸 Visitar @toros_store</span>
          </a>
        </div>

        <div className="mt-12 text-xs text-stone-400 space-y-1">
          <p>📍 Ubicados en Cali, Valle del Cauca - Colombia</p>
          <p>💳 Medios de pago aceptados: Nequi, Daviplata, Bancolombia y AV Villas</p>
        </div>
      </div>
    </section>
  );
}