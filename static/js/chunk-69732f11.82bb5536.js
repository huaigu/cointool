(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69732f11"],{"4a4d":function(e,t,a){"use strict";a("db6d")},"4bd0":function(e,t,a){},"86a9":function(e,t,a){"use strict";a.r(t);var r,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("OpenGrabCoinVipDialog",{ref:"OpenGrabCoinVipDialog"}),a("div",{staticClass:"box"},[a("h1",[e._v(e._s(e.$t("route.blockGrabCoin")))]),a("el-form",{ref:"form",staticClass:"form",attrs:{"label-position":"top",rules:e.rules,model:e.form,"label-width":"160px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"formItem"},[a("div",{staticClass:"textBox"},[a("span",{staticClass:"label"},[e._v("RPC")]),a("el-tooltip",{attrs:{effect:"dark",content:e.$t("blockGrabCoin.rpc_tips"),placement:"top"}},[a("i",{staticClass:"el-icon-question icon"})])],1),a("el-input",{model:{value:e.form.rpc,callback:function(t){e.$set(e.form,"rpc",t)},expression:"form.rpc"}}),a("div",{staticClass:"inputBtnBox"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.isTestRpc}},[e._v(e._s(e.$t("blockGrabCoin.test")))])])],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"formItem"},[a("div",{staticClass:"textBox"},[a("span",{staticClass:"label"},[e._v(e._s(e.$t("blockGrabCoin.private_key")))]),a("el-tooltip",{attrs:{effect:"dark",content:e.$t("blockGrabCoin.private_key_tips"),placement:"top"}},[a("i",{staticClass:"el-icon-question icon"})])],1),a("el-input",{attrs:{type:"password"},model:{value:e.form.pkv,callback:function(t){e.$set(e.form,"pkv",t)},expression:"form.pkv"}}),a("div",{staticClass:"inputBtnBox"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.init_account}},[e._v(e._s(e.$t("blockGrabCoin.import")))])])],1)],1)],1),a("div",{staticClass:"baseInfo"},[a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.address.length>0,expression:"address.length > 0"}],staticStyle:{"margin-top":"20px"},attrs:{gutter:24}},[a("el-col",{attrs:{span:18}},[a("div",{staticClass:"infoBox"},[a("p",{staticClass:"label"},[e._v(e._s(e.$t("blockGrabCoin.address"))+":")]),a("p",{staticClass:"value"},[e._v(e._s(e.address))])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"infoBox"},[a("p",{staticClass:"label"},[e._v(e._s(e.$t("blockGrabCoin.balance"))+":")]),a("p",{staticClass:"value"},[e._v(e._s(parseFloat(e.balance).toFixed(5)))])])])],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5,xs:{span:12}}},[a("el-form-item",{staticClass:"formItem",attrs:{prop:"gwei"}},[a("div",{staticClass:"textBox"},[a("span",{staticClass:"label"},[e._v("GWEI")]),a("el-tooltip",{attrs:{effect:"dark",content:e.$t("blockGrabCoin.gwei_tips"),placement:"top"}},[a("i",{staticClass:"el-icon-question icon"})])],1),a("el-input",{model:{value:e.form.gwei,callback:function(t){e.$set(e.form,"gwei",t)},expression:"form.gwei"}})],1)],1),a("el-col",{attrs:{span:5,xs:{span:12}}},[a("el-form-item",{staticClass:"formItem",attrs:{prop:"pool"}},[a("div",{staticClass:"textBox"},[a("span",{staticClass:"label"},[e._v(e._s(e.$t("blockGrabCoin.gasLimit")))]),a("el-tooltip",{attrs:{effect:"dark",content:e.$t("blockGrabCoin.no_tips"),placement:"top"}},[a("i",{staticClass:"el-icon-question icon"})])],1),a("el-input",{attrs:{disabled:e.isRun},model:{value:e.form.gasLimit,callback:function(t){e.$set(e.form,"gasLimit",t)},expression:"form.gasLimit"}})],1)],1),a("el-col",{attrs:{span:5,xs:{span:12}}},[a("el-form-item",{staticClass:"formItem",attrs:{prop:"amount"}},[a("div",{staticClass:"textBox"},[a("span",{staticClass:"label"},[e._v(e._s(e.$t("blockGrabCoin.buy_num")))]),a("el-tooltip",{attrs:{effect:"dark",content:e.$t("blockGrabCoin.no_tips"),placement:"top"}},[a("i",{staticClass:"el-icon-question icon"})])],1),a("el-input",{attrs:{disabled:e.isRun},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1)],1),a("el-col",{attrs:{span:5,xs:{span:12}}},[a("el-form-item",{staticClass:"formItem",attrs:{prop:"timep"}},[a("div",{staticClass:"textBox"},[a("span",{staticClass:"label"},[e._v(e._s(e.$t("blockGrabCoin.watch_frequency")))]),a("el-tooltip",{attrs:{effect:"dark",content:e.$t("blockGrabCoin.watch_frequency_tips"),placement:"top"}},[a("i",{staticClass:"el-icon-question icon"})])],1),a("el-input",{model:{value:e.form.timep,callback:function(t){e.$set(e.form,"timep",t)},expression:"form.timep"}})],1)],1),a("el-col",{attrs:{span:4,xs:{span:24}}},[a("el-form-item",{staticClass:"formItem",attrs:{prop:"timep"}},[a("div",{staticClass:"textBox"},[a("span",{staticClass:"label"},[e._v(e._s(e.$t("blockGrabCoin.blockNumber")))]),a("el-tooltip",{attrs:{effect:"dark",content:e.$t("blockGrabCoin.no_tips"),placement:"top"}},[a("i",{staticClass:"el-icon-question icon"})])],1),a("el-input",{model:{value:e.form.blockNumber,callback:function(t){e.$set(e.form,"blockNumber",t)},expression:"form.blockNumber"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"formItem",attrs:{prop:"timep"}},[a("div",{staticClass:"textBox"},[a("span",{staticClass:"label"},[e._v(e._s(e.$t("blockGrabCoin.hex")))]),a("el-tooltip",{attrs:{effect:"dark",content:e.$t("blockGrabCoin.no_tips"),placement:"top"}},[a("i",{staticClass:"el-icon-question icon"})])],1),a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"0x"},model:{value:e.form.hex,callback:function(t){e.$set(e.form,"hex",t)},expression:"form.hex"}})],1)],1)],1),a("el-row",[a("el-form-item",{staticClass:"formItem",attrs:{prop:"fromToken"}},[a("div",{staticClass:"textBox"},[a("span",{staticClass:"label"},[e._v(e._s(e.$t("blockGrabCoin.send_token")))]),a("el-tooltip",{attrs:{effect:"dark",content:e.$t("blockGrabCoin.no_tips"),placement:"top"}},[a("i",{staticClass:"el-icon-question icon"})])],1),a("el-input",{model:{value:e.form.fromToken,callback:function(t){e.$set(e.form,"fromToken",t)},expression:"form.fromToken"}}),a("div",{staticClass:"inputBtnBox"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.isTestToken1}},[e._v(e._s(e.$t("blockGrabCoin.check")))])])],1)],1),a("el-row",[a("el-form-item",{staticClass:"formItem",attrs:{prop:"toToken"}},[a("div",{staticClass:"textBox"},[a("span",{staticClass:"label"},[e._v(e._s(e.$t("blockGrabCoin.get_token")))]),a("el-tooltip",{attrs:{effect:"dark",content:e.$t("blockGrabCoin.no_tips"),placement:"top"}},[a("i",{staticClass:"el-icon-question icon"})])],1),a("el-input",{model:{value:e.form.toToken,callback:function(t){e.$set(e.form,"toToken",t)},expression:"form.toToken"}})],1)],1)],1)],1),a("div",{staticClass:"remark"},[e._v(" "+e._s(e.$t("blockGrabCoin.remark"))+" ")]),a("div",{staticClass:"btnBox"},[a("div",{class:{buttonContainer:!0,grabTrue:e.isRun}},[a("div",{staticClass:"fullBg"}),a("div",{staticClass:"fullBg"}),a("div",{staticClass:"fullBg"}),a("button",{on:{click:e.onStart}},[a("svg-icon",{staticClass:"speedIconBox",attrs:{"icon-class":"speed-transaction"}})],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.terminalInfo.length>0,expression:"terminalInfo.length > 0"}],ref:"terminal",staticClass:"terminal"},e._l(e.terminalInfo,(function(t){return a("p",{key:t},[e._v(e._s(t))])})),0)],1)],1)},o=[],s=a("4833"),i=a("efe2"),c=(a("96e6"),a("7479"),a("4a32"),a("65f0"),a("6a61"),a("52c1")),l={zh:{blockGrabCoin:{platform:"平台",rpc_tips:"RPC节点可以自定义，建议选择延迟小的节点，越小越快!",test:"测试",no_tips:"没有提示，自己研究",hex:"十六进制数据",private_key:"私钥",private_key_tips:"本APP完全本地运行，不会上传私钥到服务器，欢迎监督检测",import:"导入",address:"地址",balance:"余额",gwei_tips:"手续费gwei设置，越大越快!",buy_num:"发送数量",buy_num_tips:"发送Token的数量，比如USDT兑换BTC，USDT的数量",gasLimit:"Gas Limit",watch_frequency:"监控频率",watch_frequency_tips:"秒为单位，越小越快。根据RPC节点合理设置。",send_token:"发送Token地址",get_token:"接收地址",error_private_key:"请导入私钥!",error_platform:"请先填写RPC节点",error_gwei:"请填写GWEI!",error_token:"请先检测Token!",error_buy_num:"请填写购买数量!",blockNumber:"区块号",error_blockNumber:"请填写区块号!",error_pool:"请填写GasLimit!",token_err_tips:"错了噢，Token错误",rpc_err_tips:"错了噢，节点错误!",check:"检测",remark:"免责声明：由自身操作失误、填写失误、网络失误造成的损失 CoinTool.App 概不负责"}},en:{blockGrabCoin:{platform:"Platform",rpc_tips:"RPC nodes can be customized, and it is recommended to select nodes with low latency, the smaller the faster!",test:"Test",private_key:"Private Key",private_key_tips:"This APP runs completely locally and will not upload the private key to the server. You are welcome to supervise and check",import:"Import",address:"Address",balance:"Balance",gwei_tips:"Charge GWEI setting, the bigger the faster!",buy_num:"Purchase amount",buy_num_tips:"The number of tokens sent, such as USDT to BTC, the number of USDT",gasLimit:"Pool amount",pool_size_tips:"Whenever the pool is greater than this value, a purchase event is triggered. For example, if USDT is converted into BTC, if USDT pool is found to be greater than this value, the purchase will be triggered",watch_frequency:"Watch frequency",watch_frequency_tips:"In seconds, the smaller the faster. Set it appropriately according to the RPC node.",send_token:"Send Token Address",send_token_tips:"If you exchange BTC with USDT, enter the BTC contract address in the input box. If you exchange BTC with basic tokens (ETH, HT, BNB), it will be blank.",approve_before:"Approve before",approve_success:"Approve Success",fromTokenApprove:"Please approve the token address in advance!",get_token:"Recipient Token Address",get_token_tips:"If you exchange the BTC contract address with USDT, if you exchange it with basic tokens (ETH, HT, BNB), it will be empty.",grabSuccess:"Success",error_private_key:"Please import private key",error_platform:"Please select the platform",error_gwei:"Please enter GWEI!",error_token:"Please check the Token first",error_buy_num:"Please enter the purchase quantity",error_pool:"Please enter Pool total!",token_approve_repeat:"You have approve this token",token_err_tips:"Token Error",rpc_err_tips:"RPC Error",auto_sell:"Auto sale",auto_sell_tips:"After buying, it will automatically detect the quantity of buying and sell!",auto_sell_time_tips:"Sell every few seconds after buying. 0 is to sell when buying is detected without delay",check:"Check",auto_try:"retry",auto_try_tips:"When you encounter a token contract with white list and time lock, please turn on this option! It will automatically predict the successful purchase and purchase, and will not be on the chain or consume handling charges!",minAmount:"Minimum quantity obtained",minAmount_tips:"For example, if you send 1 usdt to get 1 BTC, when the quantity is less than the value you set, the purchase will not be triggered, and the purchase will be automatically retried until the quantity you get. There is no limit to 0, and you need to start the retrying switch!",remark:"Disclaimer: CoinTool.App is not responsible for any loss caused by its own operation error, filling error or network error"}}},u=a("b893"),p=a("ed08"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{width:e.isPc?"600px":"auto",title:e.$t("openGrabCoinVipDialog.title"),visible:e.isShowDialog,center:""},on:{"update:visible":function(t){e.isShowDialog=t}}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dialogBox"},[a("div",{staticClass:"vipIconBox"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"vip"}})],1),a("div",{staticClass:"text"},[a("p",[e._v(e._s(e.$t("openGrabCoinVipDialog.text0")))]),a("p",[e._v(e._s(e.$t("openGrabCoinVipDialog.text1",{amount:e.vipfee,sybmol:"HT"})))]),a("p",{domProps:{innerHTML:e._s(e.$t("openGrabCoinVipDialog.text2",{sybmol:"HT"}))}}),a("p",[e._v(e._s(e.$t("openGrabCoinVipDialog.text3")))])]),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:e.txhash.length>0,expression:"txhash.length>0"}],attrs:{type:"warning"}},[e._v(e._s(e.txhash))])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{disabled:e.isvip,type:"primary"},on:{click:e.onJoinVip}},[a("svg-icon",{staticClass:"icon vipIcon",attrs:{"icon-class":"vip"}}),e._v(e._s(e.$t("openGrabCoinVipDialog.joinBtn")))],1)],1)])},f=[],d={zh:{openGrabCoinVipDialog:{title:"欢迎成为科学家",text0:"灰度测试中，预购从速，不定时涨价",text1:"只需要支付 {amount} {sybmol}，您将获得永久VIP使用权.",text2:"您的科学家抢币神器将永久免费",text3:"如果您想了解更多相关信息，请添加微信(x0Panda)或者直接在电报群中@管理员即可",joinBtn:"加入科学家"}},en:{openGrabCoinVipDialog:{title:"Welcome to join VIP",text0:"",text1:"Just only pay {amount}  {sybmol} to be a vip member.",text2:"{sybmol} Token MultiSender your transactions sent through CoinTool.app will be free forever!<br/> Keep in mind, you would still need to pay for the mining fees.",text3:"If you need additional information, feel free to ask in our Telegram channel",joinBtn:"Buy"}}},b=a("a835"),h=a("85d4"),g=a("7742"),k=a.n(g),x="openGrabCoinVipDialog",v={inject:["onCheckConnect"],components:{},props:{routerName:{type:String,default:""}},data:function(){return{window:window,isvip:!1,loading:!0,defaultId:1,vipfee:0,vipfee_wei:"",txhash:"",isShowDialog:!1}},computed:Object(i["a"])({},Object(c["b"])(["isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[x]||(this.$i18n.mergeLocaleMessage("en",d.en),this.$i18n.mergeLocaleMessage("zh",d.zh))},mounted:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{onShow:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isShowDialog=!e.isShowDialog,a=128,r=b["a"].rpcNode(a),t.next=5,e.$ajax({url:r,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0xD6E867f8A79f0EDFc099A7e33252e3DaD712a5F8",data:"0x"+k.a.methodID("vipfee",[]).toString("hex")},"latest"]}});case 5:return n=t.sent,e.vipfee_wei=parseInt(n.result),e.vipfee=parseInt(n.result)/1e18,t.next=10,e.$ajax({url:r,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0xD6E867f8A79f0EDFc099A7e33252e3DaD712a5F8",data:"0x"+k.a.methodID("isVIP",["address"]).toString("hex")+k.a.rawEncode(["address"],[b["a"].getAccount()]).toString("hex")},"latest"]}});case 10:o=t.sent,parseInt(o.result)>0&&(e.$message({message:"You is vip",type:"success"}),e.isvip=!0),e.loading=!1;case 13:case"end":return t.stop()}}),t)})))()},onJoinVip:function(){this.onJoin()},onJoin:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.onCheckConnect()){t.next=2;break}return t.abrupt("return");case 2:if(128===b["a"].getChainId()){t.next=12;break}return e.$notify.info({title:"Alert",message:e.$t("common.no_connect_heconetwork"),duration:0}),t.prev=4,t.next=7,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x80",chainName:"HECO Mainnet",nativeCurrency:{name:"Huobi Token",symbol:"HT",decimals:18},rpcUrls:["https://http-mainnet-node.huobichain.com"],blockExplorerUrls:["https://scan.hecochain.com/"]}]});case 7:t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](4);case 11:return t.abrupt("return");case 12:return a="0x"+k.a.methodID("registerVIP",[]).toString("hex"),r={from:b["a"].getAccount(),to:"0xD6E867f8A79f0EDFc099A7e33252e3DaD712a5F8",gas:Object(h["toHex"])(9e4),value:Object(h["toHex"])(e.vipfee_wei),data:a},t.next=16,b["a"].sendTransaction(r);case 16:n=t.sent,e.txhash=n,e.isvip=!0;case 19:case"end":return t.stop()}}),t,null,[[4,9]])})))()}}},_=v,w=(a("de11"),a("5d22")),C=Object(w["a"])(_,m,f,!1,null,"498c85fd",null),y=C.exports,T=a("7921"),$=a.n(T),I=a("5012"),D=a.n(I),S=a("8feb"),B=a.n(S),G="blockGrabCoin",j=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[],payable:!1,type:"function"}],R={name:G,inject:["onCheckConnect"],components:{OpenGrabCoinVipDialog:y},data:function(){return{isVip:!1,terminalInfo:[],pt:{},rules:{},address:"",balance:0,fromTokenApprove:!1,token1Info:!1,token2Info:!1,txlink:"",isRun:!1,txid:"",tokenBalance:0,approve1_close:!1,approve2_close:!1,ojbk:!1,nonce:0,ptOptions:[{value:"1",label:"MDEX"},{value:"2",label:"UNISWAP"},{value:"3",label:"PancakeSwap"},{value:"4",label:"MDIS"},{value:"5",label:"MDEX(BSC)"}],form:{platform:"",fromToken:"",gasLimit:"",hex:"",blockNumber:"",toToken:"",amount:"",gwei:"",timep:"2",pkv:"",rpc:""}}},computed:Object(i["a"])({},Object(c["b"])(["isConnect","account","isPc","language"])),watch:{account:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.onCheckVip();case 2:case"end":return e.stop()}}),e)})))()},"form.fromToken":function(e,t){e!==t&&(this.form.fromToken=e.trim())},"form.toToken":function(e,t){e!==t&&(this.form.toToken=e.trim())},"form.pkv":function(e,t){e!==t&&(this.form.pkv=e.trim())}},created:function(){this.$i18n.getLocaleMessage("en")[G]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh)),this.rules={}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["i"])(1e3);case 2:return t.next=4,e.onCheckVip();case 4:case"end":return t.stop()}}),t)})))()},methods:{onCheckVip:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null===b["a"].getAccount()){t.next=6;break}return a=b["a"].rpcNode(128),t.next=4,e.$ajax({url:a,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0xD6E867f8A79f0EDFc099A7e33252e3DaD712a5F8",data:"0x"+k.a.methodID("isVIP",["address"]).toString("hex")+k.a.rawEncode(["address"],[b["a"].getAccount()]).toString("hex")},"latest"]}});case 4:r=t.sent,parseInt(r.result)>0&&(e.$message({message:"You is vip",type:"success"}),e.isVip=!0);case 6:case"end":return t.stop()}}),t)})))()},addTerminalInfo:function(e){var t=this.$refs.terminal;this.terminalInfo.push(e),setTimeout((function(){t.scrollTop=t.scrollHeight}),0)},onStart:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isVip){t.next=3;break}return e.$refs.OpenGrabCoinVipDialog.onShow(),t.abrupt("return");case 3:if(r){t.next=6;break}return e.$message.error(e.$t("blockGrabCoin.error_private_key")),t.abrupt("return");case 6:if(""!==e.form.gwei){t.next=9;break}return e.$message.error(e.$t("blockGrabCoin.error_gwei")),t.abrupt("return");case 9:if(""!==e.form.amount){t.next=12;break}return e.$message.error(e.$t("blockGrabCoin.error_buy_num")),t.abrupt("return");case 12:if(""!==e.form.gasLimit){t.next=15;break}return e.$message.error(e.$t("blockGrabCoin.error_pool")),t.abrupt("return");case 15:if(""!==e.form.blockNumber){t.next=18;break}return e.$message.error(e.$t("blockGrabCoin.error_blockNumber")),t.abrupt("return");case 18:if(""!==e.form.fromToken&&"BASECOIN"!==e.form.fromToken){t.next=22;break}e.form.fromToken="BASECOIN",t.next=25;break;case 22:if(e.token1Info){t.next=25;break}return e.$message.error(e.$t("blockGrabCoin.error_token")),t.abrupt("return");case 25:if("BASECOIN"===e.form.fromToken.trim()&&(e.token1Info={symbol:"BaseCoin",decimal:18}),e.terminalInfo.length>200&&e.terminalInfo.shift(),e.isRun=!e.isRun,!e.isRun){t.next=41;break}return e.addTerminalInfo(e.formatDate((new Date).getTime())+": 启动"),e.$message.success("已启动抢币"),t.t0=parseInt,t.next=34,r.eth.getTransactionCount(e.address);case 34:t.t1=t.sent,e.nonce=(0,t.t0)(t.t1),e.addTerminalInfo(e.formatDate((new Date).getTime())+": 获取到 nonce "+e.nonce+",请不要操作账户和授权，如操作则重新启动抢币"),a=e.$route.query.nonce,a&&parseInt(a)>0&&(e.nonce=e.nonce+1,e.addTerminalInfo(e.formatDate((new Date).getTime())+": 获取到 nonce 更新，触发条件会将nonce +1")),t.next=42;break;case 41:e.$message.success("已暂停抢币");case 42:return t.next=44,e.swap();case 44:case"end":return t.stop()}}),t)})))()},swap:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n,o,s,i,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==e.isRun){t.next=3;break}return e.addTerminalInfo(e.formatDate((new Date).getTime())+": 停止"),t.abrupt("return");case 3:return a="BASECOIN"===e.form.fromToken?"BASECOIN":e.form.fromToken,n=e.form.toToken,t.prev=5,t.next=8,e.$ajax({url:e.form.rpc,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_getBlockByNumber",params:["latest",!0]}});case 8:if(o=t.sent,parseInt(o.result.number)!==parseInt(e.form.blockNumber)-2){t.next=37;break}if("BASECOIN"!==e.form.fromToken){t.next=23;break}return t.prev=11,t.next=14,r.eth.sendTransaction({from:e.address,gas:21e3,gasPrice:B.a.toWei(e.form.gwei,"gwei"),to:n,data:e.form.hex,value:B.a.toWei(e.form.amount,"ether")});case 14:s=t.sent,s.transactionHash&&e.addTerminalInfo(e.formatDate((new Date).getTime())+": transactionHash:"+s.transactionHash),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](11),e.addTerminalInfo(e.formatDate((new Date).getTime())+""+t.t0.toString());case 21:t.next=35;break;case 23:return i=new r.eth.Contract(j,a),c=new $.a(10).pow(e.token1Info.decimal).times(e.form.amount).toString(10),t.prev=25,t.next=28,i.methods.transfer(n,c).send({from:e.address,gas:Number(e.form.gasLimit),nonce:e.nonce,gasPrice:B.a.toWei(e.form.gwei,"gwei")});case 28:l=t.sent,l.transactionHash&&e.addTerminalInfo(e.formatDate((new Date).getTime())+": transactionHash:"+l.transactionHash),t.next=35;break;case 32:t.prev=32,t.t1=t["catch"](25),e.addTerminalInfo(e.formatDate((new Date).getTime())+""+t.t1.toString());case 35:t.next=42;break;case 37:return e.addTerminalInfo(e.formatDate((new Date).getTime())+": BlockNumber:"+parseInt(o.result.number)+" 没有达到高度 "+parseInt(e.form.blockNumber)),t.next=40,Object(p["i"])(1e3*Number(e.form.timep));case 40:return t.next=42,e.swap();case 42:t.next=51;break;case 44:return t.prev=44,t.t2=t["catch"](5),t.next=48,Object(p["i"])(1e3*Number(e.form.timep));case 48:return t.next=50,e.swap();case 50:e.addTerminalInfo(e.formatDate((new Date).getTime())+""+t.t2.toString());case 51:case"end":return t.stop()}}),t,null,[[5,44],[11,18],[25,32]])})))()},getTokenBalance:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,o,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"}],o=new r.eth.Contract(n,e),a.next=4,o.methods.balanceOf(t).call();case 4:return s=a.sent,a.abrupt("return",s);case 6:case"end":return a.stop()}}),a)})))()},init_account:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,""!==e.form.rpc){t.next=4;break}return e.$message.error(e.$t("blockGrabCoin.error_platform")),t.abrupt("return");case 4:return r=new D.a(e.form.rpc),a=r.eth.accounts.privateKeyToAccount(e.form.pkv),r.eth.accounts.wallet.add(a),r.eth.defaultAccount=a.address,e.address=r.eth.defaultAccount,t.t0=B.a,t.next=12,r.eth.getBalance(e.address);case 12:t.t1=t.sent,e.balance=t.t0.fromWei.call(t.t0,t.t1,"ether"),t.next=20;break;case 16:t.prev=16,t.t2=t["catch"](0),console.log(t.t2.message),e.$message.error(t.t2.message);case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()},isTestRpc:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$ajax({url:e.form.rpc,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_blockNumber",params:[]}});case 3:a=t.sent,e.$message({message:"获取到最新区块:"+parseInt(a.result),type:"success"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$message.error(e.$t("blockGrabCoin.rpc_err_tips"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},isTestToken1:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("BASECOIN"!==e.form.fromToken.trim()){t.next=3;break}return e.$message.error("基础代币不用检测!"),t.abrupt("return");case 3:return t.next=5,e.getTokenInfo(e.form.fromToken);case 5:a=t.sent,a.symbol&&a.decimal?(e.token1Info=a,e.$message({message:"Token获取成功:"+a.symbol,type:"success"})):e.$message.error(e.$t("blockGrabCoin.token_err_tips"));case 7:case"end":return t.stop()}}),t)})))()},getTokenInfo:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$ajax({url:t.form.rpc,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x95d89b41"},"latest"]}});case 2:return r=a.sent,a.next=5,t.$ajax({url:t.form.rpc,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x313ce567"},"latest"]}});case 5:return n=a.sent,a.abrupt("return",{symbol:u["a"].cleanAsciiText(B.a.toAscii(r.result).toString()),decimal:parseInt(n.result)});case 7:case"end":return a.stop()}}),a)})))()},formatDate:function(e){var t=new Date(e),a=t.getFullYear()+"-",r=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",n=t.getDate()<10?"0"+t.getDate():t.getDate(),o=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",s=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",i=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+r+n+" "+o+s+i}}},A=R,O=(a("4a4d"),Object(w["a"])(A,n,o,!1,null,"4d30d978",null));t["default"]=O.exports},b893:function(e,t,a){"use strict";var r=a("1222"),n=a("a3b6"),o=a("55ae"),s=(a("37de"),a("1e34"),a("7479"),a("4a32"),a("22f9"),a("65f0"),a("96e6"),function(){function e(){Object(r["a"])(this,e),Object(o["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])}return Object(n["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,a="x"===e?t:3&t|8;return a.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",a=0;a<e;a++){var r=Math.ceil(61*Math.random());t+=this.chars[r]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var a,r,n;try{a=e.toString().split(".")[1].length}catch(o){a=0}try{r=t.toString().split(".")[1].length}catch(o){r=0}return n=Math.pow(10,Math.max(a,r)),(this.numMul(e,n)+this.numMul(t,n))/n}},{key:"numSub",value:function(e,t){var a,r,n;try{a=e.toString().split(".")[1].length}catch(o){a=0}try{r=t.toString().split(".")[1].length}catch(o){r=0}return n=Math.pow(10,Math.max(a,r)),(this.numMul(e,n)-this.numMul(t,n))/n}},{key:"numMul",value:function(e,t){var a=0,r=e.toString(),n=t.toString();try{a+=r.split(".")[1].length}catch(o){}try{a+=n.split(".")[1].length}catch(o){}return Number(r.replace(".",""))*Number(n.replace(".",""))/Math.pow(10,a)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var a,r,n=0,o=0;try{n=e.toString().split(".")[1].length}catch(s){}try{o=t.toString().split(".")[1].length}catch(s){}return a=Number(e.toString().replace(".","")),r=Number(t.toString().replace(".","")),this.numMul(a/r,Math.pow(10,o-n))}}]),e}()),i=new s;t["a"]=i},db6d:function(e,t,a){},de11:function(e,t,a){"use strict";a("4bd0")}}]);