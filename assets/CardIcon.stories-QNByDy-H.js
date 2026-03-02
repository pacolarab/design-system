import{j as e,r as I}from"./iframe-CsStGfQy.js";/* empty css              */import"./preload-helper-PPVm8Dsz.js";const S={L:64,M:56,S:48};function T({color:r}){return e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M4 10H16M10 4l6 6-6 6",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function u({size:r="M",type:m="icon"}){const s=S[r]??S.M,a=m==="hover";return e.jsx("div",{style:{width:s,height:s,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:a?"var(--fills-p3)":"var(--fills-gray-3)",borderRadius:"var(--layout-corners-xs)",flexShrink:0},children:e.jsx(T,{color:a?"#ffffff":"var(--texts-01)"})})}u.__docgenInfo={description:"",methods:[],displayName:"FragmentIconContainer",props:{size:{defaultValue:{value:'"M"',computed:!1},required:!1},type:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};const b={fontFamily:"var(--theme-font-family-body)",fontSize:"var(--typography-body-4-sz)",lineHeight:"var(--typography-body-4-lh)",color:"var(--texts-01)",margin:0},x={fontFamily:"var(--theme-font-family-body)",fontSize:"var(--typography-body-3-sz)",lineHeight:"var(--typography-body-3-lh)",color:"var(--texts-02)",margin:0};function t({type:r="L-Grid",state:m="default",title:s="Título de la card",subtitle:a="Subtítulo o descripción",bigNum:L="42K",bigNumSub:G="Descripción del dato"}){const[j,h]=I.useState(!1),v=m==="hover"||j,y=v?"hover":"icon",f={backgroundColor:v?"var(--fills-hover)":"var(--fills-gray-1)",borderRadius:"var(--layout-corners-s)",boxSizing:"border-box",cursor:"pointer",transition:"background-color 0.2s ease"},g={onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1)};if(r==="S-grid")return e.jsxs("div",{...g,style:{...f,position:"relative",width:310,height:268,padding:"24px",overflow:"hidden"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(u,{size:"M",type:y})}),e.jsxs("div",{style:{position:"absolute",bottom:24,left:24,right:24},children:[e.jsx("p",{style:{fontFamily:"var(--theme-font-family-title)",fontSize:"var(--typography-title-4-sz)",lineHeight:"var(--typography-title-4-lh)",fontWeight:"var(--theme-font-weight-title)",color:"var(--texts-01)",margin:0},children:L}),e.jsx("p",{style:{...x,marginTop:4},children:G})]})]});if(r==="S-Grid")return e.jsxs("div",{...g,style:{...f,width:424,padding:"24px",display:"flex",flexDirection:"column",gap:64},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--layout-spacers-2)"},children:[e.jsx("p",{style:b,children:s}),e.jsx("p",{style:x,children:a})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(u,{size:"M",type:y})})]});const C=r==="L-Carrousel"?{width:542,height:290}:{width:421,height:252};return e.jsxs("div",{...g,style:{...f,...C,padding:"var(--layout-spacers-6)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--layout-spacers-2)"},children:[e.jsx("p",{style:b,children:s}),e.jsx("p",{style:x,children:a})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(u,{size:"M",type:y})})]})}t.__docgenInfo={description:"",methods:[],displayName:"CardIcon",props:{type:{defaultValue:{value:'"L-Grid"',computed:!1},required:!1},state:{defaultValue:{value:'"default"',computed:!1},required:!1},title:{defaultValue:{value:'"Título de la card"',computed:!1},required:!1},subtitle:{defaultValue:{value:'"Subtítulo o descripción"',computed:!1},required:!1},bigNum:{defaultValue:{value:'"42K"',computed:!1},required:!1},bigNumSub:{defaultValue:{value:'"Descripción del dato"',computed:!1},required:!1}}};const N={title:"Components/CardIcon",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["L-Carrousel","L-Grid","S-Grid","S-grid"]},state:{control:"select",options:["default","hover"]},title:{control:"text"},subtitle:{control:"text"},bigNum:{control:"text"},bigNumSub:{control:"text"}},args:{type:"L-Grid",state:"default",title:"Título de la card",subtitle:"Subtítulo o descripción breve del contenido",bigNum:"42K",bigNumSub:"Descripción del dato estadístico"}},o={name:"L-Grid",args:{type:"L-Grid"}},i={name:"L-Grid (hover)",args:{type:"L-Grid",state:"hover"}},n={name:"L-Carrousel",args:{type:"L-Carrousel"}},l={name:"S-Grid",args:{type:"S-Grid"}},d={name:"S-grid (estadística)",args:{type:"S-grid"}},c={name:"S-grid (estadística, hover)",args:{type:"S-grid",state:"hover"}},p={render:r=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{...r,type:"L-Grid",title:"L-Grid",subtitle:"421×252px"}),e.jsx(t,{...r,type:"L-Carrousel",title:"L-Carrousel",subtitle:"542×290px"}),e.jsx(t,{...r,type:"S-Grid",title:"S-Grid",subtitle:"424px ancho"}),e.jsx(t,{...r,type:"S-grid",bigNum:"8.4K",bigNumSub:"En alumnos internacionales"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "L-Grid",
  args: {
    type: "L-Grid"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "L-Grid (hover)",
  args: {
    type: "L-Grid",
    state: "hover"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "L-Carrousel",
  args: {
    type: "L-Carrousel"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "S-Grid",
  args: {
    type: "S-Grid"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "S-grid (estadística)",
  args: {
    type: "S-grid"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "S-grid (estadística, hover)",
  args: {
    type: "S-grid",
    state: "hover"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    flexWrap: "wrap"
  }}>
      <CardIcon {...args} type="L-Grid" title="L-Grid" subtitle="421×252px" />
      <CardIcon {...args} type="L-Carrousel" title="L-Carrousel" subtitle="542×290px" />
      <CardIcon {...args} type="S-Grid" title="S-Grid" subtitle="424px ancho" />
      <CardIcon {...args} type="S-grid" bigNum="8.4K" bigNumSub="En alumnos internacionales" />
    </div>
}`,...p.parameters?.docs?.source}}};const z=["LGrid","LGridHover","LCarrousel","SGrid","SGridStats","SGridStatsHover","AllTypes"];export{p as AllTypes,n as LCarrousel,o as LGrid,i as LGridHover,l as SGrid,d as SGridStats,c as SGridStatsHover,z as __namedExportsOrder,N as default};
