import { CheckCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Registre cliente e veículo",
    desc: "Placa reconhecida automaticamente. O sistema popula marca, modelo e ano. Informações enriquecidas para histórico completo.",
    tips: [
      "Histórico consolidado de cliente e veículo",
      "Reconhecimento automático de placa",
      "Campos estendidos (chassi, Renavam)",
    ],
  },
  {
    num: "02",
    title: "Crie ordem de serviço",
    desc: "Templates parametrizáveis com campos obrigatórios pré-preenchidos. Criação ágil e consistente.",
    tips: [
      "Templates para cada tipo de serviço",
      "Dados de cliente e veículo auto-preenchidos",
      "Rastreamento de status em tempo real",
    ],
  },
  {
    num: "03",
    title: "Controle inventário",
    desc: "Movimentação automática de peças com vinculação à OS. Alertas para reposição de estoque.",
    tips: [
      "Movimentação automática de peças",
      "Notificações de estoque mínimo",
      "Gestão de múltiplos fornecedores",
    ],
  },
  {
    num: "04",
    title: "Gerencie financeiro",
    desc: "Registro de receitas e despesas com reconciliação automática. Fluxo de caixa sempre atualizado.",
    tips: [
      "Reconciliação automática",
      "Visão consolidada de contas",
      "Análise de lucratividade por período",
    ],
  },
  {
    num: "05",
    title: "Emita documentos fiscais",
    desc: "Geração de NF-e e NFS-e com dados pré-preenchidos da OS. Conformidade garantida.",
    tips: [
      "Emissão simplificada",
      "Dados da OS integrados",
      "Arquivo e rastreabilidade completos",
    ],
  },
  {
    num: "06",
    title: "Analise com relatórios",
    desc: "Dashboards com KPIs de operação: lucratividade, produtividade, utilização de recursos.",
    tips: [
      "Dashboards dinâmicos",
      "Análise por colaborador e serviço",
      "Exportação para análise externa",
    ],
  },
];

export default function QuickGuide() {
  return (
    <section style={{ padding: "100px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#2ec4a0", fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Simples assim</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#111d2e", marginTop: 12, letterSpacing: "-1px" }}>
            6 passos pra usar de verdade
          </h2>
          <p style={{ color: "#5a6778", fontSize: 18, maxWidth: 540, margin: "16px auto 0" }}>
            Do cadastro ao relatório, veja como é simples ter sua oficina 100% organizada.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="guide-grid">
          {steps.map((step) => (
            <div key={step.num} style={{
              background: "#f8f9fb",
              border: "1px solid #e2e6ec",
              borderRadius: 16,
              padding: 28,
              transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#2ec4a0"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(46,196,160,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e6ec"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 44, height: 44, borderRadius: "50%",
                background: "#e4faf4", border: "2px solid #b8f1e4",
                color: "#127055", fontSize: 14, fontWeight: 800,
                marginBottom: 16, flexShrink: 0,
              }}>
                {step.num}
              </div>
              <h3 style={{ color: "#111d2e", fontSize: 17, fontWeight: 700, marginBottom: 12, lineHeight: 1.4 }}>{step.title}</h3>
              <p style={{ color: "#5a6778", fontSize: 14, lineHeight: 1.8, marginBottom: 18 }}>{step.desc}</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {step.tips.map((tip) => (
                  <li key={tip} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                    <CheckCircle size={15} style={{ color: "#2ec4a0", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#7a8897", fontSize: 13, lineHeight: 1.5 }}>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <a href="#pricing" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#2ec4a0", color: "#fff",
            padding: "16px 36px", borderRadius: 10,
            textDecoration: "none", fontSize: 16, fontWeight: 700,
            boxShadow: "0 8px 32px rgba(46,196,160,0.20)",
            transition: "background 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1eb880"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#2ec4a0"; e.currentTarget.style.transform = "none"; }}>
            Experimente grátis por 30 dias
          </a>
          <p style={{ color: "#a0acbb", fontSize: 13, marginTop: 16 }}>Sem cartão de crédito · Implementação gratuita · Suporte incluso</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .guide-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .guide-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}