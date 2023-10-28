import{j as N}from"./wrapper-3316f290.js";import{r as O}from"./index-76fb7be0.js";import{E as h,d as V,l as j,s as U,v as W,b as _,f as A}from"./argTypes-95f67a8a.js";import{C as D,E as d,a as n}from"./index-1818e3fd.js";import"./_commonjsHelpers-de833af9.js";import"./index.esm-1eb8ea43.js";const G={title:"Inputs/Checkbox",component:D,zeplinLink:"https://zpl.io/noNWnXY",parameters:{controls:{sort:"requiredFirst"}},argTypes:{checked:{control:{type:"boolean"},description:"Whether the checkbox is checked",table:{category:h.STATE,type:{summary:"boolean"}}},disabled:V,indeterminate:{control:{type:"boolean"},description:"Whether the checkbox is indeterminate",table:{category:h.STATE,type:{summary:"boolean"}}},label:j,size:U({sizes:d,defaultValue:d.MEDIUM,typeName:"ECheckboxSizes"}),variant:W({variants:n,defaultValue:n.FILLED,typeName:"ECheckboxVariants"}),isFetching:_,onChange:A}},s=T=>{const[v,P]=O.useState(!1);return N.jsx(D,{...T,checked:v,onChange:M=>P(M.target.checked)})},e=s.bind({});e.args={disabled:!1,size:d.MEDIUM,variant:n.FILLED};const r=s.bind({});r.args={...e.args,variant:n.OUTLINED};const a=s.bind({});a.args={...e.args,disabled:!0};const c=s.bind({});c.args={...e.args,indeterminate:!0};const t=s.bind({});t.args={...e.args,label:"Label"};const o=s.bind({});o.args={...e.args,isFetching:!0};var i,k,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState<ICheckboxProps['checked']>(false);
  return <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...(p=(k=e.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var g,l,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState<ICheckboxProps['checked']>(false);
  return <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,b,C;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState<ICheckboxProps['checked']>(false);
  return <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var x,E,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState<ICheckboxProps['checked']>(false);
  return <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...(S=(E=c.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var f,I,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState<ICheckboxProps['checked']>(false);
  return <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...(y=(I=t.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var F,L,z;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState<ICheckboxProps['checked']>(false);
  return <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...(z=(L=o.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const H=["Filled","Outlined","Disabled","Indeterminate","Label","IsFetching"];export{a as Disabled,e as Filled,c as Indeterminate,o as IsFetching,t as Label,r as Outlined,H as __namedExportsOrder,G as default};
//# sourceMappingURL=index.stories-5d222211.js.map
