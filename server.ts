import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper function for lazy GenAI client initialization
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({ apiKey });
}

// API endpoint for AI Technical Diagnosis (Assistente IA Vedaquim)
app.post("/api/ai-diagnostico", async (req, res) => {
  try {
    const { tipoImovel, idadeImovel, localInfiltracao, descricaoProblema, areaM2 } = req.body;

    const ai = getGenAI();
    if (!ai) {
      // Fallback if API key is not configured yet
      return res.json({
        sucesso: true,
        diagnostico: {
          gravidade: "Moderada a Alta",
          causaProvavel: "Fissuração capilar no concreto ou falha de junta com penetração ativa de água sob pressão hidrostática.",
          solucaoRecomendada: "Injeção Química de Resina de Poliuretano (PU) ou INJESEAL sob alta pressão para preenchimento integral das cavidades sem demolição.",
          tempoObraVedaquim: "1 a 3 dias úteis (Zero Quebra-Quebra)",
          tempoObraTradicional: "15 a 25 dias (Demolição, remoção de entulho e nova manta)",
          economiaEstimada: "Economia média de 40% a 60% em custos totais de reforma estrutural e entulho.",
          parecerTecnico: `Com base nas informações do imóvel (${tipoImovel}, área de aprox. ${areaM2 || "N/A"}m² com problema em: ${localInfiltracao}), recomendamos a vistoria técnica presencial com ultrassom e mapeamento de fissuras para aplicação imediata do sistema sob pressão Vedaquim. A impermeabilização tradicional exigiria demolição do piso e contrapiso, enquanto a tecnologia Vedaquim sela o vazamento na raiz de dentro para fora.`
        }
      });
    }

    const prompt = `Você é o Engenheiro Técnico Sênior especialista da VEDAQUIM, líder em Impermeabilização de Laje e Estruturas de Concreto com Injeção Química Sob Pressão no Brasil desde 2016.
O cliente enviou os seguintes dados do problema de infiltração na edificação:
- Tipo de Imóvel: ${tipoImovel || "Não informado"}
- Idade estimada da edificação: ${idadeImovel || "Não informado"}
- Local principal da infiltração/vazamento: ${localInfiltracao || "Laje / Cobertura"}
- Área aproximada afetada: ${areaM2 || "Não informada"} m²
- Descrição detalhada do problema (goteiras, trincas, mofo, poças, corrosão): ${descricaoProblema || "Infiltração contínua na laje com risco estrutural"}

Com base no sistema Vedaquim de Injeção Química Sob Pressão (sem quebra-quebra, tecnologia limpa, garantia de até 15 anos, resinas INJESEAL e gel de alta performance), gere um pré-diagnóstico técnico profissional em português do Brasil no formato JSON estrito com os seguintes campos:
{
  "gravidade": "Baixa" | "Moderada" | "Alta" | "Crítica (Risco Estrutural)",
  "causaProvavel": "Explicação técnica clara e concisa sobre o que está acontecendo na estrutura de concreto (ex: retração térmica, falha na impermeabilização antiga, fissuras dinâmicas)",
  "solucaoRecomendada": "Especifique o tipo de resina ou gel (ex: Injeção de Poliuretano Hidroativado PU, Epóxi estrutural ou Acrílica Especial) e como atua selando de dentro para fora",
  "tempoObraVedaquim": "Estimativa rápida em dias com injeção química (ex: 1 a 2 dias, sem entulho)",
  "tempoObraTradicional": "Estimativa de tempo e transtorno com método tradicional de quebra-quebra (ex: 15 a 20 dias, quebra de piso, barulho e entulho)",
  "economiaEstimada": "Resumo financeiro e de valorização do imóvel ao evitar demolição",
  "parecerTecnico": "Um parágrafo técnico, empático e autoritário convidando para a Vistoria Técnica Gratuita Vedaquim para validação com equipamentos próprios de alta pressão."
}
Responda APENAS com o JSON válido sem marcações markdown de bloco de código se possível, ou JSON parseável.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.3
      }
    });

    const text = response.text || "{}";
    let parsedData;
    try {
      parsedData = JSON.parse(text);
    } catch (e) {
      // Fallback clean if JSON formatting had extra chars
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedData = JSON.parse(jsonMatch[0]);
      } else {
        throw e;
      }
    }

    res.json({
      sucesso: true,
      diagnostico: parsedData
    });

  } catch (error: any) {
    console.error("Erro na API Gemini:", error);
    res.status(500).json({
      sucesso: false,
      erro: "Não foi possível gerar o diagnóstico no momento. Nossa equipe fará a avaliação presencial na vistoria gratuita.",
      details: error?.message
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Servidor Vedaquim rodando na porta ${PORT}`);
  });
}

startServer();
