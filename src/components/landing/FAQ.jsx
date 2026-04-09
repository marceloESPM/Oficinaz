import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O Oficinaz permite cadastrar serviços como revisão, troca de óleo e reparos?",
    a: "A plataforma é totalmente parametrizável. Você define os serviços oferecidos, seus custos e margens. Templates são gerados automaticamente para cada tipo de trabalho, agilizando a criação de ordens de serviço.",
  },
  {
    q: "Como funciona o controle de estoque de peças e químicos?",
    a: "Movimentação automática do estoque vinculada às ordens de serviço. O sistema mantém saldo de inventário e dispara alertas quando atinge os mínimos definidos.",
  },
  {
    q: "O sistema integra com emissão de notas fiscais?",
    a: "Sim. Dados da ordem de serviço alimentam automaticamente NF-e e NFS-e. Emissão simplificada com conformidade garantida. Sem necessidade de acessar sistemas externos.",
  },
  {
    q: "É possível registrar fornecedores e fazer pedidos de peças pelo sistema?",
    a: "Sim, o Oficinaz permite cadastrar fornecedores e gerar pedidos de reposição diretamente pelo sistema.",
  },
  {
    q: "O Oficinaz ajuda no controle de ordens de serviço?",
    a: "Sim, o Oficinaz permite o registro, acompanhamento e fechamento de ordens de serviço.",
  },
  {
    q: "O ERP emite notas fiscais para serviços e peças utilizadas?",
    a: "Sim, o sistema emite NF-e e NFC-e tanto para serviços prestados quanto para peças utilizadas.",
  },
  {
    q: "Como o Oficinaz auxilia no acompanhamento dos históricos de veículos atendidos?",
    a: "O sistema permite registrar e consultar históricos completos de atendimentos de veículos.",
  },
  {
    q: "Como é o período de teste?",
    a: "30 dias de acesso completo a todas as funcionalidades. Sem cartão de crédito obrigatório. Onboarding estruturado com acompanhamento da equipe de implementação.",
  },
  {
    q: "O ERP Oficinaz é adequado para oficinas de pequeno e médio porte?",
    a: "Sim. A mesma tecnologia e funcionalidades oferecidas para uma oficina de grande porte estão disponíveis para mecânicas de pequeno e médio porte.",
  },
  {
    q: "Já tenho um ERP. Vocês ajudam na migração dos dados?",
    a: "Sim. Equipe auxilia estruturação e migração de dados legados. Validação de dados importados. Garantia de consistência na transição.",
  },
  {
    q: "Como o sistema ajuda a organizar o fluxo de caixa e contas a pagar e receber?",
    a: "O Oficinaz permite o controle completo do fluxo de caixa, com funcionalidades para contas a pagar e a receber.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ padding: "100px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ color: "#2ec4a0", fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Dúvidas Frequentes</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#111d2e", marginTop: 12, letterSpacing: "-1px" }}>
            Perguntas que toda oficina faz antes de começar<span style={{ color: "#2ec4a0" }}>.</span>
          </h2>
          <p style={{ color: "#5a6778", fontSize: 17, maxWidth: 520, margin: "16px auto 0" }}>
            Respondemos as dúvidas mais comuns para que você tome a melhor decisão para sua oficina.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: "#fff",
              border: `1px solid ${open === i ? "#2ec4a0" : "#e2e6ec"}`,
              borderRadius: 12,
              overflow: "hidden",
              transition: "border-color 0.2s",
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
               width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
               padding: "24px 24px", background: "none", border: "none", cursor: "pointer",
               textAlign: "left", gap: 16,
              }}>
                <span style={{ color: "#111d2e", fontSize: 16, fontWeight: 600, lineHeight: 1.4 }}>{faq.q}</span>
                <ChevronDown size={20} style={{
                  color: "#2ec4a0", flexShrink: 0,
                  transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s",
                }} />
              </button>
              {open === i && (
                <div style={{ padding: "0 24px 20px" }}>
                  <p style={{ color: "#5a6778", fontSize: 15, lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p style={{ color: "#7a8897", fontSize: 16, marginBottom: 20 }}>Ainda tem dúvidas? Nossa equipe responde em minutos.</p>
          <a href="#demo" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#2ec4a0", color: "#fff",
            padding: "14px 32px", borderRadius: 10,
            textDecoration: "none", fontSize: 15, fontWeight: 700,
            transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#1eb880"}
            onMouseLeave={e => e.currentTarget.style.background = "#2ec4a0"}>
            Agendar uma demonstração
          </a>
        </div>
      </div>
    </section>
  );
}