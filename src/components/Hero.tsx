import React from 'react';
import { ArabikaLogo } from './ArabikaLogo.tsx';
import { MapPin, ArrowRight, Heart } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* 
        Visual Background:
        Using the uploaded studio photo showing the real Arabika therapeutic exercise class
        with an elegant subtle overlay to preserve 100% text readability while keeping the photo recognizable
      */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/5889738414955892375.jpg"
          alt="Занятия лечебной физкультурой в студии Арабика"
          className="w-full h-full object-cover object-center scale-102 filter blur-[0.4px] opacity-25"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src && !target.src.includes('studio-bg.jpg')) {
              target.src = '/studio-bg.jpg';
            }
          }}
        />
        {/* Soft gradient wash for high-contrast crisp typography */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/95 via-[#FAF7F2]/88 to-[#FAF7F2] backdrop-blur-[1px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Original Arabika Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="p-2 sm:p-2.5 rounded-full bg-white shadow-xs border border-amber-100/80 transition-transform duration-300 hover:scale-102">
            <ArabikaLogo size="lg" />
          </div>
          <span className="mt-3 text-[11px] font-semibold tracking-widest uppercase text-neutral-500">
            Студия реабилитации & оздоровления
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1E21] tracking-tight leading-[1.15] mb-3.5 text-balance">
          Движение — путь к здоровью
        </h1>

        {/* Short Supporting Text */}
        <p className="text-base sm:text-lg text-neutral-700 max-w-xl mx-auto font-medium leading-relaxed mb-4 text-balance">
          ЛФК, суставная гимнастика, восстановление и забота о теле
        </p>

        {/* Inspiring motto & age focus from the studio poster */}
        <div className="mb-8 flex flex-col items-center gap-2">
          <p className="text-xs sm:text-sm text-neutral-600 italic font-serif-elegant font-medium max-w-md mx-auto">
            «Давайте будем заботиться о себе, пока тело не заставило нас остановиться»
          </p>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-900 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200/60">
            <Heart className="w-3 h-3 text-amber-700 shrink-0" />
            <span>Адаптированные группы для женщин 50+, 60+, 70+ и всех возрастов</span>
          </div>
        </div>

        {/* Clear Action & Address */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-w-[190px] inline-flex items-center justify-center gap-2 bg-[#1C1E21] hover:bg-neutral-800 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-xs transition-all duration-200 active:scale-98 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <span>Записаться</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>

          <a
            href="#schedule"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-neutral-800 font-medium text-sm sm:text-base px-6 py-3.5 rounded-xl border border-neutral-200 transition-all duration-200 cursor-pointer shadow-2xs"
          >
            <span>Посмотреть расписание</span>
          </a>
        </div>

        {/* Address with Bishkek Medical Academy Landmark */}
        <div className="mt-6">
          <a
            href="#contacts"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Ахунбаева 105, Бишкек (р-н Медакадемии)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
