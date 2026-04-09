import { FileX, Clock, BarChart2, Package, AlertCircle, Banknote } from "lucide-react";

const ACCENT = "#3e6490";
const ACCENT_BG = "rgba(62,100,144,0.08)";
const ACCENT_HOVER_BORDER = "#3e6490";
const ACCENT_HOVER_SHADOW = "rgba(62,100,144,0.12)";

const pains = [
  {
    Icon: FileX,
    title: "OS em papel ou no WhatsApp?",
    desc: "Serviço sem registro é serviço perdido. Você não sabe o que foi feito, quem fez nem quanto cobrou.",
  },
  {
    Icon: Package,
    title: "Estoque que some sem explicação",
    desc: "Peça que entra e não sai do sistema. Reposição errada, compra duplicada e cliente esperando.",
  },
  {
    Icon: Banknote,
    title: "Caixa cheio, mas sobra pouco",
    desc: "Faturamento alto não significa lucro garantido. Sem visibilidade de receita e despesas, o dinheiro some.",
  },
  {
    Icon: Clock,
    title: "Tempo perdido com tarefa manual",
    desc: "Orçamento na mão, nota no e-mail, histórico na memória do mecânico.",
  },
  {
    Icon: AlertCircle,
    title: "Cliente que some depois do serviço",
    desc: "Sem histórico por veículo, você não consegue avisar o cliente quando a próxima revisão chega.",
  },
  {
    Icon: BarChart2,
    title: "Decisão no achismo",
    desc: "Contratar mais um mecânico? Abrir no sábado? Sem dados reais de produtividade, qualquer decisão é um chute.",
  },
];

export default function PainPoints() {
  return (
    <section style={{ padding: "100px 24px", fontFamily: "'Outfit', sans-serif", backgroundImage: "url('https://images.unsplash.com/photo-1632823471565-1ecdf5c6da12?w=1800&q=80')", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.90)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#2ec4a0", fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>O dia a dia</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#111d2e", marginTop: 12, letterSpacing: "-1px", lineHeight: 1.2 }}>
            Esses problemas custam dinheiro para sua oficina<span style={{ color: "#2ec4a0" }}>.</span>
          </h2>
          <p style={{ color: "#5a6778", fontSize: 17, maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>
            Planilha, papel e controle manual funcionam até certo ponto. Quando a operação cresce, a planilha vira retrabalho e o papel vira prejuízo.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="pain-grid">
          {pains.map((p) => (
            <div key={p.title} style={{
              background: "#fff",
              border: "1px solid #e2e6ec",
              borderRadius: 16, padding: 28,
              transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
              cursor: "default",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT_HOVER_BORDER; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 32px ${ACCENT_HOVER_SHADOW}`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e6ec"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: ACCENT_BG,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>
                <p.Icon size={22} color={ACCENT} strokeWidth={1.8} />
              </div>
              <h3 style={{ color: "#111d2e", fontSize: 15, fontWeight: 700, marginBottom: 10, lineHeight: 1.4, fontFamily: "'Outfit', sans-serif" }}>{p.title}</h3>
              <p style={{ color: "#7a8897", fontSize: 14, lineHeight: 1.75, fontFamily: "'Outfit', sans-serif" }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p style={{ color: "#5a6778", fontSize: 16, marginBottom: 24 }}>
            O Oficinaz foi criado para resolver exatamente esses problemas.
          </p>
          <a href="#features" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#111d2e", color: "#fff",
            padding: "14px 32px", borderRadius: 10,
            textDecoration: "none", fontSize: 15, fontWeight: 700,
            transition: "background 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1e3048"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#111d2e"; e.currentTarget.style.transform = "none"; }}>
            Veja como resolvemos
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .pain-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .pain-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
