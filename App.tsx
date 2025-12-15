import React from 'react';
import Hero from './components/Hero';
import PillarSection from './components/PillarSection';
import StatsDisplay from './components/StatsDisplay';
import Footer from './components/Footer';
import { REPORT_SECTIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen py-4 md:py-8 px-2 md:px-4 flex justify-center items-start overflow-x-hidden">
      {/* Poster Container */}
      <div className="max-w-[1600px] w-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-2xl relative rounded-sm overflow-hidden flex flex-col">
        
        {/* Decorative Top Line */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600"></div>

        <main className="flex-grow flex flex-col">
          {/* Header Section */}
          <Hero />
          
          {/* Main Grid Content - 3 Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-slate-200 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 bg-slate-50/50">
            {REPORT_SECTIONS.map((section, index) => (
              <PillarSection 
                key={section.id} 
                data={section} 
                index={index}
              />
            ))}
          </div>

          {/* Bottom Data Section */}
          <StatsDisplay />
        </main>

        <Footer />
        
        {/* Decorative Corner Accents (Fixed to the poster container) */}
        <div className="pointer-events-none absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-600 rounded-tl-sm opacity-60"></div>
        <div className="pointer-events-none absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-600 rounded-tr-sm opacity-60"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-600 rounded-bl-sm opacity-60"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-600 rounded-br-sm opacity-60"></div>
      </div>
    </div>
  );
};

export default App;