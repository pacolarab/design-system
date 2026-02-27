import imgAspectRatio from "../assets/imgs/img1.png";

function ActionButton({ text = "Button" }) {
  return (
    <button style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      height: "var(--layout-button-m-size)", minWidth: "140px",
      padding: "13px 20px",
      backgroundColor: "var(--button-primary-default-fill)",
      border: "1px solid var(--button-primary-default-stroke)",
      borderRadius: "var(--layout-corners-s)",
      color: "var(--button-primary-default-text)",
      fontFamily: "var(--theme-font-family-cta)",
      fontWeight: "var(--theme-font-weight-cta)",
      fontSize: "var(--typography-cta-m-sz)",
      lineHeight: "var(--typography-cta-m-lh)",
      cursor: "pointer", alignSelf: "flex-start",
    }}>
      {text}
    </button>
  );
}

export default function M21A() {
  return (
    <section style={{
      backgroundColor: "var(--backgrounds-01)",
      borderTop: "1px solid var(--strokes-icons-04)",
      display: "flex", alignItems: "flex-start", justifyContent: "space-between",
      padding: "var(--layout-spacers-12) var(--layout-grids-wrapper-default)",
      width: "100%", boxSizing: "border-box",
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--layout-spacers-9)", width: "55%" }}>
        <h2 style={{
          color: "var(--texts-01)",
          fontFamily: "var(--theme-font-family-title)",
          fontWeight: "var(--theme-font-weight-title)",
          fontSize: "var(--typography-title-3-sz)",
          lineHeight: "var(--typography-title-3-lh)",
          margin: 0,
        }}>
          Espacios diseñados para formar a los profesionales del futuro
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--layout-spacers-6)" }}>
          <p style={{
            color: "var(--texts-02)",
            fontFamily: "var(--theme-font-family-body)",
            fontSize: "var(--typography-body-3-sz)",
            lineHeight: "var(--typography-body-3-lh)",
            margin: 0,
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas dolor vel
            facilisis egestas. Nulla nec varius ante, vitae imperdiet urna.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--layout-spacers-2)", color: "var(--texts-01)" }}>
            <p style={{ margin: 0, fontFamily: "var(--theme-font-family-title)" }}>
              <span style={{ fontSize: "var(--typography-title-4-sz)", lineHeight: "var(--typography-title-4-lh)", fontWeight: 400 }}>8.4</span>
              <span style={{ fontSize: "var(--typography-title-2-sz)", lineHeight: "var(--typography-title-2-lh)", fontWeight: 400 }}>/10</span>
            </p>
            <p style={{ fontFamily: "var(--theme-font-family-body)", fontSize: "var(--typography-body-3-sz)", lineHeight: "var(--typography-body-3-lh)", margin: 0 }}>
              En experiencia internacional de nuestros alumnos
            </p>
          </div>
        </div>
        <ActionButton text="Button" />
      </div>
      <div style={{ position: "relative", height: "400px", width: "42%", flexShrink: 0 }}>
        <img alt="Hero" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "var(--layout-corners-s)" }} src={imgAspectRatio} />
        <button style={{
          position: "absolute", bottom: "24px", left: "24px",
          display: "flex", alignItems: "center", justifyContent: "center",
          width: "var(--layout-button-m-size)", height: "var(--layout-button-m-size)",
          backgroundColor: "var(--button-primary-default-fill)",
          border: "none", borderRadius: "var(--layout-corners-rounded)", cursor: "pointer",
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20"><polygon points="7,4 16,10 7,16" fill="white" /></svg>
        </button>
      </div>
    </section>
  );
}