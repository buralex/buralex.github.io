(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9666:(e,a,l)=>{Promise.resolve().then(l.t.bind(l,6587,23)),Promise.resolve().then(l.t.bind(l,7003,23)),Promise.resolve().then(l.t.bind(l,3348,23)),Promise.resolve().then(l.bind(l,2933)),Promise.resolve().then(l.t.bind(l,9954,23))},2933:(e,a,l)=>{"use strict";l.d(a,{ClientLayout:()=>f});var r=l(7437),n=l(2265);let s=()=>(0,r.jsxs)("div",{className:"mt-auto text-center",children:["Copyright \xa9 ",new Date().getFullYear()," Alex Burlachenko. All rights reserved."]});var t=l(7138);let o=n.forwardRef((e,a)=>{let{type:l="button",className:n,children:s,onClick:t,...o}=e;return(0,r.jsx)("button",{onClick:t,type:l,className:"rounded-1 btn ".concat(n),...o,ref:a,children:s})});o.displayName="Button";var i=l(6463),c=l(357);let d=e=>e.filter(Boolean).join(" ");c.env.NEXT_PUBLIC_MAIN_API_PATH;let v=e=>{let{children:a,activeClassName:l,className:n,...s}=e,o=(0,i.usePathname)();return(0,r.jsx)(t.default,{className:d([n,o===s.href&&l]),...s,children:a})},m=e=>{let{prevScrollY:a,currentScrollY:l}=e;return{scrollingUp:a>l}},h=e=>{let a=(0,n.useRef)(0),l=(0,n.useCallback)(()=>{let l=window.scrollY,{scrollingUp:r}=m({prevScrollY:a.current,currentScrollY:l});a.current=l,e({currentScrollY:l,scrollingUp:r})},[e]);(0,n.useEffect)(()=>(window.addEventListener("scroll",l,{passive:!0}),()=>{window.removeEventListener("scroll",l)}),[l])};var u=l(3643),b=l.n(u);let x="bg-transparent",p=e=>{let{currentScrollY:a}=e;return a>10?b().navbarSmall:x},N=e=>{let{collapseTopNav:a,href:l,text:n}=e;return(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(v,{activeClassName:"active",className:"nav-link text-white text-decoration-none cool-link","aria-current":"page",href:l,onClick:a,children:n})})},j=()=>{let[e,a]=(0,n.useState)(!1),[l,s]=(0,n.useState)(x),i=(0,n.useCallback)(()=>{s(p({currentScrollY:window.scrollY}))},[]),c=()=>{a(!1),i()};return h(a=>{let{currentScrollY:r,scrollingUp:n}=a,t=p({currentScrollY:r});l===b().navbarSmall&&!n&&r<=10||e&&n||s(t)}),(0,r.jsx)("nav",{className:d(["navbar navbar-expand-lg navbar-dark fixed-top",l]),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(t.default,{className:"navbar-brand ",href:"/",onClick:c,children:(0,r.jsx)("img",{src:"/images/logo/logo_new_light_min.svg",alt:"Alex Bur logo",width:"35"})}),(0,r.jsx)(o,{className:"navbar-toggler shadow-none border-0","aria-label":"Toggle navigation",onClick:()=>{a(e=>(e?i():s(b().navbarSmall),!e))},children:(0,r.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[(0,r.jsx)("div",{className:"icon-bar"}),(0,r.jsx)("div",{className:"icon-bar"}),(0,r.jsx)("div",{className:"icon-bar"})]})}),(0,r.jsx)("div",{className:d(["collapse navbar-collapse",e&&"show"]),children:(0,r.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,r.jsx)(N,{href:"/",text:"About",collapseTopNav:c}),(0,r.jsx)(N,{href:"/contact",text:"Contact",collapseTopNav:c}),(0,r.jsx)("a",{className:"nav-link text-white text-decoration-none cool-link",target:"_blank",rel:"noopener noreferrer",href:"/files/Oleksandr_Burlachenko_CV.pdf",children:"\xa0View CV"})]})})]})})};function f(e){let{children:a}=e;return(0,r.jsxs)("div",{className:"wrapper container",children:[(0,r.jsx)(j,{}),(0,r.jsx)("div",{className:"pt-5 pb-5"}),a,(0,r.jsx)("div",{className:"pt-5 pb-5"}),(0,r.jsx)(s,{})]})}},9954:()=>{},3643:e=>{e.exports={navbarSmall:"TopNavbar_navbarSmall__3s3ta"}}},e=>{var a=a=>e(e.s=a);e.O(0,[328,882,435,130,215,744],()=>a(9666)),_N_E=e.O()}]);