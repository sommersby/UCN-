webpackJsonp([40],{"2Ig8":function(e,t,a){"use strict";function n(e){o||a("8jHJ")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("JNyz"),s=a("wBb2"),o=!1,l=a("Z0/y"),u=n,r=l(i.a,s.a,!1,u,"data-v-b3c898aa",null);r.options.__file="src\\views\\sellerWarehouse\\inbound\\inboundDetail.vue",t.default=r.exports},"8jHJ":function(e,t,a){var n=a("k6T5");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("11b92ff3",n,!1,{})},JNyz:function(e,t,a){"use strict";t.a={name:"inboundDetail",data:function(){return{labelPosition:"right",pickerOptions1:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]},addOrderDialogVisible:!1,inboundData:{inboundNo:"",inboundDate:"",warehouseNo:"",warehouseName:"",storageType:null,warehouseManager:"",remark:"",purchaser:"",carrier:"",carrierPhone:"",timeZone:""}}},methods:{getData:function(){this.$ajax.get(this.$apis.get_inboundDetail,{id:"1"}).then(function(e){console.log(e)}).catch(function(e){})}},created:function(){this.getData()}}},k6T5:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".title[data-v-b3c898aa]{font-weight:700;font-size:16px;height:32px;line-height:32px;color:#666}.btns[data-v-b3c898aa]{margin-top:5px}.speInput[data-v-b3c898aa]{width:80%}",""])},wBb2:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"inbound-detail"},[a("div",{staticClass:"title"},[e._v("\n        "+e._s(e.$i._warehouse.basicInfo)+"\n    ")]),e._v(" "),a("el-form",{ref:"basicInfo",staticClass:"speForm",attrs:{modal:e.inboundData,"label-width":"200px","label-position":e.labelPosition}},[a("el-row",e._l(e.$db.warehouse.inbound,function(t){return"basicInfo"===t.belong?a("el-col",{key:t.key,staticClass:"speCol",attrs:{xs:24,sm:t.fullLine?24:8,md:t.fullLine?24:8,lg:t.fullLine?24:8,xl:t.fullLine?24:8}},[a("el-form-item",{attrs:{prop:t.key,label:t.label}},["input"===t.showType?a("div",[a("el-input",{staticClass:"speInput",attrs:{size:"mini",disabled:!0,placeholder:"please input"},model:{value:e.inboundData[t.key],callback:function(a){e.$set(e.inboundData,t.key,a)},expression:"inboundData[v.key]"}})],1):"select"===t.showType?a("div",[a("el-select",{staticClass:"speInput",attrs:{disabled:!0,size:"mini",placeholder:"please choose"},model:{value:e.inboundData[t.key],callback:function(a){e.$set(e.inboundData,t.key,a)},expression:"inboundData[v.key]"}},e._l(t.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1):"textarea"===t.showType?a("div",[a("el-input",{staticClass:"speInput",attrs:{disabled:!0,type:"textarea",autosize:"",placeholder:"please input"},model:{value:e.inboundData[t.key],callback:function(a){e.$set(e.inboundData,t.key,a)},expression:"inboundData[v.key]"}})],1):"number"===t.showType?a("div",[a("el-input-number",{staticClass:"speInput",attrs:{disabled:!0,size:"mini",controls:!1,min:0,label:"please input"},model:{value:e.inboundData[t.key],callback:function(a){e.$set(e.inboundData,t.key,a)},expression:"inboundData[v.key]"}})],1):"dropdown"===t.showType?a("div",[a("drop-down",{ref:"dropDown",refInFor:!0,staticClass:"speInput",attrs:{list:e.dropData,defaultProps:e.defaultProps},model:{value:e.inboundData[t.key],callback:function(a){e.$set(e.inboundData,t.key,a)},expression:"inboundData[v.key]"}})],1):"date"===t.showType?a("div",[a("el-date-picker",{staticClass:"speInput",attrs:{disabled:!0,size:"mini",align:"right",type:"date",placeholder:"选择日期","picker-options":e.pickerOptions1},model:{value:e.inboundData[t.key],callback:function(a){e.$set(e.inboundData,t.key,a)},expression:"inboundData[v.key]"}})],1):e._e()])],1):e._e()}))],1),e._v(" "),a("div",{staticClass:"title"},[e._v("\n        "+e._s(e.$i._warehouse.productInfo)+"\n    ")])],1)},i=[];n._withStripped=!0;var s={render:n,staticRenderFns:i};t.a=s}});