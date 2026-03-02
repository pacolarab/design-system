import IconButton from "./IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type:     { control: "select",   options: ["primary", "secondary"] },
    size:     { control: "select",   options: ["XL", "L", "M", "S", "XS"] },
    disabled: { control: "boolean" },
  },
  args: {
    type:     "primary",
    size:     "M",
    disabled: false,
  },
};

export const Default = {};

export const Secondary = { args: { type: "secondary" } };

export const PlayXL = {
  name: "XL (Play)",
  args: { size: "XL" },
};

export const Disabled = { args: { disabled: true } };

export const SecondaryDisabled = {
  name: "Secondary disabled",
  args: { type: "secondary", disabled: true },
};

export const AllSizesPrimary = {
  name: "Todos los tamaños — Primary",
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      {["XL", "L", "M", "S", "XS"].map((s) => (
        <IconButton key={s} {...args} type="primary" size={s} />
      ))}
    </div>
  ),
};

export const AllSizesSecondary = {
  name: "Todos los tamaños — Secondary",
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      {["XL", "L", "M", "S", "XS"].map((s) => (
        <IconButton key={s} {...args} type="secondary" size={s} />
      ))}
    </div>
  ),
};

export const BothTypes = {
  name: "Primary vs Secondary",
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {["XL", "L", "M", "S", "XS"].map((s) => (
          <IconButton key={s} {...args} type="primary" size={s} />
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {["XL", "L", "M", "S", "XS"].map((s) => (
          <IconButton key={s} {...args} type="secondary" size={s} />
        ))}
      </div>
    </div>
  ),
};
