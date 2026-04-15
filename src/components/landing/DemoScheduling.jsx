import { ArrowRight, CheckCircle, Calendar, Clock, Video, Star } from "lucide-react";

const slots = ["09:00", "10:30", "14:00", "15:30", "17:00"];

const beneficios = [
  "Demo ao vivo com o sistema real — não um slide",
  "Tire todas as suas dúvidas em tempo real",
  "30 dias grátis para testar sem pressão",
];

const reviews = [
  { stars: 5, text: "\"Migrei em um dia e no mesmo dia já estava usando.\"", name: "Carlos A.", cidade: "São Paulo" },
  { stars: 5, text: "\"Simples de entender, a demo me convenceu na hora.\"", name: "Renata M.", cidade: "Curitiba" },
];

export default function DemoScheduling() {
  return (
    <section id="demo" style={{ padding: "96px 24px", background: "#f8f9fb" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(46,196,160,0.10)", border: "1px solid rgba(46,196,160,0.28)",
            padding: "6px 18px", borderRadius: 100, marginBottom: 20,
          }}>
            <Video size={14} style={{ color: "#2ec4a0" }} />
            <span style={{ color: "#127055", fontSize: 13, fontWeight: 700 }}>Demonstração gratuita</span>
          </div>
          <h2 style={{
            fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 800,
            color: "#111d2e", letterSpacing: "-0.8px", lineHeight: 1.15,
            marginBottom: 16,
          }}>
            Veja o Oficinaz funcionando{" "}
            <span style={{ color: "#2ec4a0" }}>na sua rotina.</span>
          </h2>
          <p style={{ color: "#5a6778", fontSize: 17, lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
            Em 30 minutos você entende tudo — OS, financeiro, nota fiscal e estoque —
            com exemplos reais de oficinas como a sua.
          </p>
        </div>

        {/* Main card */}
        <div style={{
          background: "#fff", borderRadius: 24,
          border: "1px solid #e2e6ec",
          boxShadow: "0 12px 48px rgba(17,29,46,0.07)",
          overflow: "hidden",
          display: "grid", gridTemplateColumns: "1.1fr 1fr",
        }} className="demo-grid">

          {/* Left — visual scheduling mockup */}
          <div style={{
            background: "linear-gradient(145deg, #111d2e 0%, #0d2218 100%)",
            padding: "48px 44px",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              {/* Mini calendar header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(46,196,160,0.18)", border: "1px solid rgba(46,196,160,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Calendar size={18} color="#2ec4a0" />
                </div>
                <div>
                  <div style={{ color: "rgba(255,255,255,0.9)", fontSize: 14, fontWeight: 700 }}>Escolha seu horário</div>
                  <div style={{ color: "rgba(142,176,208,0.55)", fontSize: 12 }}>Disponível esta semana</div>
                </div>
              </div>

              {/* Days row */}
              <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
                {[
                  { d: "Seg", n: "14", active: false },
                  { d: "Ter", n: "15", active: true  },
                  { d: "Qua", n: "16", active: false },
                  { d: "Qui", n: "17", active: false },
                  { d: "Sex", n: "18", active: false },
                ].map((day) => (
                  <div key={day.n} style={{
                    flex: 1, textAlign: "center", padding: "8px 0", borderRadius: 10,
                    background: day.active ? "rgba(46,196,160,0.18)" : "rgba(255,255,255,0.04)",
                    border: day.active ? "1px solid rgba(46,196,160,0.40)" : "1px solid rgba(255,255,255,0.07)",
                    cursor: "default",
                  }}>
                    <div style={{ color: day.active ? "#2ec4a0" : "rgba(142,176,208,0.45)", fontSize: 10, fontWeight: 600, marginBottom: 4 }}>{day.d}</div>
                    <div style={{ color: day.active ? "#fff" : "rgba(196,216,235,0.7)", fontSize: 14, fontWeight: 700 }}>{day.n}</div>
                  </div>
                ))}
              </div>

              {/* Time slots */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <Clock size={12} color="rgba(142,176,208,0.55)" />
                  <span style={{ color: "rgba(142,176,208,0.55)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>Horários disponíveis</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {slots.map((s, i) => (
                    <div key={s} style={{
                      padding: "7px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                      background: i === 1
                        ? "linear-gradient(135deg, #1eb880, #2ec4a0)"
                        : "rgba(255,255,255,0.06)",
                      border: i === 1 ? "none" : "1px solid rgba(255,255,255,0.10)",
                      color: i === 1 ? "#fff" : "rgba(196,216,235,0.75)",
                      boxShadow: i === 1 ? "0 4px 14px rgba(46,196,160,0.35)" : "none",
                    }}>{s}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div style={{ marginTop: 36 }}>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                {reviews.map((r) => (
                  <div key={r.name}>
                    <div style={{ display: "flex", gap: 2, marginBottom: 6 }}>
                      {Array.from({ length: r.stars }).map((_, i) => (
                        <Star key={i} size={11} fill="#febc2e" color="#febc2e" />
                      ))}
                    </div>
                    <p style={{ color: "rgba(196,216,235,0.80)", fontSize: 12.5, lineHeight: 1.6, marginBottom: 4 }}>{r.text}</p>
                    <span style={{ color: "rgba(142,176,208,0.50)", fontSize: 11 }}>— {r.name}, {r.cidade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — CTA */}
          <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>

            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#111d2e", lineHeight: 1.3, marginBottom: 12 }}>
                30 minutos que podem mudar como você gerencia sua oficina.
              </div>
              <p style={{ color: "#5a6778", fontSize: 15, lineHeight: 1.7 }}>
                Uma conversa direta, sem enrolação. Você vê o sistema rodando e decide se faz sentido para o seu negócio.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              {beneficios.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0, marginTop: 1,
                    background: "#e4faf4", border: "1px solid #b8f1e4",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <CheckCircle size={13} style={{ color: "#127055" }} />
                  </div>
                  <span style={{ color: "#111d2e", fontSize: 14.5, fontWeight: 500, lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>

            {/* CTA primary */}
            <a
              href="https://calendly.com/oficinaz/demo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                background: "linear-gradient(135deg, #1eb880 0%, #2ec4a0 100%)",
                color: "#fff", padding: "16px 28px", borderRadius: 12,
                textDecoration: "none", fontSize: 16, fontWeight: 700,
                boxShadow: "0 8px 28px rgba(46,196,160,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                transition: "transform 0.2s, box-shadow 0.2s",
                marginBottom: 12,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(46,196,160,0.50), inset 0 1px 0 rgba(255,255,255,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(46,196,160,0.35), inset 0 1px 0 rgba(255,255,255,0.2)"; }}
            >
              <Calendar size={18} />
              Agendar demonstração gratuita <ArrowRight size={17} />
            </a>

            {/* CTA secondary — WhatsApp */}
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20Oficinaz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.30)",
                color: "#16a34a", padding: "13px 28px", borderRadius: 12,
                textDecoration: "none", fontSize: 15, fontWeight: 600,
                transition: "background 0.2s",
                marginBottom: 20,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(37,211,102,0.14)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(37,211,102,0.08)"; }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#16a34a">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.527 3.66 1.438 5.168L2 22l4.98-1.418A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.073-1.117l-.292-.174-3.027.862.862-3.027-.174-.292A7.946 7.946 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.406-5.845c-.242-.121-1.432-.707-1.654-.787-.222-.08-.384-.121-.545.121-.161.242-.626.787-.767.948-.141.162-.282.182-.524.061-.242-.121-1.022-.376-1.946-1.2-.719-.641-1.204-1.433-1.345-1.675-.141-.242-.015-.373.106-.494.109-.108.242-.282.363-.424.121-.141.161-.242.242-.403.08-.162.04-.303-.02-.424-.061-.121-.545-1.314-.747-1.8-.197-.473-.397-.409-.545-.416l-.464-.008c-.161 0-.424.06-.646.303-.222.242-.848.829-.848 2.022s.868 2.344.99 2.506c.12.161 1.707 2.607 4.137 3.554.579.25 1.031.4 1.383.512.581.185 1.11.159 1.528.097.466-.069 1.432-.586 1.634-1.152.201-.565.201-1.049.141-1.151-.06-.1-.222-.161-.464-.282z"/>
              </svg>
              Prefere falar pelo WhatsApp
            </a>

            <p style={{ color: "#a0acbb", fontSize: 12.5, textAlign: "center" }}>
              Sem cartão de crédito · Sem compromisso · Cancele quando quiser
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .demo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
