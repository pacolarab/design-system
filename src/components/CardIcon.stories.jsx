import CardIcon from "./CardIcon";

export default {
  title: "Components/CardIcon",
  component: CardIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type:      { control: "select", options: ["L-Carrousel", "L-Grid", "S-Grid", "S-grid"] },
    state:     { control: "select", options: ["default", "hover"] },
    title:     { control: "text" },
    subtitle:  { control: "text" },
    bigNum:    { control: "text" },
    bigNumSub: { control: "text" },
  },
  args: {
    type:      "L-Grid",
    state:     "default",
    title:     "Título de la card",
    subtitle:  "Subtítulo o descripción breve del contenido",
    bigNum:    "42K",
    bigNumSub: "Descripción del dato estadístico",
  },
};

export const LGrid = {
  name: "L-Grid",
  args: { type: "L-Grid" },
};

export const LGridHover = {
  name: "L-Grid (hover)",
  args: { type: "L-Grid", state: "hover" },
};

export const LCarrousel = {
  name: "L-Carrousel",
  args: { type: "L-Carrousel" },
};

export const SGrid = {
  name: "S-Grid",
  args: { type: "S-Grid" },
};

export const SGridStats = {
  name: "S-grid (estadística)",
  args: { type: "S-grid" },
};

export const SGridStatsHover = {
  name: "S-grid (estadística, hover)",
  args: { type: "S-grid", state: "hover" },
};

export const AllTypes = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
      <CardIcon {...args} type="L-Grid"      title="L-Grid"      subtitle="421×252px" />
      <CardIcon {...args} type="L-Carrousel" title="L-Carrousel" subtitle="542×290px" />
      <CardIcon {...args} type="S-Grid"      title="S-Grid"      subtitle="424px ancho" />
      <CardIcon {...args} type="S-grid"      bigNum="8.4K"       bigNumSub="En alumnos internacionales" />
    </div>
  ),
};
