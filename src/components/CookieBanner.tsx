import React, { useState, useEffect } from "react";
import { ShieldCheck, X, Eye } from "lucide-react";

interface CookieBannerProps {
  onOpenPrivacyPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacyPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("vedaquim_cookies_accepted");
    if (!consent) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("vedaquim_cookies_accepted", "true");
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md lg:max-w-lg z-50 animate-in slide-in-from-bottom-10 duration-500 ease-out">
      <div className="bg-slate-950/95 backdrop-blur-md text-white rounded-2xl p-5 shadow-2xl border border-slate-800/80 relative overflow-hidden flex flex-col gap-4">
        
        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header & Close Icon */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-blue-600/20 text-blue-400 rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold tracking-tight text-white">Privacidade e Cookies</h4>
          </div>
          <button
            onClick={handleDismiss}
            className="text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-full p-1.5 transition-all cursor-pointer"
            aria-label="Ignorar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Explanatory Message */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
          Nós utilizamos cookies essenciais para otimizar a sua experiência de navegação e analisar o tráfego do nosso site com segurança. Ao continuar, você concorda com os termos da nossa{" "}
          <button
            onClick={onOpenPrivacyPolicy}
            className="text-blue-400 hover:text-blue-300 underline font-bold cursor-pointer transition-colors inline-flex items-center gap-0.5"
          >
            Política de Privacidade
          </button>
          .
        </p>

        {/* Actions Button */}
        <div className="flex items-center justify-end gap-3 pt-1 border-t border-slate-900">
          <button
            onClick={onOpenPrivacyPolicy}
            className="text-xs text-slate-400 hover:text-white font-semibold transition-colors px-3 py-2 rounded-lg hover:bg-slate-900 cursor-pointer flex items-center gap-1"
          >
            <Eye className="w-3.5 h-3.5" />
            Visualizar termos
          </button>
          <button
            onClick={handleAccept}
            className="bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white text-xs font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-[#19d10f]/15 cursor-pointer"
          >
            Aceitar e Continuar
          </button>
        </div>

      </div>
    </div>
  );
};
