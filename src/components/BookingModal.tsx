import React, { useState, useEffect } from 'react';
import { X, Check, Phone, Calendar, User, ShieldCheck } from 'lucide-react';
import { ArabikaLogo } from './ArabikaLogo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDirection?: string;
  preselectedSlot?: { day: string; time: string; discipline: string } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedDirection = '',
  preselectedSlot = null,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+996 ');
  const [direction, setDirection] = useState('ЛФК');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // All 11 verified directions
  const directionsList = [
    'ЛФК',
    'Суставная гимнастика',
    'Грыжи и протрузии',
    'Артроз',
    'Остеопороз',
    'Диабет 2 типа',
    'Восстановление после родов',
    'Восстановление после COVID-19',
    'Интимные мышцы',
    'Тазовое дно',
    'Йога',
  ];

  // Schedule options from client verified schedule
  const scheduleOptions = [
    'Пон, Ср, Пятн — 07:30 (ЛФК)',
    'Пон, Ср, Пятн — 08:30 (ЛФК)',
    'Пон, Ср, Пятн — 10:00 (ЛФК)',
    'Пон, Ср, Пятн — 11:15 (ЛФК)',
    'Пон, Ср, Пятн — 12:30 (ЛФК)',
    'Пон, Ср, Пятн — 15:30 (ЛФК)',
    'Пон, Ср, Пятн — 16:45 (ЛФК)',
    'Пон, Ср, Пятн — 18:30 (йога)',
    'Вт, Чт — 11:15 (ЛФК)',
    'Вт, Чт — 12:30 (ЛФК)',
    'Вт, Чт — 18:00 (ЛФК)',
    'Вт, Чт — 19:15 (ЛФК)',
    'Суббота — 08:30 (ЛФК)',
    'Суббота — 10:00 (ЛФК)',
    'Суббота — 11:15 (ЛФК)',
    'Суббота — 16:00 (ЛФК)',
    'Подобрать время с администратором',
  ];

  useEffect(() => {
    if (preselectedDirection) {
      setDirection(preselectedDirection);
    }
  }, [preselectedDirection]);

  useEffect(() => {
    if (preselectedSlot) {
      const match = `${preselectedSlot.day} — ${preselectedSlot.time} (${preselectedSlot.discipline})`;
      setSelectedSlot(match);
      if (preselectedSlot.discipline.toLowerCase().includes('йога')) {
        setDirection('Йога');
      } else {
        setDirection('ЛФК');
      }
    }
  }, [preselectedSlot]);

  // Reset submit state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const constructWhatsAppMessage = () => {
    const text = `Здравствуйте! Я хочу записаться в студию «Арабика» (Бишкек, Ахунбаева 105).%0A%0A` +
      `👤 Имя: ${encodeURIComponent(name || 'Не указано')}%0A` +
      `📞 Телефон: ${encodeURIComponent(phone)}%0A` +
      `🎯 Направление: ${encodeURIComponent(direction)}%0A` +
      `⏰ Желаемое время: ${encodeURIComponent(selectedSlot || 'На усмотрение администратора')}` +
      (comment ? `%0A💬 Пожелания/диагноз: ${encodeURIComponent(comment)}` : '');
    return `https://wa.me/996558910061?text=${text}`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = constructWhatsAppMessage();
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-neutral-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#FAF7F2] border-b border-neutral-200/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ArabikaLogo size="sm" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1C1E21] leading-tight">
                Запись на занятие
              </h3>
              <p className="text-xs text-neutral-500">
                Студия «Арабика» · Ахунбаева 105, Бишкек
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-200/60 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer"
            aria-label="Закрыть модальное окно"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">
                Спасибо за заявку!
              </h4>
              <p className="text-sm text-neutral-600 max-w-xs mx-auto mb-6">
                Мы связались с вами в WhatsApp или перезвоним в ближайшее время для подтверждения записи.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-neutral-200 text-xs text-neutral-700 text-left mb-6 space-y-1">
                <p><strong>Студия:</strong> Арабика</p>
                <p><strong>Адрес:</strong> Бишкек, ул. Ахунбаева 105</p>
                <p><strong>Телефон:</strong> +996 (558) 91-00-61</p>
                <p><strong>Направление:</strong> {direction}</p>
                {selectedSlot && <p><strong>Время:</strong> {selectedSlot}</p>}
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-[#1C1E21] text-white font-medium rounded-xl text-sm hover:bg-neutral-800 transition-colors"
              >
                Закрыть
              </button>
            </div>
          ) : (
            <form onSubmit={handleDirectSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Ваше имя
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Например, Айгуль"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-hidden text-sm bg-neutral-50/50"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Номер телефона (WhatsApp)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+996 558 910 061"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-hidden text-sm bg-neutral-50/50"
                  />
                </div>
              </div>

              {/* Direction selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Направление
                </label>
                <select
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-hidden text-sm bg-neutral-50/50"
                >
                  {directionsList.map((dir) => (
                    <option key={dir} value={dir}>
                      {dir}
                    </option>
                  ))}
                </select>
              </div>

              {/* Schedule time selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Удобное время по расписанию
                </label>
                <select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-hidden text-sm bg-neutral-50/50"
                >
                  <option value="">Выберите время из расписания...</option>
                  {scheduleOptions.map((opt, oIdx) => (
                    <option key={oIdx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Comment / Note */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Комментарий или диагноз (необязательно)
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={2}
                  placeholder="Например: протрузия поясничного отдела, после родов 6 месяцев и т.д."
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-hidden text-sm bg-neutral-50/50 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                {/* Primary WhatsApp Action */}
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Записаться через WhatsApp</span>
                </button>

                {/* Secondary Call Action */}
                <a
                  href="tel:+996558910061"
                  className="w-full py-3 px-4 bg-[#1C1E21] hover:bg-neutral-800 text-white font-medium rounded-xl text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Позвонить напрямую: +996 (558) 91-00-61</span>
                </a>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-neutral-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Индивидуальный подбор программы без перегрузок</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
