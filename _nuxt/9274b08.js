(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{374:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("3b2f40b0",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";n.r(e);n(67);var r=n(391),o={props:{displayData:{type:Object,required:!0},isWeekly:{type:Boolean,required:!1,default:!1}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var n=(t-38)/(this.isWeekly?24:60)*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),r.a.$on(r.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),r.a.$off(r.b)}},c=(n(397),n(9)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[n("div",{ref:"scrollable",staticClass:"scrollable"},[n("div",{style:{width:t.chartWidth+"px"}},[t._t("chart",null,{chartWidth:t.chartWidth})],2)]),t._v(" "),t._t("sticky-chart")],2)}),[],!1,null,"e1639c50",null);e.default=component.exports},391:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_TAB"},397:function(t,e,n){"use strict";n(374)},398:function(t,e,n){var r=n(30)(!1);r.push([t.i,".LegendStickyChart[data-v-e1639c50]{margin:16px 0;position:relative;overflow:hidden}.LegendStickyChart .scrollable[data-v-e1639c50]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-e1639c50]{position:absolute;top:0;pointer-events:none;width:100%}",""]),t.exports=r}}]);