import { GraduationCap } from 'lucide-react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="pt-10 pb-8 px-4 text-center">
    
      {/* Logo */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-20 h-20 bg-amber-300 rounded-full flex items-center justify-center text-5xl shadow-lg border-4 border-white transform hover:scale-110 transition-transform cursor-pointer">
          🦉
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-2 tracking-tight">
        Tiny<span className="text-teal-500">Tutor</span>
      </h1>
      
      <p className="text-lg text-slate-500 font-semibold max-w-xl mx-auto flex items-center justify-center gap-2">
        <GraduationCap className="w-5 h-5 text-amber-400" />
        AI Agentic Educational Media Generator
      </p>
    </header>
  );
};

export default Header;