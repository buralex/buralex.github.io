(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{195:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(199),s=(a(203),a(213),a(206));t.default=function(){return i.a.createElement("div",null,i.a.createElement(s.a,{title:"Home"}),i.a.createElement("h1",null,"About"),i.a.createElement("p",null,"I am a developer."),i.a.createElement(n.a,{to:"/contact/"},"Go to contact"))}},199:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var r=a(0),i=a.n(r),n=a(66),s=a.n(n);a.d(t,"a",function(){return s.a});a(200),a(9).default.enqueue;var o=i.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,r=e.query,n=e.render,s=a?a.data:t[r]&&t[r].data;return i.a.createElement(i.a.Fragment,null,s&&n(s),!s&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,r=e.render,n=e.children;return i.a.createElement(o.Consumer,null,function(e){return i.a.createElement(d,{data:t,query:a,render:r||n,staticQueryData:e})})}},200:function(e,t,a){var r;e.exports=(r=a(205))&&r.default||r},201:function(e,t,a){"use strict";a(199);var r=a(0),i=a.n(r),n=(a(202),a(208),a(192),function(e){e.siteTitle;return i.a.createElement("header",{className:"masthead bg-primary text-white text-center"},i.a.createElement("div",{className:"container d-flex align-items-center flex-column"},i.a.createElement("img",{className:"masthead-avatar mb-5",src:"img/avataaars.svg",alt:""}),i.a.createElement("h1",{className:"masthead-heading text-uppercase mb-0"},"Start Bootstrap"),i.a.createElement("div",{className:"divider-custom divider-light"},i.a.createElement("div",{className:"divider-custom-line"}),i.a.createElement("div",{className:"divider-custom-icon"},i.a.createElement("i",{className:"fas fa-star"})),i.a.createElement("div",{className:"divider-custom-line"})),i.a.createElement("p",{className:"masthead-subheading font-weight-light mb-0"},"Graphic Artist - Web Designer - Illustrator")))});n.defaultProps={siteTitle:""},t.a=n},202:function(e,t,a){e.exports=a.p+"static/logo-3cd21be2c021513bc7ca474aa8a6ac0c.svg"},203:function(e,t,a){"use strict";a(204);var r=a(0),i=a.n(r);a(199),a(201);t.a=i.a.memo(function(e){var t=e.children;return console.log("RENDER_LAYOUT"),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container-fluid"},t))})},204:function(e){e.exports={data:{site:{siteMetadata:{title:"Alexandr Burlachenko"}}}}},205:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),i=a.n(r),n=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},206:function(e,t,a){"use strict";var r=a(207),i=a(0),n=a.n(i),s=a(209),o=a.n(s);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,d=r.data.site,l=t||d.siteMetadata.description;return n.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(i)})}d.defaultProps={lang:"en",meta:[],description:""},t.a=d},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Alexandr Burlachenko",description:"Personal page.",author:"@alexandr"}}}}},213:function(e,t,a){"use strict";a(214),a(0),a(199),a(215)},214:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},215:function(e,t,a){"use strict";a(29),a(30),a(13),a(95),a(135),a(216);var r=a(15);t.__esModule=!0,t.default=void 0;var i,n=r(a(72)),s=r(a(73)),o=r(a(138)),d=r(a(139)),l=r(a(0)),c=r(a(50)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function S(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=l.default.createElement(N,(0,d.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),n):n},N=l.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,L=e.loading,I=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,d.default)({opacity:z?1:0,transition:O?"opacity "+b+"ms":"none"},o),V="boolean"==typeof h?"lightgray":h,T={transitionDelay:b+"ms"},C=(0,d.default)({opacity:this.state.imgLoaded?0:1},O&&T,o,f),q={title:t,alt:this.state.isVisible?"":a,style:C,className:g};if(p){var M=p,W=M[0];return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),V&&l.default.createElement(v,{title:t,style:(0,d.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&T)}),W.base64&&l.default.createElement(R,{src:W.base64,spreadProps:q,imageVariants:M,generateSources:w}),W.tracedSVG&&l.default.createElement(R,{src:W.tracedSVG,spreadProps:q,imageVariants:M,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,y(M),l.default.createElement(N,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:L,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,d.default)({alt:a,title:t,loading:L},W,{imageVariants:M}))}}))}if(m){var P=m,j=P[0],k=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete k.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},V&&l.default.createElement(v,{title:t,style:(0,d.default)({backgroundColor:V,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},O&&T)}),j.base64&&l.default.createElement(R,{src:j.base64,spreadProps:q,imageVariants:P,generateSources:w}),j.tracedSVG&&l.default.createElement(R,{src:j.tracedSVG,spreadProps:q,imageVariants:P,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,y(P),l.default.createElement(N,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:L,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,d.default)({alt:a,title:t,loading:L},j,{imageVariants:P}))}}))}return null},t}(l.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:O,sizes:x,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=z;t.default=V},216:function(e,t,a){"use strict";a(217)("fixed",function(e){return function(){return e(this,"tt","","")}})},217:function(e,t,a){var r=a(1),i=a(7),n=a(32),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-old-js-af66f9a95fe0aba66524.js.map