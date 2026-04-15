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
      position: "fixed", bottom: 0, left: 0, right: 0,
      zIndex: 200,
      background: "rgba(17,29,46,0.96)",
      backdropFilter: "blur(8px)",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "12px 24px",
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: 20, flexWrap: "wrap",
    }}>
      <p style={{ color: "#8eb0d0", fontSize: 13, margin: 0, lineHeight: 1.5 }}>
        Usamos cookies para melhorar sua experiência, conforme a{" "}
        <a href="#" style={{ color: "#2ec4a0", textDecoration: "none", fontWeight: 600 }}>
          LGPD
        </a>.
      </p>
      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button onClick={handleReject} style={{
          background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
          color: "#7a8897", padding: "6px 14px", borderRadius: 6,
          fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
          transition: "color 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.color = "#c4d8eb"}
          onMouseLeave={e => e.currentTarget.style.color = "#7a8897"}
        >
          Rejeitar
        </button>
        <button onClick={handleAccept} style={{
          background: "#2ec4a0", border: "none",
          color: "#fff", padding: "6px 16px", borderRadius: 6,
          fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
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
