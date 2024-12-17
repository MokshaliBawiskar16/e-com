import{r as t,j as s,u as $e,L as Ae}from"./index-c4e2cc73.js";import{u as Le,a as He,b as ce,t as Pe,A as ie,T as _e,c as Oe}from"./TransitionWrapper-b8501694.js";import{u as W,c as k,a as Ue,C as Xe}from"./Container-63baafe0.js";import{f as Fe,m as le}from"./ElementChildren-7245588f.js";import{R as Ke}from"./Row-61f527d4.js";import{C as Be}from"./Col-4b13941f.js";import{C as T}from"./Card-9b483582.js";import"./Button-cf2780f7.js";import"./CardHeaderContext-1cd0ceea.js";function We(r,n){const c=t.useRef(!0);t.useEffect(()=>{if(c.current){c.current=!1;return}return r()},n)}function qe(){const r=t.useRef(!0),n=t.useRef(()=>r.current);return t.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),n.current}function Ge(r){const n=t.useRef(r);return n.current=r,n}function Ve(r){const n=Ge(r);t.useEffect(()=>()=>n.current(),[])}const B=2**31-1;function ue(r,n,c){const l=c-Date.now();r.current=l<=B?setTimeout(n,l):setTimeout(()=>ue(r,n,c),B)}function Ye(){const r=qe(),n=t.useRef();return Ve(()=>clearTimeout(n.current)),t.useMemo(()=>{const c=()=>clearTimeout(n.current);function l(h,i=0){r()&&(c(),i<=B?n.current=setTimeout(h,i):ue(n,h,Date.now()+i))}return{set:l,clear:c,handleRef:n}},[])}const de=t.forwardRef(({className:r,bsPrefix:n,as:c="div",...l},h)=>(n=W(n,"carousel-caption"),s.jsx(c,{ref:h,className:k(r,n),...l})));de.displayName="CarouselCaption";const ze=de,fe=t.forwardRef(({as:r="div",bsPrefix:n,className:c,...l},h)=>{const i=k(c,W(n,"carousel-item"));return s.jsx(r,{ref:h,...l,className:i})});fe.displayName="CarouselItem";const Je=fe,Qe=40;function Ze(r){if(!r||!r.style||!r.parentNode||!r.parentNode.style)return!1;const n=getComputedStyle(r);return n.display!=="none"&&n.visibility!=="hidden"&&getComputedStyle(r.parentNode).display!=="none"}const me=t.forwardRef(({defaultActiveIndex:r=0,...n},c)=>{const{as:l="div",bsPrefix:h,slide:i=!0,fade:he=!1,controls:pe=!0,indicators:M=!0,indicatorLabels:$=[],activeIndex:p,onSelect:x,onSlide:N,onSlid:w,interval:y=5e3,keyboard:q=!0,onKeyDown:A,pause:j="hover",onMouseOver:L,onMouseOut:H,wrap:E=!0,touch:G=!0,onTouchStart:P,onTouchMove:_,onTouchEnd:O,prevIcon:xe=s.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:V="Previous",nextIcon:Ce=s.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Y="Next",variant:z,className:ve,children:U,...je}=Le({defaultActiveIndex:r,...n},{activeIndex:"onSelect"}),f=W(h,"carousel"),b=Ue(),R=t.useRef(null),[J,Q]=t.useState("next"),[be,I]=t.useState(!1),[g,Z]=t.useState(!1),[a,Re]=t.useState(p||0);t.useEffect(()=>{!g&&p!==a&&(R.current?Q(R.current):Q((p||0)>a?"next":"prev"),i&&Z(!0),Re(p||0))},[p,g,a,i]),t.useEffect(()=>{R.current&&(R.current=null)});let C=0,ee;Fe(U,(e,o)=>{++C,o===p&&(ee=e.props.interval)});const te=He(ee),u=t.useCallback(e=>{if(g)return;let o=a-1;if(o<0){if(!E)return;o=C-1}R.current="prev",x==null||x(o,e)},[g,a,x,E,C]),d=ce(e=>{if(g)return;let o=a+1;if(o>=C){if(!E)return;o=0}R.current="next",x==null||x(o,e)}),X=t.useRef();t.useImperativeHandle(c,()=>({element:X.current,prev:u,next:d}));const ne=ce(()=>{!document.hidden&&Ze(X.current)&&(b?u():d())}),v=J==="next"?"start":"end";We(()=>{i||(N==null||N(a,v),w==null||w(a,v))},[a]);const ge=`${f}-item-${J}`,Ne=`${f}-item-${v}`,we=t.useCallback(e=>{Pe(e),N==null||N(a,v)},[N,a,v]),ye=t.useCallback(()=>{Z(!1),w==null||w(a,v)},[w,a,v]),Ee=t.useCallback(e=>{if(q&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),b?d(e):u(e);return;case"ArrowRight":e.preventDefault(),b?u(e):d(e);return}A==null||A(e)},[q,A,u,d,b]),Se=t.useCallback(e=>{j==="hover"&&I(!0),L==null||L(e)},[j,L]),Te=t.useCallback(e=>{I(!1),H==null||H(e)},[H]),se=t.useRef(0),D=t.useRef(0),re=Ye(),ke=t.useCallback(e=>{se.current=e.touches[0].clientX,D.current=0,j==="hover"&&I(!0),P==null||P(e)},[j,P]),Ie=t.useCallback(e=>{e.touches&&e.touches.length>1?D.current=0:D.current=e.touches[0].clientX-se.current,_==null||_(e)},[_]),De=t.useCallback(e=>{if(G){const o=D.current;Math.abs(o)>Qe&&(o>0?u(e):d(e))}j==="hover"&&re.set(()=>{I(!1)},y||void 0),O==null||O(e)},[G,j,u,d,re,y,O]),oe=y!=null&&!be&&!g,F=t.useRef();t.useEffect(()=>{var e,o;if(!oe)return;const m=b?u:d;return F.current=window.setInterval(document.visibilityState?ne:m,(e=(o=te.current)!=null?o:y)!=null?e:void 0),()=>{F.current!==null&&clearInterval(F.current)}},[oe,u,d,te,y,ne,b]);const ae=t.useMemo(()=>M&&Array.from({length:C},(e,o)=>m=>{x==null||x(o,m)}),[M,C,x]);return s.jsxs(l,{ref:X,...je,onKeyDown:Ee,onMouseOver:Se,onMouseOut:Te,onTouchStart:ke,onTouchMove:Ie,onTouchEnd:De,className:k(ve,f,i&&"slide",he&&`${f}-fade`,z&&`${f}-${z}`),children:[M&&s.jsx("div",{className:`${f}-indicators`,children:le(U,(e,o)=>s.jsx("button",{type:"button","data-bs-target":"","aria-label":$!=null&&$.length?$[o]:`Slide ${o+1}`,className:o===a?"active":void 0,onClick:ae?ae[o]:void 0,"aria-current":o===a},o))}),s.jsx("div",{className:`${f}-inner`,children:le(U,(e,o)=>{const m=o===a;return i?s.jsx(_e,{in:m,onEnter:m?we:void 0,onEntered:m?ye:void 0,addEndListener:Oe,children:(S,Me)=>t.cloneElement(e,{...Me,className:k(e.props.className,m&&S!=="entered"&&ge,(S==="entered"||S==="exiting")&&"active",(S==="entering"||S==="exiting")&&Ne)})}):t.cloneElement(e,{className:k(e.props.className,m&&"active")})})}),pe&&s.jsxs(s.Fragment,{children:[(E||p!==0)&&s.jsxs(ie,{className:`${f}-control-prev`,onClick:u,children:[xe,V&&s.jsx("span",{className:"visually-hidden",children:V})]}),(E||p!==C-1)&&s.jsxs(ie,{className:`${f}-control-next`,onClick:d,children:[Ce,Y&&s.jsx("span",{className:"visually-hidden",children:Y})]})]})]})});me.displayName="Carousel";const K=Object.assign(me,{Caption:ze,Item:Je});function et(){const r=[{hero:"https://media.istockphoto.com/id/2153064964/photo/trainers-and-baseball-cap-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=yEHPhK8w_Xw3KKFYgkJfR4zNaRTU3JC_USr09iGqk2E=",Caption:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{hero:"https://media.istockphoto.com/id/2152309070/photo/pile-of-colorful-folded-t-shirts.jpg?s=1024x1024&w=is&k=20&c=edg84efqEnR38GxW9SPxbFVdTqrKXcXBkUzg0aQpSwI=",Caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{hero:"https://images.unsplash.com/photo-1529720317453-c8da503f2051?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",Caption:"  Praesent commodo cursus magna, vel scelerisque nisl consectetur."}];return s.jsx(K,{children:r.map(n=>s.jsxs(K.Item,{children:[s.jsx("img",{style:{height:"400px",width:"100%",objectFit:"cover"},src:n.hero}),s.jsx(K.Caption,{children:s.jsx("p",{children:n.Caption})})]}))})}const tt=()=>{const{data:r}=$e();return s.jsx(s.Fragment,{children:s.jsx(Xe,{className:"my-5",children:s.jsx(Ke,{children:r&&r.result.map(n=>s.jsx(Be,{sm:4,children:s.jsx(Ae,{to:`/details/${n._id}`,className:"text-decoration-none",children:s.jsxs(T,{className:"my-3",children:[s.jsx(T.Img,{src:n.hero[0],varient:"top",height:300}),s.jsxs(T.Body,{children:[s.jsx(T.Title,{children:n.name}),s.jsxs(T.Text,{children:["starting from ",n.price]})]})]})})}))})})})},dt=()=>s.jsxs(s.Fragment,{children:[s.jsx(et,{}),s.jsx(tt,{})]});export{dt as default};