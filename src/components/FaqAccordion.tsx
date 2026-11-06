import React, { useState } from "react";
import { FAQ_ITENS } from "../data";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

interface FaqAccordionProps {
  onOpenConsultoria: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenConsultoria }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Closed by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tudo que você precisa saber <br className="hidden sm:inline" />
            <span className="text-blue-600">antes de contratar.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Respostas diretas às perguntas mais comuns sobre impermeabilização por injeção química sob pressão.
          </p>
        </div>

        {/* Accordion List (Print 2 style: clean white rounded boxes with border and plus/minus icons) */}
        <div className="space-y-4">
          {FAQ_ITENS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-blue-500 shadow-md shadow-blue-500/5"
                    : "bg-white/80 hover:bg-white border-slate-200 shadow-2xs hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-slate-900 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 pr-2">{item.pergunta}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                    }`}
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p>{item.resposta}</p>
                    {item.categoria && (
                      <div className="mt-4 inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        Categoria: {item.categoria}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-center shadow-xs">
          <h3 className="font-bold text-slate-900 text-lg">Ainda tem alguma dúvida técnica sobre sua laje?</h3>
          <p className="text-sm text-slate-600 mt-1 mb-6">
            Nossos engenheiros estão à disposição no WhatsApp para analisar fotos ou agendar uma avaliação no local.
          </p>
          <button
            onClick={onOpenConsultoria}
            className="inline-flex items-center gap-2 bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-extrabold px-6 py-3 rounded-full text-sm uppercase tracking-wide shadow-md shadow-[#19d10f]/20 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>TIRAR DÚVIDA COM UM ESPECIALISTA</span>
          </button>
        </div>

      </div>
    </section>
  );
};
