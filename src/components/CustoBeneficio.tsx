import React from "react";
import { ShieldCheck, Zap, Layers, Clock, Activity, CheckCircle, MessageCircle, ArrowUpRight } from "lucide-react";

interface CustoBeneficioProps {
  onOpenConsultoria: () => void;
}

export const CustoBeneficio: React.FC<CustoBeneficioProps> = ({ onOpenConsultoria }) => {
  const itens = [
    {
      numero: "01",
      titulo: "Não Destrutiva",
      icon: ShieldCheck,
      descricao: "Evita quebradeira, entulhos e reformas estruturais caras. Protege o acabamento existente do seu imóvel, sem remover azulejos, pisos ou contrapisos."
    },
    {
      numero: "02",
      titulo: "Eficiência e Durabilidade",
      icon: Zap,
      descricao: "A injeção penetra profundamente nas fissuras, selando de dentro para fora e garantindo proteção duradoura contra intempéries e pressão hidrostática."
    },
    {
      numero: "03",
      titulo: "Atuação em Estruturas de Concreto",
      icon: Layers,
      descricao: "Excelente atuação em estruturas de concreto, mesmo em locais com umidade ativa ou fluxo contínuo de água sob pressão."
    },
    {
      numero: "04",
      titulo: "Praticidade e Rapidez",
      icon: Clock,
      descricao: "Aplicação ágil e limpa, liberando o local em tempo recorde sem interromper a rotina de moradores, condomínios ou indústrias."
    },
    {
      numero: "05",
      titulo: "Flexibilidade",
      icon: Activity,
      descricao: "O gel ou resina injetada acompanha as movimentações térmicas e estruturais da laje sem trincar ou perder aderência ao longo dos anos."
    },
    {
      numero: "06",
      titulo: "Solução Definitiva",
      icon: CheckCircle,
      descricao: "Elimina a passagem de água na raiz do problema, evitando retrabalhos constantes, remendos paliativos e despesas contínuas com pinturas."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-t border-b border-slate-200/80">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/60 via-blue-50/20 to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>TECNOLOGIA QUE COMPENSA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Por que a Injeção Química é o <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Melhor Custo Benefício</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Uma solução técnica avançada que resolve o problema na raiz, com durabilidade, praticidade e resultado comprovado.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {itens.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.numero}
                className="bg-white/90 backdrop-blur-xs rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Accent Gradient Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header Row: Icon + Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/80 border border-blue-100/80 text-blue-600 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:border-blue-600 group-hover:scale-105 transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-black text-slate-300 group-hover:text-blue-500 transition-colors tracking-widest uppercase bg-slate-50 group-hover:bg-blue-50 px-2.5 py-1 rounded-full border border-slate-100 group-hover:border-blue-100">
                      {item.numero}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.titulo}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed font-normal">
                    {item.descricao}
                  </p>
                </div>

                {/* Bottom Card Footer Element */}
                <div className="mt-6 pt-4 border-t border-slate-100/80 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Vedaquim Impermeabilização
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultoria}
            className="inline-flex items-center gap-2.5 bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-extrabold px-8 py-4 rounded-full shadow-lg shadow-[#19d10f]/25 hover:shadow-[#19d10f]/40 hover:-translate-y-0.5 transition-all uppercase tracking-wide text-sm sm:text-base cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>SOLICITAR ORÇAMENTO TÉCNICO GRATUITO</span>
          </button>
        </div>

      </div>
    </section>
  );
};

