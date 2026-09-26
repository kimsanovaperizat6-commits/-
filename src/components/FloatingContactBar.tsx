import React from 'react';
import { Instagram, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const FloatingContactBar: React.FC = () => {
  const contacts = [
    {
      id: 'instagram',
      name: 'Instagram',
      subtitle: '@arabika.st.kg',
      href: 'https://www.instagram.com/arabika.st.kg/',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: Instagram,
      bgClass: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white',
      ringColor: 'bg-rose-500/20',
      delayOffset: '0s',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      subtitle: '+996 558 910 061',
      href: 'https://wa.me/996558910061',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: WhatsAppIcon,
      bgClass: 'bg-emerald-600 text-white',
      ringColor: 'bg-emerald-600/20',
      delayOffset: '1s',
    },
    {
      id: 'location',
      name: 'Локация',
      subtitle: 'Ахунбаева 105, Бишкек',
      href: 'https://2gis.kg/bishkek/search/%D0%90%D1%85%D1%83%D0%BD%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0%20105',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: MapPin,
      bgClass: 'bg-amber-500 text-neutral-950',
      ringColor: 'bg-amber-500/20',
      delayOffset: '2s',
    },
  ];

  return (
    <aside
      aria-label="Быстрые контакты"
      className="fixed z-40 right-3 sm:right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3.5 select-none pointer-events-auto"
    >
      {contacts.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            href={item.href}
            target={item.target}
            rel={item.rel}
            aria-label={`${item.name}: ${item.subtitle}`}
            className="group relative flex items-center justify-center cursor-pointer"
          >
            {/* 1st Subtle Ripple Ring */}
            <span
              className={`absolute inset-0 rounded-full ${item.ringColor} pointer-events-none animate-ripple`}
              style={{ animationDelay: item.delayOffset }}
              aria-hidden="true"
            />

            {/* 2nd Subtle Delayed Ripple Ring */}
            <span
              className={`absolute inset-0 rounded-full ${item.ringColor} pointer-events-none animate-ripple-delayed`}
              style={{ animationDelay: item.delayOffset }}
              aria-hidden="true"
            />

            {/* Compact circular icon button */}
            <span
              className={`relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-xs transition-all duration-300 ease-out group-hover:scale-105 group-active:scale-95 border border-white/50 ${item.bgClass}`}
            >
              <Icon className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-105" />
            </span>

            {/* Quiet Desktop Tooltip on Hover */}
            <span
              role="tooltip"
              className="hidden lg:block absolute right-full mr-3 px-2.5 py-1.5 rounded-lg bg-neutral-900/90 text-white text-[11px] font-medium whitespace-nowrap opacity-0 translate-x-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 shadow-md border border-neutral-700/50 backdrop-blur-xs"
            >
              <span className="block font-semibold leading-tight">{item.name}</span>
              <span className="block text-[10px] text-neutral-400 font-normal leading-tight">
                {item.subtitle}
              </span>
            </span>
          </a>
        );
      })}
    </aside>
  );
};
