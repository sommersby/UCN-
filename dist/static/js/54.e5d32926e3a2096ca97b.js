webpackJsonp([54],{"5xDK":function(e,t,a){var s=a("dQVJ");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("FIqI")("3072e43d",s,!1,{})},dQVJ:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".head{padding:10px 0}.box,.spe-div{padding-top:20px}.spe-div{overflow:hidden}.spe-div .View{float:left}.spe-div .search{float:right;margin-left:10px;margin-right:40px}",""])},fgdu:function(e,t,a){"use strict";function s(e){c||a("5xDK")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("nNmJ"),n=a("jmS9"),c=!1,o=a("Z0/y"),l=s,r=o(i.a,n.a,!1,l,null,null);r.options.__file="src\\views\\message\\message.vue",t.default=r.exports},jmS9:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message"},[a("div",{staticClass:"head"},[a("el-button",{on:{click:e.manageMessage}},[e._v(e._s(e.$i._baseText.messageManagement))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.postRead}},[e._v(e._s(e.$i._baseText.markAsRead))])],1),e._v(" "),a("div",{staticClass:"spe-div"},[a("div",{staticClass:"View"},[a("el-radio-group",{attrs:{size:""},model:{value:e.viewByStatus,callback:function(t){e.viewByStatus=t},expression:"viewByStatus"}},[a("el-radio-button",{attrs:{label:"1"}},[e._v(e._s(e.$i._messages.platformMessage))]),e._v(" "),a("el-radio-button",{attrs:{label:"2"}},[e._v(e._s(e.$i._messages.companyMessage))]),e._v(" "),a("el-radio-button",{attrs:{label:"3"}},[e._v(e._s(e.$i._messages.messageSetting))])],1)],1),e._v(" "),a("div",{staticClass:"search"},[a("select-search",{staticClass:"search",attrs:{options:e.options,searchLoad:e.searchLoad},on:{inputChange:e.inputEnter}})],1)]),e._v(" "),a("div",{staticClass:"main"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isHide,expression:"isHide"}]},[a("v-table",{attrs:{data:e.tabData},on:{"change-checked":e.changeChecked}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"box"},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-table",{ref:"tableData",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"Message Type",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.messageType))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Notification Method",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticStyle:{display:"inline-block"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[a("el-checkbox",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("Email")])],1),e._v(" "),a("el-checkbox",{attrs:{disabled:""},model:{value:e.checked1,callback:function(t){e.checked1=t},expression:"checked1"}},[e._v("Platform")])]}}])})],1),e._v(" "),a("br")],1)],1)]),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("span",[e._v("系统通过邮件来发送消息")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("确 定")])],1)])],1)},i=[];s._withStripped=!0;var n={render:s,staticRenderFns:i};t.a=n},nNmJ:function(e,t,a){"use strict";(function(e){var s=a("a3Yh"),i=a.n(s),n=a("bGai");t.a={name:"message",components:{VTable:n.b,selectSearch:n.c},data:function(){var e;return e={searchLoad:!1,viewByStatus:"",isShow:!1,isHide:!0,centerDialogVisible:!1,options:[{id:"1",label:"Tittle"},{id:"2",label:"Content"}],activeName:"System Message",multipleSelection:[],currentPage:1,tableData:[],params:{mark:0,content:"",ps:10,pn:1},checked:{},checked1:!0,tabData:[],checkedData:[]},i()(e,"activeName","System Message"),i()(e,"checkValues",[]),i()(e,"updatesetting",{id:"",subscribeEmail:0,subscribePlatform:1}),e},methods:{handleClick:function(e,t){console.log(e,t)},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)},changeChecked:function(e){this.checkedData=e},handleEdit:function(e,t){var a=this,s=this.$apis.post_messagesetting_updatesetting;this.updatesetting.id=t.id,console.log(t),1===t.subscribeEmail?(this.updatesetting.subscribeEmail=0,this.$ajax.post(s,this.updatesetting).then(function(e){a.$message("系统关闭邮件来发送消息")})):(this.updatesetting.subscribeEmail=1,this.$ajax.post(s,this.updatesetting).then(function(e){a.$message("系统通过邮件来发送消息"),a.checked=!0}))},manageMessage:function(){this.viewByStatus+""=="1"?this.$router.push({path:"/message/messageManagement",query:{type:1}}):this.$router.push({path:"/message/messageManagement",query:{type:2}})},handleCheckedCitiesChange:function(e){},inputEnter:function(e){return e.keyType?e.key?(this.params.mark=e.keyType,this.params.content=e.key,void(this.searchLoad=!0)):this.$message("搜索内容不能为空"):this.$message("请选中搜索类型")},getDataInfo:function(){var e=this,t=void 0,a=void 0;this.tabLoad=!0,a=this.$db.message.table,t=this.viewByStatus+""=="1"?this.$apis.post_systemmessage_query:this.$apis.post_companymessage_query,this.$ajax.post(t,this.params).then(function(t){e.tabData=e.$getDB(a,t.datas),e.tabData=e.$getDB(a,t.datas,function(e){return e}),e.tabLoad=!1,e.searchLoad=!1}).catch(function(){e.searchLoad=!1,e.tabLoad=!1})},postRead:function(){var t=this,a=void 0;a=this.viewByStatus+""=="1"?this.$apis.post_sys_updateread:this.$apis.post_company_updateread;var s=[];e.map(this.checkedData,function(t){e.isUndefined(t)||s.push(e.findWhere(t,{key:"subscribeId"}).value)}),this.$ajax.post(a,s).then(function(e){t.$message("系统将消息置为已读")}).catch(function(){})},getMessageQuery:function(){var t=this,a=this.$apis.get_messagesetting_query;this.$ajax.get(a).then(function(a){a=e.map(a,function(e){switch(e.messageType){case 1:e.messageType="System message";break;case 2:e.messageType="company message";break;case 3:e.messageType="Pending task";break;case 4:e.messageType="Future task";break;case 5:e.messageType="Push";break;case 6:e.messageType="FYI"}return e}),t.tableData=a}).catch(function(){})}},watch:{viewByStatus:function(){3==this.viewByStatus?(this.isShow=!0,this.isHide=!1):(this.isShow=!1,this.isHide=!0)}},created:function(){this.getDataInfo(),this.getMessageQuery()}}}).call(t,a("u47Y"))}});