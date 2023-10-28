import{j as se}from"./wrapper-3316f290.js";import{r as ne}from"./index-76fb7be0.js";import{f as Z}from"./index.esm-1eb8ea43.js";import{e as oe,a as le,d as ue,E as ce,i as v,b as pe,l as de,v as ge,o as ie,f as me}from"./argTypes-95f67a8a.js";import{I as $,E as m,a as i}from"./index-d62df397.js";import"./_commonjsHelpers-de833af9.js";import"./index-bbe78a76.js";const be={title:"Inputs/Input",component:$,zeplinLink:"",parameters:{controls:{sort:"requiredFirst"}},argTypes:{className:oe,color:le({colors:m,defaultValue:m.PRIMARY,typeName:"EInputColors"}),disabled:ue,helperText:{control:{type:"text"},description:"The helper text to display below the input",table:{category:ce.APPEARANCE,type:{summary:"string"}}},IconEnd:v({description:"The icon to display at the end of the input"}),IconStart:v({description:"The icon to display at the start of the input"}),isFetching:pe,label:de,variant:ge({variants:i,defaultValue:i.FILLED,typeName:"EInputVariants"}),onClick:ie,onChange:me}},a=ee=>{const[ae,re]=ne.useState("");return se.jsx($,{...ee,value:ae,onChange:({target:te})=>re(te.value),placeholder:"Placeholder"})},e=a.bind({});e.args={variant:i.STANDARD};const t=a.bind({});t.args={variant:i.OUTLINED};const s=a.bind({});s.args={variant:i.FILLED};const n=a.bind({});n.args={...e.args,disabled:!0};const o=a.bind({});o.args={...e.args,label:"Label"};const l=a.bind({});l.args={...e.args,helperText:"Helper text"};const u=a.bind({});u.args={...e.args,color:m.SUCCESS};const r=a.bind({});r.args={...e.args,color:m.ERROR};const c=a.bind({});c.args={...r.args,helperText:"Error text"};const p=a.bind({});p.args={...e.args,IconStart:Z};const d=a.bind({});d.args={...e.args,IconEnd:Z};const g=a.bind({});g.args={...e.args,isFetching:!0};var h,I,S;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(S=(I=e.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var V,P,E;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(E=(P=t.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var b,C,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var T,f,y;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var F,L,R;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(R=(L=o.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var D,A,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(N=(A=l.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,j,H;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(H=(j=u.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var _,k,U;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(U=(k=r.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var W,q,w;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var z,G,M;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(M=(G=p.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var Y,B,J;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(J=(B=d.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<IInputProps["value"]>("");
  return <Input {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ce=["Standard","Outlined","Filled","Disabled","WithLabel","HelperText","Success","Error","ErrorText","IconStart","IconEnd","IsFetching"];export{n as Disabled,r as Error,c as ErrorText,s as Filled,l as HelperText,d as IconEnd,p as IconStart,g as IsFetching,t as Outlined,e as Standard,u as Success,o as WithLabel,Ce as __namedExportsOrder,be as default};
//# sourceMappingURL=index.stories-04d37a38.js.map
