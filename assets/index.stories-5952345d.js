import{w as we,j as D,c as se}from"./wrapper-3316f290.js";import{R as p,r as Y}from"./index-76fb7be0.js";import{d as Te,b as $e,E as z}from"./argTypes-95f67a8a.js";import"./_commonjsHelpers-de833af9.js";function k(){return k=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(a[u]=n[u])}return a},k.apply(this,arguments)}function B(a,r){if(a==null)return{};var n={},u=Object.keys(a),c,m;for(m=0;m<u.length;m++)c=u[m],!(r.indexOf(c)>=0)&&(n[c]=a[c]);return n}var je=function(r){var n=r.getBoundingClientRect();return{left:Math.ceil(n.left),width:Math.ceil(n.width)}},U=function(r){return[].concat(r).sort(function(n,u){return Number(n)-Number(u)})},Re=function(r){var n=p.useRef(r);return n.current=r,p.useCallback(function(){return n.current},[])},Le={getPercentageForValue:function(r,n,u){return Math.max(0,Math.min(100,(r-n)/(u-n)*100))},getValueForClientX:function(r,n,u,c){var m=n.left,g=n.width,d=(r-m)/g,R=(c-u)*d;return R+u}};function Fe(a){var r=a.interpolator,n=r===void 0?Le:r,u=a.tickSize,c=u===void 0?10:u,m=a.values,g=a.min,d=a.max,R=a.ticks,C=a.steps,W=a.onChange,J=a.onDrag,_=a.stepSize,X=p.useState(null),T=X[0],L=X[1],K=p.useState(),h=K[0],S=K[1],w=Re({activeHandleIndex:T,onChange:W,onDrag:J,values:m,tempValues:h}),Z=p.useRef(),ee=p.useCallback(function(e){var t=je(Z.current);return n.getValueForClientX(e,t,g,d)},[n,d,g]),te=p.useCallback(function(e,t){if(C){var i=C.indexOf(e),s=i+t;return s>=0&&s<C.length?C[s]:e}else{var o=e+_*t;return o>=g&&o<=d?o:e}},[d,g,_,C]),ne=p.useCallback(function(e){var t=g,i=d;if(C)C.forEach(function(s){s<=e&&s>t&&(t=s),s>=e&&s<i&&(i=s)});else{for(;t<e&&t+_<e;)t+=_;i=Math.min(t+_,d)}return e-t<i-e?t:i},[d,g,_,C]),P=p.useCallback(function(e){var t=w(),i=t.activeHandleIndex,s=t.onDrag,o=e.type==="touchmove"?e.changedTouches[0].clientX:e.clientX,l=ee(o),f=ne(l),y=[].concat(m.slice(0,i),[f],m.slice(i+1));s?s(y):S(y)},[w,ee,ne,m]),ae=p.useCallback(function(e,t){var i=w(),s=i.values,o=i.onChange,l=o===void 0?function(){}:o;if(e.keyCode===37||e.keyCode===39){L(t);var f=e.keyCode===37?-1:1,y=te(s[t],f),v=[].concat(s.slice(0,t),[y],s.slice(t+1)),b=U(v);l(b)}},[w,te]),Q=p.useCallback(function(e,t){L(t);var i=function s(o){var l=w(),f=l.tempValues,y=l.values,v=l.onChange,b=v===void 0?function(){}:v,E=l.onDrag,F=E===void 0?function(){}:E;document.removeEventListener("mousemove",P),document.removeEventListener("touchmove",P),document.removeEventListener("mouseup",s),document.removeEventListener("touchend",s);var I=U(f||y);b(I),F(I),L(null),S()};document.addEventListener("mousemove",P),document.addEventListener("touchmove",P),document.addEventListener("mouseup",i),document.addEventListener("touchend",i)},[w,P]),$=p.useCallback(function(e){return n.getPercentageForValue(e,g,d)},[n,d,g]),Ve=p.useMemo(function(){var e=R||C;if(!e){for(e=[g];e[e.length-1]<d-c;)e.push(e[e.length-1]+c);e.push(d)}return e.map(function(t,i){return{value:t,getTickProps:function(o){var l=o===void 0?{}:o,f=l.key,y=f===void 0?i:f,v=l.style,b=v===void 0?{}:v,E=B(l,["key","style"]);return k({key:y,style:k({position:"absolute",width:0,left:$(t)+"%",transform:"translateX(-50%)"},b)},E)}}})},[R,$,d,g,C,c]),ke=p.useMemo(function(){var e=U(h||m);return[].concat(e,[d]).map(function(t,i){return{value:t,getSegmentProps:function(o){var l=o===void 0?{}:o,f=l.key,y=f===void 0?i:f,v=l.style,b=v===void 0?{}:v,E=B(l,["key","style"]),F=$(e[i-1]?e[i-1]:g),I=$(t)-F;return k({key:y,style:k({position:"absolute",left:F+"%",width:I+"%"},b)},E)}}})},[$,d,g,h,m]),De=p.useMemo(function(){return(h||m).map(function(e,t){return{value:e,active:t===T,getHandleProps:function(s){var o=s===void 0?{}:s,l=o.key,f=l===void 0?t:l;o.ref,o.innerRef;var y=o.onKeyDown,v=o.onMouseDown,b=o.onTouchStart,E=o.style,F=E===void 0?{}:E,I=B(o,["key","ref","innerRef","onKeyDown","onMouseDown","onTouchStart","style"]);return k({key:f,onKeyDown:function(x){x.persist(),ae(x,t),y&&y(x)},onMouseDown:function(x){x.persist(),Q(x,t),v&&v(x)},onTouchStart:function(x){x.persist(),Q(x,t),b&&b(x)},role:"slider","aria-valuemin":g,"aria-valuemax":d,"aria-valuenow":e,style:k({position:"absolute",top:"50%",left:$(e)+"%",zIndex:t===T?"1":"0",transform:"translate(-50%, -50%)"},F)},I)}}})},[T,$,ae,Q,g,d,h,m]),Ee=function(t){var i=t===void 0?{}:t,s=i.style,o=s===void 0?{}:s,l=i.ref,f=B(i,["style","ref"]);return k({ref:function(v){Z.current=v,l&&(typeof l=="function"?l(v):l.current=v)},style:k({position:"relative",userSelect:"none"},o)},f)};return{activeHandleIndex:T,getTrackProps:Ee,ticks:Ve,segments:ke,handles:De}}const Ie="_light_1e127_38",Pe="_dark_1e127_262",ze="_container_1e127_505",Ne="_slider_1e127_512",Me="_handle_1e127_519",Ae="_tooltip_1e127_1",He="_active_1e127_563",qe="_labels_1e127_598",Oe="_dragging_1e127_607",Xe="_disabled_1e127_610",Ke="_isFetching_1e127_627",V={light:Ie,dark:Pe,container:ze,slider:Ne,handle:Me,tooltip:Ae,active:He,labels:qe,dragging:Oe,disabled:Xe,isFetching:Ke,"skeleton-animation":"_skeleton-animation_1e127_1"},O=we(({disabled:a,max:r,min:n,onChange:u,values:c,stepSize:m,className:g,isFetching:d,...R},C)=>{const W=h=>{u&&!a&&u(h)},{getTrackProps:J,handles:_,activeHandleIndex:X}=Fe({values:c,onDrag:W,min:n,max:r,stepSize:m||1}),T=X!==null,L=c.length>1,K=Y.useMemo(()=>{const h=a?"#A3A3A3":"#06C1A6",S=w=>(w-n)/(r-n)*100;return L?`linear-gradient(to right, #ECECEC 0%, #ECECEC ${S(c[0])}%, ${h} ${S(c[0])}%, ${h} ${S(c[1])}%, #ECECEC ${S(c[1])}%, #ECECEC 100%)`:`linear-gradient(to right, ${h} 0%, ${h} ${S(c[0])}%, #ECECEC ${S(c[0])}%, #ECECEC 100%)`},[c,L,a,n,r]);return D.jsxs("div",{ref:C,className:se(V.container,a&&V.disabled,T&&V.dragging,d&&V.isFetching,g),...R,children:[D.jsx("div",{...J({className:V.slider,style:{background:K}}),children:_==null?void 0:_.map(({getHandleProps:h,active:S})=>D.jsx("div",{...h({className:se(V.handle,S&&V.active)})}))}),D.jsxs("div",{className:V.labels,children:[D.jsx("span",{className:V.min,children:n}),D.jsx("span",{className:V.max,children:r})]})]})});O.defaultProps={disabled:!1,stepSize:1,min:0,max:100};try{O.displayName="Slider",O.__docgenInfo={description:"",displayName:"Slider",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: TSliderValues) => void)"}},min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"TSliderValues"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isFetching:{defaultValue:null,description:"",name:"isFetching",required:!1,type:{name:"boolean"}},stepSize:{defaultValue:{value:"1"},description:"",name:"stepSize",required:!1,type:{name:"number"}}}}}catch{}const Qe={title:"Inputs/Slider",zeplinLink:"",parameters:{controls:{sort:"requiredFirst"}},argTypes:{disabled:Te,isFetching:$e,max:{control:{type:"number"},table:{category:z.DATA,type:{summary:"number"},defaultValue:{summary:100}}},min:{control:{type:"number"},table:{category:z.DATA,type:{summary:"number"},defaultValue:{summary:0}}},onChange:{action:"onChange",table:{category:z.EVENTS,type:{summary:"(value: TSliderValues) => void"}}},stepSize:{control:{type:"range",min:1,max:100,step:1},table:{category:z.BEHAVIOR,type:{summary:"number"},defaultValue:{summary:1}}},values:{control:{type:"array"},type:{required:!0,value:"number | number[]",name:"other"},table:{category:z.DATA,type:{summary:"TSliderValues",detail:"number | number[]"}}}}},G=a=>{const[r,n]=Y.useState([33]);return D.jsx("div",{style:{width:"100%",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:D.jsx(O,{...a,min:0,max:100,values:r,onChange:u=>n(u)})})},j=G.bind({});j.args={disabled:!1,stepSize:1};const N=G.bind({});N.args={...j.args,stepSize:10};const M=G.bind({});M.args={disabled:!0};const A=a=>{const[r,n]=Y.useState([24,33]);return D.jsx("div",{style:{width:"100%",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:D.jsx(O,{...a,min:0,max:100,values:r,onChange:u=>n(u)})})},H=A.bind({});H.args={disabled:!0};const q=G.bind({});q.args={...j.args,isFetching:!0};var ie,oe,le;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  const [values, setValues] = useState<TSliderValues>([33]);
  return <div style={{
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
      <Slider {...args} min={0} max={100} values={values} onChange={v => setValues(v)} />
    </div>;
}`,...(le=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ue,ce,de;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  const [values, setValues] = useState<TSliderValues>([33]);
  return <div style={{
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
      <Slider {...args} min={0} max={100} values={values} onChange={v => setValues(v)} />
    </div>;
}`,...(de=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ge,me,ve;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  const [values, setValues] = useState<TSliderValues>([33]);
  return <div style={{
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
      <Slider {...args} min={0} max={100} values={values} onChange={v => setValues(v)} />
    </div>;
}`,...(ve=(me=M.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var fe,pe,he;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TSliderValues>([24, 33]);
  return <div style={{
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
      <Slider {...args} min={0} max={100} values={value} onChange={v => setValue(v)} />
    </div>;
}`,...(he=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ye,Ce,Se;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TSliderValues>([24, 33]);
  return <div style={{
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
      <Slider {...args} min={0} max={100} values={value} onChange={v => setValue(v)} />
    </div>;
}`,...(Se=(Ce=H.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var xe,_e,be;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`args => {
  const [values, setValues] = useState<TSliderValues>([33]);
  return <div style={{
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
      <Slider {...args} min={0} max={100} values={values} onChange={v => setValues(v)} />
    </div>;
}`,...(be=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:be.source}}};const Ue=["Default","StepSize","Disabled","Range","RangeDisabled","IsFetching"];export{j as Default,M as Disabled,q as IsFetching,A as Range,H as RangeDisabled,N as StepSize,Ue as __namedExportsOrder,Qe as default};
//# sourceMappingURL=index.stories-5952345d.js.map
