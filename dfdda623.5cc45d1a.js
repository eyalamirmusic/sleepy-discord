(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{288:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),c=t(7),i=(t(0),t(323)),a={title:"SleepyDiscord::Invite"},o={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_invite",id:"reference/Classes/struct_sleepy_discord_1_1_invite",isDocsHomePage:!1,title:"SleepyDiscord::Invite",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_invite.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_invite",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_invite",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::Heartbeat",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_heartbeat"},next:{title:"SleepyDiscord::InviteMetadata",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_invite_metadata"}},l=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function Invite",id:"function-invite",children:[]},{value:"function Invite",id:"function-invite-1",children:[]},{value:"function Invite",id:"function-invite-2",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable code",id:"variable-code",children:[]},{value:"variable server",id:"variable-server",children:[]},{value:"variable channel",id:"variable-channel",children:[]}]}],s={toc:l};function u(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Inherits from ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(i.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(i.b)("h3",{id:"function-invite"},"function Invite"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Invite() =default\n")),Object(i.b)("h3",{id:"function-invite-1"},"function Invite"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Invite(\n    const json::Value & json\n)\n")),Object(i.b)("h3",{id:"function-invite-2"},"function Invite"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Invite(\n    const nonstd::string_view & rawJSON\n)\n")),Object(i.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::REQUIRIED_FIELD \n)\n')),Object(i.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(i.b)("h3",{id:"variable-code"},"variable code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"std::string code;\n")),Object(i.b)("h3",{id:"variable-server"},"variable server"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Server server;\n")),Object(i.b)("h3",{id:"variable-channel"},"variable channel"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Channel channel;\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on 27 July 2021 at 06:05:19 UTC"))}u.isMDXComponent=!0},323:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),c=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),u=function(e){var n=c.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},b=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return t?c.a.createElement(f,o(o({ref:n},s),{},{components:t})):c.a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<i;s++)a[s]=t[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);