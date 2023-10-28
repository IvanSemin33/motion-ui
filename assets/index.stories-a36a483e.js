import{w as U,j as _,c as J}from"./wrapper-3316f290.js";import{E as g,n as V,a as K,h as Q,w as X,b as Z,p as ee,v as ae}from"./argTypes-95f67a8a.js";import{r as A}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const re="_light_14nu6_38",ne="_dark_14nu6_262",te="_container_14nu6_495",se="_badge_14nu6_499",ie="_hasContent_14nu6_512",oe="_big_14nu6_519",de="_border_14nu6_523",ue="_secondary_14nu6_526",le="_error_14nu6_531",ce="_success_14nu6_536",me="_animation_14nu6_541",pe="_invisible_14nu6_565",ge="_isFetching_14nu6_568",a={light:re,dark:ne,container:te,badge:se,hasContent:ie,big:oe,border:de,secondary:ue,"pulse-animation-secondary":"_pulse-animation-secondary_14nu6_1",error:le,"pulse-animation-error":"_pulse-animation-error_14nu6_1",success:ce,"pulse-animation-success":"_pulse-animation-success_14nu6_1",animation:me,"top-right":"_top-right_14nu6_545","top-left":"_top-left_14nu6_550","bottom-right":"_bottom-right_14nu6_555","bottom-left":"_bottom-left_14nu6_560",invisible:pe,isFetching:ge,"skeleton-animation":"_skeleton-animation_14nu6_1"};var d=(e=>(e.SECONDARY="secondary",e.SUCCSESS="success",e.ERROR="error",e))(d||{}),u=(e=>(e.TOP_LEFT="top-left",e.TOP_RIGHT="top-right",e.BOTTOM_LEFT="bottom-left",e.BOTTOM_RIGHT="bottom-right",e))(u||{}),l=(e=>(e.STANDARD="standard",e.DOT="dot",e))(l||{});const b=U(({children:e,color:f,content:n,height:t,width:y,invisible:j,isFetching:G,max:m,position:v,variant:p,borderWidth:T,animation:M,className:Y,...L},$)=>{const R=A.useMemo(()=>p==="dot"?null:n&&typeof n=="number"&&m&&n>m?`${m}+`:n,[n,m,p]),z=A.useMemo(()=>t&&t>=20,[t]);return _.jsxs("div",{ref:$,className:J(a.container,p&&a[p],v&&a[v],f&&a[f],j&&a.invisible,G&&a.isFetching,T&&a.border,R&&a.hasContent,z&&a.big,M&&a.animation,Y),...L,children:[e,_.jsx("span",{className:a.badge,style:{height:t,width:y,minHeight:t,minWidth:y,outlineWidth:T},children:R})]})});b.defaultProps={color:"secondary",height:20,width:20,invisible:!1,isFetching:!1,max:99,position:"top-right",variant:"standard",borderWidth:0,animation:!1};const W=b;try{b.displayName="Badge",b.__docgenInfo={description:"",displayName:"Badge",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"EBadgeColors.SECONDARY"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"success"'},{value:'"error"'}]}},position:{defaultValue:{value:"EBadgePositions.TOP_RIGHT"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},height:{defaultValue:{value:"20"},description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:{value:"20"},description:"",name:"width",required:!1,type:{name:"number"}},animation:{defaultValue:{value:"false"},description:"",name:"animation",required:!1,type:{name:"boolean"}},borderWidth:{defaultValue:{value:"0"},description:"",name:"borderWidth",required:!1,type:{name:"number"}},max:{defaultValue:{value:"99"},description:"",name:"max",required:!1,type:{name:"number"}},isFetching:{defaultValue:{value:"false"},description:"",name:"isFetching",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"EBadgeVariants.STANDARD"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"dot"'}]}},invisible:{defaultValue:{value:"false"},description:"",name:"invisible",required:!1,type:{name:"boolean"}}}}}catch{}const ye={title:"Data Display/Badge",component:W,zeplinLink:"",parameters:{controls:{sort:"requiredFirst"}},argTypes:{animation:{control:{type:"boolean"},description:"Whether to use animation",table:{category:g.APPEARANCE,defaultValue:{summary:!1}}},borderWidth:{description:"Border width.",control:{type:"range",min:0,max:3,step:1},table:{category:g.APPEARANCE,defaultValue:{summary:"0"},type:{summary:"number"}}},children:V({description:"The badge will be added relative to this node.",required:!0}),color:K({colors:d,defaultValue:d.SECONDARY,typeName:"EBadgeColors"}),content:V({description:"The content rendered within the badge.",required:!1}),height:Q({defaultValue:20,minValue:6,maxValue:20}),width:X({defaultValue:20,minValue:6,maxValue:20}),invisible:{control:"boolean",description:"If true, the badge is invisible.",table:{category:g.STATE,type:{summary:"boolean"},defaultValue:{summary:!1}}},isFetching:Z,max:{control:"number",description:"Max count to show.",table:{category:g.STATE,type:{summary:"number"},defaultValue:{summary:99}}},position:ee({positions:u,defaultValue:u.TOP_RIGHT,typeName:"EBadgePositions"}),variant:ae({variants:l,defaultValue:l.STANDARD,typeName:"EBadgeVariants"})}},c=e=>_.jsx(W,{...e,children:_.jsx("div",{style:{width:50,height:50,backgroundColor:"darkcyan",borderRadius:"4px"}})}),r=c.bind({});r.args={color:d.SECONDARY,height:20,width:20,invisible:!1,isFetching:!1,position:u.TOP_RIGHT,variant:l.STANDARD,content:100};const h=c.bind({});r.args={color:d.SECONDARY,height:20,invisible:!1,isFetching:!1,position:u.TOP_RIGHT,variant:l.DOT};const s=c.bind({});s.args={...r.args,borderWidth:3};const i=c.bind({});i.args={...r.args,animation:!0};const o=c.bind({});o.args={...r.args,isFetching:!0};var S,x,B;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <Badge {...args}>
      <div style={{
      width: 50,
      height: 50,
      backgroundColor: 'darkcyan',
      borderRadius: '4px'
    }} />
    </Badge>;
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var C,E,N;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  return <Badge {...args}>
      <div style={{
      width: 50,
      height: 50,
      backgroundColor: 'darkcyan',
      borderRadius: '4px'
    }} />
    </Badge>;
}`,...(N=(E=h.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var D,O,k;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return <Badge {...args}>
      <div style={{
      width: 50,
      height: 50,
      backgroundColor: 'darkcyan',
      borderRadius: '4px'
    }} />
    </Badge>;
}`,...(k=(O=s.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var w,F,q;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <Badge {...args}>
      <div style={{
      width: 50,
      height: 50,
      backgroundColor: 'darkcyan',
      borderRadius: '4px'
    }} />
    </Badge>;
}`,...(q=(F=i.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var I,P,H;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <Badge {...args}>
      <div style={{
      width: 50,
      height: 50,
      backgroundColor: 'darkcyan',
      borderRadius: '4px'
    }} />
    </Badge>;
}`,...(H=(P=o.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};const ve=["Standard","Dot","Border","Animation","IsFetching"];export{i as Animation,s as Border,h as Dot,o as IsFetching,r as Standard,ve as __namedExportsOrder,ye as default};
//# sourceMappingURL=index.stories-a36a483e.js.map
