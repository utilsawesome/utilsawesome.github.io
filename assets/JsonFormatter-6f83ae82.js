import{V as g}from"./vue-json-pretty-6f3742ac.js";import{r as e,A as y,w as i,b as d,o as x,d as V,h as l,e as c,u as N}from"./@vue-b45701d8.js";import"./nearley-7e7156f8.js";import"./vue-a026957c.js";const B={class:"grid"},L={class:"col-12 xl:col-12"},T={class:"card"},k={class:"col-12 xl:col-12 flex justify-content-center flex-wrap gap-3"},J={class:"col-12 xl:col-12"},O={class:"card"},A={__name:"JsonFormatter",setup(j){const o=e(""),t=y({data:{}}),u=e(2),_=e(!0),h=e(!0),p=e(!0),m=e(!1),v=e("dblclick");i(o,(n,s)=>{try{t.data=JSON.parse(n)}catch(a){console.log(a)}});const b=()=>{o.value=JSON.stringify(t.data,null,4)},f=()=>{o.value=JSON.stringify(t.data)};return i(t.data,(n,s)=>{try{console.log("New Value",n),console.log("Old Value",s)}catch(a){console.log(a)}}),(n,s)=>{const a=d("Textarea"),r=d("Button");return x(),V("div",B,[l("div",L,[l("div",T,[c(a,{style:{width:"100%"},modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=w=>o.value=w),rows:"10",cols:"100"},null,8,["modelValue"])])]),l("div",k,[c(r,{onClick:b,label:"Beautify",severity:"help"}),c(r,{onClick:f,label:"Minify",severity:"help"})]),l("div",J,[l("div",O,[c(N(g),{data:t.data,deep:u.value,showDoubleQuotes:_.value,showLine:h.value,showLineNumber:p.value,editable:m.value,editableTrigger:v.value},null,8,["data","deep","showDoubleQuotes","showLine","showLineNumber","editable","editableTrigger"])])])])}}};export{A as default};
