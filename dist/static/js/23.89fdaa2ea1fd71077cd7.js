webpackJsonp([23],{DaaS:function(t,a,e){"use strict";var n=e("SIxc");a.a={name:"track-bySKU",components:{VSimpleTable:n.a},data:function(){return{dataList:[],dataColumn:[]}},methods:{pageChange:function(t){console.log(t)},getSort:function(t,a){console.log(t,a)},getList:function(){var t=this;this.ajax.get("/getTrackList").then(function(a){t.dataList=a,t.dataColumn=t.$getTableColumn(a,"track.tableData",{width:200})})}},created:function(){this.getList()}}},PGYP:function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,".title[data-v-212275a0]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666}",""])},Vvb6:function(t,a,e){"use strict";function n(t){c||e("cNyO")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("DaaS"),s=e("tVg9"),c=!1,o=e("Z0/y"),r=n,l=o(i.a,s.a,!1,r,"data-v-212275a0",null);l.options.__file="src\\views\\track\\trackBySKU.vue",a.default=l.exports},cNyO:function(t,a,e){var n=e("PGYP");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("FIqI")("f6cd14ce",n,!1,{})},tVg9:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"track"},[e("div",{staticClass:"title"},[t._v("\n        "+t._s(t.$t("track.page.trackBySKU"))+"\n    ")]),t._v(" "),e("div",{staticClass:"body"},[e("v-simple-table",{staticClass:"speTable",attrs:{data:t.dataList,column:t.dataColumn},on:{"update:data":function(a){t.dataList=a},"sort-change":t.getSort,"page-change":t.pageChange}})],1)])},i=[];n._withStripped=!0;var s={render:n,staticRenderFns:i};a.a=s}});