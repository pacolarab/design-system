import "../tokens/index.css";

function Collage({ images }) {
  var top = images[0] || "";
  var bot1 = images[1] || "";
  var bot2 = images[2] || "";

  return (
    <div style={{
      gridColumn: "8 / 13",
      display: "flex",
      flexDirection: "column",
      gap: "var(--layout-grids-gutter)",
    }}>
      <img
        src={top}
        alt=""
        style={{
          width: "100%",
          height: 280,
          objectFit: "cover",
          borderRadius: "var(--layout-corners-s)",
          display: "block",
        }}
      />
      <div style={{ display: "flex", gap: "var(--layout-grids-gutter)" }}>
        <img
          src={bot1}
          alt=""
          style={{
            flex: 1,
            height: 180,
            objectFit: "cover",
            borderRadius: "var(--layout-corners-s)",
            display: "block",
            minWidth: 0,
          }}
        />
        <img
          src={bot2}
          alt=""
          style={{
            flex: 1,
            height: 180,
            objectFit: "cover",
            borderRadius: "var(--layout-corners-s)",
            display: "block",
            minWidth: 0,
          }}
        />
      </div>
    </div>
  );
}

export default function M21B({
  title = "Título del módulo",
  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas dolor vel facilisis egestas.",
  statNumber = "8.4/10",
  statLabel = "En experiencia internacional de nuestros alumnos",
  ctaLabel = "Saber más",
  onCtaClick,
  images = [],
}) {
  return (
    <section style={{
      backgroundColor: "var(--backgrounds-01)",
      padding: "var(--layout-spacers-9) var(--layout-grids-wrapper-default)",
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: "var(--layout-grids-gutter)",
      width: "100%",
      boxSizing: "border-box",
    }}>

      {/* Left column */}
      <div style={{
        gridColumn: "1 / 7",
        display: "flex",
        flexDirection: "column",
        gap: "var(--layout-spacers-6)",
      }}>

        <h2 className="type-title-03" style={{ color: "var(--texts-01)", margin: 0 }}>
          {title}
        </h2>

        {/* Copies */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--layout-spacers-4)",
        }}>
          <p className="type-body-03" style={{ color: "var(--texts-02)", margin: 0 }}>
            {paragraph}
          </p>

          {/* Stats */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--layout-spacers-2)",
          }}>
            <span className="type-title-04" style={{ color: "var(--texts-01)" }}>
              {statNumber}
            </span>
            <span className="type-body-03" style={{ color: "var(--texts-02)" }}>
              {statLabel}
            </span>
          </div>
        </div>

        <div style={{ alignSelf: "flex-start" }}>
          <button
            onClick={onCtaClick}
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
            {ctaLabel}
          </button>
        </div>
      </div>

      {/* Right column */}
      <Collage images={images} />

    </section>
  );
}
