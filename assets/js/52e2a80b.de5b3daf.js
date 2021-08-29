(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[12],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9288:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={},s=void 0,c={unversionedId:"readme",id:"readme",isDocsHomePage:!1,title:"readme",description:"Dashy Docs",source:"@site/docs/readme.md",sourceDirName:".",slug:"/readme",permalink:"/docs/readme",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/readme.md",version:"current",frontMatter:{}},u=[{value:"Running Dashy",id:"running-dashy",children:[]},{value:"Development and Contributing",id:"development-and-contributing",children:[]},{value:"Feature Docs",id:"feature-docs",children:[]},{value:"Misc",id:"misc",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.ibb.co/4mdNf7M/heading-docs.png",alt:"Dashy Docs"})),(0,o.kt)("h3",{id:"running-dashy"},"Running Dashy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/quick-start"},"Quick Start")," - TDLR guide on getting Dashy up and running"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/deployment"},"Deployment")," - Full guide on deploying Dashy either locally or online"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/configuring"},"Configuring")," - Complete list of all available options in the config file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/management"},"App Management")," - Managing your app, updating, security, web server configuration, etc"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/troubleshooting"},"Troubleshooting")," - Common errors and problems, and how to fix them")),(0,o.kt)("h3",{id:"development-and-contributing"},"Development and Contributing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developing"},"Developing")," - Running Dashy development server locally, and general workflow"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development-guides"},"Development Guides")," - Common development tasks, to help new contributors"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/contributing"},"Contributing")," - How you can help keep Dashy alive"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/showcase"},"Showcase")," - See how others are using Dashy, and share your dashboard"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/credits"},"Credits")," - List of people and projects that have made Dashy possible")),(0,o.kt)("h3",{id:"feature-docs"},"Feature Docs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/authentication"},"Authentication")," - Guide to setting up authentication to protect your dashboard"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/alternate-views"},"Alternate Views")," - Outline of available pages / views and item opening methods"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/backup-restore"},"Backup & Restore")," - Guide to Dashy's cloud sync feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/icons"},"Icons")," - Outline of all available icon types for sections and items"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/multi-language-support"},"Language Switching")," - Details on how to switch language, or add a new locale"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/status-indicators"},"Status Indicators")," - Using Dashy to monitor uptime and status of your apps"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/searching"},"Searching  & Shortcuts")," - Finding and launching your apps, and using keyboard shortcuts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/theming"},"Theming")," - Complete guide to applying, writing and modifying themes and styles")),(0,o.kt)("h3",{id:"misc"},"Misc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/privacy"},"Privacy & Security")," - List of requests, potential issues, and security resources"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/license"},"License")," - Copy of the MIT License"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Lissy93/dashy/blob/master/.github/LEGAL.md"},"Legal")," - Licenses of direct dependencies"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/code-of-conduct"},"Code of Conduct")," - Contributor Covenant Code of Conduct"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/changelog"},"Changelog")," - Details of recent changes, and historical versions")))}d.isMDXComponent=!0}}]);