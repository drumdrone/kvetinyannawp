import React from 'react';

const IndexSectionCustomComponents4 = () => {
    return (
        <section id="sluzby" className="py-20 md:py-28 bg-[#F4ECEE]/60 border-y border-stone-200/70">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-xs font-semibold tracking-[0.25em] text-[#9B5B7E] uppercase">Co nabízíme</span>
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-stone-900 mt-2 font-normal">
        <span>Naše floristické služby</span>
      </h2>
      <div className="w-16 h-0.5 bg-[#9B5B7E] mx-auto mt-4" />
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=700&q=80" alt="Jarní a velikonoční floristika" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <span className="absolute bottom-3 left-4 text-white text-xs uppercase tracking-wider font-semibold">Sezónní</span>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-xl text-stone-900 mb-2 font-medium">
              <span>Jarní a velikonoční floristika</span>
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              <span>Svěží probuzení do nového ročního období, jarní proutí, cibuloviny a pestré aranžmá.</span>
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center text-xs font-semibold uppercase tracking-wider text-[#9B5B7E]">
            <span>Více informací</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80" alt="Hrnkové květiny" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <span className="absolute bottom-3 left-4 text-white text-xs uppercase tracking-wider font-semibold">Pokojové</span>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-xl text-stone-900 mb-2 font-medium">
              <span>Hrnkové květiny &amp; keramika</span>
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              <span>Široký sortiment pokojových rostlin, designových květináčů, hnojiv a substrátů.</span>
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center text-xs font-semibold uppercase tracking-wider text-[#9B5B7E]">
            <span>Více informací</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80" alt="Řezané květiny" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <span className="absolute bottom-3 left-4 text-white text-xs uppercase tracking-wider font-semibold">Čerstvé</span>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-xl text-stone-900 mb-2 font-medium">
              <span>Řezané květiny kytic</span>
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              <span>Více jak 50 druhů denně čerstvých řezaných květin z prověřených holandských a tuzemských farem.</span>
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center text-xs font-semibold uppercase tracking-wider text-[#9B5B7E]">
            <span>Více informací</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80" alt="Svatební floristika" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <span className="absolute bottom-3 left-4 text-white text-xs uppercase tracking-wider font-semibold">Svatby</span>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-xl text-stone-900 mb-2 font-medium">
              <span>Svatební floristika</span>
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              <span>Kytice pro nevěstu, korsáže, výzdoba stolů, aut a kompletní svatební servis na klíč.</span>
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center text-xs font-semibold uppercase tracking-wider text-[#9B5B7E]">
            <span>Více informací</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80" alt="Vánoční floristika" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <span className="absolute bottom-3 left-4 text-white text-xs uppercase tracking-wider font-semibold">Advent</span>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-xl text-stone-900 mb-2 font-medium">
              <span>Vánoční a adventní vazby</span>
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              <span>Adventní věnce, svícny, výzdoba domovů i slavnostních tabulí v kouzelném vánočním duchu.</span>
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center text-xs font-semibold uppercase tracking-wider text-[#9B5B7E]">
            <span>Více informací</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80" alt="Dekorace interiérů" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <span className="absolute bottom-3 left-4 text-white text-xs uppercase tracking-wider font-semibold">Firemní</span>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-xl text-stone-900 mb-2 font-medium">
              <span>Interiéry a firmy</span>
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              <span>Pravidelný květinový servis do recepcí, restaurací, hotelů a komerčních prostorů.</span>
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center text-xs font-semibold uppercase tracking-wider text-[#9B5B7E]">
            <span>Více informací</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=700&q=80" alt="Dušičková vazba" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <span className="absolute bottom-3 left-4 text-white text-xs uppercase tracking-wider font-semibold">Dušičky</span>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-xl text-stone-900 mb-2 font-medium">
              <span>Dušičková vazba</span>
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              <span>Přírodní i umělé dušičkové věnce, mísy a aranžmá k uctění památky vašich blízkých.</span>
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center text-xs font-semibold uppercase tracking-wider text-[#9B5B7E]">
            <span>Více informací</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1596438459194-f275f413d6ff?auto=format&fit=crop&w=700&q=80" alt="Smuteční floristika" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <span className="absolute bottom-3 left-4 text-white text-xs uppercase tracking-wider font-semibold">Smuteční</span>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-xl text-stone-900 mb-2 font-medium">
              <span>Smuteční floristika</span>
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              <span>Důstojné smuteční kytice, věnce se stuhou a aranžmá na rakev s individuálním přístupem.</span>
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center text-xs font-semibold uppercase tracking-wider text-[#9B5B7E]">
            <span>Více informací</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents4;