import React from 'react';
import { ArabikaLogo } from './ArabikaLogo.tsx';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 py-10 pb-24 sm:pb-12 text-neutral-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <ArabikaLogo size="sm" />
            <div>
              <div className="text-base font-bold text-[#1C1E21] tracking-tight">
                Арабика
              </div>
              <div className="text-xs text-neutral-500">
                Ахунбаева 105, Бишкек
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-neutral-600">
            <a href="#directions" className="hover:text-neutral-900 transition-colors">
              Направления
            </a>
            <a href="#schedule" className="hover:text-neutral-900 transition-colors">
              Расписание
            </a>
            <a href="#contacts" className="hover:text-neutral-900 transition-colors">
              Контакты
            </a>
          </div>

          <div className="text-center md:text-right text-neutral-400">
            <span>Bishkek, Kyrgyzstan</span>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-400 text-[11px]">
          <p>© {new Date().getFullYear()} Студия оздоровления и реабилитации «Арабика». Все права защищены.</p>
          <p>ул. Ахунбаева 105 (р-н Медакадемии), Бишкек · ЛФК · Суставная гимнастика · Йога</p>
        </div>
      </div>
    </footer>
  );
};
