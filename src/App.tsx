/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Vantagens } from "./components/Vantagens";
import { CustoBeneficio } from "./components/CustoBeneficio";
import { AlertaInfiltracao } from "./components/AlertaInfiltracao";
import { Solucoes } from "./components/Solucoes";
import { Processo5Passos } from "./components/Processo5Passos";
import { EscolhaTecnica } from "./components/EscolhaTecnica";
import { SobreHistoria } from "./components/SobreHistoria";
import { EmpresasAtendidas } from "./components/EmpresasAtendidas";
import { ResultadosGoogle } from "./components/ResultadosGoogle";
import { FaqAccordion } from "./components/FaqAccordion";
import { ContatoVistoria } from "./components/ContatoVistoria";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { PrivacyModal } from "./components/PrivacyModal";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { X, MessageCircle, Phone, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNome, setModalNome] = useState("");
  const [modalTelefone, setModalTelefone] = useState("");
  const [modalTipo, setModalTipo] = useState("Condomínio Residencial");
  const [enviadoModal, setEnviadoModal] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenConsultoria = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEnviadoModal(false);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviadoModal(true);

    setTimeout(() => {
      const textWa = `Olá Vedaquim! Solicito vistoria técnica de emergência.\n*Nome:* ${modalNome}\n*Telefone:* ${modalTelefone}\n*Tipo de Imóvel:* ${modalTipo}`;
      const url = `https://wa.me/5512988121000?text=${encodeURIComponent(textWa)}`;
      window.open(url, "_blank");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Navbar */}
      <Navbar onOpenConsultoria={handleOpenConsultoria} />

      {/* 2. Hero Section (Headline forte + CTA + Autoridade) */}
      <Hero onOpenConsultoria={handleOpenConsultoria} />

      {/* 3. Benefícios da Injeção Química vs Métodos Convencionais */}
      <Vantagens onOpenConsultoria={handleOpenConsultoria} />

      {/* 4. Custo-Benefício & Comparativo Técnico */}
      <CustoBeneficio onOpenConsultoria={handleOpenConsultoria} />

      {/* 5. Alerta de Infiltração (Problema & Urgência) */}
      <AlertaInfiltracao onOpenConsultoria={handleOpenConsultoria} />

      {/* 6. Soluções & Áreas de Aplicação */}
      <Solucoes onOpenConsultoria={handleOpenConsultoria} />

      {/* 7. Como Funciona (Passo a Passo da Injeção) */}
      <Processo5Passos onOpenConsultoria={handleOpenConsultoria} />

      {/* 8. Escolha Técnica (Resinas Alemãs & Equipamentos) */}
      <EscolhaTecnica />

      {/* 9. Sobre a Vedaquim & História */}
      <SobreHistoria />

      {/* 10. Empresas Atendidas & Parceiros */}
      <EmpresasAtendidas />

      {/* 11. Prova Social (Resultados Google & Depoimentos reais) */}
      <ResultadosGoogle onOpenConsultoria={handleOpenConsultoria} />

      {/* 13. FAQ (Dúvidas Frequentes) */}
      <FaqAccordion onOpenConsultoria={handleOpenConsultoria} />

      {/* 14. Seção de Contato & Vistoria Gratuita (Inspirada no print) */}
      <ContatoVistoria onOpenConsultoria={handleOpenConsultoria} />

      {/* 15. Rodapé completo */}
      <Footer 
        onOpenConsultoria={handleOpenConsultoria} 
        onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)} 
      />

      {/* Banner de Lei de Cookies */}
      <CookieBanner onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)} />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppFloat />

      {/* Modal de Política de Privacidade / LGPD */}
      <PrivacyModal isOpen={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} />

      {/* Modal de Agendamento Rápido / WhatsApp */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden">
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {enviadoModal ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Redirecionando para o WhatsApp!</h3>
                <p className="text-slate-600 text-sm">
                  Um de nossos engenheiros especialistas atenderá você agora. Caso a aba não tenha aberto, clique no botão abaixo:
                </p>
                <a
                  href={`https://wa.me/5512988121000?text=${encodeURIComponent(`Olá Vedaquim! Meu nome é ${modalNome} (${modalTelefone}) e preciso de uma vistoria técnica em ${modalTipo}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseModal}
                  className="inline-flex items-center gap-2 bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-extrabold px-6 py-3.5 rounded-full shadow-lg transition-all text-sm mt-4 shadow-[#19d10f]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ABRIR WHATSAPP AGORA</span>
                </a>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Atendimento Prioritário em até 15 Minutos</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Solicite sua Vistoria Técnica Gratuita
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  Preencha os dados básicos para direcionarmos o engenheiro responsável pela sua região.
                </p>

                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Seu Nome *</label>
                    <input
                      type="text"
                      required
                      value={modalNome}
                      onChange={(e) => setModalNome(e.target.value)}
                      placeholder="Ex: Dr. Roberto / Síndico Carlos"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp / Telefone *</label>
                    <input
                      type="tel"
                      required
                      value={modalTelefone}
                      onChange={(e) => setModalTelefone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tipo de Imóvel *</label>
                    <select
                      value={modalTipo}
                      onChange={(e) => setModalTipo(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none"
                    >
                      <option value="Condomínio Residencial">Condomínio Residencial (Laje / Garagem)</option>
                      <option value="Condomínio Comercial / Corporativo">Condomínio Comercial / Corporativo</option>
                      <option value="Galpão Industrial / Logístico">Galpão Industrial / Logístico</option>
                      <option value="Residência / Cobertura">Residência / Cobertura</option>
                      <option value="Piscina / Reservatório">Piscina / Reservatório</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-extrabold py-3.5 px-6 rounded-full shadow-lg shadow-[#19d10f]/30 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider mt-6 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>CHAMAR ENGENHEIRO NO WHATSAPP</span>
                  </button>

                  <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100 mt-4">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-500" /> Resposta imediata</span>
                    <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-emerald-500" /> Plantão 24 horas</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
