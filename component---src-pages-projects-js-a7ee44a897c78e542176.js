(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(162),i=a(169),l=a(167);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Projects"}),r.a.createElement("h1",null,"Projects"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(c.a,{to:"/"},"Go back to the homepage"))}},162:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),c=a(5),i=a.n(c),l=a(40),o=a.n(l);a.d(t,"a",function(){return o.a});a(163);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&c(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||c,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},163:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Alexandr Burlachenko"}}}}},165:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),l=a(64),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},166:function(e,t,a){e.exports=a.p+"static/logo-3cd21be2c021513bc7ca474aa8a6ac0c.svg"},167:function(e,t,a){"use strict";var n=a(168),r=a(0),c=a.n(r),i=a(5),l=a.n(i),o=a(170),s=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,o=t||l.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:o}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Alexandr Burlachenko",description:"Personal page.",author:"@alexandr"}}}}},169:function(e,t,a){"use strict";var n=a(164),r=a(0),c=a.n(r),i=a(5),l=a.n(i),o=a(162),s=a(166),u=a.n(s),m=(a(157),function(e){e.siteTitle;return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"max-width"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:u.a,width:"35",height:"35",alt:"logo"})),c.a.createElement("ul",{className:"navbar "},c.a.createElement("li",null,c.a.createElement(o.a,{to:"/",activeClassName:"active"},"About")),c.a.createElement("li",null,c.a.createElement(o.a,{to:"/projects",activeClassName:"active"},"Projects")),c.a.createElement("li",null,c.a.createElement(o.a,{to:"/contact",activeClassName:"active"},"Contact")))))});m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var d=m,p=function(){return c.a.createElement("div",{className:"frame"},c.a.createElement("div",{className:"frame--top"}),c.a.createElement("div",{className:"frame--right"}),c.a.createElement("div",{className:"frame--bottom"}),c.a.createElement("div",{className:"frame--left"}))},f=function(e){var t=e.children;return c.a.createElement(o.b,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),c.a.createElement(p,null),c.a.createElement("div",{className:"content"},c.a.createElement("main",{className:"content"},t)),c.a.createElement("footer",{className:"footer"},(new Date).getFullYear(),", Built by Alexandr"))},data:n})};f.propTypes={children:l.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-projects-js-a7ee44a897c78e542176.js.map