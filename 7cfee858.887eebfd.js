(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{189:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),c=(t(0),t(321)),i={title:"SleepyDiscord::EmbedThumbnail"},l={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",id:"reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",isDocsHomePage:!1,title:"SleepyDiscord::EmbedThumbnail",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs\\reference\\Classes\\struct_sleepy_discord_1_1_embed_thumbnail.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::EmbedProvider",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_provider"},next:{title:"SleepyDiscord::EmbedVideo",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_video"}},o=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function EmbedThumbnail",id:"function-embedthumbnail",children:[]},{value:"function EmbedThumbnail",id:"function-embedthumbnail-1",children:[]},{value:"function EmbedThumbnail",id:"function-embedthumbnail-2",children:[]},{value:"function empty",id:"function-empty",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable url",id:"variable-url",children:[]},{value:"variable proxyUrl",id:"variable-proxyurl",children:[]},{value:"variable height",id:"variable-height",children:[]},{value:"variable width",id:"variable-width",children:[]}]}],u={toc:o};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Inherits from ",Object(c.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-embedthumbnail"},"function EmbedThumbnail"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedThumbnail() =default\n")),Object(c.b)("h3",{id:"function-embedthumbnail-1"},"function EmbedThumbnail"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedThumbnail(\n    const json::Value & json\n)\n")),Object(c.b)("h3",{id:"function-embedthumbnail-2"},"function EmbedThumbnail"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedThumbnail(\n    const nonstd::string_view & json\n)\n")),Object(c.b)("h3",{id:"function-empty"},"function empty"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"inline bool empty() const\n")),Object(c.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD \n)\n')),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)("h3",{id:"variable-url"},"variable url"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::string url;\n")),Object(c.b)("h3",{id:"variable-proxyurl"},"variable proxyUrl"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::string proxyUrl;\n")),Object(c.b)("h3",{id:"variable-height"},"variable height"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"int64_t height = 0;\n")),Object(c.b)("h3",{id:"variable-width"},"variable width"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"int64_t width = 0;\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on  9 February 2021 at 07:04:55 Eastern Standard Time"))}b.isMDXComponent=!0},321:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),b=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=b(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=b(t),p=r,m=d["".concat(i,".").concat(p)]||d[p]||s[p]||c;return t?a.a.createElement(m,l(l({ref:n},u),{},{components:t})):a.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<c;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);