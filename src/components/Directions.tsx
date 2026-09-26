import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Heart, Sparkles, Activity } from 'lucide-react';

interface DirectionsProps {
  onSelectDirection: (directionName: string) => void;
}

export const Directions: React.FC<DirectionsProps> = ({ onSelectDirection }) => {
  // Exactly the 11 directions
  const directions = [
    {
      title: 'ЛФК',
      desc: 'Лечебная физкультура: укрепление мышечного корсета, осанки и специальные группы для женщин 50+, 60+, 70+.',
    },
    {
      title: 'Суставная гимнастика',
      desc: 'Мягкая мобилизация суставов и стимуляция выработки синовиальной жидкости.',
    },
    {
      title: 'Грыжи и протрузии',
      desc: 'Декомпрессионные упражнения для бережной разгрузки позвоночника и снятия боли.',
    },
    {
      title: 'Артроз',
      desc: 'Безопасная двигательная терапия для защиты хряща без ударной осевой нагрузки.',
    },
    {
      title: 'Остеопороз',
      desc: 'Дозированная физическая активность для сохранения плотности костной ткани.',
    },
    {
      title: 'Диабет 2 типа',
      desc: 'Адаптивные упражнения для естественного контроля гликемии и обмена веществ.',
    },
    {
      title: 'Восстановление после родов',
      desc: 'Бережная коррекция диастаза, восстановление тонуса кора и мышц живота.',
    },
    {
      title: 'Восстановление после COVID-19',
      desc: 'Дыхательная гимнастика для восстановления объема легких и выносливости.',
    },
    {
      title: 'Интимные мышцы',
      desc: 'Специальная гимнастика для женского здоровья, тонуса и гормонального баланса.',
    },
    {
      title: 'Тазовое дно',
      desc: 'Укрепление поддерживающего мышечного гамака и профилактика слабости мышц.',
    },
    {
      title: 'Йога',
      desc: 'Терапевтическая йога для гибкости, вытяжения позвоночника и снятия стресса.',
    },
  ];

  // Verified symptoms & results from client poster
  const symptoms = [
    'Болит спина, шея или поясница',
    'Ноют суставы, колени, кисти рук',
    'Скованность движений по утрам',
    'Трудно ходить, наклоняться, подниматься',
    'Часто отёки и тяжесть в ногах',
    'Беспокоит давление, сахар или одышка',
  ];

  const outcomes = [
    { label: 'Уменьшаем боль и скованность', icon: ShieldCheck },
    { label: 'Улучшаем подвижность суставов', icon: Activity },
    { label: 'Укрепляем сердце и сосуды', icon: Heart },
    { label: 'Больше энергии и сил', icon: Sparkles },
  ];

  return (
    <section id="directions" className="py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1E21] tracking-tight mb-2">
            Направления
          </h2>
          <p className="text-sm text-neutral-500 font-normal">
            Безопасно. Эффективно. Движение под контролем специалиста для любого возраста.
          </p>
        </div>

        {/* Clean, Compact Grid of 11 Directions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-10">
          {directions.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onSelectDirection(item.title)}
              className="group text-left p-4 sm:p-5 rounded-xl bg-white border border-neutral-200/80 hover:border-amber-400 hover:shadow-xs transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-base font-bold text-[#1C1E21] group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Студия «Арабика»</span>
                <span className="text-amber-700 font-medium group-hover:underline">
                  Записаться →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Compact Indications & Outcomes Box (integrated from studio poster) */}
        <div className="p-5 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-neutral-100">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Если вы узнаёте себя
              </span>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                С чем помогают наши занятия
              </h3>
            </div>
            <p className="text-xs text-neutral-500 max-w-sm">
              Давайте заботиться о себе вовремя. Движение — это естественный и безопасный путь вернуть легкость.
            </p>
          </div>

          {/* Symptoms Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 py-5 text-xs text-neutral-700">
            {symptoms.map((symptom, sIdx) => (
              <div key={sIdx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{symptom}</span>
              </div>
            ))}
          </div>

          {/* Key Outcomes */}
          <div className="pt-4 border-t border-neutral-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {outcomes.map((out, oIdx) => {
              const Icon = out.icon;
              return (
                <div key={oIdx} className="p-2.5 rounded-xl bg-neutral-50/80 flex flex-col items-center justify-center">
                  <Icon className="w-4 h-4 text-amber-700 mb-1" />
                  <span className="text-[11px] font-semibold text-neutral-800 leading-snug">
                    {out.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
