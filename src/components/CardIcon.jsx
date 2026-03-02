import { useState } from "react";
import "../tokens/index.css";
import FragmentIconContainer from "./FragmentIconContainer";

const TITLE_STYLE = {
  fontFamily: "var(--theme-font-family-body)",
  fontSize: "var(--typography-body-4-sz)",
  lineHeight: "var(--typography-body-4-lh)",
  color: "var(--texts-01)",
  margin: 0,
};

const SUBTITLE_STYLE = {
  fontFamily: "var(--theme-font-family-body)",
  fontSize: "var(--typography-body-3-sz)",
  lineHeight: "var(--typography-body-3-lh)",
  color: "var(--texts-02)",
  margin: 0,
};

export default function CardIcon({
  type = "L-Grid",
  state = "default",
  title = "Título de la card",
  subtitle = "Subtítulo o descripción",
  bigNum = "42K",
  bigNumSub = "Descripción del dato",
}) {
  const [isHoveredInternal, setIsHoveredInternal] = useState(false);
  const isHovered = state === "hover" || isHoveredInternal;
  const iconType = isHovered ? "hover" : "icon";

  const baseStyle = {
    backgroundColor: isHovered ? "var(--fills-hover)" : "var(--fills-gray-1)",
    borderRadius: "var(--layout-corners-s)",
    boxSizing: "border-box",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const handlers = {
    onMouseEnter: () => setIsHoveredInternal(true),
    onMouseLeave: () => setIsHoveredInternal(false),
  };

  // S-grid — statistics card, 310×268px, big number absolutely positioned
  if (type === "S-grid") {
    return (
      <div
        {...handlers}
        style={{
          ...baseStyle,
          position: "relative",
          width: 310,
          height: 268,
          padding: "24px",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <FragmentIconContainer size="M" type={iconType} />
        </div>
        <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
          <p style={{
            fontFamily: "var(--theme-font-family-title)",
            fontSize: "var(--typography-title-4-sz)",
            lineHeight: "var(--typography-title-4-lh)",
            fontWeight: "var(--theme-font-weight-title)",
            color: "var(--texts-01)",
            margin: 0,
          }}>
            {bigNum}
          </p>
          <p style={{ ...SUBTITLE_STYLE, marginTop: 4 }}>{bigNumSub}</p>
        </div>
      </div>
    );
  }

  // S-Grid — regular small card, 424px wide, flex column, gap 64px
  if (type === "S-Grid") {
    return (
      <div
        {...handlers}
        style={{
          ...baseStyle,
          width: 424,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--layout-spacers-2)" }}>
          <p style={TITLE_STYLE}>{title}</p>
          <p style={SUBTITLE_STYLE}>{subtitle}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <FragmentIconContainer size="M" type={iconType} />
        </div>
      </div>
    );
  }

  // L-Carrousel (542×290) and L-Grid (421×252) — flex column, space-between
  const dims = type === "L-Carrousel"
    ? { width: 542, height: 290 }
    : { width: 421, height: 252 };

  return (
    <div
      {...handlers}
      style={{
        ...baseStyle,
        ...dims,
        padding: "var(--layout-spacers-6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--layout-spacers-2)" }}>
        <p style={TITLE_STYLE}>{title}</p>
        <p style={SUBTITLE_STYLE}>{subtitle}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <FragmentIconContainer size="M" type={iconType} />
      </div>
    </div>
  );
}
