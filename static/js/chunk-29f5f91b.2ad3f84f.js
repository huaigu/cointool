(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29f5f91b"],{2302:function(t,e,a){"use strict";var s=a("ed08");e["a"]={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(s["d"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}}},b170:function(t,e,a){"use strict";a("d2e8")},b68c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"rpcServer"}},[a("AddLineDialog",{ref:"AddLineDialog",attrs:{list:t.list},on:{onAddRPC:t.onAddRPC}}),a("div",{staticClass:"header"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"rpc"}}),a("span",[t._v(t._s(t.$shortName)+" - "+t._s(t.$coinInfo[t.chainName].chainName)+" RPC Server")])],1),a("div",{staticClass:"content"},[a("div",{staticClass:"filterBox"},[a("div",{staticClass:"switchBox"},[a("el-select",{staticStyle:{width:"100%"},attrs:{value:t.chainName,filterable:"",size:"large"},on:{change:t.onChangeChain}},t._l(t.chainList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"16px"}},[a("svg-icon",{staticClass:"icon",style:"color:"+t.$coinInfo[e.value].color,attrs:{"icon-class":t.$coinInfo[e.value].icon}})],1)])})),1)],1),a("div",{staticClass:"btnBox"},[a("el-button",{attrs:{type:"primary",size:"large",icon:"el-icon-refresh"},on:{click:t.onRefresh}},[t._v(" "+t._s("Reload")+" ")])],1)]),a("ul",{staticClass:"box"},t._l(t.list,(function(e,s){return a("li",{key:s},[a("div",{staticClass:"left"},[!1===t.data[e].isCointool?a("i",{staticClass:"el-icon-remove-outline remove",on:{click:function(a){return t.onRemoveRPC(e)}}}):t._e(),a("div",{staticClass:"rpcText"},[t._v(" "+t._s(e)+" "),t.firstSpeed===t.data[e].speed?a("svg-icon",{staticClass:"first",attrs:{"icon-class":"speed"}}):t._e()],1)]),a("div",{staticClass:"right"},[0===t.data[e].code?a("div",{staticClass:"loading"},[a("i",{staticClass:"el-icon-loading"})]):200===t.data[e].code?a("div",{staticClass:"info"},[a("p",{staticClass:"speed"},[t._v(t._s(t.data[e].speed)+" ms "),a("span",{class:{status:!0,status_fast:t.data[e].speed<=100,status_normal:t.data[e].speed>100&&t.data[e].speed<=1e3,status_slow:t.data[e].speed>1e3}})]),a("p",{staticClass:"height"},[t._v("Height "+t._s(t.data[e].height))])]):500===t.data[e].code?a("div",{staticClass:"error"},[t._v(" Error ")]):t._e(),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e,expression:"item",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],attrs:{type:"primary",size:t.isPc?"large":"mini",plain:""}},[a("svg-icon",{attrs:{"icon-class":"copy"}}),t._v(" "+t._s(t.$t("common.copy"))+" ")],1)],1)])})),0),a("div",{staticClass:"addLine"},[a("i",{staticClass:"el-icon-circle-plus-outline icon",on:{click:function(e){return t.$refs.AddLineDialog.show()}}})]),a("line-chart",{directives:[{name:"show",rawName:"v-show",value:""!==t.firstSpeed,expression:"firstSpeed !== '' "}],attrs:{height:"400px","chart-data":t.chartData}})],1)],1)},i=[],n=a("e7e7"),o=a("4833"),c=a("efe2"),r=(a("c9b2"),a("fdea"),a("8b79"),a("f597"),a("403f"),a("297b"),a("a9b5"),a("65f0"),a("6a61"),a("52c1")),p={zh:{rpcServer:{addLineTitle:"添加自定义RPC节点",duplicateRPC:"重复的节点"}},en:{rpcServer:{addLineTitle:"Add a custom RPC node",duplicateRPC:"Duplicate RPC nodes"}}},h=a("ed08"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},d=[],m=(a("dfe9"),a("8d48")),u=a("6e8a"),b=a("f3a5"),f=a("0dd75"),g=a("33d5"),v=a("b91a"),w=a("31ec"),y=a("b477"),k=a("2302");m["a"]([b["a"],f["a"],g["a"],v["a"],w["a"],y["a"]]);var x={mixins:[k["a"]],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"160px"},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.initChart()}}},mounted:function(){},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=u["l"](this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(t){this.chart.setOption({title:{show:!1},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var e=t[0];return'\n                <span style="color: #000; font-size: 16px;font-weight: bold;">'.concat(e["name"],"</span><br />\n                <span>").concat(e["data"],"ms</span>\n              ")}},legend:{data:[t["chainName"].toUpperCase()],itemStyle:{color:this.$coinInfo[t["chainName"]].color}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t["key"]},series:[{name:t["chainName"].toUpperCase(),type:"bar",data:t["speed"],itemStyle:{color:this.$coinInfo[t["chainName"]].color}}]})}}},C=x,_=a("5d22"),S=Object(_["a"])(C,l,d,!1,null,null,null),$=S.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"dialog",attrs:{width:t.isPc?"400px":"90%",height:"800px",visible:t.isShowDialog,modal:!0,title:t.$t("rpcServer.addLineTitle"),center:""},on:{"update:visible":function(e){t.isShowDialog=e}}},[a("div",{staticClass:"dialogBox"},[a("div",{staticClass:"inputBox"},[a("p",[t._v("RPC:")]),a("el-input",{attrs:{placeholder:"Please enter the RPC"},model:{value:t.rpc,callback:function(e){t.rpc=e},expression:"rpc"}})],1)]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.isShowDialog=!1}}},[t._v(t._s(t.$t("common.cancel")))]),a("el-button",{attrs:{type:"primary"},on:{click:t.onAdd}},[t._v(t._s(t.$t("common.confirm")))])],1)])},N=[],E={components:{},props:{list:{type:Array,require:!0}},data:function(){return{rpc:"",loading:!0,isShowDialog:!1}},computed:Object(c["a"])({},Object(r["b"])(["isPc"])),watch:{},created:function(){},mounted:function(){},methods:{show:function(){this.isShowDialog=!this.isShowDialog},onAdd:function(){var t=this.rpc.substr(this.rpc.length-1,1),e=this.rpc;"/"===t&&(e=this.rpc.substr(0,this.rpc.length-1)),""!==e?this.list.includes(e)?this.$message.error(this.$t("rpcServer.duplicateRPC")):(console.log(e),this.$emit("onAddRPC",e),this.isShowDialog=!1):this.$message.error(this.$t("common.not_empty"))}}},j=E,z=(a("dcf3"),Object(_["a"])(j,R,N,!1,null,"fe35da4e",null)),O=z.exports,L=a("9905"),P="rpcServer",D={bsc:["https://binance.ankr.com","https://bsc.mytokenpocket.vip","https://binance.nodereal.io","https://rpc-bsc.bnb48.club/","https://bscrpc.com","https://bsc-dataseed.binance.org","https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","https://speedy-nodes-nyc.moralis.io/4ab2a0fb78faf37a48596270/bsc/mainnet","https://rpc.ankr.com/bsc","https://bscapi.terminet.io/rpc"],ftm:["https://rpc.ftm.tools","https://rpc.fantom.network","https://rpc2.fantom.network","https://rpc3.fantom.network","https://rpc.neist.io","https://rpc.ankr.com/fantom","https://rpcapi.fantom.network"],matic:["https://rpc-mainnet.matic.network","https://rpc-mainnet.maticvigil.com","https://polygon-mainnet.public.blastapi.io","https://rpc-mainnet.matic.today","https://rpc-mainnet.matic.quiknode.pro","https://matic-mainnet.chainstacklabs.com","https://matic-mainnet-full-rpc.bwarelabs.com","https://matic-mainnet-archive-rpc.bwarelabs.com","https://polygon-rpc.com","https://poly-rpc.gateway.pokt.network\t","https://rpc.ankr.com/polygon"],eth:["https://api.mycryptoapi.com/eth","https://cloudflare-eth.com","https://eth-mainnet.g.alchemy.com/v2/demo","https://rpc.flashbots.net","https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79","https://mainnet-nethermind.blockscout.com","https://nodes.mewapi.io/rpc/eth","https://main-rpc.linkpool.io","https://mainnet.eth.cloud.ava.do","https://ethereumnodelight.app.runonflux.io","https://rpc.ankr.com/eth","https://eth-rpc.gateway.pokt.network","https://main-light.eth.linkpool.io","https://eth-mainnet.public.blastapi.io","http://18.211.207.34:8545","https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7","https://api.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet","https://eth-mainnet-public.unifra.io","https://1rpc.io/eth","https://eth-mainnet.rpcfast.com","https://eth-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf","https://api.securerpc.com/v1","https://ethereum.publicnode.com","https://yolo-intensive-paper.discover.quiknode.pro/45cad3065a05ccb632980a7ee67dd4cbb470ffbd","https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161","https://eth-mainnet.alchemyapi.io/v2/QKMdAyFAARxN-dEm_USOu8-u0klcBuTO","https://eth.public-rpc.com","https://speedy-nodes-nyc.moralis.io/4ab2a0fb78faf37a48596270/eth/mainnet","https://web3.1inch.exchange","https://mainnet-eth.compound.finance"],heco:["https://http-mainnet-node.huobichain.com","https://http-mainnet.hecochain.com","https://http-mainnet-node.defibox.com"],sol:["https://rpc.ankr.com/solana","https://solana-mainnet.phantom.tech","https://solana-api.projectserum.com","https://api.mainnet-beta.solana.com","https://api.rpcpool.com","https://solana.public-rpc.com"],avax:["https://rpc.ankr.com/avalanche","https://api.avax.network/ext/bc/C/rpc","https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc","https://avalancheapi.terminet.io/ext/bc/C/rpc","https://1rpc.io/avax/c","https://avalanche-evm.publicnode.com"],arb:["https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}","https://arb1.arbitrum.io/rpc","https://arb-mainnet.g.alchemy.com/v2/demo","https://rpc.ankr.com/arbitrum","https://1rpc.io/arb","https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}"],op:["https://mainnet.optimism.io","https://opt-mainnet.g.alchemy.com/v2/demo","https://optimism-mainnet.public.blastapi.io","https://rpc.ankr.com/optimism","https://1rpc.io/op"],cro:["https://evm.cronos.org","https://cronosrpc-2.xstaking.sg","https://cronosrpc-1.xstaking.sg/","https://mmf-rpc.xstaking.sg/","https://rpc.crodex.app/","https://gateway.nebkas.ro","https://rpc.artemisone.org/cronos/","https://rpc.nebkas.ro","https://rpc.vvs.finance","https://rwdry-rpc.com/"],iotx:["https://babel-api.mainnet.iotex.io","https://babel-api.mainnet.iotex.one","https://rpc.ankr.com/iotex","https://pokt-api.iotex.io"],vlx:["https://evmexplorer.velas.com/rpc"],sbch:["https://smartbch.fountainhead.cash/mainnet","https://smartbch.greyh.at","https://global.uat.cash","https://rpc.uatvo.com"],movr:["https://moonriver.api.onfinality.io/public","https://rpc.api.moonriver.moonbeam.network"],glmr:["https://rpc.api.moonbeam.network"],xdc:["https://rpc.xinfin.network"],sdn:["https://shiden.api.onfinality.io/public"],fuse:["https://rpc.fuse.io/"],klay:["https://klaytn01.fandom.finance"],evmos:["https://eth.bd.evmos.org:8545","https://json-rpc.evmos.blockhunters.org/","https://evmos-json-rpc.stakely.io/","https://evmos-evm.publicnode.com/","https://evmos-mainnet.public.blastapi.io/","https://evmos-mainnet.gateway.pokt.network/v1/lb/627586ddea1b320039c95205","https://jsonrpc-evmos-ia.cosmosia.notional.ventures/","https://jsonrpc-evmos.goldenratiostaking.net/","https://evmos-json-rpc.agoranodes.com/"],one:["https://api.harmony.one","https://s1.api.harmony.one","https://s2.api.harmony.one","https://s3.api.harmony.one","https://harmony-mainnet.chainstacklabs.com","https://harmony-0-rpc.gateway.pokt.network","https://rpc.ankr.com/harmony"],brise:["https://mainnet-rpc.brisescan.com"],dogechain:["https://rpc01-sg.dogechain.dog","https://rpc02-sg.dogechain.dog","https://rpc03-sg.dogechain.dog","https://dogechain.ankr.com","https://rpc-us.dogechain.dog","https://rpc.dogechain.dog","https://rpc-sg.dogechain.dog","https://dogechain-sj.ankr.com"],etc:["https://www.ethercluster.com/etc","https://blockscout.com/etc/mainnet/api/eth-rpc","https://etc.etcdesktop.com","https://etc.mytokenpocket.vip","https://besu-de.etc-network.info","https://geth-de.etc-network.info","https://besu-at.etc-network.info","https://geth-at.etc-network.info","https://rpc.etcplanets.com"],xdai:["https://rpc.gnosischain.com","https://rpc.ankr.com/gnosis","https://gnosischain-rpc.gateway.pokt.network","https://gnosis-mainnet.public.blastapi.io","wss://rpc.gnosischain.com/wss","https://xdai-rpc.gateway.pokt.network","https://xdai-archive.blockscout.com","https://rpc.ap-southeast-1.gateway.fm/v1/gnosis/non-archival/mainnet"],syscoin:["https://rpc.syscoin.org","https://rpc.ankr.com/syscoin"],canto:["https://canto.evm.chandrastation.com","https://canto.slingshot.finance","https://jsonrpc.canto.nodestake.top"],ethw:["https://mainnet.ethereumpow.org"]},A={name:P,inject:["onCopySuccess"],components:{LineChart:$,AddLineDialog:O},data:function(){return{chainName:"",list:[],data:{},chartData:{},firstSpeed:"",queue:null}},computed:Object(c["a"])(Object(c["a"])({},Object(r["b"])(["isConnect","account","isPc","language","navShowChain"])),{},{chainList:function(){return Object(h["k"])(P,this.navShowChain)}}),created:function(){this.$i18n.getLocaleMessage("en")[P]||(this.$i18n.mergeLocaleMessage("en",p.en),this.$i18n.mergeLocaleMessage("zh",p.zh)),this.chainName=this.$route.meta.chainName,this.initQueue(),this.getList()},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:"https://binance.ankr.com",method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0x8e04b5c51956c316faf61520e14a8d263c93e6bd",data:"0x7ba56f8b"},"latest"]}});case 2:a=e.sent,console.log(a);case 4:case"end":return e.stop()}}),e)})))()},methods:{onRemoveRPC:function(t){var e=this.list.indexOf(t);this.list.splice(e,1);var a=JSON.parse(localStorage.getItem("rpcServer-rpc-".concat(this.chainName))),s=a.filter((function(e){return e!==t}));localStorage.setItem("rpcServer-rpc-".concat(this.chainName),JSON.stringify(s))},onAddRPC:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.data[t]={code:0,speed:0,height:0,isCointool:!1},e.list.push(t),e.queue.push(t);case 3:case"end":return a.stop()}}),a)})))()},onRefresh:function(){this.getList()},getList:function(){var t=this,e=D[this.chainName],a={},s=JSON.parse(localStorage.getItem("rpcServer-rpc-".concat(this.chainName)));s&&(e=e.concat(s)),e.forEach((function(e){a[e]={code:0,speed:0,height:0,isCointool:D[t.chainName].includes(e)}})),this.list=e,this.data=a,this.list.forEach((function(e){t.queue.push(e)}))},initQueue:function(){var t=this;this.queue=L["a"].queue(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(a,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getData(a);case 3:s(),e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](0),t.data[a]={code:500,speed:0,height:0,isCointool:D[t.chainName].includes(a)},s();case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),5),this.queue.drain(Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.list.map((function(e){return t.data[e].speed})),t.chartData={chainName:t.chainName,key:t.list,speed:a},s=a.filter((function(t){return 0!==t})),t.firstSpeed=Math.min.apply(Math,Object(n["a"])(s));case 4:case"end":return e.stop()}}),e)}))))},getData:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,i,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=(new Date).getTime(),a.next=3,e.$ajax({url:t,method:"post",data:{jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:83}});case 3:i=a.sent,n=Number((new Date).getTime()-s),e.data[t]=Object(c["a"])(Object(c["a"])({},e.data[t]),{},{code:200,speed:n,height:parseInt(i.result)}),!1===e.data[t].isCointool&&(o=JSON.parse(localStorage.getItem("rpcServer-rpc-".concat(e.chainName))),null==o&&(o=[]),o.includes(t)||o.push(t),localStorage.setItem("rpcServer-rpc-".concat(e.chainName),JSON.stringify(o)));case 7:case"end":return a.stop()}}),a)})))()},onChangeChain:function(t){this.$router.push({path:"/".concat(P,"/").concat(t)})}}},I=A,H=(a("b170"),Object(_["a"])(I,s,i,!1,null,"2b9ee873",null));e["default"]=H.exports},be7c:function(t,e,a){},d2e8:function(t,e,a){},dcf3:function(t,e,a){"use strict";a("be7c")}}]);