(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35e22606"],{"1c72":function(e,t,a){},"40ee":function(e,t,a){},"4bdc":function(e,t,a){"use strict";a("40ee")},"6c6a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("SettingDialog",{ref:"SettingDialog",attrs:{form:e.settingForm},on:{onUpdateSetting:e.onUpdateSetting}}),a("SelectTokenDialog",{ref:"SelectTokenDialog",on:{onSelectItem:e.onSelectItem}}),a("div",{staticClass:"content"},[e._m(0),a("div",{staticClass:"swap-content"},[a("div",{staticClass:"swap-header"},[a("div",{staticClass:"iconBox"},[a("i",{staticClass:"el-icon-refresh-left icon",on:{click:e.onResetData}}),a("i",{staticClass:"el-icon-setting icon",on:{click:function(t){return e.$refs.SettingDialog.show()}}}),a("i",{staticClass:"el-icon-question icon"})])]),a("div",{staticClass:"panel-box"},[a("div",{staticClass:"swap-panel"},[a("div",{staticClass:"balance"},[e._v("Balance: "+e._s(e.getToken1Balance(e.token1.balance))+" "+e._s(e.token1.name))]),a("div",{staticClass:"maxBtn",on:{click:e.onMax}},[e._v("MAX")]),a("div",{staticClass:"select-swap",on:{click:function(t){return e.$refs.SelectTokenDialog.show(e.token1,"top")}}},[a("img",{attrs:{src:"https://pancakeswap.finance/images/tokens/"+e.token1.address+".png"}}),a("div",{staticClass:"vertical-middle"},[a("span",{staticClass:"symbol"},[e._v(e._s(e.token1.symbol))]),a("span",{staticClass:"network"},[e._v(e._s(e.token1.name))])]),a("i",{staticClass:"el-icon-caret-bottom"})]),a("div",{staticClass:"input-amount-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.token1.amount,expression:"token1.amount"}],staticClass:"amount-input",attrs:{type:"number",placeholder:"0.0"},domProps:{value:e.token1.amount},on:{input:function(t){t.target.composing||e.$set(e.token1,"amount",t.target.value)}}})])]),a("div",{staticClass:"swap-panel"},[a("div",{staticClass:"balance"},[e._v("Balance: "+e._s(e.getToken2Balance(e.token2.balance))+" "+e._s(e.token2.name))]),a("div",{staticClass:"select-swap",on:{click:function(t){return e.$refs.SelectTokenDialog.show(e.token2,"bottom")}}},[a("img",{attrs:{src:"https://pancakeswap.finance/images/tokens/"+e.token2.address+".png"}}),a("div",{staticClass:"vertical-middle"},[a("span",{staticClass:"symbol"},[e._v(e._s(e.token2.symbol))]),a("span",{staticClass:"network"},[e._v(e._s(e.token2.name))])]),a("i",{staticClass:"el-icon-caret-bottom caret-bottom-icon"})]),a("div",{staticClass:"input-amount-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.token2.amount,expression:"token2.amount"}],staticClass:"amount-input",attrs:{type:"number",placeholder:"0.0"},domProps:{value:e.token2.amount},on:{input:function(t){t.target.composing||e.$set(e.token2,"amount",t.target.value)}}})])]),a("div",{staticClass:"exchangeBox",on:{click:e.onSwapTokenInfo}},[a("i",{staticClass:"el-icon-sort icon"})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"tipsBox"},[a("el-alert",{attrs:{title:"余额不足",type:"error",closable:!1}})],1),a("div",{staticClass:"btnBox"},[a("el-button",{staticClass:"btn",attrs:{type:"success"},on:{click:e.onSwap}},[e._v("Swap")])],1),a("div",{staticClass:"exchangeInfo"},[a("ul",[e._m(1),e._m(2),e._m(3),a("li",[a("span",{staticClass:"label"},[e._v("Fee")]),a("span",{staticClass:"value"},[e._v(e._s(e.fees)+"%")])]),e._m(4),e._m(5),e._m(6)])])])])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki@master/logo.png",alt:"logo"}})]),a("span",[e._v("CoinTool Swap")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",{staticClass:"label"},[e._v("Exchang Route")]),a("span",{staticClass:"value"},[e._v("Ag")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",{staticClass:"label"},[e._v("Reference price")]),a("span",{staticClass:"value"},[e._v(" 1 COW = 3.1028015 NT "),a("i",{staticClass:"el-icon-refresh icon"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",{staticClass:"label"},[e._v("Price Impact")]),a("span",{staticClass:"value"},[e._v("-100.00%")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",{staticClass:"label"},[e._v("Estimated amount")]),a("span",{staticClass:"value"},[e._v("3446842.383192")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",{staticClass:"label"},[e._v("Slippage Tolerance")]),a("span",{staticClass:"value"},[e._v("3.00%")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",{staticClass:"label"},[e._v("Minimum Received")]),a("span",{staticClass:"value"},[e._v("3343437.111697")])])}],o=a("4833"),i=a("efe2"),r=(a("7479"),a("4a32"),a("65f0"),a("37de"),a("1e34"),a("dfe9"),a("6a61"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"dialog",attrs:{width:e.isPc?"400px":"90%",height:"800px",visible:e.isShowDialog,modal:!0,title:"Select Token"},on:{"update:visible":function(t){e.isShowDialog=t}}},[a("div",{staticClass:"dialogBox"},[a("div",{staticClass:"inputBox"},[a("el-input",{attrs:{placeholder:"Search token name or contract address","prefix-icon":"el-icon-search",clearable:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),a("ul",{staticClass:"coinList"},e._l([0,1,2,3,4,5,6,7,8],(function(t,s){return a("li",{key:s,on:{click:function(a){return e.onSelectItem(t)}}},[a("div",{staticClass:"leftBox"},[a("img",{attrs:{src:"https://pancakeswap.finance/images/tokens/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c.png"}}),a("div",{staticClass:"vertical-middle"},[a("span",{staticClass:"symbol"},[e._v("BNB")]),a("span",{staticClass:"fullName"},[e._v("BNB Chain Token")])])]),a("div",{staticClass:"rightBox"},[e._v(" 0 ")])])})),0)])])}),c=[],l=a("52c1"),d={components:{},props:{},data:function(){return{address:"",loading:!0,isShowDialog:!1,selectTokenInfo:{},direction:"top"}},computed:Object(i["a"])({},Object(l["b"])(["isPc"])),watch:{},created:function(){},mounted:function(){},methods:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top";this.selectTokenInfo=e,this.direction=t,this.isShowDialog=!this.isShowDialog},onSelectItem:function(e){this.$emit("onSelectItem",this.selectTokenInfo,this.direction)}}},u=d,m=(a("4bdc"),a("5d22")),p=Object(m["a"])(u,r,c,!1,null,"7e25ff9e",null),h=p.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"append-to-body":!0,width:e.isPc?"500px":"90%",title:e.$t("swap.settings"),visible:e.isShowDialog,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.isShowDialog=t}}},[a("div",{staticClass:"dialogBox"},[a("el-form",{attrs:{model:e.form,"label-position":"top"}},[a("el-form-item",{staticClass:"item",attrs:{label:e.$t("swap.setting_gwei")}},[a("el-radio-group",{model:{value:e.form.gwei,callback:function(t){e.$set(e.form,"gwei",t)},expression:"form.gwei"}},[a("el-radio-button",{attrs:{label:"7"}},[e._v(e._s(e.$t("swap.fast"))+"(7)")]),a("el-radio-button",{attrs:{label:"6"}},[e._v(e._s(e.$t("swap.normal"))+"(6)")]),a("el-radio-button",{attrs:{label:"5"}},[e._v(e._s(e.$t("swap.slow"))+"(5)")])],1)],1),a("el-form-item",{staticClass:"item",attrs:{label:e.$t("swap.slippageTolerance")}},[a("el-radio-group",{model:{value:e.form.slippageTolerance,callback:function(t){e.$set(e.form,"slippageTolerance",t)},expression:"form.slippageTolerance"}},[a("el-radio-button",{attrs:{label:"0.1"}},[e._v("0.1%")]),a("el-radio-button",{attrs:{label:"0.5"}},[e._v("0.5%")]),a("el-radio-button",{attrs:{label:"1.0"}},[e._v("1.0%")]),a("el-radio-button",{attrs:{label:"3.0"}},[e._v("3.0%")])],1),a("el-input",{staticClass:"customInput",attrs:{placeholder:"自定义"},on:{blur:e.onChangeCustomInput},model:{value:e.form.slippageTolerance,callback:function(t){e.$set(e.form,"slippageTolerance",t)},expression:"form.slippageTolerance"}}),a("span",{staticClass:"per_span"},[e._v("%")])],1),a("el-form-item",{staticClass:"item",attrs:{label:e.$t("swap.recipientAddress")}},[a("el-switch",{staticStyle:{"text-align":"center"},attrs:{"active-color":"#2AB079","inactive-color":"#666666"},model:{value:e.form.auto_sell,callback:function(t){e.$set(e.form,"auto_sell",t)},expression:"form.auto_sell"}})],1)],1)],1)])},f=[],b=(a("05d6"),{components:{},props:{currentLockDate:{require:!0,type:Number},chainName:{require:!0,type:String},form:{require:!0,type:Object}},data:function(){return{isShowDialog:!1,newForm:null}},computed:Object(i["a"])({},Object(l["b"])(["isPc","language"])),deactivated:function(){this.isShowDialog=!1},destroyed:function(){this.isShowDialog=!1},created:function(){},methods:{onChangeCustomInput:function(){this.form.slippageTolerance<.1&&(this.form.slippageTolerance=.1),-1===this.form.slippageTolerance.indexOf(".")&&(this.form.slippageTolerance=Number(this.form.slippageTolerance).toFixed(1))},show:function(){this.isShowDialog=!this.isShowDialog}}}),v=b,k=(a("dd5b"),Object(m["a"])(v,g,f,!1,null,"1d4ecef8",null)),w=k.exports,_={zh:{swap:{setting_gwei:"Gwei",fast:"高速",normal:"标准",slow:"缓慢",slippageTolerance:"滑点设置",recipientAddress:"接收地址",settings:"设置"}},en:{swap:{setting_gwei:"Gwei",fast:"Fast",normal:"Normal",slow:"Slow",slippageTolerance:"Slippage Tolerance",recipientAddress:"Recipient address",settings:"Settings"}}},C=a("8feb"),x=a.n(C),S=a("7921"),T=a.n(S),B=a("85d4"),j=a("a835"),$=a("7742"),y=a.n($),D=a("ed08"),I="swap",O={name:I,inject:["onCheckConnect"],components:{SelectTokenDialog:h,SettingDialog:w},data:function(){return{rpcNode:"",router:"",c_address:"",baseToken:"",baseName:"BNB Smart Chain",baseSymbol:"BNB",ethBalance:0,txFee:"",token1:{address:"",name:"",symbol:"",balance:"",decimal:"",amount:""},token2:{address:"0x55d398326f99059ff775485246999027b3197955",name:"",symbol:"",balance:"",decimal:"",amount:""},settingForm:{slippageTolerance:"0.1",gwei:"5",isOpenRecipientAddress:!1},fees:"0.3"}},computed:Object(i["a"])({},Object(l["b"])(["isConnect","account","isPc","language"])),watch:{"token1.amount":function(e){}},created:function(){this.$i18n.getLocaleMessage("en")[I]||(this.$i18n.mergeLocaleMessage("en",_.en),this.$i18n.mergeLocaleMessage("zh",_.zh))},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(D["n"])(1500);case 2:j["a"].getAccount()&&e.onUpdateBalance();case 3:case"end":return t.stop()}}),t)})))()},methods:{onResetData:function(){var e={address:"",name:"",symbol:"",decimal:"",balance:"",amount:""};this.token1=e,this.token2=e},getToken1Balance:function(e){return e?new T.a(e).div(Math.pow(10,this.token1.decimal)).toString():0},getToken2Balance:function(e){return e?new T.a(e).div(Math.pow(10,this.token2.decimal)).toString():0},onSelectItem:function(e,t){"top"===t?this.token1=Object(i["a"])(Object(i["a"])({},this.token1),e):this.token2=Object(i["a"])(Object(i["a"])({},this.token2),e)},onSwapTokenInfo:function(){var e=[this.token2,this.token1];this.token1=e[0],this.token2=e[1]},onUpdateSetting:function(e){console.log(e,"item")},onMax:function(){if(""===this.token1.address){var e=0,t=this.token1.balance;if(""!==this.token2.address){var a="0x"+y.a.methodID("Cswap",["address","address","address","address","uint256","address"]).toString("hex")+y.a.rawEncode(["address","address","address","address","uint256","address"],[this.router,this.baseToken,this.token1.address,this.token2.address,new T.a(Number(this.token1.balance)/2).times(Math.pow(10,this.token1.decimal)),j["a"].getAccount()]).toString("hex"),s={from:j["a"].getAccount(),to:this.c_address,value:Object(B["toHex"])(x.a.toWei(this.token1.amount,"ether")),data:a};e=x.a.toWei(new T.a(this.getEth_estimateGas(s)).times(this.gwei),"gwei")}0!==e&&(t=new T.a(t).minus(e)),this.token1.amount=new T.a(t).div(Math.pow(10,parseInt(this.token1.decimal))),console.log(this.token1.balance,e)}else this.token1.amount=new T.a(this.token1.balance).div(Math.pow(10,this.token1.decimal))},onSwap:function(){var e="0x"+y.a.methodID("Cswap",["address","address","address","address","uint256","address"]).toString("hex")+y.a.rawEncode(["address","address","address","address","uint256","address"],[this.router,this.baseToken,this.token1.address,this.token2.address,new T.a(Number(this.token1.balance)/2).times(Math.pow(10,this.token1.decimal)),j["a"].getAccount()]).toString("hex"),t={from:j["a"].getAccount(),to:this.c_address,value:Object(B["toHex"])(x.a.toWei(this.token1.amount,"ether")),data:e},a=this.getEth_estimateGas(t);this.txFee=x.a.toWei(new T.a(a).times(this.gwei),"gwei"),console.log("onSwap")},getEth_estimateGas:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$ajax({url:t.rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_estimateGas",params:[e]}});case 2:return s=a.sent,a.abrupt("return",parseInt(s.result));case 4:case"end":return a.stop()}}),a)})))()},getTokenInfo:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$ajax({url:t.rpcNode,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x06fdde03"},"latest"]},{jsonrpc:"2.0",id:2,method:"eth_call",params:[{to:e,data:"0x95d89b41"},"latest"]},{jsonrpc:"2.0",id:3,method:"eth_call",params:[{to:e,data:"0x313ce567"},"latest"]},{jsonrpc:"2.0",id:4,method:"eth_call",params:[{to:e,data:"0x70a08231000000000000000000000000"+j["a"].getAccount().replace("0x","")},"latest"]}]});case 3:return s=a.sent,a.abrupt("return",{name:x.a.abi.decodeParams(["string"],s[0].result)[0],symbol:x.a.abi.decodeParams(["string"],s[1].result)[0],decimal:parseInt(s[2].result),balance:s[3].result});case 7:return a.prev=7,a.t0=a["catch"](0),a.abrupt("return",!1);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},getTokenInputPrice:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$ajax({url:e.rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e.c_address,data:"0x"+y.a.methodID("getAmountOutFor",["address","uint256","address","address"]).toString("hex")+y.a.rawEncode(["address","uint256","address","address"],[e.router,e.token1.amount,e.token1.address,e.token2.address]).toString("hex")},"latest"]}});case 2:return a=t.sent,t.abrupt("return",a.result/Math.pow(10,e.token2.decimal));case 4:case"end":return t.stop()}}),t)})))()},onUpdateBalance:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,s,n,o,i,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=j["a"].getAccount(),!a){t.next=34;break}return t.next=4,j["a"].sendEthgetBalance(j["a"].getAccount());case 4:if(o=t.sent,e.ethBalance=o,null===(s=e.token1)||void 0===s||!s.address){t.next=16;break}return t.next=9,e.getTokenInfo(e.token1.address);case 9:i=t.sent,e.token1.name=i.name,e.token1.symbol=i.symbol,e.token1.balance=new T.a(i.balance).toString(),e.token1.decimal=i.decimal,t.next=20;break;case 16:e.token1.name=e.baseName,e.token1.symbol=e.baseSymbol,e.token1.balance=new T.a(e.ethBalance).toString(),e.token1.decimal=18;case 20:if(null===(n=e.token2)||void 0===n||!n.address){t.next=30;break}return t.next=23,e.getTokenInfo(e.token2.address);case 23:r=t.sent,e.token2.name=r.name,e.token2.symbol=r.symbol,e.token2.balance=r.balance,e.token2.decimal=r.decimal,t.next=34;break;case 30:e.token2.name=e.baseName,e.token2.symbol=e.baseSymbol,e.token2.balance=e.ethBalance,e.token2.decimal=18;case 34:c=e,setTimeout((function(){c.onUpdateBalance()}),3e3);case 36:case"end":return t.stop()}}),t)})))()}}},N=O,E=(a("6df0"),Object(m["a"])(N,s,n,!1,null,"2ad4f108",null));t["default"]=E.exports},"6df0":function(e,t,a){"use strict";a("1c72")},dd5b:function(e,t,a){"use strict";a("e3e3")},e3e3:function(e,t,a){}}]);