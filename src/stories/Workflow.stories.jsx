const s = {
  page: {
    fontFamily: "Inter, -apple-system, sans-serif",
    fontSize: 14,
    lineHeight: 1.6,
    color: "#1a1a1a",
    maxWidth: 760,
    padding: "40px 48px",
    boxSizing: "border-box",
  },
  h1: { fontSize: 28, fontWeight: 700, marginBottom: 32, marginTop: 0, color: "#1a1a1a" },
  h2: { fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 16, color: "#1a1a1a" },
  h3: { fontSize: 15, fontWeight: 600, marginTop: 24, marginBottom: 8, color: "#1a1a1a" },
  ul: { paddingLeft: 20, margin: "0 0 8px 0" },
  li: { marginBottom: 4 },
  code: { fontFamily: "monospace", fontSize: 12, background: "#f0f0f0", padding: "1px 5px", borderRadius: 3 },
  hr: { border: "none", borderTop: "1px solid #e5e5e5", margin: "32px 0" },
};

function C({ children }) { return <code style={s.code}>{children}</code>; }

function WorkflowDoc() {
  return (
    <div style={s.page}>
      <h1 style={s.h1}>Design System Workflow</h1>

      {/* ── 1. Autolayout en Figma ── */}
      <h2 style={s.h2}>1. Autolayout en Figma</h2>

      <h3 style={s.h3}>Herramienta</h3>
      <ul style={s.ul}>
        <li style={s.li}>Plugin: <strong>Scripter</strong> (o FigmaScript como alternativa)</li>
        <li style={s.li}>API: <C>figma.variables.getLocalVariablesAsync()</C> (siempre async, nunca getLocalVariables)</li>
        <li style={s.li}>Vincular variables: <C>node.setBoundVariable("paddingLeft", variable)</C></li>
      </ul>

      <h3 style={s.h3}>Reglas generales</h3>
      <ul style={s.ul}>
        <li style={s.li}>Aplicar autolayout siempre de <strong>hijos a padres</strong></li>
        <li style={s.li}>El sizing de los hijos se aplica <strong>después</strong> de que el padre tenga layoutMode</li>
        <li style={s.li}><C>Content</C> es solo un contenedor: fill width, fill height, sin padding, sin variables</li>
        <li style={s.li}>El padre principal (M21, Card, etc.) es quien lleva las variables de spacing</li>
      </ul>

      <h3 style={s.h3}>Variables</h3>
      <ul style={s.ul}>
        <li style={s.li}>Padding lateral del padre → <C>Layout/Grids/Wrapper-Default</C></li>
        <li style={s.li}>Padding top/bottom del padre → <C>Layout/Spacers/*</C></li>
        <li style={s.li}>Gap entre hijos → <C>Layout/Spacers/*</C></li>
        <li style={s.li}>Gap entre columnas → <C>Layout/Grids/Gutter</C></li>
      </ul>

      <h3 style={s.h3}>Sizing de hijos</h3>
      <ul style={s.ul}>
        <li style={s.li}>Textos → FILL horizontal, HUG vertical</li>
        <li style={s.li}>Botones e iconos → HUG horizontal, HUG vertical</li>
        <li style={s.li}>Imágenes → FILL horizontal, FIXED vertical (mantiene ratio)</li>
        <li style={s.li}>Instancias de componentes → solo sizing, no layoutMode</li>
      </ul>

      <h3 style={s.h3}>Modos de layout horizontal</h3>
      <ul style={s.ul}>
        <li style={s.li}><strong>auto</strong> → <C>primaryAxisAlignItems: SPACE_BETWEEN</C> + hijos con tamaño fijo en px via <C>resize()</C></li>
        <li style={s.li}><strong>grid</strong> → <C>itemSpacing</C> con <C>Layout/Grids/Gutter</C> + hijos con FILL</li>
      </ul>

      <hr style={s.hr} />

      {/* ── 2. De Figma a Storybook ── */}
      <h2 style={s.h2}>2. De Figma a Storybook</h2>

      <h3 style={s.h3}>Stack</h3>
      <ul style={s.ul}>
        <li style={s.li}>React + CSS con variables (sin Tailwind)</li>
        <li style={s.li}>Clases tipográficas del sistema: <C>type-title-03</C>, <C>type-body-03</C>, etc.</li>
        <li style={s.li}>Tokens importados desde <C>../tokens/index.css</C></li>
      </ul>

      <h3 style={s.h3}>Grid de columnas</h3>
      <ul style={s.ul}>
        <li style={s.li}>Contenedor: <C>display: grid</C>, <C>grid-template-columns: repeat(12, 1fr)</C>, <C>gap: var(--layout-grids-gutter)</C></li>
        <li style={s.li}>Hijos con <C>grid-column: X / Y</C> según columnas que ocupan</li>
        <li style={s.li}>Ejemplo M21B: Left <C>grid-column: 1 / 7</C>, Right <C>grid-column: 8 / 13</C> (1 columna libre entre ellos)</li>
      </ul>

      <h3 style={s.h3}>Padding del módulo</h3>
      <ul style={s.ul}>
        <li style={s.li}>Lateral: <C>var(--layout-grids-wrapper-default)</C></li>
        <li style={s.li}>Top/bottom: <C>var(--layout-spacers-*)</C> según el módulo</li>
      </ul>

      <h3 style={s.h3}>Botones</h3>
      <ul style={s.ul}>
        <li style={s.li}>Nunca ocupan el 100% del ancho</li>
        <li style={s.li}><C>align-self: flex-start</C> o <C>width: fit-content</C></li>
      </ul>

      <h3 style={s.h3}>Componentes disponibles</h3>
      <ul style={s.ul}>
        <li style={s.li}><C>Button</C> → type, size, label, onClick</li>
        <li style={s.li}><C>Tag</C> → type, size, label</li>
        <li style={s.li}><C>IconButton</C> → type, size, disabled, onClick</li>
        <li style={s.li}><C>FragmentIconContainer</C> → size, type</li>
        <li style={s.li}><C>CardIcon</C> → type, state, title, subtitle</li>
        <li style={s.li}><C>M30</C> → hero slider con imagen, título, subtítulo, CTA, paginación</li>
        <li style={s.li}><C>M21B</C> → dos columnas, título + copies + stats + CTA / collage</li>
      </ul>

      <h3 style={s.h3}>Clases tipográficas</h3>
      <ul style={s.ul}>
        <li style={s.li}>Títulos: <C>type-title-01</C> a <C>type-title-07</C> (Playfair Display, weight 400)</li>
        <li style={s.li}>Body: <C>type-body-01</C> a <C>type-body-06</C> (Manrope, weight 400)</li>
        <li style={s.li}>Labels: <C>type-label-01</C>, <C>type-label-02</C> (Manrope, weight 500, uppercase)</li>
        <li style={s.li}>CTA: <C>type-cta-01</C> a <C>type-cta-03</C> (Manrope, weight 500)</li>
      </ul>
    </div>
  );
}

export default {
  title: "Documentation/Workflow",
  parameters: { layout: "fullscreen" },
};

export const Default = {
  render: () => <WorkflowDoc />,
};
