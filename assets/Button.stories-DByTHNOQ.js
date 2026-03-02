import{j as e}from"./iframe-CsStGfQy.js";import{B as a}from"./Button-CWSmqh4B.js";import"./preload-helper-PPVm8Dsz.js";/* empty css              */const u={title:"Components/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"select",options:["L","M","S","XS"]},state:{control:"select",options:["default","hover","disabled"]},label:{control:"text"},iconLeft:{control:"boolean"},iconRight:{control:"boolean"}},args:{type:"primary",size:"M",state:"default",label:"Button",iconLeft:!1,iconRight:!1}},s={},t={args:{type:"secondary"}},o={args:{type:"tertiary"}},n={args:{iconLeft:!0,iconRight:!0}},l={args:{state:"disabled"}},c={render:r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(a,{...r,size:"L",label:"Large"}),e.jsx(a,{...r,size:"M",label:"Medium"}),e.jsx(a,{...r,size:"S",label:"Small"}),e.jsx(a,{...r,size:"XS",label:"XSmall"})]})},i={render:r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(a,{...r,type:"primary",label:"Primary"}),e.jsx(a,{...r,type:"secondary",label:"Secondary"}),e.jsx(a,{...r,type:"tertiary",label:"Tertiary"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "secondary"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "tertiary"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    iconLeft: true,
    iconRight: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>
      <Button {...args} size="L" label="Large" />
      <Button {...args} size="M" label="Medium" />
      <Button {...args} size="S" label="Small" />
      <Button {...args} size="XS" label="XSmall" />
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>
      <Button {...args} type="primary" label="Primary" />
      <Button {...args} type="secondary" label="Secondary" />
      <Button {...args} type="tertiary" label="Tertiary" />
    </div>
}`,...i.parameters?.docs?.source}}};const g=["Default","Secondary","Tertiary","WithIcons","Disabled","AllSizes","AllTypes"];export{c as AllSizes,i as AllTypes,s as Default,l as Disabled,t as Secondary,o as Tertiary,n as WithIcons,g as __namedExportsOrder,u as default};
