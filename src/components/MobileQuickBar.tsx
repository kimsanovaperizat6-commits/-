import React from 'react';
import { Calendar } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-3 left-3 right-16 z-30">
      <div className="bg-[#1C1E21]/95 text-white backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-neutral-700/60 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-bold text-white truncate">
            Арабика
          </p>
          <p className="text-[10px] text-neutral-400 truncate">
            Ахунбаева 105 · ЛФК
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://wa.me/996558910061?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%B2%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8E%20%D0%90%D1%80%D0%B0%D0%B1%D0%B8%D0%BA%D0%B0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors shadow-xs"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs px-3.5 py-2 rounded-xl transition-all active:scale-95 shadow-xs cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-neutral-950" />
            <span>Записаться</span>
          </button>
        </div>
      </div>
    </div>
  );
};
