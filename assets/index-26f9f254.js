import{w as v,j as i,c as E}from"./wrapper-3316f290.js";import{r as V}from"./index-76fb7be0.js";import{E as g,a as h,I as q}from"./index-bbe78a76.js";const x="_light_b2tn0_38",F="_dark_b2tn0_262",N="_input_b2tn0_495",k="_disabled_b2tn0_512",u={light:x,dark:F,input:N,disabled:k,"skeleton-animation":"_skeleton-animation_b2tn0_1"},R=g,j=h,e=v(({IconStart:n,IconEnd:o,className:d,variant:p,disabled:a,helperText:c,label:m,color:f,isFetching:I,onFocus:s,onBlur:l,..._},y)=>{const[b,r]=V.useState(!1);return i.jsx(q,{ref:y,IconStart:n,IconEnd:o,variant:p,disabled:a,helperText:c,label:m,color:f,isFetching:I,isFocused:b,className:d,children:i.jsx("input",{..._,className:E(u.input,a&&u.disabled),disabled:a,onFocus:t=>{s&&s(t),r(!0)},onBlur:t=>{l&&l(t),r(!1)}})})});e.defaultProps={color:R.PRIMARY,disabled:!1,variant:j.FILLED};const C=e;try{e.displayName="Input",e.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"EInputColors.PRIMARY"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"error"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},IconEnd:{defaultValue:null,description:"",name:"IconEnd",required:!1,type:{name:"IconType"}},IconStart:{defaultValue:null,description:"",name:"IconStart",required:!1,type:{name:"IconType"}},isFetching:{defaultValue:null,description:"",name:"isFetching",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"EInputVariants.FILLED"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"filled"'},{value:'"outlined"'}]}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}export{R as E,C as I,j as a};
//# sourceMappingURL=index-26f9f254.js.map
