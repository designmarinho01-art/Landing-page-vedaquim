import React from "react";
import { Wrench, FlaskConical, BadgeCheck, CalendarCheck, ShieldCheck, Trophy, CheckCircle2, ThumbsUp } from "lucide-react";

export const EscolhaTecnica: React.FC = () => {
  const escolhas = [
    {
      numero: "01",
      titulo: "Equipamento Próprio",
      icon: Wrench,
      descricao: "Máquinas e bombas de alta pressão exclusivas com calibração precisa para cada tipo de obra e patologia estrutural em concreto."
    },
    {
      numero: "02",
      titulo: "Produto Próprio INJESEAL",
      icon: FlaskConical,
      descricao: "Formulação exclusiva desenvolvida e fabricada no Brasil pela Vedaquim, baseada em tecnologia alemã, com alta penetração e flexibilidade."
    },
    {
      numero: "03",
      titulo: "Garantia até 15 Anos",
      icon: BadgeCheck,
      descricao: "Garantia documentada em contrato com acompanhamento técnico contínuo e suporte real no pós-obra sem burocracia ou letrinhas miúdas."
    },
    {
      numero: "04",
      titulo: "Prazo Combinado Cumprido",
      icon: CalendarCheck,
      descricao: "Comprometimento total com o cronograma da sua obra ou condomínio. Entregamos na data combinada sem surpresas ou aditivos financeiros."
    },
    {
      numero: "05",
      titulo: "Responsabilidade Ambiental",
      icon: ShieldCheck,
      descricao: "Garantimos o manejo ecológico rigoroso e seguro de resíduos, assegurando que nenhum material seja descartado incorretamente. Processos atóxicos e sustentáveis."
    },
    {
      numero: "06",
      titulo: "Desde 2016 no Mercado",
      icon: Trophy,
      descricao: "10 anos de sólida experiência com mais de 2.500 obras concluídas em lajes, garagens e reservatórios de concreto em todo o Brasil."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span>POR QUE A VEDAQUIM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            O que nos torna a <br className="hidden sm:inline" />
            <span className="text-blue-600">escolha técnica certa.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            10 anos resolvendo infiltrações com produto próprio INJESEAL, equipe especializada e compromisso real com o resultado final.
          </p>
        </div>

        {/* Grid 01 to 06 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {escolhas.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.numero}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
              >
                {/* Big Number watermark */}
                <span className="absolute -bottom-2 right-4 text-6xl font-black text-slate-100/80 group-hover:text-blue-50 transition-colors pointer-events-none">
                  {item.numero}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/80 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:border-blue-600 group-hover:scale-105 transition-all duration-300 shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-sm font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      Diferencial #{item.numero}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors relative z-10">
                    {item.titulo}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                    {item.descricao}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-500 relative z-10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garantia de Padrão Vedaquim</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reclame Aqui Trust Highlight Banner (Item 14) */}
        <div className="mt-12 bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-800 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-inner">
              <ThumbsUp className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold tracking-wider uppercase mb-1 border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>REPUTAÇÃO IMPECÁVEL NO RECLAME AQUI</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                100% de Problemas Resolvidos com Agilidade
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
                Transparência e respeito total ao cliente: em 10 anos de atuação e mais de 2.500 obras, a Vedaquim tem apenas <strong>1 única reclamação registrada no Reclame Aqui</strong>, e ela foi <strong>100% resolvida</strong> com atendimento imediato.
              </p>
            </div>
          </div>

          <div className="shrink-0 text-center md:text-right relative z-10 bg-emerald-950/60 p-4 rounded-2xl border border-emerald-800/80 w-full md:w-auto">
            <div className="text-3xl font-black text-emerald-400">100%</div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-200 mt-0.5">Solução & Satisfação</div>
          </div>
        </div>

      </div>
    </section>
  );
};
