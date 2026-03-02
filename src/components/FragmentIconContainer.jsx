import "../tokens/index.css";

const SIZE_MAP = { L: 64, M: 56, S: 48 };

function IconArrow({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10H16M10 4l6 6-6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FragmentIconContainer({ size = "M", type = "icon" }) {
  const px = SIZE_MAP[size] ?? SIZE_MAP.M;
  const isHover = type === "hover";

  return (
    <div style={{
      width: px,
      height: px,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: isHover ? "var(--fills-p3)" : "var(--fills-gray-3)",
      borderRadius: "var(--layout-corners-xs)",
      flexShrink: 0,
    }}>
      <IconArrow color={isHover ? "#ffffff" : "var(--texts-01)"} />
    </div>
  );
}
