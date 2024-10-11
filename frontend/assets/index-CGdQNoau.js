import{j as e,S as d,I as h,P as u,E as f,h as g,C as b,B as j,u as N,e as v,a as w,d as C}from"./index-BUbsj0nv.js";import{C as y}from"./index-DWyWPC9l.js";const P=({recentBlogs:s,loading:t})=>e.jsxs("div",{className:"left-0 top-[10px] h-fit flex-shrink-0 lg:max-w-[342px]",children:[e.jsx("h2",{className:"font-semibold text-h2 text-black-100 dark:text-white",children:"Recent blog posts"}),e.jsxs("div",{className:"relative mt-[32px] flex flex-row flex-wrap gap-default lg:flex-col",children:[t&&e.jsx("div",{className:"absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-white dark:bg-black-200",children:e.jsx(d,{className:"z-10",size:"small"})}),(s==null?void 0:s.length)>0&&!t?s==null?void 0:s.map(l=>e.jsx(h,{basePath:u.BLOG.INDEX,...l,textclamps:3,imgClasses:"max-h-[342px]"},l.id)):e.jsx(f,{className:"w-full",description:"No current blogs"})]})]}),k=({blogSingle:s,blogDetailLoading:t})=>{var p,m;const{author:l,category:a,content:n,title:i,created_at:c,thumbnail_url:x}=((p=s==null?void 0:s.data)==null?void 0:p.data)||{},r=(m=g(c))==null?void 0:m.format("DD MMM YYYY"),o=a==null?void 0:a.split(",");return e.jsxs("div",{className:"mobile: relative min-h-[764px] w-full",children:[t&&e.jsx("div",{className:"absolute left-0 top-0 z-20 flex h-full w-full items-start justify-center bg-white dark:bg-black-200",children:e.jsx(d,{className:"z-20",size:"small"})}),t?e.jsxs("div",{className:"relative flex-grow",children:[e.jsx(f,{description:"No content found for this blog"}),e.jsx(j,{link:u.BLOG.INDEX,type:"button",tailClasses:"h-[48px] px-[20px] rounded-[8px] bg-purple-300 hover:bg-purple-200 mx-auto mt-[16px]",children:"Back to blogs"})]}):e.jsxs("div",{className:"relative flex-grow",children:[e.jsxs("p",{className:"font-semibold text-caption capitalize text-purple-200",children:[l," • ",r]}),e.jsx("h1",{className:"mt-[32px] font-bold text-h1 text-black-100 dark:text-white",children:i}),e.jsx("figure",{className:"image mx-auto my-[32px] aspect-[778/498] max-h-[498px] w-full",children:e.jsx("img",{src:x,alt:"blog thumbnail",className:"object-contain object-center"})}),e.jsx("div",{className:"blogdetail-content mt-[32px]",dangerouslySetInnerHTML:{__html:n}}),e.jsx(b,{tags:o,groupListTailClasses:"mt-[24px] mb-[32px]"}),e.jsx(y,{tailClasses:"py-[30px] border-t-2"})]})]})};function z(){var r;const{blogs:s,loading:t}=N(o=>o.blogReducers),{blogSlug:l}=v(),{data:a,isPending:n}=w({queryKey:["blogSingle",l],queryFn:()=>C.getBlogsById(l)});return{recentBlogsProps:{recentBlogs:(r=s.filter(o=>o.id.toString()!==l))==null?void 0:r.slice(0,6),loading:t},blogContentProps:{blogSingle:a,blogDetailLoading:n}}}const I=()=>{const{blogContentProps:s,recentBlogsProps:t}=z();return e.jsxs("div",{className:"flex flex-col-reverse gap-default lg:flex-row",children:[e.jsx(P,{...t}),e.jsx(k,{...s})]})};export{I as default};
