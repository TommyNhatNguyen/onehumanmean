import{b as u,u as g,c as n,j as e,L as l,P as t,l as f,s as j,O as N}from"./index-BVwH0JCO.js";import{I as w}from"./index-GbeayIsc.js";import{C as b,a as v,B as I}from"./index-jsxoGs1k.js";import{G as A}from"./iconBase-LQJpegV3.js";import{B as y}from"./index-BdoJPm2o.js";import{u as O,V as B}from"./validation-C9ibwBcG.js";import"./clsx-B-dksMZM.js";function D(a){return A({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 192l128 128 128-128z"},child:[]}]})(a)}const S=()=>{var i;const{register:a,handleSubmit:c}=O(),x=u(),d=g(),{notifications:r}=n(s=>s.notiReducers),o=(i=r==null?void 0:r.filter(s=>!s.is_answer))==null?void 0:i.length,{username:m}=n(s=>s.authReducers),p=()=>{x(f()),d(t.ADMIN.LOGIN)},h=s=>{console.log(s),j.warning("Feature is developing")};return e.jsx(b,{tailStyles:"border-b-[1px] border-gray-100",children:e.jsxs("header",{className:"flex w-full max-w-maxWidthPage items-center justify-between py-[16px]",children:[e.jsxs("div",{className:"flex items-center gap-[16px]",children:[e.jsxs(l,{to:t.ADMIN.INDEX,className:"flex flex-shrink-0 items-center",children:[e.jsx("div",{className:"h-[32px] w-[32px]",children:e.jsx("img",{src:"/images/admin-logo.png",alt:"admin logo"})}),e.jsx("h1",{className:"font-bold text-h2-sm text-black-200",children:"One human mean"})]}),e.jsxs("form",{action:"#",className:"relative flex flex-grow",onSubmit:c(h),children:[e.jsx(w,{placeholder:"Search",type:"text",...a("search",{required:B.required.message})}),e.jsx("div",{className:"absolute right-[6px] top-[54%] flex h-[20px] w-[20px] translate-y-[-50%]",children:e.jsx(v,{className:"h-full w-full"})})]})]}),e.jsxs("div",{className:"relative flex items-center gap-[16px]",children:[e.jsxs(l,{to:t.ADMIN.NOTIFICATION.INDEX,className:"relative h-[20px] w-[20px]",children:[e.jsx(I,{className:"h-full w-full"}),o>0&&e.jsx("div",{className:"absolute right-[-9px] top-[-13px] flex aspect-square w-[24px] items-center justify-center rounded-full bg-red-200 text-tag text-white",children:o})]}),e.jsxs(l,{to:t.ADMIN.PROFILE,className:"group flex items-center gap-[8px]",children:[e.jsx("div",{className:"aspect-square w-[32px] flex-shrink-0 overflow-hidden rounded-full border-[1px] border-gray-100",children:e.jsx("img",{src:"https://fastly.picsum.photos/id/315/200/300.jpg?hmac=C67WPcnxkaV_SPowHi-8nl3yoODZSBZqnoOdBObP5Ys",alt:"profile image",className:"object-cover"})}),e.jsx("p",{className:"text-tag duration-150 group-hover:text-black-100",children:m||"Admin"}),e.jsx(D,{})]}),e.jsx(y,{onClick:p,tailClasses:"bg-gray-200 hover:bg-gray-100",children:"Logout"})]})]})})},E=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{}),e.jsx(N,{})]});export{E as default};
