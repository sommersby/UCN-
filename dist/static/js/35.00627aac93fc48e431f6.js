webpackJsonp([35],{"+MM8":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"department-setting"},[a("div",{staticClass:"title"},[e._v("\n        Department Setting\n    ")]),e._v(" "),a("div",{staticClass:"body"},[a("el-row",[a("el-col",{attrs:{offset:1,span:7}},[a("div",{staticClass:"card department"},[a("div",{staticClass:"title"},[e._v("Department")]),e._v(" "),a("div",{staticClass:"handler"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addDepartment}},[e._v("Add")])],1),e._v(" "),a("el-col",{attrs:{span:16}},[a("el-input",{attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:e.searchDepartment,callback:function(t){e.searchDepartment=t},expression:"searchDepartment"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1)],1),e._v(" "),a("div",{staticClass:"list"},[a("div",{staticClass:"list-title"},[e._v("All "),a("span",[e._v("("+e._s(e.departmentUserTotal)+"人)")])]),e._v(" "),a("el-tree",{ref:"departmentTree",staticClass:"departmentTree",attrs:{data:e.departmentData,props:e.departmentProps,"node-key":"deptId","default-expand-all":"","expand-on-click-node":!1,"render-content":e.renderDepartment,"filter-node-method":e.filterDepartment},on:{"node-click":e.departmentClick}})],1)])]),e._v(" "),a("el-col",{attrs:{span:7}},[a("div",{staticClass:"card role"},[a("div",{staticClass:"title"},[e._v("Role")]),e._v(" "),a("div",{staticClass:"handler"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-button",{attrs:{disabled:!e.userData.deptId,size:"small",type:"primary"},on:{click:e.addRole}},[e._v("Add")])],1),e._v(" "),a("el-col",{attrs:{span:16}},[a("el-input",{attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:e.searchRole,callback:function(t){e.searchRole=t},expression:"searchRole"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1)],1),e._v(" "),a("div",{staticClass:"list"},[a("div",{staticClass:"list-title"},[e._v("All "),a("span",[e._v("("+e._s(e.roleUserTotal)+"人)")])]),e._v(" "),a("el-tree",{ref:"roleTree",staticClass:"speTree",attrs:{data:e.roleData,props:e.roleProps,"show-checkbox":"","node-key":"roleId","default-expand-all":"","expand-on-click-node":!1,"render-content":e.renderRole,"filter-node-method":e.filterRole},on:{check:e.roleCheckClick,"node-click":e.roleClick}})],1)])]),e._v(" "),a("el-col",{attrs:{span:7}},[a("div",{staticClass:"card"},[a("div",{staticClass:"title"},[e._v("Privs")]),e._v(" "),a("div",{staticClass:"handler"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{size:"small",placeholder:"请输入"},model:{value:e.searchPrivs,callback:function(t){e.searchPrivs=t},expression:"searchPrivs"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1)],1),e._v(" "),a("div",{staticClass:"list"},[a("el-tree",{attrs:{data:e.data2,"show-checkbox":"","node-key":"id","default-expand-all":!0,props:e.defaultProps}})],1)])])],1)],1),e._v(" "),a("div",{staticClass:"footer"},[a("div",{staticClass:"title"},[e._v("Belonging Users")]),e._v(" "),a("div",{staticClass:"btns"},[a("el-button",{on:{click:e.addUsers}},[e._v("Add")]),e._v(" "),a("el-button",[e._v("Invite")]),e._v(" "),a("el-button",[e._v("Download (all)")])],1),e._v(" "),a("div",{staticClass:"content"},[a("el-form",{ref:"userData",attrs:{model:e.userData,"label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[a("el-form-item",{attrs:{prop:"email",label:e.$i.departmentSetting.email}},[a("el-input",{attrs:{size:"mini"},model:{value:e.userData.email,callback:function(t){e.$set(e.userData,"email",t)},expression:"userData.email"}})],1)],1),e._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[a("el-form-item",{attrs:{prop:"userName",label:e.$i.departmentSetting.userName}},[a("el-input",{attrs:{size:"mini"},model:{value:e.userData.userName,callback:function(t){e.$set(e.userData,"userName",t)},expression:"userData.userName"}})],1)],1),e._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[a("el-form-item",{attrs:{prop:"gender",label:e.$i.departmentSetting.gender}},[a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.userData.gender,callback:function(t){e.$set(e.userData,"gender",t)},expression:"userData.gender"}},e._l(e.genderOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[a("el-form-item",{attrs:{prop:"status",label:e.$i.departmentSetting.status}},[a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.userData.status,callback:function(t){e.$set(e.userData,"status",t)},expression:"userData.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"btn"},[a("el-button",{staticClass:"serachBtn",attrs:{loading:e.disabledSearch,type:"primary"},on:{click:e.searchUser}},[e._v(e._s(e.$i.departmentSetting.search))])],1),e._v(" "),a("v-table",{ref:"vTable",staticClass:"speTable",attrs:{data:e.tableDataList,buttons:e.setButton},on:{"change-checked":e.changeChecked,action:e.btnClick}})],1)]),e._v(" "),a("el-dialog",{staticClass:"speDialog",attrs:{title:"修改",visible:e.editUserVisible,width:"30%"},on:{"update:visible":function(t){e.editUserVisible=t}}},[a("el-form",{attrs:{model:e.editUser}},[a("el-form-item",{attrs:{label:"活动名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editUser.name,callback:function(t){e.$set(e.editUser,"name",t)},expression:"editUser.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"活动区域","label-width":e.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.editUser.region,callback:function(t){e.$set(e.editUser,"region",t)},expression:"editUser.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editUserVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editUserVisible=!1}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"speDialog",attrs:{title:"Add New User",visible:e.addUserVisible,width:"60%"},on:{"update:visible":function(t){e.addUserVisible=t}}},[a("el-form",{attrs:{model:e.addUser}},[a("el-row",[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"活动名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addUser.name,callback:function(t){e.$set(e.addUser,"name",t)},expression:"addUser.name"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addUserVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addUserVisible=!1}}},[e._v("确 定")])],1)],1)],1)},s=[];n._withStripped=!0;var r={render:n,staticRenderFns:s};t.a=r},"1kgS":function(e,t,a){"use strict";function n(e){l||a("l/NC")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("lYuQ"),r=a("+MM8"),l=!1,i=a("Z0/y"),o=n,d=i(s.a,r.a,!1,o,"data-v-0c922759",null);d.options.__file="src\\views\\settings\\departmentSetting.vue",t.default=d.exports},ZAHb:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".title[data-v-0c922759]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666}.body[data-v-0c922759]{margin-top:5px}.body .card[data-v-0c922759]{height:430px;border:1px solid #e0e0e0;border-radius:5px;-webkit-box-shadow:0 0 30px #e0e0e0;box-shadow:0 0 30px #e0e0e0}.body .card .title[data-v-0c922759]{font-weight:400;font-size:14px;padding:5px 10px;border-bottom:1px solid #f3f3f3}.body .card .handler[data-v-0c922759]{padding:10px;border-bottom:1px solid #f3f3f3}.body .card .handler .speInput[data-v-0c922759]{width:auto;float:right}.body .card .list[data-v-0c922759]{height:320px;overflow-y:scroll}.body .card .list .list-title[data-v-0c922759]{font-weight:700;height:30px;line-height:30px;padding-left:15px;font-size:18px}.body .card .list .list-title span[data-v-0c922759]{font-weight:400;font-size:14px;margin-left:10px}.departmentTree[data-v-0c922759] .el-tree-node .el-tree-node__content{height:40px;border-bottom:1px solid #e0e0e0}[data-v-0c922759] .custom-tree-node{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;padding-right:8px}[data-v-0c922759] .custom-tree-node .el-button--small{font-size:17px}[data-v-0c922759] .treeBtn{visibility:hidden}[data-v-0c922759] .el-tree-node__content:hover .treeBtn{visibility:visible}[data-v-0c922759] .speTree .el-tree-node__children .el-tree-node{height:50px}[data-v-0c922759] .speTree .el-tree-node__children .el-tree-node .el-tree-node__content{height:50px;border-bottom:1px solid #e0e0e0}.footer[data-v-0c922759]{margin-top:10px;margin-bottom:20px}.footer .content[data-v-0c922759]{margin-top:10px}.footer .btn[data-v-0c922759]{text-align:center}.footer .btn button[data-v-0c922759]{padding:9px 25px!important}.footer .btns[data-v-0c922759]{margin-top:5px}",""])},"l/NC":function(e,t,a){var n=a("ZAHb");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("1baa2010",n,!1,{})},lYuQ:function(e,t,a){"use strict";var n=a("QGvi"),s=a("BMa3");a.n(s);t.a={name:"department-setting",components:{VTable:n.a},data:function(){return{disabledSearch:!1,editUserVisible:!1,addUserVisible:!1,formLabelWidth:"100px",allowRoleGetData:!1,departmentData:[],departmentProps:{label:"deptName"},departmentUserTotal:0,roleData:[{id:1,roleName:"全部",children:[]}],roleProps:{label:"roleName"},roleUserTotal:0,searchDepartment:"",searchRole:"",searchPrivs:"",userData:{email:"",userName:"",gender:null,status:null,ps:50,pn:1,deptId:null,roleIds:null},tableDataList:[],editUser:{id:0,deptId:0,roleIds:0,userName:"string",lang:"string",email:"string",tel:"string",gender:0,birthday:"string",remark:"string"},addUser:{deptId:0,roleId:0,userName:"string",lang:"string",email:"string",tel:"string",gender:0,birthday:"string",remark:"string"},genderOptions:[{label:"男",value:0},{label:"女",value:1},{label:"未知性别",value:2}],statusOptions:[{label:"未激活",value:0},{label:"已激活",value:1},{label:"禁用",value:2}],data2:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}],defaultProps:{children:"children",label:"label"}}},methods:{renderDepartment:function(e,t){var a=this,n=t.node,s=t.data;t.store;return s.children?e("span",{class:"custom-tree-node"},[e("span",[n.label])]):e("span",{class:"custom-tree-node"},[e("span",[n.label+" ("+n.data.deptUserCount+"人)"]),e("span",[e("el-button",{class:"treeBtn",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(){return a.modifyDepartment(s,n)}}}),e("el-button",{class:"treeBtn",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(){return a.deleteDepartment(s,n)}}})])])},renderRole:function(e,t){var a=this,n=t.node,s=t.data;t.store;return s.children?e("span",{class:"custom-tree-node"},[e("span",[n.label])]):e("span",{class:"custom-tree-node"},[e("span",[n.label+" ("+n.data.roleUserCount+"人)"]),e("span",[e("el-button",{class:"treeBtn",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(){return a.modifyRole(s,n)}}}),e("el-button",{class:"treeBtn",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(){return a.deleteRole(s,n)}}})])])},getDepartmentData:function(){var e=this;this.$ajax.get(this.$apis.get_departmentOverview).then(function(t){e.departmentData=t,e.departmentData.forEach(function(t){e.departmentUserTotal+=t.deptUserCount})})},getDepartmentUser:function(){var e=this;this.$ajax.post(this.$apis.get_departmentUser,{ps:50,pn:1,deptId:null,roleIds:null,userName:"",email:"",gender:null,status:null}).then(function(t){e.tableDataList=e.$getDB(e.$db.setting.department,t.datas)}).catch(function(e){})},setButton:function(e){return[{label:"Edit",type:1},{label:"13158687582"===e.tel.value?"Enable":"Disabled",type:2}]},departmentClick:function(e,t,a){var n=this;console.log(e),this.allowRoleGetData=!1,this.userData.deptId=e.deptId,this.userData.roleIds=null,this.userData.pn=1,this.userData.email="",this.userData.userName="",this.userData.gender=null,this.userData.status=null,this.roleData[0].children=this.$copyArr(e.deptRoles),this.roleUserTotal=0,this.departmentData.forEach(function(e){n.userData.deptId===e.deptId&&e.deptRoles.forEach(function(e){n.roleUserTotal+=e.roleUserCount})});var s=this.$loading({lock:!0,text:"Loading",background:"rgba(255, 255, 255, 0.7)",target:".role"});this.$ajax.post(this.$apis.get_departmentUser,this.userData).then(function(e){n.tableDataList=n.$getDB(n.$db.setting.department,e.datas),n.$nextTick(function(){n.roleData[0].children.forEach(function(e){n.$refs.roleTree.setChecked(e,!0,!1)}),s.close()})}).catch(function(e){})},roleCheckClick:function(){var e=this,t=this.$refs.roleTree.getCheckedNodes(!0),a=[];t.forEach(function(e){e.children||a.push(e.roleId)}),a.length?this.userData.roleIds=a:this.userData.roleIds=[-1];var n=this.$loading({lock:!0,text:"Loading",background:"rgba(255, 255, 255, 0.7)",target:".speTable"});this.$ajax.post(this.$apis.get_departmentUser,this.userData).then(function(t){e.tableDataList=e.$getDB(e.$db.setting.department,t.datas),n.close()}).catch(function(e){})},roleClick:function(e,t,a){},addDepartment:function(){var e=this;this.$prompt("请输入Department名称","Add Department",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnHashChange:!1,inputValidator:function(e){if(!e||""===e)return"请输入"}}).then(function(t){var a=t.value,n=!1;if(e.departmentData.forEach(function(e){e.deptName===a&&(n=!0)}),n)e.$message({message:"部门名称不能重复",type:"warning"});else{var s=e.$loading({lock:!0,text:"Loading",background:"rgba(255, 255, 255, 0.7)",target:".department"});e.$ajax.post(e.$apis.get_department,{deptName:a}).then(function(t){e.$message({message:"新增成功",type:"success"}),e.$ajax.get(e.$apis.get_departmentOverview).then(function(t){e.departmentUserTotal=0,e.departmentData=t,e.departmentData.forEach(function(t){e.departmentUserTotal+=t.deptUserCount}),s.close()}).catch(function(e){})}).catch(function(e){})}}).catch(function(){})},addRole:function(){var e=this;this.$prompt("请输入Role","Add Role",{confirmButtonText:"确定",cancelButtonText:"取消",inputValidator:function(e){if(!e||""===e)return"请输入"}}).then(function(t){var a=t.value,n=!1;if(e.roleData[0].children.forEach(function(e){e.roleName===a&&(n=!0)}),n)e.$message({message:"role名称不能重复",type:"warning"});else{var s=e.$loading({lock:!0,text:"Loading",background:"rgba(255, 255, 255, 0.7)",target:".department"});e.$ajax.post(e.$apis.add_departmentRole,{deptId:e.userData.deptId,roleName:a}).then(function(t){e.$ajax.get(e.$apis.get_departmentOverview).then(function(t){e.departmentData=t,e.departmentData.forEach(function(t){e.departmentUserTotal+=t.deptUserCount});var a=void 0;e.departmentData.forEach(function(t){t.deptId===e.userData.deptId&&(a=t)}),e.roleData[0].children=e.$copyArr(a.deptRoles),e.roleUserTotal=0,a.deptRoles.forEach(function(t){e.roleUserTotal+=t.roleUserCount}),e.$nextTick(function(){e.roleData[0].children.forEach(function(t){e.$refs.roleTree.setChecked(t,!0,!1)}),e.userData.roleIds=null,e.$ajax.post(e.$apis.get_departmentUser,e.userData).then(function(t){e.$message({message:"新增成功",type:"success"}),s.close(),e.tableDataList=e.$getDB(e.$db.setting.department,t.datas)}).catch(function(e){s.close()})})}).catch(function(e){s.close()})}).catch(function(e){s.close()})}}).catch(function(){e.$message({type:"info",message:"取消输入"})})},filterDepartment:function(e,t){return!e||-1!==t.deptName.indexOf(e)},filterRole:function(e,t){return!e||-1!==t.roleName.indexOf(e)},modifyDepartment:function(e,t){var a=this;this.$prompt("请输入Department","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:e.deptName}).then(function(t){var n=t.value,s=!1;if(a.departmentData.forEach(function(e){e.deptName===n&&(s=!0)}),s)a.$message({message:"部门名称不能重复",type:"warning"});else{var r=a.$loading({lock:!0,text:"Loading",background:"rgba(255, 255, 255, 0.7)",target:".department"});a.$ajax.put(a.$apis.get_department,{deptId:e.deptId,deptName:n}).then(function(e){a.$message({message:"修改成功",type:"success"}),a.$ajax.get(a.$apis.get_departmentOverview).then(function(e){a.departmentUserTotal=0,a.departmentData=e,a.departmentData.forEach(function(e){a.departmentUserTotal+=e.deptUserCount}),r.close()}).catch(function(e){})}).catch(function(e){})}}).catch(function(){})},modifyRole:function(e,t){var a=this;this.$prompt("请输入Role","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:e.label}).then(function(t){var n=t.value,s=!1;if(a.roleData[0].children.forEach(function(e){e.roleName===n&&(s=!0)}),s)a.$message({message:"role名称不能重复",type:"warning"});else{var r=a.$loading({lock:!0,text:"Loading",background:"rgba(255, 255, 255, 0.7)",target:".role"});a.$ajax.put(a.$apis.add_departmentRole,{roleId:e.roleId,roleName:n}).then(function(t){a.$ajax.get(a.$apis.get_departmentOverview).then(function(t){a.departmentUserTotal=0,a.departmentData=t,a.departmentData.forEach(function(e){a.departmentUserTotal+=e.deptUserCount}),a.roleData[0].children.forEach(function(t){t.roleId===e.roleId&&(t.roleName=n)}),a.$message({message:"修改成功",type:"success"}),r.close()}).catch(function(e){r.close()})}).catch(function(e){})}}).catch(function(){})},deleteDepartment:function(e,t){var a=this;e.deptUserCount?this.$message({message:"请先移除本部门下的角色和用户",type:"warning"}):this.$confirm("确定删除该部门?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){console.log(e),0!==e.deptRoles.length?a.$message({message:"请先移除本部门下的角色和用户",type:"warning"}):a.$ajax.delete(a.$apis.delete_department,{deptId:e.deptId}).then(function(e){var t=a.$loading({lock:!0,text:"Loading",background:"rgba(255, 255, 255, 0.7)",target:".department"});a.$ajax.get(a.$apis.get_departmentOverview).then(function(e){a.departmentUserTotal=0,a.departmentData=e,a.departmentData.forEach(function(e){a.departmentUserTotal+=e.deptUserCount}),a.$message({type:"success",message:"删除成功!"}),t.close()}).catch(function(e){})}).catch(function(e){})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},deleteRole:function(e,t){var a=this;e.roleUserCount?this.$message({message:"请先移除本部门下用户",type:"warning"}):this.$confirm("确定删除该Role?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$ajax.delete(a.$apis.delete_departmentRole,{deptId:a.userData.deptId,roleId:e.roleId}).then(function(t){var n=void 0;a.roleData[0].children.forEach(function(t,a){t.roleId===e.roleId&&(n=a)}),a.roleData[0].children.splice(n,1),a.$ajax.get(a.$apis.get_departmentOverview).then(function(e){a.departmentData=e,a.departmentData.forEach(function(e){a.departmentUserTotal+=e.deptUserCount}),a.$nextTick(function(){var e=a.$refs.roleTree.getCheckedNodes(!0),t=[];e.forEach(function(e){e.children||t.push(e.roleId)}),t.length?a.userData.roleIds=t:a.userData.roleIds=[-1];var n=a.$loading({lock:!0,text:"Loading",background:"rgba(255, 255, 255, 0.7)",target:".speTable"});a.$ajax.post(a.$apis.get_departmentUser,a.userData).then(function(e){a.tableDataList=a.$getDB(a.$db.setting.department,e.datas),a.$message({type:"success",message:"删除成功!"}),n.close()}).catch(function(e){n.close()})})}).catch(function(e){})}).catch(function(e){})}).catch(function(){})},changeChecked:function(e){console.log(e)},btnClick:function(e,t){1===t&&(console.log(e),this.editUserVisible=!0)},addUsers:function(){this.addUserVisible=!0},searchUser:function(){var e=this;0===this.$refs.roleTree.getCheckedNodes(!0).length&&this.userData.deptId||(this.disabledSearch=!0,this.$ajax.post(this.$apis.get_departmentUser,this.userData).then(function(t){e.tableDataList=e.$getDB(e.$db.setting.department,t.datas),e.disabledSearch=!1}).catch(function(t){console.log(t),e.disabledSearch=!1}))}},created:function(){this.getDepartmentData(),this.getDepartmentUser()},mounted:function(){},watch:{searchDepartment:function(e){this.$refs.departmentTree.filter(e)},searchRole:function(e){this.$refs.roleTree.filter(e)}}}}});