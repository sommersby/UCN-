webpackJsonp([10],{"++DM":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bookmark"},[i("div",{staticClass:"title"},[i("span",[e._v(e._s(e.title))]),e._v(" "),i("el-button",{staticClass:"title-btn",attrs:{type:"text"},on:{click:e.switchDisplay}},[e._v(e._s(e.btnInfo)+"\n        ")])],1),e._v(" "),i("div",[i("el-form",{ref:"productFormTop",attrs:{model:e.productForm,rules:e.productFormRules,"label-width":"190px"}},[i("el-row",{staticClass:"speZone"},e._l(e.$db.product.buyerBasic,function(t){return t.isDefaultShow&&"sellerProductOverview"===t.belongPage?i("el-col",{key:t.key,attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[i("el-form-item",{attrs:{prop:t.key,label:t.label}},["dropdown"===t.showType?i("drop-down",{ref:"dropDown",refInFor:!0,attrs:{list:e.dropData,defaultProps:e.defaultProps,expandOnClickNode:!1},model:{value:e.productForm[t.key],callback:function(i){e.$set(e.productForm,t.key,i)},expression:"productForm[v.key]"}}):e._e(),e._v(" "),"input"===t.showType?i("el-input",{attrs:{size:"mini"},model:{value:e.productForm[t.key],callback:function(i){e.$set(e.productForm,t.key,i)},expression:"productForm[v.key]"}}):e._e(),e._v(" "),"select"===t.showType?i("el-select",{staticClass:"speSelect",attrs:{size:"mini",placeholder:"不限"},model:{value:e.productForm[t.key],callback:function(i){e.$set(e.productForm,t.key,i)},expression:"productForm[v.key]"}},e._l(t.options,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})):e._e()],1)],1):e._e()}))],1)],1),e._v(" "),i("div",{staticClass:"body",class:{hide:e.hideBody}},[i("el-form",{ref:"productForm",attrs:{rule:e.productFormRules,model:e.productForm,"label-width":"190px"}},[i("el-row",{staticClass:"speZone"},e._l(e.$db.product.buyerBasic,function(t){return t.isDefaultShow||"sellerProductOverview"!==t.belongPage?e._e():i("el-col",{key:t.key,attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[i("el-form-item",{attrs:{prop:t.key,label:t.label}},["dropdown"===t.showType?i("drop-down",{ref:"dropDown",refInFor:!0,attrs:{list:e.dropData,"expand-on-click-node":!1}}):e._e(),e._v(" "),"input"===t.showType?i("el-input",{attrs:{size:"mini"},model:{value:e.productForm[t.key],callback:function(i){e.$set(e.productForm,t.key,i)},expression:"productForm[v.key]"}}):e._e(),e._v(" "),"select"===t.showType?i("el-select",{staticClass:"speSelect",attrs:{size:"mini",placeholder:"请选择"},model:{value:e.productForm[t.key],callback:function(i){e.$set(e.productForm,t.key,i)},expression:"productForm[v.key]"}},e._l(t.options,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})):e._e(),e._v(" "),"exwNumber"===t.showType?i("div",{staticClass:"section-number"},[i("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:e.productForm.minExwPrice,callback:function(t){e.$set(e.productForm,"minExwPrice",t)},expression:"productForm.minExwPrice"}}),e._v(" "),i("div",{staticClass:"section-line"},[e._v("--")]),e._v(" "),i("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:e.productForm.maxExwPrice,callback:function(t){e.$set(e.productForm,"maxExwPrice",t)},expression:"productForm.maxExwPrice"}})],1):e._e(),e._v(" "),"fobNumber"===t.showType?i("div",{staticClass:"section-number"},[i("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:e.productForm.minFobPrice,callback:function(t){e.$set(e.productForm,"minFobPrice",t)},expression:"productForm.minFobPrice"}}),e._v(" "),i("div",{staticClass:"section-line"},[e._v("--")]),e._v(" "),i("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:e.productForm.maxFobPrice,callback:function(t){e.$set(e.productForm,"maxFobPrice",t)},expression:"productForm.maxFobPrice"}})],1):e._e(),e._v(" "),"number"===t.showType?i("el-input",{attrs:{size:"mini"},model:{value:e.productForm[t.key],callback:function(i){e.$set(e.productForm,t.key,i)},expression:"productForm[v.key]"}}):e._e()],1)],1)}))],1)],1),e._v(" "),i("div",{staticClass:"btn-group"},[i("el-button",{attrs:{loading:e.disabledSearch,type:"primary"},on:{click:e.search}},[e._v(e._s(e.$i._product.search))]),e._v(" "),i("el-button",{attrs:{type:"info",plain:""},on:{click:e.clear}},[e._v(e._s(e.$i._product.clear))])],1),e._v(" "),i("div",{staticClass:"footer"},[i("v-table",{attrs:{data:e.tableDataList,buttons:"recycle"===e.type?[]:[{label:"Detail",type:1}]},on:{"change-checked":e.changeChecked,action:e.btnClick}},[i("template",{slot:"header"},[e.hideBtn?e._e():i("div",{staticClass:"btns"},[i("el-button",{on:{click:e.createInquiry}},[e._v(e._s(e.$i._product.createInquiry))]),e._v(" "),i("el-button",[e._v(e._s(e.$i._product.createOrder))]),e._v(" "),i("el-button",{attrs:{disabled:e.disabledCompare},on:{click:e.compareProducts}},[e._v(e._s(e.$i._product.compare))]),e._v(" "),i("el-button",{attrs:{loading:e.disableClickAddBookmark,disabled:e.disabledAddBookmark},on:{click:e.addToBookmark}},[e._v(e._s(e.$i._product.addToBookmark))]),e._v(" "),i("el-button",{attrs:{disabled:e.disabledDownload}},[e._v(e._s(e.$i._product.download+"("+e.downloadBtnInfo+")"))])],1),e._v(" "),"recycle"===e.type?i("div",{staticClass:"btns"},[i("el-button",{attrs:{disabled:e.disabledRecover,loading:e.disabledClickRecover,type:"primary"},on:{click:e.recover}},[e._v(e._s(e.$i._product.recover))]),e._v(" "),i("el-button",[e._v(e._s(e.$i._product.download+"("+e.downloadRecycleListInfo+")"))])],1):e._e()])],2),e._v(" "),e.hideBtn&&"recycle"!==e.type?i("div",{staticClass:"footer-btn"},[i("el-button",{attrs:{loading:e.disabledOkBtn,type:"primary"},on:{click:e.postData}},[e._v("OK")]),e._v(" "),i("el-button",{on:{click:e.cancel}},[e._v("Cancel")])],1):e._e()],1)])},o=[];a._withStripped=!0;var r={render:a,staticRenderFns:o};t.a=r},"//Gt":function(e,t,i){t=e.exports=i("UTlt")(!1),t.push([e.i,".select-wrap .el-form[data-v-5185776c]{padding:10px}.select-wrap .el-form-item[data-v-5185776c] .el-form-item__label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:left}",""])},"1nbe":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"section-number"},[i("el-form-item",{attrs:{label:e.$t("product.page.exwPrice")}},[i("el-input-number",{staticClass:"numberInput",attrs:{min:0,controls:!1},model:{value:e.data.max,callback:function(t){e.$set(e.data,"max",t)},expression:"data.max"}})],1)],1)},o=[];a._withStripped=!0;var r={render:a,staticRenderFns:o};t.a=r},"4yHW":function(e,t,i){var a=i("//Gt");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("FIqI")("99f5ceac",a,!1,{})},"4zFU":function(e,t,i){"use strict";function a(e){s||i("MsKt")}var o=i("l+5M"),r=i("++DM"),s=!1,n=i("Z0/y"),l=a,c=n(o.a,r.a,!1,l,"data-v-6ce2534f",null);c.options.__file="src\\views\\product\\addProduct.vue",t.a=c.exports},"6QaW":function(e,t,i){"use strict";(function(e){var a=i("bGai"),o=i("4zFU");t.a={name:"createInquiry",data:function(){return{disabledLine:[],checkedAll:[],trig:0,tableLoad:!1,selectAll:{paymentMethod:[],transport:[],incoterm:[],currency:[],supplierName:[],exportLicense:[],destinationCountry:[],departureCountry:[]},loading:!1,fromArg:{skuQty:0,inquiryAmount:0,timeZone:0,entryDt:0,discountRate:null,currency:null,paymentMethod:null,paymentTerm:0,incoterm:null,transport:null,destinationCountry:null,destinationPort:null,departureCountry:null,departurePort:null,exportLicense:null,remark:null,draft:null,suppliers:[],details:[]},radio:"product",dialogTableVisible:!1,tabColumn:"",tabData:[],textarea:"",pickerOptions:{disabledDate:function(e){return e.getTime()<Date.now()},shortcuts:[{text:"Today",onClick:function(e){e.$emit("pick",new Date)}},{text:"Yesterday",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"A week ago",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]}}},components:{"select-search":a.c,"v-table":a.b,"v-product":o.a,"v-up-load":a.f,VHistoryModify:a.i},created:function(){this.getDictionaries(),this.remoteMethod("")},computed:{},methods:{addProduct:function(){var t=[];e.map(this.tabData,function(e){e._disabled||t.push(e)}),this.disabledLine=t,this.trig=(new Date).getTime(),this.dialogTableVisible=!0},removeList:function(){var t=this;e.map(this.tabData,function(i,a){-1!==e.indexOf(e.pluck(e.pluck(t.checkedAll,"skuId"),"value"),i.skuId.value)&&t.$set(i,"_disabled",!0)})},inputEnter:function(e){},save:function(t){this.tabData=e.map(this.tabData,function(i){return e.findWhere(i,{key:"skuId"}).value!==e.findWhere(t[0],{key:"skuId"}).value||i._remark||t[0]._remark?e.findWhere(i,{key:"skuId"}).value===e.findWhere(t[1],{key:"skuId"}).value&&i._remark&&t[1]._remark&&(i=t[1],i._modify=!0,i.displayStyle=1):(i=t[0],i._modify=!0,i.displayStyle=1),i})},getDictionaries:function(){var t=this;this.$ajax.post(this.$apis.POST_CODE_PART,["PMT","ITM","CY_UNIT","EL_IS","MD_TN"],"_cache").then(function(i){t.selectAll.paymentMethod=e.findWhere(i,{code:"PMT"}).codes,t.selectAll.transport=e.findWhere(i,{code:"MD_TN"}).codes,t.selectAll.incoterm=e.findWhere(i,{code:"ITM"}).codes,t.selectAll.currency=e.findWhere(i,{code:"CY_UNIT"}).codes,t.selectAll.exportLicense=e.findWhere(i,{code:"EL_IS"}).codes}),this.$ajax.get(this.$apis.GET_COUNTRY_ALL,"","_cache").then(function(e){t.selectAll.destinationCountry=e,t.selectAll.departureCountry=e})},getProduct:function(){},fromChange:function(e){this.trig=(new Date).getTime()},submitForm:function(t){var i=this;this.fromArg.draft="draft"===t?1:0,this.$refs.ruleform.validate(function(e){if(!e)return i.$message({message:"请完成填写",type:"warning"})});var a=[];e.map(this.fromArg.suppliers,function(t){var i={};e.mapObject(t,function(e,t){/^supplier/.test(t)||(i["supplier"+t.substring(0,1).toUpperCase()+t.substring(1,t.length)]=e)}),a.push(i)}),a.length&&(this.fromArg.suppliers=a),this.fromArg.exportLicense=parseInt(this.fromArg.exportLicense),this.fromArg.currency=parseInt(this.fromArg.currency),this.fromArg.incoterm=parseInt(this.fromArg.incoterm),this.fromArg.paymentMethod=parseInt(this.fromArg.paymentMethod),this.fromArg.transport=parseInt(this.fromArg.transport),this.fromArg.details=this.dataFilter(this.tabData),this.$ajax.post(this.$apis.POST_INQUIRY_SAVE,this.$filterModify(this.fromArg)).then(function(e){if(!i.fromArg.draft)return i.$router.push("/negotiation/negotiationInquiry");i.$router.push({name:"negotiationDraft",params:{type:"inquiry"}})})},dataFilter:function(e){var t=[],i={},a={};return e.forEach(function(e){if(i={},e._remark){for(var o in e)i[o]=e[o].value;a.fieldRemark=i}else{a={};for(var r in e)"fieldRemark"===a[r]?a[r]=i:a[r]=e[r].value;t.push(a)}}),t},changeChecked:function(e){this.checkedAll=e},getList:function(t){var i=this,a=[];t.forEach(function(e){a.push(e.id.value)}),this.$ajax.post(this.$apis.POST_INQUIRY_SKUS,a).then(function(t){e.map(t,function(e){e.displayStyle=0}),i.tabData=i.tabData.concat(i.$getDB(i.$db.inquiryOverview.productInfo,i.$refs.HM.getFilterData(t,"skuId"))),i.dialogTableVisible=!1})},productInfoBtn:function(e){return[{label:"Modify",type:"modify"},{label:"Histoty",type:"histoty"},{label:"Detail",type:"detail"}]},fnBasicInfoHistoty:function(t,i,a){var o=this;this.$ajax.get(this.$apis.GET_INQUIRY_HISTORY,{id:t.skuId.value}).then(function(t){var i=[];e.map(o.tabData,function(t){e.findWhere(t,{key:"skuId"}).value===a.data&&i.push(t)}),"histoty"===a.type?o.$refs.HM.init(i,o.$getDB(o.$db.inquiryOverview.productInfo,o.$refs.HM.getFilterData(t,"skuId")),!1):o.$refs.HM.init(i,o.$getDB(o.$db.inquiryOverview.productInfo,o.$refs.HM.getFilterData(t,"skuId")),!0)})},producInfoAction:function(e,t){switch(this.id_type="producInfo",t){case"histoty":this.fnBasicInfoHistoty(e,"productInfo",{type:"histoty",data:e.skuId.value});break;case"modify":this.oSwitch=!0,this.fnBasicInfoHistoty(e,"productInfo",{type:"modify",data:e.skuId.value})}},remoteMethod:function(e){var t=this;this.$ajax.get(this.$apis.PURCHASE_SUPPLIER_LISTSUPPLIERBYNAME+"?name="+e).then(function(e){t.selectAll.supplierName=e})}}}}).call(t,i("u47Y"))},Cldd:function(e,t,i){"use strict";function a(e){s||i("n5EH")}var o=i("TD7D"),r=i("1nbe"),s=!1,n=i("Z0/y"),l=a,c=n(o.a,r.a,!1,l,"data-v-5ae062dd",null);c.options.__file="src\\views\\product\\sectionNumber.vue",t.a=c.exports},MsKt:function(e,t,i){var a=i("O6u8");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("FIqI")("97954d92",a,!1,{})},NWjH:function(e,t,i){"use strict";function a(e){s||(i("g9UG"),i("4yHW"))}Object.defineProperty(t,"__esModule",{value:!0});var o=i("6QaW"),r=i("yQRX"),s=!1,n=i("Z0/y"),l=a,c=n(o.a,r.a,!1,l,"data-v-5185776c",null);c.options.__file="src\\views\\negotiation\\createInquiry.vue",t.default=c.exports},O6u8:function(e,t,i){t=e.exports=i("UTlt")(!1),t.push([e.i,".bookmark[data-v-6ce2534f]{padding-right:20px}.title[data-v-6ce2534f]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666}.title-btn[data-v-6ce2534f]{float:right;margin-right:5px}.head-list label[data-v-6ce2534f]{width:190px;display:inline-block;height:42px;line-height:42px;text-align:right;font-size:14px;color:#606266;padding:0 12px 0 0;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.head-list .content[data-v-6ce2534f]{margin-left:190px;height:42px}.head-list .content[data-v-6ce2534f] input{height:42px}.section-number .section-input[data-v-6ce2534f]{float:left;width:40%}.section-number .section-line[data-v-6ce2534f]{float:left}.outGroup .label[data-v-6ce2534f]{width:190px;float:left}.body[data-v-6ce2534f]{overflow:hidden;max-height:320px;display:block;-webkit-transition:max-height .5s cubic-bezier(.445,.05,.55,.95);transition:max-height .5s cubic-bezier(.445,.05,.55,.95)}.body .numberInput[data-v-6ce2534f]{width:80px;text-align:left}.body .numberInput[data-v-6ce2534f] input{padding:0}.hide[data-v-6ce2534f]{max-height:0}.form-spelist[data-v-6ce2534f]{margin-bottom:10px!important}.form-spelist[data-v-6ce2534f] .ivu-form-item-content{line-height:normal}.form-list[data-v-6ce2534f]{margin-bottom:10px}.speSelect[data-v-6ce2534f]{width:100%}.btn-group[data-v-6ce2534f]{text-align:center;margin-top:10px;padding-bottom:15px;border-bottom:1px solid #e0e0e0}.btn-group .search[data-v-6ce2534f]{margin-right:30px}.footer .btns[data-v-6ce2534f]{padding:10px 0}.footer-btn[data-v-6ce2534f]{text-align:center}",""])},TD7D:function(e,t,i){"use strict";t.a={name:"section-number",props:{data:{type:Object,default:{}}},data:function(){return{}},methods:{}}},Wu4X:function(e,t,i){t=e.exports=i("UTlt")(!1),t.push([e.i,"",""])},aN7G:function(e,t,i){t=e.exports=i("UTlt")(!1),t.push([e.i,".create-inquiry[data-v-5185776c]{position:relative}.create-inquiry .hd[data-v-5185776c]{padding-left:15px;height:50px;line-height:50px;color:#666;border-bottom:1px solid #ccc}.create-inquiry .content-hd[data-v-5185776c]{font-size:14px;line-height:40px;padding-left:20px}.create-inquiry .status[data-v-5185776c]{height:60px;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:25px;padding-right:25px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.create-inquiry .status .btn-wrap[data-v-5185776c],.create-inquiry .status[data-v-5185776c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.create-inquiry .status .btn-wrap span[data-v-5185776c]{font-size:14px}.create-inquiry .status .select-wrap[data-v-5185776c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.create-inquiry .status .select-wrap .select[data-v-5185776c]{width:110px;margin-right:5px}.create-inquiry .status .select-wrap .set[data-v-5185776c]{cursor:pointer;padding-left:18px;color:#999}.create-inquiry .status .select-wrap .set i[data-v-5185776c]{font-size:25px}.create-inquiry .bom-btn-wrap[data-v-5185776c]{background:#fff;position:fixed;left:0;bottom:0;z-index:9;width:100%;padding:10px 200px;-webkit-box-shadow:0 -1px 5px #ccc;box-shadow:0 -1px 5px #ccc}.create-inquiry .bom-btn-wrap-station[data-v-5185776c]{height:52px;width:100%}",""])},g9UG:function(e,t,i){var a=i("aN7G");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("FIqI")("159ed0d0",a,!1,{})},"l+5M":function(e,t,i){"use strict";(function(e){var a=i("QGvi"),o=i("bGai"),r=i("Cldd");t.a={name:"overview",components:{dropDown:o.d,sectionNumber:r.a,VTable:a.a},props:{title:{type:String,default:""},type:{type:String,default:"product"},hideBtn:{type:Boolean,default:!1},disabledLine:{type:Array,default:function(){return[]}},disabledOkBtn:{type:Boolean,default:!1},forceUpdateNumber:{type:Number,default:0},isInModify:{type:Boolean,default:!1},isInquiry:{type:Boolean,default:!1}},data:function(){return{hideBody:!0,btnInfo:this.$i._product.advanced,disabledSearch:!1,selectList:[],downloadBtnInfo:"0",downloadRecycleListInfo:"all",disabledAddBookmark:!0,disabledCompare:!0,disabledDownload:!0,disabledRecover:!0,disabledClickRecover:!1,disableClickAddBookmark:!1,productForm:{categoryId:null,nameCnLike:"",readilyAvailable:null,customerSkuCodeLike:"",minExwPrice:"",maxExwPrice:"",codeLike:"",nameEnLike:"",minFobPrice:"",maxFobPrice:"",materialEnLike:"",country:null,supplierNameLike:"",outerCartonMethodEnLike:"",methodPkgEnLike:"",deliveryDates:null,descEnLike:"",descCnLike:"",pn:1,ps:50,recycle:!1},productFormRules:{nameCn:[{max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}]},dropData:[],defaultProps:{label:"name",children:"children"},tableDataList:[],dataColumn:[]}},methods:{switchDisplay:function(){this.hideBody=!this.hideBody},clear:function(){this.$refs.productFormTop.resetFields(),this.$refs.productForm.resetFields(),this.$set(this.productForm,"categoryId",null),this.$set(this.productForm,"minExwPrice",null),this.$set(this.productForm,"maxExwPrice",null),this.$set(this.productForm,"minFobPrice",null),this.$set(this.productForm,"maxFobPrice",null)},search:function(){var t=this;this.disabledSearch=!0,this.productForm.maxExwPrice?this.productForm.maxExwPrice=Number(this.productForm.maxExwPrice):this.productForm.maxExwPrice=null,this.productForm.minExwPrice?this.productForm.minExwPrice=Number(this.productForm.minExwPrice):this.productForm.minExwPrice=null,this.productForm.maxFobPrice?this.productForm.maxFobPrice=Number(this.productForm.maxFobPrice):this.productForm.maxFobPrice=null,this.productForm.minFobPrice?this.productForm.minFobPrice=Number(this.productForm.minFobPrice):this.productForm.minFobPrice=null,"recycle"===this.type?(this.productForm.recycle=!0,this.$ajax.post(this.$apis.get_buyerBookmarkList,this.productForm).then(function(i){t.tableDataList=t.$getDB(t.$db.product.indexTable,i.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),t.disabledSearch=!1,t.selectList=[],t.disabledLine.length>0&&t.disabledLine.forEach(function(i){var a=e.findWhere(i,{key:"id"}).value;t.tableDataList.forEach(function(t){var i=e.findWhere(t,{key:"id"}).value;a===i&&(t._disabled=!0)})})}).catch(function(e){t.disabledSearch=!1})):this.$ajax.post(this.$apis.get_buyerProductList,this.productForm).then(function(e){t.tableDataList=t.$getDB(t.$db.product.indexTable,e.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),t.disabledSearch=!1,t.selectList=[]}).catch(function(e){t.disabledSearch=!1})},handleChange:function(e){console.log(e)},changeChecked:function(e){this.selectList=e},postData:function(){this.$refs.productFormTop.resetFields();var e=this.$copyArr(this.selectList),t=[];"product"===this.type?e.forEach(function(e){e._checked&&!e._disabled&&t.push(e.id.value)}):"bookmark"===this.type&&e.forEach(function(e){e._checked&&!e._disabled&&t.push(e.skuId.value)}),this.$emit("handleOK",t)},cancel:function(){this.$refs.productFormTop.resetFields(),this.$emit("handleCancel")},getCategoryId:function(){var e=this;this.$ajax.get(this.$apis.getCategory,{}).then(function(t){e.dropData=t}).catch(function(e){console.log(e)})},getData:function(){var t=this;if("recycle"===this.type)this.$ajax.post(this.$apis.get_buyerBookmarkList,{recycle:!0}).then(function(i){t.tableDataList=t.$getDB(t.$db.product.indexTable,i.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),t.disabledLine.length>0&&t.disabledLine.forEach(function(i){var a=e.findWhere(i,{key:"id"}).value;t.tableDataList.forEach(function(t){var i=e.findWhere(t,{key:"id"}).value;a===i&&(t._disabled=!0)})})}).catch(function(e){console.log(e)});else{var i="";"product"===this.type?i=this.$apis.get_buyerProductList:"bookmark"===this.type&&(i=this.$apis.get_buyerBookmarkList),this.$ajax.post(i,{recycle:!1}).then(function(i){t.tableDataList=t.$getDB(t.$db.product.indexTable,i.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),t.disabledLine.length>0&&t.disabledLine.forEach(function(i){var a=void 0;a=t.isInModify?e.findWhere(i,{key:"skuId"}).value:t.isInquiry?e.findWhere(i,{key:"skuId"}).value:e.findWhere(i,{key:"id"}).value,t.tableDataList.forEach(function(i){var o=void 0;"product"===t.type?o=e.findWhere(i,{key:"id"}).value:"bookmark"===t.type&&(o=e.findWhere(i,{key:"skuId"}).value),a===o&&(i._disabled=!0,i._checked=!0)})}),t.selectList=t.$copyArr(t.disabledLine),t.selectList.forEach(function(e){e._disabled=!0})}).catch(function(e){console.log(e)})}},addToBookmark:function(){var e=this,t=[];this.selectList.forEach(function(e){t.push(e.id.value)}),this.disableClickAddBookmark=!0,this.$ajax.post(this.$apis.add_bookmark,t).then(function(t){e.$message({message:"successfully add!",type:"success"}),e.disableClickAddBookmark=!1}).catch(function(t){e.disableClickAddBookmark=!1})},btnClick:function(e){e._disabled||this.$windowOpen({url:"/product/sourcingDetail",params:{id:e.id.value}})},createInquiry:function(){console.log(1234)},compareProducts:function(){var t=this,i="";this.selectList.forEach(function(a,o){var r=e.findWhere(a,{key:"id"});o===t.selectList.length-1?i+=r.value:i+=r.value+","}),this.$windowOpen({url:"product/compareDetail/{type}",params:{type:"new",id:i}})},recover:function(){var t=this,i=[];this.selectList.forEach(function(e){i.push(e.id.value)}),this.disabledClickRecover=!0,this.$ajax.post(this.$apis.recover_bookmark,i).then(function(i){t.selectList=[],t.$ajax.post(t.$apis.get_buyerBookmarkList,{recycle:!0}).then(function(i){t.tableDataList=t.$getDB(t.$db.product.indexTable,i.datas,function(e){return 1===e.status.value?e.status.value="上架":0===e.status.value&&(e.status.value="下架"),e}),t.disabledLine.length>0&&t.disabledLine.forEach(function(i){var a=e.findWhere(i,{key:"id"}).value;t.tableDataList.forEach(function(t){var i=e.findWhere(t,{key:"id"}).value;a===i&&(t._disabled=!0)})}),t.$message({message:"successfully recovery!",type:"success"}),t.disabledClickRecover=!1}).catch(function(e){t.disabledClickRecover=!1})}).catch(function(e){t.disabledClickRecover=!1})}},created:function(){this.getData(),this.getCategoryId()},watch:{hideBody:function(e){this.btnInfo=e?this.$i._product.advanced:this.$i._product.hideTheAdvanced},selectList:function(e){0===e.length?(this.downloadBtnInfo=0,this.downloadRecycleListInfo="all",this.disabledAddBookmark=!0,this.disabledDownload=!0,this.disabledRecover=!0):(this.downloadBtnInfo=e.length,this.downloadRecycleListInfo=e.length,this.disabledAddBookmark=!1,this.disabledDownload=!1,this.disabledRecover=!1),e.length>=2?this.disabledCompare=!1:this.disabledCompare=!0},disabledLine:function(t){var i=this;t.length>0&&t.forEach(function(t){var a=e.findWhere(t,{key:"id"}).value;i.tableDataList.forEach(function(t){var o=e.findWhere(t,{key:"id"}).value;a===o&&i.$set(t,"_disabled",!0)})})},forceUpdateNumber:function(){this.getData()}}}}).call(t,i("u47Y"))},n5EH:function(e,t,i){var a=i("Wu4X");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("FIqI")("68b0bad0",a,!1,{})},yQRX:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"create-inquiry"},[i("h3",{staticClass:"hd"},[e._v(e._s(e.$i._inquiry.inquiryNo))]),e._v(" "),i("div",{staticClass:"select-wrap"},[i("h4",{staticClass:"content-hd"},[e._v(e._s(e.$i._inquiry.basicInfo))]),e._v(" "),i("el-form",{ref:"ruleform",attrs:{model:e.fromArg}},[i("el-row",{attrs:{gutter:10}},e._l(e.$db.inquiryOverview.basicInfo,function(t,a){return t._inquiryHide||t._hide?e._e():i("el-col",{key:a,attrs:{xs:t.xs||8,sm:t.sm||8,md:t.md||8,lg:t.lg||8}},[i("el-form-item",{attrs:{label:t.label,prop:t.key,rules:t.rules,"label-width":t.width||"150px"}},["String"!==t.type||t._hide||"textarea"===t.types?e._e():i("el-input",{attrs:{size:t.size||"mini",placeholder:t.placeholder,disabled:t.disabled},model:{value:e.fromArg[t.key],callback:function(i){e.$set(e.fromArg,t.key,i)},expression:"fromArg[item.key]"}}),e._v(" "),"destinationCountry"===t.key||"departureCountry"===t.key?i("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"id",size:t.size||"mini",placeholder:t.placeholder},model:{value:e.fromArg[t.key],callback:function(i){e.$set(e.fromArg,t.key,i)},expression:"fromArg[item.key]"}},e._l(e.selectAll[t.key],function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.name,id:e.id}})})):e._e(),e._v(" "),"select"===t.type&&"destinationCountry"!==t.key&&"departureCountry"!=t.key?i("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"id",size:t.size||"mini",placeholder:t.placeholder},model:{value:e.fromArg[t.key],callback:function(i){e.$set(e.fromArg,t.key,i)},expression:"fromArg[item.key]"}},e._l(e.selectAll[t.key],function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.value,id:e.id}})})):e._e(),e._v(" "),"manySelect"===t.type?i("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"",remote:"","reserve-keyword":"","value-key":"id",size:t.size||"mini",placeholder:"请输入关键词","remote-method":e.remoteMethod,loading:e.loading},model:{value:e.fromArg.suppliers,callback:function(t){e.$set(e.fromArg,"suppliers",t)},expression:"fromArg.suppliers"}},e._l(e.selectAll[t.key],function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e,id:e.id}})})):e._e(),e._v(" "),"textarea"===t.types?i("el-input",{attrs:{type:"textarea",rows:t.rows||4,size:t.size||"mini",placeholder:t.placeholder,resize:"none",disabled:t.disabled},model:{value:e.fromArg[t.key],callback:function(i){e.$set(e.fromArg,t.key,i)},expression:"fromArg[item.key]"}}):e._e(),e._v(" "),"Number"===t.type?i("span",{staticStyle:{display:"flxe"}},[i("el-input-number",{staticStyle:{width:"100%","padding-right":"10px"},attrs:{min:0,max:100,"controls-position":"right",size:"mini",controls:!1},model:{value:e.fromArg[t.key],callback:function(i){e.$set(e.fromArg,t.key,i)},expression:"fromArg[item.key]"}}),e._v(" "),i("i",{staticStyle:{position:"absolute",right:"5px",top:"50%",transform:"translate(0, -50%)","font-size":"12px"}},[e._v("%")])],1):e._e(),e._v(" "),"attachment"===t.type||"upData"===t.type?i("v-up-load"):e._e()],1)],1)}))],1)],1),e._v(" "),i("h4",{staticClass:"content-hd"},[e._v(e._s(e.$i._baseText.productInfo))]),e._v(" "),i("div",{staticClass:"status"},[i("div",{staticClass:"btn-wrap"},[i("el-button",{on:{click:e.addProduct}},[e._v(e._s(e.$i._baseText.addProduct))]),e._v(" "),i("el-button",{attrs:{type:"danger",disabled:e.checkedAll.length<=0},on:{click:e.removeList}},[e._v(e._s(e.$i._baseText.remove))])],1),e._v(" "),i("select-search",{attrs:{options:[]},on:{inputEnter:e.inputEnter}})],1),e._v(" "),i("v-table",{attrs:{data:e.tabData,buttons:e.productInfoBtn,loading:e.tableLoad,parId:"skuId",rowspan:2},on:{"update:data":function(t){e.tabData=t},action:e.producInfoAction,"change-checked":e.changeChecked}}),e._v(" "),i("div",{staticClass:"bom-btn-wrap"},[i("el-button",{on:{click:function(t){e.submitForm()}}},[e._v(e._s(e.$i._baseText.submit))]),e._v(" "),i("el-button",{on:{click:function(t){e.submitForm("draft")}}},[e._v(e._s(e.$i._baseText.saveAsDraft))])],1),e._v(" "),i("div",{staticClass:"bom-btn-wrap-station"}),e._v(" "),i("el-dialog",{attrs:{title:"Add Product",visible:e.dialogTableVisible,width:"80%","lock-scroll":""},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[i("el-radio-group",{on:{change:e.fromChange},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[i("el-radio-button",{attrs:{label:"product"}},[e._v(e._s(e.$i._baseText.fromNewSearch))]),e._v(" "),i("el-radio-button",{attrs:{label:"bookmark"}},[e._v(e._s(e.$i._baseText.FromMyBookmark))])],1),e._v(" "),i("v-product",{attrs:{hideBtns:!0,hideBtn:!0,disabledLine:e.disabledLine,forceUpdateNumber:e.trig,type:e.radio,isInquiry:!0},on:{handleOK:e.getList}})],1),e._v(" "),i("v-history-modify",{ref:"HM",on:{save:e.save}})],1)},o=[];a._withStripped=!0;var r={render:a,staticRenderFns:o};t.a=r}});