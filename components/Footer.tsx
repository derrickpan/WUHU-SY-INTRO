import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-3 px-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-slate-500">
      <div>
         Wuhu Shipyard Innovation Report 2025
      </div>
      <div className="flex gap-4 mt-2 md:mt-0">
         <span>Visualization</span>
         <span>•</span>
         <span>Digital Poster Series</span>
      </div>
    </footer>
  );
};

export default Footer;