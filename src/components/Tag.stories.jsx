import Tag from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type:  { control: "select", options: ["transaction", "new", "aseptic"] },
    size:  { control: "select", options: ["L", "XS"] },
    label: { control: "text" },
  },
  args: {
    type: "transaction",
    size: "L",
    label: "LABEL",
  },
};

export const Default = {};

export const New = { args: { type: "new" } };

export const Aseptic = { args: { type: "aseptic" } };

export const SizeXS = { args: { size: "XS" } };

export const AllTypes = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Tag {...args} type="transaction" label="TRANSACTION" />
      <Tag {...args} type="new"         label="NEW"         />
      <Tag {...args} type="aseptic"     label="ASEPTIC"     />
    </div>
  ),
};

export const AllSizes = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Tag {...args} size="L"  label="LARGE"  />
      <Tag {...args} size="XS" label="XSMALL" />
    </div>
  ),
};
