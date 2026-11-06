import { SolucaoTecnica, Depoimento, FaqItem } from "./types";
import lajesCoberturasImg from "./assets/images/lajes_coberturas_1783523164851.jpg";
import sobreNosImg from "./assets/images/sobre_nos_1783437484618.jpg";
import sobreNosCleanImg from "./assets/images/sobre_nos_clean_1783437695746.jpg";
import sobreNosFinalImg from "./assets/images/sobre_nos_final_1783437879555.jpg";

export const SOLUCOES_TECNICAS: SolucaoTecnica[] = [
  {
    id: "classe-a",
    classe: "CLASSE A",
    titulo: "Lajes e Coberturas",
    subtitulo: "Impermeabilização de lajes planas, inclinadas, terraços e coberturas sem quebrar o piso",
    descricao: "As lajes de cobertura estão expostas a sol, chuva e variações térmicas constantes que causam dilatação e retração do concreto. A impermeabilização tradicional exige quebrar todo o piso e contrapiso. Com o sistema Vedaquim de Injeção Química Sob Pressão (INJESEAL e gel acrílico ou resina acrílica), injetamos a resina diretamente nas trincas e porosidades, selando a laje na raiz sem nenhuma demolição.",
    aplicacoes: [
      "Lajes de cobertura residenciais e de condomínios",
      "Terraços gourmet e áreas de lazer com piso cerâmico",
      "Jardineiras e floreiras suspensas",
      "Calhas de concreto e telhados industrializados",
      "Marquises e passarelas externas"
    ],
    imagemUrl: lajesCoberturasImg,
    vantagensEspecíficas: [
      "Preserva 100% do revestimento existente (pisos, porcelanatos, pedras)",
      "Cura rápida em até 24 horas, liberando o tráfego rapidamente",
      "Acompanha a movimentação térmica natural da laje sem trincar",
      "Eliminação definitiva de goteiras no andar inferior"
    ]
  },
  {
    id: "classe-b",
    classe: "CLASSE B",
    titulo: "Subsolos e Garagens",
    subtitulo: "Contenção de água em estruturas abaixo do nível do solo e pressão hidrostática negativa",
    descricao: "Garagens e subsolos sofrem com a pressão do lençol freático e umidade do solo, que atravessam cortinas de contenção e pisos, gerando poças, mofo e calcificação. A injeção de gel hidroativado de alto desempenho entra em contato com a água dentro da parede ou piso, expandindo em até 30 vezes e bloqueando o fluxo de água instantaneamente.",
    aplicacoes: [
      "Garagens subterrâneas em condomínios e shoppings",
      "Paredes de cortina e muros de arrimo",
      "Fossos de elevador com acúmulo de água",
      "Juntas de concretagem em poços de visita",
      "Galerias técnicas e túneis de utilidades"
    ],
    imagemUrl: sobreNosImg,
    vantagensEspecíficas: [
      "Atua mesmo com vazamento de água ativo sob alta pressão",
      "Evita a corrosão da armadura e colapso estrutural da fundação",
      "Elimina o aspecto de caverna úmida e cheiro de mofo na garagem",
      "Sem necessidade de escavar a terra na parte externa"
    ]
  },
  {
    id: "classe-c",
    classe: "CLASSE C",
    titulo: "Reservatórios e Piscinas",
    subtitulo: "Vedação na estrutura de concreto de reservatórios, caixas d'água e piscinas",
    descricao: "Vazamentos na estrutura de concreto de caixas d'água, castelos elevados e piscinas representam um prejuízo financeiro diário por perda de água e risco de infiltração nas estruturas vizinhas. Injetamos resinas indicadas para estruturas de concreto que armazenam água, com alta resistência mecânica para selar trincas estruturais e juntas de dilatação de dentro para fora.",
    aplicacoes: [
      "Estruturas de concreto de reservatórios superiores e inferiores",
      "Piscinas de concreto de condomínios, clubes e residências",
      "Castelos d'água elevados e tanques industriais de concreto",
      "Juntas de dilatação e fissuras em reservatórios de água",
      "Espelhos d'água e fontes decorativas de concreto"
    ],
    imagemUrl: sobreNosCleanImg,
    vantagensEspecíficas: [
      "Injeção no interior da estrutura de concreto do reservatório",
      "Resinas indicadas para estruturas de concreto que armazenam água",
      "Interrupção mínima do fornecimento de água no condomínio",
      "Alta resistência mecânica ao peso da coluna d'água"
    ]
  },
  {
    id: "classe-d",
    classe: "CLASSE D",
    titulo: "Estruturas Especiais",
    subtitulo: "Pontes, túneis, viadutos, usinas e instalações industriais de alta criticidade",
    descricao: "Obras de infraestrutura exigem rigor técnico máximo. Nossa engenharia atende indústrias pesadas, concessionárias de rodovias e metrôs com injeção de resinas técnicas de alto desempenho para recomposição estrutural e fluidos de ultra-baixa viscosidade para microfissuras profundas no maciço de concreto.",
    aplicacoes: [
      "Pontes, viadutos e passarelas rodoviárias/ferroviárias",
      "Túneis rodoviários e metroviários",
      "Estruturas portuárias e marítimas",
      "Pisos industriais de alto tráfego (empilhadeiras e carretas)",
      "Barragens de usinas hidrelétricas e estruturas de apoio"
    ],
    imagemUrl: sobreNosFinalImg,
    vantagensEspecíficas: [
      "Equipamentos e compressores próprios para injeção contínua em alto volume",
      "Equipe técnica certificada para trabalho em altura (NR-35) e espaço confinado (NR-33)",
      "Restauração do monolitismo estrutural do concreto com resinas estruturais de alto desempenho",
      "Conformidade total com normas ABNT NBR 11905 e NBR 9575"
    ]
  }
];

export const DEPOIMENTOS_CLIENTES: Depoimento[] = [
  {
    id: "1",
    nome: "Thiago Marcondes",
    cargo: "Administrador de Condomínio",
    cidade: "Pindamonhangaba - SP",
    comentario: "Empresa extremamente profissional! Resolveram um problema crônico de infiltração na laje da garagem do nosso condomínio que já durava anos e nenhuma outra empresa conseguia solucionar. O engenheiro foi muito atencioso na vistoria e a equipe técnica trabalhou com muita limpeza e agilidade. Sem quebra-quebra, sem entulho, serviço nota 1000!",
    nota: 5,
    data: "há 2 semanas",
    verificadoGoogle: true,
    imagemUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "2",
    nome: "Ana Cláudia Fonseca",
    cargo: "Proprietária Residencial",
    cidade: "Taubaté - SP",
    comentario: "Excelente atendimento do início ao fim. Estava muito preocupada com o quebra-quebra para arrumar a infiltração da laje da minha área de lazer, mas com a tecnologia de injeção química deles foi super rápido, sem sujeira e resolveu de verdade. Os técnicos são super educados e caprichosos. Super recomendo!",
    nota: 5,
    data: "há 1 mês",
    verificadoGoogle: true,
    imagemUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "3",
    nome: "Ricardo Mendes de Souza",
    cargo: "Engenheiro Civil",
    cidade: "São José dos Campos - SP",
    comentario: "Sou engenheiro e contratei a Vedaquim para solucionar uma infiltração complexa em um subsolo comercial. A técnica de injeção sob pressão foi executada com precisão cirúrgica. Excelente monolitismo estrutural e estanqueidade imediata. Recomendo de olhos fechados pelo alto nível técnico e equipamentos modernos.",
    nota: 5,
    data: "há 3 semanas",
    verificadoGoogle: true,
    imagemUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "4",
    nome: "Cláudia Regina",
    cargo: "Síndica de Condomínio",
    cidade: "Pindamonhangaba - SP",
    comentario: "Contratamos a Vedaquim para fazer a impermeabilização da caixa d'água e de pontos críticos da nossa garagem subterrânea. O comprometimento, pontualidade e transparência da empresa são admiráveis. O resultado foi espetacular, as goteiras sumiram por completo. Parabéns a toda equipe!",
    nota: 5,
    data: "há 2 meses",
    verificadoGoogle: true,
    imagemUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "5",
    nome: "Bruno Alvarenga",
    cargo: "Proprietário de Cobertura",
    cidade: "Tremembé - SP",
    comentario: "Serviço fantástico! Eu já tinha feito três impermeabilizações tradicionais na laje da minha cobertura e todas voltaram a vazar depois de algum tempo. A Vedaquim veio, identificou os pontos exatos e resolveu definitivamente com a injeção. Uma economia enorme de tempo e dinheiro por não precisar quebrar o porcelanato caro. Nota dez!",
    nota: 5,
    data: "há 1 mês",
    verificadoGoogle: true,
    imagemUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "6",
    nome: "Marcos Roberto Silva",
    cargo: "Gerente de Manutenção",
    cidade: "Pindamonhangaba - SP",
    comentario: "Empresa séria e de muita confiança. Fizeram a impermeabilização de uma bacia de contenção e juntas de dilatação na nossa fábrica. Trabalho impecável, seguindo todas as normas de segurança rigorosamente. O atendimento pós-venda deles é excelente. Com certeza faremos novas parcerias.",
    nota: 5,
    data: "há 3 meses",
    verificadoGoogle: true,
    imagemUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const LOGOS_CLIENTES = [
  { id: "alstom", nome: "Alstom" },
  { id: "araujo_simao", nome: "Araujo Simão" },
  { id: "cebrace", nome: "Cebrace" },
  { id: "espaco_libre", nome: "Espaço Livre" },
  { id: "excelso", nome: "Excelso" },
  { id: "gerdau", nome: "Gerdau" },
  { id: "hcor", nome: "HCor" },
  { id: "jhsf", nome: "JHSF" },
  { id: "katz", nome: "Katz" },
  { id: "kodak", nome: "Kodak" },
  { id: "macro", nome: "Macro Engenharia" },
  { id: "masb", nome: "MASB" },
  { id: "maxion", nome: "Maxion" },
  { id: "melhor_condominio", nome: "Melhor Condomínio" },
  { id: "montante", nome: "Montante" },
  { id: "natura", nome: "Natura" },
  { id: "nitro_quimica", nome: "Nitro Química" },
  { id: "novelis", nome: "Novelis" },
  { id: "pacto", nome: "Pacto" },
  { id: "reflora", nome: "Reflora" },
  { id: "sabesp", nome: "Sabesp" },
  { id: "teixeira_pinto", nome: "Teixeira Pinto" }
];

export const FAQ_ITENS: FaqItem[] = [
  {
    categoria: "Tecnologia",
    pergunta: "O que é impermeabilização por injeção química sob pressão?",
    resposta: "É um método não-destrutivo baseado em tecnologia alemã, utilizando a formulação exclusiva INJESEAL desenvolvida e fabricada no Brasil pela Vedaquim. A resina ou gel especial é injetada no interior das fissuras e poros do concreto sob alta pressão. O produto reage dentro da estrutura com uma elasticidade de até 300%, preenchendo todas as microcavidades de dentro para fora e eliminando a infiltração naquele ponto, com garantia de até 15 anos em contrato."
  },
  {
    categoria: "Diferencial",
    pergunta: "Por que a Vedaquim é diferente das outras empresas tradicionais de manta ou pintura?",
    resposta: "A impermeabilização tradicional (mantas asfálticas ou tintas superficiais) apenas cria uma película externa que se rompe com o tempo e exige demolição do piso existente (quebra-quebra, barulho e entulho). A Vedaquim atua na raiz do problema: não quebramos seu piso ou revestimento. Injetamos sob pressão no interior da própria estrutura de concreto, preenchendo e selando trincas e poros de dentro para fora, com durabilidade e garantia de até 15 anos em contrato."
  },
  {
    categoria: "Obra",
    pergunta: "É necessário quebrar pisos, azulejos ou contrapiso para fazer a injeção?",
    resposta: "Não! Esse é o nosso maior diferencial: ZERO QUEBRA-QUEBRA. Fazemos apenas pequenos furos de 10mm a 13mm em pontos estratégicos para inserir os bicos injetores. Ao final do serviço, os bicos são removidos, os furos são perfeitamente selados com argamassa técnica e a área é limpa sem deixar vestígios ou entulho."
  },
  {
    categoria: "Prazo e Preço",
    pergunta: "Quanto custa o serviço de injeção química em comparação à reforma tradicional?",
    resposta: "A injeção química sob pressão costuma gerar uma economia global de 40% a 70% em relação ao método tradicional de impermeabilização (com demolição e manta asfáltica). Isso ocorre porque você elimina custos altíssimos com demolição, caçambas de entulho, compra de novo contrapiso, compra e assentamento de novos revestimentos cerâmicos e semanas de mão de obra. Além disso, uma obra que duraria 20 dias com manta é concluída em 1 a 3 dias úteis com a Vedaquim."
  },
  {
    categoria: "Garantia",
    pergunta: "Qual a garantia do serviço e os produtos são seguros para saúde e meio ambiente?",
    resposta: "Oferecemos garantia documentada em contrato que pode chegar a até 15 anos, com acompanhamento técnico contínuo e suporte pós-obra sem burocracia. Nossos produtos INJESEAL são atóxicos e indicados para estruturas de concreto que armazenam água, não exalam cheiros fortes durante a cura e não agridem o meio ambiente, pois evitam o descarte de toneladas de entulho na natureza."
  },
  {
    categoria: "Atendimento",
    pergunta: "Vocês realizam vistoria técnica presencial e em quais tipos de imóveis?",
    resposta: "Sim! Realizamos Vistoria Técnica Gratuita em condomínios residenciais e comerciais, indústrias, shoppings, centros logísticos, galpões, residências e obras públicas em todo o território nacional, com forte presença em São Paulo, Rio de Janeiro, Minas Gerais e Paraná. Nossos engenheiros comparecem com equipamentos de diagnóstico para emitir laudo preciso."
  },
  {
    categoria: "Obra",
    pergunta: "Quanto tempo dura o serviço de impermeabilização na minha laje ou garagem?",
    resposta: "A grande maioria dos serviços em condomínios, lajes e garagens é concluída em um prazo que varia de 1 a 3 dias, dependendo da extensão em metros quadrados e da quantidade de trincas ativas. A liberação do local para tráfego de pessoas e veículos é extremamente rápida após a cura do produto (geralmente em 12 a 24 horas)."
  },
  {
    categoria: "Atendimento",
    pergunta: "Como faço para solicitar o orçamento ou agendar a vistoria gratuita?",
    resposta: "Basta preencher o formulário no final desta página, chamar diretamente no botão do WhatsApp ou ligar para nosso atendimento técnico. Um de nossos especialistas entrará em contato em menos de 15 minutos para agendar a visita do engenheiro responsável sem nenhum custo ou compromisso."
  }
];
