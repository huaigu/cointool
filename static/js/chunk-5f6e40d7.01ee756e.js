(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f6e40d7"],{2302:function(t,e,a){"use strict";var n=a("ed08");e["a"]={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(n["c"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}}},"2b63":function(t,e,a){"use strict";a("c28a")},"3ea7":function(t,e,a){},"46fd":function(t,e,a){"use strict";a("491e")},"491e":function(t,e,a){},"60c7":function(t,e,a){},"62f6":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));a("05d6"),a("65f0"),a("8b79");var n=function(t,e){var a=(100*(t/e-1)).toFixed(2);return Number(a)},i=function(t){if("undefined"!==typeof t){var e=t>0?"+":"";return"".concat(e).concat(Number(t.toFixed(2)),"%")}}},"73c6":function(t,e,a){"use strict";a("e507")},"7f2b":function(t,e,a){},"8e1a8":function(t,e,a){"use strict";a("3ea7")},9406:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._e(),a("panel-group",{on:{handleSetLineChartData:t.handleSetLineChartData}}),a("top-100-bar"),a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("route.createLocker")))])]),a("div",{staticClass:"box1"},[a("LinkBox",{attrs:{list:t.createLockerList,type:"createLocker"}})],1)])],1),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("dashboard.batchSender")))])]),a("div",{staticClass:"box1"},[a("LinkBox",{attrs:{list:t.batchSenderList,type:"multiSender"}})],1)])],1),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:8}},[a("el-card",{staticClass:"box-card chartBox"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("dashboard.newTools")))])]),a("div",{staticClass:"box1"},[a("NewTool")],1)])],1),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:16}},[a("el-card",{staticClass:"box-card chartBox"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.chartTitle))])]),a("div",{staticClass:"box1"},[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1)])],1),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:8}},[a("el-card",{staticClass:"box-card chartBox"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("dashboard.greedIndex")))])]),a("div",{staticClass:"box1"},[a("GreedIndex")],1)])],1)],1),a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("dashboard.overview")))])]),a("div",{staticClass:"context"},[t._v(t._s(t.$t("dashboard.overview_text"))+" "),a("el-divider",[t._v("CoinTool.App")]),a("div",{staticClass:"coinBox"},t._l(t.supportList,(function(e){return a("div",{key:e,staticClass:"coinItem"},[a("el-tooltip",{attrs:{effect:"dark",content:t.$coinInfo[e].symbol,placement:"top"}},[a("div",{staticClass:"btn",style:{background:t.$coinInfo[e].color}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":t.$coinInfo[e].icon}}),a("span",{staticClass:"name"},[t._v(t._s(t.$coinInfo[e].name))])],1)])],1)})),0),a("div",{staticStyle:{"margin-top":"16px"}},[a("el-tag",{attrs:{effect:"plain","disable-transitions":!0,hit:!0}},[t._v(t._s(t.$t("dashboard.more_tool"))+"!")])],1)],1)])],1),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("dashboard.feedback")))])]),a("div",{staticClass:"context"},[a("el-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{title:t.$t("dashboard.feedback_alert"),type:"info"}}),a("ul",{domProps:{innerHTML:t._s(t.$t("dashboard.feedback_text"))}})],1)])],1)]),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("dashboard.contact_us")))])]),a("div",{staticClass:"context"},[a("ul",[a("li",[a("svg-icon",{staticClass:"icon",attrs:{color:"#1890ff","icon-class":"email"}}),a("el-tag",{attrs:{effect:"plain",type:"danger","disable-transitions":!0,hit:!0}},[a("a",{attrs:{href:"mailto:cointools@outlook.com"}},[t._v(" cointools@outlook.com ")])])],1),a("li",[a("svg-icon",{staticClass:"icon",attrs:{color:"#36a3f7","icon-class":"guide"}}),a("el-tag",{attrs:{effect:"plain",type:"info","disable-transitions":!0,hit:!0}},[a("a",{attrs:{target:"_blank",href:"https://t.me/cointool"}},[t._v("https://t.me/cointool")])])],1)])])])],1)])],1)],1)},i=[],o=a("4833"),r=a("efe2"),s=(a("f597"),a("65f0"),a("6a61"),a("52c1")),c={zh:{dashboard:{contact_us:"联系我们",feedback:"建议反馈",feedback_alert:"如您有以下条件可向我们反馈",feedback_text:"<li>1.您对工具使用有疑问</li><li>2.工具出现未知问题</li><li>3.工具未能满足您的需求</li><li>4.有更好的想法和创意</li><li>5.其他问题</li>",development_route:"功能路线",update:"更新记录",more_tool:"更多工具正在来临",tool_recommend:"工具推荐",overview:"本站简介",overview_text:"欢迎加入我们，本网站是为广大的加密货币爱好者提供便捷的区块链工具，满足各种需求。是大家喜爱的工具人!",up:"上涨",down:"下跌",createToken:"创建 Token",batchSender:"Token 批量发送",moreToOne:"Token 批量归集",newTools:"最新上线工具",greedIndex:"贪婪指数与恐慌指数"}},en:{dashboard:{contact_us:"Contact us",feedback:"Feedback",feedback_alert:"If you have the following conditions, please give us feedback",feedback_text:"<li>1. You have questions about the use of the tool</li><li>2. There is an unknown problem with the tool</li><li>3. The tool fails to meet your needs</li><li>4. Have better ideas and ideas</li> <li>5. Other issues</li>",development_route:"Development route",update:"Update",tool_recommend:"Tool recommend",more_tool:"More tools are on the way",overview:"Overview",overview_text:"Welcome to join us. This website is a convenient blockchain tool for the majority of cryptocurrency enthusiasts to meet various needs. Is everyone's favorite tool person!",up:"Up",down:"Down",createToken:"Create Token",batchSender:"Token Batch Sender",moreToOne:"Token Bulk Collect",newTools:"New Tools",greedIndex:"Crypto Fear & Greed Index"}}},l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank","aria-label":"View source on Github"}},[a("svg",{staticStyle:{fill:"#40c9c6",color:"#fff"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},u=[],d=(a("96f2"),a("5d22")),h={},m=Object(d["a"])(h,l,u,!1,null,"09fe1acc",null),f=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"coinList",attrs:{gutter:20}},t._l(t.list,(function(e){return a("el-col",{key:e.name,staticClass:"coinItem",attrs:{xs:12,sm:8,md:4,lg:4}},[a("div",{staticClass:"box",on:{click:function(a){return t.handleSetLineChartData(e.name)}}},[a("div",{class:"iconBox icon-"+e.name},[a("svg-icon",{staticClass:"icon",style:"color:"+t.coinInfo[e.name].color,attrs:{"icon-class":e.icon}})],1),a("div",{staticClass:"info"},[a("div",{staticClass:"name"},[t._v(t._s(e.name.toUpperCase())+" / USD")]),a("div",{staticClass:"price"},[t._v(" $"),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":e.oPrice,decimals:e.decimals,"end-val":e.nPrice,duration:e.duration}})],1)]),a("div",{staticClass:"per"},[a("el-tag",{directives:[{name:"show",rawName:"v-show",value:e.rate,expression:"item.rate"}],attrs:{type:e.rate>0?"success":"danger"}},[a("i",{staticClass:"icon",class:e.rate>0?"el-icon-caret-top":"el-icon-caret-bottom"}),t._v(" "+t._s(t.getRateText(e.rate))+" ")])],1)])])})),1)},b=[],v=(a("d51e"),a("a9b5"),a("8b79"),a("dfe9"),a("37de"),a("1e34"),a("22f9"),a("e6ce")),g=a("62f6"),x=a("9e2e"),C=a.n(x),y=null,_={components:{CountTo:C.a},data:function(){return{list:[{name:"btc",icon:"coin-btc2",duration:3e3,oPrice:0,nPrice:0,decimals:1},{name:"eth",icon:"coin-eth",duration:3e3,oPrice:0,nPrice:0,decimals:2},{name:"bnb",icon:"coin-bnb",duration:3e3,oPrice:0,nPrice:0,decimals:2},{name:"doge",icon:"coin-doge",duration:3e3,oPrice:0,nPrice:0,decimals:4},{name:"eos",icon:"coin-eos",duration:3e3,oPrice:0,nPrice:0,decimals:4},{name:"matic",icon:"matic",duration:3e3,oPrice:0,nPrice:0,decimals:3}],coinInfo:{},isConnectSocket:!0}},computed:Object(r["a"])({},Object(s["b"])(["isPc"])),created:function(){this.coinInfo=v["a"],this.isPc||(this.list=this.list.slice(0,4))},mounted:function(){this.onConnectWebSocket()},activated:function(){this.onConnectWebSocket()},deactivated:function(){y.close()},methods:{getRateText:function(t){return Object(g["b"])(t)},handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)},onConnectWebSocket:function(){var t=this;console.log("连接socket");var e=this;y&&y.close(),y=new WebSocket("wss://stream.yshyqxx.com/stream");var a=3e3;y.onopen=function(){var e={method:"SUBSCRIBE",params:t.list.map((function(t){return"".concat(t.name,"usdt@miniTicker@").concat(a,"ms")})),id:1};y.send(JSON.stringify(e))},y.onmessage=function(t){try{for(var a=JSON.parse(t.data),n=a.stream&&a.stream.split("@")[0].replace("usdt",""),i=0;i<e.list.length;i++)if(e.list[i].name===n){var o=Number(a.data.c),r=Number(a.data.o);e.list[i].oPrice=Number(e.list[i].nPrice),e.list[i].nPrice=o,e.list[i].rate=Object(g["a"])(o,r);break}}catch(s){console.log(s,"socket 接收消息出错")}},y.onclose=function(){console.log("home socket 已关闭")}}}},w=_,k=(a("fa4b"),Object(d["a"])(w,p,b,!1,null,"497dfea5",null)),S=k.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},L=[],T=a("4d28"),O=a.n(T),V=a("2302");a("d8ac1");var D={mixins:[V["a"]],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"160px"},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.initChart()}}},mounted:function(){},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=O.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.price,a=t.xAxisLabel,n=t.color,i=t.areaColor;this.chart.setOption({xAxis:{axisLabel:{showMinLabel:!0,showMaxLabel:!0,textStyle:{color:"rgba(0,0,0, 0.7)",fontSize:12}},data:a,boundaryGap:!1,axisTick:{show:!1,inside:!0}},grid:{left:0,right:40,top:20,bottom:0,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1},axisLabel:{showMinLabel:!0,showMaxLabel:!0,textStyle:{color:"rgba(0,0,0, 0.7)",fontSize:12}}},legend:{data:["Price"],show:!1},series:[{name:"Price",smooth:!0,type:"line",itemStyle:{normal:{color:n,lineStyle:{color:n,width:2},areaStyle:{color:i}}},data:e,animationDuration:2800,animationEasing:"quadraticOut"}]})}}},N=D,E=Object(d["a"])(N,$,L,!1,null,null,null),F=E.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[t.loading?a("el-skeleton",{attrs:{rows:3,animated:""}}):[a("h5",{staticClass:"title"},[t._v("Top 100 Coins")]),a("div",{staticClass:"bar"},[a("div",{staticClass:"grow",style:"width: "+t.downNum/t.maxCoins*100+"%;"},[a("span",{staticClass:"split"})])]),a("div",{staticClass:"info"},[a("span",{staticClass:"red"},[t._v(t._s(t.downNum)+" "+t._s(t.$t("dashboard.down"))+" ")]),a("span",{staticClass:"green"},[t._v(t._s(t.upNum)+" "+t._s(t.$t("dashboard.up"))+" ")])])]],2)},R=[],q={data:function(){return{upNum:0,downNum:0,loading:!0,maxCoins:100}},computed:Object(r["a"])({},Object(s["b"])([])),mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTop100Data();case 2:a=e.sent,n=0,i=0,a.forEach((function(t){t.percent_change_24h>0?n++:i++})),t.upNum=n,t.downNum=i,t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},methods:{getTop100Data:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:"https://proxy.cointool.workers.dev/?url=".concat(encodeURIComponent("https://fxhapi.feixiaohao.cc/public/v1/ticker?limit=".concat(t.maxCoins))),method:"get",timeout:6e4,data:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}}},z=q,A=(a("b403"),Object(d["a"])(z,j,R,!1,null,"cd641728",null)),P=A.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"linkBox"},[a("ul",t._l(t.list,(function(e){return a("li",{key:e.name,staticClass:"linkBtn",on:{click:function(a){return t.onSelect(e)}}},[a("svg-icon",{staticClass:"icon",style:{color:t.$coinInfo[e].color?t.$coinInfo[e].color:""},attrs:{"icon-class":t.$coinInfo[e].icon}}),a("span",{staticClass:"name"},[t._v(t._s(t.$coinInfo[e].chainName)+" "),""!==t.$coinInfo[e].networkName?a("i",[t._v("("+t._s(t.$coinInfo[e].networkName)+")")]):t._e()])],1)})),0)])},B=[],M={props:{type:{type:String,require:!0},list:{type:Array,require:!0}},data:function(){return{}},methods:{onSelect:function(t){this.$router.push({path:"/".concat(this.type,"/").concat(t)})}}},H=M,U=(a("2b63"),Object(d["a"])(H,I,B,!1,null,"2c128741",null)),G=U.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"linkBox"},[a("ul",t._l(t.list,(function(e){return a("li",{key:e.routeName,staticClass:"linkBtn",on:{click:function(a){return t.onSelect(e)}}},[a("svg-icon",{staticClass:"icon",style:{color:"#000"},attrs:{"icon-class":e.icon}}),a("span",{staticClass:"name",staticStyle:{"font-size":"12px"}},[t._v(t._s(e.name))])],1)})),0)])},J=[],Y=a("e7e7"),Z=(a("fdea"),a("403f"),a("a18c")),K={components:{},data:function(){return{initList:[{path:"/createLocker/eth",query:{},params:{},name:"Token Locker",icon:"lock"},{path:"/batchCheckBalance/eth",query:{},params:{},name:this.$t("route.batchCheckBalance"),icon:"coin-wallet2"},{path:"/gasPrice/eth",query:{},params:{},name:this.$t("route.gasPrice"),icon:"fee"},{path:"/batchCollection/eth",query:{},params:{},name:this.$t("route.batchCollection"),icon:"coin-more-to-one"}],list:[]}},computed:Object(r["a"])({},Object(s["b"])(["language","navigatorLanguage","isPc"])),created:function(){var t=this,e=this.getHomeRecommend(),a=e.map((function(e){return{routeName:e.name,name:t.$t("route.".concat(e.meta.title)),icon:e.meta.icon}})),n=[],i=this.initList.concat(a),o="zh"!==this.language&&"zh-CN"!==this.navigatorLanguage||"development"===this.$NODE_ENV;o||(i=i.filter((function(t){return!n.includes(t.routeName)}))),this.list=i},mounted:function(){},activated:function(){},deactivated:function(){},methods:{onSelect:function(t){t.path?this.$router.push({path:t.path,query:t.query,params:t.params}):this.$router.push({name:t.routeName,query:t.query,params:t.params})},getHomeRecommend:function(){var t=[],e=[].concat(Object(Y["a"])(Z["b"]),Object(Y["a"])(Z["a"])),a=function e(a){a.forEach((function(a){a.meta&&a.meta.isHomeRecommed&&t.push(a),a.children&&e(a.children)}))};return a(e),t}}},Q=K,X=(a("46fd"),Object(d["a"])(Q,W,J,!1,null,"5a3471d6",null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!==t.info?a("div",{staticClass:"progress"},[a("el-progress",{attrs:{type:"dashboard",percentage:+t.info.value,color:t.colors,"stroke-width":16,width:140,format:t.onFormat}}),a("p",{staticClass:"result"},[t._v(t._s(t.result))])],1):a("div",{staticClass:"progress"},[a("el-skeleton",{attrs:{rows:5,animated:""}})],1)},at=[],nt={components:{},data:function(){return{percentage:0,colors:[{color:"rgba(231, 53, 79, 1)",percentage:20},{color:"rgba(246, 111, 112, 1)",percentage:40},{color:"rgba(24, 144, 255, 1)",percentage:60},{color:"rgba(74,177,103, 0.8)",percentage:80},{color:"rgba(74,177,103, 1)",percentage:100}],result:"",info:null}},computed:Object(r["a"])({},Object(s["b"])(["language"])),watch:{language:function(){this.getData()}},mounted:function(){this.getData()},methods:{onFormat:function(t){return t},getData:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$ajax({url:"https://proxy.cointool.workers.dev/?url=".concat(encodeURIComponent("https://api.alternative.me/fng/")),method:"get",data:{}});case 2:a=t.sent,e.info=a.data[0],n={"Extreme Fear":"极度恐慌",Fear:"恐慌",Neutral:"中立",Greed:"贪婪","Extreme Greed":"极度贪婪"},i="zh"===e.language?n[e.info.value_classification]:e.info.value_classification,e.result=i;case 7:case"end":return t.stop()}}),t)})))()}}},it=nt,ot=(a("73c6"),Object(d["a"])(it,et,at,!1,null,"122e79d5",null)),rt=ot.exports,st="dashboard",ct={name:"Dashboard",components:{LinkBox:G,NewTool:tt,GreedIndex:rt,GithubCorner:f,PanelGroup:S,LineChart:F,Top100Bar:P},data:function(){return{supportList:["btc","eth","bnb","dot","okt","trx","xmr","heco","ftm","sol"],createLockerList:["eth","bsc","heco","ftm","matic","okt"],createTokenList:["eth","bsc","trx","heco","ftm","matic"],batchSenderList:["eth","bsc","dot","heco","okt","ftm"],lineChartData:{},chartTitle:""}},computed:Object(r["a"])({},Object(s["b"])(["language","navigatorLanguage","isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[st]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh))},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getCoinData("btc");case 2:t.lineChartData=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{getCoinData:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:"https://api.yshyqxx.com/api/v1/klines",method:"get",data:{symbol:"".concat(t.toLocaleUpperCase(),"USDT"),interval:"1d",startTime:e.$moment(new Date).add(-60,"days").valueOf(),endTime:e.$moment().valueOf()}});case 2:return n=a.sent,i=[],o=[],n.forEach((function(t){o.push(e.$moment(t[0]).format("YYYY-MM-DD")),i.push(Number(t[4]))})),e.chartTitle="".concat(t.toLocaleUpperCase()," / USDT"),a.abrupt("return",{price:i,xAxisLabel:o,color:v["a"][t].color,areaColor:v["a"][t].areaColor});case 8:case"end":return a.stop()}}),a)})))()},handleSetLineChartData:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.getCoinData(t);case 2:e.lineChartData=a.sent;case 3:case"end":return a.stop()}}),a)})))()}}},lt=ct,ut=(a("8e1a8"),Object(d["a"])(lt,n,i,!1,null,"96445140",null));e["default"]=ut.exports},"96f2":function(t,e,a){"use strict";a("b313")},"9e2e":function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),o=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=o=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=o=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var s=void 0,c=0;c<i.length&&(!o||!r);c++)s=i[c],e.requestAnimationFrame=o=o||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];o&&r||(e.requestAnimationFrame=o=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),i=window.setTimeout((function(){t(e+a)}),a);return n=e+a,i},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=o,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,n){var i,o=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),a&&(s._scopeId=a),n){var c=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];c[t]=function(){return e}})),s.computed=c}return{esModule:i,exports:o,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},b313:function(t,e,a){},b403:function(t,e,a){"use strict";a("7f2b")},c28a:function(t,e,a){},d8ac1:function(t,e,a){var n,i,o;(function(r,s){i=[e,a("4d28")],n=s,o="function"===typeof n?n.apply(e,i):n,void 0===o||(t.exports=o)})(0,(function(t,e){var a=function(t){"undefined"!==typeof console&&console&&console.error&&console.error(t)};if(e){var n=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],i={color:n,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:n[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{color:"#008acd",borderColor:"#008acd"},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{color:"#d87a80",color0:"#2ec7c9"},lineStyle:{width:1,color:"#d87a80",color0:"#2ec7c9"},areaStyle:{color:"#2ec7c9",color0:"#b6a2de"}},scatter:{symbol:"circle",symbolSize:4},map:{itemStyle:{color:"#ddd"},areaStyle:{color:"#fe994e"},label:{color:"#d87a80"}},graph:{itemStyle:{color:"#d87a80"},linkStyle:{color:"#2ec7c9"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};e.registerTheme("macarons",i)}else a("ECharts is not Loaded")}))},e507:function(t,e,a){},fa4b:function(t,e,a){"use strict";a("60c7")}}]);