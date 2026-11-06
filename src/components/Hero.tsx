import React from "react";
import { MessageCircle, ShieldCheck, Award, Sparkles, Layers, Building2, Wrench } from "lucide-react";
import heroCollageImg from "../assets/images/sobre_nos_clean_collage_1783950457636.jpg";

interface HeroProps {
  onOpenConsultoria: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultoria }) => {
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background Architectural/Engineering subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Subtle Blue Glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline from Print 1 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>TECNOLOGIA DE INJEÇÃO QUÍMICA SOB PRESSÃO</span>
            </div>

            {/* Main Title from Print 1 styled as Print 2 (com tamanho de fonte ajustado para melhor harmonia) */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Impermeabilização de Laje: <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
                Solução Definitiva
              </span>{" "}
              com Injeção Química Sob Pressão.
            </h1>

            {/* Subtitle from Print 1 */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Chega de transtornos com infiltrações! Nossa impermeabilização para laje atua na raiz do problema, resolvendo vazamentos e trincas <span className="font-semibold text-slate-900 underline decoration-orange-500 decoration-2">sem quebra-quebra</span>.
            </p>

            {/* Action Buttons (Apenas botão principal de CTA laranja) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultoria}
                className="w-full sm:w-auto bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-extrabold px-8 py-4 rounded-full shadow-xl shadow-[#19d10f]/30 hover:shadow-[#19d10f]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 text-base sm:text-lg group cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" />
                <span>SOLUÇÃO DEFINITIVA PARA INFILTRAÇÕES</span>
              </button>
            </div>

            {/* Quick trust badge */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Atendimento em São Paulo e em todo o Brasil • Vistoria Técnica Gratuita</span>
            </div>

          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background border frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-orange-500/20 rounded-3xl blur-xl transform -rotate-1" />
              
              {/* Image Container with clean white border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src={heroCollageImg}
                  alt="Engenheiro Vedaquim realizando injeção química sob alta pressão em laje de concreto"
                  className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Floating Stats Bar (Combining exact Print 1 and Print 2 stats!) */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            <div className="flex items-center gap-4 pt-2 sm:pt-0">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">+ 2.500</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Obras Realizadas com sucesso</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-8">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">5 a 15 anos</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">De garantia</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:pl-8">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">10 anos</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">De experiência (desde 2016)</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:pl-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-emerald-700 tracking-tight whitespace-nowrap">Zero</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Quebra-quebra / 100% Satisfação</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
