import React from "react";
import { Search, Disc as Tool, Target, Droplet, ShieldCheck, CheckCircle2 } from "lucide-react";

export const Processo5Passos: React.FC = () => {
  const passos = [
    {
      numero: "1",
      passoTag: "PASSO 01",
      titulo: "Vistoria Técnica",
      icon: Search,
      descricao: "Análise completa da área, identificação e mapeamento com precisão de trincas, porosidades e pontos raiz da infiltração."
    },
    {
      numero: "2",
      passoTag: "PASSO 02",
      titulo: "Perfuração Estratégica",
      icon: Tool,
      descricao: "Perfuração com brocas especiais em ângulos precisos (geralmente 45°) para interceptar o centro das fissuras no interior do concreto."
    },
    {
      numero: "3",
      passoTag: "PASSO 03",
      titulo: "Instalação dos Bicos",
      icon: Target,
      descricao: "Posicionamento e travamento mecânico dos bicos injetores de alta pressão (puckers) nos furos ao longo das trincas ativas."
    },
    {
      numero: "4",
      passoTag: "PASSO 04",
      titulo: "Injeção Sob Pressão",
      icon: Droplet,
      descricao: "Injeção contínua de resina técnica de alta performance ou gel sob alta pressão através de compressores exclusivos até saturar a trinca."
    },
    {
      numero: "5",
      passoTag: "PASSO 05",
      titulo: "Acabamento & Teste",
      icon: ShieldCheck,
      descricao: "Remoção dos bicos injetores, selamento dos furos com argamassa técnica polimérica, teste de estanqueidade e limpeza completa da obra."
    }
  ];

  return (
    <section id="processo" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
            <span>COMO FUNCIONA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            5 passos para uma laje <br className="hidden sm:inline" />
            <span className="text-blue-600">impermeabilizada de verdade</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Processo técnico estruturado, executado por equipe e equipamentos próprios da Vedaquim. Rápido, preciso e sem transtorno.
          </p>
        </div>

        {/* Timeline Grid (Print 2 style with circular numbered step badges) */}
        <div className="relative">
          
          {/* Horizontal Line connector for desktop */}
          <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-emerald-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 relative z-10">
            {passos.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === passos.length - 1;
              return (
                <div
                  key={item.numero}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col items-center text-center group relative"
                >
                  {/* Step Number Badge */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg mb-4 transition-transform duration-300 group-hover:scale-110 shadow-md ${
                      isLast
                        ? "bg-emerald-600 text-white shadow-emerald-500/20"
                        : "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-blue-500/20"
                    }`}
                  >
                    {item.numero}
                  </div>

                  {/* Icon & Step Tag */}
                  <div className="text-[11px] font-bold tracking-wider uppercase text-blue-600 mb-1 flex items-center gap-1">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.passoTag}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.titulo}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.descricao}
                  </p>

                  {/* Checkmark badge */}
                  <div className="mt-6 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isLast ? "100% Estanque" : "Controle de qualidade"}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold">Tecnologia e Segurança Garantidas</h4>
              <p className="text-sm text-slate-300">Todas as etapas são monitoradas com manômetros digitais e laudo fotográfico antes e depois da injeção.</p>
            </div>
          </div>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wide shrink-0 text-center shadow-lg shadow-[#19d10f]/20"
          >
            AGENDAR MINHA VISTORIA
          </a>
        </div>

      </div>
    </section>
  );
};
