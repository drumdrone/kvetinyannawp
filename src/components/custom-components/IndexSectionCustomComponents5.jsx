import React from 'react';

const IndexSectionCustomComponents5 = () => {
    return (
        <section id="blog" className="py-20 md:py-28 bg-[#FAF7F5]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-xs font-semibold tracking-[0.25em] text-[#9B5B7E] uppercase">Inspirace a novinky</span>
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-stone-900 mt-2 font-normal">
        <span>Z našeho floristického blogu</span>
      </h2>
      <div className="w-16 h-0.5 bg-[#9B5B7E] mx-auto mt-4" />
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <article className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 hover:border-[#9B5B7E]/50 transition-all flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-400 mb-4 pb-4 border-b border-stone-100">
            <span className="text-[#9B5B7E] font-semibold uppercase tracking-wider">Inspirace</span>
            <span>20. 3. 2026</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#9B5B7E]/10 text-[#9B5B7E] font-heading text-2xl flex items-center justify-center mb-4">
            <span>A</span>
          </div>
          <h3 className="font-heading text-2xl text-stone-900 mb-3 hover:text-[#9B5B7E] transition-colors">
            <a href="#">
              <span>Jarní a velikonoční floristika</span>
            </a>
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            <span>Jaro je pro nás vždy oslavou nového života. Aranže na toto téma jsou svěží, dýchají energií a pestrostí probouzející se přírody.</span>
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-stone-100">
          <a href="#" className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#9B5B7E] hover:text-[#854b6c]">
            <span>Číst celý článek</span>
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </article>
      <article className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 hover:border-[#9B5B7E]/50 transition-all flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-400 mb-4 pb-4 border-b border-stone-100">
            <span className="text-[#9B5B7E] font-semibold uppercase tracking-wider">Péče o květy</span>
            <span>20. 3. 2026</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#9B5B7E]/10 text-[#9B5B7E] font-heading text-2xl flex items-center justify-center mb-4">
            <span>A</span>
          </div>
          <h3 className="font-heading text-2xl text-stone-900 mb-3 hover:text-[#9B5B7E] transition-colors">
            <a href="#">
              <span>Řezané květiny a péče o ně</span>
            </a>
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            <span>V naší prodejně naleznete více jak 50 druhů květin. Denně je dováží čerstvé zástupci 10 prověřených pěstitelských farem.</span>
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-stone-100">
          <a href="#" className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#9B5B7E] hover:text-[#854b6c]">
            <span>Číst celý článek</span>
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </article>
      <article className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 hover:border-[#9B5B7E]/50 transition-all flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-400 mb-4 pb-4 border-b border-stone-100">
            <span className="text-[#9B5B7E] font-semibold uppercase tracking-wider">Tradice</span>
            <span>26. 2. 2026</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#9B5B7E]/10 text-[#9B5B7E] font-heading text-2xl flex items-center justify-center mb-4">
            <span>C</span>
          </div>
          <h3 className="font-heading text-2xl text-stone-900 mb-3 hover:text-[#9B5B7E] transition-colors">
            <a href="#">
              <span>Smuteční floristika s citem</span>
            </a>
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            <span>Smuteční obřad je důstojným rozloučením s milovanou osobou. Pomůžeme vám přizpůsobit vazbu k pohřbům přesně na míru.</span>
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-stone-100">
          <a href="#" className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#9B5B7E] hover:text-[#854b6c]">
            <span>Číst celý článek</span>
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </article>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents5;