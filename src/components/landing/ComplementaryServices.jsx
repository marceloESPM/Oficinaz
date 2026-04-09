import { ArrowRight, BookOpen, RefreshCcw, CreditCard, Star } from "lucide-react";

const services = [
  {
    icon: <BookOpen size={16} />,
    title: "Integração contábil e fiscal",
    partners: "SIEG e Ottimizza",
    desc: "Menos retrabalho entre oficina, financeiro e contador. Mais organização para crescer com segurança.",
  },
  {
    icon: <RefreshCcw size={16} />,
    title: "Plano de assinaturas para manutenção preventiva",
    partners: "Ecossistema Oficinaz",
    desc: "Crie planos recorrentes de revisão e transforme a manutenção preventiva em receita previsível.",
  },
  {
    icon: <CreditCard size={16} />,
    title: "TEF",
    partners: "Operadora e maquininha homologada",
    desc: "Receba com mais agilidade no balcão e integre os pagamentos ao fluxo da oficina.",
  },
  {
    icon: <Star size={16} />,
    title: "Pesquisa de satisfação",
    partners: "Ecossistema Oficinaz",
    desc: "Ouça o cliente no pós-venda e melhore a experiência de atendimento.",
  },
];

export default function ComplementaryServices() {
  return (
    <section style={{
      background: "#f8f9fb",
      borderTop: "1px solid #e2e6ec",
      borderBottom: "1px solid #e2e6ec",
      padding: "72px 24px",
    }}>
      <div style={{
        maxWidth: 1120,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "start",
      }}
        className="comp-grid"
      >
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(46,196,160,0.08)",
            border: "1px solid rgba(46,196,160,0.20)",
            padding: "4px 12px", borderRadius: 100, marginBottom: 18,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#2ec4a0", display: "inline-block" }} />
            <span style={{ color: "#2ec4a0", fontSize: 12, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>
              Loja de Aplicativos
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(24px, 3.2vw, 38px)",
            fontWeight: 800,
            color: "#111d2e",
            letterSpacing: "-0.8px",
            lineHeight: 1.15,
            margin: "0 0 16px 0",
          }}>
            Mais controle para sua oficina, do jeito que ela precisa<span style={{ color: "#2ec4a0" }}>.</span>
          </h2>

          <p style={{
            color: "#5a6778",
            fontSize: 17,
            lineHeight: 1.75,
            margin: "0 0 28px 0",
            maxWidth: 400,
          }}>
            Ative recursos extras para cobrar melhor, receber mais rápido, organizar o fiscal e fortalecer o pós-venda. Estes são alguns dos serviços disponíveis na loja de aplicativos Oficinaz.
          </p>

          <div style={{
            padding: "16px 20px",
            background: "#eef7f4",
            border: "1px solid rgba(46,196,160,0.18)",
            borderRadius: 10,
            marginBottom: 28,
          }}>
            <p style={{
              color: "#2a5a4a",
              fontSize: 15,
              lineHeight: 1.65,
              margin: 0,
              fontWeight: 500,
            }}>
              O Oficinaz também pode evoluir com outros serviços da loja de aplicativos, conforme a necessidade da sua operação.
            </p>
          </div>

          <a href="#demo" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#2ec4a0",
            color: "#fff",
            padding: "13px 28px",
            borderRadius: 10,
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 700,
            boxShadow: "0 6px 20px rgba(46,196,160,0.25)",
            transition: "transform 0.18s, background 0.18s",
            marginBottom: 10,
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "#1eb880"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "#2ec4a0"; }}
          >
            Falar com um especialista <ArrowRight size={16} />
          </a>
          <p style={{ color: "#a0acbb", fontSize: 13, lineHeight: 1.6, margin: "8px 0 0 0" }}>
            Disponibilidade, personalização e custos adicionais variam conforme o serviço ativado.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((s, i) => (
            <div key={i} style={{
              display: "flex",
              gap: 16,
              padding: "20px 0",
              borderBottom: i < services.length - 1 ? "1px solid #e2e6ec" : "none",
              alignItems: "flex-start",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "#ffffff",
                border: "1px solid #e2e6ec",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#2ec4a0",
                flexShrink: 0,
                boxShadow: "0 1px 3px rgba(13,21,32,0.06)",
              }}>
                {s.icon}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  <span style={{ color: "#111d2e", fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>
                    {s.title}
                  </span>
                  <span style={{
                    color: "#1a8a6e",
                    fontSize: 11,
                    fontWeight: 600,
                    background: "rgba(46,196,160,0.08)",
                    border: "1px solid rgba(46,196,160,0.18)",
                    padding: "1px 8px",
                    borderRadius: 100,
                    whiteSpace: "nowrap",
                  }}>
                    {s.partners}
                  </span>
                </div>
                <p style={{ color: "#5a6778", fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .comp-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
