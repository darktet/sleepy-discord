(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{156:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return d})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),c=(r(0),r(321)),a={title:"include/sleepy_discord/standard_config_header.h"},i={unversionedId:"reference/Files/standard__config__header_8h",id:"reference/Files/standard__config__header_8h",isDocsHomePage:!1,title:"include/sleepy_discord/standard_config_header.h",description:"Functions",source:"@site/docs\\reference\\Files\\standard__config__header_8h.md",slug:"/reference/Files/standard__config__header_8h",permalink:"/sleepy-discord/docs/reference/Files/standard__config__header_8h",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/standard_config.h",permalink:"/sleepy-discord/docs/reference/Files/standard__config_8h"},next:{title:"include/sleepy_discord/timer.h",permalink:"/sleepy-discord/docs/reference/Files/timer_8h"}},d=[{value:"Functions",id:"functions",children:[]},{value:"Functions Documentation",id:"functions-documentation",children:[{value:"function onError",id:"function-onerror",children:[]},{value:"function sleep",id:"function-sleep",children:[]}]},{value:"Source code",id:"source-code",children:[]}],l={toc:d};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null}),Object(c.b)("th",{parentName:"tr",align:null},"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"virtual void"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("strong",{parentName:"td"},Object(c.b)("a",{parentName:"strong",href:"/docs/reference/Files/standard__config__header_8h#function-onerror"},"onError")),"(SleepyDiscord::ErrorCode errorCode, const std::string errorMessage) override")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"virtual void"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("strong",{parentName:"td"},Object(c.b)("a",{parentName:"strong",href:"/docs/reference/Files/standard__config__header_8h#function-sleep"},"sleep")),"(const unsigned int milliseconds) override")))),Object(c.b)("h2",{id:"functions-documentation"},"Functions Documentation"),Object(c.b)("h3",{id:"function-onerror"},"function onError"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"virtual void onError(\n    SleepyDiscord::ErrorCode errorCode,\n    const std::string errorMessage\n) override\n")),Object(c.b)("h3",{id:"function-sleep"},"function sleep"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"virtual void sleep(\n    const unsigned int milliseconds\n) override\n")),Object(c.b)("h2",{id:"source-code"},"Source code"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"#pragma once\n#ifndef SLEEPY_DO_NOT_INCLUDE_STANDARD_ONERROR\nvirtual void onError(SleepyDiscord::ErrorCode errorCode, const std::string errorMessage) override;\n#endif\n\n#ifndef SLEEPY_DO_NOT_INCLUDE_STANDARD_SLEEP\nvirtual void sleep(const unsigned int milliseconds) override;\n#endif\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on  9 February 2021 at 07:04:58 Eastern Standard Time"))}s.isMDXComponent=!0},321:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(r),b=t,f=u["".concat(a,".").concat(b)]||u[b]||p[b]||c;return r?o.a.createElement(f,i(i({ref:n},l),{},{components:r})):o.a.createElement(f,i({ref:n},l))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);