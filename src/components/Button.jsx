import "../tokens/index.css";

const SIZE_TOKENS = {
  L:  { height: "var(--layout-button-l-size)",  padding: "var(--layout-button-l-padding)",  fontSize: "var(--typography-cta-l-sz)",  lineHeight: "var(--typography-cta-l-lh)"  },
  M:  { height: "var(--layout-button-m-size)",  padding: "var(--layout-button-m-padding)",  fontSize: "var(--typography-cta-m-sz)",  lineHeight: "var(--typography-cta-m-lh)"  },
  S:  { height: "var(--layout-button-s-size)",  padding: "var(--layout-button-s-padding)",  fontSize: "var(--typography-cta-s-sz)",  lineHeight: "var(--typography-cta-s-lh)"  },
  XS: { height: "var(--layout-button-xs-size)", padding: "var(--layout-button-xs-padding)", fontSize: "var(--typography-cta-xs-sz)", lineHeight: "var(--typography-cta-xs-lh)" },
};

const STATE_TOKENS = {
  primary: {
    default: { fill: "var(--button-primary-default-fill)", stroke: "var(--button-primary-default-stroke)", text: "var(--button-primary-default-text)" },
    hover:   { fill: "var(--button-primary-hover-fill)",   stroke: "var(--button-primary-hover-stroke)",   text: "var(--button-primary-hover-text)"   },
    disabled: null,
  },
  secondary: {
    default: { fill: "var(--button-secondary-default-fill)", stroke: "var(--button-secondary-default-stroke)", text: "var(--button-secondary-default-text)" },
    hover:   { fill: "var(--button-secondary-hover-fill)",   stroke: "var(--button-secondary-hover-stroke)",   text: "var(--button-secondary-hover-text)"   },
    disabled: null,
  },
  tertiary: {
    default: { fill: "transparent", stroke: "transparent", text: "var(--texts-01)" },
    hover:   { fill: "transparent", stroke: "transparent", text: "var(--texts-01)" },
    disabled: null,
  },
};

function Icon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Button({
  type = "primary",
  size = "M",
  state = "default",
  label = "Button",
  iconLeft = false,
  iconRight = false,
  onClick,
}) {
  const sizeTokens = SIZE_TOKENS[size] ?? SIZE_TOKENS.M;
  const colorTokens = STATE_TOKENS[type]?.[state === "disabled" ? "default" : state] ?? STATE_TOKENS.primary.default;
  const isDisabled = state === "disabled";

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--layout-spacers-2)",
        height: sizeTokens.height,
        padding: `0 ${sizeTokens.padding}`,
        backgroundColor: colorTokens.fill,
        border: `1px solid ${colorTokens.stroke}`,
        borderRadius: "var(--layout-corners-s)",
        color: colorTokens.text,
        fontFamily: "var(--theme-font-family-cta)",
        fontWeight: "var(--theme-font-weight-cta)",
        fontSize: sizeTokens.fontSize,
        lineHeight: sizeTokens.lineHeight,
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.4 : 1,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      }}
    >
      {iconLeft && <Icon />}
      {label}
      {iconRight && <Icon />}
    </button>
  );
}
