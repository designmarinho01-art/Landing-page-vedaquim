import React from "react";
import { LOGOS_CLIENTES } from "../data";
import { ShieldCheck, Award } from "lucide-react";

// Individual Logo Vector Renderers to match original brands perfectly
const BrandLogo: React.FC<{ id: string; className?: string }> = ({ id, className = "" }) => {
  switch (id) {
    case "alstom":
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          <span className="font-extrabold text-lg sm:text-xl tracking-normal text-[#003399]" style={{ fontFamily: "sans-serif" }}>
            ALST
          </span>
          {/* Swirl O */}
          <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-5 h-5 fill-none stroke-[#E61B23]" strokeWidth="15">
              <circle cx="50" cy="50" r="35" strokeDasharray="200" strokeDashoffset="40" />
              <circle cx="50" cy="50" r="20" strokeWidth="10" strokeDasharray="100" strokeDashoffset="10" />
            </svg>
          </div>
          <span className="font-extrabold text-lg sm:text-xl tracking-normal text-[#003399]" style={{ fontFamily: "sans-serif" }}>
            M
          </span>
        </div>
      );

    case "araujo_simao":
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          {/* Blue/Green slash badge */}
          <svg viewBox="0 0 100 80" className="w-8 h-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 10 L 50 10 L 30 70 L -10 70 Z" fill="#0066CC" />
            <path d="M 40 10 L 80 10 L 60 70 L 20 70 Z" fill="#00E600" />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-xs sm:text-sm text-black tracking-tight uppercase leading-none">
              ARAUJO SIMÃO
            </span>
            <span className="text-[7.5px] font-bold text-slate-500 tracking-widest uppercase mt-0.5">
              CONSTRUTORA
            </span>
          </div>
        </div>
      );

    case "cebrace":
      return (
        <div className={`flex flex-col items-center select-none ${className}`}>
          {/* Orange overlapping crescents */}
          <svg viewBox="0 0 100 50" className="w-10 h-6 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 30,25 A 15,15 0 1,1 70,25" stroke="#FF6600" strokeWidth="8" strokeLinecap="round" />
            <path d="M 40,20 A 15,15 0 1,1 80,20" stroke="#FFB300" strokeWidth="8" strokeLinecap="round" />
          </svg>
          <span className="font-bold text-xs text-slate-700 tracking-tight leading-none mt-1">
            cebrace
          </span>
          <span className="text-[6.5px] text-slate-400 italic font-medium leading-none mt-0.5">
            A Marca do Vidro
          </span>
        </div>
      );

    case "espaco_libre":
      return (
        <div className={`flex items-center select-none ${className}`}>
          {/* Red block with grid */}
          <div className="bg-[#E30613] text-white px-3 py-1.5 rounded-xs flex flex-col items-center text-center shadow-2xs border border-[#C2040E]">
            <span className="font-black text-xs tracking-wider uppercase leading-none">
              ESPAÇO LIVRE
            </span>
            <span className="text-[5.5px] font-bold tracking-[0.12em] uppercase text-white/90 mt-0.5">
              CONSTRUÇÕES E INCORPORAÇÕES
            </span>
          </div>
        </div>
      );

    case "excelso":
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          {/* Green columns element */}
          <svg viewBox="0 0 60 60" className="w-7 h-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10,50 Q 15,20 30,15" stroke="#007A33" strokeWidth="5" strokeLinecap="round" />
            <path d="M 22,50 Q 28,25 42,20" stroke="#009A44" strokeWidth="5" strokeLinecap="round" />
            <path d="M 34,50 Q 40,30 54,25" stroke="#00B140" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[7.5px] font-semibold text-slate-500 tracking-widest uppercase">
              CONSTRUTORA
            </span>
            <span className="font-black text-sm text-[#007A33] tracking-tight mt-0.5">
              EXCELSO
            </span>
          </div>
        </div>
      );

    case "gerdau":
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          {/* Blue square with white GG logo */}
          <div className="w-7 h-7 bg-[#004B87] rounded-sm flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-5 h-5 fill-white">
              <path d="M 20,20 L 50,20 L 50,40 L 35,40 L 35,60 L 50,60 L 50,80 L 20,80 Z" />
              <path d="M 80,80 L 50,80 L 50,60 L 65,60 L 65,40 L 50,40 L 50,20 L 80,20 Z" />
            </svg>
          </div>
          <span className="font-black text-base text-[#004B87] tracking-wider" style={{ fontFamily: "sans-serif" }}>
            GERDAU
          </span>
        </div>
      );

    case "hcor":
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          {/* Blue heart hands */}
          <svg viewBox="0 0 100 100" className="w-8 h-8 shrink-0 fill-none stroke-[#005CA9]" strokeWidth="8" strokeLinecap="round">
            <path d="M 30,45 C 30,30 50,30 50,45 C 50,30 70,30 70,45 C 70,65 50,80 50,80 C 50,80 30,65 30,45 Z" />
            <path d="M 40,55 L 45,50 L 55,60" />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="font-extrabold text-base text-[#005CA9] tracking-tight">
              HCor
            </span>
            <span className="text-[5.5px] font-bold text-slate-400 tracking-tight">
              Associação Beneficente Síria
            </span>
          </div>
        </div>
      );

    case "jhsf":
      return (
        <div className={`flex items-center select-none ${className}`}>
          <span className="font-black text-xl tracking-[0.18em] text-black" style={{ fontFamily: "sans-serif" }}>
            JHSF
          </span>
        </div>
      );

    case "katz":
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          {/* Dots grid */}
          <div className="grid grid-cols-4 gap-1 w-6 h-6 shrink-0">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full ${
                  i % 3 === 0 ? "bg-[#FF5500]" : i % 2 === 0 ? "bg-[#1B365D]" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-sm text-[#1B365D] tracking-wider leading-none">
              KATZ
            </span>
            <span className="text-[6.5px] font-bold text-slate-500 tracking-widest uppercase mt-0.5">
              CONSTRUÇÕES
            </span>
          </div>
        </div>
      );

    case "kodak":
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          {/* Classic red Kodak 'K' box */}
          <div className="w-8 h-8 bg-[#E30613] rounded-sm flex items-center justify-center text-white font-black text-xs shrink-0 relative overflow-hidden border border-[#C2040E]">
            <span className="text-[6px] tracking-widest rotate-270 absolute">KODAK</span>
            <div className="absolute right-1 top-1 bottom-1 w-1 bg-[#FFC72C]"></div>
          </div>
          <span className="font-extrabold text-sm text-slate-900 tracking-widest uppercase">
            KODAK
          </span>
        </div>
      );

    case "macro":
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          {/* Orange square M cutout */}
          <div className="w-8 h-8 bg-[#F26F21] rounded-lg flex items-center justify-center text-white shrink-0 shadow-2xs">
            <span className="font-black text-base italic leading-none">M</span>
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-xs text-slate-900 tracking-tight uppercase">
              MACRO
            </span>
            <span className="text-[7px] font-bold text-slate-500 tracking-widest uppercase mt-0.5">
              ENGENHARIA
            </span>
          </div>
        </div>
      );

    case "masb":
      return (
        <div className={`flex flex-col items-center select-none ${className}`}>
          {/* 4 yellow squares with M A S B */}
          <div className="flex gap-0.5">
            {["M", "A", "S", "B"].map((char) => (
              <div
                key={char}
                className="w-5 h-5 bg-[#FFD100] border border-black flex items-center justify-center text-black font-black text-[10px] rounded-xs"
              >
                {char}
              </div>
            ))}
          </div>
          <span className="text-[5.5px] font-bold text-slate-500 tracking-wider uppercase mt-1 leading-none">
            DESENVOLVIMENTO IMOBILIÁRIO
          </span>
        </div>
      );

    case "maxion":
      return (
        <div className={`flex flex-col items-center select-none ${className}`}>
          {/* Blue bar infinity */}
          <div className="w-16 h-3 bg-[#0077C8] rounded-xs flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 50" className="w-8 h-2 fill-white">
              <path d="M 25,25 C 25,15 35,15 40,25 C 45,35 55,35 55,25 C 55,15 45,15 40,25 C 35,35 25,35 25,25 Z" stroke="white" strokeWidth="8" fill="none" />
            </svg>
          </div>
          <span className="font-black text-[10px] text-slate-800 tracking-widest mt-0.5 leading-none">
            MAXION
          </span>
        </div>
      );

    case "melhor_condominio":
      return (
        <div className={`flex flex-col items-center select-none ${className}`}>
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 60 40" className="w-6 h-4 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="20" width="8" height="20" fill="#1B365D" />
              <rect x="22" y="10" width="8" height="30" fill="#1B365D" />
              <rect x="34" y="25" width="8" height="15" fill="#C5A059" />
            </svg>
            <span className="text-[6.5px] font-bold text-[#C5A059] uppercase tracking-wider">PRIME</span>
          </div>
          <span className="text-[8px] font-extrabold text-[#1B365D] tracking-tighter uppercase leading-none">
            Melhor Condomínio
          </span>
        </div>
      );

    case "montante":
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          {/* Columns stairs */}
          <div className="flex items-end gap-0.5 h-6 shrink-0">
            <div className="w-1 bg-[#E30613]" style={{ height: "30%" }}></div>
            <div className="w-1 bg-[#E30613]" style={{ height: "55%" }}></div>
            <div className="w-1 bg-[#E30613]" style={{ height: "80%" }}></div>
            <div className="w-1 bg-[#E30613]" style={{ height: "100%" }}></div>
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-xs text-slate-900 tracking-wider">
              MONTANTE
            </span>
            <span className="text-[5.5px] font-bold text-slate-400 tracking-tight uppercase">
              DESENVOLVIMENTO URBANO
            </span>
          </div>
        </div>
      );

    case "natura":
      return (
        <div className={`flex flex-col items-center select-none ${className}`}>
          {/* Orange smooth flower */}
          <svg viewBox="0 0 100 100" className="w-7 h-7 shrink-0 fill-[#F58220]">
            <path d="M 50,20 C 45,35 35,35 35,50 C 35,65 45,65 50,80 C 55,65 65,65 65,50 C 65,35 55,35 50,20 Z" />
            <path d="M 20,50 C 35,45 35,35 50,35 C 65,35 65,45 80,50 C 65,55 65,65 50,65 C 35,65 35,55 20,50 Z" opacity="0.8" />
          </svg>
          <span className="font-medium text-xs text-slate-700 tracking-wider lowercase mt-0.5">
            natura
          </span>
        </div>
      );

    case "nitro_quimica":
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          {/* Double ring emblem */}
          <div className="relative w-6 h-6 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-[#005596] border-t-transparent border-r-transparent transform -rotate-45"></div>
            <div className="absolute inset-1 rounded-full border border-[#FFC72C] border-b-transparent border-l-transparent transform rotate-45"></div>
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-extrabold text-xs text-[#005596] tracking-tight">
              Nitro Química
            </span>
          </div>
        </div>
      );

    case "novelis":
      return (
        <div className={`flex items-center select-none ${className}`}>
          <span className="font-extrabold text-base tracking-normal text-[#00B300]" style={{ fontFamily: "sans-serif" }}>
            Novelis
          </span>
        </div>
      );

    case "pacto":
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-sm text-[#003580] tracking-tight uppercase">
              PAC<span className="text-[#E30613]">T</span>O
            </span>
            <span className="text-[5.5px] font-bold text-[#E30613] tracking-widest uppercase">
              ADMINISTRADORA
            </span>
          </div>
        </div>
      );

    case "reflora":
      return (
        <div className={`flex flex-col items-center select-none ${className}`}>
          <div className="bg-[#005EA6] px-2 py-0.5 rounded-sm">
            <span className="font-extrabold text-[9px] text-white tracking-widest">
              REFLORA
            </span>
          </div>
          <span className="text-[6px] font-bold text-[#005EA6] tracking-widest uppercase mt-0.5">
            CONSTRUTORA
          </span>
        </div>
      );

    case "sabesp":
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          {/* Water wave emblem */}
          <svg viewBox="0 0 100 100" className="w-6 h-6 shrink-0 fill-none stroke-[#00A3E0]" strokeWidth="12" strokeLinecap="round">
            <path d="M 20,50 C 35,30 35,70 50,50 C 65,30 65,70 80,50" />
            <path d="M 20,70 C 35,50 35,90 50,70 C 65,50 65,90 80,70" opacity="0.6" />
          </svg>
          <span className="font-extrabold text-sm text-slate-900 tracking-tight">
            sabesp
          </span>
        </div>
      );

    case "teixeira_pinto":
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          {/* Green abstract person cross */}
          <svg viewBox="0 0 100 100" className="w-6 h-6 shrink-0 fill-[#004E32]">
            <circle cx="50" cy="25" r="12" />
            <path d="M 25,50 L 75,50 L 60,90 L 40,90 Z" />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="font-extrabold text-[8px] text-[#004E32] tracking-widest uppercase leading-none">
              TEIXEIRA PINTO
            </span>
            <span className="text-[5.5px] font-semibold text-slate-400 uppercase mt-0.5 leading-none">
              ENGENHARIA
            </span>
          </div>
        </div>
      );

    default:
      return <span className="font-bold text-slate-800">{id.toUpperCase()}</span>;
  }
};

export const EmpresasAtendidas: React.FC = () => {
  // Let's divide the 22 client logos into two lanes of 11 logos each to make the layout extremely dynamic and beautiful
  const halfCount = Math.ceil(LOGOS_CLIENTES.length / 2);
  const row1 = LOGOS_CLIENTES.slice(0, halfCount);
  const row2 = LOGOS_CLIENTES.slice(halfCount);

  // We duplicate each array to ensure the sliding loop is continuous and seamless
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/80 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3 border border-blue-100">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PORTFÓLIO CORPORATIVO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quem confia na <span className="text-blue-600">Vedaquim.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            Atendemos as maiores construtoras, indústrias, shoppings e condomínios do Brasil. 
            Garantimos excelência em impermeabilização definitiva para qualquer tamanho de projeto.
          </p>
        </div>
      </div>

      {/* Marquee Carousel Container */}
      <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[100vw]">
        
        {/* Row 1: Sliding Left */}
        <div className="w-full relative flex items-center overflow-hidden">
          <div className="flex gap-4 md:gap-6 w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing px-4">
            {duplicatedRow1.map((client, idx) => (
              <div
                key={`row1-${client.id}-${idx}`}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-blue-300 hover:scale-102 transition-all duration-300 flex items-center justify-center p-6 w-44 sm:w-52 h-20 sm:h-24 shrink-0"
              >
                <BrandLogo id={client.id} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Sliding Right (Reverse) */}
        <div className="w-full relative flex items-center overflow-hidden">
          <div className="flex gap-4 md:gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing px-4">
            {duplicatedRow2.map((client, idx) => (
              <div
                key={`row2-${client.id}-${idx}`}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-blue-300 hover:scale-102 transition-all duration-300 flex items-center justify-center p-6 w-44 sm:w-52 h-20 sm:h-24 shrink-0"
              >
                <BrandLogo id={client.id} />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center">
          <p className="text-xs text-slate-500 font-medium flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Atendimento técnico corporativo, condomínios residenciais e indústrias com conformidade total às normas ABNT.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
