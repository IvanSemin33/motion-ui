import{j as rr}from"./wrapper-3316f290.js";import{G as B}from"./index.esm-1eb8ea43.js";import{c as tr,a as er,E as g,d as nr,i as h,s as sr,v as or,b as ar,o as cr}from"./argTypes-95f67a8a.js";import{E as m,a as E,b as e,B as ir}from"./index-46515d40.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d5f341a.js";import"./index-dbe12283.js";import"./index-a431868f.js";const br={title:"Inputs/Button",zeplinLink:"https://zpl.io/p1Q1PEy",parameters:{controls:{sort:"requiredFirst"}},argTypes:{children:tr,color:er({colors:m,defaultValue:m.PRIMARY,typeName:"EButtonColors"}),customColor:{control:{type:"color"},description:"The custom color HEX to use for the button",table:{category:g.APPEARANCE,type:{summary:"string"}}},disabled:nr,href:{control:{type:"text"},description:"The URL to link to when the button is clicked",table:{category:g.BEHAVIOR,type:{summary:"string"}}},IconEnd:{...h({description:"The icon to display at the end of the button"})},IconStart:{...h({description:"The icon to display at the start of the button"})},size:sr({sizes:E,defaultValue:E.MEDIUM,typeName:"EButtonSizes"}),loading:{control:{type:"boolean"},description:"If `true`, the button will be in loading state",table:{category:g.BEHAVIOR,type:{summary:"boolean"}}},variant:or({variants:e,defaultValue:e.CONTAINED,typeName:"EButtonVariants"}),isFetching:ar,onClick:cr}},t=W=>{const{children:Z="Button",...$}=W;return rr.jsx(ir,{...$,children:Z})},n=t.bind({});n.args={variant:e.DEFAULT};const r=t.bind({});r.args={variant:e.CONTAINED};const s=t.bind({});s.args={variant:e.OUTLINED};const o=t.bind({});o.args={variant:e.LINK,color:m.PRIMARY};const a=t.bind({});a.args={...r.args,disabled:!0};const c=t.bind({});c.args={...r.args,color:m.ERROR};const i=t.bind({});i.args={...r.args,IconStart:B};const u=t.bind({});u.args={...r.args,IconEnd:B};const d=t.bind({});d.args={IconEnd:B,customColor:"#EB2F96"};const l=t.bind({});l.args={...r.args,loading:!0};const p=t.bind({});p.args={...r.args,isFetching:!0};var b,I,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const {
    children = 'Button',
    ...rest
  } = args;
  return <Button {...rest}>{children}</Button>;
}`,...(y=(I=n.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var S,f,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const {
    children = 'Button',
    ...rest
  } = args;
  return <Button {...rest}>{children}</Button>;
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var R,A,N;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const {
    children = 'Button',
    ...rest
  } = args;
  return <Button {...rest}>{children}</Button>;
}`,...(N=(A=s.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var T,x,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const {
    children = 'Button',
    ...rest
  } = args;
  return <Button {...rest}>{children}</Button>;
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var L,O,v;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const {
    children = 'Button',
    ...rest
  } = args;
  return <Button {...rest}>{children}</Button>;
}`,...(v=(O=a.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var z,F,V;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const {
    children = 'Button',
    ...rest
  } = args;
  return <Button {...rest}>{children}</Button>;
}`,...(V=(F=c.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var k,P,H;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const {
    children = 'Button',
    ...rest
  } = args;
  return <Button {...rest}>{children}</Button>;
}`,...(H=(P=i.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var M,U,j;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const {
    children = 'Button',
    ...rest
  } = args;
  return <Button {...rest}>{children}</Button>;
}`,...(j=(U=u.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var _,w,G;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const {
    children = 'Button',
    ...rest
  } = args;
  return <Button {...rest}>{children}</Button>;
}`,...(G=(w=d.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var Y,q,K;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const {
    children = 'Button',
    ...rest
  } = args;
  return <Button {...rest}>{children}</Button>;
}`,...(K=(q=l.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,X,J;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const {
    children = 'Button',
    ...rest
  } = args;
  return <Button {...rest}>{children}</Button>;
}`,...(J=(X=p.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};const Ir=["Default","Contained","Outlined","Link","Disabled","Error","IconStart","IconEnd","ColorHex","Loading","IsFetching"];export{d as ColorHex,r as Contained,n as Default,a as Disabled,c as Error,u as IconEnd,i as IconStart,p as IsFetching,o as Link,l as Loading,s as Outlined,Ir as __namedExportsOrder,br as default};
//# sourceMappingURL=index.stories-0fcd0bf9.js.map
