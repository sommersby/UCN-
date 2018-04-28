webpackJsonp([37],{"0Tye":function(t,e,a){"use strict";function n(t){i||a("eaIG")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("54La"),o=a("TGsW"),i=!1,c=a("Z0/y"),l=n,r=c(s.a,o.a,!1,l,"data-v-6b486974",null);r.options.__file="src\\views\\settings\\companyInfo.vue",e.default=r.exports},"54La":function(t,e,a){"use strict";(function(t){var n=a("aA9S"),s=a.n(n);e.a={name:"companyInfo",data:function(){return{summaryDisabled:!0,addressDialogVisible:!1,accountDialogVisible:!1,contactDialogVisible:!1,companyInfo:{code:"",name:"",type:"",country:"",city:"",incoterm:"",exportLicense:"",currency:"",payment:"",shortName:"",description:""},cloneData:{},companyInfoRules:{},addressData:{name:"",address:"",exportPort:"",contactPerson1:"",concatPhone1:"",contactPerson2:"",concatPhone2:"",supplierId:""},accountData:{beneficiaryName:"",beneficiaryAccount:"",beneficiaryAddress:"",beneficiaryBankName:"",beneficiaryBankSwift:"",accountType:"",currency:"",supplierId:""},contactData:{name:"",deptName:"",gender:"",cellphone:"",telphone:"",fax:"",email:"",skype:"",qq:""},allowAddAddress:!1,allowAddAccount:!1,allowAddContact:!1,allowModifySummary:!1,isModifyAddress:!1,isModifyAccount:!1,isModifyContact:!1,options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}]}},methods:{getWholeData:function(){var t=this;this.companyInfo.address=[],this.companyInfo.accounts=[],this.companyInfo.concats=[],this.$ajax.get(this.$apis.get_supplierWhole,{}).then(function(e){t.companyInfo=e}).catch(function(t){console.log(t)})},modifySummary:function(){this.summaryDisabled=!1,this.cloneData=s()({},this.companyInfo)},saveModifySummary:function(){var t=this,e={city:this.companyInfo.city,country:this.companyInfo.country,currency:this.companyInfo.currency,description:this.companyInfo.description,exportLicense:this.companyInfo.exportLicense,incoterm:this.companyInfo.incoterm,id:this.companyInfo.companyId,logo:"string",name:this.companyInfo.name,payment:this.companyInfo.payment,shortName:this.companyInfo.shortName};this.allowModifySummary=!0,this.$ajax.post(this.$apis.update_supplier,e).then(function(e){t.$message({message:"修改成功",type:"success"}),t.allowModifySummary=!1,t.summaryDisabled=!0}).catch(function(e){t.allowModifySummary=!1,t.summaryDisabled=!0})},cancelModifySummary:function(){this.companyInfo=s()({},this.cloneData),this.summaryDisabled=!0},addAddress:function(){this.addressDialogVisible=!0},sureAddAddress:function(){var t=this;this.allowAddAddress=!0,this.addressData.supplierId=this.companyInfo.id,this.isModifyAddress?this.$ajax.post(this.$apis.update_address+"?id="+this.addressData.id,this.addressData).then(function(e){t.allowAddAddress=!1,t.$message({message:"修改成功",type:"success"}),t.getWholeData(),t.addressDialogVisible=!1}).catch(function(e){t.allowAddAddress=!1}):this.$ajax.post(this.$apis.add_address,this.addressData).then(function(e){t.allowAddAddress=!1,t.$message({message:"添加成功",type:"success"}),t.getWholeData(),t.addressDialogVisible=!1}).catch(function(e){t.allowAddAddress=!1,t.$message({message:e,type:"success"}),t.addressDialogVisible=!1})},modifyAddreess:function(t){this.isModifyAddress=!0,this.addressData=s()({},t),this.addressDialogVisible=!0},deleteAddress:function(t){var e=this;this.$confirm("确定删除该地址?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$ajax.post(e.$apis.delete_address,{id:t.id}).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getWholeData()}).catch(function(t){console.log(t)})}).catch(function(){})},addAccount:function(){this.accountDialogVisible=!0},sureAddAccount:function(){var t=this;this.allowAddAccount=!0,this.accountData.supplierId=this.companyInfo.id,this.isModifyAccount?console.log(this.accountData,"???"):this.$ajax.post(this.$apis.add_account,this.accountData).then(function(e){t.allowAddAccount=!1,t.$message({message:"添加成功",type:"success"}),t.getWholeData(),t.accountDialogVisible=!1}).catch(function(e){t.allowAddAccount=!1,t.$message({message:e,type:"success"}),t.accountDialogVisible=!1})},modifyAccount:function(t){this.isModifyAccount=!0,this.accountData=s()({},t),this.accountDialogVisible=!0},deleteAccount:function(t){var e=this;this.$confirm("确定删除该账户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$ajax.post(e.$apis.delete_account,{id:t.id}).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getWholeData()}).catch(function(t){console.log(t)})}).catch(function(){})},addContact:function(){this.contactDialogVisible=!0},sureAddContact:function(){var t=this;this.allowAddContact=!0,this.contactData.supplierId=this.companyInfo.id,this.isModifyContact?this.$ajax.post(this.$apis.update_contact+"?id="+this.contactData.id,this.contactData).then(function(e){t.allowAddContact=!1,t.$message({message:"修改成功",type:"success"}),t.getWholeData(),t.contactDialogVisible=!1}).catch(function(e){t.allowAddContact=!1,t.contactDialogVisible=!1}):this.$ajax.post(this.$apis.add_contact,this.contactData).then(function(e){t.allowAddContact=!1,t.$message({message:"添加成功",type:"success"}),t.getWholeData(),t.contactDialogVisible=!1}).catch(function(e){t.allowAddContact=!1,t.$message({message:e,type:"success"}),t.contactDialogVisible=!1})},modifyContact:function(t){this.isModifyContact=!0,this.contactData=s()({},t),this.contactDialogVisible=!0},deleteContact:function(t){var e=this;this.$confirm("确定删除该联系人?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$ajax.post(e.$apis.delete_contact,{id:t.id}).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getWholeData()}).catch(function(t){console.log(t)})}).catch(function(){})}},created:function(){this.getWholeData(),console.log(this.$db,"db")},watch:{addressDialogVisible:function(e){var a=this;e||(t.map(this.addressData,function(t,e){a.$set(a.addressData,e,"")}),this.isModifyAddress=!1)},accountDialogVisible:function(e){var a=this;e||(t.map(this.accountData,function(t,e){a.$set(a.accountData,e,"")}),this.isModifyAccount=!1)},contactDialogVisible:function(e){var a=this;e||(t.map(this.contactData,function(t,e){a.$set(a.contactData,e,"")}),this.isModifyContact=!1)}}}}).call(e,a("u47Y"))},"9eQ9":function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".title[data-v-6b486974]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666}.speCol[data-v-6b486974]{height:51px}.speWidth[data-v-6b486974]{width:100%}.summary-btn[data-v-6b486974]{text-align:center}.section-btn[data-v-6b486974]{margin-bottom:10px}.section[data-v-6b486974]{margin-top:20px}.dialog-footer[data-v-6b486974]{text-align:center}",""])},TGsW:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company-info"},[a("div",{staticClass:"title"},[a("span",[a("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v("供应商!!! ")]),t._v(t._s(t.$i._setting.companyInfo))])]),t._v(" "),a("div",{staticClass:"summary"},[a("el-form",{ref:"summary",attrs:{model:t.companyInfo,rules:t.companyInfoRules,"label-width":"190px"}},[a("el-row",{staticClass:"speZone"},t._l(t.$db.setting.companyInfo,function(e){return"summary"===e.belong?a("el-col",{key:e.key,class:{speCol:"description"!==e.key},attrs:{xs:24,sm:e.fullLine?24:12,md:e.fullLine?24:12,lg:e.fullLine?24:8,xl:e.fullLine?24:8}},[a("el-form-item",{staticClass:"speWidth",attrs:{prop:e.key,label:e.label}},["input"===e.type?a("div",[a("el-input",{attrs:{disabled:"code"===e.key||t.summaryDisabled,size:"mini",placeholder:"请输入内容"},model:{value:t.companyInfo[e.key],callback:function(a){t.$set(t.companyInfo,e.key,a)},expression:"companyInfo[v.key]"}})],1):t._e(),t._v(" "),"select"===e.type?a("div",[a("el-select",{staticClass:"speWidth",attrs:{disabled:t.summaryDisabled,placeholder:"请选择"},model:{value:t.companyInfo[e.key],callback:function(a){t.$set(t.companyInfo,e.key,a)},expression:"companyInfo[v.key]"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{size:"mini",label:t.label,value:t.value}})}))],1):t._e(),t._v(" "),"textarea"===e.type?a("div",[a("el-input",{staticClass:"speWidth",attrs:{disabled:t.summaryDisabled,type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.companyInfo[e.key],callback:function(a){t.$set(t.companyInfo,e.key,a)},expression:"companyInfo[v.key]"}})],1):t._e()])],1):t._e()}))],1),t._v(" "),a("div",{staticClass:"summary-btn"},[t.summaryDisabled?a("div",[a("el-button",{on:{click:t.modifySummary}},[t._v(t._s(t.$i._setting.modify))])],1):a("div",[a("el-button",{attrs:{loading:t.allowModifySummary,type:"primary"},on:{click:t.saveModifySummary}},[t._v("保存")]),t._v(" "),a("el-button",{on:{click:t.cancelModifySummary}},[t._v("取消")])],1)])],1),t._v(" "),a("div",{staticClass:"section"},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:t.$i._setting.address}},[a("div",{staticClass:"section-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addAddress}},[t._v(t._s(t.$i._setting.add))])],1),t._v(" "),t.companyInfo.address.length?a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.companyInfo.address,border:""}},[a("el-table-column",{attrs:{prop:"name",align:"center",label:t.$i._setting.factoryName}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",align:"center",label:t.$i._setting.factoryAddress}}),t._v(" "),a("el-table-column",{attrs:{prop:"exportPort",align:"center",label:t.$i._setting.exportPort}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactPerson1",align:"center",label:t.$i._setting.contactPerson1}}),t._v(" "),a("el-table-column",{attrs:{prop:"concatPhone1",align:"center",label:t.$i._setting.contactPhoneNo1}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactPerson2",align:"center",label:t.$i._setting.contactPerson2}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactPhone2",align:"center",label:t.$i._setting.contactPhoneNo2}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:t.$i._setting.action},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.modifyAddreess(e.row)}}},[t._v(t._s(t.$i._setting.modify))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.deleteAddress(e.row)}}},[t._v(t._s(t.$i._setting.delete))])]}}])})],1):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$i._setting.accountInfo}},[a("div",{staticClass:"section-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addAccount}},[t._v(t._s(t.$i._setting.add))])],1),t._v(" "),t.companyInfo.accounts.length?a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.companyInfo.accounts,border:""}},[a("el-table-column",{attrs:{prop:"beneficiaryName",align:"center",label:t.$i._setting.beneficiaryName}}),t._v(" "),a("el-table-column",{attrs:{prop:"beneficiaryAccount",align:"center",label:t.$i._setting.beneficiaryAccount}}),t._v(" "),a("el-table-column",{attrs:{prop:"beneficiaryAddress",align:"center",label:t.$i._setting.beneficiaryAddress}}),t._v(" "),a("el-table-column",{attrs:{prop:"beneficiaryBankName",align:"center",label:t.$i._setting.beneficiaryBankName}}),t._v(" "),a("el-table-column",{attrs:{prop:"beneficiaryBankSwift",align:"center",label:t.$i._setting.beneficiaryBankSWIFT}}),t._v(" "),a("el-table-column",{attrs:{prop:"accountType",align:"center",label:t.$i._setting.accountType}}),t._v(" "),a("el-table-column",{attrs:{prop:"currency",align:"center",label:t.$i._setting.currency}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:t.$i._setting.action},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.modifyAccount(e.row)}}},[t._v(t._s(t.$i._setting.modify))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.deleteAccount(e.row)}}},[t._v(t._s(t.$i._setting.delete))])]}}])})],1):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$i._setting.contactInfo}},[a("div",{staticClass:"section-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addContact}},[t._v(t._s(t.$i._setting.add))])],1),t._v(" "),t.companyInfo.concats.length?a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.companyInfo.concats,border:""}},[a("el-table-column",{attrs:{prop:"name",align:"center",label:t.$i._setting.name}}),t._v(" "),a("el-table-column",{attrs:{prop:"deptName",align:"center",label:t.$i._setting.department}}),t._v(" "),a("el-table-column",{attrs:{prop:"gender",align:"center",label:t.$i._setting.gender}}),t._v(" "),a("el-table-column",{attrs:{prop:"cellphone",align:"center",label:t.$i._setting.mobileNumber}}),t._v(" "),a("el-table-column",{attrs:{prop:"telphone",align:"center",label:t.$i._setting.telNumber}}),t._v(" "),a("el-table-column",{attrs:{prop:"fax",align:"center",label:t.$i._setting.faxNumber}}),t._v(" "),a("el-table-column",{attrs:{prop:"email",align:"center",label:t.$i._setting.emailAddress}}),t._v(" "),a("el-table-column",{attrs:{prop:"skype",align:"center",label:t.$i._setting.skype}}),t._v(" "),a("el-table-column",{attrs:{prop:"qq",align:"center",label:t.$i._setting.qq}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:t.$i._setting.action},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.modifyContact(e.row)}}},[t._v(t._s(t.$i._setting.modify))]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.deleteContact(e.row)}}},[t._v(t._s(t.$i._setting.delete))])]}}])})],1):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$i._setting.attachment}},[t._v("定时任务补偿")])],1)],1),t._v(" "),a("el-dialog",{attrs:{width:"70%",title:t.$i._setting.address,visible:t.addressDialogVisible},on:{"update:visible":function(e){t.addressDialogVisible=e}}},[a("el-form",{attrs:{"label-width":"100px",model:t.addressData}},[a("el-row",[a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"name",label:t.$i._setting.factoryName}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.addressData.name,callback:function(e){t.$set(t.addressData,"name",e)},expression:"addressData.name"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"address",label:t.$i._setting.factoryAddress}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.addressData.address,callback:function(e){t.$set(t.addressData,"address",e)},expression:"addressData.address"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"exportPort",label:t.$i._setting.exportPort}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.addressData.exportPort,callback:function(e){t.$set(t.addressData,"exportPort",e)},expression:"addressData.exportPort"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"contactPerson1",label:t.$i._setting.contactPerson1}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.addressData.contactPerson1,callback:function(e){t.$set(t.addressData,"contactPerson1",e)},expression:"addressData.contactPerson1"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"concatPhone1",label:t.$i._setting.contactPhoneNo1}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.addressData.concatPhone1,callback:function(e){t.$set(t.addressData,"concatPhone1",e)},expression:"addressData.concatPhone1"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"contactPerson2",label:t.$i._setting.contactPerson2}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.addressData.contactPerson2,callback:function(e){t.$set(t.addressData,"contactPerson2",e)},expression:"addressData.contactPerson2"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"concatPhone2",label:t.$i._setting.contactPhoneNo2}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.addressData.concatPhone2,callback:function(e){t.$set(t.addressData,"concatPhone2",e)},expression:"addressData.concatPhone2"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addressDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{loading:t.allowAddAddress,type:"primary"},on:{click:t.sureAddAddress}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{width:"70%",title:t.$i._setting.accountInfo,visible:t.accountDialogVisible},on:{"update:visible":function(e){t.accountDialogVisible=e}}},[a("el-form",{attrs:{"label-width":"100px",model:t.accountData}},[a("el-row",[a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"name",label:t.$i._setting.beneficiaryName}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.accountData.beneficiaryName,callback:function(e){t.$set(t.accountData,"beneficiaryName",e)},expression:"accountData.beneficiaryName"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"address",label:t.$i._setting.beneficiaryAccount}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.accountData.beneficiaryAccount,callback:function(e){t.$set(t.accountData,"beneficiaryAccount",e)},expression:"accountData.beneficiaryAccount"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"exportPort",label:t.$i._setting.beneficiaryAddress}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.accountData.beneficiaryAddress,callback:function(e){t.$set(t.accountData,"beneficiaryAddress",e)},expression:"accountData.beneficiaryAddress"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"contactPerson1",label:t.$i._setting.beneficiaryBankName}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.accountData.beneficiaryBankName,callback:function(e){t.$set(t.accountData,"beneficiaryBankName",e)},expression:"accountData.beneficiaryBankName"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"concatPhone1",label:t.$i._setting.beneficiaryBankSWIFT}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.accountData.beneficiaryBankSwift,callback:function(e){t.$set(t.accountData,"beneficiaryBankSwift",e)},expression:"accountData.beneficiaryBankSwift"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"contactPerson2",label:t.$i._setting.accountType}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.accountData.accountType,callback:function(e){t.$set(t.accountData,"accountType",e)},expression:"accountData.accountType"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"concatPhone2",label:t.$i._setting.currency}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.accountData.currency,callback:function(e){t.$set(t.accountData,"currency",e)},expression:"accountData.currency"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.accountDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{loading:t.allowAddAccount,type:"primary"},on:{click:t.sureAddAccount}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{width:"70%",title:t.$i._setting.contactInfo,visible:t.contactDialogVisible},on:{"update:visible":function(e){t.contactDialogVisible=e}}},[a("el-form",{attrs:{"label-width":"100px",model:t.contactData}},[a("el-row",[a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"name",label:t.$i._setting.name}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.contactData.name,callback:function(e){t.$set(t.contactData,"name",e)},expression:"contactData.name"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"address",label:t.$i._setting.department}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.contactData.deptName,callback:function(e){t.$set(t.contactData,"deptName",e)},expression:"contactData.deptName"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"exportPort",label:t.$i._setting.gender}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.contactData.gender,callback:function(e){t.$set(t.contactData,"gender",e)},expression:"contactData.gender"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"contactPerson1",label:t.$i._setting.mobileNumber}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.contactData.cellphone,callback:function(e){t.$set(t.contactData,"cellphone",e)},expression:"contactData.cellphone"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"concatPhone1",label:t.$i._setting.telNumber}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.contactData.telphone,callback:function(e){t.$set(t.contactData,"telphone",e)},expression:"contactData.telphone"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"contactPerson2",label:t.$i._setting.faxNumber}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.contactData.fax,callback:function(e){t.$set(t.contactData,"fax",e)},expression:"contactData.fax"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"concatPhone2",label:t.$i._setting.emailAddress}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.contactData.email,callback:function(e){t.$set(t.contactData,"email",e)},expression:"contactData.email"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"concatPhone2",label:t.$i._setting.skype}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.contactData.skype,callback:function(e){t.$set(t.contactData,"skype",e)},expression:"contactData.skype"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{prop:"concatPhone2",label:t.$i._setting.qq}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.contactData.qq,callback:function(e){t.$set(t.contactData,"qq",e)},expression:"contactData.qq"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.contactDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{loading:t.allowAddContact,type:"primary"},on:{click:t.sureAddContact}},[t._v("确 定")])],1)],1)],1)},s=[];n._withStripped=!0;var o={render:n,staticRenderFns:s};e.a=o},eaIG:function(t,e,a){var n=a("9eQ9");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("FIqI")("ea21901a",n,!1,{})}});