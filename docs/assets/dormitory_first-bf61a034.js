import{d as v,A as n,H as g,o as l,c,a as u,b as r,w as _,F as y,r as b,m as x,g as E,aC as V,E as k}from"./index-3befa288.js";import{E as B,a as C}from"./el-select-928ccc76.js";import{g as N}from"./DormitoryManagement-a242dcae.js";import"./validator-582dc704.js";const S={class:"container"},A=u("h1",{class:"title"},"微校园管理-宿舍管理",-1),I={class:"center"},L=v({__name:"dormitory_first",setup(w){const t=n(""),s=n([]),d=V(),i=()=>{N().then(e=>{console.log(e),e?s.value=e.data.schools:console.log(e)}).catch(e=>{console.log(e)})},m=()=>{console.log("选择的学校ID:",t.value),d.push({path:"/dormitory_second",query:{schoolId:t.value}})};return g(()=>{i()}),(e,a)=>{const p=B,h=C,f=k;return l(),c("div",S,[A,u("div",I,[r(h,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=o=>t.value=o),placeholder:"请选择学校名称",class:"select-box"},{default:_(()=>[(l(!0),c(y,null,b(s.value,o=>(l(),x(p,{key:o.id,label:o.schoolName,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),r(f,{type:"primary",onClick:m},{default:_(()=>[E("提交")]),_:1})])])}}});export{L as default};
