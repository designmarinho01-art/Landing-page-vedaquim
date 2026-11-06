import React, { useState } from "react";
import { Sparkles, Calculator, Bot, ArrowRight, CheckCircle2, AlertCircle, Clock, DollarSign, ShieldAlert, Wrench, RefreshCw } from "lucide-react";
import { DiagnósticoIAResponse } from "../types";

interface CalculadoraEDiagnosticoIAProps {
  onOpenConsultoria: () => void;
}

export const CalculadoraEDiagnosticoIA: React.FC<CalculadoraEDiagnosticoIAProps> = ({ onOpenConsultoria }) => {
  const [activeTab, setActiveTab] = useState<"calculadora" | "ia">("ia");

  // Calculator State
  const [areaM2, setAreaM2] = useState<number>(120);
  const [tipoImovelCalc, setTipoImovelCalc] = useState<string>("Condomínio Residencial");

  // AI Diagnosis State
  const [tipoImovelIA, setTipoImovelIA] = useState<string>("Condomínio");
  const [idadeImovel, setIdadeImovel] = useState<string>("5 a 15 anos");
  const [localInfiltracao, setLocalInfiltracao] = useState<string>("Laje de Cobertura");
  const [descricaoProblema, setDescricaoProblema] = useState<string>("");
  const [loadingIA, setLoadingIA] = useState<boolean>(false);
  const [resultadoIA, setResultadoIA] = useState<DiagnósticoIAResponse | null>(null);
  const [erroIA, setErroIA] = useState<string | null>(null);

  // Calculate savings logic
  const diasTradicional = Math.max(10, Math.round((areaM2 / 20) * 4));
  const diasVedaquim = Math.max(1, Math.round((areaM2 / 250) * 1.5));
  const economiaFinanceira = Math.round(areaM2 * 145); // estimated savings in R$ from avoided demolition & new tiles

  const handleGerarDiagnostico = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingIA(true);
    setErroIA(null);
    setResultadoIA(null);

    try {
      const response = await fetch("/api/ai-diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipoImovel: tipoImovelIA,
          idadeImovel,
          localInfiltracao,
          descricaoProblema: descricaoProblema || "Infiltração com goteiras e risco de corrosão na laje",
          areaM2
        })
      });

      const data = await response.json();
      if (data.sucesso && data.diagnostico) {
        setResultadoIA(data.diagnostico);
      } else {
        throw new Error(data.erro || "Falha no processamento.");
      }
    } catch (err: any) {
      setErroIA("Não foi possível conectar ao Assistente IA no momento. Por favor, solicite a vistoria gratuita com nosso engenheiro no botão abaixo!");
    } finally {
      setLoadingIA(false);
    }
  };

  return (
    <section id="ia-diagnostico" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold tracking-wider uppercase mb-3 shadow-md">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: "6s" }} />
            <span>TECNOLOGIA INTELIGENTE VEDAQUIM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Diagnóstico por IA & <br className="hidden sm:inline" />
            <span className="text-blue-600">Calculadora de Economia</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Teste gratuitamente nossa inteligência técnica para descobrir a gravidade da sua infiltração e o tempo e dinheiro economizados sem quebra-quebra.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-200/80 p-1.5 rounded-2xl flex max-w-md w-full shadow-inner border border-slate-300/50">
            <button
              onClick={() => setActiveTab("ia")}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                activeTab === "ia"
                  ? "bg-white text-blue-700 shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Bot className="w-4 h-4 text-blue-600" />
              <span>Diagnóstico Técnico IA</span>
            </button>
            <button
              onClick={() => setActiveTab("calculadora")}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                activeTab === "calculadora"
                  ? "bg-white text-blue-700 shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Calculator className="w-4 h-4 text-orange-500" />
              <span>Calculadora de Economia</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-6 sm:p-10 md:p-12">
          
          {/* TAB 1: AI DIAGNOSIS ASSISTANT */}
          {activeTab === "ia" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                    <Bot className="w-6 h-6 text-blue-600" />
                    <span>Assistente Técnico Vedaquim IA</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Preencha os dados abaixo e nosso modelo de engenharia gerará um pré-diagnóstico imediato em segundos.
                  </p>
                </div>

                <form onSubmit={handleGerarDiagnostico} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      1. Tipo de Imóvel ou Obra
                    </label>
                    <select
                      value={tipoImovelIA}
                      onChange={(e) => setTipoImovelIA(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="Condomínio Residencial / Comercial">Condomínio Residencial / Comercial</option>
                      <option value="Garagem ou Subsolo de Condomínio">Garagem ou Subsolo de Condomínio</option>
                      <option value="Indústria / Galpão Logístico">Indústria / Galpão Logístico</option>
                      <option value="Piscina / Reservatório de Água">Piscina / Reservatório de Água</option>
                      <option value="Casa Residencial / Sobrado">Casa Residencial / Sobrado</option>
                      <option value="Ponte / Túnel / Obra de Infraestrutura">Ponte / Túnel / Obra de Infraestrutura</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        2. Idade do Imóvel
                      </label>
                      <select
                        value={idadeImovel}
                        onChange={(e) => setIdadeImovel(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="Até 5 anos (Obra Nova)">Até 5 anos (Obra Nova)</option>
                        <option value="5 a 15 anos">5 a 15 anos</option>
                        <option value="15 a 30 anos">15 a 30 anos</option>
                        <option value="Mais de 30 anos">Mais de 30 anos</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        3. Local Afetado
                      </label>
                      <select
                        value={localInfiltracao}
                        onChange={(e) => setLocalInfiltracao(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="Laje de Cobertura / Terraço">Laje de Cobertura / Terraço</option>
                        <option value="Garagem / Subsolo (Cortina ou Piso)">Garagem / Subsolo (Cortina ou Piso)</option>
                        <option value="Caixa d'água / Piscina">Caixa d'água / Piscina</option>
                        <option value="Junta de Dilatação Trincada">Junta de Dilatação Trincada</option>
                        <option value="Outro (Especificar)">Outro local</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      4. O que você está observando? (Sintomas)
                    </label>
                    <textarea
                      rows={3}
                      value={descricaoProblema}
                      onChange={(e) => setDescricaoProblema(e.target.value)}
                      placeholder="Ex: Goteiras intensas no teto do estacionamento bem em cima dos carros, pintura descascando, calcificação e trincas visíveis..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loadingIA}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2.5 transition-all disabled:opacity-70 text-sm sm:text-base uppercase tracking-wide cursor-pointer"
                  >
                    {loadingIA ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>ANALISANDO COM ENGENHARIA IA...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 fill-white" />
                        <span>GERAR PRÉ-DIAGNÓSTICO TÉCNICO</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Right Side: AI Report Output */}
              <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 min-h-[420px] flex flex-col justify-center">
                {loadingIA && (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto animate-pulse">
                      <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: "3s" }} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">Processando parâmetros com Gemini...</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Consultando banco de dados de 10+ anos de patologias do concreto para gerar o parecer da sua obra.
                    </p>
                  </div>
                )}

                {!loadingIA && !resultadoIA && !erroIA && (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-200 text-slate-500 flex items-center justify-center mx-auto">
                      <Bot className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800">Pronto para a análise técnica</h4>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                      Preencha os dados ao lado e clique em <strong className="text-blue-600 font-bold">"Gerar Pré-Diagnóstico Técnico"</strong> para receber um laudo explicativo da tecnologia de injeção indicada para o seu caso.
                    </p>
                  </div>
                )}

                {erroIA && (
                  <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center space-y-3">
                    <AlertCircle className="w-8 h-8 text-amber-600 mx-auto" />
                    <p className="text-sm font-semibold text-amber-900">{erroIA}</p>
                    <button
                      onClick={onOpenConsultoria}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider"
                    >
                      AGENDAR VISTORIA PRESENCIAL
                    </button>
                  </div>
                )}

                {resultadoIA && !loadingIA && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100/80 px-2.5 py-1 rounded">
                          Parecer Técnico de Inteligência Vedaquim
                        </span>
                        <h4 className="text-xl font-extrabold text-slate-900 mt-1">
                          Diagnóstico da Infiltração
                        </h4>
                      </div>
                      <div className={`px-3 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 ${
                        resultadoIA.gravidade.includes("Crítica") || resultadoIA.gravidade.includes("Alta")
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        <ShieldAlert className="w-4 h-4" />
                        <span>Gravidade: {resultadoIA.gravidade}</span>
                      </div>
                    </div>

                    <div className="space-y-4 text-sm text-slate-700">
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                        <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Causa Provável (Raiz da Patologia)</span>
                        <p className="font-medium text-slate-800 leading-relaxed">{resultadoIA.causaProvavel}</p>
                      </div>

                      <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md">
                        <span className="text-xs font-bold text-blue-200 uppercase block mb-1">Solução Vedaquim Indicada</span>
                        <p className="font-bold text-base">{resultadoIA.solucaoRecomendada}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40">
                          <span className="text-[11px] font-bold text-emerald-800 uppercase flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> Tempo Vedaquim
                          </span>
                          <p className="text-sm font-extrabold text-emerald-900 mt-1">{resultadoIA.tempoObraVedaquim}</p>
                        </div>
                        <div className="bg-white p-3.5 rounded-xl border border-red-200 bg-red-50/40 opacity-90">
                          <span className="text-[11px] font-bold text-red-800 uppercase flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> Reforma Tradicional
                          </span>
                          <p className="text-sm font-bold text-red-900 mt-1 line-through decoration-red-500">{resultadoIA.tempoObraTradicional}</p>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Economia e Valorização</span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-700">{resultadoIA.economiaEstimada}</p>
                      </div>

                      <div className="text-xs text-slate-600 bg-slate-100 p-3.5 rounded-xl border border-slate-200/80 italic">
                        <strong className="text-slate-900 not-italic block mb-0.5">Nota de Engenharia:</strong>
                        {resultadoIA.parecerTecnico}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={onOpenConsultoria}
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 text-sm uppercase tracking-wide cursor-pointer"
                      >
                        <span>AGENDAR VISTORIA COM ESTE DIAGNÓSTICO</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: ROI & TIME CALCULATOR ($m^2$) */}
          {activeTab === "calculadora" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-orange-500" />
                    <span>Calculadora de Economia e Prazo</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Simule a área aproximada da sua laje, garagem ou cobertura e compare o método Vedaquim com a demolição tradicional.
                  </p>
                </div>

                <div className="space-y-6 pt-2">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-bold text-slate-800">
                        Área aproximada a impermeabilizar (m²):
                      </label>
                      <span className="text-2xl font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-xl border border-blue-200">
                        {areaM2} m²
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={1500}
                      step={10}
                      value={areaM2}
                      onChange={(e) => setAreaM2(Number(e.target.value))}
                      className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1">
                      <span>10 m² (Pequeno terraço)</span>
                      <span>500 m² (Garagem)</span>
                      <span>1.500 m² (Grande Cobertura)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Perfil do Imóvel / Obra
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Condomínio Residencial", "Condomínio Comercial", "Galpão Industrial / Logístico", "Residência / Piscina"].map((tipo) => (
                        <button
                          key={tipo}
                          type="button"
                          onClick={() => setTipoImovelCalc(tipo)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold text-left transition-all border ${
                            tipoImovelCalc === tipo
                              ? "bg-blue-50 border-blue-600 text-blue-700 shadow-2xs"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {tipo}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-100 p-4 rounded-xl text-xs text-slate-600 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>O cálculo considera eliminação total de quebra de piso, caçambas, compra e assentamento de nova cerâmica e contrapiso.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Comparative Results Card */}
              <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-6 border border-slate-800">
                <div className="border-b border-slate-800 pb-4">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    Simulação Comparativa para {areaM2} m² ({tipoImovelCalc})
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    Sua Economia com Vedaquim
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                    <span className="text-xs text-slate-400 font-medium block">Reforma com Demolição e Manta</span>
                    <div className="text-2xl sm:text-3xl font-black text-red-400 mt-1">~ {diasTradicional} dias</div>
                    <span className="text-[11px] text-red-300 block mt-1">Entulho, barulho, poeira e quebra de piso</span>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-4 rounded-xl shadow-lg border border-blue-400/30">
                    <span className="text-xs text-blue-100 font-bold block">Injeção Química Vedaquim</span>
                    <div className="text-2xl sm:text-3xl font-black text-white mt-1">{diasVedaquim} a {diasVedaquim + 1} dias</div>
                    <span className="text-[11px] text-emerald-300 font-bold block mt-1">⚡ 0 Entulho • 0 Quebra-Quebra</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-950/80 to-slate-800 p-5 rounded-xl border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                      Economia Financeira Estimada
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                      R$ {economiaFinanceira.toLocaleString("pt-BR")}
                    </div>
                    <span className="text-[10px] text-slate-300">Em custos extras de demolição e recolocação de piso</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xl">
                    💰
                  </div>
                </div>

                <button
                  onClick={onOpenConsultoria}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 text-sm sm:text-base uppercase tracking-wide cursor-pointer"
                >
                  <span>TRAVAR PREÇO E AGENDAR VISTORIA</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
