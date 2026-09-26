import React, { useState, useEffect } from 'react';
import { ArabikaLogo } from './ArabikaLogo.tsx';
import { Phone, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-xs border-b border-[#E7E0D6]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark with subtle original emblem mark */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          aria-label="Арабика - На главную"
        >
          <ArabikaLogo size="sm" />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1E21] group-hover:text-amber-700 transition-colors leading-none">
              Арабика
            </span>
            <span className="text-[11px] font-medium text-neutral-500 tracking-wider uppercase mt-1">
              Бишкек · Ахунбаева 105
            </span>
          </div>
        </a>

        {/* Zone 2: Clean Text Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
          <a
            href="#directions"
            className="hover:text-neutral-950 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all"
          >
            Направления
          </a>
          <a
            href="#schedule"
            className="hover:text-neutral-950 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all"
          >
            Расписание
          </a>
          <a
            href="#contacts"
            className="hover:text-neutral-950 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all"
          >
            Контакты
          </a>
        </nav>

        {/* Zone 3: Primary Action & Quick Contact */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+996558910061"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-neutral-700 hover:text-neutral-950 transition-colors px-3 py-2 rounded-lg hover:bg-neutral-100"
            title="Позвонить в студию"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>+996 (558) 91-00-61</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#1C1E21] hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-xs transition-all duration-200 active:scale-95 whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Записаться</span>
          </button>
        </div>
      </div>
    </header>
  );
};
