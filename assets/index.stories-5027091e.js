import{w as ce,j as s,c as A}from"./wrapper-3316f290.js";import{r as re}from"./index-76fb7be0.js";import{a as ie,d as de,E as S,i as V,b as pe,l as ge,v as me,o as ve,f as xe}from"./argTypes-95f67a8a.js";import"./_commonjsHelpers-de833af9.js";const he="_light_1xuyk_38",_e="_dark_1xuyk_262",Te="_container_1xuyk_495",ye="_wrapper_1xuyk_506",be="_textarea_1xuyk_515",fe="_helperText_1xuyk_549",Ae="_label_1xuyk_556",Se="_isFocus_1xuyk_563",Ve="_standard_1xuyk_566",Pe="_error_1xuyk_573",Ie="_success_1xuyk_576",Ee="_disabled_1xuyk_588",Fe="_outlined_1xuyk_591",ke="_filled_1xuyk_619",Ce="_isFetching_1xuyk_659",r={light:he,dark:_e,container:Te,wrapper:ye,textarea:be,helperText:fe,label:Ae,isFocus:Se,standard:Ve,error:Pe,success:Ie,disabled:Ee,outlined:Fe,filled:ke,isFetching:Ce,"skeleton-animation":"_skeleton-animation_1xuyk_1"};var v=(e=>(e.PRIMARY="primary",e.SUCCESS="success",e.ERROR="error",e))(v||{}),o=(e=>(e.STANDARD="standard",e.FILLED="filled",e.OUTLINED="outlined",e))(o||{});const Re={color:"primary",disabled:!1,variant:"filled",rows:2},T=ce(({className:e,color:x,disabled:h,helperText:_,isFetching:se,label:y,rows:le,variant:b,...oe},ue)=>{const[ne,f]=re.useState(!1);return s.jsxs("div",{ref:ue,className:A(r.container,b&&r[b],x&&r[x],h&&r.disabled,ne&&r.isFocus,se&&r.isFetching,e),children:[y&&s.jsx("label",{className:r.label,children:y}),s.jsx("div",{className:r.wrapper,children:s.jsx("textarea",{className:A(r.textarea),disabled:h,rows:le,onFocus:()=>{f(!0)},onBlur:()=>{f(!1)},...oe})}),_&&s.jsx("span",{className:r.helperText,children:_})]})});T.defaultProps=Re;const te=T;try{T.displayName="TextArea",T.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},color:{defaultValue:{value:"ETextAreaColors.PRIMARY"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"error"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isFetching:{defaultValue:null,description:"",name:"isFetching",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"ETextAreaVariants.FILLED"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"filled"'},{value:'"outlined"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},rows:{defaultValue:{value:"2"},description:"",name:"rows",required:!1,type:{name:"number"}}}}}catch{}const je={title:"Inputs/TextArea",component:te,zeplinLink:"",parameters:{controls:{sort:"requiredFirst"}},argTypes:{color:ie({colors:v,defaultValue:v.PRIMARY,typeName:"ETextAreaColors"}),disabled:de,helperText:{control:{type:"text"},description:"The helper text to display below the input",table:{category:S.APPEARANCE,type:{summary:"string"}}},IconEnd:V({description:"The icon to display at the end of the input"}),IconStart:V({description:"The icon to display at the start of the input"}),isFetching:pe,label:ge,rows:{control:{type:"range",min:1,max:10,step:1},description:"The number of textarea rows",table:{category:S.APPEARANCE,type:{summary:"number"},defaultValue:{summary:2}}},variant:me({variants:o,defaultValue:o.FILLED,typeName:"ETextAreaVariants"}),onClick:ve,onChange:xe}},t=e=>{const[x,h]=re.useState("");return s.jsx(te,{...e,value:x,onChange:({target:_})=>h(_.value),placeholder:"Placeholder"})},a=t.bind({});a.args={variant:o.STANDARD,rows:2};const u=t.bind({});u.args={...a.args,variant:o.OUTLINED};const n=t.bind({});n.args={...a.args,variant:o.FILLED};const c=t.bind({});c.args={...a.args,disabled:!0};const i=t.bind({});i.args={...a.args,label:"Label"};const d=t.bind({});d.args={...a.args,helperText:"Helper text"};const p=t.bind({});p.args={...a.args,color:v.SUCCESS};const l=t.bind({});l.args={...a.args,color:v.ERROR};const g=t.bind({});g.args={...l.args,helperText:"Error text"};const m=t.bind({});m.args={...a.args,isFetching:!0};var P,I,E;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ITextAreaProps['value']>('');
  return <TextArea {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(E=(I=a.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var F,k,C;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ITextAreaProps['value']>('');
  return <TextArea {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(C=(k=u.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var R,N,L;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ITextAreaProps['value']>('');
  return <TextArea {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(L=(N=n.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var w,D,j;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ITextAreaProps['value']>('');
  return <TextArea {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(j=(D=c.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var q,O,$;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ITextAreaProps['value']>('');
  return <TextArea {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...($=(O=i.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var U,H,M;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ITextAreaProps['value']>('');
  return <TextArea {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(M=(H=d.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var Y,W,z;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ITextAreaProps['value']>('');
  return <TextArea {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(z=(W=p.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var B,G,J;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ITextAreaProps['value']>('');
  return <TextArea {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(J=(G=l.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ITextAreaProps['value']>('');
  return <TextArea {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<ITextAreaProps['value']>('');
  return <TextArea {...args} value={value} onChange={({
    target
  }) => setValue(target.value)} placeholder="Placeholder" />;
}`,...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const qe=["Standard","Outlined","Filled","Disabled","WithLabel","HelperText","Success","Error","ErrorText","IsFetching"];export{c as Disabled,l as Error,g as ErrorText,n as Filled,d as HelperText,m as IsFetching,u as Outlined,a as Standard,p as Success,i as WithLabel,qe as __namedExportsOrder,je as default};
//# sourceMappingURL=index.stories-5027091e.js.map
