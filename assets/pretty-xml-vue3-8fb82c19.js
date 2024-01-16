import{r as C,w,o as e,c as k,a as r,b as A,d as l,e as f,u as F,F as p,f as y,t as v,g as T,h as n,i as S,n as D}from"./@vue-b45701d8.js";const P={class:"element"},X=n("span",{class:"element__bracket"},"</",-1),j={class:"element__name"},z=n("span",{class:"element__bracket"},">",-1),E={__name:"CloseTag",props:{name:{type:String}},setup(t){return(s,o)=>(e(),l("div",P,[X,n("span",j,v(t.name),1),z]))}},L={class:"attribute"},M={class:"attribute__name"},R={class:"attribute__value"},$={__name:"AttributesComponent",props:{value:{type:String},name:{type:String}},setup(t){return(s,o)=>(e(),l("div",L,[n("span",M,v(t.name)+"= ",1),n("span",R,' "'+v(t.value)+'" ',1)]))}},q={class:"element"},G=n("span",{class:"element__bracket"},"<",-1),H={class:"element__attributes"},I={key:0,class:"element__bracket"},J=n("span",{class:"element__bracket--close"},">",-1),K={__name:"OpenTag",props:{attribures:{type:Array},isSelfClosing:{type:Boolean,default:!1},name:{type:String}},emits:["openClose"],setup(t){return(s,o)=>(e(),l("div",q,[G,n("span",{class:"element__name",onClick:o[0]||(o[0]=a=>s.$emit("openClose"))},v(t.name),1),n("div",H,[(e(!0),l(p,null,y(t.attribures,(a,u)=>(e(),k($,{name:a.name,value:a.value,key:"attr"+u},null,8,["name","value"]))),128))]),t.isSelfClosing?(e(),l("span",I,"/")):T("",!0),J]))}},Q={key:0,class:"tag__content"},U={class:"tag__child"},W={class:"remark__content"},Y={key:1,class:"tag__content"},Z={__name:"XmlTag",props:{node:Element,isShort:Boolean},setup(t){const s=t;console.log(s.node);const o=r(()=>s.node.nodeName),a=r(()=>Array.from(s.node.childNodes)),u=r(()=>a.value&&a.value.filter(c=>c.nodeType===1)),i=r(()=>a.value&&a.value.filter(c=>c.nodeType===3)),g=r(()=>a.value&&a.value.filter(c=>c.nodeType===4)),d=r(()=>a.value&&a.value.filter(c=>c.nodeType===8)),N=r(()=>s.node.attributes&&Array.from(s.node.attributes)||[]),h=C(!0),x=r(()=>!u.value.length&&i.value.length),V=!u.value.length&&!i.value.length&&!g.value.length&&!d.value.length,B=r(()=>s.isShort&&x.value);return(c,b)=>{const O=A("XmlTag",!0);return e(),l("div",{class:D(["tag",{"tag--short":B.value}])},[f(K,{name:o.value,"is-self-closing":F(V),attribures:N.value,onOpenClose:b[0]||(b[0]=m=>h.value=!h.value)},null,8,["name","is-self-closing","attribures"]),h.value?(e(),l(p,{key:0},[(e(!0),l(p,null,y(i.value,(m,_)=>(e(),l(p,{key:"content"+_},[m.nodeValue?(e(),l("div",Q,v(m.nodeValue),1)):T("",!0)],64))),128)),n("div",U,[(e(!0),l(p,null,y(u.value,(m,_)=>(e(),k(O,{key:`e${_}`,node:m,"is-short":t.isShort},null,8,["node","is-short"]))),128)),(e(!0),l(p,null,y(d.value,(m,_)=>(e(),l("div",{class:"remark",key:"rem"+_},[S(" <!-- "),n("pre",W,v(m.textContent),1),S(" --> ")]))),128))])],64)):(e(),l("div",Y,"...")),f(E,{name:o.value},null,8,["name"])],2)}}},ae={__name:"PrettyXml",props:{xml:{type:String},options:{type:Object}},setup(t){const s=t,o=new DOMParser,a=C(),u=i=>{const g=o.parseFromString(i,"application/xml").childNodes[0];a.value=g};return w(()=>s.xml,i=>{u(i)}),u(s.xml),(i,g)=>{var d;return e(),k(Z,{node:a.value,"is-short":(d=t.options)==null?void 0:d.shortRecord},null,8,["node","is-short"])}}};export{ae as t};
