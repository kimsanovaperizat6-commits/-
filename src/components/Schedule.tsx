import React from 'react';

interface ScheduleProps {
  onSelectSlot: (slot: { day: string; time: string; discipline: string }) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ onSelectSlot }) => {
  // Verified schedule data from client images
  const daysSchedule = [
    {
      dayTitle: 'Пон, Ср, Пятн',
      daySubtitle: 'Понедельник · Среда · Пятница',
      groups: [
        {
          discipline: 'ЛФК',
          isYoga: false,
          times: ['7:30', '8:30', '10:00', '11:15', '12:30', '15:30', '16:45'],
        },
        {
          discipline: 'йога',
          isYoga: true,
          times: ['18:30'],
        },
      ],
    },
    {
      dayTitle: 'Вт, Чт',
      daySubtitle: 'Вторник · Четверг',
      groups: [
        {
          discipline: 'ЛФК',
          isYoga: false,
          times: ['11:15', '12:30', '18:00', '19:15'],
        },
      ],
    },
    {
      dayTitle: 'Суббота',
      daySubtitle: 'Суббота',
      groups: [
        {
          discipline: 'ЛФК',
          isYoga: false,
          times: ['8:30', '10:00', '11:15', '16:00'],
        },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-14 sm:py-20 bg-white border-y border-neutral-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1E21] tracking-tight mb-2">
            Расписание
          </h2>
          <p className="text-sm text-neutral-500 font-normal">
            Выберите удобное время занятия для записи в группу. Доступны утренние, дневные и вечерние часы.
          </p>
        </div>

        {/* 3 Columns Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {daysSchedule.map((col, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-neutral-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Day Header */}
                <div className="border-b border-neutral-200 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-[#1C1E21]">
                    {col.dayTitle}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {col.daySubtitle}
                  </p>
                </div>

                {/* Groups */}
                <div className="space-y-4">
                  {col.groups.map((grp, gIdx) => (
                    <div key={gIdx}>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            grp.isYoga ? 'text-emerald-700' : 'text-neutral-900'
                          }`}
                        >
                          {grp.discipline}
                        </span>
                        <span className="text-[11px] text-neutral-400">
                          {grp.isYoga ? 'Йога' : 'Лечебная физкультура'}
                        </span>
                      </div>

                      {/* Time Slots */}
                      <div className="grid grid-cols-3 gap-1.5">
                        {grp.times.map((t) => (
                          <button
                            key={t}
                            onClick={() =>
                              onSelectSlot({
                                day: col.dayTitle,
                                time: t,
                                discipline: grp.discipline,
                              })
                            }
                            className="py-2 px-1 text-center rounded-lg bg-white hover:bg-neutral-900 hover:text-white border border-neutral-200 text-xs font-semibold text-neutral-800 transition-all cursor-pointer active:scale-95 shadow-2xs"
                            title={`Записаться на ${t} (${col.dayTitle})`}
                          >
                            <span className="tabular-nums">{t}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-200/60 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Длительность: ~60 мин</span>
                <span className="text-neutral-700 font-medium">Мини-группы · 50+, 60+, 70+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
