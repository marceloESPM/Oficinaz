const stats = [
  { value: "3x", label: "Mais rápido para abrir uma ordem de serviço." },
  { value: "Zero", label: "Perda de histórico. Cada veículo tem seu registro completo." },
  { value: "+ Lucro", label: "Com visibilidade real do seu faturamento." },
  { value: "100%", label: "Atendimento personalizado e suporte técnico incluído." },
];

export default function SocialProof() {
  return (
    <section style={{
      background: "#f8f9fb",
      borderTop: "1px solid #e2e6ec",
      borderBottom: "1px solid #e2e6ec",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "44px 24px" }}>
        <p style={{ textAlign: "center", color: "#a0acbb", fontSize: 13, fontWeight: 600, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 28 }}>
          O que muda quando sua oficina tem o sistema certo
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} style={{
              textAlign: "center",
              padding: "8px 32px",
              borderRight: i < stats.length - 1 ? "1px solid #e2e6ec" : "none",
            }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#2ec4a0", letterSpacing: "-1.5px", marginBottom: 8, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "#7a8897", fontSize: 14, lineHeight: 1.65 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .stats-grid > div { border-right: none !important; border-bottom: 1px solid #e2e6ec; padding: 20px 16px !important; } }
        @media (max-width: 600px) { .stats-grid > div:last-child { border-bottom: none !important; } }
      `}</style>
    </section>
  );
}
