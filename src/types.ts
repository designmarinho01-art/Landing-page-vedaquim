export interface SolucaoTecnica {
  id: string;
  classe: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  aplicacoes: string[];
  imagemUrl: string;
  vantagensEspecíficas: string[];
}

export interface Depoimento {
  id: string;
  nome: string;
  cargo: string;
  cidade: string;
  comentario: string;
  nota: number;
  data: string;
  verificadoGoogle: boolean;
  imagemUrl?: string;
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
  categoria?: string;
}

export interface DiagnósticoIAResponse {
  gravidade: "Baixa" | "Moderada" | "Alta" | "Crítica (Risco Estrutural)";
  causaProvavel: string;
  solucaoRecomendada: string;
  tempoObraVedaquim: string;
  tempoObraTradicional: string;
  economiaEstimada: string;
  parecerTecnico: string;
}
