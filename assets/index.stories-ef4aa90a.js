import{w as Z,j as e,m as q,c as ee}from"./wrapper-3316f290.js";import{r as F}from"./index-76fb7be0.js";import{l as G}from"./lodash-f6b38868.js";import{c as U,m as W}from"./index.esm-1eb8ea43.js";import{c as ne,e as ae,E as p}from"./argTypes-95f67a8a.js";import{B as z}from"./index-46515d40.js";import{L as K}from"./index-313bbc65.js";import{L as Y,E as X}from"./index-9361b1cd.js";import{M as te}from"./index-27089cba.js";import{A as le}from"./index-a7b4cf19.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d5f341a.js";import"./index-dbe12283.js";import"./index-a431868f.js";import"./index-d3ea75b5.js";const re="_light_1usjr_38",ie="_dark_1usjr_262",oe="_container_1usjr_495",ue="_permanent_1usjr_500",se="_temporary_1usjr_504",de="_top_1usjr_507",pe="_bottom_1usjr_512",me="_left_1usjr_517",ce="_right_1usjr_522",C={light:re,dark:ie,container:oe,permanent:ue,temporary:se,top:de,bottom:pe,left:me,right:ce,"skeleton-animation":"_skeleton-animation_1usjr_1"};var r=(n=>(n.PERSISTENT="persistent",n.TEMPORARY="temporary",n.PERMANENT="permanent",n))(r||{}),i=(n=>(n.LEFT="left",n.RIGHT="right",n.TOP="top",n.BOTTOM="bottom",n))(i||{});const g=Z(({open:n,onClose:a,variant:t,header:o,children:E,className:d,position:u,...$},J)=>{const s=u==="top"||u==="bottom",V=Q=>e.jsxs(q.div,{ref:J,className:ee(C.container,t&&C[t],u&&C[u],n&&C.open,d),...Q,...$,children:[o,E]},"drawer");return(()=>{switch(t){case"permanent":return V();case"temporary":return e.jsx(te,{open:!!n,onClose:a,style:{zIndex:3e3},children:V({initial:{width:s?"100vw":0,height:s?0:"100vh"},animate:{width:s?"100vw":"fit-content",height:s?"fit-content":"100vh",transition:{delay:0,duration:.2}},exit:{width:s?"100vw":0,height:s?0:"100vh",transition:{duration:.2,delay:.2}}})});case"persistent":return e.jsx(le,{children:n&&V({initial:{width:0},animate:{width:"fit-content",transition:{delay:0,duration:.2}},exit:{width:0,transition:{duration:.2,delay:.2}}})});default:return null}})()});g.defaultProps={variant:"temporary",position:"left",open:!1};const M=g;try{g.displayName="Drawer",g.__docgenInfo={description:"",displayName:"Drawer",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},slot:{defaultValue:null,description:"",name:"slot",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}},suppressContentEditableWarning:{defaultValue:null,description:"",name:"suppressContentEditableWarning",required:!1,type:{name:"boolean"}},suppressHydrationWarning:{defaultValue:null,description:"",name:"suppressHydrationWarning",required:!1,type:{name:"boolean"}},accessKey:{defaultValue:null,description:"",name:"accessKey",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},contentEditable:{defaultValue:null,description:"",name:"contentEditable",required:!1,type:{name:'"inherit" | Booleanish'}},contextMenu:{defaultValue:null,description:"",name:"contextMenu",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:"Booleanish"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},nonce:{defaultValue:null,description:"",name:"nonce",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},spellCheck:{defaultValue:null,description:"",name:"spellCheck",required:!1,type:{name:"Booleanish"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},translate:{defaultValue:null,description:"",name:"translate",required:!1,type:{name:"enum",value:[{value:'"yes"'},{value:'"no"'}]}},radioGroup:{defaultValue:null,description:"",name:"radioGroup",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"AriaRole"}},about:{defaultValue:null,description:"",name:"about",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string"}},datatype:{defaultValue:null,description:"",name:"datatype",required:!1,type:{name:"string"}},inlist:{defaultValue:null,description:"",name:"inlist",required:!1,type:{name:"any"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},property:{defaultValue:null,description:"",name:"property",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},resource:{defaultValue:null,description:"",name:"resource",required:!1,type:{name:"string"}},rev:{defaultValue:null,description:"",name:"rev",required:!1,type:{name:"string"}},typeof:{defaultValue:null,description:"",name:"typeof",required:!1,type:{name:"string"}},vocab:{defaultValue:null,description:"",name:"vocab",required:!1,type:{name:"string"}},autoCapitalize:{defaultValue:null,description:"",name:"autoCapitalize",required:!1,type:{name:"string"}},autoCorrect:{defaultValue:null,description:"",name:"autoCorrect",required:!1,type:{name:"string"}},autoSave:{defaultValue:null,description:"",name:"autoSave",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},itemProp:{defaultValue:null,description:"",name:"itemProp",required:!1,type:{name:"string"}},itemScope:{defaultValue:null,description:"",name:"itemScope",required:!1,type:{name:"boolean"}},itemType:{defaultValue:null,description:"",name:"itemType",required:!1,type:{name:"string"}},itemID:{defaultValue:null,description:"",name:"itemID",required:!1,type:{name:"string"}},itemRef:{defaultValue:null,description:"",name:"itemRef",required:!1,type:{name:"string"}},results:{defaultValue:null,description:"",name:"results",required:!1,type:{name:"number"}},security:{defaultValue:null,description:"",name:"security",required:!1,type:{name:"string"}},unselectable:{defaultValue:null,description:"",name:"unselectable",required:!1,type:{name:"enum",value:[{value:'"on"'},{value:'"off"'}]}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"none"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"string"}},"aria-activedescendant":{defaultValue:null,description:"",name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-atomic":{defaultValue:null,description:"",name:"aria-atomic",required:!1,type:{name:"Booleanish"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"none"'},{value:'"inline"'},{value:'"both"'}]}},"aria-braillelabel":{defaultValue:null,description:"",name:"aria-braillelabel",required:!1,type:{name:"string"}},"aria-brailleroledescription":{defaultValue:null,description:"",name:"aria-brailleroledescription",required:!1,type:{name:"string"}},"aria-busy":{defaultValue:null,description:"",name:"aria-busy",required:!1,type:{name:"Booleanish"}},"aria-checked":{defaultValue:null,description:"",name:"aria-checked",required:!1,type:{name:'boolean | "true" | "false" | "mixed"'}},"aria-colcount":{defaultValue:null,description:"",name:"aria-colcount",required:!1,type:{name:"number"}},"aria-colindex":{defaultValue:null,description:"",name:"aria-colindex",required:!1,type:{name:"number"}},"aria-colindextext":{defaultValue:null,description:"",name:"aria-colindextext",required:!1,type:{name:"string"}},"aria-colspan":{defaultValue:null,description:"",name:"aria-colspan",required:!1,type:{name:"number"}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},"aria-current":{defaultValue:null,description:"",name:"aria-current",required:!1,type:{name:'boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date"'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-description":{defaultValue:null,description:"",name:"aria-description",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}},"aria-disabled":{defaultValue:null,description:"",name:"aria-disabled",required:!1,type:{name:"Booleanish"}},"aria-dropeffect":{defaultValue:null,description:"",name:"aria-dropeffect",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"none"'},{value:'"copy"'},{value:'"move"'},{value:'"execute"'},{value:'"popup"'}]}},"aria-errormessage":{defaultValue:null,description:"",name:"aria-errormessage",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"",name:"aria-expanded",required:!1,type:{name:"Booleanish"}},"aria-flowto":{defaultValue:null,description:"",name:"aria-flowto",required:!1,type:{name:"string"}},"aria-grabbed":{defaultValue:null,description:"",name:"aria-grabbed",required:!1,type:{name:"Booleanish"}},"aria-haspopup":{defaultValue:null,description:"",name:"aria-haspopup",required:!1,type:{name:'boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree"'}},"aria-hidden":{defaultValue:null,description:"",name:"aria-hidden",required:!1,type:{name:"Booleanish"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false" | "grammar" | "spelling"'}},"aria-keyshortcuts":{defaultValue:null,description:"",name:"aria-keyshortcuts",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-level":{defaultValue:null,description:"",name:"aria-level",required:!1,type:{name:"number"}},"aria-live":{defaultValue:null,description:"",name:"aria-live",required:!1,type:{name:"enum",value:[{value:'"off"'},{value:'"assertive"'},{value:'"polite"'}]}},"aria-modal":{defaultValue:null,description:"",name:"aria-modal",required:!1,type:{name:"Booleanish"}},"aria-multiline":{defaultValue:null,description:"",name:"aria-multiline",required:!1,type:{name:"Booleanish"}},"aria-multiselectable":{defaultValue:null,description:"",name:"aria-multiselectable",required:!1,type:{name:"Booleanish"}},"aria-orientation":{defaultValue:null,description:"",name:"aria-orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},"aria-owns":{defaultValue:null,description:"",name:"aria-owns",required:!1,type:{name:"string"}},"aria-placeholder":{defaultValue:null,description:"",name:"aria-placeholder",required:!1,type:{name:"string"}},"aria-posinset":{defaultValue:null,description:"",name:"aria-posinset",required:!1,type:{name:"number"}},"aria-pressed":{defaultValue:null,description:"",name:"aria-pressed",required:!1,type:{name:'boolean | "true" | "false" | "mixed"'}},"aria-readonly":{defaultValue:null,description:"",name:"aria-readonly",required:!1,type:{name:"Booleanish"}},"aria-relevant":{defaultValue:null,description:"",name:"aria-relevant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"all"'},{value:'"additions"'},{value:'"additions removals"'},{value:'"additions text"'},{value:'"removals"'},{value:'"removals additions"'},{value:'"removals text"'},{value:'"text additions"'},{value:'"text removals"'}]}},"aria-required":{defaultValue:null,description:"",name:"aria-required",required:!1,type:{name:"Booleanish"}},"aria-roledescription":{defaultValue:null,description:"",name:"aria-roledescription",required:!1,type:{name:"string"}},"aria-rowcount":{defaultValue:null,description:"",name:"aria-rowcount",required:!1,type:{name:"number"}},"aria-rowindex":{defaultValue:null,description:"",name:"aria-rowindex",required:!1,type:{name:"number"}},"aria-rowindextext":{defaultValue:null,description:"",name:"aria-rowindextext",required:!1,type:{name:"string"}},"aria-rowspan":{defaultValue:null,description:"",name:"aria-rowspan",required:!1,type:{name:"number"}},"aria-selected":{defaultValue:null,description:"",name:"aria-selected",required:!1,type:{name:"Booleanish"}},"aria-setsize":{defaultValue:null,description:"",name:"aria-setsize",required:!1,type:{name:"number"}},"aria-sort":{defaultValue:null,description:"",name:"aria-sort",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"ascending"'},{value:'"descending"'},{value:'"other"'}]}},"aria-valuemax":{defaultValue:null,description:"",name:"aria-valuemax",required:!1,type:{name:"number"}},"aria-valuemin":{defaultValue:null,description:"",name:"aria-valuemin",required:!1,type:{name:"number"}},"aria-valuenow":{defaultValue:null,description:"",name:"aria-valuenow",required:!1,type:{name:"number"}},"aria-valuetext":{defaultValue:null,description:"",name:"aria-valuetext",required:!1,type:{name:"string"}},dangerouslySetInnerHTML:{defaultValue:null,description:"",name:"dangerouslySetInnerHTML",required:!1,type:{name:"{ __html: string | TrustedHTML; }"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<HTMLDivElement>"}},onCopyCapture:{defaultValue:null,description:"",name:"onCopyCapture",required:!1,type:{name:"ClipboardEventHandler<HTMLDivElement>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<HTMLDivElement>"}},onCutCapture:{defaultValue:null,description:"",name:"onCutCapture",required:!1,type:{name:"ClipboardEventHandler<HTMLDivElement>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<HTMLDivElement>"}},onPasteCapture:{defaultValue:null,description:"",name:"onPasteCapture",required:!1,type:{name:"ClipboardEventHandler<HTMLDivElement>"}},onCompositionEnd:{defaultValue:null,description:"",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<HTMLDivElement>"}},onCompositionEndCapture:{defaultValue:null,description:"",name:"onCompositionEndCapture",required:!1,type:{name:"CompositionEventHandler<HTMLDivElement>"}},onCompositionStart:{defaultValue:null,description:"",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<HTMLDivElement>"}},onCompositionStartCapture:{defaultValue:null,description:"",name:"onCompositionStartCapture",required:!1,type:{name:"CompositionEventHandler<HTMLDivElement>"}},onCompositionUpdate:{defaultValue:null,description:"",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<HTMLDivElement>"}},onCompositionUpdateCapture:{defaultValue:null,description:"",name:"onCompositionUpdateCapture",required:!1,type:{name:"CompositionEventHandler<HTMLDivElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}},onFocusCapture:{defaultValue:null,description:"",name:"onFocusCapture",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}},onBlurCapture:{defaultValue:null,description:"",name:"onBlurCapture",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onChangeCapture:{defaultValue:null,description:"",name:"onChangeCapture",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onBeforeInput:{defaultValue:null,description:"",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onBeforeInputCapture:{defaultValue:null,description:"",name:"onBeforeInputCapture",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onInputCapture:{defaultValue:null,description:"",name:"onInputCapture",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onResetCapture:{defaultValue:null,description:"",name:"onResetCapture",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onSubmitCapture:{defaultValue:null,description:"",name:"onSubmitCapture",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onInvalidCapture:{defaultValue:null,description:"",name:"onInvalidCapture",required:!1,type:{name:"FormEventHandler<HTMLDivElement>"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onLoadCapture:{defaultValue:null,description:"",name:"onLoadCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onErrorCapture:{defaultValue:null,description:"",name:"onErrorCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onKeyDownCapture:{defaultValue:null,description:"",name:"onKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onKeyPressCapture:{defaultValue:null,description:"",name:"onKeyPressCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onKeyUpCapture:{defaultValue:null,description:"",name:"onKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onAbort:{defaultValue:null,description:"",name:"onAbort",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onAbortCapture:{defaultValue:null,description:"",name:"onAbortCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onCanPlay:{defaultValue:null,description:"",name:"onCanPlay",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onCanPlayCapture:{defaultValue:null,description:"",name:"onCanPlayCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onCanPlayThrough:{defaultValue:null,description:"",name:"onCanPlayThrough",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onCanPlayThroughCapture:{defaultValue:null,description:"",name:"onCanPlayThroughCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onDurationChange:{defaultValue:null,description:"",name:"onDurationChange",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onDurationChangeCapture:{defaultValue:null,description:"",name:"onDurationChangeCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onEmptied:{defaultValue:null,description:"",name:"onEmptied",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onEmptiedCapture:{defaultValue:null,description:"",name:"onEmptiedCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onEncrypted:{defaultValue:null,description:"",name:"onEncrypted",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onEncryptedCapture:{defaultValue:null,description:"",name:"onEncryptedCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onEnded:{defaultValue:null,description:"",name:"onEnded",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onEndedCapture:{defaultValue:null,description:"",name:"onEndedCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onLoadedData:{defaultValue:null,description:"",name:"onLoadedData",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onLoadedDataCapture:{defaultValue:null,description:"",name:"onLoadedDataCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onLoadedMetadata:{defaultValue:null,description:"",name:"onLoadedMetadata",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onLoadedMetadataCapture:{defaultValue:null,description:"",name:"onLoadedMetadataCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onLoadStart:{defaultValue:null,description:"",name:"onLoadStart",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onLoadStartCapture:{defaultValue:null,description:"",name:"onLoadStartCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onPause:{defaultValue:null,description:"",name:"onPause",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onPauseCapture:{defaultValue:null,description:"",name:"onPauseCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onPlay:{defaultValue:null,description:"",name:"onPlay",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onPlayCapture:{defaultValue:null,description:"",name:"onPlayCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onPlaying:{defaultValue:null,description:"",name:"onPlaying",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onPlayingCapture:{defaultValue:null,description:"",name:"onPlayingCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onProgress:{defaultValue:null,description:"",name:"onProgress",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onProgressCapture:{defaultValue:null,description:"",name:"onProgressCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onRateChange:{defaultValue:null,description:"",name:"onRateChange",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onRateChangeCapture:{defaultValue:null,description:"",name:"onRateChangeCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onResizeCapture:{defaultValue:null,description:"",name:"onResizeCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onSeeked:{defaultValue:null,description:"",name:"onSeeked",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onSeekedCapture:{defaultValue:null,description:"",name:"onSeekedCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onSeeking:{defaultValue:null,description:"",name:"onSeeking",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onSeekingCapture:{defaultValue:null,description:"",name:"onSeekingCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onStalled:{defaultValue:null,description:"",name:"onStalled",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onStalledCapture:{defaultValue:null,description:"",name:"onStalledCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onSuspend:{defaultValue:null,description:"",name:"onSuspend",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onSuspendCapture:{defaultValue:null,description:"",name:"onSuspendCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onTimeUpdate:{defaultValue:null,description:"",name:"onTimeUpdate",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onTimeUpdateCapture:{defaultValue:null,description:"",name:"onTimeUpdateCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onVolumeChange:{defaultValue:null,description:"",name:"onVolumeChange",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onVolumeChangeCapture:{defaultValue:null,description:"",name:"onVolumeChangeCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onWaiting:{defaultValue:null,description:"",name:"onWaiting",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onWaitingCapture:{defaultValue:null,description:"",name:"onWaitingCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onAuxClick:{defaultValue:null,description:"",name:"onAuxClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onAuxClickCapture:{defaultValue:null,description:"",name:"onAuxClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onClickCapture:{defaultValue:null,description:"",name:"onClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenuCapture:{defaultValue:null,description:"",name:"onContextMenuCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClickCapture:{defaultValue:null,description:"",name:"onDoubleClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragCapture:{defaultValue:null,description:"",name:"onDragCapture",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragEndCapture:{defaultValue:null,description:"",name:"onDragEndCapture",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragEnterCapture:{defaultValue:null,description:"",name:"onDragEnterCapture",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragExit:{defaultValue:null,description:"",name:"onDragExit",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragExitCapture:{defaultValue:null,description:"",name:"onDragExitCapture",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragLeaveCapture:{defaultValue:null,description:"",name:"onDragLeaveCapture",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragOverCapture:{defaultValue:null,description:"",name:"onDragOverCapture",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDragStartCapture:{defaultValue:null,description:"",name:"onDragStartCapture",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDropCapture:{defaultValue:null,description:"",name:"onDropCapture",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDownCapture:{defaultValue:null,description:"",name:"onMouseDownCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMoveCapture:{defaultValue:null,description:"",name:"onMouseMoveCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOutCapture:{defaultValue:null,description:"",name:"onMouseOutCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOverCapture:{defaultValue:null,description:"",name:"onMouseOverCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUpCapture:{defaultValue:null,description:"",name:"onMouseUpCapture",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onSelectCapture:{defaultValue:null,description:"",name:"onSelectCapture",required:!1,type:{name:"ReactEventHandler<HTMLDivElement>"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchCancelCapture:{defaultValue:null,description:"",name:"onTouchCancelCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchEndCapture:{defaultValue:null,description:"",name:"onTouchEndCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchMoveCapture:{defaultValue:null,description:"",name:"onTouchMoveCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onTouchStartCapture:{defaultValue:null,description:"",name:"onTouchStartCapture",required:!1,type:{name:"TouchEventHandler<HTMLDivElement>"}},onPointerDown:{defaultValue:null,description:"",name:"onPointerDown",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerDownCapture:{defaultValue:null,description:"",name:"onPointerDownCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMove:{defaultValue:null,description:"",name:"onPointerMove",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerMoveCapture:{defaultValue:null,description:"",name:"onPointerMoveCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUp:{defaultValue:null,description:"",name:"onPointerUp",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerUpCapture:{defaultValue:null,description:"",name:"onPointerUpCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancel:{defaultValue:null,description:"",name:"onPointerCancel",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerCancelCapture:{defaultValue:null,description:"",name:"onPointerCancelCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerEnter:{defaultValue:null,description:"",name:"onPointerEnter",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerEnterCapture:{defaultValue:null,description:"",name:"onPointerEnterCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerLeave:{defaultValue:null,description:"",name:"onPointerLeave",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerLeaveCapture:{defaultValue:null,description:"",name:"onPointerLeaveCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOver:{defaultValue:null,description:"",name:"onPointerOver",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOverCapture:{defaultValue:null,description:"",name:"onPointerOverCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOut:{defaultValue:null,description:"",name:"onPointerOut",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onPointerOutCapture:{defaultValue:null,description:"",name:"onPointerOutCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCapture:{defaultValue:null,description:"",name:"onGotPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onGotPointerCaptureCapture:{defaultValue:null,description:"",name:"onGotPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCapture:{defaultValue:null,description:"",name:"onLostPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onLostPointerCaptureCapture:{defaultValue:null,description:"",name:"onLostPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLDivElement>"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onScrollCapture:{defaultValue:null,description:"",name:"onScrollCapture",required:!1,type:{name:"UIEventHandler<HTMLDivElement>"}},onWheel:{defaultValue:null,description:"",name:"onWheel",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onWheelCapture:{defaultValue:null,description:"",name:"onWheelCapture",required:!1,type:{name:"WheelEventHandler<HTMLDivElement>"}},onAnimationStartCapture:{defaultValue:null,description:"",name:"onAnimationStartCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEnd:{defaultValue:null,description:"",name:"onAnimationEnd",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationEndCapture:{defaultValue:null,description:"",name:"onAnimationEndCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIteration:{defaultValue:null,description:"",name:"onAnimationIteration",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onAnimationIterationCapture:{defaultValue:null,description:"",name:"onAnimationIterationCapture",required:!1,type:{name:"AnimationEventHandler<HTMLDivElement>"}},onTransitionEnd:{defaultValue:null,description:"",name:"onTransitionEnd",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},onTransitionEndCapture:{defaultValue:null,description:"",name:"onTransitionEndCapture",required:!1,type:{name:"TransitionEventHandler<HTMLDivElement>"}},open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"EDrawerPositions.LEFT"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},variant:{defaultValue:{value:"EDrawerVariants.TEMPORARY"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"persistent"'},{value:'"temporary"'},{value:'"permanent"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const be={title:"Navigation/Drawer",component:M,zeplinLink:"",parameters:{controls:{sort:"requiredFirst"}},argTypes:{children:ne,className:ae,header:{control:{type:"other"},description:"The content of the drawer header.",table:{category:p.APPEARANCE,type:{summary:"node"}}},onClose:{control:{type:"function"},description:"Callback fired when the component requests to be closed.",table:{category:p.EVENTS,type:{summary:"function"}}},open:{control:{type:"boolean"},description:"If true, the drawer is open.",table:{category:p.STATE,type:{summary:"boolean"}}},position:{control:{type:"radio",options:Object.values(i)},description:"The position of the temporary drawer.",table:{category:p.APPEARANCE,type:{summary:"EDrawerPositions",detail:Object.values(i).join(" | ")},defaultValue:{summary:i.LEFT}}},variant:{control:{type:"radio",options:Object.values(r)},description:"The variant of the drawer.",table:{category:p.APPEARANCE,type:{summary:"EDrawerVariants",detail:Object.values(r).join(" | ")},defaultValue:{summary:r.TEMPORARY}}}}},y=n=>{const a=n.variant===r.PERMANENT,[t,o]=F.useState(a),E=()=>e.jsxs(q.div,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"28px 18px",height:"calc(40px + 28px + 28px)",width:"100%"},initial:{opacity:0},animate:{opacity:1,transition:{delay:.2,duration:.2}},exit:{opacity:0,transition:{duration:.2,delay:0}},children:[e.jsx("div",{style:{color:"#BCBCBC",fontFamily:"Inter",fontSize:"28px",fontWeight:600,lineHeight:1.4},children:"Header"}),!a&&e.jsx(W,{onClick:()=>o(!t),style:{color:"#BCBCBC",cursor:"pointer"}})]});return e.jsxs("div",{style:{height:"100vh",display:"flex",alignItems:a?"none":"center",justifyContent:a?"none":"center"},children:[e.jsx(M,{...n,header:E(),open:t,onClose:()=>o(!1),children:e.jsx(K,{children:Array.from({length:5},(d,u)=>e.jsx(Y,{start:e.jsx(U,{}),color:X.PRIMARY,onClick:G.noop,style:{backgroundColor:"transparent"},initial:{opacity:0},animate:{opacity:1,transition:{delay:.2,duration:.2}},exit:{opacity:0,transition:{duration:.2,delay:0}},children:e.jsxs("span",{style:{color:"#BCBCBC"},children:["Item ",u+1]})},u))})}),!a&&e.jsx(z,{onClick:()=>o(!t),children:"Open"})]})},l=y.bind({});l.args={variant:r.TEMPORARY,position:i.LEFT};const m=y.bind({});m.args={...l.args,position:i.BOTTOM};const c=y.bind({});c.args={...l.args,position:i.RIGHT};const f=y.bind({});f.args={...l.args,position:i.TOP};const v=y.bind({});v.args={variant:r.PERMANENT};const H=n=>{const[a,t]=F.useState(!1),o=()=>e.jsxs(q.div,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"28px 18px",height:"calc(40px + 28px + 28px)",width:"200px"},initial:{opacity:0},animate:{opacity:1,transition:{delay:.2,duration:.2}},exit:{opacity:0,transition:{duration:.2,delay:0}},children:[e.jsx("div",{style:{color:"#BCBCBC",fontFamily:"Inter",fontSize:"28px",fontWeight:600,lineHeight:1.4},children:"Header"}),e.jsx(W,{onClick:()=>t(!a),style:{color:"#BCBCBC",cursor:"pointer"}})]});return e.jsxs("div",{style:{height:"100vh",display:"flex"},children:[e.jsx(M,{...n,variant:r.PERSISTENT,header:o(),open:a,onClose:()=>t(!1),initial:{width:0},animate:{width:240,transition:{delay:0,duration:.2}},exit:{width:0,transition:{duration:.2,delay:.2}},children:e.jsx(K,{children:Array.from({length:5},(E,d)=>e.jsx(Y,{start:e.jsx(U,{}),color:X.PRIMARY,onClick:G.noop,style:{backgroundColor:"transparent"},initial:{opacity:0},animate:{opacity:1,transition:{delay:.2,duration:.2}},exit:{opacity:0,transition:{duration:.2,delay:0}},children:e.jsxs("span",{style:{color:"#BCBCBC"},children:["Item ",d+1]})},d))})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",padding:"0 20px 0 20px",gap:"20px"},children:[e.jsx(z,{onClick:()=>t(!a),children:"Open"}),e.jsx("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie lacus nulla, ac vestibulum massa venenatis nec. Sed a libero ut augue convallis vulputate vel et sem. Nullam elementum erat quis velit mattis, ut consectetur turpis iaculis. Nulla pellentesque tempor turpis at mattis. Vivamus eget mattis justo. Nulla euismod, lorem vel efficitur hendrerit, tortor massa vestibulum nisl, sit amet aliquet massa ligula a ipsum. Curabitur maximus est vel ultrices aliquam. Sed elementum interdum nulla eu commodo. Vestibulum euismod, nunc non malesuada vehicula, nisl mi euismod mi, et malesuada diam lorem id lorem. Vivamus velit massa, efficitur viverra ipsum eu, efficitur porta ante. Integer in purus mattis, iaculis ipsum vel, iaculis lorem. Mauris vel ultricies eros, eget consectetur dui. Etiam at dui efficitur, tempor velit id, sagittis lacus. Etiam placerat gravida magna nec fermentum. Sed venenatis facilisis ante id ullamcorper. Pellentesque magna nulla, semper ac ullamcorper scelerisque, ultrices nec purus. Nulla feugiat maximus urna, vel vehicula ligula mollis nec. Donec ullamcorper lacus dui, molestie volutpat arcu posuere at. Duis convallis ex ac aliquet fringilla. Mauris dignissim in lectus eu rhoncus."})]})]})};var D,h,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const isPermanent = args.variant === EDrawerVariants.PERMANENT;
  const [open, setOpen] = useState(isPermanent);
  const renderHeader = () => <motion.div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 18px",
    height: "calc(40px + 28px + 28px)",
    width: "100%"
  }} initial={{
    opacity: 0
  }} animate={{
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2
    }
  }} exit={{
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0
    }
  }}>
      <div style={{
      color: "#BCBCBC",
      fontFamily: "Inter",
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.4
    }}>
        Header
      </div>
      {!isPermanent && <GoX onClick={() => setOpen(!open)} style={{
      color: "#BCBCBC",
      cursor: "pointer"
    }} />}
    </motion.div>;
  return <div style={{
    height: "100vh",
    display: "flex",
    alignItems: isPermanent ? "none" : "center",
    justifyContent: isPermanent ? "none" : "center"
  }}>
      <Drawer {...args} header={renderHeader()} open={open} onClose={() => setOpen(false)}>
        <List>
          {Array.from({
          length: 5
        }, (_, i) => <ListItem start={<GoStar />} color={EListItemColors.PRIMARY} onClick={noop} key={i} style={{
          backgroundColor: "transparent"
        }} initial={{
          opacity: 0
        }} animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.2
          }
        }} exit={{
          opacity: 0,
          transition: {
            duration: 0.2,
            delay: 0
          }
        }}>
              <span style={{
            color: "#BCBCBC"
          }}>Item {i + 1}</span>
            </ListItem>)}
        </List>
      </Drawer>
      {!isPermanent && <Button onClick={() => setOpen(!open)}>Open</Button>}
    </div>;
}`,...(T=(h=l.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var L,x,P;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const isPermanent = args.variant === EDrawerVariants.PERMANENT;
  const [open, setOpen] = useState(isPermanent);
  const renderHeader = () => <motion.div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 18px",
    height: "calc(40px + 28px + 28px)",
    width: "100%"
  }} initial={{
    opacity: 0
  }} animate={{
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2
    }
  }} exit={{
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0
    }
  }}>
      <div style={{
      color: "#BCBCBC",
      fontFamily: "Inter",
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.4
    }}>
        Header
      </div>
      {!isPermanent && <GoX onClick={() => setOpen(!open)} style={{
      color: "#BCBCBC",
      cursor: "pointer"
    }} />}
    </motion.div>;
  return <div style={{
    height: "100vh",
    display: "flex",
    alignItems: isPermanent ? "none" : "center",
    justifyContent: isPermanent ? "none" : "center"
  }}>
      <Drawer {...args} header={renderHeader()} open={open} onClose={() => setOpen(false)}>
        <List>
          {Array.from({
          length: 5
        }, (_, i) => <ListItem start={<GoStar />} color={EListItemColors.PRIMARY} onClick={noop} key={i} style={{
          backgroundColor: "transparent"
        }} initial={{
          opacity: 0
        }} animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.2
          }
        }} exit={{
          opacity: 0,
          transition: {
            duration: 0.2,
            delay: 0
          }
        }}>
              <span style={{
            color: "#BCBCBC"
          }}>Item {i + 1}</span>
            </ListItem>)}
        </List>
      </Drawer>
      {!isPermanent && <Button onClick={() => setOpen(!open)}>Open</Button>}
    </div>;
}`,...(P=(x=m.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var b,B,R;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const isPermanent = args.variant === EDrawerVariants.PERMANENT;
  const [open, setOpen] = useState(isPermanent);
  const renderHeader = () => <motion.div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 18px",
    height: "calc(40px + 28px + 28px)",
    width: "100%"
  }} initial={{
    opacity: 0
  }} animate={{
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2
    }
  }} exit={{
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0
    }
  }}>
      <div style={{
      color: "#BCBCBC",
      fontFamily: "Inter",
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.4
    }}>
        Header
      </div>
      {!isPermanent && <GoX onClick={() => setOpen(!open)} style={{
      color: "#BCBCBC",
      cursor: "pointer"
    }} />}
    </motion.div>;
  return <div style={{
    height: "100vh",
    display: "flex",
    alignItems: isPermanent ? "none" : "center",
    justifyContent: isPermanent ? "none" : "center"
  }}>
      <Drawer {...args} header={renderHeader()} open={open} onClose={() => setOpen(false)}>
        <List>
          {Array.from({
          length: 5
        }, (_, i) => <ListItem start={<GoStar />} color={EListItemColors.PRIMARY} onClick={noop} key={i} style={{
          backgroundColor: "transparent"
        }} initial={{
          opacity: 0
        }} animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.2
          }
        }} exit={{
          opacity: 0,
          transition: {
            duration: 0.2,
            delay: 0
          }
        }}>
              <span style={{
            color: "#BCBCBC"
          }}>Item {i + 1}</span>
            </ListItem>)}
        </List>
      </Drawer>
      {!isPermanent && <Button onClick={() => setOpen(!open)}>Open</Button>}
    </div>;
}`,...(R=(B=c.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var S,I,w;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const isPermanent = args.variant === EDrawerVariants.PERMANENT;
  const [open, setOpen] = useState(isPermanent);
  const renderHeader = () => <motion.div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 18px",
    height: "calc(40px + 28px + 28px)",
    width: "100%"
  }} initial={{
    opacity: 0
  }} animate={{
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2
    }
  }} exit={{
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0
    }
  }}>
      <div style={{
      color: "#BCBCBC",
      fontFamily: "Inter",
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.4
    }}>
        Header
      </div>
      {!isPermanent && <GoX onClick={() => setOpen(!open)} style={{
      color: "#BCBCBC",
      cursor: "pointer"
    }} />}
    </motion.div>;
  return <div style={{
    height: "100vh",
    display: "flex",
    alignItems: isPermanent ? "none" : "center",
    justifyContent: isPermanent ? "none" : "center"
  }}>
      <Drawer {...args} header={renderHeader()} open={open} onClose={() => setOpen(false)}>
        <List>
          {Array.from({
          length: 5
        }, (_, i) => <ListItem start={<GoStar />} color={EListItemColors.PRIMARY} onClick={noop} key={i} style={{
          backgroundColor: "transparent"
        }} initial={{
          opacity: 0
        }} animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.2
          }
        }} exit={{
          opacity: 0,
          transition: {
            duration: 0.2,
            delay: 0
          }
        }}>
              <span style={{
            color: "#BCBCBC"
          }}>Item {i + 1}</span>
            </ListItem>)}
        </List>
      </Drawer>
      {!isPermanent && <Button onClick={() => setOpen(!open)}>Open</Button>}
    </div>;
}`,...(w=(I=f.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var k,O,A;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const isPermanent = args.variant === EDrawerVariants.PERMANENT;
  const [open, setOpen] = useState(isPermanent);
  const renderHeader = () => <motion.div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 18px",
    height: "calc(40px + 28px + 28px)",
    width: "100%"
  }} initial={{
    opacity: 0
  }} animate={{
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2
    }
  }} exit={{
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0
    }
  }}>
      <div style={{
      color: "#BCBCBC",
      fontFamily: "Inter",
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.4
    }}>
        Header
      </div>
      {!isPermanent && <GoX onClick={() => setOpen(!open)} style={{
      color: "#BCBCBC",
      cursor: "pointer"
    }} />}
    </motion.div>;
  return <div style={{
    height: "100vh",
    display: "flex",
    alignItems: isPermanent ? "none" : "center",
    justifyContent: isPermanent ? "none" : "center"
  }}>
      <Drawer {...args} header={renderHeader()} open={open} onClose={() => setOpen(false)}>
        <List>
          {Array.from({
          length: 5
        }, (_, i) => <ListItem start={<GoStar />} color={EListItemColors.PRIMARY} onClick={noop} key={i} style={{
          backgroundColor: "transparent"
        }} initial={{
          opacity: 0
        }} animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.2
          }
        }} exit={{
          opacity: 0,
          transition: {
            duration: 0.2,
            delay: 0
          }
        }}>
              <span style={{
            color: "#BCBCBC"
          }}>Item {i + 1}</span>
            </ListItem>)}
        </List>
      </Drawer>
      {!isPermanent && <Button onClick={() => setOpen(!open)}>Open</Button>}
    </div>;
}`,...(A=(O=v.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var j,_,N;H.parameters={...H.parameters,docs:{...(j=H.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const renderHeader = () => <motion.div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 18px",
    height: "calc(40px + 28px + 28px)",
    width: "200px"
  }} initial={{
    opacity: 0
  }} animate={{
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2
    }
  }} exit={{
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0
    }
  }}>
      <div style={{
      color: "#BCBCBC",
      fontFamily: "Inter",
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.4
    }}>
        Header
      </div>
      <GoX onClick={() => setOpen(!open)} style={{
      color: "#BCBCBC",
      cursor: "pointer"
    }} />
    </motion.div>;
  return <div style={{
    height: "100vh",
    display: "flex"
  }}>
      <Drawer {...args} variant={EDrawerVariants.PERSISTENT} header={renderHeader()} open={open} onClose={() => setOpen(false)} initial={{
      width: 0
    }} animate={{
      width: 240,
      transition: {
        delay: 0,
        duration: 0.2
      }
    }} exit={{
      width: 0,
      transition: {
        duration: 0.2,
        delay: 0.2
      }
    }}>
        <List>
          {Array.from({
          length: 5
        }, (_, i) => <ListItem start={<GoStar />} color={EListItemColors.PRIMARY} onClick={noop} key={i} style={{
          backgroundColor: "transparent"
        }} initial={{
          opacity: 0
        }} animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.2
          }
        }} exit={{
          opacity: 0,
          transition: {
            duration: 0.2,
            delay: 0
          }
        }}>
              <span style={{
            color: "#BCBCBC"
          }}>Item {i + 1}</span>
            </ListItem>)}
        </List>
      </Drawer>
      <div style={{
      display: "flex",
      flexDirection: "column",
      padding: "0 20px 0 20px",
      gap: "20px"
    }}>
        <Button onClick={() => setOpen(!open)}>Open</Button>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          molestie lacus nulla, ac vestibulum massa venenatis nec. Sed a libero
          ut augue convallis vulputate vel et sem. Nullam elementum erat quis
          velit mattis, ut consectetur turpis iaculis. Nulla pellentesque tempor
          turpis at mattis. Vivamus eget mattis justo. Nulla euismod, lorem vel
          efficitur hendrerit, tortor massa vestibulum nisl, sit amet aliquet
          massa ligula a ipsum. Curabitur maximus est vel ultrices aliquam. Sed
          elementum interdum nulla eu commodo. Vestibulum euismod, nunc non
          malesuada vehicula, nisl mi euismod mi, et malesuada diam lorem id
          lorem. Vivamus velit massa, efficitur viverra ipsum eu, efficitur
          porta ante. Integer in purus mattis, iaculis ipsum vel, iaculis lorem.
          Mauris vel ultricies eros, eget consectetur dui. Etiam at dui
          efficitur, tempor velit id, sagittis lacus. Etiam placerat gravida
          magna nec fermentum. Sed venenatis facilisis ante id ullamcorper.
          Pellentesque magna nulla, semper ac ullamcorper scelerisque, ultrices
          nec purus. Nulla feugiat maximus urna, vel vehicula ligula mollis nec.
          Donec ullamcorper lacus dui, molestie volutpat arcu posuere at. Duis
          convallis ex ac aliquet fringilla. Mauris dignissim in lectus eu
          rhoncus.
        </div>
      </div>
    </div>;
}`,...(N=(_=H.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Be=["TemporaryLeft","TemporaryBottom","TemporaryRight","TemporaryTop","Permanent","Persistent"];export{v as Permanent,H as Persistent,m as TemporaryBottom,l as TemporaryLeft,c as TemporaryRight,f as TemporaryTop,Be as __namedExportsOrder,be as default};
//# sourceMappingURL=index.stories-ef4aa90a.js.map
