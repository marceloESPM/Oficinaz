import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Silva",
    role: "Proprietário · Oficina Silva & Cia",
    city: "Brasília, DF",
    stars: 5,
    text: "Antes eu não sabia se estava lucrando. Tinha movimento, mas o caixa nunca batia. Com o Oficinaz, vi em tempo real onde estava perdendo dinheiro. Em 3 meses reduzi despesas e aumentei a margem da oficina.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Juliana Santos",
    role: "Sócia · Garage 360°",
    city: "Belo Horizonte, MG",
    stars: 5,
    text: "Abrir OS em papel era um caos. Perdia serviço, perdia peça e o cliente ligava sem resposta. Hoje abro OS em menos de 1 minuto e o mecânico já recebe na tela dele. Acabou o telefone sem fio.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Thiago Mendes",
    role: "Sócio · Garage Mendes & Cia",
    city: "Rio de Janeiro, RJ",
    stars: 5,
    text: "Mando o orçamento pelo WhatsApp direto do sistema. O cliente aprova e a venda já entra no caixa. Antes ficava perdido em conversa de chat e nunca sabia o que tinha sido aprovado ou não.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Beatriz Oliveira",
    role: "Administradora · Centro Automotivo Oliveira",
    city: "Curitiba, PR",
    stars: 5,
    text: "O suporte é humano, responde rápido e resolve. Minha equipe aprendeu a usar em menos de uma semana. O estoque parou de sumir e agora sei exatamente o que tenho em prateleira sem precisar contar na mão.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "80px 24px", background: "#0a1628" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, color: "#fff",
            letterSpacing: "-1px", marginBottom: 12,
          }}>
            Quem já usa sabe a diferença<span style={{ color: "#2ec4a0" }}>.</span>
          </h2>
          <p style={{ color: "#8eb0d0", fontSize: 16, marginBottom: 28 }}>
            Resultados reais de donos e gestores de oficina que pararam de improvisar.
          </p>

        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="testi-grid">
          {testimonials.map((t) => (
            <div key={t.name} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              transition: "box-shadow 0.3s, transform 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(46,196,160,0.12)"; e.currentTarget.style.borderColor = "rgba(46,196,160,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "none"; }}>

              {/* Profile */}
              <div>
                <div style={{ color: "#2ec4a0", fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                <div style={{ color: "#8eb0d0", fontSize: 12, lineHeight: 1.4 }}>{t.role}</div>
                <div style={{ color: "#5a6778", fontSize: 11 }}>{t.city}</div>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={13} style={{ color: "#febc2e", fill: "#febc2e" }} />
                ))}
              </div>

              {/* Quote */}
              <p style={{ color: "#8eb0d0", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .testi-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}