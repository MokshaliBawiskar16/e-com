import{r as d,j as x}from"./index-292677df.js";const b=["as","disabled"];function j(n,t){if(n==null)return{};var o={};for(var u in n)if({}.hasOwnProperty.call(n,u)){if(t.indexOf(u)>=0)continue;o[u]=n[u]}return o}function y(n){return!n||n.trim()==="#"}function P({tagName:n,disabled:t,href:o,target:u,rel:e,role:r,onClick:s,tabIndex:a=0,type:p}){n||(o!=null||u!=null||e!=null?n="a":n="button");const f={tagName:n};if(n==="button")return[{type:p||"button",disabled:t},f];const l=i=>{if((t||n==="a"&&y(o))&&i.preventDefault(),t){i.stopPropagation();return}s==null||s(i)},c=i=>{i.key===" "&&(i.preventDefault(),l(i))};return n==="a"&&(o||(o="#"),t&&(o=void 0)),[{role:r??"button",disabled:void 0,tabIndex:t?void 0:a,href:o,target:n==="a"?u:void 0,"aria-disabled":t||void 0,rel:n==="a"?e:void 0,onClick:l,onKeyDown:c},f]}const w=d.forwardRef((n,t)=>{let{as:o,disabled:u}=n,e=j(n,b);const[r,{tagName:s}]=P(Object.assign({tagName:o,disabled:u},e));return x.jsx(s,Object.assign({},e,r,{ref:t}))});w.displayName="Button";export{w as B,P as u};
