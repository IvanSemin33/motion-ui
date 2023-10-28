import{j as f}from"./wrapper-3316f290.js";import{r as h}from"./index-76fb7be0.js";import{E as o,n as U}from"./argTypes-95f67a8a.js";import{B as W}from"./index-d216276e.js";import{E as n,P as J}from"./index-aee08918.js";import"./_commonjsHelpers-de833af9.js";import"./index-6f2f2dd8.js";import"./index-48ba842e.js";import"./index.esm-1eb8ea43.js";import"./index-a431868f.js";import"./index-d3ea75b5.js";import"./index-a7b4cf19.js";const pe={title:"Utils/Popper",zeplinLink:"",parameters:{controls:{sort:"requiredFirst"}},argTypes:{anchorEl:{description:"The DOM element used to set the position of the popper.",type:{name:"other",required:!0,value:"HTMLElement | null"},table:{category:o.APPEARANCE,type:{summary:"HTMLElement | null"}}},arrow:{control:{type:"boolean"},description:"If true, the popper will have an arrow.",table:{category:o.APPEARANCE,type:{summary:"boolean"},defaultValue:{summary:!1}}},children:U({description:"The content of the popper.",required:!1}),fixed:{control:{type:"boolean"},description:"If true, the popper will be fixed.",table:{category:o.APPEARANCE,type:{summary:"boolean"},defaultValue:{summary:!1}}},fullWidth:{control:{type:"boolean"},description:"If true, the popper will have the same width as the anchor element.",table:{category:o.APPEARANCE,type:{summary:"boolean"},defaultValue:{summary:!1}}},open:{control:{type:"boolean"},description:"If true, the popper is visible.",table:{category:o.APPEARANCE,type:{summary:"boolean"}}},position:{control:{type:"radio",options:Object.values(n)},description:"The placement of the popper.",table:{category:o.APPEARANCE,type:{summary:"EPopperPosition"},defaultValue:{summary:n.BOTTOM}}}}},t=G=>{const[m,z]=h.useState(!1),d=h.useRef(null);return f.jsxs("div",{style:{width:"100%",height:"500px",display:"flex",justifyContent:"center",alignItems:"center"},children:[f.jsx(W,{ref:d,onClick:()=>z(!m),children:"Open popper"}),f.jsx(J,{...G,open:m,anchorEl:d.current,children:"The content of the Popper."})]})},e=t.bind({});e.args={};const r=t.bind({});r.args={...e.args,arrow:!0,position:n.TOP};const s=t.bind({});s.args={...e.args,arrow:!0,position:n.TOP_LEFT};const p=t.bind({});p.args={...e.args,arrow:!0,position:n.TOP_RIGHT};const a=t.bind({});a.args={...e.args,arrow:!0,position:n.BOTTOM};const i=t.bind({});i.args={...e.args,arrow:!0,position:n.BOTTOM_LEFT};const u=t.bind({});u.args={...e.args,arrow:!0,position:n.BOTTOM_RIGHT};const c=t.bind({});c.args={...e.args,arrow:!0,position:n.LEFT};const l=t.bind({});l.args={...e.args,arrow:!0,position:n.RIGHT};var g,y,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <div style={{
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Open popper
      </Button>
      <Popper {...args} open={open} anchorEl={buttonRef.current}>
        The content of the Popper.
      </Popper>
    </div>;
}`,...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var R,P,T;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <div style={{
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Open popper
      </Button>
      <Popper {...args} open={open} anchorEl={buttonRef.current}>
        The content of the Popper.
      </Popper>
    </div>;
}`,...(T=(P=r.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var E,O,B;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <div style={{
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Open popper
      </Button>
      <Popper {...args} open={open} anchorEl={buttonRef.current}>
        The content of the Popper.
      </Popper>
    </div>;
}`,...(B=(O=s.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var x,C,v;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <div style={{
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Open popper
      </Button>
      <Popper {...args} open={open} anchorEl={buttonRef.current}>
        The content of the Popper.
      </Popper>
    </div>;
}`,...(v=(C=p.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var w,L,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <div style={{
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Open popper
      </Button>
      <Popper {...args} open={open} anchorEl={buttonRef.current}>
        The content of the Popper.
      </Popper>
    </div>;
}`,...(S=(L=a.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var A,I,j;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <div style={{
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Open popper
      </Button>
      <Popper {...args} open={open} anchorEl={buttonRef.current}>
        The content of the Popper.
      </Popper>
    </div>;
}`,...(j=(I=i.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var M,H,k;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <div style={{
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Open popper
      </Button>
      <Popper {...args} open={open} anchorEl={buttonRef.current}>
        The content of the Popper.
      </Popper>
    </div>;
}`,...(k=(H=u.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var _,N,F;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <div style={{
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Open popper
      </Button>
      <Popper {...args} open={open} anchorEl={buttonRef.current}>
        The content of the Popper.
      </Popper>
    </div>;
}`,...(F=(N=c.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var V,q,D;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <div style={{
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Open popper
      </Button>
      <Popper {...args} open={open} anchorEl={buttonRef.current}>
        The content of the Popper.
      </Popper>
    </div>;
}`,...(D=(q=l.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const ae=["Default","Top","TopLeft","TopRight","Bottom","BottomLeft","BottomRight","Left","Right"];export{a as Bottom,i as BottomLeft,u as BottomRight,e as Default,c as Left,l as Right,r as Top,s as TopLeft,p as TopRight,ae as __namedExportsOrder,pe as default};
//# sourceMappingURL=index.stories-d69b6978.js.map
