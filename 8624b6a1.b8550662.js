(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),c=n(7),a=(n(0),n(321)),i={title:"include/sleepy_discord/custom_udp_client.h"},l={unversionedId:"reference/Files/custom__udp__client_8h",id:"reference/Files/custom__udp__client_8h",isDocsHomePage:!1,title:"include/sleepy_discord/custom_udp_client.h",description:"Namespaces",source:"@site/docs\\reference\\Files\\custom__udp__client_8h.md",slug:"/reference/Files/custom__udp__client_8h",permalink:"/sleepy-discord/docs/reference/Files/custom__udp__client_8h",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/custom_session.h",permalink:"/sleepy-discord/docs/reference/Files/custom__session_8h"},next:{title:"sleepy_discord/default_functions.cpp",permalink:"/sleepy-discord/docs/reference/Files/default__functions_8cpp"}},o=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Types",id:"types",children:[]},{value:"Types Documentation",id:"types-documentation",children:[{value:"typedef CustomInitUDPClient",id:"typedef-custominitudpclient",children:[]}]},{value:"Source code",id:"source-code",children:[]}],s={toc:o};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"namespaces"},"Namespaces"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(a.b)("h2",{id:"classes"},"Classes"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null}),Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"class"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Classes/class_sleepy_discord_1_1_custom_u_d_p_client"},"SleepyDiscord::CustomUDPClient")))))),Object(a.b)("h2",{id:"types"},"Types"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null}),Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"typedef GenericUDPClient ",Object(a.b)("em",{parentName:"td"},"("),"const)()"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Files/custom__udp__client_8h#typedef-custominitudpclient"},"CustomInitUDPClient")))))),Object(a.b)("h2",{id:"types-documentation"},"Types Documentation"),Object(a.b)("h3",{id:"typedef-custominitudpclient"},"typedef CustomInitUDPClient"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"typedef GenericUDPClient*(*const SleepyDiscord::CustomInitUDPClient) ();\n")),Object(a.b)("h2",{id:"source-code"},"Source code"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include<memory>\n#include "udp.h"\n\nnamespace SleepyDiscord {\n    typedef GenericUDPClient* (*const CustomInitUDPClient)();\n\n    class CustomUDPClient : public GenericUDPClient {\n    protected:\n        static CustomInitUDPClient init;\n        CustomUDPClient() : client(init()) {}\n        inline bool connect(const std::string& to, const uint16_t port) override {\n            return client->connect(to, port);\n        }\n        inline void send(\n            const uint8_t* buffer,\n            size_t bufferLength,\n            SendHandler handler = []() {}\n        ) override {\n            return client->send(buffer, bufferLength, handler);\n        }\n        inline void receive(ReceiveHandler handler) override {\n            return client->receive(handler);\n        }\n    private:\n        std::unique_ptr<GenericUDPClient> client;\n    };\n\n    typedef CustomUDPClient UDPClient;\n}\n')),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on  9 February 2021 at 07:04:58 Eastern Standard Time"))}p.isMDXComponent=!0},321:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?c.a.createElement(m,l(l({ref:t},s),{},{components:n})):c.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);