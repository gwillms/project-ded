import React, { useState } from 'react';
import { Check, Circle, Clock, ChevronDown, ChevronRight } from 'lucide-react';

interface SubQuest {
  id: string;
  title: string;
  description: string;
}

interface Mission {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'ongoing' | 'future';
  rewards?: string[];
  discoveries?: string[];
  subquests?: SubQuest[];
}

const missions: Mission[] = [
  {
    id: 1,
    title: 'Escolta da Caravana',
    status: 'completed',
    description: 'Levar os enfermos de Valdocampo até Valdoverde.',
    rewards: ['Primeira grande missão do grupo']
  },
  {
    id: 2,
    title: 'Caçada aos Lobos',
    status: 'completed',
    description: 'Eliminar as criaturas que ameaçavam as ovelhas e a principal fonte de alimento de Valdoverde.',
    rewards: ['Recompensa e confiança da cidade conquistadas'],
    discoveries: [
      'Corpo/ossada de Calamar Dagrimor',
      'Carta sobre a Chama Negra e seu grande poder',
      'Capa mágica de Calamar Dagrimor'
    ],
    subquests: [
      {
        id: '2-1',
        title: 'Chama Negra',
        description: 'Investigar demônios e energia negra consumindo a floresta. Poderes fortes impedindo ressurreição.'
      },
      {
        id: '2-2',
        title: 'Calamar Dagrimor',
        description: 'Descobrir mais sobre a capa mágica e seu dono na biblioteca élfica ao norte de Valdoverde.'
      }
    ]
  },
  {
    id: 3,
    title: 'Dungeon da Montanha ao Sul',
    status: 'completed',
    description: 'Explorar a entrada rochosa nas margens do mar, a pedido de Serafim. Ela havia enviado um grupo que não retornou.',
    rewards: [
      'Grupo sobreviveu ao desafio',
      'Grande tesouro adquirido',
      'Mais reconhecimento na cidade'
    ],
    discoveries: [
      'Túnel ligando norte e sul (Valdoverde até biblioteca élfica)',
      'Primeiro contato com a Chama Negra através de portal',
      'Pedra negra com demônio aprisionado',
      'Espada curta negra com poderes de necromancia',
      'Espada de esmeralda'
    ],
    subquests: [
      {
        id: '3-1',
        title: 'Túnel Norte-Sul',
        description: 'Possível abertura de passagem encontrada. Botão descoberto.'
      },
      {
        id: '3-2',
        title: 'Portal da Chama Negra',
        description: 'Portal aberto após derrotar um demônio. Investigar conexão.'
      },
      {
        id: '3-3',
        title: 'Itens Mágicos',
        description: 'Investigar espada negra de necromancia e espada de esmeralda na biblioteca élfica.'
      }
    ]
  },
  {
    id: 4,
    title: 'Ataque ao Hospital de Valdoverde',
    status: 'completed',
    description: 'Proteger o hospital e os enfermos de Valdoverde.',
    rewards: ['Mais notoriedade conquistada'],
    discoveries: [
      'Ligação dos porcos humanóides com abertura do túnel',
      'Carta de Serafim: equipe enviada para sondar (missão muito difícil)'
    ]
  },
  {
    id: 5,
    title: 'O Pedido da Alquimista',
    status: 'completed',
    description: 'Coletar ervas raras para seu trabalho ou investigar o que está acontecendo com seu entregador.',
    rewards: ['Ervas'],
    discoveries: [
      'Localização: pantano a oeste da cidade',
      'Objetivo: retornar a Valdoverde com as especiarias'
    ]
  },
  {
    id: 6,
    title: 'Entrega de Correspondência',
    status: 'ongoing',
    description: 'Entregar uma carta em uma cidade para uma pessoa. Missão do Bacila.'
  },
  {
    id: 7,
    title: 'Biblioteca Élfica',
    status: 'future',
    description: 'Investigar sobre história e poderes dos itens mágicos encontrados.'
  },
  {
    id: 8,
    title: 'Tatuagens Mágicas',
    status: 'future',
    description: 'Orc que está indo para Areia Negra aprender sobre tatuagens mágicas. Missão secundária de Ardor Sailog.'
  },
  {
    id: 9,
    title: 'Chama Negra',
    status: 'future',
    description: 'Investigar floresta negra e Chama Negra, seus poderes de procedência que ainda não foram descobertos. Energia poderosa.'
  }
];

const HistoryPage: React.FC = () => {
  const [expandedMissions, setExpandedMissions] = useState<number[]>([6]);

  const toggleMission = (id: number) => {
    setExpandedMissions(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const getStatusIcon = (status: Mission['status']) => {
    switch (status) {
      case 'completed':
        return <Check className="w-5 h-5 text-white" />;
      case 'ongoing':
        return <Clock className="w-5 h-5 text-white" />;
      case 'future':
        return <Circle className="w-5 h-5 text-white" />;
    }
  };

  const getStatusColor = (status: Mission['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'ongoing':
        return 'bg-blue-500';
      case 'future':
        return 'bg-slate-400';
    }
  };

  const completedMissions = missions.filter(m => m.status === 'completed');
  const ongoingMissions = missions.filter(m => m.status === 'ongoing');
  const futureMissions = missions.filter(m => m.status === 'future');

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">📜 Linha do Tempo das Missões</h1>
          <p className="text-slate-600">A jornada épica do companhia do churrasco</p>
        </div>

        {/* Missões Concluídas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
            <Check className="w-6 h-6" />
            Missões Concluídas ({completedMissions.length})
          </h2>

          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-200"></div>

            <div className="space-y-6">
              {completedMissions.map((mission) => (
                <div key={mission.id} className="relative pl-16">
                  {/* Ícone */}
                  <div className={`absolute left-3 top-3 w-6 h-6 rounded-full ${getStatusColor(mission.status)} flex items-center justify-center border-4 border-white shadow-md`}>
                    {getStatusIcon(mission.status)}
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
                    <button
                      onClick={() => toggleMission(mission.id)}
                      className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-slate-300">#{mission.id}</span>
                        <h3 className="text-lg font-bold text-slate-900">{mission.title}</h3>
                      </div>
                      {expandedMissions.includes(mission.id) ? (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-slate-400" />
                      )}
                    </button>

                    {expandedMissions.includes(mission.id) && (
                      <div className="p-4 pt-0 border-t border-slate-100">
                        <p className="text-slate-700 text-sm mb-4">{mission.description}</p>

                        {mission.rewards && mission.rewards.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-bold text-green-700 mb-2">✅ Recompensas</h4>
                            <ul className="space-y-1">
                              {mission.rewards.map((reward, idx) => (
                                <li key={idx} className="text-sm text-slate-600 pl-4">• {reward}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {mission.discoveries && mission.discoveries.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-bold text-blue-700 mb-2">🔍 Descobertas</h4>
                            <ul className="space-y-1">
                              {mission.discoveries.map((discovery, idx) => (
                                <li key={idx} className="text-sm text-slate-600 pl-4">• {discovery}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {mission.subquests && mission.subquests.length > 0 && (
                          <div>
                            <h4 className="text-sm font-bold text-purple-700 mb-2">🎯 Subquests</h4>
                            <div className="space-y-2">
                              {mission.subquests.map((subquest) => (
                                <div key={subquest.id} className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                                  <h5 className="text-sm font-bold text-purple-900 mb-1">{subquest.title}</h5>
                                  <p className="text-xs text-purple-700">{subquest.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Missão em Andamento */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Missão em Andamento
          </h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="space-y-6">
              {ongoingMissions.map((mission) => (
                <div key={mission.id} className="relative pl-16">
                  <div className={`absolute left-3 top-3 w-6 h-6 rounded-full ${getStatusColor(mission.status)} flex items-center justify-center border-4 border-white shadow-md animate-pulse`}>
                    {getStatusIcon(mission.status)}
                  </div>

                  <div className="bg-white rounded-lg shadow-lg border-2 border-blue-300 overflow-hidden">
                    <div className="bg-blue-50 px-4 py-2 border-b border-blue-200">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-blue-300">#{mission.id}</span>
                        <h3 className="text-lg font-bold text-blue-900">{mission.title}</h3>
                        <span className="ml-auto text-xs font-semibold text-blue-700 bg-blue-200 px-2 py-1 rounded">
                          ATUAL
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-slate-700 text-sm mb-4">{mission.description}</p>

                      {mission.discoveries && mission.discoveries.length > 0 && (
                        <div>
                          <h4 className="text-sm font-bold text-blue-700 mb-2">📍 Informações</h4>
                          <ul className="space-y-1">
                            {mission.discoveries.map((discovery, idx) => (
                              <li key={idx} className="text-sm text-slate-600 pl-4">• {discovery}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Missões Futuras */}
        <section>
          <h2 className="text-2xl font-bold text-slate-600 mb-6 flex items-center gap-2">
            <Circle className="w-6 h-6" />
            Missões Futuras ({futureMissions.length})
          </h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>

            <div className="space-y-6">
              {futureMissions.map((mission) => (
                <div key={mission.id} className="relative pl-16">
                  <div className={`absolute left-3 top-3 w-6 h-6 rounded-full ${getStatusColor(mission.status)} flex items-center justify-center border-4 border-white`}>
                    {getStatusIcon(mission.status)}
                  </div>

                  <div className="bg-white rounded-lg shadow-md border border-slate-200 p-4 opacity-75 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-slate-300">#{mission.id}</span>
                      <h3 className="text-lg font-bold text-slate-700">{mission.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm">{mission.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HistoryPage;
