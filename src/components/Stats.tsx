import React from 'react';

export const Stats: React.FC = () => {
  const statsList = [
    {
      value: '20 000+',
      label: 'клиентов',
      subtext: 'восстановили подвижность',
      featured: true,
    },
    {
      value: '10+',
      label: 'направлений',
      subtext: 'оздоровительных программ',
      featured: false,
    },
    {
      value: '50+, 60+, 70+',
      label: 'возрастные группы',
      subtext: 'бережная адаптация нагрузки',
      featured: false,
    },
    {
      value: '6 дней',
      label: 'в неделю',
      subtext: 'утро, день и вечер',
      featured: false,
    },
  ];

  return (
    <section id="stats" className="py-7 bg-white border-y border-neutral-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-100">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className={`p-3.5 sm:p-5 text-center ${
                stat.featured ? 'bg-amber-50/40 lg:rounded-xl' : ''
              }`}
            >
              <div
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums ${
                  stat.featured ? 'text-amber-800' : 'text-[#1C1E21]'
                }`}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-neutral-800 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-500 font-normal mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
