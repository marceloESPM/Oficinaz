import { ArrowRight, CheckCircle, Video } from "lucide-react";

const beneficios = [
  "Demo ao vivo com o sistema real — não um slide",
  "Tire todas as suas dúvidas em tempo real",
  "30 dias grátis para testar sem pressão",
];

export default function DemoScheduling() {
  return (
    <section id="demo" style={{ padding: "96px 24px", background: "#f8f9fb" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        <div style={{
          background: "#fff", borderRadius: 24,
          border: "1px solid #e2e6ec",
          boxShadow: "0 12px 48px rgba(17,29,46,0.07)",
          padding: "64px 72px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
        }} className="demo-grid">

          {/* Left */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(46,196,160,0.10)", border: "1px solid rgba(46,196,160,0.28)",
              padding: "6px 16px", borderRadius: 100, marginBottom: 20,
            }}>
              <Video size={13} style={{ color: "#2ec4a0" }} />
              <span style={{ color: "#127055", fontSize: 13, fontWeight: 700 }}>Demonstração gratuita</span>
            </div>

            <h2 style={{
              fontSize: "clamp(26px, 3.2vw, 38px)", fontWeight: 800,
              color: "#111d2e", letterSpacing: "-0.8px", lineHeight: 1.2,
              marginBottom: 16,
            }}>
              Quer ver o <span style={{ color: "#2ec4a0" }}>Oficinaz</span>{" "}
              funcionando na prática?
            </h2>

            <p style={{ color: "#5a6778", fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
              Em 30 minutos você vê o sistema rodando com exemplos reais de
              oficinas como a sua — OS, financeiro, nota fiscal e estoque.
              Sem enrolação, sem compromisso.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {beneficios.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0, marginTop: 1,
                    background: "#e4faf4", border: "1px solid #b8f1e4",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <CheckCircle size={13} style={{ color: "#127055" }} />
                  </div>
                  <span style={{ color: "#111d2e", fontSize: 15, fontWeight: 500, lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

            <div style={{
              width: 72, height: 72, borderRadius: 20,
              background: "linear-gradient(135deg, rgba(46,196,160,0.12), rgba(18,112,85,0.08))",
              border: "1px solid rgba(46,196,160,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 24,
            }}>
              <Video size={32} color="#2ec4a0" strokeWidth={1.5} />
            </div>

            <div style={{ fontSize: 20, fontWeight: 800, color: "#111d2e", lineHeight: 1.3, marginBottom: 10 }}>
              30 minutos que podem mudar como você gerencia sua oficina.
            </div>
            <p style={{ color: "#7a8897", fontSize: 14.5, lineHeight: 1.65, marginBottom: 32, maxWidth: 280 }}>
              Escolha o canal que preferir e agende na hora que for melhor para você.
            </p>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demo%20do%20Oficinaz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                background: "linear-gradient(135deg, #1eb880 0%, #2ec4a0 100%)",
                color: "#fff", padding: "17px 32px", borderRadius: 12, width: "100%",
                textDecoration: "none", fontSize: 16, fontWeight: 700,
                boxShadow: "0 8px 28px rgba(46,196,160,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxSizing: "border-box",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(46,196,160,0.50), inset 0 1px 0 rgba(255,255,255,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(46,196,160,0.35), inset 0 1px 0 rgba(255,255,255,0.2)"; }}
            >
              Agendar minha demonstração <ArrowRight size={18} />
            </a>

            <p style={{ color: "#a0acbb", fontSize: 12.5, marginTop: 16 }}>
              Sem cartão de crédito · Sem compromisso · Cancele quando quiser
            </p>

            <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid #f0f2f5", width: "100%" }}>
              <p style={{ color: "#111d2e", fontSize: 13.5, fontWeight: 600, marginBottom: 4, textAlign: "left" }}>
                "A migração foi rápida e no mesmo dia já comecei a usar."
              </p>
              <p style={{ color: "#7a8897", fontSize: 13, textAlign: "left" }}>— Carlos A., oficina em São Paulo</p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .demo-grid { grid-template-columns: 1fr !important; padding: 36px 28px !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
