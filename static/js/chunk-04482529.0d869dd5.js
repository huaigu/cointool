(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04482529"],{"2e1d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container font-roboto"},[a("div",{staticClass:"content"},[a("div",{staticClass:"headerBox"},[a("div",{staticClass:"leftBox"},[a("div",{staticClass:"pageTitle"},[t._v(" "+t._s(t.$t("route."+t.viewName))+" "),a("div",{staticClass:"shareBox",on:{click:t.onShare}},[a("i",{staticClass:"el-icon-share icon"})])]),a("div",{staticClass:"addressBox"},[a("span",{staticClass:"address"},[t._v(t._s(t._f("autoAddress")(t.address)))]),a("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.address,expression:"address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"el-icon-copy-document copyIcon"})])]),a("div",{staticClass:"inputBox"},[a("el-autocomplete",{staticStyle:{width:"100%"},attrs:{size:"mini","fetch-suggestions":t.querySearch,placeholder:"0x...","trigger-on-focus":!1,clearable:""},on:{select:t.handleSelect},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSelect(t.restaurants[0])}},model:{value:t.newAddress,callback:function(e){t.newAddress=e},expression:"newAddress"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1)]),a("Tab",{attrs:{active:t.chainName,list:t.chainList},on:{onChangeTabActive:t.onChangeTabActive}}),a("div",{staticClass:"cardBox"},[a("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.blockBrowserLoading,expression:"blockBrowserLoading"}],staticClass:"card leftCard"},[a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t(t.viewName+".total")))]),a("span",{staticClass:"value"},[t._v(t._s(t.burnInfo.total)+" "+t._s(t.$coinInfo[t.chainName].symbol)+" ("),a("i",{staticClass:"price"},[t._v("$"+t._s((t.burnInfo.total*t.usd_price).toFixed(2)))]),t._v(")")])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t(t.viewName+".today"))),a("i",{staticClass:"info"},[t._v("("+t._s(t.burnInfo.todayC)+")")])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"$"+(t.burnInfo.today*t.usd_price).toFixed(2),placement:"top"}},[a("span",{staticClass:"value"},[t._v(t._s(t.burnInfo.today)+" "),a("i",[t._v(t._s(t.$coinInfo[t.chainName].symbol))])])])],1),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t(t.viewName+".last7"))),a("i",{staticClass:"info"},[t._v("("+t._s(t.burnInfo.weekC)+")")])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"$"+(t.burnInfo.week*t.usd_price).toFixed(2),placement:"top"}},[a("span",{staticClass:"value"},[t._v(t._s(t.burnInfo.week)+" "),a("i",[t._v(t._s(t.$coinInfo[t.chainName].symbol))])])])],1),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t(t.viewName+".last30"))),a("i",{staticClass:"info"},[t._v("("+t._s(t.burnInfo.monthC)+")")])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"$"+(t.burnInfo.month*t.usd_price).toFixed(2),placement:"top"}},[a("span",{staticClass:"value"},[t._v(t._s(t.burnInfo.month)+" "),a("i",[t._v(t._s(t.$coinInfo[t.chainName].symbol))])])])],1)]),a("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.blockBrowserLoading,expression:"blockBrowserLoading"}],staticClass:"card rightCard"},[a("li",[a("span",{staticClass:"label"},[t._v("TX "+t._s(t.$t(t.viewName+".total")))]),a("span",{staticClass:"value"},[t._v(t._s(t.txInfo.total))])]),a("li",[a("span",{staticClass:"label"},[t._v("TX "+t._s(t.$t(t.viewName+".success")))]),a("span",{staticClass:"value"},[t._v(t._s(t.txInfo.success))])]),a("li",[a("span",{staticClass:"label"},[t._v("TX "+t._s(t.$t(t.viewName+".fail")))]),a("span",{staticClass:"value"},[t._v(t._s(t.txInfo.error))])])])]),!t.listLoading&&t.list.length>0?a("ul",{staticClass:"listBox"},t._l(t.list,(function(e,s){return a("li",{key:s},[a("div",{staticClass:"col1"},[a("span",{staticClass:"time"},[t._v(t._s(t.formatTime(e.time_at,"{y}/{m}/{d} {h}:{i}:{s}")))]),a("div",{staticClass:"hashBox"},[a("svg-icon",{staticClass:"icon",style:"color:"+t.$coinInfo[t.chainName].color,attrs:{"icon-class":t.$coinInfo[t.chainName].icon}}),a("a",{staticClass:"hash",attrs:{href:t.$ethUtils.getScanLink(t.chainName,"tx",e.id)}},[t._v(t._s(t._f("miniAddress")(e.id)))])],1)]),a("div",{staticClass:"col2"},[a("div",{staticClass:"imgBox"},[null===e.cate_id&&e.project_data?a("img",{staticClass:"img",attrs:{src:e.project_data.logo_url}}):"approve"===e.cate_id||e.tx&&"setApprovalForAll"===e.tx.name?a("svg-icon",{staticClass:"icon green",attrs:{"icon-class":"certified"}}):"receive"===e.cate_id||"send"===e.cate_id?a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"coin-transform2"}}):a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"code"}})],1),null===e.cate_id?a("div",{staticClass:"infoBox"},[a("el-tooltip",{attrs:{effect:"dark",placement:"top",disabled:!e.tx}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(e.tx&&e.tx.to_addr?e.tx.to_addr:"")},slot:"content"}),a("div",[a("span",{staticClass:"functionName"},[t._v(t._s(e.tx&&e.tx.name?e.tx.name:"Contract Interaction"))]),a("a",{staticClass:"contractName",attrs:{href:t.$ethUtils.getScanLink(t.chainName,"address",e.tx&&e.tx.to_addr?e.tx.to_addr:""),target:"_blank"}},[e.project_data?a("span",{staticClass:"contractName"},[t._v(t._s(e.project_data.name))]):e.tx?a("span",{staticClass:"contractName",attrs:{target:"_blank"}},[t._v(" "+t._s(t._f("miniAddress")(e.tx.to_addr))+" ")]):t._e()])])])],1):t._e(),"approve"===e.cate_id?a("div",{staticClass:"infoBox"},[a("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(e.token_approve.spender)},slot:"content"}),a("span",{staticClass:"functionName"},[t._v(" Approve "+t._s(e.token_approve.value>4951760157141521e12?"infinite":Number(e.token_approve.value.toFixed(5)))+" "+t._s(e.token_approve.tokenInfo.symbol)+" for "),a("a",{attrs:{href:t.$ethUtils.getScanLink(t.chainName,"address",e.token_approve.spender),target:"_blank"}},[e.project_id?a("span",[t._v(t._s(e.project_data.name))]):a("span",[t._v(t._s(t._f("miniAddress")(e.token_approve.spender)))])])])])],1):t._e(),"receive"===e.cate_id&&e.receives.length>0?a("div",{staticClass:"infoBox"},[a("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(e.receives[0].from_addr)},slot:"content"}),a("div",[a("span",{staticClass:"functionName"},[t._v("Receive")]),a("a",{attrs:{href:t.$ethUtils.getScanLink(t.chainName,"address",e.receives[0].from_addr),target:"_blank"}},[a("span",[t._v(t._s(t._f("miniAddress")(e.receives[0].from_addr)))])])])])],1):t._e(),"send"===e.cate_id&&e.sends.length>0?a("div",{staticClass:"infoBox"},[a("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(e.sends[0].to_addr)},slot:"content"}),a("div",[a("span",{staticClass:"functionName"},[t._v("Send")]),a("a",{attrs:{href:t.$ethUtils.getScanLink(t.chainName,"address",e.sends[0].to_addr),target:"_blank"}},[a("span",{staticClass:"contractName"},[t._v(t._s(t._f("miniAddress")(e.sends[0].to_addr)))])])])])],1):t._e()]),a("div",{staticClass:"col3"},[t._l(e.sends,(function(e){return a("div",{key:e.token_id,staticClass:"tokenInfo tokenInfo1"},[a("div",{staticClass:"imgBox"},[a("img",{staticClass:"img",attrs:{src:e.tokenInfo.logo_url}})]),a("span",[t._v(" -"+t._s(e.amount)+" "+t._s(t.chainName===e.token_id?e.token_id.toUpperCase():e.tokenInfo.name)+" "),e.tokenInfo.isNFT?t._e():a("span",[t._v("($"+t._s((e.amount*e.price).toFixed(2))+")")])])])})),t._l(e.receives,(function(e){return a("div",{key:e.token_id,staticClass:"tokenInfo tokenInfo2"},[a("div",{staticClass:"imgBox"},[a("el-image",{staticClass:"img",attrs:{src:e.tokenInfo.logo_url,lazy:"","preview-src-list":[e.tokenInfo.logo_url]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e.tokenInfo.isNFT?a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"nft"}}):a("img",{staticClass:"img",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png"}})],1)])],1),a("span",[t._v(" +"+t._s(Number(e.amount.toFixed(4)))+" "+t._s(t.chainName===e.token_id?e.token_id.toUpperCase():e.tokenInfo.isNFT?e.tokenInfo.name:e.tokenInfo.symbol)+" "),e.tokenInfo.isNFT?t._e():a("span",[t._v("($"+t._s((e.price*e.amount).toFixed(1))+")")])])])}))],2),e.tx?a("div",{staticClass:"col4"},[a("span",{staticClass:"gasLabel"},[t._v("Gas Fee:")]),a("span",{staticClass:"gasValue"},[t._v(t._s(e.tx.eth_gas_fee.toFixed(4))+t._s(t.$coinInfo[t.chainName].symbol)+"($"+t._s(e.tx.usd_gas_fee.toFixed(2))+")")])]):t._e()])})),0):t._e(),t.listLoading?a("Loading",{attrs:{bg:"#42b983"}}):0!==t.list.length||t.listLoading?t._e():a("div",{staticClass:"emptyBox listBox"},[a("el-empty",{attrs:{description:"No Data"}})],1)],1)])},n=[],o=a("4833"),i=a("efe2"),r=(a("6a61"),a("8b79"),a("05d6"),a("fdea"),a("65f0"),a("f597"),a("a9b5"),a("52c1")),c=a("781b"),l=a("ed08"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabDiv"},[a("ul",{staticClass:"tab"},t._l(t.list,(function(e){return a("li",{key:e.value,class:{on:t.active===e.value},on:{click:function(a){return t.onChangeTabActive(e.value)}}},[t._v(t._s(e.label))])})),0)])},u=[],p={name:"CreateTokenTab",components:{},props:{list:{type:Array,default:function(){return[]}},active:{type:[Number,String],require:!0}},data:function(){return{}},methods:{onChangeTabActive:function(t){this.$emit("onChangeTabActive",t)}}},m=p,h=(a("9fd1"),a("5d22")),f=Object(h["a"])(m,d,u,!1,null,"76a6de25",null),v=f.exports,_={zh:{"gas-spent-history":{total:"总计",today:"今天",last7:"近一周",last30:"近一月",success:"成功",fail:"失败"}},en:{"gas-spent-history":{total:"Total",today:"Today",last7:"Last 7 days",last30:"Last 30 Days",success:"Success",fail:"Fail"}}},g=a("ebe1"),b=a("7921"),k=a.n(b),C="gas-spent-history",x={name:C,inject:["onCopySuccess","onShare","onSetShare","onCheckConnect"],components:{Loading:c["a"],Tab:v},data:function(){return{tempTitle:"",initFlag:!1,viewName:C,chainName:"eth",address:"",blockBrowserLoading:!0,listLoading:!0,newAddress:"",burnInfo:{total:0,today:0,week:0,month:0,todayC:0,weekC:0,monthC:0},txInfo:{total:0,success:0,error:0},restaurants:[],list:[],cny_price:0,usd_price:0,chainList:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(r["b"])(["isConnect","account","chainId","isPc","language"])),{},{shareInfo:function(){var t="".concat(this.burnInfo.total," ").concat(this.$coinInfo[this.chainName].symbol," ($").concat((this.burnInfo.total*this.usd_price).toFixed(2),")");return{text:"CoinTool.App - ".concat(this.$t("route.".concat(this.viewName)),"\nTotal Spent: ").concat(t,"\nTotal TX: ").concat(this.txInfo.total),twitterTags:"GasBurn"}}}),watch:{account:{handler:function(t){var e=this.$route.query,a=e.address,s=e.chainName;if(s&&(this.chainName=s),!this.initFlag)if(a)this.address=a,this.init(),this.initFlag=!0;else if(t){this.address=t;var n=this.$route.path+"?address=".concat(this.address,"&chainName=").concat(this.chainName);window.history.replaceState("","",n),this.init(),this.initFlag=!0}},immediate:!0}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$i18n.getLocaleMessage("en")[C]||(t.$i18n.mergeLocaleMessage("en",_.en),t.$i18n.mergeLocaleMessage("zh",_.zh)),t.chainList=Object(l["n"])(C);case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.tempTitle=document.title,setTimeout((function(){""===t.address&&t.onCheckConnect()}),3e3);case 2:case"end":return e.stop()}}),e)})))()},methods:{onChangeTabActive:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.chainName=t,e.handleSelect({value:e.address});case 2:case"end":return a.stop()}}),a)})))()},handleSelect:function(t){if(42===t.value.length){this.address=t.value,this.newAddress="";var e=this.$route.path+"?address=".concat(this.address,"&chainName=").concat(this.chainName);window.history.replaceState("","",e),this.init(),this.restaurants=[]}else this.$message.error("Address Error")},querySearch:function(t,e){this.restaurants=[{value:t}];var a=t?this.restaurants.filter(this.createFilter(t)):this.restaurants;e(a)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},getCoinPrice:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(g["a"])(t.chainName);case 2:a=e.sent,t.usd_price=a["usd"],t.cny_price=a["cny"];case 5:case"end":return e.stop()}}),e)})))()},countValues:function(t){for(var e=Math.floor(Date.now()/1e3),a=e-604800,s=e-2592e3,n=0,o=0,i=0,r=0,c=0,l=0,d=new Date,u=d.getFullYear(),p=d.getMonth(),m=d.getDate(),h=0;h<t.length;h++)if(t[h].timeStamp>=s&&t[h].timeStamp<=e&&(i+=t[h].gasPrice*t[h].gasUsed/Math.pow(10,18),l++,t[h].timeStamp>=a&&t[h].timeStamp<=e)){o+=t[h].gasPrice*t[h].gasUsed/Math.pow(10,18),c++;var f=new Date(1e3*t[h].timeStamp);f.getFullYear()===u&&f.getMonth()===p&&f.getDate()===m&&(n+=t[h].gasPrice*t[h].gasUsed/Math.pow(10,18),r++)}return{today:n,week:o,month:i,todayC:r,weekC:c,monthC:l}},getBlockBrowserInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.blockBrowserLoading=!0,e.next=4,t.$ajax({url:t.$coinInfo[t.chainName].blockBrowserApi,method:"get",data:{module:"account",action:"txlist",address:t.address,sort:"desc",apiKey:t.$coinInfo[t.chainName].apiKey}});case 4:a=e.sent,t.txInfo.total=a.result.length,s=t.countValues(a.result),t.burnInfo.today=Number(new k.a(s.today).toFixed(5)),t.burnInfo.week=Number(new k.a(s.week).toFixed(5)),t.burnInfo.month=Number(new k.a(s.month).toFixed(5)),t.burnInfo.todayC=s.todayC,t.burnInfo.weekC=s.weekC,t.burnInfo.monthC=s.monthC,a.result.forEach((function(e){"1"===e.isError?t.txInfo.error++:t.txInfo.success++,t.burnInfo.total=new k.a(e.gasPrice).times(e.gasUsed).div(Math.pow(10,18)).plus(t.burnInfo.total).toFixed(5)})),e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](0),console.log(e.t0);case 19:return e.prev=19,t.blockBrowserLoading=!1,t.onSetShare(t.shareInfo),e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[0,16,19,23]])})))()},init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.address){e.next=2;break}return e.abrupt("return");case 2:return document.title="".concat(t.address," | ").concat(t.$t("route.".concat(C))," | CoinTool"),t.getCoinPrice(),t.burnInfo={total:0,today:0,week:0,month:0,todayC:0,weekC:0,monthC:0},t.txInfo={total:0,success:0,error:0},t.list=[],t.getBlockBrowserInfo(),e.prev=8,t.list=[],t.listLoading=!0,e.next=13,t.$ajax({url:"https://api.debank.com/history/list",method:"get",data:{chain:t.chainName,user_addr:t.address}});case 13:a=e.sent,s=a.data.history_list,n=a.data.project_dict,o=a.data.token_dict,t.list=s.map((function(t){return t.project_id&&(t.project_data=n[t.project_id]),t.receives&&t.receives.length>0&&(t.receives=t.receives.map((function(t){var e=t.token_id;return t.tokenInfo=o[e],32===t.token_id.length&&(t.tokenInfo.isNFT=!0,t.tokenInfo.logo_url=t.tokenInfo.thumbnail_url),t}))),t.sends&&t.sends.length>0&&(t.sends=t.sends.map((function(t){var e=t.token_id;return t.tokenInfo=o[e],32===t.token_id.length&&(t.tokenInfo.isNFT=!0,t.tokenInfo.logo_url=t.tokenInfo.thumbnail_url),t}))),"approve"===t.cate_id&&t.token_approve.token_id&&(t.token_approve.tokenInfo=o[t.token_approve.token_id]),t})),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](8),console.log("error",e.t0);case 23:return e.prev=23,t.listLoading=!1,e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[8,20,23,26]])})))()},formatTime:l["e"]}},w=x,y=(a("5faf"),Object(h["a"])(w,s,n,!1,null,"4a093455",null));e["default"]=y.exports},"5faf":function(t,e,a){"use strict";a("8c07")},"8c07":function(t,e,a){},"9fd1":function(t,e,a){"use strict";a("b146")},b146:function(t,e,a){},ebe1:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var s=a("4833"),n=(a("6a61"),a("ab3e")),o={btc:"bitcoin",eth:"ethereum",trx:"tron",arb:"ethereum",doge:"dogecoin",shib:"shiba-inu",bsc:"binancecoin",heco:"huobi-token",matic:"matic-network",ftm:"fantom",xdai:"xdai",okt:"oec-token",avax:"avalanche-2",celo:"celo",movr:"moonriver",cro:"crypto-com-chain",iotx:"iotex",bch:"bitcoin-cash",sbch:"bitcoin-cash",glmr:"moonbeam",xdc:"xdce-crowd-sale",sdn:"shiden",fuse:"fuse-network-token",aac:"acute-angle-cloud",klay:"klay-token",one:"harmony",op:"optimism",evmos:"evmos",brise:"bitrise-token",dogechain:"dogecoin",syscoin:"syscoin",canto:"canto",ethw:"ethereum-pow-iou",ethf:"ethereumfair",aptos:"aptos",onus:"onus",core:"coredaoorg",cfx:"conflux-token",fil:"filecoin",arbnova:""};function i(){return r.apply(this,arguments)}function r(){return r=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,s,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"eth",t.prev=1,a=o[e],t.next=5,Object(n["a"])({url:"https://api.coingecko.com/api/v3/simple/price",method:"get",data:{ids:a,vs_currencies:"cny,usd"}});case 5:return s=t.sent,t.abrupt("return",{usd:s[a]["usd"],cny:s[a]["cny"]});case 9:return t.prev=9,t.t0=t["catch"](1),console.log(t.t0,"error"),t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])}))),r.apply(this,arguments)}}}]);