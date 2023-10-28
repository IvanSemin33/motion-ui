import{j as e}from"./wrapper-3316f290.js";import{r as f}from"./index-76fb7be0.js";import{n as g,e as C,E as t}from"./argTypes-95f67a8a.js";import{B as x}from"./index-d216276e.js";import{M as m}from"./index-aa56e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index-6f2f2dd8.js";import"./index-48ba842e.js";import"./index.esm-1eb8ea43.js";import"./index-a431868f.js";import"./index-d3ea75b5.js";import"./index-a7b4cf19.js";const w={title:"Utils/Modal",component:m,zeplinLink:"",parameters:{controls:{sort:"requiredFirst"}},argTypes:{children:g({description:"The content of the modal.",required:!0}),className:C,hideBackdrop:{control:{type:"boolean"},description:"If true the backdrop is transparent.",table:{category:t.APPEARANCE,type:{summary:"boolean"}}},onClose:{control:{type:"function"},describtion:"Callback fired when the component requests to be closed.",table:{category:t.EVENTS,type:{summary:"function"}}},open:{control:{type:"boolean"},type:{name:"boolean",required:!0},description:"If true, the modal is open.",table:{category:t.APPEARANCE,type:{summary:"boolean"}}}}},u=h=>{const[r,s]=f.useState(!1),b=()=>e.jsx("div",{style:{padding:"20px",backgroundColor:"white",border:"1px solid black"},children:e.jsx("h1",{children:"The content of the Modal."})});return e.jsxs("div",{children:[e.jsx(x,{onClick:()=>s(!r),children:"Open modal"}),e.jsx(m,{...h,open:r,onClose:()=>s(!1),children:b()})]})},o=u.bind({});o.args={};const n=u.bind({});n.args={hideBackdrop:!0};var a,d,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const renderContent = () => <div style={{
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid black'
  }}>
      <h1>The content of the Modal.</h1>
    </div>;
  return <div>
      <Button onClick={() => setOpen(!open)}>Open modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        {renderContent()}
      </Modal>
    </div>;
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,l,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const renderContent = () => <div style={{
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid black'
  }}>
      <h1>The content of the Modal.</h1>
    </div>;
  return <div>
      <Button onClick={() => setOpen(!open)}>Open modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        {renderContent()}
      </Modal>
    </div>;
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const N=["Default","WithoutBackdrop"];export{o as Default,n as WithoutBackdrop,N as __namedExportsOrder,w as default};
//# sourceMappingURL=index.stories-3b603c2e.js.map
