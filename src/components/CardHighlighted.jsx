import '../tokens/index.css';
import '../tokens/typography.css';
const checkIcon = "http://localhost:3845/assets/a126f02c98a16a9f2c41985c7dd79f47d4d06d1b.svg";
export default function CardHighlighted({
  label = 'LOREM IPSUM DOLOR SIT',
  price = '00.000',
  currency = '€',
  subtitle = 'Label',
  items = ['Item list', 'Item list', 'Item list', 'Item list'],
  buttonText = 'Button',
  bgColor = 'var(--fills-s1-3)',
}) {
  return (
    <div style={{
      background: bgColor,
      padding: 'var(--layout-spacers-7)',
      borderRadius: 'var(--layout-corners-s)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      width: '100%',
    }}>
      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-spacers-9)' }}>
        {/* Top */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-spacers-2)', color: 'var(--texts-01)' }}>
          <p className="type-label-02" style={{ textTransform: 'uppercase', color: 'var(--texts-01)' }}>
            {label}
          </p>
          <p className="type-title-05" style={{ color: 'var(--texts-01)' }}>
            {price} <span className="type-title-01">{currency}</span>
          </p>
        </div>
        {/* Bottom */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-spacers-2)' }}>
          {/* Subtitle */}
          <p className="type-body-03" style={{ color: 'var(--texts-01)' }}>{subtitle}</p>
          {/* Bottom-Bottom */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-spacers-6)' }}>
            {/* Línea separadora */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%' }} />
            {/* Items + Button */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-spacers-9)' }}>
              {/* Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-spacers-3)' }}>
                {items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <img src={checkIcon} alt="" style={{ width: '20px', height: '22px', flexShrink: 0 }} />
                    <p className="type-body-03" style={{ color: 'var(--texts-01)' }}>{item}</p>
                  </div>
                ))}
              </div>
              {/* Botón */}
              <button
                className="type-cta-02"
                style={{
                  width: '100%',
                  height: 'var(--layout-button-m-size)',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: 'var(--layout-corners-s)',
                  color: 'var(--texts-01)',
                  cursor: 'pointer',
                }}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
