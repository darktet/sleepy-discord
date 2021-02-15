(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{242:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return s})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return o}));var t=n(3),a=n(7),c=(n(0),n(321)),s={title:"SleepyDiscord::ServerMembersRequest"},i={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_server_members_request",id:"reference/Classes/struct_sleepy_discord_1_1_server_members_request",isDocsHomePage:!1,title:"SleepyDiscord::ServerMembersRequest",description:"Public Functions Documentation",source:"@site/docs\\reference\\Classes\\struct_sleepy_discord_1_1_server_members_request.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_server_members_request",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_server_members_request",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::ServerMembersChunk",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_server_members_chunk"},next:{title:"SleepyDiscord::Snowflake",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_snowflake"}},l=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ServerMembersRequest",id:"function-servermembersrequest",children:[]},{value:"function ServerMembersRequest",id:"function-servermembersrequest-1",children:[]},{value:"function ServerMembersRequest",id:"function-servermembersrequest-2",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable serverID",id:"variable-serverid",children:[]},{value:"variable query",id:"variable-query",children:[]},{value:"variable limit",id:"variable-limit",children:[]},{value:"variable presence",id:"variable-presence",children:[]},{value:"variable userIDs",id:"variable-userids",children:[]},{value:"variable nonce",id:"variable-nonce",children:[]}]}],u={toc:l};function o(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-servermembersrequest"},"function ServerMembersRequest"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ServerMembersRequest() =default\n")),Object(c.b)("h3",{id:"function-servermembersrequest-1"},"function ServerMembersRequest"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ServerMembersRequest(\n    const json::Value & json\n)\n")),Object(c.b)("h3",{id:"function-servermembersrequest-2"},"function ServerMembersRequest"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ServerMembersRequest(\n    const nonstd::string_view & json\n)\n")),Object(c.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD \n)\n')),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)("h3",{id:"variable-serverid"},"variable serverID"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Server > serverID;\n")),Object(c.b)("h3",{id:"variable-query"},"variable query"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::string query;\n")),Object(c.b)("h3",{id:"variable-limit"},"variable limit"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"int limit;\n")),Object(c.b)("h3",{id:"variable-presence"},"variable presence"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"bool presence;\n")),Object(c.b)("h3",{id:"variable-userids"},"variable userIDs"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::vector< Snowflake< User > > userIDs;\n")),Object(c.b)("h3",{id:"variable-nonce"},"variable nonce"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::string nonce;\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on  9 February 2021 at 07:04:56 Eastern Standard Time"))}o.isMDXComponent=!0},321:function(e,r,n){"use strict";n.d(r,"a",(function(){return b})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),o=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},b=function(e){var r=o(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=o(n),d=t,m=b["".concat(s,".").concat(d)]||b[d]||p[d]||c;return n?a.a.createElement(m,i(i({ref:r},u),{},{components:n})):a.a.createElement(m,i({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,s=new Array(c);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var u=2;u<c;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);