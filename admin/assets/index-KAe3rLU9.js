import{b as O,r as w,j as s,s as r,k as T}from"./index-BVwH0JCO.js";import{I as m}from"./index-GbeayIsc.js";import{B as k}from"./index-BdoJPm2o.js";import{M as q}from"./index-DBQp0F6-.js";import{u as I,V as f}from"./validation-C9ibwBcG.js";import"./clsx-B-dksMZM.js";import"./iconBase-LQJpegV3.js";const B=()=>{var n,d;const h=O(),[x,a]=w.useState(!1),{register:t,handleSubmit:g,formState:{errors:e,isSubmitting:P},reset:l}=I(),b=()=>{a(!0)},j=S=>{const{oldPassword:p,newPassword:i}=S||{};if(p===i){r.error("Old password can't be the same as new password"),l();return}h(T({oldPassword:p,newPassword:i,callback:{onSuccess:()=>{r.success("Change password successful")},onFail:o=>{var c,u;r.error((u=(c=o==null?void 0:o.response)==null?void 0:c.data)==null?void 0:u.message)}}})),l()},C=()=>{a(!1)};return w.useEffect(()=>{a(!1)},[P]),s.jsx("div",{className:"w-full min-w-[25%] max-w-[250px]",children:s.jsxs("div",{className:"flex w-full flex-col gap-[16px]",children:[s.jsx(m,{label:"Old password",inputType:"password",wrapperTailClass:"w-full",error:(n=e==null?void 0:e.oldPassword)==null?void 0:n.message,...t("oldPassword",{required:f.required.message})}),s.jsx(m,{label:"New password",inputType:"password",wrapperTailClass:"w-full",error:(d=e==null?void 0:e.newPassword)==null?void 0:d.message,...t("newPassword",{required:f.required.message})}),s.jsx(k,{onClick:b,tailClasses:"w-fit",children:"Submit"}),s.jsx(q,{open:x,handleOk:g(j),handleCancel:C,children:s.jsx("p",{children:"Confirm change password?"})})]})})};export{B as default};
