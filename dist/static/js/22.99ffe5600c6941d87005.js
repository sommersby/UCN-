webpackJsonp([22],{"84ak":function(e,t,l){var a=l("uWEm");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);l("FIqI")("53130565",a,!1,{})},MtMJ:function(e,t,l){"use strict";function a(e){n||l("84ak")}Object.defineProperty(t,"__esModule",{value:!0});var s=l("mbnc"),o=l("WYch"),n=!1,r=l("Z0/y"),i=a,c=r(s.a,o.a,!1,i,"data-v-2f36374a",null);c.options.__file="src\\views\\warehouse\\createQc.vue",t.default=c.exports},WYch:function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"createQc"},[l("div",{staticClass:"title"},[e._v("\n        "+e._s(e.$t("warehouse.page.createQCOrder"))+"\n    ")]),e._v(" "),l("div",{staticClass:"body"},[l("div",{staticClass:"section"},[l("div",{staticClass:"head"},[e._v(" "+e._s(e.$t("warehouse.page.basicInfo")))]),e._v(" "),l("div",{staticClass:"content"},[l("el-row",[l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[e._v("\n                        "+e._s(e.$t("warehouse.page.qcOrderNo"))+". : 自动生成\n                    ")]),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[e._v("\n                        "+e._s(e.$t("warehouse.page.orderDate"))+" : 来自order\n                    ")]),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:12}},[e._v("\n                        "+e._s(e.$t("warehouse.page.qcType"))+" :\n                        "),l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:12}},[e._v("\n                        "+e._s(e.$t("warehouse.page.qcDate"))+" :\n                        "),l("el-input",{staticClass:"speInput",attrs:{placeholder:"请输入内容",disabled:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:12}},[e._v("\n                        "+e._s(e.$t("warehouse.page.supplierNO"))+" : 来自order\n                    ")]),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:12}},[e._v("\n                        "+e._s(e.$t("warehouse.page.supplierName"))+" : 来自order\n                    ")]),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:12}},[e._v("\n                        "+e._s(e.$t("warehouse.page.factoryAddress"))+" :\n                        "),l("el-input",{staticClass:"speInput",attrs:{placeholder:"请输入内容"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:12}},[e._v("\n                        "+e._s(e.$t("warehouse.page.factoryContactPhone"))+" :\n                        "),l("el-input",{staticClass:"speInput",attrs:{placeholder:"请输入内容"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:12}},[e._v("\n                        "+e._s(e.$t("warehouse.page.qcStatus"))+" :\n                        "),l("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:12}},[e._v("\n                        "+e._s(e.$t("warehouse.page.qcMethod"))+" :\n                        "),l("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:12}},[e._v("\n                        "+e._s(e.$t("warehouse.page.surveyor"))+" :\n                        "),l("el-select",{attrs:{disabled:"",placeholder:"服务商用户选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:12}},[e._v("\n                        "+e._s(e.$t("warehouse.page.supplierOrderNo"))+" : 来自QC Order\n                    ")]),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:8,xl:12}},[e._v("\n                        "+e._s(e.$t("warehouse.page.serviceFee"))+" :\n                        "),l("el-input",{staticClass:"speInput",attrs:{placeholder:"服务商填写",disabled:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[e._v("\n                        "+e._s(e.$t("warehouse.page.orderNo"))+". :\n                        "),l("el-input",{staticClass:"input-with-select speInput",attrs:{placeholder:"请输入内容"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.chooseOrderNo},slot:"append"})],1)],1),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[e._v("\n                        "+e._s(e.$t("warehouse.page.serviceProviders"))+" :\n                        "),l("el-input",{staticClass:"input-with-select speInput",attrs:{placeholder:"请输入内容"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.chooseProviders},slot:"append"})],1)],1),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[e._v("\n                        "+e._s(e.$t("warehouse.page.remark"))+" :\n                        "),l("el-input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:"请输入内容"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),l("el-col",{staticClass:"list",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[e._v("\n                        "+e._s(e.$t("warehouse.page.attachment"))+" : XXXXXX\n                    ")])],1)],1)])]),e._v(" "),l("div",{staticClass:"footBtn"},[l("el-button",{attrs:{type:"primary"}},[e._v(e._s(e.$t("warehouse.page.send")))]),e._v(" "),l("el-button",{attrs:{type:"primary"}},[e._v(e._s(e.$t("warehouse.page.saveAsDraft")))])],1),e._v(" "),l("el-dialog",{attrs:{width:"80%",title:"Choose Service Providers",visible:e.serviceTableVisible},on:{"update:visible":function(t){e.serviceTableVisible=t}}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[l("el-row",[l("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[l("el-form-item",{attrs:{label:""}},[l("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("服务商")]),e._v(" "),l("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("供应商")])],1)],1),e._v(" "),l("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[l("el-form-item",{attrs:{label:"公司编号"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),l("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[l("el-form-item",{attrs:{label:"公司名称"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),l("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[l("el-form-item",{attrs:{label:"国家"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),l("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[l("el-form-item",{attrs:{label:"城市"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1)],1),e._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{prop:"type",label:"公司分类",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"id",label:"公司编号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"公司名称",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"country",label:"国家",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"city",label:"城市",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"contact",label:"联系人",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"contactPhone",label:"联系电话",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text"}},[e._v("选择")])]}}])})],1),e._v(" "),l("br"),e._v(" "),l("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),l("el-dialog",{attrs:{width:"80%",title:"Choose Order No",visible:e.orderTableVisible},on:{"update:visible":function(t){e.orderTableVisible=t}}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[l("el-row",[l("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[l("el-form-item",{attrs:{label:"合同号"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),l("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[l("el-form-item",{attrs:{label:"工厂货号"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),l("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[l("el-form-item",{attrs:{label:"客户货号"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),l("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[l("el-form-item",{attrs:{label:"合同日期"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)],1)],1),e._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{prop:"type",label:"公司分类",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"id",label:"公司编号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"公司名称",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"country",label:"国家",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"city",label:"城市",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"contact",label:"联系人",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"contactPhone",label:"联系电话",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text"}},[e._v("选择")])]}}])})],1),e._v(" "),l("br"),e._v(" "),l("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},s=[];a._withStripped=!0;var o={render:a,staticRenderFns:s};t.a=o},mbnc:function(e,t,l){"use strict";t.a={name:"create-qc",data:function(){return{servicePrice:"",remark:"",serviceProviders:"",serviceTableVisible:!1,orderTableVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:"",tableData:[{type:"甲类",id:"312515",name:"华为",country:"China",city:"成都",contact:"张三",contactPhone:"138888888888"},{type:"甲类",id:"312515",name:"华为",country:"China",city:"成都",contact:"张三",contactPhone:"138888888888"},{type:"甲类",id:"312515",name:"华为",country:"China",city:"成都",contact:"张三",contactPhone:"138888888888"}],currentPage:1,radio:"1",allowClick:!1}},methods:{chooseProviders:function(){this.serviceTableVisible=!0},chooseOrderNo:function(){this.orderTableVisible=!0},handleChange:function(){},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}}},uWEm:function(e,t,l){t=e.exports=l("UTlt")(!1),t.push([e.i,".title[data-v-2f36374a]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666;border-bottom:1px solid #e4e4e4;padding-bottom:8px}.section[data-v-2f36374a]{margin-bottom:10px}.section .important[data-v-2f36374a]{color:red}.section .head[data-v-2f36374a]{padding:10px 0;font-weight:700;font-size:14px;border-bottom:1px solid #797979;margin-bottom:5px}.section .content .list[data-v-2f36374a]{padding-left:30px;font-size:14px;line-height:2.5;border-bottom:1px dotted #e0e0e0}.section .content .noBorder[data-v-2f36374a]{border:none}.section .speInput[data-v-2f36374a]{width:auto}.section .speInput[data-v-2f36374a] .el-input__inner{text-align:left}.section .speInput[data-v-2f36374a] .el-input-group__append{padding:0}.section .speInput[data-v-2f36374a] .el-input-group__append .el-button{margin-right:0!important}.footBtn[data-v-2f36374a]{border-top:1px solid #e0e0e0;height:40px;line-height:40px;background-color:#fff;position:-webkit-sticky;position:sticky;left:0;bottom:0;width:100%}",""])}});