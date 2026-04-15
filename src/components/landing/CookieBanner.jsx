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
      position: "fixed", bottom: 24, left: 24,
      zIndex: 200,
      background: "#111d2e",
      border: "1px solid rgba(46,196,160,0.22)",
      borderRadius: 14,
      boxShadow: "0 8px 32px rgba(0,0,0,0.28)",
      padding: "20px 22px",
      maxWidth: 300,
      width: "calc(100% - 48px)",
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>Controle sua privacidade</span>
        <span style={{ color: "#2ec4a0", fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>LGPD</span>
      </div>

      {/* Body */}
      <p style={{ color: "#8eb0d0", fontSize: 13, lineHeight: 1.6, margin: "0 0 10px 0" }}>
        Nosso site usa cookies para melhorar a navegação e a sua experiência.
      </p>
      <a href="#" style={{ color: "#2ec4a0", fontSize: 13, fontWeight: 600, textDecoration: "none", display: "inline-block", marginBottom: 18 }}
        onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
        onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
      >
        Política de Privacidade
      </a>

      {/* Actions */}
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={handleReject} style={{
          flex: 1,
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "#c4d8eb", padding: "9px 0", borderRadius: 8,
          fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
          transition: "border-color 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"}
        >
          Rejeitar
        </button>
        <button onClick={handleAccept} style={{
          flex: 1,
          background: "#2ec4a0",
          border: "none",
          color: "#fff", padding: "9px 0", borderRadius: 8,
          fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
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
