webpackJsonp([30],{DaaS:function(t,a,e){"use strict";e("QGvi");a.a={name:"track-bySKU",components:{VSimpleTable:VSimpleTable},data:function(){return{dataList:[],dataColumn:[]}},methods:{pageChange:function(t){console.log(t)},getSort:function(t,a){console.log(t,a)},getList:function(){var t=this;this.ajax.get("/getTrackList").then(function(a){t.dataList=a,t.dataColumn=t.$getTableColumn(a,"track.tableData",{width:200})})}},created:function(){this.getList()}}},PGYP:function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,".title[data-v-212275a0]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666}",""])},Vvb6:function(t,a,e){"use strict";function i(t){c||e("cNyO")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("DaaS"),s=e("tVg9"),c=!1,o=e("Z0/y"),r=i,l=o(n.a,s.a,!1,r,"data-v-212275a0",null);l.options.__file="src\\views\\track\\trackBySKU.vue",a.default=l.exports},cNyO:function(t,a,e){var i=e("PGYP");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("f6cd14ce",i,!1,{})},tVg9:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"track"},[e("div",{staticClass:"title"},[t._v("\n        trackBySKU\n        ")]),t._v(" "),e("div",{staticClass:"body"},[e("v-table",{attrs:{data:t.dataList}})],1)])},n=[];i._withStripped=!0;var s={render:i,staticRenderFns:n};a.a=s}});