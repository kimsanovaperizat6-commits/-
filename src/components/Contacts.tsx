import React from 'react';
import { ArabikaLogo } from './ArabikaLogo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import {
  MapPin,
  Phone,
  Instagram,
  Navigation,
  ExternalLink,
} from 'lucide-react';

export const Contacts: React.FC = () => {
  const contactLinks = [
    {
      name: 'WhatsApp',
      desc: 'Быстрая переписка и запись',
      value: '+996 558 910 061',
      href: 'https://wa.me/996558910061',
      icon: WhatsAppIcon,
      accent: 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100',
    },
    {
      name: 'Instagram',
      desc: 'Официальный профиль студии',
      value: '@arabika.st.kg',
      href: 'https://www.instagram.com/arabika.st.kg/',
      icon: Instagram,
      accent: 'text-rose-600 bg-rose-50 hover:bg-rose-100',
    },
    {
      name: 'Телефон',
      desc: 'Прямой звонок администратору',
      value: '+996 (558) 91-00-61',
      href: 'tel:+996558910061',
      icon: Phone,
      accent: 'text-neutral-900 bg-neutral-100 hover:bg-neutral-200',
    },
    {
      name: 'Локация / 2GIS',
      desc: 'Маршрут до студии на карте',
      value: 'Ахунбаева 105 (р-н Медакадемии)',
      href: 'https://2gis.kg/bishkek/search/%D0%90%D1%85%D1%83%D0%BD%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0%20105',
      icon: Navigation,
      accent: 'text-amber-700 bg-amber-50 hover:bg-amber-100',
    },
  ];

  return (
    <section id="contacts" className="py-14 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200/80 shadow-2xs">
          {/* Top row: Brand & Address with Medical Academy Landmark */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between pb-8 border-b border-neutral-100 gap-4 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <ArabikaLogo size="sm" />
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C1E21] tracking-tight">
                  Арабика
                </h3>
                <p className="text-xs text-neutral-500">
                  Студия оздоровления и реабилитации
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-50 px-3.5 py-2 rounded-xl border border-neutral-200/60">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Ахунбаева 105, Бишкек (р-н Медакадемии)</span>
            </div>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-8">
            {contactLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-4 rounded-xl border border-neutral-200/70 hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between group bg-white"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${item.accent}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-300 group-hover:text-neutral-500 transition-colors" />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-amber-800 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5 truncate">
                      {item.desc}
                    </p>
                    <p className="text-xs font-semibold text-neutral-800 mt-2 truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
