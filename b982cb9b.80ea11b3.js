(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{246:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),c=t(7),o=(t(0),t(321)),a={title:"SleepyDiscord::json::BaseEnumTypeHelper"},s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1json_1_1_base_enum_type_helper",id:"reference/Classes/struct_sleepy_discord_1_1json_1_1_base_enum_type_helper",isDocsHomePage:!1,title:"SleepyDiscord::json::BaseEnumTypeHelper",description:"More...",source:"@site/docs\\reference\\Classes\\struct_sleepy_discord_1_1json_1_1_base_enum_type_helper.md",slug:"/reference/Classes/struct_sleepy_discord_1_1json_1_1_base_enum_type_helper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_base_enum_type_helper",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::json::ArrayWrapper< Value, Base >",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_array_wrapper_3_01_value_00_01_base_01_4"},next:{title:"SleepyDiscord::json::ClassTypeHelper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper"}},i=[{value:"Detailed Description",id:"detailed-description",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function toType",id:"function-totype",children:[]},{value:"function fromType",id:"function-fromtype",children:[]},{value:"function empty",id:"function-empty",children:[]}]}],p={toc:i};function l(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null," ",Object(o.b)("a",{parentName:"p",href:"#detailed-description"},"More...")),Object(o.b)("h2",{id:"detailed-description"},"Detailed Description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"template <class Type ,\nclass GetDefault ,\nclass BaseType >\nstruct SleepyDiscord::json::BaseEnumTypeHelper;\n")),Object(o.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(o.b)("h3",{id:"function-totype"},"function toType"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"static inline Type toType(\n    const Value & value\n)\n")),Object(o.b)("h3",{id:"function-fromtype"},"function fromType"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"static inline Value fromType(\n    const Type & value\n)\n")),Object(o.b)("h3",{id:"function-empty"},"function empty"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"static inline bool empty(\n    const Type & value\n)\n")),Object(o.b)("hr",null),Object(o.b)("p",null,"Updated on  9 February 2021 at 07:04:57 Eastern Standard Time"))}l.isMDXComponent=!0},321:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),l=function(e){var n=c.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return c.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},y=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),y=r,f=u["".concat(a,".").concat(y)]||u[y]||d[y]||o;return t?c.a.createElement(f,s(s({ref:n},p),{},{components:t})):c.a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=y;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);