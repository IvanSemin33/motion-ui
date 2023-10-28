import{w as Ue,j as t,m as ae,c as Z}from"./wrapper-3316f290.js";import{r as g}from"./index-76fb7be0.js";import{E as m,e as Oe,d as $e,b as Je}from"./argTypes-95f67a8a.js";import{l as He}from"./lodash-f6b38868.js";import{x as te,y as Qe,z as Ke,G as Ye}from"./index.esm-1eb8ea43.js";import{B as Ze,b as We,E as Xe}from"./index-d216276e.js";import{I as ea,b as aa,E as ta}from"./index-69fa7e90.js";import{C as le,a as la}from"./index-48ba842e.js";import{A as na}from"./index-a7b4cf19.js";import"./_commonjsHelpers-de833af9.js";import"./index-6f2f2dd8.js";import"./index-a431868f.js";var Ce=(e=>(e.JPG="jpg",e.JPEG="jpeg",e.PNG="png",e.GIF="gif",e.BMP="bmp",e.ICO="ico",e.SVG="svg",e.TIFF="tiff",e.WEBP="webp",e))(Ce||{});const Ne=Object.values(Ce),sa="_light_fi88d_38",ra="_dark_fi88d_262",ia="_container_fi88d_495",oa="_upload_fi88d_500",ca="_input_fi88d_509",ua="_label_fi88d_512",da="_icon_fi88d_520",pa="_labelText_fi88d_526",ma="_description_fi88d_534",ga="_draging_fi88d_542",fa="_minimal_fi88d_545",ya="_typeImage_fi88d_561",_a="_files_fi88d_561",ba="_typeFile_fi88d_566",va="_disabled_fi88d_571",ha="_isFetching_fi88d_581",s={light:sa,dark:ra,container:ia,upload:oa,input:ca,label:ua,icon:da,labelText:pa,description:ma,draging:ga,minimal:fa,typeImage:ya,files:_a,typeFile:ba,disabled:va,isFetching:ha,"skeleton-animation":"_skeleton-animation_fi88d_1"},ne=e=>e?Array.from(e):[],Va=(e,r)=>{const u=e.type.split("/")[1];return r.includes(u)},Sa=(e,r)=>e.size<=r,xa="_light_y3ucg_38",Ta="_dark_y3ucg_262",Ia="_container_y3ucg_495",Fa="_typeImage_y3ucg_495",Da="_image_y3ucg_508",Ea="_mainLabel_y3ucg_533",La="_loading_y3ucg_546",Aa="_hovered_y3ucg_546",Ma="_selectable_y3ucg_549",Ua="_selected_y3ucg_564",Ca="_loader_y3ucg_573",Na="_typeFile_y3ucg_590",ja="_icon_y3ucg_604",Pa="_name_y3ucg_611",o={light:xa,dark:Ta,container:Ia,typeImage:Fa,image:Da,delete:"_delete_y3ucg_514",mainLabel:Ea,loading:La,hovered:Aa,selectable:Ma,selected:Ua,loader:Ca,typeFile:Na,icon:ja,name:Pa,"skeleton-animation":"_skeleton-animation_y3ucg_1"};var je=(e=>(e.FILE="file",e.IMAGE="image",e))(je||{});const R=Ue(({file:e,type:r,onDelete:u,onSelect:c,selected:l,onDeselect:L,selectable:A,mainLabel:y,onDragStart:b,onDrop:S},p)=>{const{file:v,url:V,id:_,loading:M}=e,O=!!v&&!V?URL.createObjectURL(v):V,[z,x]=g.useState(!1),T=()=>t.jsxs(g.Fragment,{children:[t.jsx("img",{src:O,alt:_,className:o.image}),y&&t.jsx("div",{className:o.mainLabel,children:y}),M&&t.jsx("div",{className:o.loader,children:t.jsx(le,{size:la.SMALL})}),t.jsx(na,{children:z&&t.jsx(ae.div,{className:o.delete,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:t.jsx(te,{size:20,onClick:()=>u(e)})})})]}),$=()=>t.jsxs(g.Fragment,{children:[M?t.jsx(le,{className:o.loader}):t.jsx(Qe,{className:o.icon}),t.jsx("div",{className:o.name,children:_}),t.jsx(te,{className:o.delete,onClick:()=>u(e)})]});return t.jsx(ae.div,{ref:p,id:_,className:Z(o.container,r==="file"?o.typeFile:o.typeImage,z&&o.hovered,A&&o.selectable,l&&o.selected,M&&o.loading),onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),draggable:!0,onDragStart:b,onDrop:S,onDragOver:J=>J.preventDefault(),onClick:()=>{l?L(e):c(e)},children:r==="image"?T():$()})});R.defaultProps={};try{R.displayName="UploadItem",R.__docgenInfo={description:"",displayName:"UploadItem",props:{onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(file: TFile) => void"}},onDragStart:{defaultValue:null,description:`Callback function that fires when dragging starts.

\`\`\`jsx
<motion.div
  drag
  onDragStart={
    (event, info) => console.log(info.point.x, info.point.y)
  }
/>
\`\`\`
@public`,name:"onDragStart",required:!1,type:{name:"((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void)"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"file"'},{value:'"image"'}]}},mainLabel:{defaultValue:null,description:"",name:"mainLabel",required:!1,type:{name:"string"}},file:{defaultValue:null,description:"",name:"file",required:!0,type:{name:"TFile"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(file: TFile) => void"}},onDeselect:{defaultValue:null,description:"",name:"onDeselect",required:!0,type:{name:"(file: TFile) => void"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}}}}}catch{}const f=je,D=Ue(({buttonText:e,className:r,description:u,disabled:c,format:l,isFetching:L,label:A,multiple:y,onChange:b,onSelect:S,selected:p,size:v,type:V,value:_,mainLabel:M,...W},O)=>{const[z,x]=g.useState(!1),T=g.useRef(null),[$,J]=g.useState(null),ke=a=>{var d;const n=(d=a.currentTarget)==null?void 0:d.id;J(n)},we=a=>{a.preventDefault();const n=a.currentTarget.id||null;if(n&&b){const d=_.findIndex(i=>i.id===n),B=_.findIndex(i=>i.id===$);if(d!==B){const i=[..._],[U]=i.splice(B,1);i.splice(d,0,U),b(i)}}},ze=a=>v||l!=null&&l.length?a.filter(({file:n})=>n?v?Sa(n,v):l!=null&&l.length?Va(n,l):!0:!0):a,H=a=>{if(b){const n=ze(a);b(n)}},Q=a=>{c||(a.preventDefault(),a.stopPropagation(),a.type==="dragenter"||a.type==="dragover"?x(!0):a.type==="dragleave"&&x(!1))},qe=a=>{if(!c&&(a.preventDefault(),a.stopPropagation(),x(!1),a.dataTransfer.files&&a.dataTransfer.files[0])){const n=ne(a.dataTransfer.files).map(d=>({id:d.name,file:d}));H(n)}},Ge=a=>{if(!c&&(a.preventDefault(),a.target.files&&a.target.files[0])){const n=ne(a.target.files).map(d=>({id:d.name,file:d}));H(n)}},X=()=>{!c&&T.current&&(T.current.value="",T.current.click())},q=!!S&&He.isArray(p),G=!!_.length&&V===f.IMAGE,K=()=>t.jsxs("div",{ref:O,className:Z(s.upload,z&&s.draging,G&&s.minimal),onDragEnter:Q,onSubmit:a=>a.preventDefault(),onDragLeave:Q,onDragOver:Q,onDrop:qe,children:[t.jsx("input",{id:"input-file-upload",ref:T,className:s.input,type:"file",multiple:y,onChange:Ge,disabled:c,accept:l==null?void 0:l.join(",")}),t.jsxs("label",{className:s.label,htmlFor:"input-file-upload",children:[t.jsx(Ke,{className:s.icon}),t.jsx("div",{className:s.labelText,children:A}),t.jsx("div",{className:s.description,children:u}),G?t.jsx(ea,{Icon:Ye,className:s.button,onClick:X,variant:aa.LINK,color:ta.SECONDARY,disabled:c}):t.jsx(Ze,{className:s.button,onClick:X,variant:We.LINK,color:Xe.PRIMARY,disabled:c,children:e})]})]}),ee=()=>t.jsxs("div",{className:s.files,children:[G&&K(),_.map((a,n)=>{const d=q&&!!(p!=null&&p.some(i=>i.id===a.id)),B=n===0;return t.jsx(R,{file:a,type:V||f.FILE,onDelete:i=>{const U=_.filter(Y=>Y.id!==i.id);H(U)},selectable:q,selected:d,onDeselect:i=>{if(q){const U=p.filter(Y=>Y.id!==i.id);S(U)}},onSelect:i=>{q&&S([...p,i])},mainLabel:B?M:void 0,onDragStart:ke,onDrop:we},a.id)})]}),Be=()=>G?ee():K(),Re=()=>t.jsxs(g.Fragment,{children:[K(),ee()]});return t.jsx("div",{className:Z(s.container,r,V===f.IMAGE?s.typeImage:s.typeFile,L&&s.isFetching,c&&s.disabled),...W,children:V===f.IMAGE?Be():Re()})});D.defaultProps={disabled:!1,isFetching:!1,multiple:!1,type:f.FILE};try{D.displayName="Upload",D.__docgenInfo={description:"",displayName:"Upload",props:{buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: TUploadValue) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((value: TUploadValue) => void)"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string[]"}},isFetching:{defaultValue:{value:"false"},description:"",name:"isFetching",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"TUploadValue"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},type:{defaultValue:{value:"EUploadType.FILE"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"file"'},{value:'"image"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TUploadValue"}},mainLabel:{defaultValue:null,description:"",name:"mainLabel",required:!1,type:{name:"string"}}}}}catch{}const Ya={title:"Inputs/Upload",zeplinLink:"",parameters:{controls:{sort:"requiredFirst"}},argTypes:{buttonText:{description:"Text for button",control:{type:"text"},table:{category:m.APPEARANCE,type:{summary:"string"}}},className:Oe,description:{description:"Description for drag and drop area",control:{type:"text"},table:{category:m.APPEARANCE,type:{summary:"string"}}},disabled:$e,format:{description:"Files formats for upload",control:{type:"array"},table:{category:m.BEHAVIOR,type:{summary:"string[]"}}},isFetching:Je,label:{control:{type:"text"},description:"Label for drag and drop area",table:{category:m.APPEARANCE,type:{summary:"string"}}},multiple:{description:"Allow to upload multiple files",control:{type:"boolean"},table:{category:m.BEHAVIOR,type:{summary:"boolean"},defaultValue:{summary:!1}}},onChange:{action:"onChange",description:"Callback for change value",table:{category:m.EVENTS,type:{summary:"(value: TUploadValue) => void"}}},onSelect:{action:"onSelect",description:"Callback for select files",table:{category:m.EVENTS,type:{summary:"(value: TUploadValue) => void"}}},selected:{description:"Selected files",control:{type:"array"},table:{category:m.DATA,type:{summary:"TUploadValue"}}},size:{description:"Max file size in bytes",control:{type:"number"},table:{category:m.BEHAVIOR,type:{summary:"number"}}},type:{control:{type:"radio",options:Object.values(f)},description:"Type of upload",table:{category:m.APPEARANCE,type:{summary:"EUploadType",detail:Object.values(f).join(" | ")},defaultValue:{summary:f.FILE}}},value:{description:"Value of upload",control:{type:"array"},type:{name:"other",value:"TUploadValue",required:!0},table:{category:m.DATA,type:{summary:"TUploadValue",detail:"File[]"}}},mainLabel:{description:"Label for main file",control:{type:"text"},table:{category:m.APPEARANCE,type:{summary:"string"}}}}},E=e=>{const[r,u]=g.useState([]);return t.jsx(D,{...e,value:r,onChange:u,size:1024*1024*3,mainLabel:"Main"})},ka=e=>{const[r,u]=g.useState([]),[c,l]=g.useState([]);return t.jsx(D,{...e,value:r,onChange:u,selected:c,onSelect:l,size:1024*1024*3,mainLabel:"Main"})},h=E.bind({});h.args={label:"Select image and drag it here",description:"Image size must be less than 3MB.",buttonText:"Select image",type:f.IMAGE,format:Ne};const I=E.bind({});I.args={...h.args,multiple:!0};const C=ka.bind({});C.args={...I.args};const F=E.bind({});F.args={label:"Select file and drag it here",description:"File size must be less than 3MB.",buttonText:"Select file",type:f.FILE};const N=E.bind({});N.args={...F.args,multiple:!0};const Pe=e=>{const[r,u]=g.useState([]),[c,l]=g.useState([]),L=()=>new Promise(y=>{setTimeout(()=>{y("https://media.licdn.com/dms/image/D4D03AQG27AyrybPyKg/profile-displayphoto-shrink_800_800/0/1679941446897?e=1687996800&v=beta&t=T3ZbxzMG7csU09iDJ75tdD6Bve7v771aDuJQFYmaz4M")},3e3)}),A=async y=>{let b=y;y.length>r.length&&(u(y.map(p=>({...p,loading:!0}))),b=await Promise.all(y.map(async p=>{const v=await L();return{...p,url:v,loading:!1}}))),u(b)};return t.jsx(D,{...e,value:r,onChange:A,selected:c,onSelect:l,size:1024*1024*3,multiple:!0,mainLabel:"Main"})},j=Pe.bind({});j.args={label:"Select image and drag it here",description:"Image size must be less than 3MB.",buttonText:"Select image",type:f.IMAGE,format:Ne};const P=Pe.bind({});P.args={label:"Select file and drag it here",description:"File size must be less than 3MB.",buttonText:"Select file",type:f.FILE};const k=E.bind({});k.args={...h.args,disabled:!0};const w=E.bind({});w.args={...h.args,isFetching:!0};var se,re,ie;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TUploadValue>([]);
  return <Upload {...args} value={value} onChange={setValue} size={1024 * 1024 * 3} mainLabel="Main" />;
}`,...(ie=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,ce,ue;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TUploadValue>([]);
  return <Upload {...args} value={value} onChange={setValue} size={1024 * 1024 * 3} mainLabel="Main" />;
}`,...(ue=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TUploadValue>([]);
  const [selected, setSelected] = useState<TUploadValue>([]);
  return <Upload {...args} value={value} onChange={setValue} selected={selected} onSelect={setSelected} size={1024 * 1024 * 3} mainLabel="Main" />;
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,fe,ye;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TUploadValue>([]);
  return <Upload {...args} value={value} onChange={setValue} size={1024 * 1024 * 3} mainLabel="Main" />;
}`,...(ye=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var _e,be,ve;N.parameters={...N.parameters,docs:{...(_e=N.parameters)==null?void 0:_e.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TUploadValue>([]);
  return <Upload {...args} value={value} onChange={setValue} size={1024 * 1024 * 3} mainLabel="Main" />;
}`,...(ve=(be=N.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var he,Ve,Se;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TUploadValue>([]);
  const [selected, setSelected] = useState<TUploadValue>([]);
  const mockFetch = () => {
    return new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('https://media.licdn.com/dms/image/D4D03AQG27AyrybPyKg/profile-displayphoto-shrink_800_800/0/1679941446897?e=1687996800&v=beta&t=T3ZbxzMG7csU09iDJ75tdD6Bve7v771aDuJQFYmaz4M');
      }, 3000);
    });
  };
  const onChange = async (newValue: TUploadValue) => {
    let nextValue = newValue;
    const hasNewValues = newValue.length > value.length;
    if (hasNewValues) {
      setValue(newValue.map(file => ({
        ...file,
        loading: true
      })));
      nextValue = await Promise.all(newValue.map(async file => {
        const url = await mockFetch();
        return {
          ...file,
          url,
          loading: false
        };
      }));
    }
    setValue(nextValue);
  };
  return <Upload {...args} value={value} onChange={onChange} selected={selected} onSelect={setSelected} size={1024 * 1024 * 3} multiple mainLabel="Main" />;
}`,...(Se=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:Se.source}}};var xe,Te,Ie;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TUploadValue>([]);
  const [selected, setSelected] = useState<TUploadValue>([]);
  const mockFetch = () => {
    return new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('https://media.licdn.com/dms/image/D4D03AQG27AyrybPyKg/profile-displayphoto-shrink_800_800/0/1679941446897?e=1687996800&v=beta&t=T3ZbxzMG7csU09iDJ75tdD6Bve7v771aDuJQFYmaz4M');
      }, 3000);
    });
  };
  const onChange = async (newValue: TUploadValue) => {
    let nextValue = newValue;
    const hasNewValues = newValue.length > value.length;
    if (hasNewValues) {
      setValue(newValue.map(file => ({
        ...file,
        loading: true
      })));
      nextValue = await Promise.all(newValue.map(async file => {
        const url = await mockFetch();
        return {
          ...file,
          url,
          loading: false
        };
      }));
    }
    setValue(nextValue);
  };
  return <Upload {...args} value={value} onChange={onChange} selected={selected} onSelect={setSelected} size={1024 * 1024 * 3} multiple mainLabel="Main" />;
}`,...(Ie=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var Fe,De,Ee;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TUploadValue>([]);
  return <Upload {...args} value={value} onChange={setValue} size={1024 * 1024 * 3} mainLabel="Main" />;
}`,...(Ee=(De=k.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Le,Ae,Me;w.parameters={...w.parameters,docs:{...(Le=w.parameters)==null?void 0:Le.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<TUploadValue>([]);
  return <Upload {...args} value={value} onChange={setValue} size={1024 * 1024 * 3} mainLabel="Main" />;
}`,...(Me=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:Me.source}}};const Za=["Image","ImageMultiple","ImageMultipleSelect","File","FileMultiple","LoadingImage","LoadingFile","Disabled","IsFetching"];export{k as Disabled,F as File,N as FileMultiple,h as Image,I as ImageMultiple,C as ImageMultipleSelect,w as IsFetching,P as LoadingFile,j as LoadingImage,Za as __namedExportsOrder,Ya as default};
//# sourceMappingURL=index.stories-c31d3eda.js.map
