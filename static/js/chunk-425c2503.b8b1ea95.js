(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-425c2503"],{4479:function(e,t,o){"use strict";t["a"]={zh:{grabCoin:{platform:"平台",rpc_tips:"RPC节点可以自定义，建议选择延迟小的节点，越小越快!",test:"测试",private_key:"私钥",private_key_tips:"本APP完全本地运行，不会上传私钥到服务器，欢迎监督检测",import:"导入",address:"地址",balance:"余额",gwei_tips:"手续费gwei设置，越大越快!",buy_num:"购买数量",buy_num_tips:"发送Token的数量，比如USDT兑换BTC，USDT的数量",pool_size:"池子大小",pool_size_tips:"池子只要大于此值，触发购买事件。比如USDT兑换BTC，如发现USDT池子大于此值，触发购买",watch_frequency:"监控频率",watch_frequency_tips:"秒为单位，越小越快。根据RPC节点合理设置。",send_token:"发送Token地址",send_token_tips:"如用USDT兑换BTC，输入框填USDT的合约地址，如用基础代币兑换(ETH、HT、BNB)就为空。此Token余额要等于或大于购买数量，否则出错!",approve_before:"提前授权",approve_success:"授权成功",get_token:"获得Token地址",get_token_tips:"如用USDT兑换BTC，输入框填BTC的合约地址，如用基础代币兑换(ETH、HT、BNB)就为空。注意:只支持单路由,如检测的是USDT/XXX池，然而项目注入的是ETH/XXX池，不会触发购买，请周知!",grabSuccess:"大哥发财，抢到了！",error_private_key:"请导入私钥!",error_platform:"请先选择平台",error_gwei:"请填写GWEI!",error_token:"请先检测Token!",error_buy_num:"请填写购买数量!",auto_sell:"自动卖",auto_sell_tips:"买入后就自动检测买入数量，自动卖出!",auto_sell_time_tips:"第一个输入框:买入后隔几秒卖出，0为检测到买入就卖出无延迟。第二个输入框:当卖出获得大于购买数量多少则自动卖出，0无限制",auto_try:"重试",auto_try_tips:"当遇到白名单、时间锁的代币合约，请开启此选项!会自动预测成功购买在进行买入，不会上链和消耗手续费!",minAmount:"最小获得数量",minAmount_tips:"比如发送1 USDT获得1 BTC,当获得数量小于您设定的值的时候不触发购买，会自动重试到您获得的数量为止，0无限制，使用需启动重试开关!",fromTokenApprove:"发送Token地址请提前授权!",error_pool:"请填写池子数量!",token_approve_repeat:"此token你已授权过",token_err_tips:"错了噢，Token错误",rpc_err_tips:"错了噢，节点错误!",check:"检测",remark:"免责声明：由自身操作失误、填写失误、网络失误造成的损失 CoinTool.App 概不负责。<br>VIP账号私钥请勿泄露，账号内资产请勿大额，不使用的时候即刻转走，请勿使用套壳破解软件",gasLimit:"Gas Limit",no_tips:"没有提示，自己研究",hex:"十六进制数据",blockNumber:"区块号",error_blockNumber:"请填写区块号!"}},en:{grabCoin:{platform:"Platform",rpc_tips:"RPC nodes can be customized, and it is recommended to select nodes with low latency, the smaller the faster!",test:"Test",private_key:"Private Key",private_key_tips:"This APP runs completely locally and will not upload the private key to the server. You are welcome to supervise and check",import:"Import",address:"Address",balance:"Balance",gwei_tips:"Charge GWEI setting, the bigger the faster!",buy_num:"Purchase amount",buy_num_tips:"The number of tokens sent, such as USDT to BTC, the number of USDT",pool_size:"Pool amount",pool_size_tips:"Whenever the pool is greater than this value, a purchase event is triggered. For example, if USDT is converted into BTC, if USDT pool is found to be greater than this value, the purchase will be triggered",watch_frequency:"Watch frequency",watch_frequency_tips:"In seconds, the smaller the faster. Set it appropriately according to the RPC node.",send_token:"Send Token Address",send_token_tips:"If you exchange BTC with USDT, enter the BTC contract address in the input box. If you exchange BTC with basic tokens (ETH, HT, BNB), it will be blank.",approve_before:"Approve before",approve_success:"Approve Success",fromTokenApprove:"Please approve the token address in advance!",get_token:"Recipient Token Address",get_token_tips:"If you exchange the BTC contract address with USDT, if you exchange it with basic tokens (ETH, HT, BNB), it will be empty.",grabSuccess:"Success",error_private_key:"Please import private key",error_platform:"Please select the platform",error_gwei:"Please enter GWEI!",error_token:"Please check the Token first",error_buy_num:"Please enter the purchase quantity",error_pool:"Please enter Pool total!",token_approve_repeat:"You have approve this token",token_err_tips:"Token Error",rpc_err_tips:"RPC Error",auto_sell:"Auto sale",auto_sell_tips:"After buying, it will automatically detect the quantity of buying and sell!",auto_sell_time_tips:"Sell every few seconds after buying. 0 is to sell when buying is detected without delay",check:"Check",auto_try:"retry",auto_try_tips:"When you encounter a token contract with white list and time lock, please turn on this option! It will automatically predict the successful purchase and purchase, and will not be on the chain or consume handling charges!",minAmount:"Minimum quantity obtained",minAmount_tips:"For example, if you send 1 usdt to get 1 BTC, when the quantity is less than the value you set, the purchase will not be triggered, and the purchase will be automatically retried until the quantity you get. There is no limit to 0, and you need to start the retrying switch!",remark:"Disclaimer: CoinTool.App is not responsible for any loss caused by its own operation error, filling error or network error",gasLimit:"Pool amount",no_tips:"Not tips",hex:"Hex Data",blockNumber:"Block Number",error_blockNumber:"Please enter Block Number"}}}},"44ed":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"lockBox"},[o("div",{staticClass:"center"},[o("div",{staticClass:"tips"}),o("el-input",{attrs:{placeholder:"key"},model:{value:e.lockInput,callback:function(t){e.lockInput=t},expression:"lockInput"}}),o("el-button",{staticClass:"lock",attrs:{type:"primary",icon:"el-icon-lock"},on:{click:e.onLock}})],1)])},n=[],r=o("4833"),s=(o("6a61"),o("7479"),o("4a32"),o("7742")),i=o.n(s),c=o("a835"),l={components:{},data:function(){return{lockInput:""}},computed:{},created:function(){},mounted:function(){},methods:{onLock:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=c["a"].rpcNode(128),t.next=3,e.$ajax({url:o,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0xD6E867f8A79f0EDFc099A7e33252e3DaD712a5F8",data:"0x"+i.a.methodID("isVIP",["address"]).toString("hex")+i.a.rawEncode(["address"],[e.lockInput]).toString("hex")},"latest"]}});case 3:if(a=t.sent,!(parseInt(a.result)>0)){t.next=8;break}e.$emit("onLockSuccess",e.lockInput),t.next=12;break;case 8:return t.next=10,e.$ajax({url:o,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0x590e6012e11707086bc48fee2f9b16048b2584df",data:"0x"+i.a.methodID("isVIP",["address"]).toString("hex")+i.a.rawEncode(["address"],[e.lockInput]).toString("hex")},"latest"]}});case 10:a=t.sent,parseInt(a.result)>0?e.$emit("onLockSuccess",e.lockInput):e.$message("推荐人错误");case 12:case"end":return t.stop()}}),t)})))()}}},p=l,u=(o("ed0d"),o("5d22")),d=Object(u["a"])(p,a,n,!1,null,"4dca20b2",null);t["a"]=d.exports},"6afc":function(e,t,o){"use strict";o("e5ef")},ba934:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{width:e.isPc?"600px":"auto",title:e.$t("openGrabCoinVipDialog.title"),visible:e.isShowDialog,center:""},on:{"update:visible":function(t){e.isShowDialog=t}}},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dialogBox"},[o("div",{staticClass:"vipIconBox"},[o("svg-icon",{staticClass:"icon",attrs:{"icon-class":"vip"}})],1),o("div",{staticClass:"text"},[o("p",[e._v(e._s(e.$t("openGrabCoinVipDialog.text0")))]),o("p",[e._v(e._s(e.$t("openGrabCoinVipDialog.text1",{amount:20,sybmol:"HT"})))]),o("p",{domProps:{innerHTML:e._s(e.$t("openGrabCoinVipDialog.text2",{sybmol:"HT"}))}}),o("p",[e._v(e._s(e.$t("openGrabCoinVipDialog.text3")))])]),o("el-tag",{directives:[{name:"show",rawName:"v-show",value:e.txhash.length>0,expression:"txhash.length>0"}],attrs:{type:"warning"}},[e._v(e._s(e.txhash))])],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{disabled:e.isvip,type:"primary"},on:{click:e.onJoinVip}},[o("svg-icon",{staticClass:"icon vipIcon",attrs:{"icon-class":"vip"}}),e._v(e._s(e.$t("openGrabCoinVipDialog.joinBtn")))],1)],1)])},n=[],r=o("4833"),s=o("efe2"),i=(o("7479"),o("4a32"),o("6a61"),{zh:{openGrabCoinVipDialog:{title:"欢迎成为科学家",text0:"灰度测试中，预购从速，不定时涨价",text1:"只需要支付 {amount} {sybmol}，您将获得永久VIP使用权.",text2:"您的科学家抢币神器将永久免费",text3:"如果您想了解更多相关信息，请联系您的推荐人!",joinBtn:"加入科学家"}},en:{openGrabCoinVipDialog:{title:"Welcome to join VIP",text0:"",text1:"Just only pay {amount}  {sybmol} to be a vip member.",text2:"{sybmol} Token MultiSender your transactions sent through CoinTool.app will be free forever!<br/> Keep in mind, you would still need to pay for the mining fees.",text3:"If you need additional information, feel free to ask in our Telegram channel",joinBtn:"Buy"}}}),c=o("a835"),l=o("85d4"),p=o("7742"),u=o.n(p),d=o("52c1"),h="openGrabCoinVipDialog",m={inject:["onCheckConnect"],components:{},props:{routerName:{type:String,default:""},lockInput:{type:String,default:""}},data:function(){return{window:window,isvip:!1,loading:!0,defaultId:1,vipfee:0,vipfee_wei:"",txhash:"",isShowDialog:!1}},computed:Object(s["a"])({},Object(d["b"])(["isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[h]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh))},mounted:function(){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{onShow:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.lockInput,"this.lockInput"),e.isShowDialog=!e.isShowDialog,o=128,a=c["a"].rpcNode(o),t.next=6,e.$ajax({url:a,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0x590e6012e11707086bc48fee2f9b16048b2584df",data:"0x"+u.a.methodID("vipfee",[]).toString("hex")},"latest"]}});case 6:return n=t.sent,e.vipfee_wei=parseInt(n.result),e.vipfee=parseInt(e.vipfee_wei)/1e18,t.next=11,e.$ajax({url:a,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0x590e6012e11707086bc48fee2f9b16048b2584df",data:"0x"+u.a.methodID("isVIP",["address"]).toString("hex")+u.a.rawEncode(["address"],[c["a"].getAccount()]).toString("hex")},"latest"]}});case 11:if(r=t.sent,!(parseInt(r.result)>0)){t.next=17;break}e.$message({message:"You are vip",type:"success"}),e.isvip=!0,t.next=21;break;case 17:return t.next=19,e.$ajax({url:a,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0xD6E867f8A79f0EDFc099A7e33252e3DaD712a5F8",data:"0x"+u.a.methodID("isVIP",["address"]).toString("hex")+u.a.rawEncode(["address"],[c["a"].getAccount()]).toString("hex")},"latest"]}});case 19:r=t.sent,parseInt(r.result)>0&&(e.$message({message:"You are vip",type:"success"}),e.isvip=!0);case 21:e.loading=!1;case 22:case"end":return t.stop()}}),t)})))()},onJoinVip:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.onCheckConnect()){t.next=2;break}return t.abrupt("return");case 2:if(128===c["a"].getChainId()){t.next=6;break}return e.$notify.info({title:"Alert",message:e.$t("common.no_connect_heconetwork"),duration:0}),c["a"].addToMetamask(128),t.abrupt("return");case 6:return o="0x"+u.a.methodID("registerVIP",["address"]).toString("hex")+u.a.rawEncode(["address"],[e.lockInput]).toString("hex"),a={from:c["a"].getAccount(),to:"0x590e6012e11707086bc48fee2f9b16048b2584df",gas:Object(l["toHex"])(9e4),value:Object(l["toHex"])(e.vipfee_wei),data:o},t.next=10,c["a"].sendTransaction(a);case 10:n=t.sent,e.txhash=n,e.isvip=!0;case 13:case"end":return t.stop()}}),t)})))()}}},_=m,f=(o("6afc"),o("5d22")),g=Object(f["a"])(_,a,n,!1,null,"02fcbce8",null);t["a"]=g.exports},e5ef:function(e,t,o){},ed0d:function(e,t,o){"use strict";o("faec")},faec:function(e,t,o){}}]);