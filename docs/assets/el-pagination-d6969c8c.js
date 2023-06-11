import{a8 as q,a9 as D,d as z,aa as L,z as N,o as c,c as P,V as M,m as $,w as H,S as Y,ab as n,x as Z,L as j,ac as le,ad as ee,ae,af as ne,ag as A,A as x,n as J,ah as oe,b as te,F as se,r as ie,P as k,a as G,i as ue,ai as ce,U as V,aj as ge,ak as Q,al as pe,W as de,am as fe,an as be,ao as ve,ap as B,aq as I,ar as me,as as Pe,at as Ce}from"./index-3befa288.js";import{E as he,a as ye}from"./el-select-928ccc76.js";const re=Symbol("elPaginationKey"),ze=q({disabled:Boolean,currentPage:{type:Number,default:1},prevText:{type:String},prevIcon:{type:D}}),ke={click:e=>e instanceof MouseEvent},_e=["disabled","aria-label","aria-disabled"],Se={key:0},Ne=z({name:"ElPaginationPrev"}),xe=z({...Ne,props:ze,emits:ke,setup(e){const l=e,{t:i}=L(),g=N(()=>l.disabled||l.currentPage<=1);return(r,o)=>(c(),P("button",{type:"button",class:"btn-prev",disabled:n(g),"aria-label":r.prevText||n(i)("el.pagination.prev"),"aria-disabled":n(g),onClick:o[0]||(o[0]=f=>r.$emit("click",f))},[r.prevText?(c(),P("span",Se,M(r.prevText),1)):(c(),$(n(Z),{key:1},{default:H(()=>[(c(),$(Y(r.prevIcon)))]),_:1}))],8,_e))}});var Ee=j(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);const we=q({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50},nextText:{type:String},nextIcon:{type:D}}),$e=["disabled","aria-label","aria-disabled"],Te={key:0},Be=z({name:"ElPaginationNext"}),Ie=z({...Be,props:we,emits:["click"],setup(e){const l=e,{t:i}=L(),g=N(()=>l.disabled||l.currentPage===l.pageCount||l.pageCount===0);return(r,o)=>(c(),P("button",{type:"button",class:"btn-next",disabled:n(g),"aria-label":r.nextText||n(i)("el.pagination.next"),"aria-disabled":n(g),onClick:o[0]||(o[0]=f=>r.$emit("click",f))},[r.nextText?(c(),P("span",Te,M(r.nextText),1)):(c(),$(n(Z),{key:1},{default:H(()=>[(c(),$(Y(r.nextIcon)))]),_:1}))],8,$e))}});var Me=j(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);const R=()=>le(re,{}),qe=q({pageSize:{type:Number,required:!0},pageSizes:{type:ee(Array),default:()=>ae([10,20,30,40,50,100])},popperClass:{type:String},disabled:Boolean,size:{type:String,values:ne}}),Le=z({name:"ElPaginationSizes"}),Ae=z({...Le,props:qe,emits:["page-size-change"],setup(e,{emit:l}){const i=e,{t:g}=L(),r=A("pagination"),o=R(),f=x(i.pageSize);J(()=>i.pageSizes,(p,C)=>{if(!oe(p,C)&&Array.isArray(p)){const u=p.includes(i.pageSize)?i.pageSize:i.pageSizes[0];l("page-size-change",u)}}),J(()=>i.pageSize,p=>{f.value=p});const y=N(()=>i.pageSizes);function E(p){var C;p!==f.value&&(f.value=p,(C=o.handleSizeChange)==null||C.call(o,Number(p)))}return(p,C)=>(c(),P("span",{class:k(n(r).e("sizes"))},[te(n(ye),{"model-value":f.value,disabled:p.disabled,"popper-class":p.popperClass,size:p.size,"validate-event":!1,onChange:E},{default:H(()=>[(c(!0),P(se,null,ie(n(y),u=>(c(),$(n(he),{key:u,value:u,label:u+n(g)("el.pagination.pagesize")},null,8,["value","label"]))),128))]),_:1},8,["model-value","disabled","popper-class","size"])],2))}});var je=j(Ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);const Fe=q({size:{type:String,values:ne}}),Ue=["disabled"],We=z({name:"ElPaginationJumper"}),Ke=z({...We,props:Fe,setup(e){const{t:l}=L(),i=A("pagination"),{pageCount:g,disabled:r,currentPage:o,changeEvent:f}=R(),y=x(),E=N(()=>{var u;return(u=y.value)!=null?u:o==null?void 0:o.value});function p(u){y.value=u?+u:""}function C(u){u=Math.trunc(+u),f==null||f(u),y.value=void 0}return(u,_)=>(c(),P("span",{class:k(n(i).e("jump")),disabled:n(r)},[G("span",{class:k([n(i).e("goto")])},M(n(l)("el.pagination.goto")),3),te(n(ue),{size:u.size,class:k([n(i).e("editor"),n(i).is("in-pagination")]),min:1,max:n(g),disabled:n(r),"model-value":n(E),"validate-event":!1,label:n(l)("el.pagination.page"),type:"number","onUpdate:modelValue":p,onChange:C},null,8,["size","class","max","disabled","model-value","label"]),G("span",{class:k([n(i).e("classifier")])},M(n(l)("el.pagination.pageClassifier")),3)],10,Ue))}});var Ve=j(Ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);const De=q({total:{type:Number,default:1e3}}),Oe=["disabled"],Je=z({name:"ElPaginationTotal"}),He=z({...Je,props:De,setup(e){const{t:l}=L(),i=A("pagination"),{disabled:g}=R();return(r,o)=>(c(),P("span",{class:k(n(i).e("total")),disabled:n(g)},M(n(l)("el.pagination.total",{total:r.total})),11,Oe))}});var Re=j(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);const Ge=q({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),Qe=["onKeyup"],Xe=["aria-current","aria-label","tabindex"],Ye=["tabindex","aria-label"],Ze=["aria-current","aria-label","tabindex"],ea=["tabindex","aria-label"],aa=["aria-current","aria-label","tabindex"],na=z({name:"ElPaginationPager"}),ta=z({...na,props:Ge,emits:["change"],setup(e,{emit:l}){const i=e,g=A("pager"),r=A("icon"),{t:o}=L(),f=x(!1),y=x(!1),E=x(!1),p=x(!1),C=x(!1),u=x(!1),_=N(()=>{const t=i.pagerCount,a=(t-1)/2,s=Number(i.currentPage),b=Number(i.pageCount);let v=!1,w=!1;b>t&&(s>t-a&&(v=!0),s<b-a&&(w=!0));const T=[];if(v&&!w){const h=b-(t-2);for(let S=h;S<b;S++)T.push(S)}else if(!v&&w)for(let h=2;h<t;h++)T.push(h);else if(v&&w){const h=Math.floor(t/2)-1;for(let S=s-h;S<=s+h;S++)T.push(S)}else for(let h=2;h<b;h++)T.push(h);return T}),d=N(()=>i.disabled?-1:0);ce(()=>{const t=(i.pagerCount-1)/2;f.value=!1,y.value=!1,i.pageCount>i.pagerCount&&(i.currentPage>i.pagerCount-t&&(f.value=!0),i.currentPage<i.pageCount-t&&(y.value=!0))});function F(t=!1){i.disabled||(t?E.value=!0:p.value=!0)}function W(t=!1){t?C.value=!0:u.value=!0}function O(t){const a=t.target;if(a.tagName.toLowerCase()==="li"&&Array.from(a.classList).includes("number")){const s=Number(a.textContent);s!==i.currentPage&&l("change",s)}else a.tagName.toLowerCase()==="li"&&Array.from(a.classList).includes("more")&&K(t)}function K(t){const a=t.target;if(a.tagName.toLowerCase()==="ul"||i.disabled)return;let s=Number(a.textContent);const b=i.pageCount,v=i.currentPage,w=i.pagerCount-2;a.className.includes("more")&&(a.className.includes("quickprev")?s=v-w:a.className.includes("quicknext")&&(s=v+w)),Number.isNaN(+s)||(s<1&&(s=1),s>b&&(s=b)),s!==v&&l("change",s)}return(t,a)=>(c(),P("ul",{class:k(n(g).b()),onClick:K,onKeyup:de(O,["enter"])},[t.pageCount>0?(c(),P("li",{key:0,class:k([[n(g).is("active",t.currentPage===1),n(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===1,"aria-label":n(o)("el.pagination.currentPage",{pager:1}),tabindex:n(d)}," 1 ",10,Xe)):V("v-if",!0),f.value?(c(),P("li",{key:1,class:k(["more","btn-quickprev",n(r).b(),n(g).is("disabled",t.disabled)]),tabindex:n(d),"aria-label":n(o)("el.pagination.prevPages",{pager:t.pagerCount-2}),onMouseenter:a[0]||(a[0]=s=>F(!0)),onMouseleave:a[1]||(a[1]=s=>E.value=!1),onFocus:a[2]||(a[2]=s=>W(!0)),onBlur:a[3]||(a[3]=s=>C.value=!1)},[(E.value||C.value)&&!t.disabled?(c(),$(n(ge),{key:0})):(c(),$(n(Q),{key:1}))],42,Ye)):V("v-if",!0),(c(!0),P(se,null,ie(n(_),s=>(c(),P("li",{key:s,class:k([[n(g).is("active",t.currentPage===s),n(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===s,"aria-label":n(o)("el.pagination.currentPage",{pager:s}),tabindex:n(d)},M(s),11,Ze))),128)),y.value?(c(),P("li",{key:2,class:k(["more","btn-quicknext",n(r).b(),n(g).is("disabled",t.disabled)]),tabindex:n(d),"aria-label":n(o)("el.pagination.nextPages",{pager:t.pagerCount-2}),onMouseenter:a[4]||(a[4]=s=>F()),onMouseleave:a[5]||(a[5]=s=>p.value=!1),onFocus:a[6]||(a[6]=s=>W()),onBlur:a[7]||(a[7]=s=>u.value=!1)},[(p.value||u.value)&&!t.disabled?(c(),$(n(pe),{key:0})):(c(),$(n(Q),{key:1}))],42,ea)):V("v-if",!0),t.pageCount>1?(c(),P("li",{key:3,class:k([[n(g).is("active",t.currentPage===t.pageCount),n(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===t.pageCount,"aria-label":n(o)("el.pagination.currentPage",{pager:t.pageCount}),tabindex:n(d)},M(t.pageCount),11,aa)):V("v-if",!0)],42,Qe))}});var sa=j(ta,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);const m=e=>typeof e!="number",ia=q({total:Number,pageSize:Number,defaultPageSize:Number,currentPage:Number,defaultCurrentPage:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>I(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2===1,default:7},layout:{type:String,default:["prev","pager","next","jumper","->","total"].join(", ")},pageSizes:{type:ee(Array),default:()=>ae([10,20,30,40,50,100])},popperClass:{type:String,default:""},prevText:{type:String,default:""},prevIcon:{type:D,default:()=>me},nextText:{type:String,default:""},nextIcon:{type:D,default:()=>Pe},small:Boolean,background:Boolean,disabled:Boolean,hideOnSinglePage:Boolean}),ra={"update:current-page":e=>I(e),"update:page-size":e=>I(e),"size-change":e=>I(e),"current-change":e=>I(e),"prev-click":e=>I(e),"next-click":e=>I(e)},X="ElPagination";var la=z({name:X,props:ia,emits:ra,setup(e,{emit:l,slots:i}){const{t:g}=L(),r=A("pagination"),o=fe().vnode.props||{},f="onUpdate:currentPage"in o||"onUpdate:current-page"in o||"onCurrentChange"in o,y="onUpdate:pageSize"in o||"onUpdate:page-size"in o||"onSizeChange"in o,E=N(()=>{if(m(e.total)&&m(e.pageCount)||!m(e.currentPage)&&!f)return!1;if(e.layout.includes("sizes")){if(m(e.pageCount)){if(!m(e.total)&&!m(e.pageSize)&&!y)return!1}else if(!y)return!1}return!0}),p=x(m(e.defaultPageSize)?10:e.defaultPageSize),C=x(m(e.defaultCurrentPage)?1:e.defaultCurrentPage),u=N({get(){return m(e.pageSize)?p.value:e.pageSize},set(a){m(e.pageSize)&&(p.value=a),y&&(l("update:page-size",a),l("size-change",a))}}),_=N(()=>{let a=0;return m(e.pageCount)?m(e.total)||(a=Math.max(1,Math.ceil(e.total/u.value))):a=e.pageCount,a}),d=N({get(){return m(e.currentPage)?C.value:e.currentPage},set(a){let s=a;a<1?s=1:a>_.value&&(s=_.value),m(e.currentPage)&&(C.value=s),f&&(l("update:current-page",s),l("current-change",s))}});J(_,a=>{d.value>a&&(d.value=a)});function F(a){d.value=a}function W(a){u.value=a;const s=_.value;d.value>s&&(d.value=s)}function O(){e.disabled||(d.value-=1,l("prev-click",d.value))}function K(){e.disabled||(d.value+=1,l("next-click",d.value))}function t(a,s){a&&(a.props||(a.props={}),a.props.class=[a.props.class,s].join(" "))}return be(re,{pageCount:_,disabled:N(()=>e.disabled),currentPage:d,changeEvent:F,handleSizeChange:W}),()=>{var a,s;if(!E.value)return ve(X,g("el.pagination.deprecationWarning")),null;if(!e.layout||e.hideOnSinglePage&&_.value<=1)return null;const b=[],v=[],w=B("div",{class:r.e("rightwrapper")},v),T={prev:B(Ee,{disabled:e.disabled,currentPage:d.value,prevText:e.prevText,prevIcon:e.prevIcon,onClick:O}),jumper:B(Ve,{size:e.small?"small":"default"}),pager:B(sa,{currentPage:d.value,pageCount:_.value,pagerCount:e.pagerCount,onChange:F,disabled:e.disabled}),next:B(Me,{disabled:e.disabled,currentPage:d.value,pageCount:_.value,nextText:e.nextText,nextIcon:e.nextIcon,onClick:K}),sizes:B(je,{pageSize:u.value,pageSizes:e.pageSizes,popperClass:e.popperClass,disabled:e.disabled,size:e.small?"small":"default"}),slot:(s=(a=i==null?void 0:i.default)==null?void 0:a.call(i))!=null?s:null,total:B(Re,{total:m(e.total)?0:e.total})},h=e.layout.split(",").map(U=>U.trim());let S=!1;return h.forEach(U=>{if(U==="->"){S=!0;return}S?v.push(T[U]):b.push(T[U])}),t(b[0],r.is("first")),t(b[b.length-1],r.is("last")),S&&v.length>0&&(t(v[0],r.is("first")),t(v[v.length-1],r.is("last")),b.push(w)),B("div",{class:[r.b(),r.is("background",e.background),{[r.m("small")]:e.small}]},b)}}});const ca=Ce(la);export{ca as E};
