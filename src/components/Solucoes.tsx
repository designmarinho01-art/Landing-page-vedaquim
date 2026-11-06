import React, { useState } from "react";
import { SOLUCOES_TECNICAS } from "../data";
import { CheckCircle2, ChevronDown, Layers, ShieldCheck, Wrench, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SolucoesProps {
  onOpenConsultoria: () => void;
}

export const Solucoes: React.FC<SolucoesProps> = ({ onOpenConsultoria }) => {
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  const toggleTab = (id: string) => {
    setActiveTabId(activeTabId === id ? null : id);
  };

  return (
    <section id="solucoes" className="py-20 md:py-28 bg-slate-50 relative border-t border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span>O QUE RESOLVEMOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nossas Soluções Técnicas <br className="hidden sm:inline" />
            <span className="text-blue-600">para cada tipo de infiltração</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal">
            Método baseado em tecnologia alemã de injeção química sob pressão com produto próprio INJESEAL desenvolvido no Brasil. Clique em cada classe para expandir os detalhes técnicos.
          </p>
        </div>

        {/* Accordion List of Classes */}
        <div className="space-y-4">
          {SOLUCOES_TECNICAS.map((solucao) => {
            const isActive = solucao.id === activeTabId;
            return (
              <div
                key={solucao.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "border-blue-600 shadow-xl shadow-blue-500/5 ring-1 ring-blue-600/10"
                    : "border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300"
                }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleTab(solucao.id)}
                  aria-expanded={isActive}
                  className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Badge Column */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shrink-0 transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {solucao.classe.split(" ")[1]}
                    </div>

                    {/* Text Column */}
                    <div>
                      <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-0.5">
                        {solucao.classe}
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                        {solucao.titulo}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                        {solucao.subtitulo}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Arrow */}
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0 transition-all duration-300 ${
                      isActive ? "bg-blue-50 text-blue-600 rotate-180" : "hover:text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Animated Expanded Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 sm:px-8 sm:pb-10 border-t border-slate-100/80 pt-6">
                        {/* Two Column details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          
                          {/* Column 1: Description & Applications */}
                          <div className="space-y-6">
                            {solucao.imagemUrl && (
                              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs h-48 sm:h-56 relative bg-slate-100">
                                <img
                                  src={solucao.imagemUrl}
                                  alt={solucao.titulo}
                                  referrerPolicy="no-referrer"
                                  loading="lazy"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80";
                                  }}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-4">
                                  <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-600/90 backdrop-blur-xs">
                                    {solucao.classe} - {solucao.titulo}
                                  </span>
                                </div>
                              </div>
                            )}

                            <div>
                              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <Wrench className="w-4 h-4 text-blue-600" />
                                <span>Descrição Técnica</span>
                              </h4>
                              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                                {solucao.descricao}
                              </p>
                            </div>

                            {/* Key Applications */}
                            <div>
                              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                <Layers className="w-4 h-4 text-blue-600" />
                                <span>Principais Aplicações</span>
                              </h4>
                              <div className="space-y-2">
                                {solucao.aplicacoes.map((app, idx) => (
                                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                    <span className="font-medium">{app}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Column 2: Specific Advantages & Actions */}
                          <div className="space-y-6 flex flex-col justify-between">
                            {/* Technical Advantages Box */}
                            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 sm:p-6">
                              <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-blue-600" />
                                <span>Diferenciais Técnicos desta Classe</span>
                              </h4>
                              <div className="space-y-3">
                                {solucao.vantagensEspecíficas.map((vantagem, idx) => (
                                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                                    <span>{vantagem}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Form Action Box */}
                            <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                              <p className="text-xs text-slate-500 font-medium">
                                ⚡ Atendimento especializado para condomínios, indústrias e construtoras com emissão de laudo técnico de estanqueidade.
                              </p>
                              <button
                                onClick={onOpenConsultoria}
                                className="w-full bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-bold px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 text-sm group shadow-md shadow-[#19d10f]/20"
                              >
                                <span>Solicitar orçamento para {solucao.titulo}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
