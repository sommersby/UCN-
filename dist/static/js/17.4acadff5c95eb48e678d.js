webpackJsonp([17],{"/ZX9":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category-setting"},[a("span",{staticStyle:{display:"none"},domProps:{textContent:e._s(e.upDataPage)}}),e._v(" "),a("div",{staticClass:"hd"},[e._v(e._s(e.$i.setting.categorySettingTitle))]),e._v(" "),a("div",{staticClass:"category-wrap"},[a("div",{staticClass:"maping-relation"},[a("h5",[e._v(e._s(e.$i.setting.mappingRelation))]),e._v(" "),a("div",{staticClass:"category"},[a("div",{staticClass:"hd input-hd"},[a("span",{staticClass:"text"},[a("b",[e._v(e._s(e.$i.setting.myCategory))]),e._v("("+e._s(e.$i.setting.generalCategory)+")("+e._s(e.$i.setting.tags)+") \n                    ")]),e._v(" "),a("el-input",{attrs:{placeholder:e.$i.basePlaceholder.inputkeyWordToSearch,"suffix-icon":"el-icon-search"},model:{value:e.mapingCategoryKeyWord,callback:function(t){e.mapingCategoryKeyWord=t},expression:"mapingCategoryKeyWord"}})],1),e._v(" "),a("el-tree",{directives:[{name:"show",rawName:"v-show",value:e.mappingRelationData.length>=1,expression:"mappingRelationData.length >= 1"}],ref:"tree2",staticClass:"filter-tree",attrs:{data:e.mappingRelationData,props:e.treeProps,"filter-node-method":e.filterNode,"default-expand-all":""}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.mappingRelationData.length<=0,expression:"mappingRelationData.length <= 0"}],staticClass:"mappingRelation"},[e._v(e._s(e.$i.setting.mappingNoData))])],1)]),e._v(" "),a("div",{staticClass:"my-category"},[a("h5",[e._v(e._s(e.$i.setting.myCategory))]),e._v(" "),a("div",{staticClass:"category"},[a("div",{staticClass:"input-hd"},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.add(e.myCategoryData,"parents")}}},[e._v(e._s(e.$i.baseText.add))]),a("el-input",{attrs:{placeholder:e.$i.basePlaceholder.inputkeyWordToSearch,"suffix-icon":"el-icon-search"},model:{value:e.myCategoryKeyWord,callback:function(t){e.myCategoryKeyWord=t},expression:"myCategoryKeyWord"}})],1),e._v(" "),a("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:e.myCategoryData,props:e.defaultProps,"default-expand-all":"","highlight-current":"","filter-node-method":e.filterNode,"render-content":e.renderContent,"expand-on-click-node":!1},on:{"node-click":e.myCategoryChange}})],1)]),e._v(" "),a("div",{staticClass:"mapping"},[a("span",[e._v(e._s(e.$i.setting.mapping))]),a("i")]),e._v(" "),a("div",{staticClass:"general-category"},[a("h5",[e._v(e._s(e.$i.setting.generalCategory))]),e._v(" "),a("div",{staticClass:"category"},[a("div",{staticClass:"input-hd"},[a("el-input",{attrs:{placeholder:e.$i.basePlaceholder.inputkeyWordToSearch,"suffix-icon":"el-icon-search"},model:{value:e.generalCategoryKeyWord,callback:function(t){e.generalCategoryKeyWord=t},expression:"generalCategoryKeyWord"}})],1),e._v(" "),a("el-tree",{ref:"tree1",attrs:{data:e.mgeneralCategoryData,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"","filter-node-method":e.filterNode,props:e.defaultProps},on:{"check-change":e.generalCategoryChange}}),e._v(" "),a("div",{staticClass:"btn-wrap"},[a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v(e._s(e.$i.baseText.save))])],1)],1)])])])},n=[];i._withStripped=!0;var o={render:i,staticRenderFns:n};t.a=o},"3Osz":function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"[data-v-353edecd] .custom-tree-node{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;padding-right:8px}[data-v-353edecd] .custom-tree-node .el-icon-edit{display:inline-block}[data-v-353edecd] .custom-tree-node .el-icon-circle-plus-outline,[data-v-353edecd] .custom-tree-node .el-icon-edit,[data-v-353edecd] .custom-tree-node .el-icon-remove-outline{display:none;margin-right:5px}[data-v-353edecd] .custom-tree-node .icon-wrap{width:100px;text-align:right}[data-v-353edecd] .custom-tree-node:hover .el-icon-circle-plus-outline,[data-v-353edecd] .custom-tree-node:hover .el-icon-edit,[data-v-353edecd] .custom-tree-node:hover .el-icon-remove-outline{display:inline-block}[data-v-353edecd] .el-tree-node>.el-tree-node__children{overflow:visible}",""])},"6LUQ":function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,'.category-setting .hd[data-v-353edecd]{font-weight:700;font-size:16px}.category-setting .mappingRelation[data-v-353edecd]{font-size:16px;color:#666;text-align:center;line-height:50px}.category-setting .category-wrap[data-v-353edecd]{display:-webkit-box;display:-ms-flexbox;display:flex;padding:20px;overflow-x:auto}.category-setting .category-wrap .mapping[data-v-353edecd]{width:50px;height:30px;line-height:30px;padding:0 10px;background:#fff;color:#000;position:relative;margin-top:245px;margin-right:30px}.category-setting .category-wrap .mapping[data-v-353edecd]:after{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;background:#d7d7d7}.category-setting .category-wrap .mapping[data-v-353edecd]:before{content:" ";position:absolute;left:0;bottom:0;width:100%;height:1px;background:#d7d7d7}.category-setting .category-wrap .mapping i[data-v-353edecd]{z-index:0;height:100%;width:20px;position:absolute;right:0;top:0}.category-setting .category-wrap .mapping i[data-v-353edecd]:after{content:" ";position:absolute;left:0;top:0;width:40px;height:1px;background:#d7d7d7;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.category-setting .category-wrap .mapping i[data-v-353edecd]:before{content:" ";position:absolute;left:0;bottom:0;width:40px;height:1px;background:#d7d7d7;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.category-setting .category-wrap .mapping span[data-v-353edecd]{position:absolute;left:10px;line-height:30px;z-index:1}.category-setting .category-wrap h5[data-v-353edecd]{font-weight:400;font-size:20px;color:#666;padding:15px;border-bottom:1px solid #e0e0e0}.category-setting .category-wrap .general-category[data-v-353edecd],.category-setting .category-wrap .my-category[data-v-353edecd]{width:30vw}.category-setting .category-wrap .general-category[data-v-353edecd],.category-setting .category-wrap .maping-relation[data-v-353edecd],.category-setting .category-wrap .my-category[data-v-353edecd]{margin-right:15px;min-width:260px;background:#fff;border:1px solid #e0e0e0;-webkit-box-shadow:0 0 30px #e0e0e0;box-shadow:0 0 30px #e0e0e0;border-radius:5px}.category-setting .category-wrap .general-category .btn-wrap[data-v-353edecd],.category-setting .category-wrap .maping-relation .btn-wrap[data-v-353edecd],.category-setting .category-wrap .my-category .btn-wrap[data-v-353edecd]{padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.category-setting .category-wrap .general-category .category .input-hd[data-v-353edecd],.category-setting .category-wrap .maping-relation .category .input-hd[data-v-353edecd],.category-setting .category-wrap .my-category .category .input-hd[data-v-353edecd]{display:-webkit-box;display:-ms-flexbox;display:flex;height:32px;padding:10px 15px;border-bottom:1px solid #e0e0e0}.category-setting .category-wrap .general-category .category .el-tree[data-v-353edecd],.category-setting .category-wrap .maping-relation .category .el-tree[data-v-353edecd],.category-setting .category-wrap .my-category .category .el-tree[data-v-353edecd]{overflow:auto;height:50vh}.category-setting .category-wrap .maping-relation[data-v-353edecd]{width:40vw}.category-setting .category-wrap .maping-relation .hd .text[data-v-353edecd],.category-setting .category-wrap .maping-relation .hd[data-v-353edecd]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.category-setting .category-wrap .maping-relation .hd .text[data-v-353edecd]{color:#666;font-size:12px;white-space:nowrap}.category-setting .category-wrap .maping-relation .hd .text b[data-v-353edecd]{font-size:12px;white-space:nowrap;color:#ccc}',""])},"7eEK":function(e,t,a){var i=a("6LUQ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("d793f7de",i,!1,{})},"8qrv":function(e,t,a){var i=a("3Osz");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("d9fe79ce",i,!1,{})},QluG:function(e,t,a){"use strict";function i(e){r||(a("8qrv"),a("7eEK"))}Object.defineProperty(t,"__esModule",{value:!0});var n=a("vre7"),o=a("/ZX9"),r=!1,s=a("Z0/y"),c=i,d=s(n.a,o.a,!1,c,"data-v-353edecd",null);d.options.__file="src\\views\\settings\\CategorySetting.vue",t.default=d.exports},vre7:function(e,t,a){"use strict";t.a={name:"CategorySetting",data:function(){return{upDataPage:0,selectedNodes:[],myCategoryKeyWord:"",generalCategoryKeyWord:"",mapingCategoryKeyWord:"",myCategoryData:[],myCategory:"",mgeneralCategoryData:[],mappingRelationData:[],defaultProps:{children:"children",label:"name",id:"id"},treeProps:{children:"categorys",label:"name",id:"id"}}},created:function(){this.getMgeneralCategoryData(),this.getMyCategoryData(),this.getMappingCategory()},methods:{getMgeneralCategoryData:function(){var e=this;this.$ajax.get(this.$apis.sys_category).then(function(t){e.mgeneralCategoryData=t})},getMyCategoryData:function(){var e=this;this.$ajax.get(this.$apis.category).then(function(t){e.myCategoryData=t})},getMappingCategory:function(){var e=this;this.$ajax.get(this.$apis.mapping_category).then(function(t){e.mappingRelationData=t,e.mappingRelationDataSplit(e.mappingRelationData)})},mappingRelationDataSplit:function(e){var t=this;e.forEach(function(e,a){e.builder&&(e.name=e.name+"("+e.builder+")"),e[t.treeProps.children].length&&e[t.treeProps.children]&&t.mappingRelationDataSplit(e[t.treeProps.children])})},addData:function(e,t,a,i){var n={id:e,name:a,parentId:t.id,isActive:!1,children:[]};"parents"===i?t.push(n):t.children.push(n),this.getMappingCategory()},addNewCategory:function(e,t,a){var i=this,n={parentId:e.id||0,name:t};this.$ajax.post(this.$apis.category,n).then(function(n){i.addData(n,e,t,a),i.myCategory=""})},filterNode:function(e,t){return!e||-1!==t[this.defaultProps.label].indexOf(e)},renderContent:function(e,t){var a=this,i=t.node,n=t.data;t.store;return e("span",{class:"custom-tree-node"},[e("span",[i.label]),e("span",{class:"icon-wrap",on:{click:function(e){e.cancelBubble=!0}}},[e("i",{class:"el-icon-edit",on:{click:function(){return a.edit(n)}}}),e("i",{class:"el-icon-remove-outline",on:{click:function(){return a.remove(i,n)}}}),e("i",{class:"el-icon-circle-plus-outline",on:{click:function(){return a.add(n)}}})])])},remove:function(e,t){var a=this,i=e.parent,n=i.data.children||i.data,o=n.findIndex(function(e){return e.id===t.id}),r=n[o].id;if(t.children&&t.children.length)return this.$message({type:"info",message:"请先删除子节点!"});this.$confirm("此操作将永久删除该分类以及映射关系, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$ajax.get(a.$apis.delete_category+"/{id}",{id:r}).then(function(e){a.getMappingCategory(),n.splice(o,1),a.$message({type:"success",message:"删除成功!"})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},add:function(e,t){var a=this;this.$prompt("添加分类","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(i){var n=i.value;return n?"parents"===t?a.addNewCategory(e,n,t):void(e.children&&e.children.length?a.addNewCategory(e,n,t):a.$ajax.get(a.$apis.mapping_category+"/{id}",{id:e.id}).then(function(i){if(!i)return a.addNewCategory(e,n,t);a.$confirm("添加子集会导致父级节点对应关系被清空，请问确定添加吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.addNewCategory(e,n,t)}).catch(function(){return!1})})):a.$message({message:"分类名不能为空",type:"warning"})})},edit:function(e){var t=this;this.$prompt("请编辑","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:e.name}).then(function(a){var i=a.value;return i?e.name===i?t.$message({type:"info",message:"不修改和以前同"}):void t.$ajax.post(t.$apis.category+"/{id}?name={name}",{id:e.id,name:i}).then(function(a){e.name=i,t.getMappingCategory()}):t.$message({message:"不能为空",type:"warning"})}).catch(function(){})},genCheckBox:function(e,t){var a=this;t.forEach(function(t){e?e===t.id+""&&a.$refs.tree1.setChecked(t.id,!0,!0):a.$refs.tree1.setChecked(t.id,!1,!0),t[a.defaultProps.children]&&t[a.defaultProps.children].length&&a.genCheckBox(e,t[a.defaultProps.children])})},myCategoryChange:function(e){var t=this;if(e.children&&e.children.length)return this.$message({type:"info",message:"父节点不能添加映射关系"});this.myCategory=e.id,this.$ajax.get(this.$apis.mapping_category+"/{id}",{id:e.id}).then(function(e){if(e){e.split(",").forEach(function(e){t.genCheckBox(e,t.mgeneralCategoryData)})}else t.genCheckBox("",t.mgeneralCategoryData)})},save:function(){var e=this,t=[];this.selectedNodes.forEach(function(e){t.push(e.id)});var a={categoryId:this.myCategory,sysId:t.toString()};return a.categoryId?a.sysId?void this.$ajax.post(this.$apis.mapping_category,a).then(function(t){e.mappingRelationData=t,e.mappingRelationDataSplit(e.mappingRelationData)}):this.$message({type:"info",message:"请勾选系统分类"}):this.$message({type:"info",message:"请先选择分类"})},generalCategoryChange:function(e){this.selectedNodes=this.$refs.tree1.getCheckedNodes(!0)}},watch:{myCategoryKeyWord:function(e){this.$refs.tree.filter(e)},generalCategoryKeyWord:function(e){this.$refs.tree1.filter(e)},mapingCategoryKeyWord:function(e){this.$refs.tree2.filter(e)}}}}});