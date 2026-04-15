import { ArrowRight, Store, Truck, ShoppingCart, Package, TrendingUp, BadgeCheck } from "lucide-react";

const conditions = [
  {
    step: "01",
    icon: <Package size={18} />,
    label: "Compras com fornecedores parceiros",
    sub: "Peças, acessórios, químicos e insumos",
  },
  {
    step: "02",
    icon: <TrendingUp size={18} />,
    label: "Acima de R$ 10 mil em pedidos no mês",
    sub: "Volume mensal consolidado",
  },
  {
    step: "03",
    icon: <BadgeCheck size={18} />,
    label: "Isenção total da mensalidade",
    sub: "Seu ERP pago pelas suas compras",
    highlight: true,
  },
];

export default function PartnerBenefit() {
  return (
    <section id="parceiros" style={{
      position: "relative",
      minHeight: 600,
      display: "flex",
      alignItems: "stretch",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/mecanica-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "40% center",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(105deg, rgba(6,12,22,0.96) 0%, rgba(6,12,22,0.88) 32%, rgba(6,12,22,0.62) 52%, rgba(6,12,22,0.12) 72%, rgba(6,12,22,0.0) 100%)",
        zIndex: 1,
      }} />

      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1200, margin: "0 auto",
        width: "100%",
        padding: "92px 56px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
        className="partner-benefit-wrap"
      >
        <div style={{ maxWidth: 560 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(46,196,160,0.10)",
            border: "1px solid rgba(46,196,160,0.28)",
            padding: "5px 14px", borderRadius: 100, marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2ec4a0", display: "inline-block" }} />
            <span style={{ color: "#4dd4b4", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>Condição exclusiva</span>
          </div>

          <h2 style={{
            fontSize: "clamp(34px, 4.2vw, 56px)",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-1.5px",
            lineHeight: 1.07,
            margin: "0 0 22px 0",
          }}>
            Use o Oficinaz<br />
            <span style={{
              background: "linear-gradient(90deg, #2ec4a0 0%, #5de0c8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              sem mensalidade
            </span>
          </h2>

          <p style={{
            color: "#8bacc8",
            fontSize: 18,
            lineHeight: 1.8,
            margin: "0 0 14px 0",
          }}>
            Faça suas compras de peças, acessórios, químicos e insumos com nossos fornecedores homologados.
          </p>

          <p style={{
            color: "#c8dced",
            fontSize: 16,
            fontWeight: 600,
            margin: "0 0 34px 0",
          }}>
            Ao ultrapassar{" "}
            <span style={{ color: "#2ec4a0" }}>R$ 10 mil em pedidos no mês</span>
            , sua oficina fica isenta da mensalidade.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "stretch", maxWidth: 420 }}>
            <a href="#" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              background: "#2ec4a0",
              color: "#fff",
              padding: "17px 32px",
              borderRadius: 12,
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 700,
              boxShadow: "0 8px 28px rgba(46,196,160,0.30)",
              transition: "transform 0.18s, background 0.18s, box-shadow 0.18s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "#1eb880"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(46,196,160,0.40)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "#2ec4a0"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(46,196,160,0.30)"; }}
            >
              <ShoppingCart size={18} />
              Cotar peças, acessórios e insumos
              <ArrowRight size={16} />
            </a>

            <div className="partner-cta-btns" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <a href="#" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                color: "#a8c4dc",
                padding: "14px 16px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.04)",
                transition: "border-color 0.18s, color 0.18s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(46,196,160,0.4)"; e.currentTarget.style.color = "#2ec4a0"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "#a8c4dc"; }}
              >
                <Store size={15} />
                Indicar fornecedor
              </a>
              <a href="#" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                color: "#a8c4dc",
                padding: "14px 16px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.04)",
                transition: "border-color 0.18s, color 0.18s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(46,196,160,0.4)"; e.currentTarget.style.color = "#2ec4a0"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "#a8c4dc"; }}
              >
                <Truck size={15} />
                Quero ser fornecedor
              </a>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 12,
          maxWidth: 580,
        }}
          className="partner-steps"
        >
          {conditions.map((c, i) => (
            <div key={i} style={{
              position: "relative",
              padding: "22px 20px",
              borderRadius: 14,
              background: c.highlight
                ? "linear-gradient(135deg, rgba(46,196,160,0.18) 0%, rgba(46,196,160,0.08) 100%)"
                : "rgba(255,255,255,0.04)",
              border: c.highlight
                ? "1px solid rgba(46,196,160,0.35)"
                : "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              overflow: "hidden",
            }}>
              {c.highlight && (
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: "linear-gradient(90deg, #2ec4a0, #5de0c8)",
                  borderRadius: "14px 14px 0 0",
                }} />
              )}
              <div style={{
                display: "flex", alignItems: "center", gap: 8, marginBottom: 12,
              }}>
                <span style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: 32, height: 32, borderRadius: 8,
                  background: c.highlight ? "rgba(46,196,160,0.25)" : "rgba(46,196,160,0.12)",
                  color: "#2ec4a0",
                  flexShrink: 0,
                }}>
                  {c.icon}
                </span>
                <span style={{
                  color: "#2ec4a0",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                }}>
                  {c.step}
                </span>
              </div>
              <p style={{
                color: c.highlight ? "#e8f8f4" : "#cde0f0",
                fontSize: 13,
                fontWeight: c.highlight ? 700 : 600,
                lineHeight: 1.5,
                margin: "0 0 4px 0",
              }}>
                {c.label}
              </p>
              <p style={{
                color: c.highlight ? "#7ecebb" : "#607d90",
                fontSize: 11,
                lineHeight: 1.5,
                margin: 0,
              }}>
                {c.sub}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          color: "#2e4a62",
          fontSize: 11,
          lineHeight: 1.6,
          margin: "14px 0 0 0",
          maxWidth: 500,
        }}>
          Benefício sujeito a critérios comerciais e validação de compras com fornecedores parceiros.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .partner-benefit-wrap {
            padding: 64px 24px !important;
          }
          .partner-steps {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
