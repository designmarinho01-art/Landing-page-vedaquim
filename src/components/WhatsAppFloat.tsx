import React from "react";

export const WhatsAppFloat: React.FC = () => {
  const whatsappNumber = "5512988121000";
  const defaultMessage = "Olá! Gostaria de informações sobre a impermeabilização por injeção química e agendamento de vistoria.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group">
      {/* Floating Tooltip Label (Desktop Hover) */}
      <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-bold py-2 px-3.5 rounded-xl shadow-xl border border-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Atendimento via WhatsApp</span>
      </div>

      {/* Floating Button Container */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
      >
        {/* Pulsing Aura Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/50 animate-ping opacity-75 pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 fill-current relative z-10 drop-shadow-xs"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>

        {/* Online Status Badge */}
        <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full z-20 shadow-xs"></span>
      </a>
    </div>
  );
};
