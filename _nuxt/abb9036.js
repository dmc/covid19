(window.webpackJsonp=window.webpackJsonp||[]).push([[37,38,57,61,64,113],{369:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("d3c7a3be",content,!0,{sourceMap:!1})},370:function(t,e,n){var content=n(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("c3e415e2",content,!0,{sourceMap:!1})},371:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("bc739952",content,!0,{sourceMap:!1})},373:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("8ce8012e",content,!0,{sourceMap:!1})},374:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("3b2f40b0",content,!0,{sourceMap:!1})},377:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(84),d=n(382),l=n(383),c=n(131),f=r.default.extend({components:{ExpantionPanel:d.default,Share:l.default,AppLink:o.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(c.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),h=(n(384),n(9)),m=n(62),v=n.n(m),y=n(915),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),t.$slots.dataTable?n("expantion-panel",{staticClass:"DataView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!==t.$route.query.embed?n("share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:y.a})},378:function(t,e,n){"use strict";n(369)},379:function(t,e,n){var r=n(30)(!1);r.push([t.i,".v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=r},380:function(t,e,n){"use strict";n(370)},381:function(t,e,n){var r=n(30)(!1);r.push([t.i,".DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;padding:8px;right:2rem;bottom:3em;width:240px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;z-index:2;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border-radius:50%;border:1px solid #eee}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-left:4px;margin-right:4px}.DataView-Share-Buttons>.Buttons button:focus{border-radius:50%;border:1px dotted #707070;outline:none}.overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff!important;font-size:1.6rem}",""]),t.exports=r},382:function(t,e,n){"use strict";n.r(e);var r=n(48),o=n(0),d=n(389),l=o.default.extend({data:function(){return{showDetails:!1,mdiChevronRight:r.e}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){d.a.$emit(d.b,{dataView:this.$parent})}}}),c=(n(378),n(9)),f=n(62),h=n.n(f),m=n(766),v=n(767),y=n(768),w=n(769),x=n(359),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon"},[n("v-icon",{attrs:{left:"",size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]),t._v(" "),n("v-expansion-panel-content",[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VExpansionPanel:m.a,VExpansionPanelContent:v.a,VExpansionPanelHeader:y.a,VExpansionPanels:w.a,VIcon:x.a})},383:function(t,e,n){"use strict";n.r(e);n(67),n(20);var r=n(48),o=n(0).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:r.f,mdiClose:r.h}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("東京都")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),d=(n(380),n(9)),l=n(62),c=n.n(l),f=n(359),h=n(770),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},r),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:f.a,VTooltip:h.a})},384:function(t,e,n){"use strict";n(371)},385:function(t,e,n){var r=n(30)(!1);r.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{justify-content:space-between;flex-flow:row;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;line-height:1.5;font-weight:400;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-top:10px;color:#707070;font-size:1.2rem}.DataView-Description ul{list-style:disc inside;padding-left:1em}.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description--Additional,.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ul{list-style-type:none;padding:0}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{margin:10px 0;padding:12px;background-color:#ffe200;border-radius:4px;color:#4d4d4d;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=r},387:function(t,e,n){"use strict";n.r(e);n(27),n(28);var r=n(23),o=n.n(r),d=n(0),l={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var t=this;return this.headers.map((function(t){return t.value})).filter((function(e){return e!==t.headerKey}))}},methods:{formatDate:function(t){var e=o()(new Date(t));return e.isValid()?this.$d(e.toDate(),"date"):t}}},c=d.default.extend(l),f=(n(395),n(9)),h=n(62),m=n.n(h),v=n(922),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e,i){return n("tr",{key:i},[n("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[t._v("\n          "+t._s(t.formatDate(e[t.headerKey]))+"\n        ")]),t._v(" "),t._l(t.dataKeys,(function(r,o){return n("td",{key:o,staticClass:"text-end"},[t._v("\n          "+t._s(e[r])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);e.default=component.exports;m()(component,{VDataTable:v.a})},388:function(t,e,n){"use strict";n.r(e);n(67);var r=n(391),o={props:{displayData:{type:Object,required:!0},isWeekly:{type:Boolean,required:!1,default:!1}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var n=(t-38)/(this.isWeekly?24:60)*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),r.a.$on(r.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),r.a.$off(r.b)}},d=(n(397),n(9)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[n("div",{ref:"scrollable",staticClass:"scrollable"},[n("div",{style:{width:t.chartWidth+"px"}},[t._t("chart",null,{chartWidth:t.chartWidth})],2)]),t._v(" "),t._t("sticky-chart")],2)}),[],!1,null,"e1639c50",null);e.default=component.exports},389:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_DETAILS"},390:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return v}));var r={strokeColor:"#5a8055",fillColor:"#1b4d30"},o={strokeColor:"#5a8055",fillColor:"#00a040"},d={strokeColor:"#5a8055",fillColor:"#c5e2c6"},l={strokeColor:"#1b4d30",fillColor:"#cbe1c8"},c={strokeColor:"#cc7004",fillColor:"#cc7004"},f={strokeColor:"#1b4d30",fillColor:"#1b4d30"},h={strokeColor:"#5a8055",fillColor:"#e2eee2"};function m(t){switch(t){case 1:return[o];case 2:return[r,d];case 4:return[r,o,d,h];default:return[r,o,d]}}function v(t){return{A:r,B:o,C:d,D:l,E:c,F:f,G:h}[t]}},391:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_TAB"},395:function(t,e,n){"use strict";n(373)},396:function(t,e,n){var r=n(30)(!1);r.push([t.i,".cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),t.exports=r},397:function(t,e,n){"use strict";n(374)},398:function(t,e,n){var r=n(30)(!1);r.push([t.i,".LegendStickyChart[data-v-e1639c50]{margin:16px 0;position:relative;overflow:hidden}.LegendStickyChart .scrollable[data-v-e1639c50]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-e1639c50]{position:absolute;top:0;pointer-events:none;width:100%}",""]),t.exports=r},403:function(t,e,n){"use strict";var r=n(1);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var d={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},d=e.value,l="object"===Object(r.a)(d)?d:{handler:d,options:{}},c=l.handler,f=l.options,h=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(t._observe){var d=e.some((function(t){return t.isIntersecting}));!c||n.quiet&&!t._observe.init||n.once&&!d&&t._observe.init||c(e,r,d),d&&n.once?o(t):t._observe.init=!0}}),f);t._observe={init:!1,observer:h},h.observe(t)}},unbind:o};e.a=d},407:function(t,e,n){"use strict";n(92);var r=n(18),o=n(0);e.a=o.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.e)(this.height),n=Object(r.e)(this.minHeight),o=Object(r.e)(this.minWidth),d=Object(r.e)(this.maxHeight),l=Object(r.e)(this.maxWidth),c=Object(r.e)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),d&&(t.maxHeight=d),l&&(t.maxWidth=l),c&&(t.width=c),t}}})},408:function(t,e,n){"use strict";n(21),n(27),n(32),n(36);var r=n(6),o=(n(92),n(25),n(34),n(63),n(251),n(16),n(33),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(37),n(44),n(15),n(68),n(266),n(0)),d=n(168),l=n(18);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],m=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=h.reduce((function(t,e){return t["offset"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(m),offset:Object.keys(v),order:Object.keys(y)};function x(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var _=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var c in n)l+=String(n[c]);var f=_.get(l);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var r=n[t],o=x(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),_.set(l,f)}(),t(n.tag,Object(d.a)(data,{class:f}),o)}})},438:function(t,e,n){var content=n(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("294e6f2d",content,!0,{sourceMap:!1})},527:function(t,e,n){"use strict";var r=n(438),o=n.n(r);n.d(e,"default",(function(){return o.a}))},528:function(t,e,n){var r=n(30)(!1);r.push([t.i,".GraphLegend_2AAvF{text-align:center;list-style:none;padding:0!important}.GraphLegend_2AAvF li{display:inline-block;margin:0 3px}.GraphLegend_2AAvF li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_2AAvF li button{color:#707070;font-size:1.2rem}",""]),r.locals={GraphLegend:"GraphLegend_2AAvF"},t.exports=r},565:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(108),d=(n(28),n(20),n(92),n(265),n(39),n(0)),l=n(84),c=n(377),f=n(387),h=n(388),m=n(132),v=n(390),y={created:function(){this.canvas=!0},components:{DataView:c.default,DataViewTable:f.default,AppLink:l.default,ScrollableChart:h.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartData:Object,chartOption:Object,chartId:{type:String,default:"metro-bar-chart"},date:{type:String,required:!0},items:{type:Array,default:function(){return[]}},periods:{type:Array,default:function(){return[]}},unit:{type:String,required:!1,default:"%"},tooltipsTitle:{type:Function,required:!0},tooltipsLabel:{type:Function,required:!0}},data:function(){return{colors:Object(v.b)(3),canvas:!0,yAxesBgPlugin:m.b,displayLegends:[!0,!0,!0]}},computed:{displayData:function(){var t=this,e=this.chartData.labels.map((function(label,i){return{label:label,data:t.chartData.datasets.map((function(t){return t.data[i]})),backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor,borderWidth:1}}));return{labels:this.chartData.datasets.map((function(t){return t.label})),datasets:e}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(o.a)(this.chartData.labels.map((function(text,t){return{text:text,value:String(t),align:"end"}}))))},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign.apply(Object,[{text:t.periods[i]}].concat(Object(o.a)(t.chartData.labels.map((function(e,n){return Object(r.a)({},n,t.displayData.datasets[n].data[i])})))))})).reverse()},displayOption:function(){var t=this,e={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"period",position:"bottom",stacked:!1,gridLines:{display:!0},ticks:{fontSize:10,maxTicksLimit:20,fontColor:"#808080",callback:function(e,i){return t.periods[i]}}},{id:"year",stacked:!1,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"year",displayFormats:{year:"YYYY"}}}],yAxes:[{stacked:!1,gridLines:{display:!0},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",callback:function(e){var n="number"==typeof e?e:Number(e);return"".concat(n.toFixed(2)).concat(t.unit)}}}]},tooltips:{displayColors:!1,callbacks:{title:this.tooltipsTitle,label:this.tooltipsLabel}}};return"true"===this.$route.query.ogp&&Object.assign(e,{animation:{duration:0}}),e},displayDataHeader:function(){var t=this,e=this.chartData.labels.map((function(label,i){return{label:label,data:t.chartData.datasets.map((function(t){return t.data[i]})),backgroundColor:"transparent",borderWidth:0}}));return{labels:this.chartData.datasets.map((function(t){return t.label})),datasets:e}},displayOptionHeader:function(){var t=this;return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"period",position:"bottom",stacked:!1,gridLines:{display:!1},ticks:{fontSize:10,maxTicksLimit:20,fontColor:"transparent",callback:function(e,i){return t.periods[i]}}},{id:"year",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"year"}}],yAxes:[{stacked:!1,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",callback:function(e){var n="number"==typeof e?e:Number(e);return"".concat(n.toFixed(2)).concat(t.unit)}}}]},animation:{duration:0}}}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},w=d.default.extend(y),x=n(527),_=n(9);var component=Object(_.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"footer",fn:function(){return[n("ul",[n("li",[n("app-link",{attrs:{to:"https://smooth-biz.metro.tokyo.lg.jp/pdf/202004date3.pdf"}},[t._v("\n          "+t._s(t.$t("鉄道利用者数の推移（新宿、東京、渋谷、各駅エリア）[PDF]"))+"\n        ")])],1),t._v(" "),n("li",[n("app-link",{attrs:{to:"https://corona.go.jp/"}},[t._v("\n          "+t._s(t.$t("主要駅の改札通過人数の推移（東京、新宿、渋谷、池袋ほか）[内閣官房HP]（ページ下部）"))+"\n        ")])],1)])]},proxy:!0}],null,!0)},[n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.items,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor,width:"20px"}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v("\n          "+t._s(e)+"\n        ")])])])})),0),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData,"is-weekly":!0},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:280,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,"display-legends":t.displayLegends,plugins:t.yAxesBgPlugin,height:280}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=x.default.locals||x.default}),null,null);e.default=component.exports},602:function(t){t.exports=JSON.parse('{"date":"2021/6/4 11:00","datasets":[{"period":{"begin":"2020-02-10","end":"2020-02-14"},"data":[-0.96,-2.94,-7.48]},{"period":{"begin":"2020-02-17","end":"2020-02-21"},"data":[-0.36,-4.11,-6.95]},{"period":{"begin":"2020-02-25","end":"2020-02-28"},"data":[3.06,-9.47,-7.31]},{"period":{"begin":"2020-03-02","end":"2020-03-06"},"data":[0.47,-22.36,-10.16]},{"period":{"begin":"2020-03-09","end":"2020-03-13"},"data":[-1.22,-24.87,-12.05]},{"period":{"begin":"2020-03-16","end":"2020-03-19"},"data":[-1.36,-23.98,-11.22]},{"period":{"begin":"2020-03-23","end":"2020-03-27"},"data":[-4.28,-26.27,-14.34]},{"period":{"begin":"2020-03-30","end":"2020-04-03"},"data":[-9.93,-34.5,-30.62]},{"period":{"begin":"2020-04-06","end":"2020-04-10"},"data":[-17.64,-48.24,-47.14]},{"period":{"begin":"2020-04-13","end":"2020-04-17"},"data":[-40.76,-65.48,-65.5]},{"period":{"begin":"2020-04-20","end":"2020-04-24"},"data":[-45.75,-68.56,-68]},{"period":{"begin":"2020-04-27","end":"2020-05-01"},"data":[-49.4,-69.72,-68.69]},{"period":{"begin":"2020-05-07","end":"2020-05-08"},"data":[-40.03,-63.86,-64.14]},{"period":{"begin":"2020-05-11","end":"2020-05-15"},"data":[-40.86,-65.13,-64.24]},{"period":{"begin":"2020-05-18","end":"2020-05-22"},"data":[-39.1,-63.61,-62.23]},{"period":{"begin":"2020-05-25","end":"2020-05-29"},"data":[-33.04,-59.24,-56.87]},{"period":{"begin":"2020-06-01","end":"2020-06-05"},"data":[-15.77,-44.64,-40.93]},{"period":{"begin":"2020-06-08","end":"2020-06-12"},"data":[-15.27,-43.72,-38.08]},{"period":{"begin":"2020-06-15","end":"2020-06-19"},"data":[-12.64,-40.34,-36.04]},{"period":{"begin":"2020-06-22","end":"2020-06-26"},"data":[-11.13,-36.99,-33.83]},{"period":{"begin":"2020-06-29","end":"2020-07-03"},"data":[-7.09,-32.38,-32.72]},{"period":{"begin":"2020-07-06","end":"2020-07-10"},"data":[-7.56,-31.77,-32.2]},{"period":{"begin":"2020-07-13","end":"2020-07-17"},"data":[-8.19,-32.89,-32.93]},{"period":{"begin":"2020-07-20","end":"2020-07-22"},"data":[-6.29,-33.01,-33.75]},{"period":{"begin":"2020-07-27","end":"2020-07-31"},"data":[-9.57,-36.11,-36.64]},{"period":{"begin":"2020-08-03","end":"2020-08-07"},"data":[-13.29,-38.77,-35.86]},{"period":{"begin":"2020-08-11","end":"2020-08-14"},"data":[-43.39,-59.12,-51.5]},{"period":{"begin":"2020-08-17","end":"2020-08-21"},"data":[-17.15,-41.42,-37.98]},{"period":{"begin":"2020-08-24","end":"2020-08-28"},"data":[-12.11,-36.91,-35.71]},{"period":{"begin":"2020-08-31","end":"2020-09-04"},"data":[-8.52,-33.73,-35.03]},{"period":{"begin":"2020-09-07","end":"2020-09-11"},"data":[-8.21,-33.43,-34.75]},{"period":{"begin":"2020-09-14","end":"2020-09-18"},"data":[-7.62,-33.28,-33.55]},{"period":{"begin":"2020-09-23","end":"2020-09-25"},"data":[-6.92,-32.06,-33.5]},{"period":{"begin":"2020-09-28","end":"2020-10-02"},"data":[-7.29,-31.37,-32.4]},{"period":{"begin":"2020-10-05","end":"2020-10-09"},"data":[-7.34,-29.49,-31.48]},{"period":{"begin":"2020-10-12","end":"2020-10-16"},"data":[-8.03,-30.57,-32.01]},{"period":{"begin":"2020-10-19","end":"2020-10-23"},"data":[-8.17,-30.46,-31.49]},{"period":{"begin":"2020-10-26","end":"2020-10-30"},"data":[-8.28,-30.35,-31.36]},{"period":{"begin":"2020-11-02","end":"2020-11-06"},"data":[-8.34,-28.47,-30.79]},{"period":{"begin":"2020-11-09","end":"2020-11-13"},"data":[-8.98,-28.98,-30.1]},{"period":{"begin":"2020-11-16","end":"2020-11-20"},"data":[-9.64,-29.71,-30.91]},{"period":{"begin":"2020-11-24","end":"2020-11-27"},"data":[-9.4,-29.19,-30.31]},{"period":{"begin":"2020-11-30","end":"2020-12-04"},"data":[-10.78,-29.8,-31.52]},{"period":{"begin":"2020-12-07","end":"2020-12-11"},"data":[-12.18,-30.89,-31.13]},{"period":{"begin":"2020-12-14","end":"2020-12-18"},"data":[-14.23,-32.88,-30.34]},{"period":{"begin":"2020-12-21","end":"2020-12-25"},"data":[-17.18,-34.48,-30.84]},{"period":{"begin":"2020-12-28","end":"2020-12-28"},"data":[-39.81,-53.55,-48.64]},{"period":{"begin":"2021-01-04","end":"2021-01-08"},"data":[-27.35,-43.19,-44.32]},{"period":{"begin":"2021-01-12","end":"2021-01-15"},"data":[-22.53,-41.9,-42.68]},{"period":{"begin":"2021-01-18","end":"2021-01-22"},"data":[-24.11,-44.06,-43.33]},{"period":{"begin":"2021-01-25","end":"2021-01-29"},"data":[-23.43,-43.49,-43.35]},{"period":{"begin":"2021-02-01","end":"2021-02-05"},"data":[-21.55,-42.19,-42.03]},{"period":{"begin":"2021-02-08","end":"2021-02-12"},"data":[-20.83,-41.1,-39.35]},{"period":{"begin":"2021-02-15","end":"2021-02-19"},"data":[-20.44,-40.34,-39.56]},{"period":{"begin":"2021-02-22","end":"2021-02-26"},"data":[-18.98,-39.54,-38.69]},{"period":{"begin":"2021-03-01","end":"2021-03-05"},"data":[-18.62,-38.45,-37.85]},{"period":{"begin":"2021-03-08","end":"2021-03-12"},"data":[-19.55,-39.31,-36.76]},{"period":{"begin":"2021-03-15","end":"2021-03-19"},"data":[-20.69,-40.9,-36.55]},{"period":{"begin":"2021-03-22","end":"2021-03-26"},"data":[-19.13,-38.33,-33.36]},{"period":{"begin":"2021-03-29","end":"2021-04-02"},"data":[-17.14,-35.02,-33.47]},{"period":{"begin":"2021-04-05","end":"2021-04-09"},"data":[-13.18,-31.01,-33.47]},{"period":{"begin":"2021-04-12","end":"2021-04-16"},"data":[-10.02,-28.16,-33.35]},{"period":{"begin":"2021-04-19","end":"2021-04-23"},"data":[-9.89,-29.19,-33.18]},{"period":{"begin":"2021-04-26","end":"2021-04-30"},"data":[-16.01,-36.27,-40.9]},{"period":{"begin":"2021-05-06","end":"2021-05-07"},"data":[-16.63,-37.11,-44.17]},{"period":{"begin":"2021-05-10","end":"2021-05-14"},"data":[-13.19,-34.06,-40.65]},{"period":{"begin":"2021-05-17","end":"2021-05-21"},"data":[-13.77,-34.47,-39.3]},{"period":{"begin":"2021-05-24","end":"2021-05-28"},"data":[-13.06,-34.22,-38.68]},{"period":{"begin":"2021-05-31","end":"2021-06-03"},"data":[-11.67,-33.11,-38.33]}],"labels":["6:30~7:30","7:30~9:30","9:30~10:30"],"base_period":"2020/1/20~2020/1/24"}')},684:function(t,e,n){"use strict";n.r(e);n(25),n(21),n(27),n(32),n(15),n(36);var r=n(6),o=(n(28),n(20),n(23)),d=n.n(o),l=n(565),c=n(602);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{Chart:l.default},data:function(){var t=this,e=c.datasets.map((function(t){return h(h({},t),{},{label:t.period.begin})})),n=c.datasets.map((function(e){return t.getWeekLabel(e.period.begin,e.period.end)})),r=h(h({},c),{},{datasets:e,periods:n});return{metroGraph:r,metroGraphTooltipTitle:function(e,n){var o=r.periods[e[0].index];return t.$t("期間: {duration}",{duration:o})},metroGraphTooltipLabel:function(e,data){var n=data.datasets[e.datasetIndex],o="".concat(n.data[e.index],"%");return t.$t("{duration}の利用者数との相対値: {percentage}",{duration:t.$t(r.base_period),percentage:o})}}},methods:{getWeekLabel:function(t,e){var n=this.$d(d()(t).toDate(),"dateWithoutYear"),r=this.$d(d()(e).toDate(),"dateWithoutYear");return"".concat(n,"~").concat(r)}}},v=n(9),y=n(62),w=n.n(y),x=n(408),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MetroCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("chart",{attrs:{title:t.$t("都営地下鉄の利用者数の推移"),"title-id":"predicted-number-of-toei-subway-passengers","chart-id":"metro-bar-chart","chart-data":t.metroGraph,date:t.metroGraph.date,items:t.metroGraph.labels,periods:t.metroGraph.periods,"tooltips-title":t.metroGraphTooltipTitle,"tooltips-label":t.metroGraphTooltipLabel,unit:"%"},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[t._v("\n        "+t._s(t.$t("{range}の利用者数*の平均値を基準としたときの相対値",{range:t.metroGraph.base_period}))+"\n        "),n("br"),t._v("\n        *"+t._s(t.$t("都営地下鉄4路線の自動改札出場数"))+"\n        "),n("br"),t._v("\n        "+t._s(t.$t("（注）速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n      ")]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VCol:x.a})}}]);