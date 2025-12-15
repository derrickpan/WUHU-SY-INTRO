import React from 'react';
import { HERO_DATA } from '../constants';
import { Ship } from 'lucide-react';

const Hero: React.FC = () => {
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

      <div className="relative z-20 px-6 py-10 md:py-14 md:px-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        
        {/* Title Block */}
        <div className="max-w-4xl flex-1">
          <div className="flex items-center space-x-3 mb-4">
             <div className="p-1.5 bg-blue-600 rounded shadow-md">
                <Ship className="w-5 h-5 text-white" />
             </div>
             <span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-sm">2025 中国国际海事展特别报道</span>
             <div className="h-px w-24 bg-blue-300"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-none tracking-tight uppercase drop-shadow-sm">
            {HERO_DATA.title}
          </h1>
          <p className="text-2xl md:text-3xl text-slate-500 mt-2 font-light poster-font">
            {HERO_DATA.subtitle}
          </p>
        </div>

        {/* Intro Block (Right aligned in poster header) */}
        <div className="md:max-w-md text-slate-600 text-sm md:text-base leading-relaxed border-l-4 border-blue-600 pl-4 bg-slate-50 p-4 rounded-r-lg shadow-sm border border-slate-100">
          {HERO_DATA.intro}
        </div>
      </div>
    </header>
  );
};

export default Hero;