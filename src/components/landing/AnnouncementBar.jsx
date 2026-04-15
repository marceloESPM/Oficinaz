import { X, Gift } from "lucide-react";

export default function AnnouncementBar({ onClose }) {

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 110,
      height: 44,
      background: "#FFFBEB",
      borderBottom: "1px solid #FDE68A",
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: 10,
      padding: "0 48px",
      boxShadow: "0 2px 8px rgba(217,119,6,0.10)",
    }}>
      <Gift size={16} color="#D97706" style={{ flexShrink: 0 }} />

      <p className="ann-bar-text" style={{
        margin: 0, fontSize: 13.5, lineHeight: 1.4,
        color: "#111d2e", fontWeight: 500, letterSpacing: 0.1,
        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
      }}>
        <span style={{ fontWeight: 700, color: "#127055" }}>Use o Oficinaz GRÁTIS:</span>
        {" "}Isenção total da mensalidade através de compras com parceiros.{" "}
        <a
          href="#parceiros"
          style={{
            color: "#127055",
            fontWeight: 700,
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          Saiba mais
        </a>
      </p>

      <button
        onClick={onClose}
        aria-label="Fechar aviso"
        style={{
          position: "absolute", right: 14,
          background: "none", border: "none", cursor: "pointer",
          padding: 4, display: "flex", alignItems: "center",
          opacity: 0.5, color: "#111d2e",
        }}
      >
        <X size={15} />
      </button>
    </div>
  );
}
