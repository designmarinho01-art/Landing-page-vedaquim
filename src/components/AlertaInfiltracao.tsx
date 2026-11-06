import React from "react";
import { AlertTriangle, TrendingDown, ShieldAlert, DollarSign } from "lucide-react";

export const AlertaInfiltracao: React.FC = () => {
  const alertas = [
    {
      numero: "01",
      titulo: "Corrosão de Armadura",
      icon: ShieldAlert,
      descricao: "A umidade ataca diretamente o aço interno do concreto, corroendo a ferragem, comprometendo a segurança da laje e exigindo obras estruturais caríssimas de reforço de fundação."
    },
    {
      numero: "02",
      titulo: "Deterioração Acelerada",
      icon: AlertTriangle,
      descricao: "Trincas se expandem com variações térmicas e a água deteriora o concreto de forma progressiva e irreversível. O que custaria R$ 5.000 para selar hoje pode virar R$ 50.000 em uma reforma amanhã."
    },
    {
      numero: "03",
      titulo: "Desvalorização do Imóvel",
      icon: TrendingDown,
      descricao: "Imóveis residenciais ou comerciais com histórico de infiltração, goteiras, pintura descascada e mofo perdem até 30% do seu valor de mercado imediatamente, afastando compradores e inquilinos."
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Warning Banner Header */}
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-orange-200/80 rounded-3xl p-8 md:p-12 shadow-sm mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wider uppercase mb-4">
              <AlertTriangle className="w-4 h-4 text-orange-600" />
              <span>POR QUE NÃO IGNORAR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Infiltração ignorada hoje <br className="hidden sm:inline" />
              <span className="text-orange-600">custa 10x mais amanhã.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-700 font-normal">
              Cada dia sem tratamento, a umidade avança nas estruturas. O que começa como uma simples mancha se torna um problema estrutural sério, e extremamente caro.
            </p>
          </div>
        </div>

        {/* 3 Alert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {alertas.map((alerta) => {
            const Icon = alerta.icon;
            return (
              <div
                key={alerta.numero}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-orange-100 transition-colors">
                      {alerta.numero}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {alerta.titulo}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {alerta.descricao}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-orange-700">
                  <DollarSign className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Aja antes da reforma estrutural</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
