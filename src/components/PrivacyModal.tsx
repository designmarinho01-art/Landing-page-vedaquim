import React from "react";
import { X, ShieldCheck, Eye, Lock, FileText, Check } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-100 flex flex-col relative animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Política de Privacidade</h3>
              <p className="text-xs text-slate-500 font-medium">Conformidade Geral com a LGPD (Lei 13.709/2018)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 bg-white hover:bg-slate-100 border border-slate-200/60 rounded-full p-2 transition-all cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed scrollbar-thin scrollbar-thumb-slate-200">
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              1. Compromisso com sua Privacidade
            </h4>
            <p>
              A <strong>Vedaquim Impermeabilizações Vendas e Serviços LTDA</strong> tem como compromisso fundamental proteger a privacidade e a segurança dos dados pessoais dos nossos clientes, parceiros e visitantes. Esta política descreve como coletamos, usamos, armazenamos e protegemos as informações fornecidas em nosso site.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Eye className="w-4 h-4 text-blue-600" />
              2. Quais Dados Coletamos?
            </h4>
            <p className="mb-2">
              Coletamos dados estritamente necessários para viabilizar o contato comercial, responder às solicitações e agendar vistorias técnicas:
            </p>
            <ul className="space-y-1.5 pl-5 list-none">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Dados de Identificação:</strong> Nome completo ou identificação do responsável técnico/síndico.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Dados de Contato:</strong> Número de telefone / WhatsApp e endereço de e-mail.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Dados do Imóvel:</strong> Tipo de edificação (condomínio residencial, comercial, indústria, residência, reservatório, etc.).</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" />
              3. Como Usamos Seus Dados?
            </h4>
            <p className="mb-2">
              As informações pessoais coletadas são utilizadas de forma ética e segura para as seguintes finalidades exclusivas:
            </p>
            <ul className="space-y-1.5 pl-5 list-none">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Agendamento de vistorias técnicas sem custo em sua região.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Comunicação direta via WhatsApp e telefone para esclarecimento de dúvidas sobre a injeção química sob alta pressão.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Envio de propostas técnicas e orçamentos comerciais detalhados.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              4. Proteção e Segurança da Informação
            </h4>
            <p>
              Adotamos medidas técnicas, administrativas e de segurança de última geração para blindar suas informações pessoais contra acessos não autorizados, perda, destruição ou alteração ilegal. Os seus dados trafegam através de conexões criptografadas de alta segurança (SSL/HTTPS).
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2">
              5. Compartilhamento com Terceiros
            </h4>
            <p>
              A VEDAQUIM <strong>nunca</strong> vende, aluga ou compartilha seus dados pessoais com terceiros para fins de marketing ou publicidade. O compartilhamento ocorre apenas quando exigido por obrigação legal, ordem judicial ou para o processamento técnico estrito de serviços necessários (como o encaminhamento seguro para a ferramenta do WhatsApp).
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2">
              6. Seus Direitos (LGPD)
            </h4>
            <p className="mb-2">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você possui o controle integral de suas informações, podendo exercer a qualquer momento os seguintes direitos:
            </p>
            <ul className="space-y-1 pl-5 list-disc">
              <li>Confirmação da existência de tratamento de dados;</li>
              <li>Acesso e correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Eliminação ou exclusão definitiva dos dados pessoais de nossa base de dados;</li>
              <li>Revogação do consentimento concedido anteriormente.</li>
            </ul>
            <p className="mt-2">
              Para exercer seus direitos, basta entrar em contato direto com o nosso Encarregado de Proteção de Dados através do e-mail: <a href="mailto:contato@vedaquim.com.br" className="text-blue-600 hover:underline font-semibold">contato@vedaquim.com.br</a>.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2">
              7. Atualizações desta Política
            </h4>
            <p>
              Esta Política de Privacidade poderá ser atualizada periodicamente para refletir melhorias técnicas e novos regulamentos de mercado. Recomendamos a visita eventual a esta seção.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-100 flex items-center justify-end bg-slate-50">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-850 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/10 transition-all cursor-pointer"
          >
            Entendi e Concordo
          </button>
        </div>

      </div>
    </div>
  );
};
