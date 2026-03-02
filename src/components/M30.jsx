import "../tokens/index.css";
import Button from "./Button";
import IconButton from "./IconButton";

export default function M30({
  image,
  title = "Espacios diseñados para formar a los profesionales del futuro",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas dolor vel facilisis egestas.",
  ctaLabel = "Saber más",
  onCtaClick,
  currentSlide = 1,
  totalSlides = 5,
  progress = 55,
  onPrev,
  onNext,
}) {
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section style={{
      width: "100%",
      padding: "var(--layout-spacers-12) var(--layout-grids-wrapper-default)",
      borderTop: "0.5px solid var(--strokes-icons-04)",
      backgroundColor: "var(--backgrounds-01)",
      boxSizing: "border-box",
    }}>

      {/* Content */}
      <div style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1312 / 738",
        maxHeight: 1176,
        overflow: "hidden",
        borderRadius: "var(--layout-corners-s)",
      }}>

        {/* Background image */}
        {image && (
          <img
            src={image}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}

        {/* Content Box */}
        <div style={{
          position: "absolute",
          bottom: 24,
          left: 24,
          width: "33.84%",
          maxWidth: 590,
          maxHeight: 698,
          aspectRatio: "444 / 524",
          backgroundColor: "var(--fills-always-white)",
          borderRadius: "var(--layout-corners-s)",
          overflow: "hidden",
          padding: 32,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}>

          {/* TOP */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <h2 className="type-title-03" style={{ color: "var(--texts-01)", margin: 0 }}>
                {title}
              </h2>
              <p className="type-body-03" style={{ color: "var(--texts-02)", margin: 0 }}>
                {subtitle}
              </p>
            </div>
            <Button type="primary" size="S" label={ctaLabel} onClick={onCtaClick} />
          </div>

          {/* BOTTOM */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Progress Bar */}
            <div style={{
              height: 2,
              width: "100%",
              backgroundColor: "var(--fills-gray-1)",
              borderRadius: "var(--layout-corners-rounded)",
            }}>
              <div style={{
                height: "100%",
                width: `${Math.min(100, Math.max(0, progress))}%`,
                backgroundColor: "var(--fills-p3)",
                borderRadius: "var(--layout-corners-rounded)",
              }} />
            </div>

            {/* Steps */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>

              {/* Counter */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="type-body-03" style={{ color: "var(--texts-01)" }}>{pad(currentSlide)}</span>
                <span style={{
                  width: 1,
                  height: 14,
                  backgroundColor: "var(--strokes-icons-04)",
                  display: "inline-block",
                  flexShrink: 0,
                }} />
                <span className="type-body-03" style={{ color: "var(--texts-03)" }}>{pad(totalSlides)}</span>
              </div>

              {/* Prev / Next */}
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ transform: "scaleX(-1)" }}>
                  <IconButton type="secondary" size="S" onClick={onPrev} />
                </div>
                <IconButton type="secondary" size="S" onClick={onNext} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
