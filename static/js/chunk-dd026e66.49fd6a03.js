(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd026e66"],{"0506":function(t,e,a){},"1b20":function(t,e,a){"use strict";a("2764")},2764:function(t,e,a){},4055:function(t,e,a){"use strict";a("0506")},c20e:function(t,e,a){},fa50:function(t,e,a){"use strict";a.r(e);var n,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-row",{staticStyle:{"padding-right":"8px","margin-bottom":"30px"},attrs:{gutter:0}},[a("el-col",{attrs:{xs:24}},[a("div",{staticClass:"operationBtn"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-setting"},on:{click:function(e){t.dialogOne=!0}}},[t._v(t._s(t.$t("btcBatchBalance.settings")))]),a("el-button",{attrs:{type:"primary",icon:"el-icon-sort-down"},on:{click:function(e){t.dialogThree=!0}}},[t._v(t._s(t.$t("btcBatchBalance.import")))]),a("el-button",{attrs:{type:"primary",icon:"el-icon-sort-up"},on:{click:t.onExportTable}},[t._v(t._s(t.$t("btcBatchBalance.export")))]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:t.onDelAllSelectList}},[t._v(t._s(t.$t("btcBatchBalance.delete")))])],1)])],1),a("el-row",{staticStyle:{"margin-bottom":"30px"},attrs:{gutter:0}},[a("el-col",{attrs:{xs:{span:24}}},[a("TransactionTable",{attrs:{list:t.list},on:{onSelectTableList:t.onSelectTableList}})],1)],1),a("el-row",{staticClass:"formBox",attrs:{gutter:0}},[a("el-col",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.onUpbalance}},[t._v(t._s(t.$t("btcBatchBalance.check_balance")))])],1)],1),a("el-dialog",{attrs:{title:t.$t("btcBatchBalance.settings"),visible:t.dialogOne},on:{"update:visible":function(e){t.dialogOne=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:t.$t("btcBatchBalance.rpc_node")}},[a("el-select",{model:{value:t.form.rpc_node,callback:function(e){t.$set(t.form,"rpc_node",e)},expression:"form.rpc_node"}},t._l(t.rpc_node,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:t.$t("btcBatchBalance.threads")}},[a("el-input",{staticStyle:{color:"#000","font-size":"x-large"},attrs:{autocomplete:"off"},model:{value:t.form.task_num,callback:function(e){t.$set(t.form,"task_num",e)},expression:"form.task_num"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogOne=!1}}},[t._v(t._s(t.$t("btcBatchBalance.close")))]),a("el-button",{attrs:{type:"primary"},on:{click:t.onSetting}},[t._v(t._s(t.$t("btcBatchBalance.confirm")))])],1)],1),a("el-dialog",{attrs:{title:t.$t("btcBatchBalance.import_address"),visible:t.dialogThree},on:{"update:visible":function(e){t.dialogThree=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:t.$t("btcBatchBalance.input_alert_1")}},[a("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.form.prvlist,callback:function(e){t.$set(t.form,"prvlist",e)},expression:"form.prvlist"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogThree=!1}}},[t._v(t._s(t.$t("btcBatchBalance.close")))]),a("el-button",{attrs:{type:"primary"},on:{click:t.onLead}},[t._v(t._s(t.$t("btcBatchBalance.import")))])],1)],1)],1)},c=[],l=(a("4de4"),a("caad"),a("d81d"),a("d3b7"),a("ac1f"),a("2532"),a("1276"),a("498a"),a("96cf"),a("1da1")),s={zh:{btcBatchBalance:{settings:"设置",import:"导入地址",import_address:"导入地址",import_succeeded:"导入成功",export_succeeded:"导出成功",export:"导出选中",delete:"删除选中",rpc_node:"RPC 节点",threads:"线程",network_error_auto:"网络错误自动连接",open:"开启",close:"关闭",confirm:"确认",input_alert_1:"格式:一行一个",input_alert_7:"查询余额完毕",eth_balance:"BTC余额 ({allBalance})",result:"结果",result_0:"未执行",result_1:"成功",result_2:"失败",result_3:"手续费不足 : gas * price + value",result_4:"余额不足",result_5:"nonce太小 : 请先查询余额",option:"选项",select_2:"选中 BTC 0 余额",select_4:"选中 错误",check_balance:"查询余额",address:"地址"}},en:{btcBatchBalance:{settings:"Settings",import:"Import Address",import_address:"import address",import_succeeded:"Import succeeded",export_succeeded:"Export succeeded",export:"Export selected",delete:"Delete selected",rpc_node:"RPC Node",threads:"threads",network_error_auto:"Network error Auto Connection",open:"Open",close:"Close",confirm:"Confirm",input_alert_1:"Format: one per line",input_alert_7:"End of balance inquiry",eth_balance:"BTC balance({allBalance})",result:"Result",result_0:"unenforced",result_1:"success",result_2:"failed",result_3:"Insufficient fee : gas * price + value",result_4:"Insufficient Balance",result_5:"nonce Too small : Please check the balance first",option:"Option",select_2:"Select Btc 0 balance",select_4:"Selected error",check_balance:"Check balance",address:"Address"}}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,"max-height":650},on:{"selection-change":t.onSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:t.$t("btcBatchBalance.address"),"min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("a",{staticStyle:{color:"blue"},attrs:{target:"_blank",href:"https://btc.com/"+n.address}},[t._v(t._s(n.address))])]}}])}),a("el-table-column",{attrs:{label:t.$t("btcBatchBalance.eth_balance",{allBalance:t.allBalance}),width:"300",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(a.balance)+" ")]}}])}),a("el-table-column",{attrs:{label:t.$t("btcBatchBalance.result"),width:"600",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-tag",{attrs:{type:t._f("resultTagStyleFilter")(n.result)}},[t._v(" "+t._s(t._f("resultTagFilter")(n.result))+" ")])]}}])}),a("el-table-column",{attrs:{label:t.$t("btcBatchBalance.option"),width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},nativeOn:{click:function(a){return a.preventDefault(),t.onDeleteRow(e.$index)}}})]}}])})],1),a("div",{staticClass:"operationBtn"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.onSelectBalanceZero}},[t._v(t._s(t.$t("btcBatchBalance.select_2")))]),a("el-button",{attrs:{type:"danger",plain:""},on:{click:t.onSelectResultError}},[t._v(t._s(t.$t("btcBatchBalance.select_4")))])],1)],1)},i=[],u=(a("4160"),a("a434"),a("159b"),a("ed08")),d={filters:{resultTagStyleFilter:function(t){var e={0:"info",1:"success",2:"danger"};return e[t]?e[t]:"info"},resultTagFilter:function(t){var e={0:n.$t("btcBatchBalance.result_0"),1:n.$t("btcBatchBalance.result_1"),2:n.$t("btcBatchBalance.result_2"),3:n.$t("btcBatchBalance.result_3"),4:n.$t("btcBatchBalance.result_4"),5:n.$t("btcBatchBalance.result_5")};return e[t]?e[t]:t},orderNoFilter:function(t){return t.substring(0,30)}},props:{list:{type:Array,required:!0}},data:function(){return{}},computed:{allBalance:function(){return Object(u["b"])(this.list,"balance")}},created:function(){n=this},methods:{onDeleteRow:function(t){this.list.splice(t,1),localStorage.setItem("btc_balanceObj",JSON.stringify(this.list.map((function(t){return t.result=0,t}))))},onSelectionChange:function(t){this.$emit("onSelectTableList",t)},onSelectBalanceZero:function(){var t=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(e){0===parseInt(e.balance)&&t.$refs.multipleTable.toggleRowSelection(e)}))},onSelectResultError:function(){var t=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(e){1!==parseInt(e.result)&&0!==parseInt(e.result)&&t.$refs.multipleTable.toggleRowSelection(e)}))}}},b=d,p=(a("fe5e"),a("2877")),f=Object(p["a"])(b,o,i,!1,null,"14b8e283",null),m=f.exports,h=a("2f24"),_=a("fb5a"),g=a.n(_),B="btcBatchBalance",v="1",k=void 0,S={name:"BtcBatchBalance",components:{TransactionTable:m},data:function(){return{dialogOne:!1,dialogThree:!1,rpc_node:[{value:"bitflyer",label:"https://chainflyer.bitflyer.jp/"},{value:"blockchair",label:"https://api.blockchair.com/"},{value:"smartbit",label:"https://api.smartbit.com.au/"}],form:{task_num:"1",prvlist:"",rpc_node:""},selectedList:[],list:[]}},created:function(){this.$i18n.getLocaleMessage("en")[B]||(this.$i18n.mergeLocaleMessage("en",s.en),this.$i18n.mergeLocaleMessage("zh",s.zh))},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:k=t,localStorage.getItem("btc_task_num")&&(v=localStorage.getItem("btc_task_num")),localStorage.getItem("btc_balanceObj")&&(t.list=JSON.parse(localStorage.getItem("btc_balanceObj"))),localStorage.getItem("btc_task_num")&&(v=localStorage.getItem("btc_task_num"),t.form.task_num=v),localStorage.getItem("btc_rpc_node")?t.form.rpc_node=localStorage.getItem("btc_rpc_node"):t.form.rpc_node="bitflyer";case 5:case"end":return e.stop()}}),e)})))()},methods:{onSelectTableList:function(t){this.selectedList=t},onDelAllSelectList:function(){var t=this.selectedList.map((function(t){return t.address})),e=this.list.filter((function(e){return!t.includes(e.address)}));this.list=e,localStorage.setItem("btc_balanceObj",JSON.stringify(e))},onLead:function(){var t=this.form.prvlist.split("\n");for(var e in t)this.onUpTableData(t[e].trim(),0,0);localStorage.setItem("btc_balanceObj",JSON.stringify(this.list.map((function(t){return t.result=0,t})))),this.$message.success(this.$t("btcBatchBalance.import_succeeded")),this.dialogThree=!1},onUpbalance:function(){if(0!==this.selectedList.length)for(var t in this.selectedList)$.push(this.selectedList[t].address);else this.$message.error(this.$t("common.no_select_data"))},onUpTableData:function(t,e,a){for(var n in this.list)if(this.list[n].address===t)return this.list[n].balance=e>=0?e:this.list[n].balance,this.list[n].result=a,!0;return this.list.push({address:t,balance:e,result:a}),!0},onSetting:function(){v=this.form.task_num,localStorage.setItem("btc_task_num",v),localStorage.setItem("btc_rpc_node",this.form.rpc_node),location.reload()},onMaxNum:function(t){this.form.maxNum=t},onExportTable:function(){var t=this;Promise.all([a.e("chunk-5164a781"),a.e("chunk-2703ca80"),a.e("chunk-8ee382d6")]).then(a.bind(null,"4bf8")).then((function(e){var a=["Address","Balance","Result"],n=["address","balance","result"],r=t.formatJson(n,t.selectedList);e.export_json_to_excel({header:a,data:r,filename:"list",autoWidth:!0,bookType:"xlsx"}),t.$message.success(t.$t("btcBatchBalance.export_succeeded"))}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))}}},$=h["a"].queue((function(t,e){Object(l["a"])(regeneratorRuntime.mark((function a(){var n,r,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:a.prev=0,n="",a.t0=k.form.rpc_node,a.next="bitflyer"===a.t0?5:"blockchair"===a.t0?7:"smartbit"===a.t0?9:11;break;case 5:return n="https://chainflyer.bitflyer.jp/v1/address/"+t,a.abrupt("break",11);case 7:return n="https://api.blockchair.com/bitcoin/dashboards/address/"+t,a.abrupt("break",11);case 9:return n="https://api.smartbit.com.au/v1/blockchain/address/"+t,a.abrupt("break",11);case 11:return a.next=13,k.$ajax({url:n,method:"get"});case 13:r=a.sent,c=0,a.t1=k.form.rpc_node,a.next="bitflyer"===a.t1?18:"blockchair"===a.t1?20:"smartbit"===a.t1?22:24;break;case 18:return c=g.a.convertBTC(r.unconfirmed_balance,"satoshi","btc"),a.abrupt("break",24);case 20:return c=g.a.convertBTC(r.data[t].address.balance,"satoshi","btc"),a.abrupt("break",24);case 22:return c=r.address.confirmed.balance,a.abrupt("break",24);case 24:k.onUpTableData(t,c,1),e(),a.next=32;break;case 28:a.prev=28,a.t2=a["catch"](0),$.push(t),e();case 32:case"end":return a.stop()}}),a,null,[[0,28]])})))()}),v);$.drain(Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:k.$message.success(k.$t("btcBatchBalance.input_alert_7"));case 1:case"end":return t.stop()}}),t)}))));var y=S,x=(a("4055"),a("1b20"),Object(p["a"])(y,r,c,!1,null,"38e151b5",null));e["default"]=x.exports},fe5e:function(t,e,a){"use strict";a("c20e")}}]);