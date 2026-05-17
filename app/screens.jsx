/* eslint-disable react/prop-types */
/* Minha Arara — Screens.
   Dashboard, Arara, Looks, Vendas, PieceDetail (drawer). */

// === Sample data ===
const PIECES = [
  { id: 1, name: "Vestido midi linho areia", category: "Vestido", size: "M", price: 168, status: "Disponível", statusTone: "success", meta: "12 visitas", favorite: false, gradient: ["#E9E3D5", "#C9D0B8"] },
  { id: 2, name: "Camisa oversize algodão", category: "Camisa", size: "G", price: 89, status: "Disponível", statusTone: "success", meta: "4 favoritos", favorite: true, gradient: ["#F6F4EE", "#E9E3D5"] },
  { id: 3, name: "Saia plissada midi", category: "Saia", size: "P", price: 124, status: "Em curadoria", statusTone: "warning", meta: "rascunho", favorite: false, gradient: ["#E9E3D5", "#BFB39A"] },
  { id: 4, name: "Calça wide leg cintura alta", category: "Calça", size: "M", price: 198, status: "Consignada", statusTone: "info", meta: "Brechó Asa Norte", favorite: false, gradient: ["#D9D7CB", "#A8AE92"] },
  { id: 5, name: "Blazer alfaiataria caramelo", category: "Blazer", size: "M", price: 256, status: "Parada 60+ dias", statusTone: "clay", meta: "considere repostar", favorite: false, gradient: ["#E0D5C2", "#C8A46A"] },
  { id: 6, name: "Top cropped malha canelada", category: "Top", size: "P", price: 64, status: "Vendida", statusTone: "solid", meta: "vendida em 12/05", favorite: false, gradient: ["#C9D0B8", "#7A8A64"] },
  { id: 7, name: "Bolsa estruturada palha", category: "Acessório", size: "U", price: 142, status: "Disponível", statusTone: "success", meta: "1 favorito", favorite: false, gradient: ["#EFE8D7", "#D6C9A8"] },
  { id: 8, name: "Sapatilha couro caramelo", category: "Calçado", size: "37", price: 178, status: "Disponível", statusTone: "success", meta: "3 visitas", favorite: false, gradient: ["#E5DDCC", "#B8A78A"] },
];

const SALES = [
  { id: "VN-128", piece: "Top cropped malha canelada", buyer: "Júlia Bertoni", date: "12 mai", value: 64, channel: "Feira virtual" },
  { id: "VN-127", piece: "Vestido floral viscose", buyer: "Camila Souza", date: "09 mai", value: 132, channel: "Loja própria" },
  { id: "VN-126", piece: "Tricô gola alta marfim", buyer: "Renata Lima", date: "06 mai", value: 96, channel: "Consignação" },
  { id: "VN-125", piece: "Bermuda alfaiataria", buyer: "Marina Diniz", date: "04 mai", value: 78, channel: "Loja própria" },
  { id: "VN-124", piece: "Lenço seda estampado", buyer: "Patrícia Reis", date: "02 mai", value: 58, channel: "Feira virtual" },
];

// ====================================================================
// DASHBOARD
// ====================================================================
function Dashboard({ onOpenPiece, onNavigate }) {
  return (
    <Page>
      {/* Hero — saudação acolhedora */}
      <div className="ma-hero" style={{
        background: "linear-gradient(135deg, var(--ma-sand-200), var(--ma-warm-100))",
        borderRadius: 28, padding: "32px 36px", marginBottom: 28,
        border: "1px solid var(--color-border-subtle)",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
      }} data-row="hero">
        <div>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: ".12em",
            textTransform: "uppercase", color: "var(--ma-olive-700)", marginBottom: 8,
          }}>quinta · 16 de maio</div>
          <h1 className="ma-hero-h1" style={{
            fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 32,
            color: "var(--ma-olive-900)", margin: "0 0 8px", letterSpacing: "-0.01em", lineHeight: 1.15,
          }}>Olá, Marina. Sua arara segue bem cuidada.</h1>
          <div style={{ fontSize: 15, color: "var(--ma-brown-700)", maxWidth: 540, lineHeight: 1.55 }}>
            Você tem <strong style={{ color: "var(--ma-olive-900)" }}>3 peças</strong> esperando publicação e
            <strong style={{ color: "var(--ma-olive-900)" }}> 2 vendas</strong> para confirmar despacho.
          </div>
        </div>
        <Button variant="primary" size="lg" icon={<IconPlus size={18} />}>Cadastrar peça</Button>
      </div>

      {/* Métricas */}
      <div className="ma-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 32 }}>
        <MetricCard label="Peças cadastradas" value="128" trend="+8" hint="esta semana" tone="success" />
        <MetricCard label="Vendas do mês" value="R$ 4.820" trend="+18%" hint="vs abril" tone="success" sparkline />
        <MetricCard label="Ticket médio" value="R$ 142" trend="—" hint="estável" tone="neutral" />
        <MetricCard label="Peças paradas" value="12" trend="-3" hint="60+ dias" tone="warning" />
      </div>

      {/* Atividade + alertas */}
      <div className="ma-split-2-1" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, marginBottom: 32 }}>
        {/* Peças recentes */}
        <Card padding={24}>
          <SectionHeader
            eyebrow="Última semana"
            title="Peças cadastradas"
            action={<Button variant="ghost" size="sm" iconRight={<IconArrowRight size={14} />} onClick={() => onNavigate("arara")}>Ver tudo</Button>}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {PIECES.slice(0, 4).map((p) => (
              <MiniPiece key={p.id} piece={p} onClick={() => onOpenPiece(p)} />
            ))}
          </div>
        </Card>

        {/* Alertas / dicas */}
        <Card padding={24} tone="warm">
          <SectionHeader eyebrow="Para revisar" title="Sua atenção" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <AlertItem
              tone="warning"
              title="3 peças paradas há 60 dias"
              desc="Que tal repostar com nova foto?"
              cta="Ver peças"
            />
            <AlertItem
              tone="info"
              title="2 vendas aguardam despacho"
              desc="Camila e Júlia esperam atualização."
              cta="Ver vendas"
            />
            <AlertItem
              tone="success"
              title="Look 'Domingo sereno' favoritado"
              desc="4 pessoas salvaram esta combinação."
              cta="Abrir look"
            />
          </div>
        </Card>
      </div>

      {/* Vendas + categorias */}
      <div className="ma-split-3-2" style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 24 }}>
        <Card padding={24}>
          <SectionHeader
            eyebrow="Últimas semanas"
            title="Receita por canal"
            action={<Chip active><IconCalendar size={12} /> 30 dias</Chip>}
          />
          <RevenueChart />
        </Card>

        <Card padding={24}>
          <SectionHeader eyebrow="Distribuição" title="Categorias na arara" />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <CategoryBar label="Vestidos" value={32} pct={28} color="var(--ma-olive-700)" />
            <CategoryBar label="Camisas e blusas" value={26} pct={22} color="var(--ma-sage-500)" />
            <CategoryBar label="Calças" value={18} pct={15} color="var(--ma-gold-500)" />
            <CategoryBar label="Saias" value={14} pct={12} color="var(--ma-bluegray-500)" />
            <CategoryBar label="Acessórios" value={22} pct={19} color="var(--ma-clay-500)" />
            <CategoryBar label="Calçados" value={6} pct={4} color="var(--ma-sage-300)" />
          </div>
        </Card>
      </div>
    </Page>
  );
}

// ====================================================================
// Sub-pieces used by Dashboard
// ====================================================================
function MetricCard({ label, value, trend, hint, tone, sparkline }) {
  const trendTones = {
    success: { bg: "rgba(79,98,59,.14)", fg: "var(--ma-olive-900)" },
    warning: { bg: "rgba(200,164,106,.22)", fg: "#7A5C24" },
    neutral: { bg: "var(--ma-sand-200)", fg: "var(--ma-brown-900)" },
  };
  const t = trendTones[tone] || trendTones.neutral;
  return (
    <Card padding={22}>
      <div style={{
        fontSize: 11, fontWeight: 600, letterSpacing: ".10em",
        textTransform: "uppercase", color: "var(--ma-olive-700)",
      }}>{label}</div>
      <div style={{
        fontFamily: "var(--font-sans)", fontSize: 30, fontWeight: 700,
        color: "var(--ma-olive-900)", margin: "10px 0 8px", lineHeight: 1.05, letterSpacing: "-0.01em",
      }}>{value}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          padding: "3px 10px", borderRadius: 999,
          background: t.bg, color: t.fg, fontSize: 11, fontWeight: 600,
        }}>{trend}</span>
        <span style={{ fontSize: 12, color: "var(--ma-taupe-500)" }}>{hint}</span>
      </div>
      {sparkline && (
        <svg viewBox="0 0 200 50" preserveAspectRatio="none" style={{ width: "100%", height: 36, marginTop: 14, display: "block" }}>
          <path d="M0 38 L25 32 L50 36 L75 24 L100 28 L125 18 L150 22 L175 14 L200 8"
            stroke="var(--ma-olive-700)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0 38 L25 32 L50 36 L75 24 L100 28 L125 18 L150 22 L175 14 L200 8 L200 50 L0 50 Z" fill="rgba(79,98,59,.12)"/>
        </svg>
      )}
    </Card>
  );
}

function MiniPiece({ piece, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: "transparent", border: 0, padding: 0, textAlign: "left", cursor: "pointer", fontFamily: "inherit",
    }}>
      <div style={{
        aspectRatio: "1 / 1",
        background: `linear-gradient(160deg, ${piece.gradient[0]}, ${piece.gradient[1]})`,
        borderRadius: 16,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 8, position: "relative", overflow: "hidden",
      }}>
        <div style={{ opacity: 0.32 }}>
          <IconHanger size={56} strokeWidth={1.2} style={{ color: "var(--ma-olive-800)" }} />
        </div>
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ma-olive-900)", lineHeight: 1.3 }}>{piece.name}</div>
      <div style={{ fontSize: 12, color: "var(--ma-brown-700)", marginTop: 2 }}>R$ {piece.price}</div>
    </button>
  );
}

function AlertItem({ tone, title, desc, cta }) {
  const tones = {
    success: "var(--ma-olive-700)",
    warning: "var(--ma-gold-500)",
    info: "var(--ma-bluegray-500)",
  };
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 4,
      padding: "14px 16px", background: "var(--ma-white)",
      borderRadius: 16, borderLeft: `3px solid ${tones[tone]}`,
      boxShadow: "var(--shadow-xs)",
    }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ma-olive-900)" }}>{title}</div>
      <div style={{ fontSize: 12, color: "var(--ma-brown-700)", marginBottom: 4 }}>{desc}</div>
      <a href="#" onClick={(e) => e.preventDefault()} style={{
        fontSize: 12, fontWeight: 600, color: "var(--ma-olive-700)", textDecoration: "none",
        display: "inline-flex", alignItems: "center", gap: 4,
      }}>{cta} <IconArrowRight size={12} /></a>
    </div>
  );
}

function CategoryBar({ label, value, pct, color }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: "var(--ma-brown-900)" }}>{label}</span>
        <span style={{ fontSize: 12, color: "var(--ma-taupe-500)" }}>{value} peças · {pct}%</span>
      </div>
      <div style={{ height: 8, background: "var(--ma-sand-200)", borderRadius: 999, overflow: "hidden" }}>
        <div style={{ width: `${pct * 3}%`, height: "100%", background: color, borderRadius: 999 }}/>
      </div>
    </div>
  );
}

function RevenueChart() {
  const months = ["jan", "fev", "mar", "abr", "mai"];
  const consigna = [320, 410, 380, 520, 480];
  const loja = [880, 1020, 1340, 1180, 1620];
  const feira = [240, 360, 280, 420, 720];
  const max = 2400;
  const barW = 22;
  return (
    <div>
      <div style={{ display: "flex", gap: 24, marginBottom: 18, fontSize: 12 }}>
        <LegendDot color="var(--ma-olive-700)" label="Loja própria" />
        <LegendDot color="var(--ma-sage-500)" label="Consignação" />
        <LegendDot color="var(--ma-gold-500)" label="Feira virtual" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: 220, gap: 14 }}>
        {months.map((m, i) => {
          const total = consigna[i] + loja[i] + feira[i];
          const h = (val) => (val / max) * 200;
          return (
            <div key={m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--ma-olive-900)" }}>R$ {(total/1000).toFixed(1)}k</div>
              <div style={{ width: barW, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: 200 }}>
                <div style={{ height: h(feira[i]), background: "var(--ma-gold-500)", borderRadius: "8px 8px 0 0" }}/>
                <div style={{ height: h(consigna[i]), background: "var(--ma-sage-500)" }}/>
                <div style={{ height: h(loja[i]), background: "var(--ma-olive-700)", borderRadius: i === 0 ? "0 0 8px 8px" : 0 }}/>
              </div>
              <div style={{ fontSize: 11, color: "var(--ma-taupe-500)", textTransform: "uppercase", letterSpacing: ".08em" }}>{m}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LegendDot({ color, label }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--ma-brown-700)" }}>
      <span style={{ width: 10, height: 10, borderRadius: 3, background: color }}/>
      {label}
    </span>
  );
}

// ====================================================================
// ARARA (estoque)
// ====================================================================
function AraraScreen({ onOpenPiece }) {
  const [filter, setFilter] = React.useState("todas");
  const filters = [
    { id: "todas", label: "Todas (128)" },
    { id: "disponivel", label: "Disponíveis (96)" },
    { id: "curadoria", label: "Em curadoria (8)" },
    { id: "consignada", label: "Consignadas (12)" },
    { id: "parada", label: "Paradas (12)" },
  ];
  return (
    <Page>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ma-olive-700)", marginBottom: 6 }}>Sua coleção</div>
          <h1 style={{ fontFamily: "var(--font-sans)", fontSize: 32, fontWeight: 700, color: "var(--ma-olive-900)", margin: 0, letterSpacing: "-0.01em" }}>Minha arara</h1>
          <div style={{ fontSize: 14, color: "var(--ma-brown-700)", marginTop: 4 }}>128 peças · R$ 18.420 em estoque</div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Button variant="secondary" icon={<IconUpload size={14} />} size="sm">Importar planilha</Button>
          <Button icon={<IconPlus size={14} />} size="sm">Cadastrar peça</Button>
        </div>
      </div>

      {/* Filter chips + filter button */}
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
        {filters.map((f) => (
          <Chip key={f.id} active={filter === f.id} onClick={() => setFilter(f.id)}>{f.label}</Chip>
        ))}
        <div style={{ flex: 1 }}/>
        <Button variant="secondary" size="sm" icon={<IconFilter size={14} />}>Filtros</Button>
      </div>

      {/* Grid */}
      <div className="ma-piece-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {PIECES.map((p) => (
          <PieceCard key={p.id} piece={p} onClick={() => onOpenPiece(p)} />
        ))}
      </div>
    </Page>
  );
}

// ====================================================================
// LOOKS
// ====================================================================
function LooksScreen() {
  const looks = [
    { name: "Domingo sereno", pieces: ["Vestido midi linho areia", "Sapatilha couro caramelo", "Bolsa palha"], gradient: ["#E9E3D5", "#C9D0B8"], favs: 4 },
    { name: "Reunião na luz", pieces: ["Blazer alfaiataria", "Camisa branca", "Calça wide leg"], gradient: ["#D6D3C5", "#7A8A64"], favs: 7 },
    { name: "Café com amigas", pieces: ["Top cropped", "Saia plissada midi"], gradient: ["#F0E6D3", "#C8A46A"], favs: 2 },
    { name: "Tarde no parque", pieces: ["Camisa oversize", "Bermuda alfaiataria"], gradient: ["#DCD9C4", "#5D6B4A"], favs: 0 },
  ];
  return (
    <Page>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ma-olive-700)", marginBottom: 6 }}>Curadoria</div>
          <h1 style={{ fontFamily: "var(--font-sans)", fontSize: 32, fontWeight: 700, color: "var(--ma-olive-900)", margin: 0, letterSpacing: "-0.01em" }}>Looks criados</h1>
          <div style={{ fontSize: 14, color: "var(--ma-brown-700)", marginTop: 4 }}>14 combinações montadas · 23 favoritados pelos seus clientes</div>
        </div>
        <Button icon={<IconPlus size={14} />} size="sm">Criar look</Button>
      </div>

      <div className="ma-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {looks.map((look, i) => <LookCard key={i} look={look} />)}
        <CreateLookCard />
      </div>
    </Page>
  );
}

function LookCard({ look }) {
  return (
    <Card padding={0} style={{ overflow: "hidden", cursor: "pointer" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, padding: 4, background: "var(--ma-sand-200)" }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{
            aspectRatio: "1 / 1",
            background: `linear-gradient(${130 + i * 30}deg, ${look.gradient[0]}, ${look.gradient[1]})`,
            borderRadius: 12,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <IconHanger size={36} strokeWidth={1.2} style={{ color: "var(--ma-olive-800)", opacity: 0.32 }} />
          </div>
        ))}
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 600, color: "var(--ma-olive-900)" }}>{look.name}</div>
        <div style={{ fontSize: 13, color: "var(--ma-brown-700)", marginTop: 4, lineHeight: 1.4 }}>
          {look.pieces.length} peças · {look.pieces.slice(0, 2).join(" · ")}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
          <Badge tone={look.favs > 0 ? "clay" : "neutral"} icon={<IconHeart size={11} />}>{look.favs} favoritos</Badge>
          <Button variant="ghost" size="sm" iconRight={<IconArrowRight size={12} />}>Abrir</Button>
        </div>
      </div>
    </Card>
  );
}

function CreateLookCard() {
  return (
    <button style={{
      background: "transparent", border: "2px dashed var(--ma-sage-300)", borderRadius: 24,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: 14, padding: 32, cursor: "pointer", fontFamily: "inherit", color: "var(--ma-olive-700)",
      minHeight: 280,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 999, background: "var(--ma-sage-300)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <IconPlus size={22} style={{ color: "var(--ma-olive-900)" }} />
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ma-olive-900)" }}>Criar novo look</div>
      <div style={{ fontSize: 13, color: "var(--ma-brown-700)", textAlign: "center", maxWidth: 220 }}>
        Combine peças da sua arara em uma composição salva.
      </div>
    </button>
  );
}

// ====================================================================
// VENDAS
// ====================================================================
function VendasScreen() {
  return (
    <Page>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ma-olive-700)", marginBottom: 6 }}>Histórico</div>
          <h1 style={{ fontFamily: "var(--font-sans)", fontSize: 32, fontWeight: 700, color: "var(--ma-olive-900)", margin: 0, letterSpacing: "-0.01em" }}>Vendas</h1>
          <div style={{ fontSize: 14, color: "var(--ma-brown-700)", marginTop: 4 }}>34 vendas em maio · R$ 4.820 de receita</div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Button variant="secondary" size="sm" icon={<IconCalendar size={14} />}>Maio 2026</Button>
          <Button size="sm" icon={<IconPlus size={14} />}>Registrar venda</Button>
        </div>
      </div>

      <div className="ma-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
        <MetricCard label="Receita" value="R$ 4.820" trend="+18%" hint="vs abril" tone="success" />
        <MetricCard label="Vendas" value="34" trend="+6" hint="vs abril" tone="success" />
        <MetricCard label="Ticket médio" value="R$ 142" trend="+R$ 8" hint="vs abril" tone="success" />
      </div>

      <Card padding={0}>
        <div style={{
          padding: "18px 24px", borderBottom: "1px solid var(--color-border-subtle)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <SectionHeader title="Últimas vendas" />
          <Button variant="ghost" size="sm" iconRight={<IconArrowRight size={12} />}>Exportar</Button>
        </div>
        <table className="ma-table" style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)" }}>
          <thead>
            <tr style={{
              fontSize: 11, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase",
              color: "var(--ma-taupe-500)", textAlign: "left",
            }}>
              <th style={{ padding: "12px 24px", fontWeight: 600 }}>Código</th>
              <th style={{ padding: "12px 24px", fontWeight: 600 }}>Peça</th>
              <th style={{ padding: "12px 24px", fontWeight: 600 }}>Compradora</th>
              <th style={{ padding: "12px 24px", fontWeight: 600 }}>Canal</th>
              <th style={{ padding: "12px 24px", fontWeight: 600 }}>Data</th>
              <th style={{ padding: "12px 24px", fontWeight: 600, textAlign: "right" }}>Valor</th>
            </tr>
          </thead>
          <tbody>
            {SALES.map((s, i) => (
              <tr key={s.id} style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "16px 24px", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 13, color: "var(--ma-olive-700)", fontFeatureSettings: '"tnum" 1' }}>{s.id}</td>
                <td style={{ padding: "16px 24px", fontSize: 14, fontWeight: 500, color: "var(--ma-olive-900)" }}>{s.piece}</td>
                <td style={{ padding: "16px 24px", fontSize: 14, color: "var(--ma-brown-900)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <Avatar name={s.buyer} size={26} tone="sand" />
                    {s.buyer}
                  </span>
                </td>
                <td style={{ padding: "16px 24px", fontSize: 14 }}>
                  <Badge tone={s.channel === "Loja própria" ? "success" : s.channel === "Consignação" ? "info" : "warning"}>{s.channel}</Badge>
                </td>
                <td style={{ padding: "16px 24px", fontSize: 14, color: "var(--ma-brown-700)" }}>{s.date}</td>
                <td style={{ padding: "16px 24px", fontSize: 15, fontWeight: 600, color: "var(--ma-olive-900)", textAlign: "right" }}>R$ {s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Page>
  );
}

// ====================================================================
// PIECE DETAIL DRAWER
// ====================================================================
function PieceDetail({ piece, onClose }) {
  if (!piece) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(47,62,34,.32)",
      backdropFilter: "blur(6px)", zIndex: 50,
      display: "flex", justifyContent: "flex-end",
      animation: "fadeIn 240ms cubic-bezier(.22,.61,.36,1)",
    }}>
      <div onClick={(e) => e.stopPropagation()} className="ma-drawer" style={{
        width: 480, background: "var(--ma-warm-100)", height: "100vh", overflow: "auto",
        boxShadow: "var(--shadow-lg)",
        animation: "slideIn 360ms cubic-bezier(.22,.61,.36,1)",
      }}>
        <div style={{ padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ma-olive-700)" }}>Detalhe da peça</div>
          <IconButton label="Fechar" onClick={onClose}><IconClose size={18} /></IconButton>
        </div>

        <div style={{
          aspectRatio: "4 / 5",
          background: `linear-gradient(160deg, ${piece.gradient[0]}, ${piece.gradient[1]})`,
          margin: "0 28px", borderRadius: 24,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <IconHanger size={140} strokeWidth={1.1} style={{ color: "var(--ma-olive-800)", opacity: 0.3 }} />
        </div>

        <div style={{ padding: "24px 28px" }}>
          <Badge tone={piece.statusTone}>{piece.status}</Badge>
          <h2 style={{
            fontFamily: "var(--font-sans)", fontSize: 24, fontWeight: 600,
            color: "var(--ma-olive-900)", margin: "10px 0 6px", letterSpacing: "-0.01em", lineHeight: 1.2,
          }}>{piece.name}</h2>
          <div style={{ fontSize: 13, color: "var(--ma-brown-700)" }}>{piece.category} · Tam {piece.size} · cadastrada há 6 dias</div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 20, marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: 11, color: "var(--ma-taupe-500)", marginBottom: 2 }}>VALOR DE VENDA</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--ma-olive-900)" }}>R$ {piece.price}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "var(--ma-taupe-500)", marginBottom: 2 }}>CUSTO</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "var(--ma-brown-700)" }}>R$ {Math.round(piece.price * 0.4)}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "var(--ma-taupe-500)", marginBottom: 2 }}>MARGEM</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "var(--ma-olive-700)" }}>60%</div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
            <DetailRow label="Procedência" value="Estoque próprio" />
            <DetailRow label="Coleção" value="Outono / Inverno" />
            <DetailRow label="Etiqueta" value="MA-0128" mono />
            <DetailRow label="Última atualização" value="hoje, 14:22" />
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ma-olive-700)", marginBottom: 8 }}>Histórico</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Timeline event="Peça cadastrada" date="10 mai" tone="success" />
              <Timeline event="Foto atualizada" date="11 mai" tone="info" />
              <Timeline event="Publicada na loja" date="12 mai" tone="success" />
              <Timeline event={`${piece.meta}`} date="hoje" tone={piece.statusTone === "clay" ? "warning" : "neutral"} />
            </div>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <Button style={{ flex: 1 }}>Editar peça</Button>
            <Button variant="secondary" icon={<IconCamera size={14} />}>Nova foto</Button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideIn { from { transform: translateX(40px); opacity: 0 } to { transform: translateX(0); opacity: 1 } }
      `}</style>
    </div>
  );
}

function DetailRow({ label, value, mono }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: "var(--ma-taupe-500)", marginBottom: 2 }}>{label.toUpperCase()}</div>
      <div style={{
        fontSize: 14, fontWeight: 500, color: "var(--ma-olive-900)",
        fontFamily: "var(--font-sans)",
        fontFeatureSettings: mono ? '"tnum" 1' : "normal",
        letterSpacing: mono ? "0.02em" : "normal",
      }}>{value}</div>
    </div>
  );
}

function Timeline({ event, date, tone }) {
  const tones = {
    success: "var(--ma-olive-700)",
    warning: "var(--ma-gold-500)",
    info: "var(--ma-bluegray-500)",
    neutral: "var(--ma-taupe-500)",
  };
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13 }}>
      <span style={{ width: 8, height: 8, borderRadius: 999, background: tones[tone] || tones.neutral, flexShrink: 0 }}/>
      <span style={{ color: "var(--ma-olive-900)", fontWeight: 500, flex: 1 }}>{event}</span>
      <span style={{ color: "var(--ma-taupe-500)", fontSize: 12 }}>{date}</span>
    </div>
  );
}

Object.assign(window, { Dashboard, AraraScreen, LooksScreen, VendasScreen, PieceDetail });
