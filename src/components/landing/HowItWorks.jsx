import { Car, ClipboardList, Users, ShoppingCart, Monitor, Receipt, DollarSign, Link2, Wrench, Cog, FileCheck, TrendingUp, Zap, Database, BarChart3, Layers } from "lucide-react";

// Icon options for each step
const iconOptions = {
  1: { primary: Car, alternates: [Wrench, Cog] },
  2: { primary: ClipboardList, alternates: [FileCheck, Wrench] },
  3: { primary: Users, alternates: [Zap, TrendingUp] },
  4: { primary: ShoppingCart, alternates: [TrendingUp, Zap] },
  5: { primary: Monitor, alternates: [Cog, Database] },
  6: { primary: Receipt, alternates: [FileCheck, Database] },
  7: { primary: DollarSign, alternates: [BarChart3, TrendingUp] },
  8: { primary: Link2, alternates: [Layers, Database] }
};

const steps = [
{
  num: "01",
  Icon: iconOptions[1].primary,
  alternateIcons: iconOptions[1].alternates,
  title: "Cadastre clientes e veículos",
  desc: "Cliente chega, você digita a placa e, o Oficinaz preenche o cadastro e exibe o histórico completo em segundos.",
  badge: "Todos os planos",
  badgeColor: "#2ec4a0"
},
{
  num: "02",
  Icon: iconOptions[2].primary,
  alternateIcons: iconOptions[2].alternates,
  title: "Abra a OS e atribua ao técnico",
  desc: "Crie a ordem de serviço, defina o que será feito e atribua ao mecânico. Nada fica no papel ou na memória.",
  badge: "Todos os planos",
  badgeColor: "#2ec4a0"
},
{
  num: "03",
  Icon: iconOptions[3].primary,
  alternateIcons: iconOptions[3].alternates,
  title: "Acompanhe a equipe em tempo real",
  desc: "Veja onde cada mecânico está trabalhando. Acompanhe o andamento das OS e gerencie comissões.",
  badge: "Controle em diante",
  badgeColor: "#127055"
},
{
  num: "04",
  Icon: iconOptions[4].primary,
  alternateIcons: iconOptions[4].alternates,
  title: "Orçamento no WhatsApp, venda no sistema",
  desc: "Envie o orçamento por WhatsApp, gerencie vendas presenciais e online com integração automática ao caixa.",
  badge: "Controle em diante",
  badgeColor: "#127055"
},
{
  num: "05",
  Icon: iconOptions[5].primary,
  alternateIcons: iconOptions[5].alternates,
  title: "Fechamento no PDV com tudo integrado",
  desc: "Pagamento, estoque e nota fiscal. Poucos cliques, zero digitação, produtividade total.",
  badge: "Plano Completo",
  badgeColor: "#6366f1"
},
{
  num: "06",
  Icon: iconOptions[6].primary,
  alternateIcons: iconOptions[6].alternates,
  title: "Emita notas fiscais na hora",
  desc: "NF-e, NFS-e e NFC-e diretamente da OS ou da venda, sem sair do Oficinaz.",
  badge: "Todos os planos",
  badgeColor: "#2ec4a0"
},
{
  num: "07",
  Icon: iconOptions[7].primary,
  alternateIcons: iconOptions[7].alternates,
  title: "Controle financeiro completo",
  desc: "Registre receitas e despesas, veja o fluxo de caixa atualizado e acompanhe o DRE. Conciliação bancária via Open Finance ou OFX.",
  badge: "Controle em diante",
  badgeColor: "#127055"
},
{
  num: "08",
  Icon: iconOptions[8].primary,
  alternateIcons: iconOptions[8].alternates,
  title: "Tudo integrado em um só lugar",
  desc: "Serviços, financeiro, estoque e vendas conectados automaticamente. Relatórios unificados para decisões mais inteligentes.",
  badge: "Plano Completo",
  badgeColor: "#6366f1"
}];


export default function HowItWorks() {
  return (
    <section id="how" style={{
      padding: "100px 24px",
      backgroundImage: "url('https://images.unsplash.com/photo-1539177216986-b6a5f73f2ca1?w=1800&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative"
    }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(248,249,251,0.90)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#2ec4a0", fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Na prática</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#111d2e", marginTop: 12, letterSpacing: "-1px" }} className="bg-transparent text-black">
            Da ordem de serviço à nota fiscal. Tudo no <span style={{ color: "#2ec4a0" }}>Oficinaz.</span>
          </h2>
          <p style={{ color: "#5a6778", fontSize: 17, maxWidth: 540, margin: "16px auto 0" }}>
            Veja como cada funcionalidade se encaixa na rotina da sua oficina, do atendimento ao financeiro.
          </p>

          {/* Legend */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
            {[
            { label: "Todos os planos", color: "#2ec4a0" },
            { label: "Controle em diante", color: "#127055" },
            { label: "Plano Completo", color: "#6366f1" }].
            map((l) =>
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.color }} />
                <span style={{ color: "#7a8897", fontSize: 13, fontWeight: 500 }}>{l.label}</span>
              </div>
            )}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }} className="steps-grid">
          {steps.map((step) =>
          <div key={step.num} style={{
            background: "#fff",
            border: "1px solid #e2e6ec",
            borderRadius: 16, padding: 24,
            transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
            position: "relative"
          }}
          onMouseEnter={(e) => {e.currentTarget.style.borderColor = step.badgeColor;e.currentTarget.style.transform = "translateY(-4px)";e.currentTarget.style.boxShadow = `0 12px 32px ${step.badgeColor}22`;}}
          onMouseLeave={(e) => {e.currentTarget.style.borderColor = "#e2e6ec";e.currentTarget.style.transform = "none";e.currentTarget.style.boxShadow = "none";}}>

              {/* Icon */}
              <div style={{
              width: "100%", height: 80, borderRadius: 12, overflow: "hidden", marginBottom: 16,
              background: `${step.badgeColor}08`,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: `1px solid ${step.badgeColor}10`
            }}>
                <step.Icon size={32} color={step.badgeColor} strokeWidth={1.5} opacity={0.7} />
              </div>



              <h3 style={{ color: "#111d2e", fontSize: 16, fontWeight: 600, marginBottom: 8, lineHeight: 1.4 }}>{step.title}</h3>
              <p style={{ color: "#7a8897", fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>{step.desc}</p>

              {/* Plan badge */}
              <div style={{
              display: "inline-block",
              background: `${step.badgeColor}15`,
              color: step.badgeColor,
              fontSize: 10, fontWeight: 700,
              padding: "2px 8px", borderRadius: 100
            }}>
                {step.badge}
              </div>
            </div>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: 52 }}>
          <a href="#pricing" style={{
            display: "inline-block",
            background: "#2ec4a0", color: "#fff",
            padding: "14px 36px", borderRadius: 10,
            textDecoration: "none", fontSize: 16, fontWeight: 700
          }}>
            Começar minha avaliação grátis
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .steps-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .steps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>);

}