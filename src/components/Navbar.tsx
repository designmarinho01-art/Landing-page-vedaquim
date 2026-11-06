import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenConsultoria: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultoria }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo VEDAQUIM */}
        <a
          href="#inicio"
          className="group focus:outline-none"
        >
          <Logo variant="dark" />
        </a>

        {/* Header CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConsultoria}
            className="bg-[#19d10f] hover:bg-[#16be0d] active:bg-[#13980a] text-white font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg shadow-[#19d10f]/25 hover:shadow-[#19d10f]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white animate-bounce" />
            <span className="hidden xs:inline">Falar Com Especialista</span>
            <span className="xs:hidden">WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
};
