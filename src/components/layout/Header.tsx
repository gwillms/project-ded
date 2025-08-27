import React from 'react';
import { Dice6 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-100 border-b border-slate-300 sticky top-0 z-50 h-14">
      <div className="w-full px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo minimalista */}
          <div className="flex items-center space-x-2">
            <Dice6 className="h-5 w-5 text-red-600" />
            <span className="text-sm font-semibold text-slate-900">D&D Tools</span>
          </div>
          
          {/* Menu simples */}
          <nav className="flex items-center space-x-6">
            <a href="#spells" className="text-sm text-slate-700 hover:text-red-600 transition-colors">
              Magias
            </a>
            <a href="#classes" className="text-sm text-slate-700 hover:text-red-600 transition-colors">
              Classes
            </a>
            <a href="#races" className="text-sm text-slate-700 hover:text-red-600 transition-colors">
              Raças
            </a>
            <a href="#equipment" className="text-sm text-slate-700 hover:text-red-600 transition-colors">
              Equipamentos
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
