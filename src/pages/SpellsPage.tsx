import React, { useState } from 'react';
import { Search, Check, Clock, MapPin, Hourglass, User, Hand, Zap, Trash2 } from 'lucide-react';
import spells from '../data/spells.json';

const SpellsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [selectedSchool, setSelectedSchool] = useState<string | 'all'>('all');
  const [selectedClass, setSelectedClass] = useState<string | 'all'>('all');
  const [showOnlyKnown, setShowOnlyKnown] = useState(false);
  const [knownSpells, setKnownSpells] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState<'alphabetical' | 'level-alphabetical'>('level-alphabetical');

  const schools = ["abjuração", "adivinhação", "conjuração", "encantamento", "evocação", "ilusão", "necromancia", "transmutação"];
  const classes = ["Bardo", "Clérigo", "Druida", "Feiticeiro", "Mago", "Paladino", "Ranger", "Warlock"];

  const toggleKnownSpell = (spellId: number) => {
    const newKnownSpells = new Set(knownSpells);
    if (newKnownSpells.has(spellId)) {
      newKnownSpells.delete(spellId);
    } else {
      newKnownSpells.add(spellId);
    }
    setKnownSpells(newKnownSpells);
  };

  const clearAllKnownSpells = () => {
    setKnownSpells(new Set());
  };

  // Função para contar magias preparadas por nível
  const getKnownSpellsByLevel = () => {
    const spellsByLevel: { [key: number]: number } = {};
    knownSpells.forEach(spellId => {
      const spell = spells.find(s => s.id === spellId);
      if (spell) {
        const level = Number(spell.level);
        spellsByLevel[level] = (spellsByLevel[level] || 0) + 1;
      }
    });
    return spellsByLevel;
  };

  const knownSpellsByLevel = getKnownSpellsByLevel();

  const getIconFromComponents = (components: string[]): React.ReactNode => {
    const icons: React.ReactNode[] = [];
    if (components.includes('V')) icons.push(<User key="V" className="w-4 h-4 inline-block mr-1" />);
    if (components.includes('S')) icons.push(<Hand key="S" className="w-4 h-4 inline-block mr-1" />);
    if (components.includes('M')) icons.push(<Zap key="M" className="w-4 h-4 inline-block mr-1" />);
    return <>{icons}</>;
  };

  const filteredSpells = spells.filter(spell => {
    const matchesSearch = spell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spell.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || spell.level === selectedLevel;
    const matchesSchool = selectedSchool === 'all' || spell.school === selectedSchool;
    const matchesClass = selectedClass === 'all' || spell.classes.includes(selectedClass);
    const matchesKnown = !showOnlyKnown || knownSpells.has(spell.id);
    
    return matchesSearch && matchesLevel && matchesSchool && matchesClass && matchesKnown;
      }).sort((a, b) => {
      if (sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name, 'pt-BR');
      } else {
        const levelA = Number(a.level);
        const levelB = Number(b.level);

        if (levelA !== levelB) {
          return levelA - levelB;
        }
        return a.name.localeCompare(b.name, 'pt-BR');
      }
    });

  return (
    <div className="bg-gray-50 min-h-screen p-2 sm:p-4">
      <div className="w-full mx-auto px-2 sm:px-6">
        {/* Header com filtros */}
        <div className="bg-white rounded-lg border border-gray-300 p-3 sm:p-4 mb-4 shadow-sm">
          {/* Primeira linha - Classe e Filtrar Preparadas */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-semibold text-gray-700 whitespace-nowrap">CLASSE</label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="flex-1 sm:flex-none px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">-----</option>
                  {classes.map(className => (
                    <option key={className} value={className}>{className}</option>
                  ))}
                </select>
              </div>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Filtrar Preparadas</span>
                <input
                  type="checkbox"
                  checked={showOnlyKnown}
                  onChange={(e) => setShowOnlyKnown(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>
            </div>
          </div>
          
          {/* Segunda linha - Contador de preparadas e botão limpar (mobile: stack vertical) */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
            {/* Contador de magias preparadas por nível */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Preparadas por Nível:</span>
              <div className="flex items-center flex-wrap gap-2">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(level => {
                  const count = knownSpellsByLevel[level] || 0;
                  if (count === 0) return null;
                  return (
                    <div key={level} className="flex items-center gap-1">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full text-white shadow-sm ${
                          level === 0 ? 'bg-gray-600' :
                          level === 1 ? 'bg-blue-500' :
                          level === 2 ? 'bg-green-500' :
                          level === 3 ? 'bg-yellow-500' :
                          level === 4 ? 'bg-orange-500' :
                          level === 5 ? 'bg-red-500' :
                          level === 6 ? 'bg-purple-500' :
                          level === 7 ? 'bg-pink-500' :
                          level === 8 ? 'bg-indigo-500' :
                          'bg-cyan-500'
                        }`}
                      >
                        {level}
                      </span>
                      <span className="text-sm font-semibold text-gray-700">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total e botão limpar */}
            <div className="flex items-center justify-between sm:justify-start gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Total</span>
                <div className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center text-xs font-semibold">
                  {knownSpells.size}
                </div>
              </div>

              {/* Botão para limpar todas as preparadas */}
              {knownSpells.size > 0 && (
                <button
                  onClick={clearAllKnownSpells}
                  className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors whitespace-nowrap"
                  title="Limpar todas as magias preparadas"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Limpar</span>
                </button>
              )}
            </div>
          </div>
          
          {/* Terceira linha - Filtros de busca */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="relative sm:col-span-2 lg:col-span-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar magias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Todos os níveis</option>
              <option value={0}>Truques</option>
              {[1,2,3,4,5,6,7,8,9].map(level => (
                <option key={level} value={level}>Nível {level}</option>
              ))}
            </select>
            
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Todas as escolas</option>
              {schools.map(school => (
                <option key={school} value={school}>{school.charAt(0).toUpperCase() + school.slice(1)}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'alphabetical' | 'level-alphabetical')}
              className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="level-alphabetical">Nível + Alfabética</option>
              <option value="alphabetical">Só Alfabética</option>
            </select>
          </div>
        </div>

        {/* Seção de nível */}
        <div className="mb-6">
          <div className="bg-gray-400 text-white px-4 py-2 rounded-t font-semibold">
            {sortBy === 'alphabetical' 
              ? `Magias (${filteredSpells.length})`
              : `Nível ${selectedLevel === 'all' ? 'Todos' : selectedLevel === 0 ? '0' : selectedLevel} (${filteredSpells.length} magias)`
            }
          </div>

          {/* Grid de cards de magias */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 bg-white p-3 rounded-b border border-t-0">
            {filteredSpells.map((spell) => (
              <div
                key={spell.id}
                onClick={() => toggleKnownSpell(spell.id)}
                className={`border rounded p-2 text-xs relative cursor-pointer hover:shadow-md transition-shadow ${
                  knownSpells.has(spell.id) 
                    ? 'border-green-300 bg-green-50' 
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                {/* Botão de preparada */}
                <div className="absolute top-1 right-1">
                  <button
                    onClick={() => toggleKnownSpell(spell.id)}
                    className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer ${
                      knownSpells.has(spell.id)
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 bg-white hover:border-green-400'
                    }`}
                  >
                    {knownSpells.has(spell.id) && <Check className="h-2.5 w-2.5" />}
                  </button>
                </div>

                {/* Badge do nível */}
                <div className="absolute top-1 left-1">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full text-white shadow-sm ${
                      Number(spell.level) === 0 ? 'bg-gray-600' :
                      Number(spell.level) === 1 ? 'bg-blue-500' :
                      Number(spell.level) === 2 ? 'bg-green-500' :
                      Number(spell.level) === 3 ? 'bg-yellow-500' :
                      Number(spell.level) === 4 ? 'bg-orange-500' :
                      Number(spell.level) === 5 ? 'bg-red-500' :
                      Number(spell.level) === 6 ? 'bg-purple-500' :
                      Number(spell.level) === 7 ? 'bg-pink-500' :
                      Number(spell.level) === 8 ? 'bg-indigo-500' :
                      'bg-cyan-500'
                    }`}
                  >
                    {spell.level}
                  </span>
                </div>

                {/* Nome da magia */}
                <h3 className="font-bold text-xs text-gray-900 mb-1 pr-6 pl-8 leading-tight">
                  {spell.name}
                </h3>

                {/* Escola */}
                <p className="text-gray-600 italic text-xs mb-1 pl-8">
                  {spell.school}
                </p>

                {/* Informações básicas */}
                <div className="space-y-0.5 mb-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {spell.castingTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {spell.range}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{getIconFromComponents(spell.components)} {spell.components.join(', ')}</span>
                    <span className="flex items-center gap-1">
                      <Hourglass className="w-4 h-4" /> {spell.duration}
                    </span>
                  </div>
                </div>

                {/* Material */}
                {spell.materialComponent && (
                  <div className="mb-1">
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold">Material:</span> {spell.materialComponent}
                    </p>
                  </div>
                )}

                {/* Descrição */}
                <p className="text-xs text-gray-600 leading-tight mb-1">
                  {spell.description}
                </p>

                {/* Classes */}
                <div className="text-xs text-gray-500 border-t pt-1">
                  <strong>Classes:</strong> {spell.classes.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredSpells.length === 0 && (
          <div className="text-center py-8 bg-white rounded border">
            <p className="text-gray-500">Nenhuma magia encontrada</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpellsPage;