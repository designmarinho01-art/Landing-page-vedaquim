import React from "react";
import { DEPOIMENTOS_CLIENTES } from "../data";
import { Star, MessageCircle, CheckCircle, Award } from "lucide-react";

interface ResultadosGoogleProps {
  onOpenConsultoria: () => void;
}

const getGoogleAvatarColor = (name: string): string => {
  const colors = [
    "bg-[#ea4335]", // Red
    "bg-[#34a853]", // Green
    "bg-[#4285f4]", // Blue
    "bg-[#fbbc05]", // Orange/Yellow
    "bg-[#673ab7]", // Purple
    "bg-[#009688]", // Teal
    "bg-[#e91e63]", // Pink
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

export const ResultadosGoogle: React.FC<ResultadosGoogleProps> = ({ onOpenConsultoria }) => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
            <span>O QUE DIZEM NOSSOS CLIENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Resultados que <br className="hidden sm:inline" />
            <span className="text-blue-600">falam por si.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Avaliações reais de clientes atendidos pela Vedaquim, extraídas diretamente do Google com satisfação comprovada.
          </p>

          {/* Google & Reclame Aqui Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {/* Google Badge */}
            <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-2.5 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs font-bold text-base text-blue-600 border border-slate-100">
                G
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                  <span className="font-extrabold text-slate-900 ml-1 text-sm">4.9 / 5.0</span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Avaliações reais no Google Meu Negócio</div>
              </div>
            </div>

            {/* Reclame Aqui Badge */}
            <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200/80 rounded-2xl px-5 py-2.5 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs font-extrabold text-xs">
                RA
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5 text-emerald-800 font-extrabold text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reclame Aqui: 1 Reclamação 100% Resolvida</span>
                </div>
                <div className="text-[11px] text-emerald-700/80 font-medium">Reputação e compromisso total pós-obra</div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Google Cards Grid (Print 2 style: crisp white cards, rounded-2xl, soft shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DEPOIMENTOS_CLIENTES.map((dep) => (
            <div
              key={dep.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top bar: Stars + Google Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(dep.nota)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  {dep.verificadoGoogle && (
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-blue-600" title="Avaliação Verificada do Google">
                      G
                    </div>
                  )}
                </div>

                {/* Comment */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 italic">
                  "{dep.comentario}"
                </p>
              </div>

              {/* Customer Info Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full ${getGoogleAvatarColor(dep.nome)} text-white flex items-center justify-center font-extrabold text-lg shrink-0 shadow-xs uppercase tracking-wider`}>
                  {dep.nome.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors flex items-center gap-1">
                    <span>{dep.nome}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 inline" />
                  </h4>
                  <div className="text-xs text-slate-500">
                    {dep.cargo} • <span className="font-semibold text-slate-600">{dep.cidade}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{dep.data} no Google</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultoria}
            className="inline-flex items-center gap-2 bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-extrabold px-8 py-4 rounded-full shadow-lg shadow-[#19d10f]/25 hover:shadow-[#19d10f]/40 hover:-translate-y-0.5 transition-all uppercase tracking-wide text-sm sm:text-base cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>QUERO O MESMO RESULTADO - SOLICITAR VISTORIA</span>
          </button>
        </div>

      </div>
    </section>
  );
};
