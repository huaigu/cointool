(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eea43dc2"],{"1b20":function(t,e,r){"use strict";r("3970")},3970:function(t,e,r){},4055:function(t,e,r){"use strict";r("c917")},"482a":function(t,e,r){},"73efc":function(t){t.exports=JSON.parse('{"btc":{"satoshi":"0.00000001","bit":"0.000001","ubtc":"0.000001","mbtc":"0.001","btc":"1"},"bch":{"satoshi":"0.00000001","bit":"0.000001","ubch":"0.000001","mbch":"0.001","bch":"1"},"eth":{"wei":"0.000000000000000001","kwei":"0.000000000000001","mwei":"0.000000000001","gwei":"0.000000001","finney":"0.001","eth":"1"},"xrp":{"drop":"0.000001","xrp":"1"},"ltc":{"litoshi":"0.00000001","photon":"0.000001","lite":"0.001","ltc":"1"},"dash":{"duff":"0.00000001","dash":"1"},"zec":{"zatoshi":"0.00000001","zec":"1"}}')},a50d:function(t,e,r){"use strict";const n=r("c099"),a=r("73efc"),o={},c={},s={},l={},i={},u={},p={},d={};Object.keys(a).map((function(t){Object.keys(a[t]).map((function(e){"btc"===t&&(c[e]=new n(a[t][e],10),o.btcUnits=a[t]),"bch"===t&&(s[e]=new n(a[t][e],10),o.bchUnits=a[t]),"eth"===t&&(l[e]=new n(a[t][e],10),o.ethUnits=a[t]),"xrp"===t&&(i[e]=new n(a[t][e],10),o.xrpUnits=a[t]),"ltc"===t&&(u[e]=new n(a[t][e],10),o.ltcUnits=a[t]),"dash"===t&&(p[e]=new n(a[t][e],10),o.dashUnits=a[t]),"zec"===t&&(d[e]=new n(a[t][e],10),o.zecUnits=a[t])}))}));const b=new RegExp(/^-?\d*\.?\d*$/);o.convertBTC=(t,e,r)=>{if(e=e.toLowerCase(),r=r.toLowerCase(),!b.test(t))throw new Error("Unsupported value");if(!c[e])throw new Error("Unsupported input unit");if(!c[r])throw new Error("Unsupported input unit");return new n(t,10).times(c[e]).div(c[r]).toString(10)},o.convertBCH=(t,e,r)=>{if(e=e.toLowerCase(),r=r.toLowerCase(),!b.test(t))throw new Error("Unsupported value");if(!s[e])throw new Error("Unsupported input unit");if(!s[r])throw new Error("Unsupported input unit");return new n(t,10).times(s[e]).div(s[r]).toString(10)},o.convertETH=(t,e,r)=>{if(e=e.toLowerCase(),r=r.toLowerCase(),!b.test(t))throw new Error("Unsupported value");if(!l[e])throw new Error("Unsupported input unit");if(!l[r])throw new Error("Unsupported input unit");return new n(t,10).times(l[e]).div(l[r]).toString(10)},o.convertXRP=(t,e,r)=>{if(e=e.toLowerCase(),r=r.toLowerCase(),!b.test(t))throw new Error("Unsupported value");if(!i[e])throw new Error("Unsupported input unit");if(!i[r])throw new Error("Unsupported input unit");return new n(t).times(i[e]).div(i[r]).toString(10)},o.convertLTC=(t,e,r)=>{if(e=e.toLowerCase(),r=r.toLowerCase(),!b.test(t))throw new Error("Unsupported value");if(!u[e])throw new Error("Unsupported input unit");if(!u[r])throw new Error("Unsupported input unit");return new n(t,10).times(u[e]).div(u[r]).toString(10)},o.convertDASH=(t,e,r)=>{if(e=e.toLowerCase(),r=r.toLowerCase(),!b.test(t))throw new Error("Unsupported value");if(!p[e])throw new Error("Unsupported input unit");if(!p[r])throw new Error("Unsupported input unit");return new n(t,10).times(p[e]).div(p[r]).toString(10)},o.convertZEC=(t,e,r)=>{if(e=e.toLowerCase(),r=r.toLowerCase(),!b.test(t))throw new Error("Unsupported value");if(!d[e])throw new Error("Unsupported input unit");if(!d[r])throw new Error("Unsupported input unit");return new n(t,10).times(d[e]).div(d[r]).toString(10)},t.exports=o},c917:function(t,e,r){},fa50:function(t,e,r){"use strict";r.r(e);var n,a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("el-row",{staticStyle:{"padding-right":"8px","margin-bottom":"30px"},attrs:{gutter:0}},[r("el-col",{attrs:{xs:24}},[r("div",{staticClass:"operationBtn"},[r("el-button",{attrs:{type:"primary",icon:"el-icon-setting"},on:{click:function(e){t.dialogOne=!0}}},[t._v(t._s(t.$t("btcBatchBalance.settings")))]),r("el-button",{attrs:{type:"primary",icon:"el-icon-sort-down"},on:{click:function(e){t.dialogThree=!0}}},[t._v(t._s(t.$t("btcBatchBalance.import")))]),r("el-button",{attrs:{type:"primary",icon:"el-icon-sort-up"},on:{click:t.onExportTable}},[t._v(t._s(t.$t("btcBatchBalance.export")))]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:t.onDelAllSelectList}},[t._v(t._s(t.$t("btcBatchBalance.delete")))])],1)])],1),r("el-row",{staticStyle:{"margin-bottom":"30px"},attrs:{gutter:0}},[r("el-col",{attrs:{xs:{span:24}}},[r("TransactionTable",{attrs:{list:t.list},on:{onSelectTableList:t.onSelectTableList}})],1)],1),r("el-row",{staticClass:"formBox",attrs:{gutter:0}},[r("el-col",{staticStyle:{"text-align":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:t.onUpbalance}},[t._v(t._s(t.$t("btcBatchBalance.check_balance")))])],1)],1),r("el-dialog",{attrs:{title:t.$t("btcBatchBalance.settings"),visible:t.dialogOne},on:{"update:visible":function(e){t.dialogOne=e}}},[r("el-form",{attrs:{model:t.form}},[r("el-form-item",{attrs:{label:t.$t("btcBatchBalance.rpc_node")}},[r("el-select",{model:{value:t.form.rpc_node,callback:function(e){t.$set(t.form,"rpc_node",e)},expression:"form.rpc_node"}},t._l(t.rpc_node,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),r("el-form-item",{attrs:{label:t.$t("btcBatchBalance.threads")}},[r("el-input",{staticStyle:{color:"#000","font-size":"x-large"},attrs:{autocomplete:"off"},model:{value:t.form.task_num,callback:function(e){t.$set(t.form,"task_num",e)},expression:"form.task_num"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogOne=!1}}},[t._v(t._s(t.$t("btcBatchBalance.close")))]),r("el-button",{attrs:{type:"primary"},on:{click:t.onSetting}},[t._v(t._s(t.$t("btcBatchBalance.confirm")))])],1)],1),r("el-dialog",{attrs:{title:t.$t("btcBatchBalance.import_address"),visible:t.dialogThree},on:{"update:visible":function(e){t.dialogThree=e}}},[r("el-form",{attrs:{model:t.form}},[r("el-form-item",{attrs:{label:t.$t("btcBatchBalance.input_alert_1")}},[r("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.form.prvlist,callback:function(e){t.$set(t.form,"prvlist",e)},expression:"form.prvlist"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogThree=!1}}},[t._v(t._s(t.$t("btcBatchBalance.close")))]),r("el-button",{attrs:{type:"primary"},on:{click:t.onLead}},[t._v(t._s(t.$t("btcBatchBalance.import")))])],1)],1)],1)},o=[],c=(r("dbb3"),r("b130"),r("2eeb"),r("e18c"),r("e35a"),r("90aa"),r("0d7a"),r("6db4"),r("6a61"),r("2e91")),s={zh:{btcBatchBalance:{settings:"设置",import:"导入地址",import_address:"导入地址",import_succeeded:"导入成功",export_succeeded:"导出成功",export:"导出选中",delete:"删除选中",rpc_node:"RPC 节点",threads:"线程",network_error_auto:"网络错误自动连接",open:"开启",close:"关闭",confirm:"确认",input_alert_1:"格式:一行一个",input_alert_7:"查询余额完毕",eth_balance:"BTC余额 ({allBalance})",result:"结果",result_0:"未执行",result_1:"成功",result_2:"失败",result_3:"手续费不足 : gas * price + value",result_4:"余额不足",result_5:"nonce太小 : 请先查询余额",option:"选项",select_2:"选中 BTC 0 余额",select_4:"选中 错误",check_balance:"查询余额",address:"地址"}},en:{btcBatchBalance:{settings:"Settings",import:"Import Address",import_address:"import address",import_succeeded:"Import succeeded",export_succeeded:"Export succeeded",export:"Export selected",delete:"Delete selected",rpc_node:"RPC Node",threads:"threads",network_error_auto:"Network error Auto Connection",open:"Open",close:"Close",confirm:"Confirm",input_alert_1:"Format: one per line",input_alert_7:"End of balance inquiry",eth_balance:"BTC balance({allBalance})",result:"Result",result_0:"unenforced",result_1:"success",result_2:"failed",result_3:"Insufficient fee : gas * price + value",result_4:"Insufficient Balance",result_5:"nonce Too small : Please check the balance first",option:"Option",select_2:"Select Btc 0 balance",select_4:"Selected error",check_balance:"Check balance",address:"Address"}}},l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,"max-height":650},on:{"selection-change":t.onSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{label:t.$t("btcBatchBalance.address"),"min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[r("a",{staticStyle:{color:"blue"},attrs:{target:"_blank",href:"https://btc.com/"+n.address}},[t._v(t._s(n.address))])]}}])}),r("el-table-column",{attrs:{label:t.$t("btcBatchBalance.eth_balance",{allBalance:t.allBalance}),width:"300",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[t._v(" "+t._s(r.balance)+" ")]}}])}),r("el-table-column",{attrs:{label:t.$t("btcBatchBalance.result"),width:"600",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[r("el-tag",{attrs:{type:t._f("resultTagStyleFilter")(n.result)}},[t._v(" "+t._s(t._f("resultTagFilter")(n.result))+" ")])]}}])}),r("el-table-column",{attrs:{label:t.$t("btcBatchBalance.option"),width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},nativeOn:{click:function(r){return r.preventDefault(),t.onDeleteRow(e.$index)}}})]}}])})],1),r("div",{staticClass:"operationBtn"},[r("el-button",{attrs:{type:"primary",plain:""},on:{click:t.onSelectBalanceZero}},[t._v(t._s(t.$t("btcBatchBalance.select_2")))]),r("el-button",{attrs:{type:"danger",plain:""},on:{click:t.onSelectResultError}},[t._v(t._s(t.$t("btcBatchBalance.select_4")))])],1)],1)},i=[],u=(r("fe59"),r("ea69"),r("08ba"),r("ed08")),p={filters:{resultTagStyleFilter:function(t){var e={0:"info",1:"success",2:"danger"};return e[t]?e[t]:"info"},resultTagFilter:function(t){var e={0:n.$t("btcBatchBalance.result_0"),1:n.$t("btcBatchBalance.result_1"),2:n.$t("btcBatchBalance.result_2"),3:n.$t("btcBatchBalance.result_3"),4:n.$t("btcBatchBalance.result_4"),5:n.$t("btcBatchBalance.result_5")};return e[t]?e[t]:t},orderNoFilter:function(t){return t.substring(0,30)}},props:{list:{type:Array,required:!0}},data:function(){return{}},computed:{allBalance:function(){return Object(u["b"])(this.list,"balance")}},created:function(){n=this},methods:{onDeleteRow:function(t){this.list.splice(t,1),localStorage.setItem("btc_balanceObj",JSON.stringify(this.list.map((function(t){return t.result=0,t}))))},onSelectionChange:function(t){this.$emit("onSelectTableList",t)},onSelectBalanceZero:function(){var t=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(e){0===parseInt(e.balance)&&t.$refs.multipleTable.toggleRowSelection(e)}))},onSelectResultError:function(){var t=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(e){1!==parseInt(e.result)&&0!==parseInt(e.result)&&t.$refs.multipleTable.toggleRowSelection(e)}))}}},d=p,b=(r("fe5e"),r("5d22")),f=Object(b["a"])(d,l,i,!1,null,"14b8e283",null),h=f.exports,m=r("9905"),_=r("a50d"),w=r.n(_),g="btcBatchBalance",v="1",B=void 0,k={name:"BtcBatchBalance",components:{TransactionTable:h},data:function(){return{dialogOne:!1,dialogThree:!1,rpc_node:[{value:"bitflyer",label:"https://chainflyer.bitflyer.jp/"},{value:"blockchair",label:"https://api.blockchair.com/"},{value:"smartbit",label:"https://api.smartbit.com.au/"}],form:{task_num:"1",prvlist:"",rpc_node:""},selectedList:[],list:[]}},created:function(){this.$i18n.getLocaleMessage("en")[g]||(this.$i18n.mergeLocaleMessage("en",s.en),this.$i18n.mergeLocaleMessage("zh",s.zh))},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:B=t,localStorage.getItem("btc_task_num")&&(v=localStorage.getItem("btc_task_num")),localStorage.getItem("btc_balanceObj")&&(t.list=JSON.parse(localStorage.getItem("btc_balanceObj"))),localStorage.getItem("btc_task_num")&&(v=localStorage.getItem("btc_task_num"),t.form.task_num=v),localStorage.getItem("btc_rpc_node")?t.form.rpc_node=localStorage.getItem("btc_rpc_node"):t.form.rpc_node="bitflyer";case 5:case"end":return e.stop()}}),e)})))()},methods:{onSelectTableList:function(t){this.selectedList=t},onDelAllSelectList:function(){var t=this.selectedList.map((function(t){return t.address})),e=this.list.filter((function(e){return!t.includes(e.address)}));this.list=e,localStorage.setItem("btc_balanceObj",JSON.stringify(e))},onLead:function(){var t=this.form.prvlist.split("\n");for(var e in t)this.onUpTableData(t[e].trim(),0,0);localStorage.setItem("btc_balanceObj",JSON.stringify(this.list.map((function(t){return t.result=0,t})))),this.$message.success(this.$t("btcBatchBalance.import_succeeded")),this.dialogThree=!1},onUpbalance:function(){if(0!==this.selectedList.length)for(var t in this.selectedList)S.push(this.selectedList[t].address);else this.$message.error(this.$t("common.no_select_data"))},onUpTableData:function(t,e,r){for(var n in this.list)if(this.list[n].address===t)return this.list[n].balance=e>=0?e:this.list[n].balance,this.list[n].result=r,!0;return this.list.push({address:t,balance:e,result:r}),!0},onSetting:function(){v=this.form.task_num,localStorage.setItem("btc_task_num",v),localStorage.setItem("btc_rpc_node",this.form.rpc_node),location.reload()},onMaxNum:function(t){this.form.maxNum=t},onExportTable:function(){var t=this;Promise.all([r.e("chunk-36146400"),r.e("chunk-bb64a916"),r.e("chunk-c7770d26")]).then(r.bind(null,"4bf8")).then((function(e){var r=["Address","Balance","Result"],n=["address","balance","result"],a=t.formatJson(n,t.selectedList);e.export_json_to_excel({header:r,data:a,filename:"list",autoWidth:!0,bookType:"xlsx"}),t.$message.success(t.$t("btcBatchBalance.export_succeeded"))}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))}}},S=m["a"].queue((function(t,e){Object(c["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.prev=0,n="",r.t0=B.form.rpc_node,r.next="bitflyer"===r.t0?5:"blockchair"===r.t0?7:"smartbit"===r.t0?9:11;break;case 5:return n="https://chainflyer.bitflyer.jp/v1/address/"+t,r.abrupt("break",11);case 7:return n="https://api.blockchair.com/bitcoin/dashboards/address/"+t,r.abrupt("break",11);case 9:return n="https://api.smartbit.com.au/v1/blockchain/address/"+t,r.abrupt("break",11);case 11:return r.next=13,B.$ajax({url:n,method:"get"});case 13:a=r.sent,o=0,r.t1=B.form.rpc_node,r.next="bitflyer"===r.t1?18:"blockchair"===r.t1?20:"smartbit"===r.t1?22:24;break;case 18:return o=w.a.convertBTC(a.unconfirmed_balance,"satoshi","btc"),r.abrupt("break",24);case 20:return o=w.a.convertBTC(a.data[t].address.balance,"satoshi","btc"),r.abrupt("break",24);case 22:return o=a.address.confirmed.balance,r.abrupt("break",24);case 24:B.onUpTableData(t,o,1),e(),r.next=32;break;case 28:r.prev=28,r.t2=r["catch"](0),S.push(t),e();case 32:case"end":return r.stop()}}),r,null,[[0,28]])})))()}),v);S.drain(Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:B.$message.success(B.$t("btcBatchBalance.input_alert_7"));case 1:case"end":return t.stop()}}),t)}))));var y=k,$=(r("4055"),r("1b20"),Object(b["a"])(y,a,o,!1,null,"38e151b5",null));e["default"]=$.exports},fe5e:function(t,e,r){"use strict";r("482a")}}]);