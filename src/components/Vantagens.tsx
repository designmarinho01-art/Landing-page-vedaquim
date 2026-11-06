import React from "react";
import { HandCoins, Timer, Handshake, Crown, CheckCircle2 } from "lucide-react";

export const Vantagens: React.FC = () => {
  const vantagens = [
    {
      numero: "01",
      titulo: "Focado em Economia",
      icon: HandCoins,
      descricao:
        "Nossa injeção química sob pressão oferece a máxima eficácia por uma fração do preço. Sem quebra-quebra, sem entulho, sem desperdício. Apenas uma solução definitiva que protege sua estrutura e seu bolso.",
      destaque: "Sem custos com demolição"
    },
    {
      numero: "02",
      titulo: "Focado em Urgência",
      icon: Timer,
      descricao:
        "Cada dia que passa, a infiltração piora. Trincas se expandem, a umidade penetra mais fundo. Com a injeção química sob pressão, a estanqueidade é rápida. Definitivo, sem transtornos ou interrupções prolongadas.",
      destaque: "Estanqueidade imediata"
    },
    {
      numero: "03",
      titulo: "Focado em Confiança",
      icon: Handshake,
      descricao:
        "Cansado de soluções que prometem e não entregam? A injeção química sob pressão é o método baseado em tecnologia alemã, com produto próprio INJESEAL desenvolvido no Brasil. Sela fissuras no interior do concreto e elimina a causa do problema.",
      destaque: "Baseado em tecnologia alemã"
    },
    {
      numero: "04",
      titulo: "Focado em Diferencial",
      icon: Crown,
      descricao:
        "Não é manta asfáltica. Não é pintura superficial. A injeção química sob pressão penetra nas fissuras e poros do concreto, selando de dentro para fora. O resultado? Uma estrutura de concreto 100% vedada na raiz, sem quebra-quebra.",
      destaque: "Selamento de dentro para fora"
    }
  ];

  return (
    <section id="vantagens" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-100">
            <span>POR QUE ESCOLHER A VEDAQUIM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Vantagens de se Usar a <br className="hidden sm:inline" />
            <span className="text-blue-600">Injeção Química Sob Pressão</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Método baseado em tecnologia alemã de injeção técnica, com produto próprio INJESEAL desenvolvido no Brasil pela Vedaquim.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {vantagens.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.numero}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute top-4 right-4 text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none">
                  {item.numero}
                </span>

                <div>
                  {/* Icon Badge - Humanized design with dual-tone background */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/80 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:border-blue-600 group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <Icon className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.titulo}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.descricao}
                  </p>
                </div>

                {/* Highlight footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.destaque}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
