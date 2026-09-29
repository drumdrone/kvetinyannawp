import React from 'react';

const IndexSectionCustomComponents6 = () => {
    return (
        <section id="fotogalerie" className="py-20 md:py-28 bg-[#F4ECEE]/40">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
        <span className="text-xs font-semibold tracking-[0.25em] text-[#9B5B7E] uppercase">Naše práce</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-stone-900 mt-2 font-normal">
          <span>Fotogalerie aranžmá</span>
        </h2>
      </div>
      <a href="#eshop" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9B5B7E] hover:text-stone-900 transition-colors">
        <span>Zobrazit všechny práce</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="aspect-square rounded-xl overflow-hidden shadow-sm group relative">
        <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80" alt="Růžové kytice" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-[#9B5B7E]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="p-2 rounded-full bg-white text-[#9B5B7E] shadow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </span>
        </div>
      </div>
      <div className="aspect-square rounded-xl overflow-hidden shadow-sm group relative">
        <img src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80" alt="Podzimní a adventní věnce" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-[#9B5B7E]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="p-2 rounded-full bg-white text-[#9B5B7E] shadow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </span>
        </div>
      </div>
      <div className="aspect-square rounded-xl overflow-hidden shadow-sm group relative">
        <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80" alt="Sváteční dekorace" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-[#9B5B7E]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="p-2 rounded-full bg-white text-[#9B5B7E] shadow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </span>
        </div>
      </div>
      <div className="aspect-square rounded-xl overflow-hidden shadow-sm group relative">
        <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80" alt="Výloha a prodejna" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-[#9B5B7E]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="p-2 rounded-full bg-white text-[#9B5B7E] shadow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents6;