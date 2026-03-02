# Design System Workflow

## 1. Autolayout en Figma

### Herramienta
- Plugin: **Scripter** (o FigmaScript como alternativa)
- API: `figma.variables.getLocalVariablesAsync()` (siempre async, nunca getLocalVariables)
- Vincular variables: `node.setBoundVariable("paddingLeft", variable)`

### Reglas generales
- Aplicar autolayout siempre de **hijos a padres**
- El sizing de los hijos se aplica **después** de que el padre tenga layoutMode
- `Content` es solo un contenedor: fill width, fill height, sin padding, sin variables
- El padre principal (M21, Card, etc.) es quien lleva las variables de spacing

### Variables
- Padding lateral del padre → `Layout/Grids/Wrapper-Default`
- Padding top/bottom del padre → `Layout/Spacers/*`
- Gap entre hijos → `Layout/Spacers/*`
- Gap entre columnas → `Layout/Grids/Gutter`

### Sizing de hijos
- Textos → FILL horizontal, HUG vertical
- Botones e iconos → HUG horizontal, HUG vertical
- Imágenes → FILL horizontal, FIXED vertical (mantiene ratio)
- Instancias de componentes → solo sizing, no layoutMode

### Modos de layout horizontal
- **auto** → `primaryAxisAlignItems: SPACE_BETWEEN` + hijos con tamaño fijo en px via `resize()`
- **grid** → `itemSpacing` con `Layout/Grids/Gutter` + hijos con FILL

---

## 2. De Figma a Storybook

### Stack
- React + CSS con variables (sin Tailwind)
- Clases tipográficas del sistema: `type-title-03`, `type-body-03`, etc.
- Tokens importados desde `../tokens/index.css`

### Grid de columnas
- Contenedor: `display: grid`, `grid-template-columns: repeat(12, 1fr)`, `gap: var(--layout-grids-gutter)`
- Hijos con `grid-column: X / Y` según columnas que ocupan
- Ejemplo M21B: Left `grid-column: 1 / 7`, Right `grid-column: 8 / 13` (1 columna libre entre ellos)

### Padding del módulo
- Lateral: `var(--layout-grids-wrapper-default)`
- Top/bottom: `var(--layout-spacers-*)` según el módulo

### Botones
- Nunca ocupan el 100% del ancho
- `align-self: flex-start` o `width: fit-content`

### Componentes disponibles
- `Button` → type, size, label, onClick
- `Tag` → type, size, label
- `IconButton` → type, size, disabled, onClick
- `FragmentIconContainer` → size, type
- `CardIcon` → type, state, title, subtitle
- `M30` → hero slider con imagen, título, subtítulo, CTA, paginación
- `M21B` → dos columnas, título + copies + stats + CTA / collage

### Clases tipográficas
- Títulos: `type-title-01` a `type-title-07` (Playfair Display, weight 400)
- Body: `type-body-01` a `type-body-06` (Manrope, weight 400)
- Labels: `type-label-01`, `type-label-02` (Manrope, weight 500, uppercase)
- CTA: `type-cta-01` a `type-cta-03` (Manrope, weight 500)
