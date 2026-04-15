import { useState } from "react";
import { ClipboardList, DollarSign, Package, BarChart2, ChevronDown, Car, Users, ShoppingCart, FileText, Monitor, Receipt, Link2 } from "lucide-react";
import { OSScreen, VehicleScreen, TeamsScreen, SalesScreen, PDVScreen, NFEScreen, FinancialScreen, IntegrationScreen } from "./FeatureScreens";

const features = [
  {
    id: "os",
    Icon: ClipboardList,
    title: "Ordem de Serviços",
    tagline: "Sem papel, sem confusão",
    desc: "Abra a OS rapidamente, integre peças e mão de obra com precisão e garanta que cada serviço executado seja faturado sem perdas, do orçamento à liquidação financeira.",
    items: ["Abertura de OS em segundos", "Transferência direta para o PDV", "Histórico completo por veículo e cliente", "NF-e emitida diretamente da OS", "Acompanhamento em tempo real"],
    color: "#2ec4a0",
  },
  {
    id: "vehicles",
    Icon: Car,
    title: "Cadastro de Veículos",
    tagline: "Histórico completo de cada carro",
    desc: "Encontre qualquer veículo pela placa, veja o histórico completo de serviços e nunca mais perca informação de cliente.",
    items: ["Vínculo veículo-cliente automático", "Busca rápida por placa", "Histórico completo de serviços", "Registro de manutenções anteriores", "Alertas de revisão programática"],
    color: "#127055",
  },
  {
    id: "teams",
    Icon: Users,
    title: "Gestão de Equipes",
    tagline: "Equipe produtiva, chefe tranquilo",
    desc: "Saiba exatamente o que cada mecânico está fazendo, acompanhe produtividade e gerencie comissões sem dor de cabeça.",
    items: ["Atribuição de técnicos por OS", "Controle de produtividade por colaborador", "Visão geral de demandas da equipe", "Gestão de comissões", "Histórico de atividades por usuário"],
    color: "#2ec4a0",
  },
  {
    id: "sales",
    Icon: ShoppingCart,
    title: "Controle de Vendas",
    tagline: "Orçamento no WhatsApp, venda no sistema",
    desc: "Envie orçamentos para o cliente pelo WhatsApp, acompanhe propostas em aberto e feche mais vendas sem perder nenhuma oportunidade.",
    items: ["Envio de orçamentos via WhatsApp", "Gestão de comissões de vendas", "Vendas presenciais e online", "Controle de propostas enviadas", "Relatório de conversão"],
    color: "#127055",
  },
  {
    id: "pdv",
    Icon: Monitor,
    title: "PDV",
    tagline: "Caixa rápido, integrado e sem erro",
    desc: "Fechamento de caixa ágil com múltiplas formas de pagamento. Baixa automática de estoque, emissão fiscal simultânea e integração imediata com o Contas a Receber, sem digitação dupla.",
    items: ["Pagamento", "Estoque", "Nota fiscal", "Poucos cliques, zero digitação, produtividade total"],
    color: "#2ec4a0",
  },
  {
    id: "nfe",
    Icon: Receipt,
    title: "Emissão de Notas",
    tagline: "NF emitida na hora, sem sair do sistema",
    desc: "Emissão automatizada de NF-e, NFS-e e NFC-e diretamente da OS. Garanta conformidade fiscal com a separação correta de peças e serviços, evitando bitributação e retrabalho.",
    items: ["NF-e, NFS-e, NFC-e", "Diretamente da OS ou da venda", "Sem sair do Oficinaz"],
    color: "#127055",
  },
  {
    id: "financial",
    Icon: DollarSign,
    title: "Controle Financeiro",
    tagline: "Sabe quanto vai entrar antes do mês acabar",
    desc: "Gestão completa de Contas a Pagar e Receber, Fluxo de Caixa Projetado e DRE Gerencial. Automatize sua conciliação bancária e tenha controle total sobre a inadimplência e a saúde financeira da oficina.",
    items: ["Registre receitas e despesas", "Veja o fluxo de caixa atualizado", "Faça conciliação bancária", "Acompanhe o DRE"],
    color: "#2ec4a0",
  },
  {
    id: "integration",
    Icon: Link2,
    title: "Integração entre áreas",
    tagline: "OS → estoque → caixa, automático",
    desc: "Operação e financeiro 100% sincronizados. Acesse relatórios gerenciais precisos com indicadores-chave (KPIs) como Ticket Médio, Margem de Contribuição por serviço e Ponto de Equilíbrio.",
    items: ["Serviços, financeiro, estoque e vendas conectados automaticamente", "Relatórios unificados para decisões mais inteligentes"],
    color: "#127055",
  },
];

const screenMap = {
  os: OSScreen,
  vehicles: VehicleScreen,
  teams: TeamsScreen,
  sales: SalesScreen,
  pdv: PDVScreen,
  nfe: NFEScreen,
  financial: FinancialScreen,
  integration: IntegrationScreen,
};

export default function Features() {
  const [active, setActive] = useState("os");
  const current = features.find((f) => f.id === active);

  return (
    <section id="features" style={{ padding: "100px 24px", background: "#f8f9fb" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#2ec4a0", fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Funcionalidades</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#111d2e", marginTop: 12, letterSpacing: "-1px" }}>
            Tudo o que sua oficina precisa, em um só lugar<span style={{ color: "#2ec4a0" }}>.</span>
          </h2>
          <p style={{ color: "#5a6778", fontSize: 17, maxWidth: 520, margin: "16px auto 0" }}>
            Cada módulo foi desenvolvido pensando na rotina real de quem vive numa oficina.
          </p>
        </div>

        {/* Tabs */}
        <div className="feat-tabs" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 56 }}>
          {features.map((f) => (
            <button key={f.id} onClick={() => setActive(f.id)} style={{
             padding: "12px 24px", borderRadius: 100, border: "1px solid",
              borderColor: active === f.id ? "#2ec4a0" : "#e2e6ec",
              background: active === f.id ? "#e4faf4" : "#fff",
              color: active === f.id ? "#127055" : "#7a8897",
              fontSize: 15, fontWeight: 600, cursor: "pointer",
              transition: "all 0.3s ease", fontFamily: "inherit",
              display: "flex", alignItems: "center", gap: 8,
              boxShadow: active === f.id ? "0 4px 14px rgba(46,196,160,0.15)" : "0 2px 8px rgba(17,29,46,0.04)",
              transform: active === f.id ? "scale(1.02)" : "scale(1)",
            }}
            onMouseEnter={(e) => {
              if (active !== f.id) {
                e.currentTarget.style.borderColor = "#2ec4a0";
                e.currentTarget.style.background = "rgba(46,196,160,0.04)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(46,196,160,0.12)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== f.id) {
                e.currentTarget.style.borderColor = "#e2e6ec";
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(17,29,46,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
              }
            }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: active === f.id ? "rgba(46,196,160,0.15)" : "rgba(46,196,160,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <f.Icon size={15} color={active === f.id ? "#127055" : "#2ec4a0"} strokeWidth={1.8} />
              </div>
              {f.title}
              <ChevronDown size={13} style={{ transition: "transform 0.2s", transform: active === f.id ? "rotate(180deg)" : "rotate(0deg)", opacity: active === f.id ? 1 : 0.4 }} />
            </button>
          ))}
        </div>

        {/* Content */}
        {current && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="feat-grid">
            <div>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(46,196,160,0.10)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <current.Icon size={24} color={current.color} strokeWidth={1.8} />
              </div>
              <div style={{ color: current.color, fontSize: 12, fontWeight: 600, letterSpacing: 0.5, textTransform: "none", marginBottom: 8 }}>{current.tagline}</div>
              <h3 style={{ color: "#111d2e", fontSize: 30, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 16 }}>{current.title}</h3>
              <p style={{ color: "#5a6778", fontSize: 17, lineHeight: 1.7, marginBottom: (current.id === "os" || current.id === "financial") ? 20 : 0 }}>{current.desc}</p>

              {current.id === "financial" && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "10px 14px",
                  background: "rgba(46,196,160,0.06)",
                  borderRadius: 8,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ec4a0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
                  </svg>
                  <span style={{ color: "#3a6b5e", fontSize: 14, lineHeight: 1.5 }}>
                    <strong style={{ fontWeight: 650 }}>Conciliação sem esforço:</strong> integre via Open Finance ou importe seu arquivo OFX.
                  </span>
                </div>
              )}

              {current.id === "os" && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "10px 14px",
                  background: "rgba(46,196,160,0.06)",
                  borderRadius: 8,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ec4a0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                  <span style={{ color: "#3a6b5e", fontSize: 14, lineHeight: 1.5 }}>
                    <strong style={{ fontWeight: 650 }}>OS inteligente:</strong> digite a placa e o Oficinaz preenche o resto por você.
                  </span>
                </div>
              )}
            </div>

            {/* Visual card com tela estilizada */}
            <div style={{
              background: "#fff",
              border: "1px solid #e2e6ec",
              borderRadius: 20, overflow: "hidden",
              boxShadow: "0 8px 32px rgba(17,29,46,0.06)",
            }}>
              <div style={{ width: "100%", overflow: "hidden" }}>
                {current && screenMap[current.id] && {
                  os: <OSScreen />,
                  vehicles: <VehicleScreen />,
                  teams: <TeamsScreen />,
                  sales: <SalesScreen />,
                  pdv: <PDVScreen />,
                  nfe: <NFEScreen />,
                  financial: <FinancialScreen />,
                  integration: <IntegrationScreen />,
                }[current.id]}
              </div>
              <div style={{ padding: 24 }}>
                <span style={{ color: "#a0acbb", fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>Módulo</span>
                <div style={{ color: "#111d2e", fontSize: 20, fontWeight: 700, marginTop: 4, marginBottom: 16 }}>{current.title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {current.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 24, height: 24, borderRadius: 7, background: "#e4faf4", border: "1px solid #b8f1e4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ color: current.color, fontSize: 11, fontWeight: 700 }}>✓</span>
                      </div>
                      <span style={{ color: "#5a6778", fontSize: 14 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 900px) { .feat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}