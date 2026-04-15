import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

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
      position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
      zIndex: 200,
      background: "#111d2e",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: 16,
      boxShadow: "0 12px 48px rgba(0,0,0,0.30)",
      padding: "18px 24px",
      display: "flex", alignItems: "center", gap: 20,
      maxWidth: 680, width: "calc(100% - 32px)",
      flexWrap: "wrap",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flex: 1, minWidth: 220 }}>
        <Cookie size={18} style={{ color: "#2ec4a0", flexShrink: 0, marginTop: 2 }} />
        <p style={{ color: "#c4d8eb", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
          Utilizamos cookies para melhorar sua experiência.{" "}
          Ao continuar navegando, você concorda com nossa{" "}
          <a href="#" style={{ color: "#2ec4a0", textDecoration: "underline", textUnderlineOffset: 3 }}>
            Política de Privacidade
          </a>{" "}
          em conformidade com a LGPD.
        </p>
      </div>

      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        <button
          onClick={handleReject}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.18)",
            color: "#8eb0d0",
            padding: "9px 18px", borderRadius: 8,
            fontSize: 13.5, fontWeight: 600, cursor: "pointer",
            fontFamily: "inherit",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "#8eb0d0"; }}
        >
          Rejeitar
        </button>
        <button
          onClick={handleAccept}
          style={{
            background: "#2ec4a0",
            border: "1px solid transparent",
            color: "#fff",
            padding: "9px 20px", borderRadius: 8,
            fontSize: 13.5, fontWeight: 700, cursor: "pointer",
            fontFamily: "inherit",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#1eb880"}
          onMouseLeave={e => e.currentTarget.style.background = "#2ec4a0"}
        >
          Aceitar cookies
        </button>
      </div>
    </div>
  );
}
