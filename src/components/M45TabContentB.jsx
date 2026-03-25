import { useState } from "react";
import "../tokens/index.css";

const DEFAULT_TABS = [
  "Tab label",
  "Tab label",
  "Tab label",
  "Tab label",
  "Tab label",
  "Tab label",
  "Tab label",
];

const DEFAULT_ITEMS = [
  { label: "Item de lista" },
  { label: "Item de lista" },
  { label: "Item de lista" },
  { label: "Item de lista" },
  { label: "Item de lista" },
  { label: "Item de lista" },
  { label: "Item de lista" },
  { label: "Item de lista" },
];

const DEFAULT_LINKS = [
  { label: "Enlace de descarga" },
  { label: "Enlace de descarga" },
];

const arrowRightIcon =
  "http://localhost:3845/assets/f480cd0d00473a2fc14b48e18cdf3274ede585d0.svg";
const arrowDownIcon =
  "http://localhost:3845/assets/f28627a02be1d4cbcfbc1022407c281783106629.svg";

export default function M45TabContentB({
  title = "Título del módulo",
  body = "Descripción del módulo con información relevante para el usuario.",
  buttonText = "Ver más",
  tabs = DEFAULT_TABS,
  activeTab: activeTabProp = 0,
  items = DEFAULT_ITEMS,
  links = DEFAULT_LINKS,
}) {
  const [activeTab, setActiveTab] = useState(activeTabProp);

  return (
    <section
      style={{
        width: "100%",
        background: "var(--backgrounds-01)",
        padding: "72px var(--layout-grids-wrapper-default)",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
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
          {/* Title row — CSS Grid 12 columnas */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "var(--layout-grids-gutter)",
              alignItems: "start",
            }}
          >
            {/* Title left — columnas 1 / 10 */}
            <div
              style={{
                gridColumn: "1 / 10",
                display: "flex",
                flexDirection: "column",
                gap: "var(--layout-spacers-7)",
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

            {/* Title right — columna 12 / 13 */}
            <div
              style={{
                gridColumn: "12 / 13",
                justifySelf: "end",
                alignSelf: "start",
                paddingTop: "var(--layout-spacers-2)",
              }}
            >
              <button
                className="type-cta-s"
                style={{
                  height: 40,
                  background: "var(--button-primary-default-fill)",
                  border: "1px solid var(--button-primary-default-stroke)",
                  borderRadius: "var(--layout-corners-s)",
                  color: "var(--button-primary-default-text)",
                  fontFamily: "var(--tipography-font-family-cta)",
                  fontSize: "var(--typography-cta-s-sz)",
                  fontWeight: 500,
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

          {/* Tab list */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              paddingTop: "var(--layout-spacers-9)",
              borderBottom: "1px solid var(--strokes-icons-04)",
            }}
          >
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
                    marginBottom: "-1px",
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

        {/* BOTTOM — CSS Grid 12 columnas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "var(--layout-grids-gutter)",
            alignItems: "start",
          }}
        >
          {/* LEFT — columnas 1 / 5 */}
          <div
            style={{
              gridColumn: "1 / 5",
              display: "flex",
              flexDirection: "column",
              gap: "var(--layout-spacers-9)",
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
                    padding: "var(--layout-spacers-6) 0",
                    borderTop: "1px solid var(--strokes-icons-04)",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "var(--layout-spacers-6)",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    className="type-body-04"
                    style={{ color: "var(--texts-01)", flex: 1 }}
                  >
                    {item.label}
                  </span>

                  <button
                    style={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      background: "var(--button-secondary-default-fill)",
                      border: "1px solid var(--button-secondary-default-stroke)",
                      borderRadius: "var(--layout-corners-rounded)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    aria-label="Ver más"
                  >
                    <img
                      src={arrowRightIcon}
                      alt=""
                      style={{ width: 20, height: 20 }}
                    />
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
                <button
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "var(--layout-spacers-2)",
                    alignItems: "center",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: 0,
                  }}
                >
                  <img
                    src={arrowDownIcon}
                    alt=""
                    style={{ width: 24, height: 24 }}
                  />
                  <span
                    className="type-cta-l"
                    style={{
                      color: "var(--button-link-primary-default-text)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {link.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — columnas 7 / 13 */}
          <div
            style={{
              gridColumn: "7 / 13",
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
                  gap: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 56,
                  border: "1px solid var(--strokes-icons-04)",
                  borderRadius: "var(--layout-corners-xs)",
                  boxSizing: "border-box",
                }}
              >
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
