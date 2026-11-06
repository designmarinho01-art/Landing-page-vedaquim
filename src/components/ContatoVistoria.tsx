import React, { useState } from "react";
import { CheckCircle2, Send, ShieldCheck, Clock, Award, Sparkles } from "lucide-react";

interface ContatoVistoriaProps {
  onOpenConsultoria: () => void;
}

export const ContatoVistoria: React.FC<ContatoVistoriaProps> = ({ onOpenConsultoria }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: ""
  });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate instant sending or redirect to WhatsApp with pre-filled message
    setTimeout(() => {
      setLoading(false);
      setEnviado(true);
      
      const textWa = `🚨 *NOVA SOLICITAÇÃO DE VISTORIA TÉCNICA - VEDAQUIM* 🚨\n\n` +
        `👤 *DADOS DO CLIENTE:*\n` +
        `• *Nome:* ${formData.nome}\n` +
        `• *WhatsApp/Telefone:* ${formData.telefone}\n` +
        `• *E-mail:* ${formData.email || "Não informado"}\n\n` +
        `--- \n` +
        `_Enviado via site Vedaquim_`;
      const url = `https://wa.me/5512988121000?text=${encodeURIComponent(textWa)}`;
      window.open(url, "_blank");
    }, 1000);
  };

  const checklistBeneficios = [
    {
      titulo: "Diagnóstico Técnico Gratuito",
      desc: "Nossos engenheiros avaliam a causa raiz das goteiras e trincas sem compromisso."
    },
    {
      titulo: "Laudo Fotográfico Detalhado",
      desc: "Mapeamento completo dos pontos de infiltração na sua laje, garagem ou cobertura."
    },
    {
      titulo: "Orçamento Fechado Sem Surpresas",
      desc: "Preço claro e prazo rigorosamente cumprido em contrato, sem aditivos inesperados."
    },
    {
      titulo: "Garantia Documentada até 15 Anos",
      desc: "Segurança total com acompanhamento e suporte técnico contínuo da nossa equipe."
    }
  ];

  return (
    <section id="contato" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header from Print 1 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>FALE COM UM ESPECIALISTA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solicite sua <span className="text-blue-600">vistoria técnica gratuita.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Sem compromisso. Sem quebra-quebra. Agende a visita do nosso engenheiro no seu imóvel ou condomínio em menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Checklist + Contact info (Print 1 style) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6 flex items-center gap-2.5">
                <ShieldCheck className="w-7 h-7 text-blue-500 shrink-0" />
                <span>O que você ganha com a nossa Vistoria Técnica:</span>
              </h3>

              <div className="space-y-6">
                {checklistBeneficios.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">{item.titulo}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-800/80 p-3 rounded-xl">
                  <Clock className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <span className="text-xs font-bold block text-slate-200">Atendimento em até 15 min</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl">
                  <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <span className="text-xs font-bold block text-slate-200">+2.500 Obras Concluídas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (Print 1 & 2 style) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl">
            {enviado ? (
              <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">Solicitação Recebida com Sucesso!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                    Abrimos o WhatsApp com seus dados pré-preenchidos. Caso a aba não tenha aberto, nosso engenheiro técnico entrará em contato com você via WhatsApp em menos de 15 minutos!
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setEnviado(false);
                      setFormData({ nome: "", email: "", telefone: "" });
                    }}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-full text-sm"
                  >
                    Envie outra mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Preencha o formulário para vistoria</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Seus dados estão protegidos. Resposta garantida em até 15 minutos úteis.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Ex: Carlos Oliveira"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="carlos@exemplo.com.br"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-extrabold py-4 px-8 rounded-full shadow-xl shadow-[#19d10f]/30 hover:shadow-[#19d10f]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 text-base uppercase tracking-wider cursor-pointer"
                  >
                    {loading ? (
                      <span>ENVIANDO SOLICITAÇÃO...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>SOLICITAR VISTORIA GRATUITA AGORA</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-xs text-slate-500 pt-1">
                  🔒 Garantimos o sigilo dos seus dados de acordo com a LGPD. Sem spam.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
