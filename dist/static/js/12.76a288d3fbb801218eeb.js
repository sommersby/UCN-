webpackJsonp([12],{"++DM":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bookmark"},[a("div",{staticClass:"title"},[a("span",[e._v(e._s(e.title))]),e._v(" "),a("el-button",{staticClass:"title-btn",attrs:{type:"text"},on:{click:e.switchDisplay}},[e._v(e._s(e.btnInfo)+"\n        ")])],1),e._v(" "),a("div",[a("el-form",{ref:"productFormTop",attrs:{model:e.productForm,rules:e.productFormRules,"label-width":"190px"}},[a("el-row",{staticClass:"speZone"},e._l(e.$db.product.buyerBasic,function(t){return t.isDefaultShow&&"sellerProductOverview"===t.belongPage?a("el-col",{key:t.key,attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:t.key,label:t.label}},["dropdown"===t.showType?a("drop-down",{ref:"dropDown",refInFor:!0,attrs:{list:e.dropData,defaultProps:e.defaultProps,expandOnClickNode:!1},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}}):e._e(),e._v(" "),"input"===t.showType?a("el-input",{attrs:{size:"mini"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}}):e._e(),e._v(" "),"select"===t.showType?a("el-select",{staticClass:"speSelect",attrs:{size:"mini",placeholder:"不限"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}},e._l(t.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})):e._e()],1)],1):e._e()}))],1)],1),e._v(" "),a("div",{staticClass:"body",class:{hide:e.hideBody}},[a("el-form",{ref:"productForm",attrs:{rule:e.productFormRules,model:e.productForm,"label-width":"190px"}},[a("el-row",{staticClass:"speZone"},e._l(e.$db.product.buyerBasic,function(t){return t.isDefaultShow||"sellerProductOverview"!==t.belongPage?e._e():a("el-col",{key:t.key,attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:t.key,label:t.label}},["dropdown"===t.showType?a("drop-down",{ref:"dropDown",refInFor:!0,attrs:{list:e.dropData,"expand-on-click-node":!1}}):e._e(),e._v(" "),"input"===t.showType?a("el-input",{attrs:{size:"mini"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}}):e._e(),e._v(" "),"select"===t.showType?a("el-select",{staticClass:"speSelect",attrs:{size:"mini",placeholder:"请选择"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}},e._l(t.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})):e._e(),e._v(" "),"exwNumber"===t.showType?a("div",{staticClass:"section-number"},[a("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:e.productForm.minExwPrice,callback:function(t){e.$set(e.productForm,"minExwPrice",t)},expression:"productForm.minExwPrice"}}),e._v(" "),a("div",{staticClass:"section-line"},[e._v("--")]),e._v(" "),a("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:e.productForm.maxExwPrice,callback:function(t){e.$set(e.productForm,"maxExwPrice",t)},expression:"productForm.maxExwPrice"}})],1):e._e(),e._v(" "),"fobNumber"===t.showType?a("div",{staticClass:"section-number"},[a("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:e.productForm.minFobPrice,callback:function(t){e.$set(e.productForm,"minFobPrice",t)},expression:"productForm.minFobPrice"}}),e._v(" "),a("div",{staticClass:"section-line"},[e._v("--")]),e._v(" "),a("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:e.productForm.maxFobPrice,callback:function(t){e.$set(e.productForm,"maxFobPrice",t)},expression:"productForm.maxFobPrice"}})],1):e._e(),e._v(" "),"number"===t.showType?a("el-input",{attrs:{size:"mini"},model:{value:e.productForm[t.key],callback:function(a){e.$set(e.productForm,t.key,a)},expression:"productForm[v.key]"}}):e._e()],1)],1)}))],1)],1),e._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{attrs:{loading:e.disabledSearch,type:"primary"},on:{click:e.search}},[e._v(e._s(e.$i._product.search))]),e._v(" "),a("el-button",{attrs:{type:"info",plain:""},on:{click:e.clear}},[e._v(e._s(e.$i._product.clear))])],1),e._v(" "),a("div",{staticClass:"footer"},[a("v-table",{attrs:{data:e.tableDataList,buttons:"recycle"===e.type?[]:[{label:"Detail",type:1}]},on:{"change-checked":e.changeChecked,action:e.btnClick}},[a("template",{slot:"header"},[e.hideBtn?e._e():a("div",{staticClass:"btns"},[a("el-button",{on:{click:e.createInquiry}},[e._v(e._s(e.$i._product.createInquiry))]),e._v(" "),a("el-button",[e._v(e._s(e.$i._product.createOrder))]),e._v(" "),a("el-button",{attrs:{disabled:e.disabledCompare},on:{click:e.compareProducts}},[e._v(e._s(e.$i._product.compare))]),e._v(" "),a("el-button",{attrs:{loading:e.disableClickAddBookmark,disabled:e.disabledAddBookmark},on:{click:e.addToBookmark}},[e._v(e._s(e.$i._product.addToBookmark))]),e._v(" "),a("el-button",{attrs:{disabled:e.disabledDownload}},[e._v(e._s(e.$i._product.download+"("+e.downloadBtnInfo+")"))])],1),e._v(" "),"recycle"===e.type?a("div",{staticClass:"btns"},[a("el-button",{attrs:{disabled:e.disabledRecover,loading:e.disabledClickRecover,type:"primary"},on:{click:e.recover}},[e._v(e._s(e.$i._product.recover))]),e._v(" "),a("el-button",[e._v(e._s(e.$i._product.download+"("+e.downloadRecycleListInfo+")"))])],1):e._e()])],2),e._v(" "),e.hideBtn&&"recycle"!==e.type?a("div",{staticClass:"footer-btn"},[a("el-button",{attrs:{loading:e.disabledOkBtn,type:"primary"},on:{click:e.postData}},[e._v("OK")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("Cancel")])],1):e._e()],1)])},o=[];i._withStripped=!0;var s={render:i,staticRenderFns:o};t.a=s},"1nbe":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-number"},[a("el-form-item",{attrs:{label:e.$t("product.page.exwPrice")}},[a("el-input-number",{staticClass:"numberInput",attrs:{min:0,controls:!1},model:{value:e.data.max,callback:function(t){e.$set(e.data,"max",t)},expression:"data.max"}})],1)],1)},o=[];i._withStripped=!0;var s={render:i,staticRenderFns:o};t.a=s},"3F6m":function(e,t,a){"use strict";(function(e){var i=a("a3Yh"),o=a.n(i),s=a("QGvi"),r=a("4zFU");t.a={name:"compare",components:{VTable:s.a,product:r.a},data:function(){return{forceUpdateNumber:1,compareName:"",screenTableStatus:[],tableDataList:[],addProductTitle:"哇哈哈",totalDataList:[],disabledLine:[],selectList:[],disabledOrderList:[],isModify:!1,hasLoading:!1,addProductDialogVisible:!1,dialogFormVisible:!1,addProductTabName:"1",loadingTable:!1,disabledSaveCompare:!1,disableDelete:!0,allowDeleteCompare:!0,allowBottomClick:!0,disableClickCancel:!1,disableClickSaveModify:!1,isChangeData:!1}},methods:o()({getList:function(){var e=this;if("new"===this.$route.params.type){var t=[];this.$route.query.id.split(",").forEach(function(e){t.push(Number(e))});var a=new Date;this.compareName=this.$dateFormat(a,"yyyymmdd")+Date.parse(a),this.$ajax.post(this.$apis.get_skuListByIds,t).then(function(t){e.tableDataList=e.$getDB(e.$db.product.indexTable,t,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),e.hasLoading=!0,e.disabledLine=e.tableDataList}).catch(function(e){})}else if("modify"===this.$route.params.type){this.compareName=this.$route.query.compareName,this.$route.query.isModify&&(this.isModify=!0);var i={id:Number(this.$route.query.compareId),pn:1,ps:100,recycle:!1};this.$ajax.post(this.$apis.get_buyerProductCompareDetail,i).then(function(t){e.tableDataList=e.$getDB(e.$db.product.indexTable,t.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),e.hasLoading=!0,e.disabledLine=e.tableDataList,e.allowDeleteCompare=!1,e.allowBottomClick=!1}).catch(function(e){})}},btnClick:function(e){var t=void 0;"new"===this.$route.params.type?t=e.id.value:"modify"===this.$route.params.type&&(t=e.skuId.value),e.bookmarkId.value?this.$windowOpen({url:"/product/bookmarkDetail",params:{id:t}}):this.$windowOpen({url:"/product/sourcingDetail",params:{id:t}})},changeChecked:function(e){this.selectList=e},modifyCompare:function(){this.isModify=!0},cancelModify:function(){var e=this;this.disableClickCancel=!0,this.loadingTable=!0,this.compareName=this.$route.query.compareName;var t={id:Number(this.$route.query.compareId),pn:1,ps:100,recycle:!1};this.$ajax.post(this.$apis.get_buyerProductCompareDetail,t).then(function(t){e.tableDataList=e.$getDB(e.$db.product.indexTable,t.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),e.hasLoading=!0,e.disabledLine=e.tableDataList,e.allowDeleteCompare=!1,e.allowBottomClick=!1,e.isModify=!1,e.disableClickCancel=!1,e.loadingTable=!1}).catch(function(t){e.disableClickCancel=!1,e.loadingTable=!1})},createOrder:function(){var e=this;this.disabledOrderList=[],this.selectList.forEach(function(t){t.customerCreate.value&&e.disabledOrderList.push(t)}),this.disabledOrderList.length>0&&(console.log(this.disabledOrderList),this.dialogFormVisible=!0)},addNewProduct:function(){this.addProductDialogVisible=!0,this.forceUpdateNumber=Math.random()},deleteProduct:function(){var t=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.selectList.forEach(function(a){var i=e.findWhere(a,{key:"id"}).value;t.tableDataList.forEach(function(a){var o=e.findWhere(a,{key:"id"}).value;i===o&&(t.$set(a,"_disabled",!0),t.$set(a,"_checked",!1))})}),t.$message({type:"success",message:"删除成功!"}),t.$nextTick(function(){t.disableDelete=!0,t.disabledLine=[],t.selectList=[],t.tableDataList.forEach(function(e){e._disabled||t.disabledLine.push(e)})})}).catch(function(){})},handleOkClick:function(e){var t=this,a=0;if(this.tableDataList.forEach(function(e){e._disabled||a++}),a+e.length>100)this.$message({message:"警告哦，这是一条警告消息",type:"warning"});else if(console.log(e,"抛出的数据"),"new"===this.$route.params.type){var i=[];this.tableDataList.forEach(function(e){i.push(e.id.value)}),e.forEach(function(e){i.push(e)}),this.loadingTable=!0,this.$ajax.post(this.$apis.get_skuListByIds,i).then(function(e){t.tableDataList=t.$getDB(t.$db.product.indexTable,e,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),t.hasLoading=!0,t.disabledLine=t.tableDataList,t.loadingTable=!1}).catch(function(e){t.loadingTable=!1})}else if("modify"===this.$route.params.type){console.log(this.tableDataList,"table");var o=[];this.tableDataList.forEach(function(e){e._disabled||(t.isChangeData?o.push(e.id.value):o.push(e.skuId.value))}),e.forEach(function(e){o.push(e)}),this.loadingTable=!0,this.$ajax.post(this.$apis.get_skuListByIds,o).then(function(e){t.tableDataList=t.$getDB(t.$db.product.indexTable,e,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e.skuId.value=e.id.value,e}),t.hasLoading=!0,t.isChangeData=!0,t.disabledLine=t.tableDataList,t.loadingTable=!1}).catch(function(e){t.loadingTable=!1}),console.log(o,"ids")}this.addProductDialogVisible=!1},handleCancel:function(){this.addProductDialogVisible=!1},saveCompare:function(){var t=this;if(!this.compareName)return void this.$message({message:"Please Input Compare Name",type:"warning"});this.disabledSaveCompare=!0;var a={compares:[],name:this.compareName};console.log(this.tableDataList,"this.tableDataList"),this.tableDataList.forEach(function(t){var i=void 0,o=void 0;i=t.speProduct&&e.findWhere(t,{key:"skuId"}).value?e.findWhere(t,{key:"skuId"}).value:e.findWhere(t,{key:"id"}).value,o=e.findWhere(t,{key:"nameEn"}).value,a.compares.push({id:i,name:o})}),this.$ajax.post(this.$apis.add_buyerProductCompare,a).then(function(e){var a=e;t.$router.push({name:"productCompareDetail",params:{type:"modify"},query:{compareId:a,compareName:t.compareName}}),t.disabledSaveCompare=!1}).catch(function(e){t.disabledSaveCompare=!1})},deleteCompare:function(){var e=this;this.$confirm("确认删除该compare?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.disabledSaveCompare=!0;var t=[];t.push(Number(e.$route.query.compareId)),e.$ajax.post(e.$apis.delete_buyerProductCompare,t).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.disabledSaveCompare=!1,e.$router.push("/product/compare")}).catch(function(t){e.disabledSaveCompare=!1})}).catch(function(){})},saveModify:function(){var e=this;this.disableClickSaveModify=!0;var t={compares:[],id:Number(this.$route.query.compareId),name:this.compareName};this.tableDataList.forEach(function(a){if(!a._disabled){var i="";i=e.isChangeData?a.id.value:a.skuId.value,t.compares.push({id:i,name:a.nameEn.value})}}),this.$ajax.post(this.$apis.update_buyerProductCompare,t).then(function(t){e.$router.push({name:"productCompareDetail",params:{type:"modify"},query:{compareId:e.$route.query.compareId,compareName:e.compareName,forceChange:Math.random().toFixed(3)}}),e.disableClickSaveModify=!1}).catch(function(t){e.disableClickSaveModify=!1})},handleClick:function(e){var t=this;e.isActive=!e.isActive,this.keylist.forEach(function(e){e.isActive&&t.selectList.push(e)})}},"handleClick",function(){}),created:function(){this.getList()},watch:{selectList:function(e){var t=0;this.tableDataList.forEach(function(e){e._disabled||t++}),e.length>0&&t-e.length>=2?this.disableDelete=!1:this.disableDelete=!0}}}}).call(t,a("u47Y"))},"4zFU":function(e,t,a){"use strict";function i(e){r||a("MsKt")}var o=a("l+5M"),s=a("++DM"),r=!1,n=a("Z0/y"),l=i,d=n(o.a,s.a,!1,l,"data-v-6ce2534f",null);d.options.__file="src\\views\\product\\addProduct.vue",t.a=d.exports},Cldd:function(e,t,a){"use strict";function i(e){r||a("n5EH")}var o=a("TD7D"),s=a("1nbe"),r=!1,n=a("Z0/y"),l=i,d=n(o.a,s.a,!1,l,"data-v-5ae062dd",null);d.options.__file="src\\views\\product\\sectionNumber.vue",t.a=d.exports},MsKt:function(e,t,a){var i=a("O6u8");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("97954d92",i,!1,{})},O6u8:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".bookmark[data-v-6ce2534f]{padding-right:20px}.title[data-v-6ce2534f]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666}.title-btn[data-v-6ce2534f]{float:right;margin-right:5px}.head-list label[data-v-6ce2534f]{width:190px;display:inline-block;height:42px;line-height:42px;text-align:right;font-size:14px;color:#606266;padding:0 12px 0 0;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.head-list .content[data-v-6ce2534f]{margin-left:190px;height:42px}.head-list .content[data-v-6ce2534f] input{height:42px}.section-number .section-input[data-v-6ce2534f]{float:left;width:40%}.section-number .section-line[data-v-6ce2534f]{float:left}.outGroup .label[data-v-6ce2534f]{width:190px;float:left}.body[data-v-6ce2534f]{overflow:hidden;max-height:320px;display:block;-webkit-transition:max-height .5s cubic-bezier(.445,.05,.55,.95);transition:max-height .5s cubic-bezier(.445,.05,.55,.95)}.body .numberInput[data-v-6ce2534f]{width:80px;text-align:left}.body .numberInput[data-v-6ce2534f] input{padding:0}.hide[data-v-6ce2534f]{max-height:0}.form-spelist[data-v-6ce2534f]{margin-bottom:10px!important}.form-spelist[data-v-6ce2534f] .ivu-form-item-content{line-height:normal}.form-list[data-v-6ce2534f]{margin-bottom:10px}.speSelect[data-v-6ce2534f]{width:100%}.btn-group[data-v-6ce2534f]{text-align:center;margin-top:10px;padding-bottom:15px;border-bottom:1px solid #e0e0e0}.btn-group .search[data-v-6ce2534f]{margin-right:30px}.footer .btns[data-v-6ce2534f]{padding:10px 0}.footer-btn[data-v-6ce2534f]{text-align:center}",""])},OEtF:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"compare-overview"},[a("div",{staticClass:"title"},[a("span",[e._v(e._s(e.$i._product.compareDetail))])]),e._v(" "),a("div",{staticClass:"name"},[a("span",[e._v("Compare Name")]),e._v(" "),a("el-input",{staticClass:"compare-name",attrs:{disabled:"modify"===e.$route.params.type&&!e.isModify,size:"mini",placeholder:"please input"},model:{value:e.compareName,callback:function(t){e.compareName=t},expression:"compareName"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasLoading,expression:"hasLoading"}],staticClass:"btns"},["new"===e.$route.params.type?a("span",[a("el-button",[e._v(e._s(e.$i._product.createInquiry))]),e._v(" "),a("el-button",{on:{click:e.createOrder}},[e._v(e._s(e.$i._product.createOrder))]),e._v(" "),a("el-button",{on:{click:e.addNewProduct}},[e._v(e._s(e.$i._product.addNew))]),e._v(" "),a("el-button",{attrs:{disabled:e.disableDelete,type:"danger"},on:{click:e.deleteProduct}},[e._v(e._s(e.$i._product.delete))])],1):e._e(),e._v(" "),"modify"===e.$route.params.type?a("span",[e.isModify?e._e():a("el-button",[e._v(e._s(e.$i._product.createInquiry))]),e._v(" "),e.isModify?e._e():a("el-button",{on:{click:e.createOrder}},[e._v(e._s(e.$i._product.createOrder))]),e._v(" "),e.isModify?e._e():a("el-button",{on:{click:e.modifyCompare}},[e._v("Modify")]),e._v(" "),e.isModify?a("el-button",{on:{click:e.addNewProduct}},[e._v(e._s(e.$i._product.addNew))]):e._e(),e._v(" "),e.isModify?a("el-button",{attrs:{disabled:e.disableDelete,type:"danger"},on:{click:e.deleteProduct}},[e._v(e._s(e.$i._product.delete))]):e._e()],1):e._e(),e._v(" "),a("el-checkbox-group",{staticClass:"compare-checkbox",model:{value:e.screenTableStatus,callback:function(t){e.screenTableStatus=t},expression:"screenTableStatus"}},[a("el-checkbox",{attrs:{label:"1"}},[e._v(e._s(e.$i._product.hideTheSame))]),e._v(" "),a("el-checkbox",{attrs:{label:"2"}},[e._v(e._s(e.$i._product.highlightTheDifferent))])],1)],1),e._v(" "),a("v-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingTable,expression:"loadingTable"}],attrs:{data:e.tableDataList,buttons:[{label:"Detail",type:1}]},on:{action:e.btnClick,"change-checked":e.changeChecked}}),e._v(" "),a("div",{staticClass:"footBtn"},["new"===e.$route.params.type?a("div",[a("el-button",{attrs:{loading:e.disabledSaveCompare,type:"primary"},on:{click:e.saveCompare}},[e._v(e._s(e.$i._product.saveTheCompare))])],1):e._e(),e._v(" "),"modify"===e.$route.params.type?a("div",[e.isModify?e._e():a("el-button",{attrs:{loading:e.disabledSaveCompare,disabled:e.allowDeleteCompare,type:"danger"},on:{click:e.deleteCompare}},[e._v(e._s(e.$i._product.deleteTheCompare))]),e._v(" "),e.isModify?a("el-button",{attrs:{loading:e.disableClickSaveModify,disabled:e.allowBottomClick,type:"primary"},on:{click:e.saveModify}},[e._v("Save")]):e._e(),e._v(" "),e.isModify?a("el-button",{attrs:{disabled:e.allowBottomClick,loading:e.disableClickCancel},on:{click:e.cancelModify}},[e._v("Cancel")]):e._e()],1):e._e()]),e._v(" "),a("el-dialog",{attrs:{title:"Add Product",visible:e.addProductDialogVisible,width:"80%"},on:{"update:visible":function(t){e.addProductDialogVisible=t}}},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.addProductTabName,callback:function(t){e.addProductTabName=t},expression:"addProductTabName"}},[a("el-tab-pane",{attrs:{label:"Add From Product",name:"1"}},[a("product",{attrs:{isInModify:"modify"===e.$route.params.type,disabledOkBtn:!1,hideBtn:!0,disabledLine:e.disabledLine,forceUpdateNumber:e.forceUpdateNumber},on:{handleOK:e.handleOkClick,handleCancel:e.handleCancel}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"Add From Bookmark",name:"2"}},[a("product",{attrs:{isInModify:"modify"===e.$route.params.type,disabledOkBtn:!1,hideBtn:!0,type:"bookmark",disabledLine:e.disabledLine,forceUpdateNumber:e.forceUpdateNumber},on:{handleOK:e.handleOkClick,handleCancel:e.handleCancel}})],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"以下商品不能添加order",visible:e.dialogFormVisible,width:"50%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.disabledOrderList,border:""}},[a("el-table-column",{attrs:{label:"#",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.$index+1)+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$i._product.skuNameEn,width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.nameEn.value)+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$i._product.skuCode},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.code.value)+"\n                ")]}}])})],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1)],1)},o=[];i._withStripped=!0;var s={render:i,staticRenderFns:o};t.a=s},TD7D:function(e,t,a){"use strict";t.a={name:"section-number",props:{data:{type:Object,default:{}}},data:function(){return{}},methods:{}}},Wu4X:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"",""])},cEzg:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".title[data-v-a53e0106]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666}.name[data-v-a53e0106]{padding:15px 0}.name span[data-v-a53e0106]{font-size:14px}.compare-name[data-v-a53e0106]{display:inline-block;width:250px;margin-left:10px}.compare-checkbox[data-v-a53e0106]{display:inline-block}.footBtn[data-v-a53e0106]{margin-top:10px;border-top:1px solid #e0e0e0;height:40px;line-height:40px;background-color:#fff;position:-webkit-sticky;position:sticky;left:0;bottom:0;width:100%}",""])},"l+5M":function(e,t,a){"use strict";(function(e){var i=a("QGvi"),o=a("bGai"),s=a("Cldd");t.a={name:"overview",components:{dropDown:o.d,sectionNumber:s.a,VTable:i.a},props:{title:{type:String,default:""},type:{type:String,default:"product"},hideBtn:{type:Boolean,default:!1},disabledLine:{type:Array,default:function(){return[]}},disabledOkBtn:{type:Boolean,default:!1},forceUpdateNumber:{type:Number,default:0},isInModify:{type:Boolean,default:!1},isInquiry:{type:Boolean,default:!1}},data:function(){return{hideBody:!0,btnInfo:this.$i._product.advanced,disabledSearch:!1,selectList:[],downloadBtnInfo:"0",downloadRecycleListInfo:"all",disabledAddBookmark:!0,disabledCompare:!0,disabledDownload:!0,disabledRecover:!0,disabledClickRecover:!1,disableClickAddBookmark:!1,productForm:{categoryId:null,nameCnLike:"",readilyAvailable:null,customerSkuCodeLike:"",minExwPrice:"",maxExwPrice:"",codeLike:"",nameEnLike:"",minFobPrice:"",maxFobPrice:"",materialEnLike:"",country:null,supplierNameLike:"",outerCartonMethodEnLike:"",methodPkgEnLike:"",deliveryDates:null,descEnLike:"",descCnLike:"",pn:1,ps:50,recycle:!1},productFormRules:{nameCn:[{max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}]},dropData:[],defaultProps:{label:"name",children:"children"},tableDataList:[],dataColumn:[]}},methods:{switchDisplay:function(){this.hideBody=!this.hideBody},clear:function(){this.$refs.productFormTop.resetFields(),this.$refs.productForm.resetFields(),this.$set(this.productForm,"categoryId",null),this.$set(this.productForm,"minExwPrice",null),this.$set(this.productForm,"maxExwPrice",null),this.$set(this.productForm,"minFobPrice",null),this.$set(this.productForm,"maxFobPrice",null)},search:function(){var t=this;this.disabledSearch=!0,this.productForm.maxExwPrice?this.productForm.maxExwPrice=Number(this.productForm.maxExwPrice):this.productForm.maxExwPrice=null,this.productForm.minExwPrice?this.productForm.minExwPrice=Number(this.productForm.minExwPrice):this.productForm.minExwPrice=null,this.productForm.maxFobPrice?this.productForm.maxFobPrice=Number(this.productForm.maxFobPrice):this.productForm.maxFobPrice=null,this.productForm.minFobPrice?this.productForm.minFobPrice=Number(this.productForm.minFobPrice):this.productForm.minFobPrice=null,"recycle"===this.type?(this.productForm.recycle=!0,this.$ajax.post(this.$apis.get_buyerBookmarkList,this.productForm).then(function(a){t.tableDataList=t.$getDB(t.$db.product.indexTable,a.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),t.disabledSearch=!1,t.selectList=[],t.disabledLine.length>0&&t.disabledLine.forEach(function(a){var i=e.findWhere(a,{key:"id"}).value;t.tableDataList.forEach(function(t){var a=e.findWhere(t,{key:"id"}).value;i===a&&(t._disabled=!0)})})}).catch(function(e){t.disabledSearch=!1})):this.$ajax.post(this.$apis.get_buyerProductList,this.productForm).then(function(e){t.tableDataList=t.$getDB(t.$db.product.indexTable,e.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),t.disabledSearch=!1,t.selectList=[]}).catch(function(e){t.disabledSearch=!1})},handleChange:function(e){console.log(e)},changeChecked:function(e){this.selectList=e},postData:function(){this.$refs.productFormTop.resetFields();var e=this.$copyArr(this.selectList),t=[];"product"===this.type?e.forEach(function(e){e._checked&&!e._disabled&&t.push(e.id.value)}):"bookmark"===this.type&&e.forEach(function(e){e._checked&&!e._disabled&&t.push(e.skuId.value)}),this.$emit("handleOK",t)},cancel:function(){this.$refs.productFormTop.resetFields(),this.$emit("handleCancel")},getCategoryId:function(){var e=this;this.$ajax.get(this.$apis.getCategory,{}).then(function(t){e.dropData=t}).catch(function(e){console.log(e)})},getData:function(){var t=this;if("recycle"===this.type)this.$ajax.post(this.$apis.get_buyerBookmarkList,{recycle:!0}).then(function(a){t.tableDataList=t.$getDB(t.$db.product.indexTable,a.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),t.disabledLine.length>0&&t.disabledLine.forEach(function(a){var i=e.findWhere(a,{key:"id"}).value;t.tableDataList.forEach(function(t){var a=e.findWhere(t,{key:"id"}).value;i===a&&(t._disabled=!0)})})}).catch(function(e){console.log(e)});else{var a="";"product"===this.type?a=this.$apis.get_buyerProductList:"bookmark"===this.type&&(a=this.$apis.get_buyerBookmarkList),this.$ajax.post(a,{recycle:!1}).then(function(a){t.tableDataList=t.$getDB(t.$db.product.indexTable,a.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),t.disabledLine.length>0&&t.disabledLine.forEach(function(a){var i=void 0;i=t.isInModify?e.findWhere(a,{key:"skuId"}).value:t.isInquiry?e.findWhere(a,{key:"skuId"}).value:e.findWhere(a,{key:"id"}).value,t.tableDataList.forEach(function(a){var o=void 0;"product"===t.type?o=e.findWhere(a,{key:"id"}).value:"bookmark"===t.type&&(o=e.findWhere(a,{key:"skuId"}).value),i===o&&(a._disabled=!0,a._checked=!0)})}),t.selectList=t.$copyArr(t.disabledLine),t.selectList.forEach(function(e){e._disabled=!0})}).catch(function(e){console.log(e)})}},addToBookmark:function(){var e=this,t=[];this.selectList.forEach(function(e){t.push(e.id.value)}),this.disableClickAddBookmark=!0,this.$ajax.post(this.$apis.add_bookmark,t).then(function(t){e.$message({message:"successfully add!",type:"success"}),e.disableClickAddBookmark=!1}).catch(function(t){e.disableClickAddBookmark=!1})},btnClick:function(e){e._disabled||this.$windowOpen({url:"/product/sourcingDetail",params:{id:e.id.value}})},createInquiry:function(){console.log(1234)},compareProducts:function(){var t=this,a="";this.selectList.forEach(function(i,o){var s=e.findWhere(i,{key:"id"});o===t.selectList.length-1?a+=s.value:a+=s.value+","}),this.$windowOpen({url:"product/compareDetail/{type}",params:{type:"new",id:a}})},recover:function(){var t=this,a=[];this.selectList.forEach(function(e){a.push(e.id.value)}),this.disabledClickRecover=!0,this.$ajax.post(this.$apis.recover_bookmark,a).then(function(a){t.selectList=[],t.$ajax.post(t.$apis.get_buyerBookmarkList,{recycle:!0}).then(function(a){t.tableDataList=t.$getDB(t.$db.product.indexTable,a.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),t.disabledLine.length>0&&t.disabledLine.forEach(function(a){var i=e.findWhere(a,{key:"id"}).value;t.tableDataList.forEach(function(t){var a=e.findWhere(t,{key:"id"}).value;i===a&&(t._disabled=!0)})}),t.$message({message:"successfully recovery!",type:"success"}),t.disabledClickRecover=!1}).catch(function(e){t.disabledClickRecover=!1})}).catch(function(e){t.disabledClickRecover=!1})}},created:function(){this.getData(),this.getCategoryId()},watch:{hideBody:function(e){this.btnInfo=e?this.$i._product.advanced:this.$i._product.hideTheAdvanced},selectList:function(e){0===e.length?(this.downloadBtnInfo=0,this.downloadRecycleListInfo="all",this.disabledAddBookmark=!0,this.disabledDownload=!0,this.disabledRecover=!0):(this.downloadBtnInfo=e.length,this.downloadRecycleListInfo=e.length,this.disabledAddBookmark=!1,this.disabledDownload=!1,this.disabledRecover=!1),e.length>=2?this.disabledCompare=!1:this.disabledCompare=!0},disabledLine:function(t){var a=this;t.length>0&&t.forEach(function(t){var i=e.findWhere(t,{key:"id"}).value;a.tableDataList.forEach(function(t){var o=e.findWhere(t,{key:"id"}).value;i===o&&a.$set(t,"_disabled",!0)})})},forceUpdateNumber:function(){this.getData()}}}}).call(t,a("u47Y"))},n5EH:function(e,t,a){var i=a("Wu4X");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("68b0bad0",i,!1,{})},wL5s:function(e,t,a){var i=a("cEzg");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("571f84c8",i,!1,{})},zUE0:function(e,t,a){"use strict";function i(e){r||a("wL5s")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("3F6m"),s=a("OEtF"),r=!1,n=a("Z0/y"),l=i,d=n(o.a,s.a,!1,l,"data-v-a53e0106",null);d.options.__file="src\\views\\product\\compare\\compare.vue",t.default=d.exports}});