export default function UseCases() {
  const cases = [
  {
    title: "Oficinas pequenas e familiares",
    image: "https://media.base44.com/images/public/69cffc3a30bf014e2890f5d3/2408873b8_Mecnicoemoficinacomferramentasecarro.png"
  },
  {
    title: "Oficinas médias",
    image: "/oficinas-medias.png"
  },
  {
    title: "Mecânicos autônomos e a domicílio",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
  },
  {
    title: "Auto centers e oficinas especializadas",
    image: "https://media.base44.com/images/public/69cffc3a30bf014e2890f5d3/690d59391_Mecniconoreparoautomotivocomtablet1.png"
  }];


  return (
    <section style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#2ec4a0", fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Oficinaz</span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#111d2e",
            marginTop: 12, letterSpacing: "-1px", lineHeight: 1.2
          }}>
            A plataforma ideal para todo tipo de oficina mecânica<span style={{ color: "#2ec4a0" }}>.</span>
          </h2>
          <p style={{ color: "#5a6778", fontSize: 16, maxWidth: 600, margin: "20px auto 0" }}>
            Seja você uma oficina pequena, média, especializada ou mecânico autônomo, o Oficinaz se adapta ao seu negócio.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="use-cases-grid">
          {cases.map((c, idx) =>
          <div
            key={idx}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              background: "#fff",
              border: "1px solid #e2e6ec",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#2ec4a0";
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(46,196,160,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e2e6ec";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
            
              <div style={{ position: "relative", width: "100%", paddingBottom: "130%", overflow: "hidden" }}>
                <img src={c.image}
              alt={c.title}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }} />
              
              </div>
              <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ color: "#111d2e", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{c.title}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .use-cases-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .use-cases-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>);

}