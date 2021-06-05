(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return l}));var c=t(3),r=t(7),o=(t(0),t(381)),s={title:"include/sleepy_discord/websocketpp_websocket.h"},i={unversionedId:"reference/Files/websocketpp__websocket_8h",id:"reference/Files/websocketpp__websocket_8h",isDocsHomePage:!1,title:"include/sleepy_discord/websocketpp_websocket.h",description:"Namespaces",source:"@site/docs/reference/Files/websocketpp__websocket_8h.md",slug:"/reference/Files/websocketpp__websocket_8h",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__websocket_8h",version:"current",sidebar:"Reference",previous:{title:"sleepy_discord/websocketpp_websocket.cpp",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__websocket_8cpp"},next:{title:"sleepy_discord/zlib_compression.cpp",permalink:"/sleepy-discord/docs/reference/Files/zlib__compression_8cpp"}},a=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Types",id:"types",children:[]},{value:"Types Documentation",id:"types-documentation",children:[{value:"typedef _client",id:"typedef-_client",children:[]}]},{value:"Source code",id:"source-code",children:[]}],p={toc:a};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(c.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"namespaces"},"Namespaces"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(o.b)("h2",{id:"classes"},"Classes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"class"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",{parentName:"strong",href:"/docs/reference/Classes/class_sleepy_discord_1_1_websocketpp_schedule_handler"},"SleepyDiscord::WebsocketppScheduleHandler")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"class"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",{parentName:"strong",href:"/docs/reference/Classes/class_sleepy_discord_1_1_websocketpp_discord_client"},"SleepyDiscord::WebsocketppDiscordClient")))))),Object(o.b)("h2",{id:"types"},"Types"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"typedef websocketpp::client< websocketpp::config::asio_tls_client >"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",{parentName:"strong",href:"/docs/reference/Files/websocketpp__websocket_8h#typedef-_client"},"_client")))))),Object(o.b)("h2",{id:"types-documentation"},"Types Documentation"),Object(o.b)("h3",{id:"typedef-_client"},"typedef _client"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"typedef websocketpp::client<websocketpp::config::asio_tls_client> _client;\n")),Object(o.b)("h2",{id:"source-code"},"Source code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include "websocketpp_common.h"\n#ifndef NONEXISTENT_WEBSOCKETPP\n#include <chrono>\n//#include <websocketpp/config/asio_no_tls_client.hpp>\n#include <websocketpp/client.hpp>\n#include <websocketpp/common/thread.hpp>\n#include <websocketpp/common/memory.hpp>\n#include "client.h"\n#include "websocketpp_connection.h"\n#include "asio_schedule.h"\n#include "asio_udp.h"\n\ntypedef websocketpp::client<websocketpp::config::asio_tls_client> _client;\n\nnamespace SleepyDiscord {\n    //typedef GenericMessageReceiver MessageProcssor;\n\n    class WebsocketppScheduleHandler : public ASIOBasedScheduleHandler {\n    public:\n        WebsocketppScheduleHandler(_client& c) : client(c) {}\n        ~WebsocketppScheduleHandler() = default;\n        Timer schedule(TimedTask code, const time_t milliseconds) override;\n        inline websocketpp::lib::asio::io_service& getIOService() override {\n            return client.get_io_service();\n        }\n    private:\n        _client& client;\n    };\n\n    class WebsocketppDiscordClient : public BaseDiscordClient {\n    public:\n        WebsocketppDiscordClient() = default;\n        WebsocketppDiscordClient(const std::string token, const char numOfThreads = SleepyDiscord::DEFAULT_THREADS);\n        ~WebsocketppDiscordClient();\n\n        using TimerPointer = std::weak_ptr<websocketpp::lib::asio::steady_timer>;\n\n        void run() override;\n        Timer schedule(TimedTask code, const time_t milliseconds) override;\n        void postTask(PostableTask code) override {\n            asio::post(code);\n        }\n        //UDPClient createUDPClient() /* override*/;\n    protected:\n#include "standard_config_header.h"\n    private:\n        void init();\n        bool connect(const std::string & uri,\n            GenericMessageReceiver* messageProcessor,\n            WebsocketConnection& connection\n        ) override;\n        void disconnect(unsigned int code, const std::string reason, WebsocketConnection& connection) override;\n        void onClose(\n            websocketpp::connection_hdl handle,\n            GenericMessageReceiver* messageProcessor\n        );\n        void onFail(websocketpp::connection_hdl handle, GenericMessageReceiver* messageProcessor);\n        void send(std::string message, WebsocketConnection& connection) override;\n        void runAsync() override;\n        void onOpen(websocketpp::connection_hdl hdl, GenericMessageReceiver* messageProcessor);\n        void onMessage(\n            websocketpp::connection_hdl hdl,\n            websocketpp::config::asio_client::message_type::ptr msg, \n            GenericMessageReceiver* messageProcessor\n        );\n        void stopClient() override {\n            this_client.stop_perpetual();\n            this_client.stop();\n        }\n        _client this_client;\n        websocketpp::lib::shared_ptr<websocketpp::lib::thread> _thread;\n        websocketpp::connection_hdl handle;\n    };\n    typedef WebsocketppDiscordClient DiscordClient;\n}\n#else\n#ifndef BOOST_VERSION\n#undef ASIO_STANDALONE\n#undef _WEBSOCKETPP_CPP11_RANDOM_DEVICE_\n#undef _WEBSOCKETPP_CPP11_TYPE_TRAITS_\n#endif\n#endif\n')),Object(o.b)("hr",null),Object(o.b)("p",null,"Updated on  5 June 2021 at 05:54:15 UTC"))}l.isMDXComponent=!0},381:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var c=t(0),r=t.n(c);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,c,r=function(e,n){if(null==e)return{};var t,c,r={},o=Object.keys(e);for(c=0;c<o.length;c++)t=o[c],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)t=o[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),u=c,m=d["".concat(s,".").concat(u)]||d[u]||b[u]||o;return t?r.a.createElement(m,i(i({ref:n},p),{},{components:t})):r.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:c,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);