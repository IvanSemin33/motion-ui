import{w as _,j as i,c as p}from"./wrapper-3316f290.js";import{r as f}from"./index-76fb7be0.js";import{n as h}from"./index.esm-1eb8ea43.js";const g="_light_8hjj2_38",v="_dark_8hjj2_262",j="_container_8hjj2_495",y="_image_8hjj2_503",x="_active_8hjj2_510",F="_isFetching_8hjj2_514",a={light:g,dark:v,container:j,image:y,active:x,isFetching:F,"skeleton-animation":"_skeleton-animation_8hjj2_1"},t=_(({active:s,alt:c,height:o,isFetching:m,src:r,width:e,className:u,...n},d)=>{const l=f.useMemo(()=>e?e>=60?3:e>=36?2:1:1,[e]);return i.jsx("div",{ref:d,className:p(a.container,s&&a.active,m&&a.isFetching,u),...n,style:{height:o,width:e,outlineWidth:l,outlineOffset:l,...n.style},children:r?i.jsx("img",{alt:c,className:a.image,src:r}):i.jsx(h,{className:a.image})})});t.defaultProps={active:!1,alt:"avatar",height:44,isFetching:!1,src:"",width:44};const k=t;try{t.displayName="Avatar",t.__docgenInfo={description:"",displayName:"Avatar",props:{height:{defaultValue:{value:"44"},description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:{value:"44"},description:"",name:"width",required:!1,type:{name:"number"}},isFetching:{defaultValue:{value:"false"},description:"",name:"isFetching",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},alt:{defaultValue:{value:"avatar"},description:"",name:"alt",required:!1,type:{name:"string"}},src:{defaultValue:{value:""},description:"",name:"src",required:!1,type:{name:"string"}}}}}catch{}export{k as A};
//# sourceMappingURL=index-6211244b.js.map
