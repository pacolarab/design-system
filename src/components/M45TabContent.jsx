import { useState } from "react";
import "../tokens/index.css";

const DEFAULT_TABS = [
  "Tab label",
  "Tab label",
  "Tab label",
  "Tab label",
  "Tab label",
  "Tab label",
];

const DEFAULT_ITEMS = [
  "Item de lista",
  "Item de lista",
  "Item de lista",
  "Item de lista",
  "Item de lista",
];

const DEFAULT_LINKS = ["Enlace de descarga", "Enlace de descarga"];

export default function M45TabContent({
  title = "Título del módulo",
  body = "Descripción del módulo con información relevante para el usuario.",
  buttonText = "Link Button",
  tabs = DEFAULT_TABS,
  activeTab: activeTabProp = 0,
  items = DEFAULT_ITEMS,
  links = DEFAULT_LINKS,
}) {
  const [activeTab, setActiveTab] = useState(activeTabProp);

  return (
    <section
      style={{
        background: "var(--backgrounds-01)",
        padding: "72px var(--layout-grids-wrapper-default)",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--layout-spacers-11)",
        }}
      >
        {/* TOP */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--layout-spacers-6)",
            overflow: "hidden",
          }}
        >
          {/* 05-TITLE */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* Title Fill */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--layout-spacers-7)",
                width: 644,
              }}
            >
              <h2
                className="type-title-03"
                style={{ color: "var(--texts-01)", margin: 0 }}
              >
                {title}
              </h2>
              <p
                className="type-body-03"
                style={{ color: "var(--texts-02)", margin: 0 }}
              >
                {body}
              </p>
            </div>

            {/* Right — botón XS primary */}
            <div style={{ paddingTop: "var(--layout-spacers-2)" }}>
              <button
                className="type-cta-01"
                style={{
                  height: 40,
                  background: "var(--button-primary-default-fill)",
                  border: "none",
                  borderRadius: "var(--layout-corners-s)",
                  color: "white",
                  paddingLeft: "var(--layout-button-xs-padding)",
                  paddingRight: "var(--layout-button-xs-padding)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {buttonText}
              </button>
            </div>
          </div>

          {/* ITEM BOX — tabs */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: "var(--layout-spacers-9)",
              borderBottom: "1px solid var(--strokes-icons-04)",
            }}
          >
            {/* Item List */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "var(--layout-spacers-7)",
              }}
            >
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className="type-body-04"
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom:
                      activeTab === i
                        ? "2px solid var(--strokes-icons-p-2)"
                        : "2px solid transparent",
                    paddingBottom: "var(--layout-spacers-7)",
                    paddingLeft: 0,
                    paddingRight: 0,
                    color:
                      activeTab === i
                        ? "var(--texts-primary-1)"
                        : "var(--texts-02)",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--layout-spacers-9)",
              width: 421,
            }}
          >
            {/* Items list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderBottom: "1px solid var(--strokes-icons-04)",
              }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: 96,
                    paddingTop: "var(--layout-spacers-6)",
                    paddingBottom: "var(--layout-spacers-6)",
                    borderTop: "1px solid var(--strokes-icons-04)",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    className="type-body-04"
                    style={{ color: "var(--texts-01)" }}
                  >
                    {item}
                  </span>

                  {/* Botón icono circular */}
                  <button
                    style={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      background: "var(--button-secondary-default-fill)",
                      border: "none",
                      borderRadius: "var(--layout-corners-rounded)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: 18,
                      color: "var(--texts-01)",
                    }}
                    aria-label="Ver más"
                  >
                    →
                  </button>
                </div>
              ))}
            </div>

            {/* Links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--layout-spacers-6)",
              }}
            >
              {links.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="type-cta-01"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "var(--layout-spacers-2)",
                    alignItems: "center",
                    color: "var(--button-link-primary-default-text)",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontSize: 18 }}>↓</span>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — placeholders */}
          <div
            style={{
              width: 755,
              display: "flex",
              flexDirection: "column",
              gap: "var(--layout-spacers-6)",
            }}
          >
            {[0, 1].map((i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "var(--layout-spacers-2)",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 56,
                  border: "1px solid var(--strokes-icons-04)",
                  borderRadius: "var(--layout-corners-xs)",
                  boxSizing: "border-box",
                }}
              >
                <span style={{ fontSize: 18, color: "var(--texts-01)" }}>
                  ↻
                </span>
                <span
                  className="type-body-03"
                  style={{ color: "var(--texts-01)" }}
                >
                  Placeholder
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
