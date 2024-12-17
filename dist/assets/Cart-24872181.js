import{a as n,d as l,f as c,j as s,R as o,g as d}from"./index-292677df.js";import{T as m}from"./index-4f7500ed.js";import{F as x}from"./Form-957f404f.js";import{G as h}from"./iconBase-d5d3d499.js";import{O as p}from"./OrderSummary-c93eee45.js";import{B as a}from"./Button-70502d8a.js";import{C as j}from"./Container-0c561c1d.js";import"./index-02438269.js";import"./FormControl-d702e372.js";import"./ElementChildren-c4fbd484.js";import"./Col-d37237ba.js";import"./Button-da82cc7e.js";function v(t){return h({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(t)}const T=()=>{const t=n();let{cart:r}=l(e=>e.bag);const i=c();return s.jsx(s.Fragment,{children:r.length===0?s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{children:"Cart is empty"}),s.jsx(a,{variant:"outline-primary",className:"sm",onClick:e=>i("/"),children:"shop now"})]}):s.jsxs(j,{class:"pt-4 ",children:[s.jsxs("div",{className:"d-flex justify-content-between",children:[s.jsx("strong",{className:"fs-3",children:"Shopping Cart"}),s.jsx(a,{onClick:()=>t(o()),variant:"outline-danger",className:"btn-sm",children:"Empty Cart "})]}),s.jsx("hr",{}),s.jsxs("div",{className:"d-flex justify-content-between",children:[r&&s.jsxs("div",{className:"w-50 ",children:[s.jsx("div",{className:"bg-light",children:r.map(e=>s.jsxs("div",{className:"d-flex align-items-start  gap-4  p-1  mt-3 ",children:[s.jsx("div",{children:s.jsx("img",{src:e.hero,alt:"",height:250,width:250})}),s.jsxs("div",{children:[s.jsx("p",{children:e.name}),s.jsxs("div",{children:[e.desc," | large "]}),s.jsxs("p",{className:"pb-5",children:["₹",e.price]}),s.jsxs("p",{children:[" ",s.jsxs("span",{className:"text-success fs-4 ",children:[" ",s.jsx(m,{})]}),"   in stock"]})]}),s.jsx("div",{children:s.jsxs(x.Select,{className:" text-dark ",children:[s.jsx("option",{children:e.qty}),s.jsx("option",{value:"1",children:"2"}),s.jsx("option",{value:"2",children:"3"}),s.jsx("option",{value:"3",children:"4"})]})}),s.jsx(a,{onClick:()=>t(d(e)),variant:"outline-danger",className:"ms-auto",children:s.jsx(v,{})})]}))}),s.jsx("hr",{})]}),s.jsx("div",{className:"w-25",children:s.jsx(p,{})})]})]})})};export{T as default};