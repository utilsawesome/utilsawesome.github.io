import{d as c,r as d,o as i,g as _,i as e,h as a}from"./vendor-02ccb62e.js";const u={class:"grid"},m={class:"col-12 xl:col-6"},p={class:"card"},v=e("h5",null,"Original text",-1),h={class:"col-12 xl:col-6"},x={class:"card"},g=e("h5",null,"Changed text",-1),f={class:"col-12 xl:col-12"},V={class:"card"},C={__name:"TextComparator",setup(T){const t=c(""),l=c("");return(w,o)=>{const n=d("Textarea"),r=d("Diff");return i(),_("div",u,[e("div",m,[e("div",p,[v,a(n,{style:{width:"100%"},modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),rows:"20",cols:"100"},null,8,["modelValue"])])]),e("div",h,[e("div",x,[g,a(n,{style:{width:"100%"},modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=s=>l.value=s),rows:"20",cols:"100"},null,8,["modelValue"])])]),e("div",f,[e("div",V,[a(r,{mode:"split",theme:"light",language:"plaintext",prev:t.value,current:l.value},null,8,["prev","current"])])])])}}};export{C as default};
