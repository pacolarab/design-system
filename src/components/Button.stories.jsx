import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type:      { control: "select", options: ["primary", "secondary", "tertiary"] },
    size:      { control: "select", options: ["L", "M", "S", "XS"] },
    state:     { control: "select", options: ["default", "hover", "disabled"] },
    label:     { control: "text" },
    iconLeft:  { control: "boolean" },
    iconRight: { control: "boolean" },
  },
  args: {
    type: "primary",
    size: "M",
    state: "default",
    label: "Button",
    iconLeft: false,
    iconRight: false,
  },
};

export const Default = {};

export const Secondary = { args: { type: "secondary" } };

export const Tertiary = { args: { type: "tertiary" } };

export const WithIcons = { args: { iconLeft: true, iconRight: true } };

export const Disabled = { args: { state: "disabled" } };

export const AllSizes = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Button {...args} size="L"  label="Large"  />
      <Button {...args} size="M"  label="Medium" />
      <Button {...args} size="S"  label="Small"  />
      <Button {...args} size="XS" label="XSmall" />
    </div>
  ),
};

export const AllTypes = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Button {...args} type="primary"   label="Primary"   />
      <Button {...args} type="secondary" label="Secondary" />
      <Button {...args} type="tertiary"  label="Tertiary"  />
    </div>
  ),
};
