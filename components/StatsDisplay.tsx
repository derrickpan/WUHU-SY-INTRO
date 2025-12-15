import React from 'react';
import { BarChart, Bar, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { STATS_DATA } from '../constants';

const StatsDisplay: React.FC = () => {
  return (
    <section className="bg-slate-100 border-t border-slate-200 p-6 md:p-10 relative overflow-hidden">
      <div className="flex flex-col xl:flex-row gap-8 items-center justify-between relative z-10">
        
        {/* Title Area */}
        <div className="xl:w-1/4 text-center xl:text-left">
            <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-wider mb-2">
                核心数据看板
            </h3>
            <p className="text-slate-500 text-sm">
                Innovation Impact Metrics
            </p>
            <div className="mt-4 flex gap-2 justify-center xl:justify-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse delay-150"></div>
            </div>
        </div>

        {/* Stats Numbers Row */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STATS_DATA.map((stat, index) => (
                <div key={index} className="bg-white border border-slate-200 p-4 rounded shadow-sm relative overflow-hidden group hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="absolute top-0 right-0 p-2 opacity-5 font-black text-6xl leading-none select-none text-slate-900 group-hover:text-blue-600 transition-colors">
                        {index + 1}
                    </div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl md:text-4xl font-bold text-slate-800 font-mono">{stat.value}</span>
                        <span className="text-blue-600 text-sm">{stat.suffix}</span>
                    </div>
                    <p className="text-slate-400 text-[10px] mt-2 leading-tight max-w-[90%]">
                        {stat.description}
                    </p>
                </div>
            ))}
        </div>

        {/* Mini Chart Area */}
        <div className="xl:w-1/4 h-24 w-full hidden sm:block opacity-90">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={STATS_DATA}>
                <Tooltip 
                    cursor={{fill: 'rgba(0,0,0,0.05)'}}
                    contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', fontSize: '12px', color: '#1e293b', borderRadius: '4px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#334155' }}
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                  {STATS_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#2563eb' : index === 1 ? '#0d9488' : '#4f46e5'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
        </div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(15,23,42,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px] opacity-100 pointer-events-none"></div>
    </section>
  );
};

export default StatsDisplay;