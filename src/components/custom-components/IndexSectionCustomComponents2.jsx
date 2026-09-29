import React from 'react';

const IndexSectionCustomComponents2 = () => {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#FAF7F5] via-[#F4ECEE] to-[#FAF7F5]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#9B5B7E]/10 border border-[#9B5B7E]/20 text-[#9B5B7E] text-xs uppercase tracking-widest font-medium">
          <span className="w-2 h-2 rounded-full bg-[#9B5B7E] animate-pulse" />
          <span>Floristické studio s tradicí od roku 1990</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.15] font-normal">
          <span>Květinové umění s láskou k detailu a tradici</span>
        </h1>
        <p className="text-stone-600 text-base sm:text-lg max-w-xl font-light leading-relaxed">
          <span>Vytváříme originální vazby, svatební aranžmá, sezónní dekorace a doručujeme čerstvé květiny přímo k vašim dveřím v nejvyšší kvalitě.</span>
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a href="#eshop" className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#9B5B7E] text-white hover:bg-[#854b6c] transition-all shadow-md hover:shadow-lg">
            <span>Prohlédnout e-shop</span>
          </a>
          <a href="#sluzby" className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white border border-stone-300 text-stone-800 hover:border-[#9B5B7E] hover:text-[#9B5B7E] transition-all">
            <span>Naše služby</span>
          </a>
        </div>
        <div className="pt-6 grid grid-cols-3 gap-6 border-t border-stone-200/80">
          <div>
            <p className="font-heading text-3xl text-[#9B5B7E]">35+</p>
            <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Let zkušeností</p>
          </div>
          <div>
            <p className="font-heading text-3xl text-[#9B5B7E]">50+</p>
            <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Druhů čerstvých květin</p>
          </div>
          <div>
            <p className="font-heading text-3xl text-[#9B5B7E]">100%</p>
            <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Osobní přístup</p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 relative">
        <div className="relative mx-auto max-w-md lg:max-w-none">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img src="https://images.unsplash.com/photo-1587471577460-bdb4891711ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyMHx8Zmxvd2Vyc3xlbnwwfHx8fDE3ODg0MjU2NjZ8MA&ixlib=rb-4.1.0&q=85&w=1920" alt="Čerstvé růžové a jarní květy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-stone-100 max-w-[240px] hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#9B5B7E]/10 flex items-center justify-center text-[#9B5B7E]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">Denně čerstvé</h4>
                <p className="text-[11px] text-stone-500">Dovoz od 10 prověřených pěstitelů</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents2;