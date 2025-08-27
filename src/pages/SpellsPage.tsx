import React, { useState } from 'react';
import { Search, Check, Clock, MapPin, Hourglass, User, Hand, Zap } from 'lucide-react';
import spells from '../data/spells.json';

const SpellsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [selectedSchool, setSelectedSchool] = useState<string | 'all'>('all');
  const [selectedClass, setSelectedClass] = useState<string | 'all'>('all');
  const [showOnlyKnown, setShowOnlyKnown] = useState(false);
  const [knownSpells, setKnownSpells] = useState<Set<number>>(new Set());

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
  });

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="w-full mx-auto px-6">
        {/* Header com filtros */}
        <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-semibold text-gray-700">CLASSE</label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">-----</option>
                  {classes.map(className => (
                    <option key={className} value={className}>{className}</option>
                  ))}
                </select>
                <div className='ml-5'>
                <label className="flex items-center space-x-2 cursor-pointer">
                <span className="text-sm font-semibold text-gray-700">Filtrar Conhecidas</span>
                <input
                  type="checkbox"
                  checked={showOnlyKnown}
                  onChange={(e) => setShowOnlyKnown(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>
                </div>

              </div>
            </div>
            
            <div className="flex items-center space-x-4">              
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-gray-700">Conhecidas</span>
                <div className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center text-xs">
                  {knownSpells.size}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
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
          </div>
        </div>

        {/* Seção de nível */}
        <div className="mb-6">
          <div className="bg-gray-400 text-white px-4 py-2 rounded-t font-semibold">
            Nível {selectedLevel === 'all' ? '0' : selectedLevel === 0 ? '0' : selectedLevel}
          </div>

          {/* Grid de cards de magias - cards menores */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 bg-white p-3 rounded-b border border-t-0">
            {filteredSpells.map((spell) => (
              <div
                key={spell.id}
                className={`border rounded p-2 text-xs relative cursor-pointer hover:shadow-md transition-shadow ${
                  knownSpells.has(spell.id) 
                    ? 'border-green-300 bg-green-50' 
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                {/* Botão de conhecida */}
                <div className="absolute top-1 right-1">
                  <button
                    onClick={() => toggleKnownSpell(spell.id)}
                    className={`w-4 h-4 rounded border flex items-center justify-center ${
                      knownSpells.has(spell.id)
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 bg-white hover:border-green-400'
                    }`}
                  >
                    {knownSpells.has(spell.id) && <Check className="h-2.5 w-2.5" />}
                  </button>
                </div>

                {/* Nome da magia */}
                <h3 className="font-bold text-xs text-gray-900 mb-1 pr-6 leading-tight">
                  {spell.name}
                </h3>

                {/* Escola e nível */}
                <p className="text-gray-600 italic text-xs mb-1">
                  {spell.school} {spell.level}
                </p>

                {/* Informações básicas - organizadas em linha */}

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


                {/* Material se existir */}
                {spell.materialComponent && (
                  <div className="mb-1">
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold">Material:</span> {spell.materialComponent}
                    </p>
                  </div>
                )}

                {/* Descrição resumida - ainda mais compacta */}
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

        {/* Mensagem quando não há resultados */}
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