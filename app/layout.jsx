/* eslint-disable react/prop-types */
/* Minha Arara — Layout chrome.
   Sidebar, Topbar, Page wrapper. */

const layoutStyles = {
  app: {
    minHeight: "100vh",
    background: "var(--ma-warm-100)",
    color: "var(--color-text)",
    fontFamily: "var(--font-sans)",
    display: "flex",
  },
  sidebar: {
    width: 260,
    flexShrink: 0,
    background: "var(--ma-warm-100)",
    borderRight: "1px solid var(--color-border-subtle)",
    padding: "24px 16px",
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    top: 0,
    height: "100vh",
  },
  logo: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: "-0.015em",
    color: "var(--ma-brown-900)",
    padding: "6px 14px 24px",
  },
  navItem: (active) => ({
    display: "flex", alignItems: "center", gap: 12,
    padding: "11px 14px", borderRadius: 14,
    background: active ? "rgba(79,98,59,.14)" : "transparent",
    color: active ? "var(--ma-olive-900)" : "var(--ma-brown-900)",
    fontSize: 14, fontWeight: active ? 600 : 500,
    cursor: "pointer",
    transition: "all 160ms",
    border: 0, width: "100%", textAlign: "left",
    fontFamily: "var(--font-sans)",
  }),
  topbar: {
    height: 72,
    background: "var(--ma-white)",
    borderBottom: "1px solid var(--color-border-subtle)",
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    gap: 16,
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  main: {
    flex: 1, minWidth: 0, display: "flex", flexDirection: "column",
  },
  content: {
    padding: 32,
    maxWidth: 1280,
    width: "100%",
    boxSizing: "border-box",
  },
};

function Sidebar({ active, onNavigate }) {
  const items = [
    { id: "dashboard", label: "Painel", icon: <IconDashboard size={18} /> },
    { id: "arara", label: "Minha arara", icon: <IconHanger size={18} /> },
    { id: "looks", label: "Looks", icon: <IconLooks size={18} /> },
    { id: "vendas", label: "Vendas", icon: <IconBag size={18} /> },
    { id: "relatorios", label: "Relatórios", icon: <IconChart size={18} /> },
  ];
  const secondary = [
    { id: "consignacao", label: "Consignação", icon: <IconBox size={18} /> },
    { id: "agenda", label: "Agenda", icon: <IconCalendar size={18} /> },
  ];
  return (
    <aside className="ma-sidebar" style={layoutStyles.sidebar}>
      <div style={layoutStyles.logo}>Minha Arara</div>
      <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {items.map((it) => (
          <button key={it.id} style={layoutStyles.navItem(active === it.id)} onClick={() => onNavigate(it.id)}>
            <span style={{ color: active === it.id ? "var(--ma-olive-700)" : "var(--ma-olive-700)", opacity: active === it.id ? 1 : 0.7, display: "flex" }}>{it.icon}</span>
            <span>{it.label}</span>
          </button>
        ))}
        <div style={{
          fontSize: 11, fontWeight: 600, letterSpacing: ".12em",
          textTransform: "uppercase", color: "var(--ma-taupe-500)",
          padding: "20px 14px 8px",
        }}>Mais</div>
        {secondary.map((it) => (
          <button key={it.id} style={layoutStyles.navItem(active === it.id)} onClick={() => onNavigate(it.id)}>
            <span style={{ color: "var(--ma-olive-700)", opacity: 0.7, display: "flex" }}>{it.icon}</span>
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
      <div style={{ marginTop: "auto", padding: 16, background: "var(--ma-sand-200)", borderRadius: 18 }}>
        <IconLeaf size={20} style={{ color: "var(--ma-olive-700)", marginBottom: 8 }} />
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ma-olive-900)", marginBottom: 4, lineHeight: 1.3 }}>
          Moda mais consciente
        </div>
        <div style={{ fontSize: 12, color: "var(--ma-brown-700)", lineHeight: 1.5 }}>
          7 peças repostas neste mês ganharam nova história.
        </div>
      </div>
    </aside>
  );
}

function Topbar({ title, breadcrumb, onSearch, onNew, newLabel = "Cadastrar peça" }) {
  return (
    <header className="ma-topbar" style={layoutStyles.topbar} data-screen-label="topbar">
      <div style={{ flex: 1 }}>
        {breadcrumb && (
          <div style={{ fontSize: 12, fontWeight: 500, color: "var(--ma-taupe-500)", marginBottom: 2 }}>
            {breadcrumb}
          </div>
        )}
        <div style={{
          fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 20,
          color: "var(--ma-olive-900)", letterSpacing: "-0.01em",
        }}>{title}</div>
      </div>
      <div style={{ position: "relative", width: 320 }} className="ma-search">
        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--ma-taupe-500)", display: "flex" }}>
          <IconSearch size={16} />
        </span>
        <input placeholder="Buscar peça, look ou etiqueta…" onChange={onSearch} style={{
          width: "100%",
          fontFamily: "var(--font-sans)", fontSize: 14,
          padding: "10px 14px 10px 38px",
          borderRadius: 12,
          border: "1px solid var(--color-border)",
          background: "var(--ma-warm-100)",
          color: "var(--ma-brown-900)",
          outline: "none",
          boxSizing: "border-box",
        }}/>
      </div>
      <IconButton label="Notificações">
        <IconBell size={18} />
      </IconButton>
      <Button icon={<IconPlus size={16} />} onClick={onNew}>{newLabel}</Button>
      <Avatar name="Marina Veloso" size={40} tone="sage" />
    </header>
  );
}

function Page({ children }) {
  return <div className="ma-content" style={layoutStyles.content}>{children}</div>;
}

// Mobile-only floating bottom nav (visible <= 768px via CSS).
function BottomNav({ active, onNavigate }) {
  const items = [
    { id: "dashboard", label: "Painel", icon: <IconDashboard size={20} /> },
    { id: "arara", label: "Arara", icon: <IconHanger size={20} /> },
    { id: "looks", label: "Looks", icon: <IconLooks size={20} /> },
    { id: "vendas", label: "Vendas", icon: <IconBag size={20} /> },
  ];
  return (
    <nav className="ma-bottom-nav" aria-label="Navegação principal">
      {items.map((it) => (
        <button key={it.id}
          data-active={active === it.id}
          aria-label={it.label}
          onClick={() => onNavigate(it.id)}>
          {it.icon}
        </button>
      ))}
    </nav>
  );
}

Object.assign(window, { Sidebar, Topbar, Page, BottomNav, layoutStyles });
