(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(169),c=a(167);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},162:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(5),c=a.n(i),l=a(40),o=a.n(l);a.d(t,"a",function(){return o.a});a(163);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},163:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Alexandr Burlachenko"}}}}},165:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),i=a(5),c=a.n(i),l=a(64),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},166:function(e,t,a){e.exports=a.p+"static/logo-3cd21be2c021513bc7ca474aa8a6ac0c.svg"},167:function(e,t,a){"use strict";var n=a(168),r=a(0),i=a.n(r),c=a(5),l=a.n(c),o=a(170),s=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,l=n.data.site,o=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Alexandr Burlachenko",description:"Personal page.",author:"@alexandr"}}}}},169:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),c=a(5),l=a.n(c),o=a(162),s=a(166),u=a.n(s),d=(a(157),function(e){e.siteTitle;return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:u.a,width:"35",height:"35",alt:"logo"})),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.a,{to:"/",activeClassName:"active"},"About")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/projects",activeClassName:"active"},"Projects")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/contact",activeClassName:"active"},"Contact"))))});d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var m=d,p=function(e){var t=e.children;return i.a.createElement(o.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"content"},i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t)),i.a.createElement("footer",null,(new Date).getFullYear(),", Built by Alexandr"))},data:n})};p.propTypes={children:l.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-d19b7c6592c466939ea2.js.map