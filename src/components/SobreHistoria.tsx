import React from "react";
import { Award, CheckCircle2, Building, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";
import sobreNosCollageImg from "../assets/images/sobre_nos_clean_collage_1783950457636.jpg";

interface SobreHistoriaProps {
  onOpenConsultoria: () => void;
}

export const SobreHistoria: React.FC<SobreHistoriaProps> = ({ onOpenConsultoria }) => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story Text & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase">
              <span>NOSSA HISTÓRIA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Desde 2016 resolvendo <br />
              <span className="text-blue-600">infiltrações na raiz.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Criada em 2016 para atender às necessidades críticas do segmento de construção civil em condomínios residenciais e comerciais, indústrias, pontes, viadutos, garagens, subsolos e túneis em todo o território nacional.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Somos referência e especialistas na eliminação definitiva de infiltrações em estruturas de concreto por processo não destrutivo, ou seja, <span className="font-bold text-slate-900 bg-amber-100 px-1 rounded">sem quebra-quebra</span>, com compressores de alta pressão, resinas exclusivas e mão de obra própria para entregar resultados que realmente duram por décadas.
            </p>

            {/* Bullet points of reliability */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm sm:text-base text-slate-800 font-semibold">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Equipe técnica uniformizada, treinada com NRs (33 e 35) e frota própria</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-slate-800 font-semibold">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Atendimento padronizado da vistoria técnica ao pós-obra</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-slate-800 font-semibold">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Laudo de garantia contratual até 15 anos contra infiltrações</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">+2.500</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Obras Concluídas</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">10 anos</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">De Experiência</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">100%</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Compromisso</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultoria}
                className="bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-extrabold px-8 py-4 rounded-full shadow-lg shadow-[#19d10f]/25 transition-all inline-flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide group"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>SOLICITAR VISTORIA COM ESPECIALISTA</span>
              </button>
            </div>

          </div>

          {/* Right Column: Clean Photographic Collage Presentation */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <img
              src={sobreNosCollageImg}
              alt="Equipe técnica e atendimento especializado Vedaquim"
              loading="lazy"
              className="w-full max-w-full h-auto object-contain select-none pointer-events-none rounded-2xl shadow-xl border border-slate-100"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
