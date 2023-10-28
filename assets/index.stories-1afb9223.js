import{j as ae}from"./wrapper-3316f290.js";import{r as ce}from"./index-76fb7be0.js";import{G as T}from"./index.esm-1eb8ea43.js";import{c as le,a as de,E as o,d as ge,i as S,s as ue,v as ie,b as pe,o as me}from"./argTypes-95f67a8a.js";import{E as B,a as b,b as s,T as Be}from"./index-73639dc2.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d5f341a.js";import"./index-dbe12283.js";import"./index-a431868f.js";const ve={title:"Inputs/ToggleButtonGroup/ToggleButton",zeplinLink:"https://zpl.io/p1Q1PEy",parameters:{controls:{sort:"requiredFirst"}},argTypes:{children:le,color:de({colors:B,defaultValue:B.PRIMARY,typeName:"EToggleButtonColors"}),customColor:{control:{type:"color"},description:"The custom color HEX to use for the button",table:{category:o.APPEARANCE,type:{summary:"string"}}},disabled:ge,href:{control:{type:"text"},description:"The URL to link to when the button is clicked",table:{category:o.BEHAVIOR,type:{summary:"string"}}},Icon:S({description:"The icon to display in the button"}),IconEnd:{...S({description:"The icon to display at the end of the button"})},IconStart:{...S({description:"The icon to display at the start of the button"})},size:ue({sizes:b,defaultValue:b.MEDIUM,typeName:"EToggleButtonSizes"}),loading:{control:{type:"boolean"},description:"If `true`, the button will be in loading state",table:{category:o.BEHAVIOR,type:{summary:"boolean"}}},selected:{control:{type:"boolean"},description:"If `true`, the button will be in selected state",table:{category:o.STATE,type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:{type:"text"},description:"The value of the button",type:{name:"string",required:!0},table:{category:o.DATA,type:{summary:"string"}}},variant:ie({variants:s,defaultValue:s.CONTAINED,typeName:"EToggleButtonVariants"}),isFetching:pe,onClick:me}},t=se=>{const{children:oe="ToggleButton",...ne}=se,[h,re]=ce.useState(!1);return ae.jsx(Be,{...ne,value:"toggleButton",selected:h,onClick:()=>re(!h),children:oe})},n=t.bind({});n.args={variant:s.DEFAULT};const e=t.bind({});e.args={variant:s.CONTAINED};const r=t.bind({});r.args={variant:s.OUTLINED};const a=t.bind({});a.args={variant:s.LINK,color:B.PRIMARY};const c=t.bind({});c.args={...e.args,disabled:!0};const l=t.bind({});l.args={...e.args,color:B.ERROR};const d=t.bind({});d.args={...e.args,Icon:T};const g=t.bind({});g.args={...e.args,IconStart:T};const u=t.bind({});u.args={...e.args,IconEnd:T};const i=t.bind({});i.args={IconEnd:T,customColor:"#EB2F96"};const p=t.bind({});p.args={...e.args,loading:!0};const m=t.bind({});m.args={...e.args,isFetching:!0};var f,E,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(y=(E=n.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var I,C,v;e.parameters={...e.parameters,docs:{...(I=e.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(v=(C=e.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var k,A,R;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(R=(A=r.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var x,D,N;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(N=(D=a.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var L,O,V;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(V=(O=c.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var z,F,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(P=(F=l.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var H,M,U;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var j,w,G;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(G=(w=g.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var _,q,Y;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(Y=(q=u.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var K,Q,X;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(X=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,W,Z;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(Z=(W=p.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var $,ee,te;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const {
    children = "ToggleButton",
    ...rest
  } = args;
  const [selected, setSelected] = useState(false);
  return <ToggleButton {...rest} value="toggleButton" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </ToggleButton>;
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const ke=["Default","Contained","Outlined","Link","Disabled","Error","Icon","IconStart","IconEnd","ColorHex","Loading","IsFetching"];export{i as ColorHex,e as Contained,n as Default,c as Disabled,l as Error,d as Icon,u as IconEnd,g as IconStart,m as IsFetching,a as Link,p as Loading,r as Outlined,ke as __namedExportsOrder,ve as default};
//# sourceMappingURL=index.stories-1afb9223.js.map
