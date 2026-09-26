import React from 'react';
import { Calendar } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface BookingCTAProps {
  onOpenBooking: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-14 sm:py-18 bg-[#18181B] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3 text-balance">
          Выберите удобное время и запишитесь на занятие
        </h2>

        <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto mb-3 font-normal">
          Индивидуальный подход, внимание к каждому движению и бережная забота о здоровье.
        </p>

        {/* Studio motto from uploaded poster */}
        <p className="text-xs uppercase tracking-widest text-amber-300/90 font-medium mb-7">
          Двигайтесь. Дышите. Живите полноценно. Ваше здоровье — в ваших руках.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-xs transition-all active:scale-98 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            <Calendar className="w-4 h-4 text-neutral-950" />
            <span>Записаться на занятие</span>
          </button>

          <a
            href="https://wa.me/996558910061"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm px-6 py-3.5 rounded-xl border border-neutral-700/80 transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp (+996 558 910 061)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
