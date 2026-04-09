import { useState } from "react";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

export default function DemoScheduling() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", cnpj: "" });
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  const fields = [
    { label: "Nome completo", key: "name", placeholder: "João Silva", type: "text" },
    { label: "E-mail", key: "email", placeholder: "joao@suaoficina.com", type: "email" },
    { label: "WhatsApp", key: "phone", placeholder: "(11) 99999-9999", type: "tel" },
    { label: "CNPJ da oficina", key: "cnpj", placeholder: "00.000.000/0001-00", type: "text" },
  ];

  const beneficios = [
    "Configuração feita em menos de 24h",
    "Treinamento da equipe incluído",
    "30 dias grátis para testar sem pressão",
  ];

  return (
    <section id="demo" style={{ padding: "96px 24px", background: "#f8f9fb" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="demo-grid">

        {/* Left — info */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(46,196,160,0.12)", border: "1px solid rgba(46,196,160,0.3)",
            padding: "6px 16px", borderRadius: 100, marginBottom: 20,
          }}>
            <MessageCircle size={14} style={{ color: "#2ec4a0" }} />
            <span style={{ color: "#127055", fontSize: 13, fontWeight: 700 }}>Fale com a gente</span>
          </div>

          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#111d2e", letterSpacing: "-0.8px", lineHeight: 1.2, marginBottom: 16 }}>
            Quer ver o <span style={{ color: "#2ec4a0" }}>Oficinaz</span> funcionando?
          </h2>
          <p style={{ color: "#5a6778", fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
            Nosso time entra em contato, entende como sua oficina funciona e mostra como o sistema se encaixa na sua rotina. Sem pressão de venda, sem promessa vazia.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {beneficios.map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: "#e4faf4", border: "1px solid #b8f1e4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CheckCircle size={14} style={{ color: "#127055" }} />
                </div>
                <span style={{ color: "#111d2e", fontSize: 15, fontWeight: 500 }}>{b}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, padding: 20, background: "#fff", borderRadius: 12, border: "1px solid #e2e6ec" }}>
            <p style={{ color: "#111d2e", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
              "A migração do ERP foi muito rápida e no mesmo dia eu comecei a usar o Oficinaz."
            </p>
            <p style={{ color: "#7a8897", fontSize: 13 }}>— Carlos A., dono de oficina em São Paulo</p>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {done ? (
            <div style={{
              background: "#fff", borderRadius: 20, padding: "56px 32px",
              textAlign: "center", border: "1px solid #b8f1e4",
              boxShadow: "0 8px 32px rgba(46,196,160,0.10)",
            }}>
              <CheckCircle size={56} style={{ color: "#2ec4a0", marginBottom: 20 }} />
              <h3 style={{ color: "#111d2e", fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Recebemos seu contato!</h3>
              <p style={{ color: "#5a6778", fontSize: 16, lineHeight: 1.7 }}>
                Nossa equipe vai entrar em contato em até 1 dia útil pelo WhatsApp ou e-mail informado.
              </p>
            </div>
          ) : (
            <div style={{
              background: "#fff", borderRadius: 20, padding: 36,
              border: "1px solid #e2e6ec", boxShadow: "0 8px 32px rgba(17,29,46,0.06)",
            }}>
              <p style={{ color: "#111d2e", fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
                Fale com um especialista em oficinas. Informe seus dados:
              </p>
              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {fields.map(({ label, key, placeholder, type }) => (
                    <div key={key}>
                      <label style={{ display: "block", color: "#5a6778", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{label} <span style={{ color: "#ef4444" }}>*</span></label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        style={{
                          width: "100%", padding: "12px 16px", borderRadius: 8,
                          border: "1px solid #e2e6ec", fontSize: 15, fontFamily: "inherit",
                          color: "#111d2e", outline: "none", boxSizing: "border-box",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => e.target.style.borderColor = "#2ec4a0"}
                        onBlur={e => e.target.style.borderColor = "#e2e6ec"}
                      />
                    </div>
                  ))}
                </div>

                <button type="submit" style={{
                  marginTop: 28, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "#2ec4a0", color: "#fff",
                  padding: "15px 28px", borderRadius: 10, border: "none",
                  fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                  transition: "background 0.2s, transform 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#1eb880"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#2ec4a0"; e.currentTarget.style.transform = "none"; }}>
                  Quero conhecer o Oficinaz <ArrowRight size={18} />
                </button>

                <p style={{ color: "#a0acbb", fontSize: 13, textAlign: "center", marginTop: 14 }}>
                  Sem compromisso · Resposta em até 1 dia útil
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .demo-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
