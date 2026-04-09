import { ArrowRight, Shield, Zap, Headphones } from "lucide-react";

const guarantees = [
  { icon: <Shield size={20} />, text: "30 dias grátis, sem cartão" },
  { icon: <Zap size={20} />, text: "Configuração em menos de 24h" },
  { icon: <Headphones size={20} />, text: "Suporte humanizado incluso" },
];

export default function FinalCTA() {
  return (
    <section style={{
      padding: "96px 24px",
      backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1800&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(8,15,24,0.65) 0%, rgba(17,29,46,0.60) 60%, rgba(6,24,14,0.65) 100%)" }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%", width: 900, height: 600,
        background: "radial-gradient(ellipse, rgba(46,196,160,0.07) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(46,196,160,0.12)", border: "1px solid rgba(46,196,160,0.3)",
          padding: "6px 16px", borderRadius: 100, marginBottom: 28,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2ec4a0", display: "inline-block" }} />
          <span style={{ color: "#4dd4b4", fontSize: 13, fontWeight: 600 }}>Comece hoje mesmo</span>
        </div>

        <h2 style={{
          fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800, color: "#fff",
          letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 20,
        }}>
          Simples, rápido e fácil de usar.
        </h2>

        <p style={{ color: "#8eb0d0", fontSize: 17, lineHeight: 1.75, marginBottom: 48 }}>
          Donos de oficinas que usam nosso ERP eliminam desperdícios e ganham mais eficiência. Comece agora você também. 30 dias de graça.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          <a href="#pricing" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "#2ec4a0", color: "#fff",
            padding: "18px 44px", borderRadius: 12,
            textDecoration: "none", fontSize: 17, fontWeight: 700,
            boxShadow: "0 12px 48px rgba(46,196,160,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "#1eb880"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "#2ec4a0"; }}>
            Testar grátis por 30 dias <ArrowRight size={20} />
          </a>
          <a href="#demo" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "#c4d8eb", padding: "18px 28px", borderRadius: 12,
            textDecoration: "none", fontSize: 16, fontWeight: 600,
            border: "1.5px solid rgba(255,255,255,0.25)",
            transition: "border-color 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(46,196,160,0.6)"; e.currentTarget.style.color = "#2ec4a0"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#c4d8eb"; }}>
            Falar com especialista
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 32 }}>
          {guarantees.map((g) => (
            <div key={g.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#2ec4a0" }}>{g.icon}</span>
              <span style={{ color: "#8eb0d0", fontSize: 14, fontWeight: 500 }}>{g.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
