import{j as s}from"./iframe-CsStGfQy.js";import{I as r}from"./IconButton-DHhKDn6x.js";import"./preload-helper-PPVm8Dsz.js";/* empty css              */const S={title:"Components/IconButton",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","secondary"]},size:{control:"select",options:["XL","L","M","S","XS"]},disabled:{control:"boolean"}},args:{type:"primary",size:"M",disabled:!1}},n={},o={args:{type:"secondary"}},t={name:"XL (Play)",args:{size:"XL"}},c={args:{disabled:!0}},d={name:"Secondary disabled",args:{type:"secondary",disabled:!0}},i={name:"Todos los tamaños — Primary",render:a=>s.jsx("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:["XL","L","M","S","XS"].map(e=>s.jsx(r,{...a,type:"primary",size:e},e))})},p={name:"Todos los tamaños — Secondary",render:a=>s.jsx("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:["XL","L","M","S","XS"].map(e=>s.jsx(r,{...a,type:"secondary",size:e},e))})},l={name:"Primary vs Secondary",render:a=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[s.jsx("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:["XL","L","M","S","XS"].map(e=>s.jsx(r,{...a,type:"primary",size:e},e))}),s.jsx("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:["XL","L","M","S","XS"].map(e=>s.jsx(r,{...a,type:"secondary",size:e},e))})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "secondary"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "XL (Play)",
  args: {
    size: "XL"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Secondary disabled",
  args: {
    type: "secondary",
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Todos los tamaños — Primary",
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>
      {["XL", "L", "M", "S", "XS"].map(s => <IconButton key={s} {...args} type="primary" size={s} />)}
    </div>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Todos los tamaños — Secondary",
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>
      {["XL", "L", "M", "S", "XS"].map(s => <IconButton key={s} {...args} type="secondary" size={s} />)}
    </div>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Primary vs Secondary",
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "flex-start"
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "16px"
    }}>
        {["XL", "L", "M", "S", "XS"].map(s => <IconButton key={s} {...args} type="primary" size={s} />)}
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "16px"
    }}>
        {["XL", "L", "M", "S", "XS"].map(s => <IconButton key={s} {...args} type="secondary" size={s} />)}
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const x=["Default","Secondary","PlayXL","Disabled","SecondaryDisabled","AllSizesPrimary","AllSizesSecondary","BothTypes"];export{i as AllSizesPrimary,p as AllSizesSecondary,l as BothTypes,n as Default,c as Disabled,t as PlayXL,o as Secondary,d as SecondaryDisabled,x as __namedExportsOrder,S as default};
