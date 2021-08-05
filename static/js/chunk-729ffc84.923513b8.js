(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-729ffc84"],{1751:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("approveTemplate",{attrs:{coin:"matic",rpc_node:"https://rpc-mainnet.matic.network"}})},n=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:"container "+(e.tableData.length>0?"miniContainer":"")},[r("div",{staticClass:"createBox"},[r("div",{staticClass:"boxCenter"},[r("div",{staticClass:"coinIcon"},[r("svg-icon",{style:"color:"+e.coinList[e.form.coin].color,attrs:{"icon-class":e.coinList[e.form.coin].icon}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.coinList[e.form.coin].type,expression:"coinList[form.coin].type"}],staticClass:"radioBox"},[r("el-radio-group",{attrs:{size:"mini"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.coinList[e.form.coin].type,(function(t,a){return r("el-radio",{key:t,attrs:{label:a,border:""}},[e._v(" "+e._s(t)+" ")])})),1)],1),r("div",{staticClass:"inputBox"},[r("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:e.$t("approve.sleep"),placement:"top"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("approve.inputPlaceholder")},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}})]),r("div",{staticClass:"icon",on:{click:e.onCheck}},[r("i",{class:e.loading?"el-icon-loading":"el-icon-right"})])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:0===e.tableData.length,expression:"tableData.length === 0"}],staticClass:"desc"},[r("el-alert",{attrs:{title:e.$t("approve.desc"),type:"success",closable:!1}})],1)])]),r("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.tableData.length>0,expression:"tableData.length > 0"}],attrs:{"text-inside":!0,"stroke-width":12,percentage:e.percentage}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.tableData.length>0,expression:"tableData.length > 0"}],staticClass:"scrollBox"},[r("div",{staticClass:"tips"},[r("p",{staticClass:"alertText"},[e._v(e._s(e.$t("approve.alert_text")))]),""!==e.form.web3Address?r("p",[r("el-checkbox",{model:{value:e.donationChecked,callback:function(t){e.donationChecked=t},expression:"donationChecked"}},[e._v(e._s(e.$t("approve.donation",{amount:e.donationNum,sybmol:e.donationSybmol})))])],1):e._e()]),r("el-row",{staticClass:"cardList",attrs:{gutter:20}},e._l(e.tableData,(function(t,a){return r("el-col",{key:a,attrs:{lg:12,xs:24}},[r("div",{staticClass:"card"},[r("div",{staticClass:"coinInfo"},[r("div",{staticClass:"left"},[r("div",{staticClass:"imgBox"},[r("el-image",{staticClass:"img img1",attrs:{src:e.coinList[e.form.coin].logo_link.replace("#address#","bsc"===e.form.coin?t.symbol:t.token_address)}},[r("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[r("img",{staticClass:"img",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png"}})])])],1),r("div",{staticClass:"sybmol"},[r("a",{staticStyle:{"margin-left":"6px"},attrs:{href:e.coinList[e.form.coin].url+"/token/"+t.token_address+"?a="+e.form.address,target:"_blank"}},[e._v(e._s(t.symbol))])])]),r("div",{staticClass:"right"},[e._v(" "+e._s(e.$t("approve.dangerLevel"))+": "),r("span",{class:"flag "+(1===t.type?"redBg":"greenBg")},[e._v(e._s(1===t.type?e.$t("approve.high"):e.$t("approve.low")))])])]),r("ul",[r("li",[r("p",[r("span",{staticClass:"key"},[e._v(e._s(e.$t("approve.smart_contract"))+":")]),r("a",{attrs:{href:e.coinList[e.form.coin].url+"/address/"+t.c_address,target:"_blank"}},[e._v(" "+e._s(e._f("autoCheckName")(t.c_address))+" ")])])]),r("li",[r("p",[r("span",{staticClass:"key"},[e._v(e._s(e.$t("approve.token"))+":")]),r("a",{attrs:{href:e.coinList[e.form.coin].url+"/token/"+t.token_address+"?a="+e.form.address,target:"_blank"}},[e._v(" "+e._s(e._f("autoAddress")(t.token_address))+" ")])])]),r("li",[r("p",[r("span",{staticClass:"key"},[e._v(e._s(e.$t("approve.amount"))+":")]),r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.amount)+" "),r("i",{directives:[{name:"show",rawName:"v-show",value:1===t.type,expression:"item.type===1"}],staticClass:"el-icon-warning",staticStyle:{color:"red"}})])])])]),r("div",{staticClass:"unlockBtn"},[e.form.web3Address===e.form.address&&""!==e.form.web3Address?r("el-button",{attrs:{disabled:1===t.status,type:"danger",size:"mini"},on:{click:function(r){return e.closeApprove(a,t)}}},[e._v(e._s(e.$t("approve.decline")))]):r("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.$t("approve.unlock")))])],1)])])})),1)],1)],1)},o=[],c=r("4833"),i=r("efe2"),u=(r("6a61"),r("96e6"),r("dfe9"),r("7479"),r("7fe9"),r("9bdd"),r("4a32"),r("05d6"),r("37de"),r("1e34"),r("c9b2"),r("8b79"),{zh:{approve:{desc:"工具说明：检查您的钱包地址授权过哪些合约，请及时取消不信任的合约授权，保证你钱包的安全性！",smart_contract:"授权智能合约",token:"被授权Token",amount:"授权数量",donation:"请CoinTool.App 喝一杯咖啡({amount}{sybmol})",donation_ok:"谢谢老板请我喝咖啡!",alert_text:"当您向某项合约授权无限额度的权限，该项目有权支配您所有的资产，此类授权危险系数极大，建议您及时收回授权.",action:"操作",decline:"取消授权",decline_ok:"成功取消授权",addressError:"查询地址错误",unlock:"取消授权请先解锁钱包",addressZero:"你没有授权代币给合约过，很棒!",donation_text1:"是否像CoinTool捐赠?",alert:"提示",confirmButtonText:"确定",cancelButtonText:"关闭",unlimited:"无限",sleep:"查询过程缓慢，请耐心等待!",inputPlaceholder:"请输入你要检查的地址",dangerLevel:"危险等级",high:"高",low:"低"}},en:{approve:{desc:"Tips: check your wallet address authorized those contracts, please cancel the authorization of the contracts do not trust, to ensure the security of your wallet!",smart_contract:"Contract",token:"Token",amount:"Allowance",sleep:"The query process is slow, please be patient!",donation:"please CoinTool.App  Have a cup of coffee ({amount}{sybmol})",alert_text:"When you authorize an unlimited amount of access to a contract, the program has the right to control all of your assets, this type of authorization is extremely dangerous and you are advised to withdraw it in time.",donation_ok:"Thank you for the coffee!",action:"Action",decline:"Revoke",decline_ok:"Successfully Decline",addressError:"Address Error",addressZero:"You don't have an allowance token for a contract. It's great!",unlimited:"unlimited",donation_text1:"Please coffee for cointool?",alert:"Alert",confirmButtonText:"Confirm",cancelButtonText:"Cancel",unlock:"Please unlock wallet",inputPlaceholder:"Please enter the address you want to check",dangerLevel:"Danger level",high:"High",low:"Low"}}}),f=r("a835"),l=r("4672"),d=r.n(l),p=r("85d4"),m=r("8feb"),h=r.n(m),b=r("b893"),x=r("52c1"),g="approve",k=Object(i["a"])(Object(i["a"])({name:"ApproveTemplate",props:{coin:{type:String,default:"eth"},rpc_node:{type:String,default:""}}},Object(x["b"])(["isPc"])),{},{data:function(){return{loading:!1,donationNum:0,donationChecked:!0,donationOk:!0,donationSybmol:"ETH",form:{coin:"eth",address:"",web3Address:""},tableData:[],coinList:{eth:{icon:"coin-eth",name:"ETH",url:"https://etherscan.io",logo_link:"https://tokens.1inch.exchange/#address#.png",color:"#6bb1f1"},bsc:{icon:"coin-bnb",name:"BNB(BSC)",url:"https://bscscan.com",logo_link:"https://exchange.pancakeswap.finance/images/coins/#address#.png",color:"#6bb1f1"},heco:{icon:"coin-heco",name:"HECO(HT)",url:"https://hecoinfo.com",logo_link:"https://raw.githubusercontent.com/mdexSwap/token-icons/main/heco/#address#.png",color:"#6bb1f1"},okt:{icon:"coin-okex",name:"Okt",url:"https://www.oklink.com/okexchain",logo_link:"https://static.kswap.finance/tokenlist/logos/#address#.png",color:"#6bb1f1"},ftm:{icon:"coin-ftm",name:"Fantom",url:"https://ftmscan.com",logo_link:"https://tokens.1inch.exchange/#address#.png",color:"#6bb1f1"},matic:{icon:"matic",name:"Matic",url:"https://backup-explorer.matic.network",logo_link:"https://tokens.1inch.exchange/#address#.png",color:"#6bb1f1"},tomo:{icon:"tomo",name:"Tomo",url:"https://backup-explorer.matic.network",logo_link:"https://tokens.1inch.exchange/#address#.png",color:"#6bb1f1"}},walletList:[],percentage:0}},computed:Object(i["a"])({},Object(x["b"])(["isPc","account"])),watch:{account:function(e){this.form.address=e.toLowerCase(),this.form.web3Address=e.toLowerCase()}},created:function(){this.$i18n.getLocaleMessage("en")[g]||(this.$i18n.mergeLocaleMessage("en",u.en),this.$i18n.mergeLocaleMessage("zh",u.zh)),this.form.coin=this.coin},mounted:function(){var e=this,t={eth:.006,bsc:.09,heco:1.2,ftm:10,matic:200,tomo:8,okt:.1},r={eth:"ETH",bsc:"BNB",heco:"HT",ftm:"FTM",matic:"MATIC",tomo:"TOMO",okt:"OKT"},a={eth:1,bsc:56,heco:128,ftm:250,matic:137,tomo:88,okt:66};this.donationNum=t[this.form.coin],this.donationSybmol=r[this.form.coin],this.donationChainId=a[this.form.coin];var n=this.$route.query.address;setTimeout((function(){n&&0!==n.length&&(e.form.address=n.toLowerCase())}),1e3)},methods:{onCheck:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,a,n,s,o,c,i,u,f,l,p,m,h,b,x,g,k,v,w,y,_,C,$,j,O,T,S,A,M,R,B,L,N,D,I,P,H,z,E,F,Z;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.form.address){t.next=3;break}return e.$message.error(e.$t("approve.inputPlaceholder")),t.abrupt("return");case 3:if(e.form.address=e.form.address.trim(),d.a.isValidAddress(e.form.address)){t.next=7;break}return e.$message.error(e.$t("approve.addressError")),t.abrupt("return");case 7:if(e.tableData=[],e.percentage=0,e.loading=!0,r=[],a=[],t.prev=12,"okt"!==e.form.coin){t.next=42;break}return t.next=16,e.checkOktApi(e.form.address);case 16:n=t.sent,t.t0=regeneratorRuntime.keys(n.data);case 18:if((t.t1=t.t0()).done){t.next=39;break}s=t.t1.value,t.t2=regeneratorRuntime.keys(n.data[s].spenders);case 21:if((t.t3=t.t2()).done){t.next=37;break}if(o=t.t3.value,c=n.data[s].spenders[o].id,i=n.data[s].id+c,!r[i]){t.next=27;break}return t.abrupt("continue",21);case 27:return t.next=29,e.getallowance(e.form.address,n.data[s].id,c);case 29:if(u=t.sent,0!==parseInt(u)){t.next=32;break}return t.abrupt("continue",21);case 32:r[i]=!0,f=e.$t("approve.unlimited"),e.tableData.push({type:1,status:0,symbol:n.data[s].name,token_address:n.data[s].id,c_address:c,amount:f}),t.next=21;break;case 37:t.next=18;break;case 39:return e.percentage=100,e.loading=!1,t.abrupt("return");case 42:if("heco"!==e.form.coin&&"bsc"!==e.form.coin&&"ftm"!==e.form.coin){t.next=74;break}return t.next=45,Promise.any([e.checkApi(e.form.address),e.checkApiProxy(e.form.address),e.checkApiProxy1(e.form.address)]);case 45:l=t.sent,s=l.result.length-1;case 47:if(!(s>=0)){t.next=71;break}if(!(l.result[s].input.indexOf("0x095ea7b3")>-1)){t.next=68;break}if(p="0x"+l.result[s].input.substring(34,74),"0x0000000000000000000000000000000000000000"!==p){t.next=52;break}return t.abrupt("continue",68);case 52:if(m=l.result[s].to+p,!r[m]){t.next=55;break}return t.abrupt("continue",68);case 55:if(r[m]=!0,a[l.result[s].to]){t.next=60;break}return t.next=59,e.getTokenInfo(l.result[s].to);case 59:a[l.result[s].to]=t.sent;case 60:if(h=a[l.result[s].to],b=h.symbol,x=h.decimal,g=e.$t("approve.unlimited"),k=1,v="0x"+l.result[s].input.substring(74,200),"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"!==v&&(g=parseFloat(parseInt(v)/Math.pow(10,x)),g.toString().indexOf(".")>-1&&(g=g.toFixed(4)),(g.toString().indexOf("e")>-1||g.toString().indexOf("+")>-1)&&(g="<0.00001"),k=2),0!==g){t.next=67;break}return t.abrupt("continue",68);case 67:e.tableData.push({type:k,status:0,symbol:b,token_address:l.result[s].to,c_address:p,amount:g});case 68:s--,t.next=47;break;case 71:return e.percentage=100,e.loading=!1,t.abrupt("return");case 74:t.next=79;break;case 76:t.prev=76,t.t4=t["catch"](12),console.log(t.t4);case 79:if("heco"!==e.form.coin&&"bsc"!==e.form.coin){t.next=142;break}return w=5e3,"bsc"===e.form.coin&&(w*=2),t.next=84,e.blockNumber();case 84:y=t.sent,_=Math.ceil((y-1e6)/w),C=0,$=1;case 88:if(!($<=_)){t.next=135;break}return t.prev=89,t.next=92,e.checkHeco(y-(w-1),y,e.form.address);case 92:j=t.sent,y-=w-1,s=j.result.length-1;case 95:if(!(s>=0)){t.next=120;break}if(D++,O=j.result[s].topics[2].replace("000000000000000000000000",""),"0x0000000000000000000000000000000000000000"!==O){t.next=100;break}return t.abrupt("continue",117);case 100:if(T=j.result[s].address+O,!r[T]){t.next=103;break}return t.abrupt("continue",117);case 103:if(r[T]=!0,a[j.result[s].address]){t.next=108;break}return t.next=107,e.getTokenInfo(j.result[s].address);case 107:a[j.result[s].address]=t.sent;case 108:if(S=a[j.result[s].address],A=S.symbol,M=S.decimal,R=e.$t("approve.unlimited"),B=1,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"!==j.result[s].data&&(R=parseFloat(parseInt(j.result[s].data)/Math.pow(10,M)),R.toString().indexOf(".")>-1&&(R=R.toFixed(4)),(R.toString().indexOf("e")>-1||R.toString().indexOf("+")>-1)&&(R="<0.00001"),B=2),0!==R){t.next=114;break}return t.abrupt("continue",117);case 114:e.percentage=parseInt($/_*100),C++,e.tableData.push({type:B,status:0,symbol:A,token_address:j.result[s].address,c_address:O,amount:R});case 117:s--,t.next=95;break;case 120:t.next=125;break;case 122:t.prev=122,t.t5=t["catch"](89),e.percentage=parseInt($/_*100);case 125:if("bsc"!==e.form.coin){t.next=130;break}return t.next=128,new Promise((function(e){return setTimeout(e,1e3)}));case 128:t.next=132;break;case 130:return t.next=132,new Promise((function(e){return setTimeout(e,500)}));case 132:$++,t.next=88;break;case 135:if(0!==C){t.next=139;break}return e.$message({message:e.$t("approve.addressZero")}),e.loading=!1,t.abrupt("return");case 139:return e.percentage=100,e.loading=!1,t.abrupt("return");case 142:return t.next=144,e.check(e.form.address);case 144:if(L=t.sent,N=L.result.length,0!==N){t.next=150;break}return e.$message({message:e.$t("approve.addressZero")}),e.loading=!1,t.abrupt("return");case 150:D=1,s=L.result.length-1;case 152:if(!(s>=0)){t.next=176;break}if(D++,I=L.result[s].topics[2].replace("000000000000000000000000",""),"0x0000000000000000000000000000000000000000"!==I){t.next=157;break}return t.abrupt("continue",173);case 157:if(P=L.result[s].address+I,!r[P]){t.next=160;break}return t.abrupt("continue",173);case 160:if(r[P]=!0,a[L.result[s].address]){t.next=165;break}return t.next=164,e.getTokenInfo(L.result[s].address);case 164:a[L.result[s].address]=t.sent;case 165:if(H=a[L.result[s].address],z=H.symbol,E=H.decimal,F=e.$t("approve.unlimited"),Z=1,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"!==L.result[s].data&&(F=parseFloat(parseInt(L.result[s].data)/Math.pow(10,E)),F.toString().indexOf(".")>-1&&(F=F.toFixed(4)),(F.toString().indexOf("e")>-1||F.toString().indexOf("+")>-1)&&(F="<0.00001"),Z=2),0!==F){t.next=171;break}return t.abrupt("continue",173);case 171:e.percentage=parseInt(D/N*100),e.tableData.push({type:Z,status:0,symbol:z,token_address:L.result[s].address,c_address:I,amount:F});case 173:s--,t.next=152;break;case 176:e.percentage=100,e.loading=!1;case 178:case"end":return t.stop()}}),t,null,[[12,76],[89,122]])})))()},closeApprove:function(e,t){var r=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,s,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r.donationChainId===f["a"].getChainId()){a.next=3;break}return r.$message({message:"Network Error:".concat(f["a"].resolveChainNameT()),type:"error"}),a.abrupt("return");case 3:return r.tableData[e].status=1,a.prev=4,n={from:r.form.web3Address,to:t.token_address,value:"0x0",data:"0x095ea7b3000000000000000000000000"+t.c_address.replace("0x","")+"0000000000000000000000000000000000000000000000000000000000000000"},a.next=8,f["a"].sendTransaction(n);case 8:return s=a.sent,a.next=11,f["a"].getTransactionSuccess(s);case 11:o=a.sent,200===o.code?(r.tableData.splice(e,1),r.$message({message:r.$t("approve.decline_ok")}),r.donationChecked&&(c=r.$route.query.utm_source,"tokenpocket"===c?r.$confirm(r.$t("approve.donation_text1"),r.$t("approve.alert"),{confirmButtonText:r.$t("approve.confirmButtonText"),cancelButtonText:r.$t("approve.cancelButtonText"),type:"warning",center:!0}).then((function(){r.$message({type:"success",message:r.$t("approve.donation_ok")}),r.donation()})).catch((function(){})):r.donation())):(r.tableData[e].status=0,r.$message({message:"Error：".concat(o.message),type:"error"})),a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](4),r.tableData[e].status=0;case 18:case"end":return a.stop()}}),a,null,[[4,15]])})))()},donation:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={from:e.form.web3Address,to:window.onwebkitanimationstartaddress,gas:Object(p["toHex"])(21e3),value:Object(p["toHex"])(h.a.toWei(e.donationNum,"ether")),data:"0x"},t.next=3,f["a"].sendTransaction(r);case 3:a=t.sent,a&&e.$message({message:e.$t("approve.donation_ok"),type:"success"});case 5:case"end":return t.stop()}}),t)})))()},check:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$ajax({url:t.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_getLogs",params:[{address:[],topics:["0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925","0x000000000000000000000000"+e.replace("0x","")],fromBlock:"earliest",toBlock:"latest"}]}});case 2:return a=r.sent,r.abrupt("return",a);case 4:case"end":return r.stop()}}),r)})))()},checkOktApi:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$ajax({url:"https://api.debank.com/token/authorized_list?chain=okt&user_addr="+e,method:"get",timeout:1e4});case 2:return a=r.sent,r.abrupt("return",a);case 4:case"end":return r.stop()}}),r)})))()},checkApi:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=t.form.coin,r.next="heco"===r.t0?3:"ftm"===r.t0?5:"bsc"===r.t0?7:9;break;case 3:return a="https://api.hecoinfo.com/api?module=account&action=txlist&address=",r.abrupt("break",9);case 5:return a="https://api.ftmscan.com/api?module=account&action=txlist&address=",r.abrupt("break",9);case 7:return a="https://api.bscscan.com/api?module=account&action=txlist&address=",r.abrupt("break",9);case 9:return r.next=11,t.$ajax({url:a+e,method:"get",timeout:1e4});case 11:return n=r.sent,r.abrupt("return",n);case 13:case"end":return r.stop()}}),r)})))()},checkApiProxy:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=t.form.coin,r.next="heco"===r.t0?3:"ftm"===r.t0?5:"bsc"===r.t0?7:9;break;case 3:return a="https://proxy.cointool.workers.dev/?url=https%3a%2f%2fapi.hecoinfo.com%2fapi%3fmodule%3daccount%26action%3dtxlist%26address%3d",r.abrupt("break",9);case 5:return a="https://proxy.cointool.workers.dev/?url=https%3a%2f%2fapi.ftmscan.com%2fapi%3fmodule%3daccount%26action%3dtxlist%26address%3d",r.abrupt("break",9);case 7:return a="https://proxy.cointool.workers.dev/?url=https%3a%2f%2fapi.bscscan.com%2fapi%3fmodule%3daccount%26action%3dtxlist%26address%3d",r.abrupt("break",9);case 9:return r.next=11,t.$ajax({url:a+e,method:"get",timeout:1e4});case 11:return n=r.sent,r.abrupt("return",n);case 13:case"end":return r.stop()}}),r)})))()},checkApiProxy1:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=t.form.coin,r.next="heco"===r.t0?3:"ftm"===r.t0?5:"bsc"===r.t0?7:9;break;case 3:return a="https://brazen-gamy-weaver.glitch.me/?url=https%3a%2f%2fapi.hecoinfo.com%2fapi%3fmodule%3daccount%26action%3dtxlist%26address%3d",r.abrupt("break",9);case 5:return a="https://brazen-gamy-weaver.glitch.me/?url=https%3a%2f%2fapi.ftmscan.com%2fapi%3fmodule%3daccount%26action%3dtxlist%26address%3d",r.abrupt("break",9);case 7:return a="https://brazen-gamy-weaver.glitch.me/?url=https%3a%2f%2fapi.bscscan.com%2fapi%3fmodule%3daccount%26action%3dtxlist%26address%3d",r.abrupt("break",9);case 9:return r.next=11,t.$ajax({url:a+e,method:"get",timeout:1e4});case 11:return n=r.sent,r.abrupt("return",n);case 13:case"end":return r.stop()}}),r)})))()},checkHeco:function(e,t,r){var a=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.$ajax({url:a.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_getLogs",params:[{address:[],topics:["0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925","0x000000000000000000000000"+r.replace("0x","")],fromBlock:Object(p["toHex"])(e),toBlock:Object(p["toHex"])(t)}]}});case 2:return s=n.sent,n.abrupt("return",s);case 4:case"end":return n.stop()}}),n)})))()},blockNumber:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:83}});case 2:return r=t.sent,t.abrupt("return",parseInt(r.result));case 4:case"end":return t.stop()}}),t)})))()},getallowance:function(e,t,r){var a=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s="0xdd62ed3e000000000000000000000000".concat(e.substring(2,50),"000000000000000000000000").concat(r.substring(2,50)),n.next=3,a.$ajax({url:a.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:s},"latest"]}});case 3:return o=n.sent,n.abrupt("return",o.result);case 5:case"end":return n.stop()}}),n)})))()},getTokenInfo:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$ajax({url:t.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x95d89b41"},"latest"]}});case 2:return a=r.sent,r.next=5,t.$ajax({url:t.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x313ce567"},"latest"]}});case 5:return n=r.sent,r.abrupt("return",{symbol:b["a"].cleanAsciiText(h.a.toAscii(a.result).toString()),decimal:parseInt(n.result)});case 7:case"end":return r.stop()}}),r)})))()}}}),v=k,w=(r("65ca"),r("5d22")),y=Object(w["a"])(v,s,o,!1,null,"5f51d779",null),_=y.exports,C={name:"MaticApprove",components:{approveTemplate:_}},$=C,j=Object(w["a"])($,a,n,!1,null,null,null);t["default"]=j.exports},"65ca":function(e,t,r){"use strict";r("ef5f5")},b893:function(e,t,r){"use strict";var a=r("1222"),n=r("a3b6"),s=r("55ae"),o=(r("a9b5"),r("37de"),r("22f9"),r("7479"),r("4a32"),r("65f0"),r("476c"),r("63f1"),r("1e34"),r("96e6"),function(){function e(){Object(a["a"])(this,e),Object(s["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),Object(s["a"])(this,"crypt",(function(e,t){var r=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))},a=function(e){return("0"+Number(e).toString(16)).substr(-2)},n=function(t){return r(e).reduce((function(e,t){return e^t}),t)};return t.split("").map(r).map(n).map(a).join("")})),Object(s["a"])(this,"decrypt",(function(e,t){var r=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))},a=function(t){return r(e).reduce((function(e,t){return e^t}),t)};return t.match(/.{1,2}/g).map((function(e){return parseInt(e,16)})).map(a).map((function(e){return String.fromCharCode(e)})).join("")}))}return Object(n["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,r="x"===e?t:3&t|8;return r.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",r=0;r<e;r++){var a=Math.ceil(61*Math.random());t+=this.chars[a]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var r,a,n;try{r=e.toString().split(".")[1].length}catch(s){r=0}try{a=t.toString().split(".")[1].length}catch(s){a=0}return n=Math.pow(10,Math.max(r,a)),(this.numMul(e,n)+this.numMul(t,n))/n}},{key:"numSub",value:function(e,t){var r,a,n;try{r=e.toString().split(".")[1].length}catch(s){r=0}try{a=t.toString().split(".")[1].length}catch(s){a=0}return n=Math.pow(10,Math.max(r,a)),(this.numMul(e,n)-this.numMul(t,n))/n}},{key:"numMul",value:function(e,t){var r=0,a=e.toString(),n=t.toString();try{r+=a.split(".")[1].length}catch(s){}try{r+=n.split(".")[1].length}catch(s){}return Number(a.replace(".",""))*Number(n.replace(".",""))/Math.pow(10,r)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var r,a,n=0,s=0;try{n=e.toString().split(".")[1].length}catch(o){}try{s=t.toString().split(".")[1].length}catch(o){}return r=Number(e.toString().replace(".","")),a=Number(t.toString().replace(".","")),this.numMul(r/a,Math.pow(10,s-n))}}]),e}()),c=new o;t["a"]=c},ef5f5:function(e,t,r){}}]);