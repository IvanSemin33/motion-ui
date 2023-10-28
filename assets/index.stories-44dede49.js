import{w as q,j as e,c as I}from"./wrapper-3316f290.js";import{s as L}from"./storybook.module-8758143f.js";import{n as B,E as W,b as v}from"./argTypes-95f67a8a.js";import{L as a,E as i}from"./index-5b820214.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const w="_light_15qip_38",H="_dark_15qip_262",J="_container_15qip_495",P="_ellipsis_15qip_504",$="_crumb_15qip_507",M="_separator_15qip_507",T="_isFetching_15qip_511",s={light:w,dark:H,container:J,ellipsis:P,crumb:$,separator:M,isFetching:T,"skeleton-animation":"_skeleton-animation_15qip_1"},V={maxItems:8,isFetching:!1},u=q(({children:n,maxItems:m=8,isFetching:O,className:Y,...y},x)=>{const k=Math.floor(m/2),j=m-k,d=k,C=n.length-j,p=t=>e.jsx("span",{className:s.separator,children:"/"},`${t}-separator`),F=(t,r)=>{if(m&&m<n.length){if(r<d)return e.jsxs("div",{className:s.crumb,children:[t,p(r)]},r);if(r===d)return e.jsx("div",{className:s.ellipsis,children:"..."});if(r>d&&r<C)return null;if(r>=C)return e.jsxs("div",{className:s.crumb,children:[p(r),t]},r)}else return e.jsxs("div",{className:s.crumb,children:[t,r!==n.length-1&&p(r)]},r);return null};return e.jsx("div",{ref:x,className:I(s.container,O&&s.isFetching,Y),...y,children:n.map(F)})});u.defaultProps=V;const R=u;try{u.displayName="Breadcrumbs",u.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{isFetching:{defaultValue:{value:"false"},description:"",name:"isFetching",required:!1,type:{name:"boolean"}},maxItems:{defaultValue:{value:"8"},description:"",name:"maxItems",required:!1,type:{name:"number"}}}}}catch{}const Z={title:"Navigation/Breadcrumbs",component:R,zeplinLink:"",parameters:{controls:{sort:"requiredFirst"}},argTypes:{children:B({description:"The content of the component.",required:!1}),maxItems:{description:"Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first items and last items will be shown, with an ellipsis in between.",required:!1,table:{category:W.APPEARANCE,type:{summary:"number"},defaultValue:{summary:8}},control:{type:"number"}},isFetching:v}},h=n=>e.jsxs(R,{...n,className:L.breadcrumbs,children:[e.jsx(a,{href:"/",color:i.SECONDARY,underline:!0,children:"Home"}),e.jsx(a,{href:"/",color:i.SECONDARY,underline:!0,children:"Catalog"}),e.jsx(a,{href:"/",color:i.SECONDARY,underline:!0,children:"Women"}),e.jsx(a,{href:"/",color:i.SECONDARY,underline:!0,children:"Clothes"}),e.jsx(a,{href:"/",color:i.SECONDARY,underline:!0,children:"Jackets"}),e.jsx(a,{href:"/",color:i.SECONDARY,underline:!0,children:"Winter"}),e.jsx("span",{className:L.currentCrumb,children:"Sale"})]}),o=h.bind({});o.args={maxItems:7,isFetching:!1};const l=h.bind({});l.args={...o.args,maxItems:5};const c=h.bind({});c.args={...o.args,isFetching:!0};var f,E,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <Breadcrumbs {...args} className={styles.breadcrumbs}>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Home
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Catalog
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Women
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Clothes
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Jackets
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Winter
      </Link>
      <span className={styles.currentCrumb}>Sale</span>
    </Breadcrumbs>;
}`,...(b=(E=o.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var g,N,_;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <Breadcrumbs {...args} className={styles.breadcrumbs}>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Home
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Catalog
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Women
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Clothes
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Jackets
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Winter
      </Link>
      <span className={styles.currentCrumb}>Sale</span>
    </Breadcrumbs>;
}`,...(_=(N=l.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var S,A,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <Breadcrumbs {...args} className={styles.breadcrumbs}>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Home
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Catalog
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Women
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Clothes
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Jackets
      </Link>
      <Link href="/" color={ELinkColors.SECONDARY} underline>
        Winter
      </Link>
      <span className={styles.currentCrumb}>Sale</span>
    </Breadcrumbs>;
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const ee=["Default","MaxItems","IsFetching"];export{o as Default,c as IsFetching,l as MaxItems,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=index.stories-44dede49.js.map
