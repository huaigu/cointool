(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04d40b12"],{6215:function(t,e,n){},"62f6":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));n("05d6"),n("65f0"),n("8b79");var r=function(t,e){var n=(100*(t/e-1)).toFixed(2);return Number(n)},a=function(t){if("undefined"!==typeof t){var e=t>0?"+":"";return"".concat(e).concat(Number(t.toFixed(2)),"%")}}},"8d3d":function(t,e,n){"use strict";n("6215")},c074:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"container"},[n("el-tag",{staticClass:"info",attrs:{effect:"dark",type:"danger"}},[t._v(" CoinTool.App ")]),n("grid-layout",{attrs:{layout:t.list,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!1,"is-mirrored":!1,"vertical-compact":!0,margin:[1,1],"use-css-transforms":!0},on:{"update:layout":function(e){t.list=e}}},t._l(t.list,(function(e){return n("grid-item",{key:e.i,attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i}},[n("div",{staticClass:"gridItem",style:{background:t.getBgColor(e.percent_change_24h),color:t.getTextColor(e.percent_change_24h)}},[n("span",{staticClass:"symbol",style:{fontSize:8*t.getCoinH(e.symbol)+"px"}},[t._v(t._s(e.symbol))]),n("span",{staticClass:"price",style:{fontSize:4+4*t.getCoinH(e.symbol)+"px"}},[t._v("$"+t._s(t._f("autoFixed")(e.price_usd)))]),n("span",{staticClass:"percent",style:{fontSize:8+2*t.getCoinH(e.symbol)+"px"}},[t._v(t._s(t.getRateText(e.percent_change_24h)))])])])})),1)],1)},a=[],o=n("4833"),i=(n("6a61"),n("a9b5"),n("8b79"),n("476c"),n("37de"),n("1e34"),n("22f9"),n("65f0"),n("d1e0")),c=n.n(i),s=n("62f6"),u=null,l={name:"Market",components:{GridLayout:c.a.GridLayout,GridItem:c.a.GridItem},data:function(){return{loading:!0,list:[]}},mounted:function(){this.init(),this.onConnectWebSocket()},destroyed:function(){console.log("destroyed"),u.close()},deactivated:function(){console.log("deactivated"),u.close()},methods:{getRateText:function(t){return Object(s["b"])(t)},getSocketParams:function(){var t=["BTC","ETH","DOT","XRP","ADA","LINK","LTC","BCH","BNB","XLM","BSV","AAVE","EOS","XMR","XTZ","TRX","XEM","NEO","VET","UNI","THETA","SNX","FIL","ATOM","OKB","MKR","DAI","IOTA","SUSHI","HT","DASH","DOGE","AVAX","YFI","KSM","ETC","ZEC","ZIL","GRT","WAVES","UMA","DCR","REN","COMP","EGLD","OMG","BAT","NEAR","NANO","ICX","TUSD","ONT","LRC","NEXO","ZRX","QTUM","DGB","ENJ","ZEN","CRV","IOST","ALGO","MANA","KNC","REP","XVG","BAND","VGX","SEELE","SC","BTG","LSK","BNT","SNT","BAL","OXT","BCD","MATIC","ANT","GNO","HOT","MONA","CHZ","RLC","KCS","CVC","TOMO","UTK","FTM","FUN","DNT","ARDR","SXP","KAVA","YFII","NEST","GT","WICC","KMD","RVN","BTS","BTM","FET","IRIS","BTT","MLN","STEEM","SOL","IOTX","LOOM","TRAC","SYS","BRC","ETN","STORJ","ARK","VLX","WAN","TRB","ELA"],e=3e3,n=t.map((function(t){return'"'.concat(t.toLowerCase(),"usdt@miniTicker@").concat(e,'ms"')}));return n.join(",")},onConnectWebSocket:function(){var t=this;u&&u.close(),u=new WebSocket("wss://stream.yshyqxx.com/stream"),u.onopen=function(){u.send('{"method": "SUBSCRIBE","params":['.concat(t.getSocketParams(),'],"id": 1}'))},u.onmessage=function(e){try{for(var n=JSON.parse(e.data),r=n.stream&&n.stream.split("@")[0].replace("usdt","").toUpperCase(),a=0;a<t.list.length;a++)if(t.list[a].symbol===r){var o=Number(n.data.c),i=Number(n.data.o);t.list[a].price_usd=o,t.list[a].percent_change_24h=Object(s["a"])(o,i);break}}catch(c){console.log(c,"socket error")}},u.onclose=function(){console.log("socket close")}},getData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",isProxy:!0,method:"get",timeout:6e4,headers:{"X-CMC_PRO_API_KEY":"3c56088b-c366-4b4e-8e3c-43672a74306a"},data:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getBgColor:function(t){var e="";return t>=15?e="rgba(0, 153, 51, 1)":t>=10?e="rgba(0, 153, 51, 0.75)":t>=5?e="rgba(0, 153, 51, 0.5)":t>=.2?e="rgba(0, 153, 51, 0.25)":t<.2&&t>-.2?e="rgba(244, 244, 244, 1)":t>=-.2?e="rgba(243, 57, 57, 0.25)":t>=-5?e="rgba(243, 57, 57, 0.5)":t>=-10?e="rgba(243, 57, 57, 0.75)":t<-10&&(e="rgba(243, 57, 57, 0.9)"),e},getTextColor:function(t){var e="";return t>=15||t>=10?e="#fff":t>=5||t>=1||t<1&&t>-1||t>=-1||t>=-5?e="#000":(t>=-10||t<-10)&&(e="#fff"),e},getCoinW:function(t){var e={BTC:8,ETH:4,USDT:4};return e[t]?e[t]:2},getCoinH:function(t){var e={BTC:8,ETH:6};return e[t]?e[t]:2},init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:n=e.sent,t.loading=!1,r=0,a=0,o=[],i=n.data,c=i.map((function(e,n){o.push(e.symbol);var i=Object.assign(e,{x:r,y:a,w:t.getCoinW(e.symbol),h:t.getCoinH(e.symbol),i:n,price_usd:e.quote.USD.price,percent_change_24h:e.quote.USD.percent_change_24h});return r+=t.getCoinW(e.symbol),r>=12&&(r=0,a++),i})),t.list=c;case 10:case"end":return e.stop()}}),e)})))()}}},d=l,g=(n("8d3d"),n("5d22")),f=Object(g["a"])(d,r,a,!1,null,"780c7fb3",null);e["default"]=f.exports}}]);