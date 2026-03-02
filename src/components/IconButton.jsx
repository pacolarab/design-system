import { useState } from "react";
import "../tokens/index.css";

const SIZE_MAP = {
  XL: { cssVar: "var(--layout-button-xl-size)", iconPx: 32 },
  L:  { cssVar: "var(--layout-button-l-size)",  iconPx: 24 },
  M:  { cssVar: "var(--layout-button-m-size)",  iconPx: 20 },
  S:  { cssVar: "var(--layout-button-s-size)",  iconPx: 20 },
  XS: { cssVar: "var(--layout-button-xs-size)", iconPx: 16 },
};

// icon color is set via CSS `color` prop and consumed as `currentColor` in the SVGs
const STATE_STYLES = {
  primary: {
    default:  { bg: "var(--button-primary-default-fill)",  border: "var(--button-primary-default-stroke)",  color: "#ffffff", opacity: 1   },
    hover:    { bg: "var(--button-primary-hover-fill)",    border: null,                                    color: "#ffffff", opacity: 1   },
    focus:    { bg: "var(--button-primary-focused-fill)",  border: "var(--button-primary-focused-stroke)",  color: "#ffffff", opacity: 1   },
    disabled: { bg: "var(--button-primary-disabled-fill)", border: null,                                    color: "#ffffff", opacity: 0.5 },
  },
  secondary: {
    default:  { bg: "var(--button-secondary-default-fill)",  border: "var(--button-secondary-default-stroke)",  color: "var(--texts-01)", opacity: 1   },
    hover:    { bg: "var(--fills-p3)",                        border: null,                                      color: "#ffffff",         opacity: 1   },
    focus:    { bg: "var(--button-secondary-focused-fill)",   border: "var(--button-secondary-focused-stroke)",  color: "var(--texts-01)", opacity: 1   },
    disabled: { bg: "transparent",                            border: null,                                      color: "var(--texts-01)", opacity: 0.4 },
  },
};

function IconArrow({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10H16M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPlay({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <polygon points="10,6 26,16 10,26" fill="currentColor" />
    </svg>
  );
}

export default function IconButton({
  type = "primary",
  size = "M",
  disabled = false,
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const stateKey = disabled ? "disabled" : isFocused ? "focus" : isHovered ? "hover" : "default";
  const { bg, border, color, opacity } = STATE_STYLES[type]?.[stateKey] ?? STATE_STYLES.primary.default;
  const { cssVar, iconPx } = SIZE_MAP[size] ?? SIZE_MAP.M;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); }}
      onFocus={() => !disabled && setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        width: cssVar,
        height: cssVar,
        borderRadius: "var(--layout-corners-rounded)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bg,
        border: border ? `1px solid ${border}` : "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity,
        color,
        transition: "background-color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease",
        outline: "none",
        flexShrink: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      {size === "XL" ? <IconPlay size={iconPx} /> : <IconArrow size={iconPx} />}
    </button>
  );
}
