const s = {
  page: {
    fontFamily: "Inter, -apple-system, sans-serif",
    fontSize: 15,
    lineHeight: 1.7,
    color: "#1a1a1a",
    maxWidth: 720,
    padding: "48px 48px",
    boxSizing: "border-box",
  },
  h1: { fontSize: 26, fontWeight: 700, margin: "0 0 32px 0", color: "#1a1a1a", lineHeight: 1.3 },
  h2: { fontSize: 18, fontWeight: 700, margin: "40px 0 12px 0", color: "#1a1a1a" },
  p:  { margin: "0 0 16px 0", color: "#333" },
};

function WorkflowDoc() {
  return (
    <div style={s.page}>
      <h1 style={s.h1}>Cómo estamos construyendo el sistema de diseño</h1>

      <p style={s.p}>Estamos creando un sistema de diseño que conecta Figma con código de forma consistente y eficiente. El proceso tiene dos partes bien diferenciadas.</p>

      <h2 style={s.h2}>Parte 1: Preparar los componentes en Figma</h2>

      <p style={s.p}>Antes de pasar cualquier componente a código, lo preparamos en Figma aplicando autolayout — el sistema de layout propio de Figma que define cómo se organizan y escalan los elementos internos de cada componente.</p>

      <p style={s.p}>El proceso siempre empieza de la misma manera: compartimos el link directo al nodo en Figma y hacemos una captura del panel de capas para verificar la estructura y los nombres antes de escribir nada. Este paso es fundamental para garantizar que el script que generamos a continuación funciona correctamente.</p>

      <p style={s.p}>Para aplicar el autolayout usamos Scripter, un plugin de Figma que permite ejecutar scripts de JavaScript directamente sobre los componentes. Esto nos permite configurar layouts complejos de forma automática en segundos, en lugar de hacerlo manualmente capa por capa.</p>

      <p style={s.p}>Para que todo funcione de forma predecible, hemos establecido una nomenclatura estándar para las capas de Figma. El frame principal lleva el nombre del componente, el contenedor interno siempre se llama Content, y las secciones internas se nombran por su posición o rol: Top, Bottom, Left, Right, Title, Copies, Stats. Esta convención hace que los scripts sean reutilizables y que cualquier persona del equipo pueda orientarse rápidamente dentro de cualquier componente.</p>

      <p style={s.p}>Lo clave es que estos layouts no usan valores fijos en píxeles sino variables del sistema de tokens — por ejemplo Layout/Spacers/6 para un espaciado de 24px o Layout/Grids/Wrapper-Default para el padding lateral. Estas variables son las mismas que usaremos en el código, por lo que Figma y el código hablan el mismo idioma desde el principio.</p>

      <p style={s.p}>El proceso tiene sus complejidades técnicas. Cuando los componentes tienen muchos niveles de anidamiento, los scripts de Scripter pueden fallar silenciosamente sin mostrar errores claros. Esto nos obliga a trabajar de forma incremental — aplicando y verificando capa por capa — en lugar de ejecutar el script completo de una vez. Es una limitación del entorno de scripting de Figma que estamos aprendiendo a gestionar, y que nos está ayudando a definir unas reglas más sólidas para que el proceso sea más predecible y repetible a medida que escalamos.</p>

      <h2 style={s.h2}>Parte 2: Pasar los componentes a código</h2>

      <p style={s.p}>Una vez que el componente está correctamente preparado en Figma, lo trasladamos a React usando Storybook como entorno de desarrollo y visualización. Storybook nos permite ver cada componente de forma aislada, probar sus variantes y tener una librería visual siempre actualizada.</p>

      <p style={s.p}>El código usa exactamente las mismas variables de tokens que Figma. Para los layouts usamos CSS Grid con 12 columnas, igual que en Figma, lo que hace que la traducción entre diseño y código sea directa y predecible. Cada columna que ocupa un elemento en Figma se refleja directamente en el código con grid-column.</p>

      <h2 style={s.h2}>Cómo lo estamos haciendo</h2>

      <p style={s.p}>Estamos usando Claude como asistente en todo el proceso — tanto para generar los scripts de Scripter como para escribir el código de los componentes en React. Trabajamos de forma iterativa: definimos la estructura del componente en Figma, la preparamos con el script, la pasamos a código y ajustamos hasta que el resultado es fiel al diseño.</p>

      <p style={s.p}>Para que el equipo pueda revisar y validar los componentes en cualquier momento, el Storybook está publicado y accesible mediante Chromatic, un servicio de publicación oficial de Storybook. Cualquier miembro del equipo puede ver la librería actualizada de componentes en la URL compartida sin necesidad de instalar nada ni tener acceso al código.</p>

      <p style={s.p}>A medida que avanzamos estamos documentando todas las decisiones y reglas del sistema en un archivo de workflow dentro del propio proyecto, accesible también desde Storybook. Esto garantiza que cualquier diseñador o desarrollador del equipo pueda incorporarse y trabajar con las mismas reglas desde el primer día.</p>

      <p style={{ ...s.p, marginBottom: 0 }}>El resultado es un sistema vivo, escalable y bien documentado que reduce el margen de error entre diseño y desarrollo y acelera significativamente la producción de nuevas piezas.</p>
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
