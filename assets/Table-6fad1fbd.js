import{bA as Z,r as m,aw as P,bB as v,bC as x,b as u,c as I,d as F,e as l,f as a,g as t,i as c,t as s,as as p,aK as ee,aH as ae}from"./index-db496ab7.js";import{P as te}from"./ProductService-c3f21ab6.js";const D="/demo/images/flag/flag_placeholder.png";class le{getCustomersSmall(){return fetch("demo/data/customers-small.json").then(i=>i.json()).then(i=>i.data)}getCustomersMedium(){return fetch("demo/data/customers-medium.json").then(i=>i.json()).then(i=>i.data)}getCustomersLarge(){return fetch("demo/data/customers-large.json").then(i=>i.json()).then(i=>i.data)}getCustomersXLarge(){return fetch("demo/data/customers-xlarge.json").then(i=>i.json()).then(i=>i.data)}getCustomers(i){const S=Object.keys(i).map(h=>encodeURIComponent(h)+"="+encodeURIComponent(i[h])).join("&");return fetch("https://www.primefaces.org//demo/data/customers?"+S).then(h=>h.json())}}const g=_=>(ee("data-v-3f35c6aa"),_=_(),ae(),_),ne={class:"grid"},oe={class:"col-12"},se={class:"card"},ie=g(()=>l("h5",null,"Filter Menu",-1)),de={class:"flex justify-content-between flex-column sm:flex-row"},re={class:"p-input-icon-left mb-2"},ue=g(()=>l("i",{class:"pi pi-search"},null,-1)),ce=["alt"],me={style:{"margin-left":"0.5em","vertical-align":"middle"},class:"image-text"},pe=["alt","src"],he={style:{"margin-left":"0.5em","vertical-align":"middle"},class:"image-text"},ve=g(()=>l("div",{class:"mb-3 text-bold"},"Agent Picker",-1)),ye={class:"p-multiselect-representative-option"},ge=["alt","src"],_e={style:{"margin-left":"0.5em","vertical-align":"middle"},class:"image-text"},fe={key:1},be={class:"flex align-items-center justify-content-between px-2"},we={class:"col-12"},xe={class:"card"},Se=g(()=>l("h5",null,"Frozen Columns",-1)),Ce={style:{"margin-left":"0.5em","vertical-align":"middle"},class:"image-text"},Ve=["alt","src"],Ue={style:{"margin-left":"0.5em","vertical-align":"middle"},class:"image-text"},Ae={class:"text-bold"},Te={class:"col-12"},Ie={class:"card"},Fe=g(()=>l("h5",null,"Row Expand",-1)),De=["src","alt"],ke={class:"p-3"},Le={class:"col-12"},Ne={class:"card"},Be=g(()=>l("h5",null,"Subheader Grouping",-1)),Re={class:"image-text ml-2"},je=["alt","src"],Me={class:"image-text font-bold ml-2"},Ee={style:{"text-align":"right"},class:"text-bold pr-6"},ze={__name:"Table",setup(_){const i=m(null),S=m(null),h=m(null),f=m(null),k=m(null),L=m(null),V=m(!1),U=m(null),C=m([]),B=m(["unqualified","qualified","new","negotiation","renewal","proposal"]),R=m([{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}]),A=new le,j=new te;P(()=>{j.getProductsWithOrdersSmall().then(d=>U.value=d),A.getCustomersLarge().then(d=>{i.value=d,k.value=!1,i.value.forEach(r=>r.date=new Date(r.date))}),A.getCustomersLarge().then(d=>S.value=d),A.getCustomersMedium().then(d=>h.value=d),L.value=!1,N()});const N=()=>{f.value={global:{value:null,matchMode:v.CONTAINS},name:{operator:x.AND,constraints:[{value:null,matchMode:v.STARTS_WITH}]},"country.name":{operator:x.AND,constraints:[{value:null,matchMode:v.STARTS_WITH}]},representative:{value:null,matchMode:v.IN},date:{operator:x.AND,constraints:[{value:null,matchMode:v.DATE_IS}]},balance:{operator:x.AND,constraints:[{value:null,matchMode:v.EQUALS}]},status:{operator:x.OR,constraints:[{value:null,matchMode:v.EQUALS}]},activity:{value:[0,50],matchMode:v.BETWEEN},verified:{value:null,matchMode:v.EQUALS}}},M=()=>{N()},E=()=>{C.value=U.value.filter(d=>d.id)},z=()=>{C.value=null},b=d=>d.toLocaleString("en-US",{style:"currency",currency:"USD"}),O=d=>d.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),H=d=>{let r=0;if(h.value)for(let y of h.value)y.representative.name===d&&r++;return r};return(d,r)=>{const y=u("Button"),T=u("InputText"),o=u("Column"),K=u("MultiSelect"),W=u("Calendar"),q=u("InputNumber"),Q=u("Dropdown"),X=u("ProgressBar"),$=u("Slider"),G=u("TriStateCheckbox"),w=u("DataTable"),J=u("ToggleButton"),Y=u("Rating");return I(),F("div",ne,[l("div",oe,[l("div",se,[ie,a(w,{value:i.value,paginator:!0,class:"p-datatable-gridlines",rows:10,dataKey:"id",rowHover:!0,filters:f.value,"onUpdate:filters":r[2]||(r[2]=e=>f.value=e),filterDisplay:"menu",loading:k.value,responsiveLayout:"scroll",globalFilterFields:["name","country.name","representative.name","balance","status"]},{header:t(()=>[l("div",de,[a(y,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined mb-2",onClick:r[0]||(r[0]=e=>M())}),l("span",re,[ue,a(T,{modelValue:f.value.global.value,"onUpdate:modelValue":r[1]||(r[1]=e=>f.value.global.value=e),placeholder:"Keyword Search",style:{width:"100%"}},null,8,["modelValue"])])])]),empty:t(()=>[c(" No customers found. ")]),loading:t(()=>[c(" Loading customers data. Please wait. ")]),default:t(()=>[a(o,{field:"name",header:"Name",style:{"min-width":"12rem"}},{body:t(({data:e})=>[c(s(e.name),1)]),filter:t(({filterModel:e})=>[a(T,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(o,{header:"Country",filterField:"country.name",style:{"min-width":"12rem"}},{body:t(({data:e})=>[l("img",{src:D,alt:e.country.name,class:p("flag flag-"+e.country.code),width:"30"},null,10,ce),l("span",me,s(e.country.name),1)]),filter:t(({filterModel:e})=>[a(T,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by country"},null,8,["modelValue","onUpdate:modelValue"])]),filterclear:t(({filterCallback:e})=>[a(y,{type:"button",icon:"pi pi-times",onClick:n=>e(),class:"p-button-secondary"},null,8,["onClick"])]),filterapply:t(({filterCallback:e})=>[a(y,{type:"button",icon:"pi pi-check",onClick:n=>e(),class:"p-button-success"},null,8,["onClick"])]),_:1}),a(o,{header:"Agent",filterField:"representative",showFilterMatchModes:!1,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:t(({data:e})=>[l("img",{alt:e.representative.name,src:"demo/images/avatar/"+e.representative.image,width:"32",style:{"vertical-align":"middle"}},null,8,pe),l("span",he,s(e.representative.name),1)]),filter:t(({filterModel:e})=>[ve,a(K,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,options:R.value,optionLabel:"name",placeholder:"Any",class:"p-column-filter"},{option:t(n=>[l("div",ye,[l("img",{alt:n.option.name,src:"demo/images/avatar/"+n.option.image,width:"32",style:{"vertical-align":"middle"}},null,8,ge),l("span",_e,s(n.option.name),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),a(o,{header:"Date",filterField:"date",dataType:"date",style:{"min-width":"10rem"}},{body:t(({data:e})=>[c(s(O(e.date)),1)]),filter:t(({filterModel:e})=>[a(W,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(o,{header:"Balance",filterField:"balance",dataType:"numeric",style:{"min-width":"10rem"}},{body:t(({data:e})=>[c(s(b(e.balance)),1)]),filter:t(({filterModel:e})=>[a(q,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(o,{field:"status",header:"Status",filterMenuStyle:{width:"14rem"},style:{"min-width":"12rem"}},{body:t(({data:e})=>[l("span",{class:p("customer-badge status-"+e.status)},s(e.status),3)]),filter:t(({filterModel:e})=>[a(Q,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,options:B.value,placeholder:"Any",class:"p-column-filter",showClear:!0},{value:t(n=>[n.value?(I(),F("span",{key:0,class:p("customer-badge status-"+n.value)},s(n.value),3)):(I(),F("span",fe,s(n.placeholder),1))]),option:t(n=>[l("span",{class:p("customer-badge status-"+n.option)},s(n.option),3)]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),a(o,{field:"activity",header:"Activity",showFilterMatchModes:!1,style:{"min-width":"12rem"}},{body:t(({data:e})=>[a(X,{value:e.activity,showValue:!1,style:{height:"0.5rem"}},null,8,["value"])]),filter:t(({filterModel:e})=>[a($,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,range:!0,class:"m-3"},null,8,["modelValue","onUpdate:modelValue"]),l("div",be,[l("span",null,s(e.value?e.value[0]:0),1),l("span",null,s(e.value?e.value[1]:100),1)])]),_:1}),a(o,{field:"verified",header:"Verified",dataType:"boolean",bodyClass:"text-center",style:{"min-width":"8rem"}},{body:t(({data:e})=>[l("i",{class:p(["pi",{"text-green-500 pi-check-circle":e.verified,"text-pink-500 pi-times-circle":!e.verified}])},null,2)]),filter:t(({filterModel:e})=>[a(G,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["value","filters","loading","globalFilterFields"])])]),l("div",we,[l("div",xe,[Se,a(J,{modelValue:V.value,"onUpdate:modelValue":r[3]||(r[3]=e=>V.value=e),onIcon:"pi pi-lock",offIcon:"pi pi-lock-open",onLabel:"Unfreeze Id",offLabel:"Freeze Id",style:{width:"10rem"}},null,8,["modelValue"]),a(w,{value:S.value,scrollable:!0,scrollHeight:"400px",loading:L.value,scrollDirection:"both",class:"mt-3"},{default:t(()=>[a(o,{field:"name",header:"Name",style:{width:"150px"},frozen:""}),a(o,{field:"id",header:"Id",style:{width:"100px"},frozen:V.value},null,8,["frozen"]),a(o,{field:"country.name",header:"Country",style:{width:"200px"}},{body:t(({data:e})=>[l("img",{src:D,class:p("flag flag-"+e.country.code),width:"30"},null,2),l("span",Ce,s(e.country.name),1)]),_:1}),a(o,{field:"date",header:"Date",style:{width:"200px"}}),a(o,{field:"company",header:"Company",style:{width:"200px"}}),a(o,{field:"status",header:"Status",style:{width:"200px"}},{body:t(({data:e})=>[l("span",{class:p("customer-badge status-"+e.status)},s(e.status),3)]),_:1}),a(o,{field:"activity",header:"Activity",style:{width:"200px"}}),a(o,{field:"representative.name",header:"Representative",style:{width:"200px"}},{body:t(({data:e})=>[l("img",{alt:e.representative.name,src:"demo/images/avatar/"+e.representative.image,width:"32",style:{"vertical-align":"middle"}},null,8,Ve),l("span",Ue,s(e.representative.name),1)]),_:1}),a(o,{field:"balance",header:"Balance",style:{width:"150px"},frozen:"",alignFrozen:"right"},{body:t(({data:e})=>[l("span",Ae,s(b(e.balance)),1)]),_:1})]),_:1},8,["value","loading"])])]),l("div",Te,[l("div",Ie,[Fe,a(w,{value:U.value,expandedRows:C.value,"onUpdate:expandedRows":r[4]||(r[4]=e=>C.value=e),dataKey:"id",responsiveLayout:"scroll"},{header:t(()=>[l("div",null,[a(y,{icon:"pi pi-plus",label:"Expand All",onClick:E,class:"mr-2 mb-2"}),a(y,{icon:"pi pi-minus",label:"Collapse All",onClick:z,class:"mb-2"})])]),expansion:t(e=>[l("div",ke,[l("h5",null,"Orders for "+s(e.data.name),1),a(w,{value:e.data.orders,responsiveLayout:"scroll"},{default:t(()=>[a(o,{field:"id",header:"Id",sortable:!0},{body:t(n=>[c(s(n.data.id),1)]),_:2},1024),a(o,{field:"customer",header:"Customer",sortable:!0},{body:t(n=>[c(s(n.data.customer),1)]),_:2},1024),a(o,{field:"date",header:"Date",sortable:!0},{body:t(n=>[c(s(n.data.date),1)]),_:2},1024),a(o,{field:"amount",header:"Amount",sortable:!0},{body:t(n=>[c(s(b(n.data.amount)),1)]),_:2},1024),a(o,{field:"status",header:"Status",sortable:!0},{body:t(n=>[l("span",{class:p("order-badge order-"+(n.data.status?n.data.status.toLowerCase():""))},s(n.data.status),3)]),_:2},1024),a(o,{headerStyle:"width:4rem"},{body:t(()=>[a(y,{icon:"pi pi-search"})]),_:1})]),_:2},1032,["value"])])]),default:t(()=>[a(o,{expander:!0,headerStyle:"min-width: 3rem"}),a(o,{field:"name",header:"Name",sortable:!0},{body:t(e=>[c(s(e.data.name),1)]),_:1}),a(o,{header:"Image"},{body:t(e=>[l("img",{src:"demo/images/product/"+e.data.image,alt:e.data.image,class:"shadow-2",width:"100"},null,8,De)]),_:1}),a(o,{field:"price",header:"Price",sortable:!0},{body:t(e=>[c(s(b(e.data.price)),1)]),_:1}),a(o,{field:"category",header:"Category",sortable:!0},{body:t(e=>[c(s(b(e.data.category)),1)]),_:1}),a(o,{field:"rating",header:"Reviews",sortable:!0},{body:t(e=>[a(Y,{modelValue:e.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])]),_:1}),a(o,{field:"inventoryStatus",header:"Status",sortable:!0},{body:t(e=>[l("span",{class:p("product-badge status-"+(e.data.inventoryStatus?e.data.inventoryStatus.toLowerCase():""))},s(e.data.inventoryStatus),3)]),_:1})]),_:1},8,["value","expandedRows"])])]),l("div",Le,[l("div",Ne,[Be,a(w,{value:h.value,rowGroupMode:"subheader",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,scrollable:"",scrollHeight:"400px"},{groupheader:t(e=>[l("img",{alt:e.data.representative.name,src:"demo/images/avatar/"+e.data.representative.image,width:"32",style:{"vertical-align":"middle"}},null,8,je),l("span",Me,s(e.data.representative.name),1)]),groupfooter:t(e=>[l("td",Ee,"Total Customers: "+s(H(e.data.representative.name)),1)]),default:t(()=>[a(o,{field:"representative.name",header:"Representative"}),a(o,{field:"name",header:"Name",style:{"min-width":"200px"}}),a(o,{field:"country",header:"Country",style:{"min-width":"200px"}},{body:t(e=>[l("img",{src:D,class:p("flag flag-"+e.data.country.code),width:"30"},null,2),l("span",Re,s(e.data.country.name),1)]),_:1}),a(o,{field:"company",header:"Company",style:{"min-width":"200px"}}),a(o,{field:"status",header:"Status",style:{"min-width":"200px"}},{body:t(e=>[l("span",{class:p("customer-badge status-"+e.data.status)},s(e.data.status),3)]),_:1}),a(o,{field:"date",header:"Date",style:{"min-width":"200px"}})]),_:1},8,["value"])])])])}}},Ke=Z(ze,[["__scopeId","data-v-3f35c6aa"]]);export{Ke as default};
