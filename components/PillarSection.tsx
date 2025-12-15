import React from 'react';
import { ReportSection } from '../types';

interface PillarSectionProps {
  data: ReportSection;
  index: number;
}

const PillarSection: React.FC<PillarSectionProps> = ({ data, index }) => {
  const getThemeColors = (theme: string) => {
    switch (theme) {
      // Adjusted for light mode contrast: text-600/700 instead of 400
      case 'teal': return { 
        text: 'text-teal-700', 
        border: 'border-teal-200', 
        bg: 'bg-teal-50', 
        title: 'text-teal-900', 
        icon: 'text-teal-600',
        cardBorder: 'border-teal-100'
      };
      case 'indigo': return { 
        text: 'text-indigo-700', 
        border: 'border-indigo-200', 
        bg: 'bg-indigo-50', 
        title: 'text-indigo-900', 
        icon: 'text-indigo-600',
        cardBorder: 'border-indigo-100'
      };
      case 'blue': default: return { 
        text: 'text-blue-700', 
        border: 'border-blue-200', 
        bg: 'bg-blue-50', 
        title: 'text-blue-900', 
        icon: 'text-blue-600',
        cardBorder: 'border-blue-100'
      };
    }
  };

  const theme = getThemeColors(data.colorTheme);

  return (
    <article className="relative flex flex-col p-6 md:p-8 lg:p-10 group transition-colors hover:bg-slate-50">
      
      {/* Column Header */}
      <div className="mb-8 relative z-10">
        <div className="flex items-center justify-between mb-2 opacity-60">
            <span className="text-6xl font-black text-slate-200 absolute -top-4 -left-2 select-none -z-10">{`0${index + 1}`}</span>
            <span className={`text-xs font-bold tracking-widest uppercase border px-2 py-0.5 rounded bg-white ${theme.text} ${theme.border}`}>{data.category.split('/')[1].trim()}</span>
        </div>
        
        <h2 className={`text-3xl font-bold text-slate-900 mt-4 mb-2`}>
          {data.headline}
        </h2>
        <div className={`h-1 w-12 ${theme.bg.replace('50', '500')} mb-3`}></div>
        <p className="text-slate-500 text-sm leading-snug min-h-[2.5rem]">
          {data.subheadline}
        </p>
      </div>

      {/* Content Items */}
      <div className="space-y-4 flex-grow relative z-10">
        {data.items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className={`poster-card relative p-5 bg-white border ${theme.cardBorder} shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group/card`}
            >
              <div className="poster-border"></div>
              
              <div className="flex items-start gap-4">
                <div className={`mt-1 p-2 rounded bg-slate-50 border border-slate-100 shrink-0`}>
                  <Icon className={`w-5 h-5 ${theme.icon}`} />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 text-slate-800 group-hover/card:text-blue-700 transition-colors`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative Background Icon */}
      <div className="absolute bottom-4 right-4 opacity-[0.03] pointer-events-none text-slate-900">
         {/* Using the first item's icon as a big watermark */}
         {React.createElement(data.items[0].icon, { size: 200, strokeWidth: 0.5 })}
      </div>
    </article>
  );
};

export default PillarSection;