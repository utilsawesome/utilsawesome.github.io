import{d as m,r as l,o as r,g as i,i as e,h as n,q as p}from"./vendor-02ccb62e.js";const h={class:"grid"},v={class:"col-12 xl:col-12"},f={class:"card"},g=e("h5",null,"Image",-1),x={class:"card flex justify-content-center"},U={key:0,class:"card flex justify-content-center"},b={class:"col-12 xl:col-12"},B={class:"card"},V=e("h5",null,"Base64",-1),I={__name:"ImageToBase64",setup(w){const o=m(""),_=async d=>{const s=d.files[0],t=new FileReader;let a=await fetch(s.objectURL).then(c=>c.blob());t.readAsDataURL(a),t.onloadend=function(){o.value=t.result}};return(d,s)=>{const t=l("FileUpload"),a=l("Image"),c=l("Textarea");return r(),i("div",h,[e("div",v,[e("div",f,[g,e("div",x,[n(t,{mode:"basic",accept:"image/*",customUpload:"",auto:!0,onUploader:_})]),o.value?(r(),i("div",U,[n(a,{src:o.value,alt:"Image",width:"500"},null,8,["src"])])):p("",!0)])]),e("div",b,[e("div",B,[V,n(c,{style:{width:"100%"},modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=u=>o.value=u),rows:"20",cols:"100"},null,8,["modelValue"])])])])}}};export{I as default};
