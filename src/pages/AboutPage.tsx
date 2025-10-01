import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Flame, Ham } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  image: string;
  modalImage?: string;
  description?: string;
  customContent?: React.ReactNode;
}

const ArdorContent = () => (
  <div className="space-y-4">
    <p className="text-slate-700 text-sm leading-relaxed">
      Ardor Sailog V nasceu na Vila do Cedro Roxo, uma pequena comunidade élfica escondida entre as árvores antigas da Floresta Alta. Seu povo vivia em harmonia com a natureza, celebrando a música, os poemas e as tradições ancestrais. Ardor cresceu ouvindo sua mãe recitar versos élficos e cantar canções que falavam do ciclo eterno da vida e da beleza das estrelas.
    </p>
    <p className="text-slate-700 text-sm leading-relaxed">
      Ainda jovem, passava horas correndo pelos campos e observando o reflexo da lua nos rios. Porém, essa tranquilidade não duraria. Aos quarenta anos — ainda adolescente para os padrões élficos — sua vila foi devastada por um ataque orc. Numa noite sem lua, o ferro e o fogo caíram sobre Cedro Roxo. Ardor viu seus pais tombarem diante de si e foi levado acorrentado junto a outros sobreviventes, sem tempo de despedida.
    </p>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">O Cativeiro Orc</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Ardor passou oito anos como escravo dos orcs. Nos primeiros tempos, foi forçado a carregar suprimentos, usado como isca e marcado por queimaduras, além de ter a cabeça raspada em humilhação. Tentou fugir várias vezes, mas sempre era recapturado e brutalmente punido.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mt-2">
        Com o tempo, aprendeu em segredo a língua de seus captores, transformando o conhecimento em arma silenciosa. Foi obrigado a lutar em arenas improvisadas contra outros prisioneiros, sobrevivendo graças à sua agilidade e inteligência. Mais tarde, serviu como tradutor, mas blindou o coração contra súplicas e promessas de resgate.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mt-2">
        Os anos o tornaram frio, paciente e calculista, guardando pequenas esperanças como brasas escondidas. Na oitava primavera, durante uma emboscada, uma gnoma arrombou sua jaula e sussurrou: <em>"Saia agora, corra e não olhe para trás."</em> Ardor correu, deixando sangue e fumaça para trás, mas levando consigo o olhar dela como guia eterno.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">Personalidade</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Ardor é desconfiado, irônico e resiliente. O cativeiro o ensinou a observar em silêncio, medir palavras e confiar apenas em si mesmo. O sofrimento o endureceu, mas também lhe deu uma clareza: sobreviveu para ser livre — e para honrar o gesto da gnoma desconhecida.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">A Marca da Pele</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Ardor nunca mais deixou o cabelo crescer, mantendo a cabeça raspada como lembrança da escravidão. Além disso, transformou seu corpo em um livro de memórias: cada cicatriz ganhou uma tatuagem, cada ferida foi marcada em tinta como símbolo de sobrevivência.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">Motivações</h3>
      <ul className="text-slate-700 text-sm leading-relaxed space-y-1 ml-4">
        <li>• <strong>Sobrevivência:</strong> nunca mais ser capturado ou controlado.</li>
        <li>• <strong>Honra:</strong> viver à altura da coragem da gnoma que o salvou.</li>
        <li>• <strong>Justiça:</strong> atacar correntes e tiranos sempre que possível.</li>
        <li>• <strong>Memória:</strong> carregar sua história na pele e no silêncio.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-8 mb-6">Linha do Tempo</h3>
      <div className="relative pl-8 space-y-6">
        {/* Linha vertical */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-red-400 to-purple-600"></div>

        {/* Infância */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-green-300 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-green-900">0</span>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Infância (0 – 40 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cresceu na Vila do Cedro Roxo, cercado por música, poesia e tradições élficas. Viveu em paz entre rios e florestas, aprendendo a valorizar a beleza das estrelas e da vida simples.
            </p>
          </div>
        </div>

        {/* Juventude */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-red-500 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">41</span>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Juventude - Cativeiro (41 – 48 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Aos 40 anos, sua vila foi destruída em um ataque orc. Perdeu os pais e foi levado como prisioneiro. Viveu oito anos de cativeiro: humilhação, fome, lutas forçadas e torturas moldaram sua mente e corpo. Durante esse tempo, aprendeu a língua dos orcs, endureceu seu espírito e transformou a esperança em resistência silenciosa.
            </p>
          </div>
        </div>

        {/* Libertação */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-amber-500 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">49</span>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Libertação (49 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Durante uma emboscada, um grupo de aventureiros atacou os orcs. Uma gnoma libertou Ardor de sua jaula, devolvendo-lhe a chance de viver. O olhar dela se tornou sua lembrança mais preciosa e a chama que reacendeu sua esperança.
            </p>
          </div>
        </div>

        {/* Vida Errante */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-blue-500 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">50</span>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Vida Errante (50 – 120 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Passou a vagar por estradas e cidades, sobrevivendo como ladrão, contrabandista e mercenário. Nunca deixou o cabelo crescer, mantendo a cabeça raspada como símbolo de sua história. Marcou o corpo com tatuagens sobre cada cicatriz, transformando sua pele em um mapa de memórias.
            </p>
          </div>
        </div>

        {/* Atualidade */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-purple-600 border-4 border-white flex items-center justify-center">
            <span className="text-[7px] font-bold text-white">121</span>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Atualidade (121 anos em diante)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hoje é um ladino errante, desconfiado e resiliente. Não busca glória nem riqueza: seu maior objetivo é viver como a gnoma que o salvou — alguém capaz de arriscar tudo por um estranho. Ardor caminha pelas sombras, tatuando sua vida na pele e gravando em silêncio a história de um sobrevivente.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BruceContent = () => (
  <div className="space-y-4">
    <p className="text-slate-700 text-sm leading-relaxed">
      Bruce Healis nasceu na cidade anã de Grudadin, um lugar onde ouro e fé sempre andaram juntos. Desde criança, foi criado com duas lições: "A fé cura feridas" e "O dinheiro cura tudo."
    </p>
    <p className="text-slate-700 text-sm leading-relaxed">
      Seu pai era um comerciante de gemas que nunca conseguiu enriquecer, e sua mãe, uma mineradora dura como pedra. Bruce cresceu vendo os mais ricos comprarem bênçãos, curas e privilégios, enquanto os pobres dependiam de favores e sobras.
    </p>
    <p className="text-slate-700 text-sm leading-relaxed">
      Ao ver uma epidemia devastar seu distrito, Bruce ainda jovem canalizou sua fé para curar dezenas de feridos, mas só conseguiu salvar os que tinham recursos para comprar ingredientes e doações. Esse choque de realidade marcou sua vida: percebeu que a fé abre as portas, mas o ouro as mantém abertas.
    </p>
    <p className="text-slate-700 text-sm leading-relaxed">
      Hoje, Bruce é um clérigo respeitado, conhecido tanto por sua habilidade em salvar vidas quanto por sua fama de jamais esquecer uma dívida.
    </p>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">Personalidade</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Bruce é um anão extremamente carismático, com uma língua afiada e uma risada grave e contagiante. Ele adora contar histórias exageradas de suas próprias façanhas e sempre encontra uma forma de lembrar que a fé exige investimento, mesmo quando se trata de curar alguém. Apesar de sua ganância, Bruce é genuinamente devoto da vida e acredita que sua missão é preservar e valorizar cada existência — desde que a pessoa saiba o valor disso. Ele combina humor, ironia e pragmatismo, fazendo com que todos o vejam como um curandeiro confiável, mas também esperto e imprevisível.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">Façanha Memorável</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Durante a Batalha do Salão Tilintar, quando goblins invadiram Grudadin, Bruce se viu sozinho em um túnel cheio de feridos e inimigos. Com uma oração rápida, curou simultaneamente dezenas de anões prestes a cair.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mt-2">
        O feito virou lenda porque, em meio ao caos, ele teria dito: <em>"Levanta, irmão! Depois falamos do pagamento."</em>
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mt-2">
        Esse momento fez com que Bruce fosse visto como um verdadeiro curandeiro, mesmo entre os mais cínicos.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">Motivações</h3>
      <ul className="text-slate-700 text-sm leading-relaxed space-y-1 ml-4">
        <li>• <strong>Fé:</strong> Servir ao seu deus da vida e provar que cura é o bem mais poderoso do mundo.</li>
        <li>• <strong>Dinheiro:</strong> Acredita que ouro é a bênção física dos deuses, a prova material da fé.</li>
        <li>• <strong>Sonho:</strong> Construir a Cofraria Eterna, um templo monumental onde fé e fortuna caminham juntas.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-8 mb-6">Linha do Tempo</h3>
      <div className="relative pl-8 space-y-6">
        {/* Linha vertical */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-red-400 to-purple-600"></div>

        {/* Infância e Juventude */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-green-300 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-green-900">0</span>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Infância e Juventude (0 – 40 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nasce em Grudadin, filho de um comerciante frustrado e de uma mineradora. Aprende cedo a importância do ouro: o pai sempre dizia que "uma promessa sem moeda não vale nada". Aos 30, começa a treinar como aprendiz de acólito, aprendendo as primeiras preces de cura.
            </p>
          </div>
        </div>

        {/* Juventude Tardia */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-amber-500 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">41</span>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Juventude Tardia (41 – 75 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Durante uma epidemia nas minas, cura muitos feridos, mas percebe que só os ricos conseguiam sobreviver. Isso marca seu caráter. Desenvolve o hábito de nunca curar sem antes "discutir o valor da bênção". Ganha respeito por sua disciplina e ironia afiada.
            </p>
          </div>
        </div>

        {/* Maturidade */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-red-500 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">76</span>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Maturidade (76 – 100 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Na Batalha do Salão Tilintar, Bruce realiza sua maior façanha até então: com suas preces e poder divino, salva dezenas de anões da morte certa. Depois disso, passa a ser chamado de "O Taxapix". Nessa fase, ele começa a acumular riquezas com um grande objetivo: fundar a Cofraria Eterna — um templo monumental onde cada prego e cada pedra seria paga em moedas de ouro, e onde a fé seria depositada como investimento. O sonho parecia possível… até que uma crise inesperada atingiu Grudadin: os cofres da cidade foram drenados por um escândalo envolvendo apostas ilegais. Desiludido e vendo a cidade desconfiar dele, decide que precisa buscar tesouros fora para provar seu valor e encher seu cofre pessoal.
            </p>
          </div>
        </div>

        {/* Atualidade */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-purple-600 border-4 border-white flex items-center justify-center">
            <span className="text-[7px] font-bold text-white">101</span>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Atualidade (101 – 137 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bruce agora viaja pelo mundo, oferecendo cura, bênçãos e proteção — sempre por um preço "justo". Tornou-se conhecido entre aventureiros como um clérigo confiável, mas mercenário. Ele ainda busca uma grande façanha lendária, algo que garanta não apenas fama eterna, mas também o capital necessário para erguer sua sonhada Cofraria Eterna. Para Bruce, o destino é claro: um dia será lembrado não apenas como um curandeiro, mas como o anão que transformou fé em fortuna e fortuna em fé.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FedrickContent = () => (
  <div className="space-y-4">
    <p className="text-slate-700 text-sm leading-relaxed">
      Fédrick Crowley Tranca Dupla III nasceu em uma antiga comunidade gnômica conhecida por sua tradição em mecânica de precisão e engenhocas. Filho de inventores respeitados, herdou o sobrenome "Tranca Dupla" — um título dado a sua linhagem devido à maestria em construir fechaduras e mecanismos quase impossíveis de arrombar.
    </p>
    <p className="text-slate-700 text-sm leading-relaxed">
      Porém, ao contrário de muitos de sua família, Fédrick nunca se contentou apenas com engrenagens e metais. Desde jovem, desenvolveu uma fascinação pelo que chamava de "a mecânica da vida": a interação entre tecidos vivos, ossos, sangue e engrenagens.
    </p>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">A Fascinação Sombria</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Aos 76 anos, encontrou nos tomos esquecidos de necromancia uma ponte inesperada entre magia e engenharia. Se máquinas podiam imitar a vida, por que não poderiam se fundir a ela? Fédrick passou a realizar experimentos questionáveis — costurando engrenagens a ossos de pequenos animais, criando pequenos corvos mecânicos de penas negras e olhos artificiais, e até mesmo tentando dar movimento a membros de mortos.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mt-2">
        Sua obsessão fez com que fosse expulso de sua comunidade gnômica, acusado de blasfemar contra a "pureza da invenção". Mas Fédrick não se abalou: via a si mesmo como um pioneiro de uma nova era, em que vida e máquina seriam uma só coisa.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">Personalidade</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Fédrick é um gnomo excêntrico, de humor ácido, que alterna entre entusiasmo infantil ao falar de invenções e um cinismo sombrio ao lidar com temas de morte. Para ele, cadáveres não são restos a serem enterrados, mas sim matéria-prima para experimentos. Apesar disso, não se considera maligno: acredita que sua pesquisa serve a um propósito maior — o avanço do conhecimento.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">A Marca do Corvo</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Entre suas criações mais notórias está um corvo híbrido, parcialmente vivo e parcialmente mecânico, que o acompanha em suas viagens. A criatura, chamada apenas de Krohn, é tanto um animal de estimação quanto uma extensão de seus experimentos. O bater de asas de Krohn mistura o som natural de penas com o clique metálico de engrenagens ocultas. O corvo se tornou símbolo de sua pesquisa e parte essencial de sua identidade arcana.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">Motivações</h3>
      <ul className="text-slate-700 text-sm leading-relaxed space-y-1 ml-4">
        <li>• <strong>Exploração:</strong> busca artefatos, cadáveres raros e materiais exóticos para continuar seus experimentos.</li>
        <li>• <strong>Reconhecimento:</strong> deseja provar para o mundo que sua ciência é o futuro, e não apenas um capricho mórbido.</li>
        <li>• <strong>Curiosidade:</strong> não consegue resistir a mecanismos, tumbas antigas ou grimórios de necromancia.</li>
        <li>• <strong>Brio gnômico:</strong> embora afastado de sua comunidade, ainda carrega o orgulho do sobrenome "Tranca Dupla" — odeia que subestimem sua inteligência ou seu ofício.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-8 mb-6">Linha do Tempo</h3>
      <div className="relative pl-8 space-y-6">
        {/* Linha vertical */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-red-400 to-purple-600"></div>

        {/* Infância */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-green-300 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-green-900">0</span>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Infância (0 – 40 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cresceu em uma comunidade gnômica de inventores e mecânicos. Desde cedo demonstrou talento para engrenagens e fechaduras, mas também uma curiosidade incomum pela morte e pelo funcionamento da vida.
            </p>
          </div>
        </div>

        {/* Juventude */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-amber-500 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">41</span>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Juventude (41 – 75 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enquanto sua família aprimorava mecanismos tradicionais, Fédrick começou a estudar corpos de animais e a testar combinações de metal e carne. Descobriu tomos de necromancia antigos que lhe abriram um novo caminho: unir engenharia e magia proibida.
            </p>
          </div>
        </div>

        {/* Maturidade */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-red-500 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">76</span>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Maturidade (76 – 100 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Expulso de sua comunidade por práticas consideradas abomináveis, passou a viver como errante. Nesse período, criou suas primeiras aberrações: pequenos autômatos com ossos e engrenagens, e o protótipo de Krohn, seu corvo híbrido.
            </p>
          </div>
        </div>

        {/* Atualidade */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-purple-600 border-4 border-white flex items-center justify-center">
            <span className="text-[7px] font-bold text-white">101</span>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Atualidade (101 – 132 anos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tornou-se um estudioso errante, colecionador de grimórios, relíquias e peças mecânicas. Já mais experiente e endurecido, busca provar que sua arte não é uma heresia, mas um avanço inevitável. Hoje, viaja com Krohn e seu arsenal de ferramentas e magias, disposto a transformar o mundo em seu grande experimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CarneProfanaContent = () => (
  <div className="space-y-4">
    <p className="text-slate-700 text-sm leading-relaxed">
      Carne Profana não nasceu lobo. Na verdade, poucos sabem o que ele realmente era antes de se tornar a criatura que é hoje. Alguns dizem que foi um druida corrupto, outros afirmam que era apenas um lobo comum amaldiçoado por um ritual profano. O que se sabe é que ele é uma besta selvagem capaz de falar — e suas palavras carregam a sabedoria e a fome de algo muito mais antigo.
    </p>
    <p className="text-slate-700 text-sm leading-relaxed">
      Sua pelagem é de um cinza-escuro mesclado com manchas avermelhadas, como se sangue tivesse sido derramado sobre seu pelo e nunca saído completamente. Seus olhos brilham com uma luz âmbar sinistra, e sua voz é gutural, arrastada, como se cada palavra fosse arrancada das profundezas de sua garganta.
    </p>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">A Maldição da Fala</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Carne Profana fala. Mas não como um bardo fala — ele rosna palavras, cada sílaba carregada de um peso selvagem e um tom de ameaça. Ele usa a linguagem não para encantar, mas para intimidar, zombar ou, ocasionalmente, para expor verdades brutais que ninguém quer ouvir.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mt-2">
        Sua fala é entrecortada, sempre com pausas, como se ele estivesse constantemente lutando entre o instinto animal e a consciência maldita que lhe foi imposta. Alguns acreditam que ele foi punido com a fala para que nunca pudesse esquecer o que perdeu — a paz da bestialidade pura.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">Origem Profana</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Há muitos anos, Carne Profana era parte de uma alcateia que vivia nas Montanhas Cinzentas. Tudo mudou quando um grupo de cultistas realizou um ritual sombrio nas cavernas próximas, invocando forças além da compreensão mortal.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mt-2">
        O ritual falhou — ou talvez tenha dado certo demais. A energia profana vazou pelas rochas e infectou a alcateia. A maioria dos lobos enlouqueceu e se matou entre si. Mas ele... ele sobreviveu. E pior: acordou com pensamentos, memórias fragmentadas e a capacidade de falar.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mt-2">
        Desde então, Carne Profana passou a vagar sozinho, rejeitado por lobos e temido por humanos. Não é mais aceito pela natureza, mas também não pertence à civilização.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">Personalidade</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Carne Profana é cínico, direto e implacável. Ele não tem paciência para eufemismos ou meias-verdades. Se você mente, ele cheira. Se você tem medo, ele sente. E se você é fraco, ele provavelmente vai dizer isso na sua cara — com uma risada rouca.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mt-2">
        Apesar de sua brutalidade verbal, há uma estranha honestidade nele. Ele não trai, não mente e não finge ser algo que não é. Para ele, a fome é sagrada, a força é tudo e a lealdade é conquistada com sangue.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mt-2">
        Ele tem um senso de humor sombrio e gosta de fazer piadas sobre morte, violência e o quão patéticos os "bípedes" podem ser. Mas, de vez em quando, algo próximo à tristeza aparece em seus olhos — um vislumbre do lobo que ele foi antes da maldição.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">A Fome Profana</h3>
      <p className="text-slate-700 text-sm leading-relaxed">
        Carne Profana tem uma fome constante. Não apenas por comida — embora adore carne crua e ossos para roer — mas por algo mais profundo. Uma fome existencial, como se algo dentro dele nunca pudesse ser saciado.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mt-2">
        Alguns dizem que essa fome é parte da maldição: um vazio eterno que o impede de encontrar descanso. Outros acreditam que é o preço que ele paga por ainda estar vivo quando deveria ter morrido junto com sua alcateia.
      </p>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">Motivações</h3>
      <ul className="text-slate-700 text-sm leading-relaxed space-y-1 ml-4">
        <li>• <strong>Sobrevivência:</strong> acima de tudo, Carne Profana quer continuar vivo — nem que seja por pura teimosia.</li>
        <li>• <strong>Vingança:</strong> busca os cultistas responsáveis por sua transformação, ou qualquer vestígio do ritual que o amaldiçoou.</li>
        <li>• <strong>Pertencimento:</strong> embora nunca admita, Carne Profana busca um lugar — ou um bando — ao qual pertencer.</li>
        <li>• <strong>Saciar a Fome:</strong> descobrir o que realmente pode preencher o vazio dentro dele, seja através de batalha, sangue ou redenção.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">Frases Características</h3>
      <ul className="text-slate-700 text-sm leading-relaxed space-y-1 ml-4 italic">
        <li>• "Você cheira a medo. Isso é bom... mantém você honesto."</li>
        <li>• "Fale o que tem a falar. Minhas patas doem e meu estômago ronca."</li>
        <li>• "A fome nunca mente. Nem eu."</li>
        <li>• "Eu já fui livre. Agora... agora só falo demais e caço de menos."</li>
        <li>• "Humanos falam muito. Lobos apenas agem. Eu... estou preso no meio."</li>
      </ul>
    </div>

    <div>
      <h3 className="text-base font-bold text-slate-900 mt-8 mb-6">Linha do Tempo</h3>
      <div className="relative pl-8 space-y-6">
        {/* Linha vertical */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-red-400 to-purple-600"></div>

        {/* Vida Selvagem */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-green-300 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-green-900">?</span>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Vida Selvagem (Origem Desconhecida)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vivia como um lobo comum nas Montanhas Cinzentas, parte de uma alcateia forte e unida. Caçava sob a lua, corria livre pelos vales e conhecia apenas os instintos da matilha. Nenhuma palavra, nenhum pensamento complexo — apenas a pureza da vida selvagem.
            </p>
          </div>
        </div>

        {/* O Ritual */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-red-500 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">!</span>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">O Ritual Profano (Marco da Transformação)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cultistas realizaram um ritual nas cavernas próximas, invocando forças além da compreensão mortal. A energia profana vazou e infectou a alcateia. A maioria dos lobos enlouqueceu e morreu. Carne Profana sobreviveu, mas acordou transformado: com pensamentos, memórias e a maldita capacidade de falar. Rejeitado pela natureza e temido por todos.
            </p>
          </div>
        </div>

        {/* Vagância Solitária */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-amber-500 border-4 border-white flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">~</span>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Vagância Solitária (Anos Incertos)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Passou anos vagando sozinho, sendo caçado por aqueles que o viam como uma aberração e evitado por lobos que sentiam que ele não era mais um deles. Aprendeu a falar melhor, a entender os "bípedes" e a sobreviver em um mundo que o rejeitava. Sua fome cresceu — não apenas por comida, mas por algo que não consegue nomear.
            </p>
          </div>
        </div>

        {/* Atualidade */}
        <div className="relative">
          <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-purple-600 border-4 border-white flex items-center justify-center">
            <span className="text-[7px] font-bold text-white">?</span>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Atualidade (Tempo Desconhecido)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hoje, Carne Profana é uma criatura entre mundos: nem lobo, nem homem, nem besta, nem civilizado. Ele acompanha grupos de aventureiros quando lhe convém, oferecendo sua força, faro e brutalidade em troca de comida, combate e, talvez, respostas. Busca os cultistas que o transformaram — ou qualquer pista sobre como quebrar a maldição que o aprisiona entre a bestialidade e a consciência.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ardor Sailog V',
    image: '/src/assets/ardor.jpg',
    modalImage: '/src/assets/ardor-capa.png',
    description: 'Ardor é elfo de porte firme, cabeça raspada e pele marcada por cicatrizes transformadas em tatuagens. Seus olhos carregam um brilho frio, reflexo da dor que suportou e da determinação que o guia. Veste-se de forma prática, quase sempre em tons escuros, para se misturar às sombras das tavernas e becos onde vive como ladin',
    customContent: <ArdorContent />
  },
  {
    id: 2,
    name: 'Fédrick Crowley Tranca Dupla III',
      image: '/src/assets/fedrick.jpg',
    modalImage: '/src/assets/fedrick-capa.png',
    description: 'Fédrick, de barba ruiva flamejante e olhar astuto atrás de óculos redondos, veste uma túnica azul escura carregada de chaves e ferramentas. Em uma mão segura um grimório marcado por uma caveira, enquanto no ombro repousa Krohn, um corvo híbrido — parte ave, parte mecânico — que o acompanha como sombra e símbolo de seus mistérios.',
    customContent: <FedrickContent />
  },
  {
    id: 3,
    name: 'Bruce Healis',
    image: '/src/assets/bruce.png',
    modalImage: '/src/assets/bruce-capa.png',
    description: 'Bruce é um anão calvo, de pele marcada pelo tempo e pela vida dura nos salões de Grudadin. Sua barba longa e branca é sua maior marca de respeito, cuidadosamente trançada e adornada com pequenas argolas de metal e moedas brilhantes que ele mesmo chama de "orações douradas". Seus olhos carregam uma astúcia viva, como se estivessem sempre calculando o valor de tudo ao redor. Veste túnicas robustas em tons terrosos, reforçadas por couro e detalhes metálicos, sempre bem polidas para transmitir tanto devoção quanto prosperidade. Preso ao peito, exibe o símbolo de sua fé: um círculo de prata com o emblema de duas mãos abertas — mas no centro há uma moeda incrustada, lembrando a todos que em sua visão, fé e fortuna são inseparáveis. Ao caminhar, o tilintar de suas bolsas de moedas anuncia sua chegada tanto quanto suas preces.',
    customContent: <BruceContent />
  },
  {
    id: 4,
    name: "Zyn'dareth",
    image: '/src/assets/zyn.jpg',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 5,
    name: 'Carne Profana',
    image: '/src/assets/cp.jpg',
    description: 'Um lobo amaldiçoado que fala, com pelagem cinza-escura manchada de vermelho e olhos âmbar sinistros. Sua voz é gutural e arrastada, cada palavra arrancada das profundezas. Nem besta, nem civilizado — uma criatura presa entre mundos, movida por uma fome que nunca pode ser saciada e buscando os cultistas que o transformaram.',
    customContent: <CarneProfanaContent />
  }
];

const AboutPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-slate-900 mb-12 flex items-center justify-center gap-3">
          <Flame className="w-8 h-8 text-orange-600" />
          Companhia do Churrasco
          <Ham className="w-8 h-8 text-red-600" />
        </h1>

        {/* Carrossel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Slides */}
          <div className="relative h-[600px] overflow-hidden rounded-2xl bg-white shadow-2xl">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Imagem */}
                  <div className="relative h-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-col h-full p-8 md:p-12 gap-6">
                    <h2 className="text-3xl font-bold text-slate-900">
                      {member.name}
                    </h2>
                    <div className="text-slate-600 text-sm leading-relaxed overflow-y-auto pr-4" style={{ maxHeight: 'calc(100% - 180px)' }}>
                      <p>{member.description || 'Clique em "Ver mais" para conhecer mais sobre este personagem.'}</p>
                    </div>
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold text-sm w-fit"
                    >
                      Ver mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de Navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-slate-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-slate-900" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-slate-900'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal de Detalhes */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Imagem de Header */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={selectedMember.modalImage || selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Botão Fechar */}
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-900" />
                  </button>

                  {/* Nome sobreposto */}
                  <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                    {selectedMember.name}
                  </h2>
                </div>

                {/* Conteúdo */}
                <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                  {selectedMember.customContent ? (
                    selectedMember.customContent
                  ) : (
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {selectedMember.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
