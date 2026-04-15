import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("oficinaz_cookies");
    if (!choice) setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem("oficinaz_cookies", "accepted");
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem("oficinaz_cookies", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 20, left: 20,
      zIndex: 200,
      background: "rgba(255,255,255,0.96)",
      backdropFilter: "blur(12px)",
      border: "1px solid #e2e6ec",
      borderRadius: 12,
      boxShadow: "0 4px 24px rgba(17,29,46,0.10)",
      padding: "14px 16px",
      maxWidth: 260,
      width: "calc(100% - 40px)",
    }}>
      <p style={{ color: "#5a6778", fontSize: 12.5, lineHeight: 1.6, margin: "0 0 4px 0" }}>
        Usamos cookies para melhorar sua experiência.{" "}
        <a href="#" style={{ color: "#2ec4a0", fontWeight: 600, textDecoration: "none" }}>
          Política de Privacidade
        </a>
      </p>

      <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
        <button onClick={handleReject} style={{
          flex: 1, background: "transparent",
          border: "1px solid #e2e6ec", color: "#7a8897",
          padding: "7px 0", borderRadius: 7,
          fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
          transition: "border-color 0.2s, color 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#c0c8d4"; e.currentTarget.style.color = "#5a6778"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e6ec"; e.currentTarget.style.color = "#7a8897"; }}
        >
          Rejeitar
        </button>
        <button onClick={handleAccept} style={{
          flex: 1, background: "#2ec4a0", border: "none",
          color: "#fff", padding: "7px 0", borderRadius: 7,
          fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
          transition: "background 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#1eb880"}
          onMouseLeave={e => e.currentTarget.style.background = "#2ec4a0"}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
