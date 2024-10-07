import{j as s,I as d,P as p,E as c,h as g,C as u,u as f,e as h,a as b,d as j}from"./index-BI_kWpRF.js";import{C as N}from"./index-DJnDVr-Z.js";import{B as C}from"./index-BzTMpg1C.js";const v=({recentBlogs:t})=>s.jsxs("div",{className:"left-0 top-[10px] h-fit flex-shrink-0 lg:max-w-[342px]",children:[s.jsx("h2",{className:"font-semibold text-h2 text-black-100 dark:text-white",children:"Recent blog posts"}),s.jsx("div",{className:"mt-[32px] flex flex-row flex-wrap gap-default lg:flex-col",children:(t==null?void 0:t.length)>0?t==null?void 0:t.map(e=>s.jsx(d,{basePath:p.BLOG.INDEX,...e,textclamps:3,imgClasses:"max-h-[342px]"},e.id)):s.jsx(c,{className:"w-full",description:"No current blogs"})})]}),P=({author:t,category:e,content:l,title:o,created_at:n,thumbnail_url:x,id:r})=>{var i;const a=(i=g(n))==null?void 0:i.format("DD MMM YYYY"),m=e==null?void 0:e.split(",");return s.jsx(s.Fragment,{children:r?s.jsxs("div",{className:"relative flex-grow",children:[s.jsxs("p",{className:"font-semibold text-caption capitalize text-purple-200",children:[t," • ",a]}),s.jsx("h1",{className:"mt-[32px] font-bold text-h1 text-black-100 dark:text-white",children:o}),s.jsx("figure",{className:"image mx-auto my-[32px] aspect-[778/498] max-h-[498px] w-full",children:s.jsx("img",{src:x,alt:"blog thumbnail",className:"object-cover object-center"})}),s.jsx("div",{className:"blogdetail-content mt-[32px]",dangerouslySetInnerHTML:{__html:l}}),s.jsx(u,{tags:m,groupListTailClasses:"mt-[24px] mb-[32px]"}),s.jsx(N,{tailClasses:"py-[30px] border-t-2"})]}):s.jsxs("div",{className:"relative flex-grow",children:[s.jsx(c,{description:"No content found for this blog"}),s.jsx(C,{link:p.BLOG.INDEX,type:"button",tailClasses:"h-[48px] px-[20px] rounded-[8px] bg-purple-300 hover:bg-purple-200 mx-auto mt-[16px]",children:"Back to blogs"})]})})};function w(){var r;const{blogs:t}=f(a=>a.blogReducers),{blogSlug:e}=h(),{data:l}=b({queryKey:["blogSingle",e],queryFn:()=>j.getBlogsById(e)});return{recentBlogsProps:{recentBlogs:(r=t.filter(a=>a.id.toString()!==e))==null?void 0:r.slice(0,6)},blogContentProps:{blogSingle:l}}}const D=()=>{var o;const{blogContentProps:t,recentBlogsProps:e}=w(),{blogSingle:l}=t;return s.jsxs("div",{className:"flex flex-col-reverse gap-default px-[32px] py-[30px] lg:flex-row",children:[s.jsx(v,{...e}),s.jsx(P,{...(o=l==null?void 0:l.data)==null?void 0:o.data})]})};export{D as default};
