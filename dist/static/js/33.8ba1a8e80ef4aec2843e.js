webpackJsonp([33],{"3F6m":function(t,e,a){"use strict";var c=a("SIxc");e.a={name:"compare",components:{VSimpleTable:c.a},data:function(){return{checkList:[],tableDataList:[],dataColumn:[]}},methods:{pageChange:function(t){console.log(t)},getSort:function(t,e){console.log(t,e)},getList:function(){var t=this;this.ajax.get("/getTrackList").then(function(e){t.tableDataList=e,t.dataColumn=t.$getTableColumn(e,"track.tableData",{width:200})})}},created:function(){this.getList()}}},OEtF:function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"compare-overview"},[a("div",{staticClass:"title"},[t._v("\n        "+t._s(t.$t("product.page.compareDetail"))+"\n    ")]),t._v(" "),a("div",{staticClass:"btn-groups"},[a("el-button",[t._v(t._s(t.$t("product.page.createInquiry")))]),t._v(" "),a("el-button",[t._v(t._s(t.$t("product.page.createOrder")))]),t._v(" "),a("el-checkbox-group",{staticClass:"checkbox-group",model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[a("el-checkbox",{attrs:{label:t.$t("product.page.hideTheSame")}}),t._v(" "),a("el-checkbox",{attrs:{label:t.$t("product.page.highlightTheDifference")}})],1)],1),t._v(" "),a("div",[a("v-simple-table",{staticClass:"speTable",attrs:{data:t.tableDataList,column:t.dataColumn},on:{"update:data":function(e){t.tableDataList=e},"sort-change":t.getSort,"page-change":t.pageChange}})],1)])},i=[];c._withStripped=!0;var o={render:c,staticRenderFns:i};e.a=o},cEzg:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".title[data-v-a53e0106]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666}.title-btn[data-v-a53e0106]{float:right;margin-right:5px}.btn-groups[data-v-a53e0106]{margin-top:10px}.checkbox-group[data-v-a53e0106]{display:inline-block}",""])},wL5s:function(t,e,a){var c=a("cEzg");"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);a("FIqI")("571f84c8",c,!1,{})},zUE0:function(t,e,a){"use strict";function c(t){n||a("wL5s")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("3F6m"),o=a("OEtF"),n=!1,s=a("Z0/y"),r=c,l=s(i.a,o.a,!1,r,"data-v-a53e0106",null);l.options.__file="src\\views\\product\\compare\\compare.vue",e.default=l.exports}});