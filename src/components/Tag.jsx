import "../tokens/index.css";

const TYPE_TOKENS = {
  transaction: { background: "var(--fills-s1-1)",    color: "var(--texts-secondary-3)" },
  new:         { background: "var(--fills-s2-1)",    color: "var(--texts-secondary-2)" },
  aseptic:     { background: "var(--backgrounds-02)", color: "var(--texts-02)"          },
};

const SIZE_TOKENS = {
  L:  { padding: "3px 8px",  fontSize: "var(--typography-label-2-sz)" },
  XS: { padding: "2px 6px",  fontSize: "var(--typography-label-1-sz)" },
};

export default function Tag({
  type = "transaction",
  size = "L",
  label = "LABEL",
}) {
  const { background, color } = TYPE_TOKENS[type] ?? TYPE_TOKENS.transaction;
  const { padding, fontSize } = SIZE_TOKENS[size] ?? SIZE_TOKENS.L;

  return (
    <span style={{
      display: "inline-block",
      background,
      color,
      padding,
      fontSize,
      fontFamily: "var(--theme-font-family-label)",
      letterSpacing: "var(--typography-letter-spacing-label)",
      textTransform: "uppercase",
      borderRadius: "var(--layout-corners-xxs)",
      boxSizing: "border-box",
    }}>
      {label}
    </span>
  );
}
