(function(t){function e(e){for(var a,o,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0ae0":function(t,e,n){"use strict";n("d3ed")},"2a4e":function(t,e,n){t.exports=n.p+"img/header_logo.1f5a3884.png"},4218:function(t,e,n){},5500:function(t,e,n){"use strict";n("4218")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",{attrs:{id:"app-main"}},[n("v-container",[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}})],1)},i=[],o={name:"App",components:{},data:function(){return{}}},c=o,s=(n("034f"),n("2877")),l=n("6544"),u=n.n(l),d=n("7496"),p=n("a523"),m=n("553a"),g=n("f6c4"),f=Object(s["a"])(c,r,i,!1,null,null,null),v=f.exports;u()(f,{VApp:d["a"],VContainer:p["a"],VFooter:m["a"],VMain:g["a"]});var A=n("9483");Object(A["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available: Please refresh."),window.location.reload(!0)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var b=n("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("div",{staticClass:"app-container"},[a("header",{staticClass:"header"},[a("h1",{staticClass:"header__brand-logo"},[a("img",{staticClass:"respons",attrs:{src:n("2a4e"),alt:"음식 흥신소"}})]),a("article",{staticClass:"header__slogan"},[a("h2",{staticClass:"a11y-hidden"},[t._v("사이트 소개")]),a("p",[t._v("전국 프렌차이즈 메뉴 중 "),a("br"),t._v(" 지금 끌리는 메뉴를 찾아드립니다.")])])]),a("Menu")],1),a("div",{staticClass:"footer-container"},[a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__brand-logo"},[a("img",{attrs:{src:n("80b0"),alt:"음식 흥신소"}})]),a("address",{staticClass:"footer__address"},[a("span",[a("b",[t._v("GITHUB : ")]),t._v("github.com/DunDung")]),a("span",{staticClass:"address__divider",attrs:{"aria-hidden":"true"}},[t._v("ㅣ")]),a("span",[t._v("github.com/iamkjw77")])]),a("small",{staticClass:"footer__copyright"},[t._v("© 2021 FOOD HEUNGSINSO COMPANY. ALL RIGHTS RESERVED.")])])])])},j=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("h2",[t._v("먹고 싶은 음식의 종류를 선택해주세요!")]),n("ul",{staticClass:"main__menu-list reset-list"},t._l(t.menus,(function(e,a){return n("li",{key:a,staticClass:"menu-list__item"},[n("a",{attrs:{href:""}},[n("figure",[n("div",{staticClass:"item__img-wrapper"},[n("img",{class:e.class,attrs:{src:e.imagePath}})]),n("figcaption",[t._v(t._s(e.name))])])])])})),0)])},w=[],C={data:function(){return{menus:[{imagePath:n("f814"),name:"치킨",class:"chicken"},{imagePath:n("7237"),name:"피자",class:"pizza"}]}},components:{}},Y=C,Z=(n("0ae0"),Object(s["a"])(Y,I,w,!1,null,"165a2dd4",null)),N=Z.exports,E={data:function(){return{}},components:{Menu:N}},O=E,B=(n("5500"),Object(s["a"])(O,h,j,!1,null,"35568ed2",null)),S=B.exports;u()(B,{VMain:g["a"]});var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[n("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}},[n("v-spacer"),n("v-icon",[t._v("mdi-window-minimize")]),n("v-icon",[t._v("mdi-window-maximize")]),n("v-icon",[t._v("mdi-close")])],1),n("v-toolbar",{attrs:{color:"indigo",dark:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[t._v("Discover")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1)],1),n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return n("v-col",{key:e.title,attrs:{cols:e.flex}},[n("v-card",[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[n("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-bookmark")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)})),1)],1)],1)},M=[],U={data:function(){return{cards:[{title:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:12},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6}]}}},y=U,D=n("5bc1"),k=n("8336"),x=n("b0af"),z=n("99d9"),P=n("62ad"),Q=n("132d"),F=n("adda"),V=n("0fd9"),R=n("2fa4"),J=n("afd9"),T=n("71d9"),L=n("2a7f"),H=Object(s["a"])(y,G,M,!1,null,null,null),W=H.exports;u()(H,{VAppBarNavIcon:D["a"],VBtn:k["a"],VCard:x["a"],VCardActions:z["a"],VCardTitle:z["b"],VCol:P["a"],VContainer:p["a"],VIcon:Q["a"],VImg:F["a"],VRow:V["a"],VSpacer:R["a"],VSystemBar:J["a"],VToolbar:T["a"],VToolbarTitle:L["a"]}),a["a"].use(b["a"]);var K=[{path:"/",name:"Home",component:S},{path:"/recommend",name:"Recommend",component:W}],X=new b["a"]({mode:"history",base:"/",routes:K}),_=X,q=n("2f62");a["a"].use(q["a"]);var $=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),tt=n("f309");a["a"].use(tt["a"]);var et=new tt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:_,store:$,vuetify:et,render:function(t){return t(v)}}).$mount("#app")},7237:function(t,e,n){t.exports=n.p+"img/pizza.5f742b34.png"},"80b0":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyCAYAAAAZUZThAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyY2Q3YmY2Mi1mZmQ2LTEwNGUtYTM1NS1lY2QwN2JiMzdhYmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTIxRTQ0QzI0RUEzMTFFQkE1RDNEMUY4QUM4M0E2MjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTIxRTQ0QzE0RUEzMTFFQkE1RDNEMUY4QUM4M0E2MjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgyMWUzMTctOTFlYS03MjRiLWFiMzQtMTc3YjAyNWVlNGVlIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJjZDdiZjYyLWZmZDYtMTA0ZS1hMzU1LWVjZDA3YmIzN2FiZiIvPiA8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"},"85ec":function(t,e,n){},d3ed:function(t,e,n){},f814:function(t,e,n){t.exports=n.p+"img/chicken.a395aad4.png"}});
//# sourceMappingURL=app.8914895d.js.map