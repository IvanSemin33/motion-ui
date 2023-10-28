import{w as X,j as v,c as Y,m as Z}from"./wrapper-3316f290.js";import{r as n}from"./index-76fb7be0.js";import{c as f,b as $}from"./index.esm-1eb8ea43.js";import{c as R,e as ee,E as S,v as ae,b as re}from"./argTypes-95f67a8a.js";import{E as se,T as B}from"./index-ab447202.js";import"./_commonjsHelpers-de833af9.js";const te="_light_17oed_38",ne="_dark_17oed_262",oe="_container_17oed_495",le="_indicator_17oed_503",C={light:te,dark:ne,container:oe,indicator:le,"skeleton-animation":"_skeleton-animation_17oed_1"},T=se,b=X(({children:r,className:m,isFetching:a,value:p,variant:J,onChange:_,...K},M)=>{const[s,E]=n.useState(null),Q=()=>n.Children.map(r,h=>{if(!n.isValidElement(h))return null;if(h.type!==B)throw new Error("`Tabs` children should be of type `Tab`.");const y=h,{props:V}=y;return n.cloneElement(y,{ref:g=>{g&&V.value===p&&E(g)},isFetching:a,variant:J,active:V.value===p,onClick:g=>{_&&!a&&(_(V.value),E(g.currentTarget))}})});return v.jsxs("div",{ref:M,className:Y(C.container,m),...K,children:[Q(),v.jsx(Z.span,{className:C.indicator,animate:{x:s==null?void 0:s.offsetLeft,width:s==null?void 0:s.offsetWidth},transition:{duration:.2,ease:"easeInOut"}})]})});b.defaultProps={variant:T.DEFAULT};try{b.displayName="Tabs",b.__docgenInfo={description:"",displayName:"Tabs",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: TTabsValue) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isFetching:{defaultValue:null,description:"",name:"isFetching",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TTabsValue"}},variant:{defaultValue:{value:"ETabsVariants.DEFAULT"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'}]}}}}}catch{}const ge={title:"Navigation/Tabs",zeplinLink:"",parameters:{controls:{sort:"requiredFirst"}},argTypes:{children:R,className:ee,onChange:{control:!1,action:"onChange",description:"Callback fired when the component is changed.",table:{category:S.EVENTS,type:{summary:"(value: TValue) => void"}}},value:{control:{type:"text"},type:{name:"string",required:!0},description:"The value of the selected tab.",table:{category:S.DATA,type:{summary:"TTabsValue"}}},variant:ae({variants:T,defaultValue:T.DEFAULT,typeName:"ETabsVariants"}),isFetching:re}},d=r=>Array.from({length:5},(m,a)=>v.jsx(B,{...r,value:a,label:`Tab ${a}`},a)),t=r=>{const[m,a]=n.useState(0);return v.jsx(b,{...r,onChange:p=>a(p),value:m,children:r.children})},e=t.bind({});e.args={variant:T.DEFAULT,children:d({})};const o=t.bind({});o.args={...e.args,children:d({IconStart:f})};const l=t.bind({});l.args={...e.args,children:d({IconEnd:$})};const c=t.bind({});c.args={...e.args,children:d({IconStart:f,IconEnd:$})};const i=t.bind({});i.args={...e.args,children:d({IconStart:f,label:""})};const u=t.bind({});u.args={...e.args,isFetching:!0};var I,x,N;e.parameters={...e.parameters,docs:{...(I=e.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TTabsValue>(0);
  return <Tabs {...args} onChange={v => setValue(v)} value={value}>
      {args.children}
    </Tabs>;
}`,...(N=(x=e.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var A,F,k;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TTabsValue>(0);
  return <Tabs {...args} onChange={v => setValue(v)} value={value}>
      {args.children}
    </Tabs>;
}`,...(k=(F=o.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var L,q,D;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TTabsValue>(0);
  return <Tabs {...args} onChange={v => setValue(v)} value={value}>
      {args.children}
    </Tabs>;
}`,...(D=(q=l.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var j,w,O;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TTabsValue>(0);
  return <Tabs {...args} onChange={v => setValue(v)} value={value}>
      {args.children}
    </Tabs>;
}`,...(O=(w=c.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var U,W,G;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TTabsValue>(0);
  return <Tabs {...args} onChange={v => setValue(v)} value={value}>
      {args.children}
    </Tabs>;
}`,...(G=(W=i.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var P,z,H;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TTabsValue>(0);
  return <Tabs {...args} onChange={v => setValue(v)} value={value}>
      {args.children}
    </Tabs>;
}`,...(H=(z=u.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const ve=["Default","IconStart","IconEnd","IconStartAndEnd","WithOutLabel","IsFetching"];export{e as Default,l as IconEnd,o as IconStart,c as IconStartAndEnd,u as IsFetching,i as WithOutLabel,ve as __namedExportsOrder,ge as default};
//# sourceMappingURL=index.stories-5c81d122.js.map
