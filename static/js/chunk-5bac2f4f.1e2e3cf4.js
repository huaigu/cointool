(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bac2f4f"],{"1dc2":function(e,t,n){},a7f9:function(e,t,n){"use strict";t["a"]={list:[{icon:"coin-btc2",name:"BTC",color:"#f5aa09"},{icon:"coin-eth",name:"ETH",color:"#6bb1f1"},{icon:"coin-xmr",name:"XMR",color:"#EE6501"},{icon:"coin-bnb",name:"BNB",color:"#EE6501"},{icon:"coin-sol",name:"SOL",color:"rgba(107,177,241,1)"},{icon:"coin-ftm",name:"FTM",color:"rgba(24, 144, 255, 1)"},{icon:"coin-matic",name:"MATIC",color:"rgba(24, 144, 255, 1)"},{icon:"avax",name:"AVAX",color:"rgba(255, 51, 51, 1)"},{icon:"coin-heco",name:"HT",color:"#6bb1f1"},{icon:"coin-okex",name:"OKT",color:"#6bb1f1"},{icon:"coin-dot",name:"DOT",color:"#ff3333"},{icon:"coin-trx",name:"TRX",color:"#ff3333"},{icon:"coin-doge",name:"DOGE",color:""}]}},b945:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"donate"},[n("p",{directives:[{name:"show",rawName:"v-show",value:""!==e.userName,expression:"userName !== ''"}],staticClass:"userName"},[e._v(e._s(e.userName))]),n("ul",e._l(e.coinList,(function(t){return n("li",{key:t.name,class:{on:e.selectCoin===t.name},on:{click:function(n){return e.onChangeSelect(t.name)}}},[n("svg-icon",{staticClass:"icon",style:{color:t.color},attrs:{"icon-class":t.icon}}),n("span",[e._v(e._s(t.name))])],1)})),0),n("p",{staticClass:"remask"},[e._v(e._s(e.$t("Donate.coffee")))]),null!=e.selectData?n("div",{staticClass:"info"},[n("img",{staticClass:"code",attrs:{src:e.selectData.img,alt:""}}),n("p",{staticClass:"address"},[e._v(e._s(e.selectData.address))])]):e._e(),e._m(0),n("div",{staticClass:"btnBox"},[n("button",{on:{click:e.onDiy}},[e._v(e._s(e.$t("Donate.diy")))])])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"copyright"},[e._v("Powered by "),n("a",{attrs:{href:"https://cointool.app",target:"_blank"}},[e._v("CoinTool.App")])])}],r=n("4833"),c=n("efe2"),i=(n("6a61"),n("4898"),n("dfe9"),n("a9b5"),n("37de"),n("22f9"),n("7fe9"),n("9bdd"),n("52c1")),s=n("5618"),u=n.n(s),l=n("d119"),f=n("a7f9"),m="Donate",d={name:"Donate",inject:["onCheckConnect"],components:{},data:function(){return{userName:"",selectCoin:"",selectData:null,coinList:[],defaultCoinList:"0x11111111686b45EB94D9688F715815fc0CC0e5Ec,ETH;0x11111111686b45EB94D9688F715815fc0CC0e5Ec,BNB",defaultUserName:"CoinTool.App"}},computed:Object(c["a"])({},Object(i["b"])(["isConnect","account","isPc","language"])),watch:{selectCoin:function(e){var t=this.coinList.find((function(t){return t.name===e}));t&&(this.selectData=t)}},created:function(){this.$i18n.getLocaleMessage("en")[m]||(this.$i18n.mergeLocaleMessage("en",l["a"].en),this.$i18n.mergeLocaleMessage("zh",l["a"].zh))},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.init();case 1:case"end":return t.stop()}}),t)})))()},activated:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("act"),e.init();case 2:case"end":return t.stop()}}),t)})))()},methods:{init:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,a,o,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$route.query,a=n.data,o=n.name,a||(a=e.defaultCoinList),o||(o=e.defaultUserName),r=a.split(";").map((function(e){return e.split(",")})),t.next=6,e.onGetCoinList(r);case 6:c=t.sent,e.selectCoin=c[0].name,e.coinList=c,e.userName=o,e.optionList=f["a"].list;case 11:case"end":return t.stop()}}),t)})))()},onGetCoinList:function(){var e=arguments;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,a,o,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.length>0&&void 0!==e[0]?e[0]:[],a=f["a"].list,o=[],r=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=a.find((function(e){return e.name===n[t][1]})),!r){e.next=13;break}return e.t0=o,e.t1=c["a"],e.t2=Object(c["a"])({},r),e.t3={},e.t4=n[t][0],e.next=9,u.a.toDataURL(n[t][0],{margin:0,width:300,height:300});case 9:e.t5=e.sent,e.t6={address:e.t4,img:e.t5},e.t7=(0,e.t1)(e.t2,e.t3,e.t6),e.t0.push.call(e.t0,e.t7);case 13:case"end":return e.stop()}}),e)})),i=0;case 5:if(!(i<n.length)){t.next=10;break}return t.delegateYield(r(i),"t0",7);case 7:i++,t.next=5;break;case 10:return t.abrupt("return",o);case 11:case"end":return t.stop()}}),t)})))()},onChangeSelect:function(e){this.selectCoin=e},onDiy:function(){this.$router.push({name:"DonateCreate",query:this.$route.query})}}},p=d,h=(n("cd90"),n("5d22")),b=Object(h["a"])(p,a,o,!1,null,"8fe0c7fa",null);t["default"]=b.exports},cd90:function(e,t,n){"use strict";n("1dc2")},d119:function(e,t,n){"use strict";t["a"]={zh:{Donate:{coffee:"请我喝杯咖啡 ☕️",createTitle:"定制你的专属咖啡☕️",inputName:"帅气的名字",createBtn:"生成",resetBtn:"重置",resetConfrim:"确定",resetCancel:"取消",resetTips:"确定重置吗",inputAddress:"请输入 {symbol} 地址",addCoin:"请至少添加一个币种地址",diy:"定制专属咖啡"}},en:{Donate:{coffee:"Buy me a coffee ☕️",createTitle:"Customize your own donations",inputName:"Cool Name",createBtn:"Create",resetBtn:"Reset",resetTips:"Are you sure to reset?",inputAddress:"Please enter the {symbol} address",addCoin:"Please add at least one address",diy:"DIY"}}}}}]);