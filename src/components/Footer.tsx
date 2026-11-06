import React from "react";
import { MapPin, ArrowUp } from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  onOpenConsultoria: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultoria, onOpenPrivacyPolicy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand, Bio & Address */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block">
              <Logo variant="light" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Especialistas em eliminação de infiltrações por injeção química sob pressão desde 2016. Equipamentos e mão de obra próprios.
            </p>

            {/* Address */}
            <div className="flex items-start gap-2.5 pt-1 text-slate-300">
              <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span className="text-xs text-slate-400 leading-relaxed">
                Rua Dr. Monteiro de Godoy, 81<br />
                Bosque da Princesa, Pindamonhangaba/SP<br />
                CEP 12401-390
              </span>
            </div>
          </div>

          {/* Col 2: Soluções */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Especialidades</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#solucoes" className="hover:text-blue-400 transition-colors">Injeção em Lajes e Garagens</a></li>
              <li><a href="#solucoes" className="hover:text-blue-400 transition-colors">Poços de Elevador</a></li>
              <li><a href="#solucoes" className="hover:text-blue-400 transition-colors">Trincas em Cortinas de Concreto</a></li>
              <li><a href="#solucoes" className="hover:text-blue-400 transition-colors">Piscinas e Caixas D'Água</a></li>
              <li><a href="#solucoes" className="hover:text-blue-400 transition-colors">Galpões Industriais e Juntas</a></li>
            </ul>
          </div>

          {/* Col 3: Navegação & Botão Vistoria */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Acesso Rápido</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#vantagens" className="hover:text-blue-400 transition-colors">Como Funciona</a></li>
              <li><a href="#custo-beneficio" className="hover:text-blue-400 transition-colors">Comparativo vs Manta</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Quem Somos</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">Dúvidas Frequentes (FAQ)</a></li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenConsultoria}
                className="w-full bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#19d10f]/20 cursor-pointer"
              >
                Agendar Vistoria
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Vedaquim Impermeabilizações Vendas e Serviços LTDA. Todos os direitos reservados. CNPJ: 40.980.463/0001-81.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={(e) => { e.preventDefault(); onOpenPrivacyPolicy(); }}
              className="hover:text-slate-400 transition-colors cursor-pointer bg-transparent border-none p-0 text-xs"
            >
              Termos de Uso
            </button>
            <button
              onClick={(e) => { e.preventDefault(); onOpenPrivacyPolicy(); }}
              className="hover:text-slate-300 transition-colors cursor-pointer bg-transparent border-none p-0 text-xs font-semibold text-slate-400"
            >
              Política de Privacidade
            </button>
            <button
              onClick={(e) => { e.preventDefault(); onOpenPrivacyPolicy(); }}
              className="hover:text-slate-400 transition-colors cursor-pointer bg-transparent border-none p-0 text-xs"
            >
              LGPD
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-bold ml-2 transition-colors cursor-pointer"
              title="Voltar ao topo"
            >
              <span>Topo</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
