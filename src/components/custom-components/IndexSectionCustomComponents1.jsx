import React from 'react';

const IndexSectionCustomComponents1 = () => {
    return (
        <header className="w-full bg-[#FAF7F5] border-b border-stone-200/80 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
  <div className="bg-[#9B5B7E] text-white py-2 px-4 text-xs font-light tracking-wider">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
      <div className="flex items-center space-x-6">
        <span className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>+420 494 541 134</span>
        </span>
        <span className="hidden md:inline text-white/50">|</span>
        <span className="hidden md:inline">+420 603 318 922</span>
        <span className="hidden md:inline text-white/50">|</span>
        <span className="hidden md:inline">+420 722 275 328</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="mailto:info@kvetinyanna.cz" className="hover:text-rose-100 transition-colors flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>info@kvetinyanna.cz</span>
        </a>
      </div>
    </div>
  </div>
  <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
    <a href="#" className="group flex flex-col">
      <span className="font-heading text-2xl md:text-3xl tracking-wide uppercase text-stone-900 leading-none group-hover:text-[#9B5B7E] transition-colors">Květiny <span className="text-[#9B5B7E] italic font-normal lowercase">Anna</span></span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-medium">Design Floristika</span>
    </a>
    <div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wider uppercase text-stone-700">
      <a href="#o-nas" className="hover:text-[#9B5B7E] transition-colors py-1">O nás</a>
      <a href="#sluzby" className="hover:text-[#9B5B7E] transition-colors py-1">Služby</a>
      <a href="#eshop" className="hover:text-[#9B5B7E] transition-colors py-1 text-[#9B5B7E] font-semibold">E-shop</a>
      <a href="#dorucovani" className="hover:text-[#9B5B7E] transition-colors py-1">Doručování květin</a>
      <a href="#fotogalerie" className="hover:text-[#9B5B7E] transition-colors py-1">Fotogalerie</a>
      <a href="#blog" className="hover:text-[#9B5B7E] transition-colors py-1">Blog</a>
      <a href="#kontakt" className="hover:text-[#9B5B7E] transition-colors py-1">Kontakt</a>
    </div>
    <div className="flex items-center gap-3">
      <a href="#eshop" className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#9B5B7E] text-white hover:bg-[#854b6c] transition-all shadow-sm hover:shadow">
        <span>Objednat online</span>
      </a>
      <button className="lg:hidden p-2 text-stone-700 hover:text-[#9B5B7E]" aria-label="Otevřít menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
</header>


    );
};

export default IndexSectionCustomComponents1;