import{b as x,u as h,j as e,bo as f,s as o,P as b}from"./index-DR8RArQ-.js";import{B as g}from"./index-XQAxl3ya.js";import{I as l}from"./index-D9d5rhPn.js";import{u as j,V as s}from"./validation-BDEirZJr.js";import"./bundle-mjs-BOZU2X2x.js";const y=()=>{var r,i;const m=x(),p=h(),{register:a,handleSubmit:n,formState:{errors:t}}=j(),d=c=>{m(f({...c,options:{onSuccess:()=>{o.success("Login successful"),p(b.ADMIN.BLOGS)},onFail:u=>{o.error(u.response.data.message)}}}))};return e.jsx("div",{className:"fixed left-0 top-0 flex h-lvh w-full items-center justify-center",children:e.jsxs("div",{className:"min-h-[400px] w-[50%] min-w-[400px] max-w-[500px] rounded-[24px] bg-sky-100 px-[32px] py-[16px] shadow-md",children:[e.jsx("h2",{className:"text-center font-semibold text-h2 capitalize text-black-100",children:"Admin Dashboard"}),e.jsx("div",{className:"mb-[16px] mt-[12px] h-[2px] w-full rounded-full bg-sky-200"}),e.jsxs("form",{action:"#",method:"POST",className:"flex flex-col items-start gap-[16px]",onSubmit:n(d),children:[e.jsx(l,{label:"Email",inputType:"text",placeholder:"Email",...a("email",{required:s.required.message,pattern:{value:s.email.validateRe,message:s.email.message}}),error:(r=t.email)==null?void 0:r.message}),e.jsx(l,{label:"Password",inputType:"password",placeholder:"Password",...a("password",{required:s.required.message}),error:(i=t.password)==null?void 0:i.message}),e.jsx(g,{onClick:()=>{},type:"submit",children:"Submit"})]})]})})};export{y as default};
