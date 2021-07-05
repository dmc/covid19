(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{496:function(t,e,n){var content=n(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("321d351a",content,!0,{sourceMap:!1})},590:function(t,e,n){"use strict";n(496)},591:function(t,e,n){var o=n(32)(!1);o.push([t.i,".InfectionMedicalCareProvisionStatus[data-v-1bbbe12b]{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:8px 18px;margin-bottom:10px}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-heading[data-v-1bbbe12b]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-heading .InfectionMedicalCareProvisionStatus-title[data-v-1bbbe12b]{display:flex;align-items:center;padding:0 0 4px;font-size:1.9rem;color:#4d4d4d;font-weight:600;font-size:1.4rem}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box[data-v-1bbbe12b]{overflow:hidden}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box .InfectionMedicalCareProvisionStatus-Headline[data-v-1bbbe12b]{float:left;text-align:center;width:10em;border:1px solid #000;margin:0 4px 1px 0;color:#707070;font-size:1.2rem}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box .InfectionMedicalCareProvisionStatus-description[data-v-1bbbe12b]{font-size:1.2rem;padding:3px 0 0;margin:0}.InfectionMedicalCareProvisionStatus .InfectionMedicalCareProvisionStatus-Box .InfectionMedicalCareProvisionStatus-description>em[data-v-1bbbe12b]{color:#008830;font-style:normal}",""]),t.exports=o},626:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(85),c=o.default.extend({components:{AppLink:r.default},computed:{statuses:function(){return this.infectionMedicalCareProvisionStatus.data},date:function(){return new Date(this.infectionMedicalCareProvisionStatus.date)},statisticDate:function(){return this.infectionMedicalCareProvisionStatus.data["検査統計日時"]},infectionMedicalCareProvisionStatus:function(){return this.$store.state.infectionMedicalCareProvisionStatus}},methods:{formatDate:function(t){return this.$d(t,"date")}}}),d=(n(590),n(14)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"InfectionMedicalCareProvisionStatus"},[n("div",{staticClass:"InfectionMedicalCareProvisionStatus-heading"},[n("h3",{staticClass:"InfectionMedicalCareProvisionStatus-title"},[t._v("\n      "+t._s(t.$t("感染状況・医療提供体制（サマリ） {date}時点",{date:t.formatDate(t.date)}))+"\n    ")])]),t._v(" "),n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Box"},[n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Headline"},[n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/hodo/saishin/hassei.html"}},[t._v("\n        "+t._s(t.$t("感染状況"))+"\n      ")])],1),t._v(" "),n("i18n",{staticClass:"InfectionMedicalCareProvisionStatus-description",attrs:{tag:"p",path:"新規陽性者{newPositiveCases}人 / 検査数{tests}件（{statisticDate}参考値 （3日間移動平均））、うち65歳以上の高齢者数{older65}人、死亡者数{deaths}人、都外からの持込検体による陽性数{samplesFromOutside}"},scopedSlots:t._u([{key:"newPositiveCases",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["新規陽性者"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"tests",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["検査数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"statisticDate",fn:function(){return[t._v("\n        "+t._s(t.formatDate(t.statisticDate))+"\n      ")]},proxy:!0},{key:"older65",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["うち65歳以上の高齢者数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"deaths",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["死亡者数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"samplesFromOutside",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["都外からの持込検体による陽性数"].toLocaleString())+"\n        ")])]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Box"},[n("div",{staticClass:"InfectionMedicalCareProvisionStatus-Headline"},[n("app-link",{attrs:{to:"https://stopcovid19.metro.tokyo.lg.jp/cards/details-of-confirmed-cases/"}},[t._v("\n        "+t._s(t.$t("医療提供体制"))+"\n      ")])],1),t._v(" "),n("i18n",{staticClass:"InfectionMedicalCareProvisionStatus-description",attrs:{tag:"p",path:"入院数{hospitalized}人（確保病床数{bedsSecured}床）、うち重症者数{severeCases}人（うち重症病床数{bedsSevereSymptoms}床）"},scopedSlots:t._u([{key:"hospitalized",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["入院数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"bedsSecured",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["確保病床数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"severeCases",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["うち重症者数"].toLocaleString())+"\n        ")])]},proxy:!0},{key:"bedsSevereSymptoms",fn:function(){return[n("em",[t._v("\n          "+t._s(t.statuses["うち重症病床数"].toLocaleString())+"\n        ")])]},proxy:!0}])})],1)])}),[],!1,null,"1bbbe12b",null);e.default=component.exports}}]);