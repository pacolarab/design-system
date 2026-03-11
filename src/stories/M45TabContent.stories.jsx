import M45TabContent from "../components/M45TabContent";

export default {
  title: "Modules/M45TabContent",
  component: M45TabContent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title:      { control: "text" },
    body:       { control: "text" },
    buttonText: { control: "text" },
    tabs:       { control: "object" },
    activeTab:  { control: { type: "number", min: 0 } },
    items:      { control: "object" },
    links:      { control: "object" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  name: "Default",
  args: {
    title: "Formación diseñada para el mundo profesional",
    body: "Accede a contenidos actualizados, aprende a tu ritmo y obtén certificados reconocidos por las principales empresas del sector.",
    buttonText: "Ver todos los programas",
    tabs: [
      "Tecnología",
      "Diseño",
      "Negocio",
      "Marketing",
      "Datos",
      "Liderazgo",
    ],
    activeTab: 0,
    items: [
      "Máster en Inteligencia Artificial Aplicada",
      "Máster en Diseño de Producto Digital",
      "Máster en Dirección de Empresas",
      "Máster en Marketing Digital y Growth",
      "Máster en Ciencia de Datos",
    ],
    links: [
      "Descargar guía del programa",
      "Descargar dossier de becas",
    ],
  },
};
