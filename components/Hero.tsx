import React from 'react';
import { HERO_DATA } from '../constants';
import { Ship } from 'lucide-react';

const Hero: React.FC = () => {
  // Split subtitle by comma for symmetric display on two lines
  const subtitleParts = HERO_DATA.subtitle.split('，');

  return (
    <header className="relative bg-white border-b border-slate-200 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/shipyard2/1920/600" 
          alt="Shipyard Background" 
          className="w-full h-full object-cover opacity-10 grayscale" 
        />
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-10 mix-blend-multiply"></div>
      </div>

      <div className="relative z-20 px-6 py-8 md:py-14 md:px-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        
        {/* Title Block */}
        <div className="max-w-4xl flex-1 w-full">
          <div className="flex items-center space-x-3 mb-2 md:mb-4">
             <div className="p-1 md:p-1.5 bg-blue-600 rounded shadow-md shrink-0">
                <Ship className="w-4 h-4 md:w-5 md:h-5 text-white" />
             </div>
             <span className="text-blue-700 font-bold tracking-widest uppercase text-xs md:text-sm whitespace-nowrap">
                芜湖造船厂出品，人船情未了排版
             </span>
             <div className="hidden md:block h-px w-24 bg-blue-300"></div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-none tracking-tight uppercase drop-shadow-sm whitespace-nowrap mt-1 md:mt-0">
            {HERO_DATA.title}
          </h1>
          
          <div className="text-lg md:text-3xl text-slate-500 mt-3 font-light poster-font leading-snug flex flex-col gap-1">
             {subtitleParts.length > 1 ? (
               <>
                 <span className="block">{subtitleParts[0]}</span>
                 <span className="block">{subtitleParts[1]}</span>
               </>
             ) : (
               HERO_DATA.subtitle
             )}
          </div>
        </div>

        {/* Intro Block (Right aligned in poster header) */}
        <div className="md:max-w-md text-slate-600 text-xs md:text-base leading-relaxed border-l-4 border-blue-600 pl-4 bg-slate-50 p-3 md:p-4 rounded-r-lg shadow-sm border border-slate-100 w-full md:w-auto mt-2 md:mt-0">
          {HERO_DATA.intro}
        </div>
      </div>
    </header>
  );
};

export default Hero;