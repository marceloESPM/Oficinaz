import { CheckCircle, Clock, AlertCircle, DollarSign, TrendingUp, ShoppingCart, FileText, Users } from "lucide-react";

export const OSScreen = () => (
  <div style={{ width: "100%", height: 200, background: "linear-gradient(135deg, #f8f9fb 0%, #e8f5f2 100%)", padding: 16, display: "flex", flexDirection: "column", gap: 12, borderRadius: 12 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#111d2e" }}>Ordem de Serviço #2847</div>
      <span style={{ background: "#fef3c7", color: "#b45309", padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>Em andamento</span>
    </div>
    <div style={{ background: "#fff", padding: 12, borderRadius: 8, border: "1px solid #e2e6ec" }}>
      <div style={{ fontSize: 11, color: "#7a8897", marginBottom: 4 }}>Honda Civic 2019 · Placa ABC-1234</div>
      <div style={{ fontSize: 11, color: "#7a8897", marginBottom: 8 }}>Serviço: Troca de óleo e filtros</div>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: "#a0acbb", marginBottom: 2 }}>Início</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#111d2e" }}>10:30</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: "#a0acbb", marginBottom: 2 }}>Previsão</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#111d2e" }}>11:45</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: "#a0acbb", marginBottom: 2 }}>Técnico</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#111d2e" }}>Roberto</div>
        </div>
      </div>
    </div>
  </div>
);

export const VehicleScreen = () => (
  <div style={{ width: "100%", height: 200, background: "linear-gradient(135deg, #f8f9fb 0%, #e8f5f2 100%)", padding: 16, display: "flex", flexDirection: "column", gap: 12, borderRadius: 12 }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: "#111d2e" }}>Histórico do Veículo</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {[{ date: "15/03/2026", service: "Revisão 10.000km", status: "Concluída" }, { date: "02/02/2026", service: "Troca de pneus", status: "Concluída" }, { date: "20/01/2026", service: "Alinhamento", status: "Concluída" }].map((item, i) => (
        <div key={i} style={{ background: "#fff", padding: 10, borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, border: "1px solid #e2e6ec" }}>
          <div>
            <div style={{ fontWeight: 600, color: "#111d2e" }}>{item.service}</div>
            <div style={{ color: "#a0acbb", fontSize: 10 }}>{item.date}</div>
          </div>
          <span style={{ background: "#dcfce7", color: "#15803d", padding: "2px 8px", borderRadius: 4, fontSize: 9, fontWeight: 700 }}>{item.status}</span>
        </div>
      ))}
    </div>
  </div>
);

export const TeamsScreen = () => (
  <div style={{ width: "100%", height: 200, background: "linear-gradient(135deg, #f8f9fb 0%, #e8f5f2 100%)", padding: 16, display: "flex", flexDirection: "column", gap: 12, borderRadius: 12 }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: "#111d2e" }}>Equipe • Demandas do dia</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {[{ name: "Roberto Silva", tasks: 4, color: "#2ec4a0" }, { name: "Carlos Mendes", tasks: 3, color: "#4dd4b4" }, { name: "Ana Paula", tasks: 2, color: "#2ec4a0" }].map((tech, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", padding: 10, borderRadius: 6, border: "1px solid #e2e6ec" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: tech.color + "25", display: "flex", alignItems: "center", justifyContent: "center", color: tech.color, fontSize: 12, fontWeight: 700 }}>{name.split(" ")[0][0]}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#111d2e" }}>{tech.name}</div>
            <div style={{ fontSize: 10, color: "#a0acbb" }}>{tech.tasks} tarefas</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const SalesScreen = () => (
  <div style={{ width: "100%", height: 200, background: "linear-gradient(135deg, #f8f9fb 0%, #e8f5f2 100%)", padding: 16, display: "flex", flexDirection: "column", gap: 12, borderRadius: 12 }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: "#111d2e" }}>Orçamentos Enviados</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {[{ client: "João Silva", value: "R$ 850,00", status: "Pendente", icon: "📱" }, { client: "Maria Costa", value: "R$ 1.200,00", status: "Aprovado", icon: "✓" }, { client: "Pedro Oliveira", value: "R$ 650,00", status: "Recusado", icon: "✗" }].map((orc, i) => (
        <div key={i} style={{ background: "#fff", padding: 10, borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, border: "1px solid #e2e6ec" }}>
          <div>
            <div style={{ fontWeight: 600, color: "#111d2e" }}>{orc.client}</div>
            <div style={{ color: "#a0acbb", fontSize: 10 }}>{orc.value}</div>
          </div>
          <span style={{ fontSize: 12 }}>{orc.icon}</span>
        </div>
      ))}
    </div>
  </div>
);

export const PDVScreen = () => (
  <div style={{ width: "100%", height: 200, background: "linear-gradient(135deg, #f8f9fb 0%, #e8f5f2 100%)", padding: 16, display: "flex", flexDirection: "column", gap: 12, borderRadius: 12 }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: "#111d2e" }}>Venda em Andamento</div>
    <div style={{ background: "#fff", padding: 12, borderRadius: 8, border: "1px solid #e2e6ec", display: "flex", flexDirection: "column", gap: 8 }}>
      {[{ item: "Óleo Sintético 5L", qty: 2, price: "R$ 85,00" }, { item: "Filtro de Ar", qty: 1, price: "R$ 45,00" }].map((product, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 11, paddingBottom: i < 1 ? 8 : 0, borderBottom: i < 1 ? "1px solid #e2e6ec" : "none" }}>
          <div>
            <div style={{ fontWeight: 600, color: "#111d2e" }}>{product.item}</div>
            <div style={{ color: "#a0acbb", fontSize: 10 }}>Qtd: {product.qty}</div>
          </div>
          <div style={{ fontWeight: 700, color: "#2ec4a0" }}>{product.price}</div>
        </div>
      ))}
      <div style={{ background: "#e4faf4", padding: 8, borderRadius: 6, display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 11, color: "#127055" }}>
        <span>TOTAL:</span>
        <span>R$ 215,00</span>
      </div>
    </div>
  </div>
);

export const NFEScreen = () => (
  <div style={{ width: "100%", height: 200, background: "linear-gradient(135deg, #f8f9fb 0%, #e8f5f2 100%)", padding: 16, display: "flex", flexDirection: "column", gap: 12, borderRadius: 12 }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: "#111d2e" }}>Notas Emitidas • Hoje</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {[{ nfe: "NFe: 000847", type: "NF-e", amount: "R$ 3.450,00", time: "14:32" }, { nfe: "NFc: 000846", type: "NFC-e", amount: "R$ 215,00", time: "13:15" }, { nfe: "NFs: 000845", type: "NFS-e", amount: "R$ 850,00", time: "11:40" }].map((nota, i) => (
        <div key={i} style={{ background: "#fff", padding: 10, borderRadius: 6, border: "1px solid #e2e6ec", display: "flex", justifyContent: "space-between", fontSize: 10 }}>
          <div>
            <div style={{ fontWeight: 700, color: "#111d2e" }}>{nota.nfe}</div>
            <div style={{ color: "#a0acbb", fontSize: 9 }}>{nota.type} · {nota.time}</div>
          </div>
          <div style={{ fontWeight: 700, color: "#111d2e" }}>{nota.amount}</div>
        </div>
      ))}
    </div>
  </div>
);

export const FinancialScreen = () => (
  <div style={{ width: "100%", height: 200, background: "linear-gradient(135deg, #f8f9fb 0%, #e8f5f2 100%)", padding: 16, display: "flex", flexDirection: "column", gap: 12, borderRadius: 12 }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: "#111d2e" }}>Fluxo de Caixa • Hoje</div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <div style={{ background: "#fff", padding: 12, borderRadius: 8, border: "1px solid #e2e6ec" }}>
        <div style={{ fontSize: 9, color: "#a0acbb", marginBottom: 4 }}>ENTRADAS</div>
        <div style={{ fontSize: 16, fontWeight: 800, color: "#15803d" }}>R$ 4.520</div>
        <div style={{ fontSize: 9, color: "#a0acbb", marginTop: 4 }}>+8% vs ontem</div>
      </div>
      <div style={{ background: "#fff", padding: 12, borderRadius: 8, border: "1px solid #e2e6ec" }}>
        <div style={{ fontSize: 9, color: "#a0acbb", marginBottom: 4 }}>SAÍDAS</div>
        <div style={{ fontSize: 16, fontWeight: 800, color: "#dc2626" }}>R$ 1.240</div>
        <div style={{ fontSize: 9, color: "#a0acbb", marginTop: 4 }}>-3% vs ontem</div>
      </div>
    </div>
    <div style={{ background: "#e4faf4", padding: 10, borderRadius: 6, display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 12, color: "#127055" }}>
      <span>Saldo do dia:</span>
      <span>R$ 3.280</span>
    </div>
  </div>
);

export const IntegrationScreen = () => (
  <div style={{ width: "100%", height: 200, background: "linear-gradient(135deg, #f8f9fb 0%, #e8f5f2 100%)", padding: 16, display: "flex", flexDirection: "column", gap: 12, borderRadius: 12 }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: "#111d2e" }}>Visão Integrada • Status</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
      {[{ label: "OS Abertas", value: "12", color: "#2ec4a0" }, { label: "Em Estoque", value: "234", color: "#4dd4b4" }, { label: "Faturado", value: "R$ 8.5k", color: "#2ec4a0" }, { label: "A Receber", value: "R$ 2.1k", color: "#f97316" }].map((metric, i) => (
        <div key={i} style={{ background: "#fff", padding: 10, borderRadius: 6, border: `2px solid ${metric.color}30` }}>
          <div style={{ fontSize: 9, color: "#a0acbb", marginBottom: 4 }}>{metric.label}</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: metric.color }}>{metric.value}</div>
        </div>
      ))}
    </div>
  </div>
);