import{j as a}from"./iframe-CsStGfQy.js";/* empty css              */import"./preload-helper-PPVm8Dsz.js";const p={transaction:{background:"var(--fills-s1-1)",color:"var(--texts-secondary-3)"},new:{background:"var(--fills-s2-1)",color:"var(--texts-secondary-2)"},aseptic:{background:"var(--backgrounds-02)",color:"var(--texts-02)"}},i={L:{padding:"3px 8px",fontSize:"var(--typography-label-2-sz)"},XS:{padding:"2px 6px",fontSize:"var(--typography-label-1-sz)"}};function s({type:e="transaction",size:d="L",label:g="LABEL"}){const{background:u,color:m}=p[e]??p.transaction,{padding:y,fontSize:x}=i[d]??i.L;return a.jsx("span",{style:{display:"inline-block",background:u,color:m,padding:y,fontSize:x,fontFamily:"var(--theme-font-family-label)",letterSpacing:"var(--typography-letter-spacing-label)",textTransform:"uppercase",borderRadius:"var(--layout-corners-xxs)",boxSizing:"border-box"},children:g})}s.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{type:{defaultValue:{value:'"transaction"',computed:!1},required:!1},size:{defaultValue:{value:'"L"',computed:!1},required:!1},label:{defaultValue:{value:'"LABEL"',computed:!1},required:!1}}};const T={title:"Components/Tag",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["transaction","new","aseptic"]},size:{control:"select",options:["L","XS"]},label:{control:"text"}},args:{type:"transaction",size:"L",label:"LABEL"}},r={},t={args:{type:"new"}},n={args:{type:"aseptic"}},o={args:{size:"XS"}},l={render:e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(s,{...e,type:"transaction",label:"TRANSACTION"}),a.jsx(s,{...e,type:"new",label:"NEW"}),a.jsx(s,{...e,type:"aseptic",label:"ASEPTIC"})]})},c={render:e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(s,{...e,size:"L",label:"LARGE"}),a.jsx(s,{...e,size:"XS",label:"XSMALL"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "new"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "aseptic"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "XS"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>
      <Tag {...args} type="transaction" label="TRANSACTION" />
      <Tag {...args} type="new" label="NEW" />
      <Tag {...args} type="aseptic" label="ASEPTIC" />
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>
      <Tag {...args} size="L" label="LARGE" />
      <Tag {...args} size="XS" label="XSMALL" />
    </div>
}`,...c.parameters?.docs?.source}}};const v=["Default","New","Aseptic","SizeXS","AllTypes","AllSizes"];export{c as AllSizes,l as AllTypes,n as Aseptic,r as Default,t as New,o as SizeXS,v as __namedExportsOrder,T as default};
