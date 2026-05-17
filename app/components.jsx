/* eslint-disable react/prop-types */
/* Minha Arara — Atomic UI components.
   Style objects scoped with `componentStyles` to avoid name collisions. */

const componentStyles = {
  // === BUTTONS ===
  btn: {
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: 15,
    border: 0,
    cursor: "pointer",
    padding: "13px 22px",
    borderRadius: 14,
    transition: "all 180ms cubic-bezier(.22,.61,.36,1)",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    lineHeight: 1,
    whiteSpace: "nowrap",
  },
  btnPrimary: { background: "var(--ma-olive-800)", color: "var(--ma-warm-100)" },
  btnSecondary: { background: "var(--ma-warm-100)", color: "var(--ma-olive-800)", border: "1.5px solid var(--ma-sage-300)" },
  btnGhost: { background: "transparent", color: "var(--ma-olive-700)" },
  btnDark: { background: "var(--ma-olive-900)", color: "var(--ma-warm-100)" },
  btnDanger: { background: "transparent", color: "var(--ma-error-500)", border: "1.5px solid rgba(184,92,74,.35)" },
  btnIcon: {
    background: "var(--ma-white)", border: "1px solid var(--color-border)",
    color: "var(--color-text)", width: 40, height: 40, borderRadius: 12,
    padding: 0, display: "inline-flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", transition: "all 180ms",
  },
};

function Button({ variant = "primary", size, icon, iconRight, children, style, ...rest }) {
  const base = componentStyles.btn;
  const variants = {
    primary: componentStyles.btnPrimary,
    secondary: componentStyles.btnSecondary,
    ghost: componentStyles.btnGhost,
    dark: componentStyles.btnDark,
    danger: componentStyles.btnDanger,
  };
  const sizes = {
    sm: { padding: "9px 16px", fontSize: 13, borderRadius: 12 },
    md: {},
    lg: { padding: "16px 28px", fontSize: 16, borderRadius: 16 },
  };
  return (
    <button {...rest} style={{ ...base, ...(variants[variant] || variants.primary), ...(sizes[size] || sizes.md), ...style }}
      onMouseEnter={(e) => {
        if (variant === "primary") e.currentTarget.style.background = "var(--ma-olive-900)";
        if (variant === "ghost") e.currentTarget.style.background = "rgba(79,98,59,.08)";
        if (variant === "secondary") e.currentTarget.style.background = "var(--ma-sand-200)";
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") e.currentTarget.style.background = "var(--ma-olive-800)";
        if (variant === "ghost") e.currentTarget.style.background = "transparent";
        if (variant === "secondary") e.currentTarget.style.background = "var(--ma-warm-100)";
      }}>
      {icon}{children}{iconRight}
    </button>
  );
}

function IconButton({ children, label, style, ...rest }) {
  return (
    <button aria-label={label} {...rest} style={{ ...componentStyles.btnIcon, ...style }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ma-sand-200)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "var(--ma-white)"; }}>
      {children}
    </button>
  );
}

// === INPUTS ===
function Input({ label, hint, error, icon, ...rest }) {
  return (
    <label style={{ display: "block" }}>
      {label && (
        <div style={{
          fontSize: 13, fontWeight: 600, color: error ? "var(--ma-error-500)" : "var(--ma-brown-900)",
          marginBottom: 6,
        }}>{label}</div>
      )}
      <div style={{ position: "relative" }}>
        {icon && (
          <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--ma-taupe-500)", display: "flex" }}>
            {icon}
          </span>
        )}
        <input {...rest} style={{
          width: "100%",
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          padding: icon ? "13px 16px 13px 44px" : "13px 16px",
          borderRadius: 14,
          border: `1.5px solid ${error ? "var(--ma-error-500)" : "var(--color-border)"}`,
          background: error ? "rgba(184,92,74,.06)" : "var(--ma-white)",
          color: "var(--ma-brown-900)",
          outline: "none",
          boxSizing: "border-box",
        }}
          onFocus={(e) => { if (!error) e.target.style.boxShadow = "var(--shadow-focus)"; }}
          onBlur={(e) => { e.target.style.boxShadow = "none"; }}
        />
      </div>
      {(hint || error) && (
        <div style={{ fontSize: 12, marginTop: 6, color: error ? "var(--ma-error-500)" : "var(--color-text-muted)" }}>
          {error || hint}
        </div>
      )}
    </label>
  );
}

// === BADGES & TAGS ===
function Badge({ tone = "neutral", icon, children, style }) {
  const tones = {
    success: { bg: "rgba(79,98,59,.14)", fg: "var(--ma-olive-900)", dot: "var(--ma-olive-700)" },
    warning: { bg: "rgba(200,164,106,.22)", fg: "#7A5C24", dot: "var(--ma-gold-500)" },
    error:   { bg: "rgba(184,92,74,.14)",  fg: "#8E3F2F", dot: "var(--ma-error-500)" },
    info:    { bg: "rgba(107,138,142,.18)", fg: "#3F595D", dot: "var(--ma-bluegray-500)" },
    clay:    { bg: "rgba(184,116,78,.18)",  fg: "#7E4324", dot: "var(--ma-clay-500)" },
    neutral: { bg: "var(--ma-sand-200)",    fg: "var(--ma-brown-900)", dot: "var(--ma-taupe-500)" },
    solid:   { bg: "var(--ma-olive-800)",   fg: "var(--ma-warm-100)", dot: "var(--ma-warm-100)" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "5px 11px", borderRadius: 999,
      background: t.bg, color: t.fg,
      fontSize: 12, fontWeight: 600, lineHeight: 1.4,
      ...style,
    }}>
      {icon || <span style={{ width: 7, height: 7, borderRadius: 999, background: t.dot }} />}
      {children}
    </span>
  );
}

// === CARDS ===
function Card({ children, padding = 24, tone = "white", style, ...rest }) {
  const bgs = {
    white: "var(--ma-white)",
    warm: "var(--ma-warm-100)",
    sand: "var(--ma-sand-200)",
    sage: "var(--ma-sage-300)",
    olive: "var(--ma-olive-900)",
  };
  return (
    <div {...rest} style={{
      background: bgs[tone] || bgs.white,
      borderRadius: 24,
      border: tone === "white" ? "1px solid var(--color-border-subtle)" : "0",
      padding,
      boxShadow: tone === "white" ? "var(--shadow-xs)" : "none",
      color: tone === "olive" ? "var(--ma-warm-100)" : "inherit",
      ...style,
    }}>{children}</div>
  );
}

// === AVATAR ===
function Avatar({ name = "M", src, size = 40, tone = "sage" }) {
  const initials = name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
  const bgs = { sage: "var(--ma-sage-300)", sand: "var(--ma-sand-200)", olive: "var(--ma-olive-800)" };
  const fgs = { sage: "var(--ma-olive-900)", sand: "var(--ma-brown-900)", olive: "var(--ma-warm-100)" };
  return (
    <div style={{
      width: size, height: size, borderRadius: 999,
      background: src ? `center/cover url(${src}) var(--ma-sage-300)` : bgs[tone],
      color: fgs[tone], display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.4, fontWeight: 600, flexShrink: 0,
    }}>{!src && initials}</div>
  );
}

// === DIVIDER ===
function Divider({ vertical, style }) {
  return vertical
    ? <div style={{ width: 1, alignSelf: "stretch", background: "var(--color-border)", ...style }} />
    : <div style={{ height: 1, background: "var(--color-border)", ...style }} />;
}

// === SECTION HEADER ===
function SectionHeader({ eyebrow, title, action }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20 }}>
      <div>
        {eyebrow && <div style={{
          fontSize: 11, fontWeight: 600, letterSpacing: ".12em",
          textTransform: "uppercase", color: "var(--ma-olive-700)", marginBottom: 4,
        }}>{eyebrow}</div>}
        <h2 style={{
          fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 22,
          color: "var(--ma-olive-900)", margin: 0, letterSpacing: "-0.01em",
        }}>{title}</h2>
      </div>
      {action}
    </div>
  );
}

// === CHIP / FILTER PILL ===
function Chip({ active, icon, children, ...rest }) {
  return (
    <button {...rest} style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "8px 14px", borderRadius: 999,
      background: active ? "var(--ma-olive-800)" : "var(--ma-white)",
      color: active ? "var(--ma-warm-100)" : "var(--ma-olive-900)",
      border: `1.5px solid ${active ? "var(--ma-olive-800)" : "var(--color-border)"}`,
      fontSize: 13, fontWeight: 500, cursor: "pointer",
      fontFamily: "var(--font-sans)",
      transition: "all 180ms",
    }}>
      {icon}{children}
    </button>
  );
}

// === PIECE CARD ===
function PieceCard({ piece, onClick }) {
  return (
    <article onClick={onClick} style={{
      background: "var(--ma-white)",
      borderRadius: 24,
      border: "1px solid var(--color-border-subtle)",
      overflow: "hidden",
      cursor: "pointer",
      transition: "all 220ms cubic-bezier(.22,.61,.36,1)",
      display: "flex", flexDirection: "column",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-sm)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{
        aspectRatio: "4 / 5",
        background: `linear-gradient(160deg, ${piece.gradient[0]}, ${piece.gradient[1]})`,
        position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Badge tone={piece.statusTone} style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,.88)", backdropFilter: "blur(8px)" }}>
          {piece.status}
        </Badge>
        <button aria-label="Favoritar" style={{
          position: "absolute", top: 12, left: 12, width: 34, height: 34,
          borderRadius: 999, background: "rgba(255,255,255,.88)", backdropFilter: "blur(8px)",
          border: 0, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          color: piece.favorite ? "var(--ma-clay-500)" : "var(--ma-olive-700)",
        }} onClick={(e) => e.stopPropagation()}>
          <IconHeart size={16} />
        </button>
        <div style={{ opacity: 0.32, width: "40%", maxWidth: 90 }}>
          <IconHanger size={90} strokeWidth={1.2} style={{ color: "var(--ma-olive-800)" }} />
        </div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{
          fontSize: 11, fontWeight: 600, letterSpacing: ".06em",
          textTransform: "uppercase", color: "var(--ma-olive-700)",
        }}>{piece.category} · Tam {piece.size}</div>
        <div style={{
          fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15,
          color: "var(--ma-olive-900)", marginTop: 4, lineHeight: 1.3,
        }}>{piece.name}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 10 }}>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 600, color: "var(--ma-brown-900)" }}>
            R$ {piece.price.toLocaleString("pt-BR", { minimumFractionDigits: 0 })}
          </div>
          <div style={{ fontSize: 11, color: "var(--ma-taupe-500)" }}>{piece.meta}</div>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { Button, IconButton, Input, Badge, Card, Avatar, Divider, SectionHeader, Chip, PieceCard });
