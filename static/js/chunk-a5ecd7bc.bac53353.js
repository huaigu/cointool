(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5ecd7bc"],{"55a8":function(e,t,n){"use strict";n("7fca")},"6a6c":function(e,t,n){e.exports=n.p+"static/img/code.eb81da4b.png"},"731a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v(e._s(e.$t("Donate.createTitle")))]),n("div",{staticClass:"donate"},[n("el-input",{staticClass:"userNameInput",attrs:{placeholder:e.$t("Donate.inputName"),clearable:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),n("ul",[e._l(e.coinList,(function(t,a){return n("li",{key:t.name,class:{on:e.selectCoin===t.name},on:{click:function(n){return e.onChangeSelect(t.name)}}},[n("svg-icon",{staticClass:"icon",style:{color:t.color},attrs:{"icon-class":t.icon}}),n("span",{staticClass:"name"},[e._v(e._s(t.name))]),n("i",{staticClass:"el-icon-minus delete",on:{click:function(t){return t.stopPropagation(),e.onDeleteItem(a)}}})],1)})),n("li",{staticStyle:{padding:"0"}},[n("el-dropdown",{on:{command:e.onAddSelectItem}},[n("span",{staticClass:"el-dropdown-link",staticStyle:{padding:"10px 20px",display:"block"}},[n("i",{staticClass:"el-icon-arrow-down el-icon-plus"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.optionList,(function(t){return n("el-dropdown-item",{key:t.name,staticClass:"donateAddItem",attrs:{disabled:e.coinList.filter((function(e){return e.name===t.name})).length>0,command:t}},[n("svg-icon",{style:{color:t.color?t.color:""},attrs:{"icon-class":t.icon}}),n("span",{staticClass:"name"},[e._v(e._s(t.name))])],1)})),1)],1)],1)],2),n("p",{directives:[{name:"show",rawName:"v-show",value:e.coinList.length>0,expression:"coinList.length > 0"}],staticClass:"remask"},[e._v(e._s(e.$t("Donate.coffee")))]),e._l(e.coinList,(function(t,a){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.name===e.selectCoin,expression:"item.name === selectCoin"}],key:t.name,staticClass:"info"},[n("img",{staticClass:"code",attrs:{src:""===t.img?e.defaultCode:t.img,alt:""}}),n("el-input",{staticClass:"addressInput",attrs:{align:"center",placeholder:e.$t("Donate.inputAddress",{symbol:t.name}),clearable:""},on:{input:function(t){return e.onAddressChange(t,a)}},model:{value:t.address,callback:function(n){e.$set(t,"address",n)},expression:"item.address"}})],1)})),n("div",{staticClass:"btnBox"},[n("button",{on:{click:e.onCreateDonate}},[e._v(e._s(e.$t("Donate.createBtn")))]),n("button",{on:{click:e.onReset}},[e._v(e._s(e.$t("Donate.resetBtn")))])])],2)])},s=[],i=(n("b4fb"),n("dbb3"),n("4194"),n("2eeb"),n("ea69"),n("053b"),n("e35a"),n("96db"),n("0d7a"),n("af86"),n("6a61"),n("2e91")),o=n("d211"),r=n("52c1"),c=n("5618"),l=n.n(c),u=n("d119"),d=n("a7f9"),m=n("6a6c"),f=n.n(m),h="DonateCreate",p={name:"DonateCreate",inject:["onCheckConnect"],components:{},data:function(){return{defaultCode:"",userName:"",selectCoin:"",coinList:[],optionList:[]}},computed:Object(o["a"])({},Object(r["b"])(["isConnect","account","isPc","language"])),created:function(){this.defaultCode=f.a,this.$i18n.getLocaleMessage("en")[h]||(this.$i18n.mergeLocaleMessage("en",u["a"].en),this.$i18n.mergeLocaleMessage("zh",u["a"].zh))},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$route.query,a=n.data,s=n.name,!a){t.next=8;break}return i=a.split(";").map((function(e){return e.split(",")})),t.next=5,e.onGetCoinList(i);case 5:o=t.sent,e.selectCoin=o[0].name,e.coinList=o;case 8:e.userName=s,e.optionList=d["a"].list;case 10:case"end":return t.stop()}}),t)})))()},methods:{onGetCoinList:function(){var e=arguments;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,s,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.length>0&&void 0!==e[0]?e[0]:[],a=d["a"].list,s=[],i=regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=a.find((function(e){return e.name===n[t][1]})),!i){e.next=13;break}return e.t0=s,e.t1=o["a"],e.t2=Object(o["a"])({},i),e.t3={},e.t4=n[t][0],e.next=9,l.a.toDataURL(n[t][0],{margin:0,width:300,height:300});case 9:e.t5=e.sent,e.t6={address:e.t4,img:e.t5},e.t7=(0,e.t1)(e.t2,e.t3,e.t6),e.t0.push.call(e.t0,e.t7);case 13:case"end":return e.stop()}}),e)})),r=0;case 5:if(!(r<n.length)){t.next=10;break}return t.delegateYield(i(r),"t0",7);case 7:r++,t.next=5;break;case 10:return t.abrupt("return",s);case 11:case"end":return t.stop()}}),t)})))()},onChangeSelect:function(e){this.selectCoin=e},onAddSelectItem:function(e){this.coinList.push(e),this.selectCoin=e.name},onDeleteItem:function(e){this.coinList.splice(e,1),0!==this.coinList.length&&(1===this.coinList.length?this.selectCoin=this.coinList[0].name:this.selectCoin=this.coinList[e].name)},onAddressChange:function(e,t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(s="",""===e){a.next=5;break}return a.next=4,l.a.toDataURL(e,{margin:0,width:300,height:300});case 4:s=a.sent;case 5:n.coinList[t].img=s;case 6:case"end":return a.stop()}}),a)})))()},onCreateDonate:function(){var e=this.coinList.filter((function(e){return""!==e.address}));if(0!==e.length){for(var t="",n=0;n<e.length;n++){var a=e[n];t+="".concat(a.address,",").concat(a.name,";")}t=t.substring(0,t.length-1),this.$router.push({name:"Donate",query:{name:this.userName,data:t}})}else this.$message.error("请至少添加一个币种地址")},onReset:function(){var e=this;this.$confirm(this.$t("Donate.resetTips"),"",{confirmButtonText:this.$t("Donate.resetConfrim"),cancelButtonText:this.$t("Donate.resetCancel"),type:"warning"}).then((function(){e.coinList=[],e.userName=""})).catch((function(){}))}}},g=p,C=(n("55a8"),n("5d22")),b=Object(C["a"])(g,a,s,!1,null,"e889daa6",null);t["default"]=b.exports},"7fca":function(e,t,n){},a7f9:function(e,t,n){"use strict";t["a"]={list:[{icon:"coin-btc2",name:"BTC",color:"#f5aa09",img:"",address:""},{icon:"coin-eth",name:"ETH",color:"#6bb1f1",img:"",address:""},{icon:"coin-xmr",name:"XMR",color:"#EE6501",img:"",address:""},{icon:"coin-bnb",name:"BNB",color:"#EE6501",img:"",address:""},{icon:"coin-heco",name:"HT",color:"#6bb1f1",img:"",address:""},{icon:"coin-okex",name:"OKT",color:"#6bb1f1",img:"",address:""},{icon:"coin-dot",name:"DOT",color:"#ff3333",img:"",address:""},{icon:"coin-trx",name:"TRX",color:"#ff3333",img:"",address:""},{icon:"coin-doge",name:"DOGE",color:"",img:"",address:""}]}},d119:function(e,t,n){"use strict";t["a"]={zh:{Donate:{coffee:"请我喝杯咖啡 ☕️",createTitle:"定制你的专属咖啡☕️",inputName:"帅气的名字",createBtn:"生成",resetBtn:"重置",resetConfrim:"确定",resetCancel:"取消",resetTips:"确定重置吗",inputAddress:"请输入 {symbol} 地址",addCoin:"请至少添加一个币种地址",diy:"定制专属咖啡"}},en:{Donate:{coffee:"Buy me a coffee ☕️",createTitle:"Customize your own donations",inputName:"Cool Name",createBtn:"Create",resetBtn:"Reset",resetTips:"Are you sure to reset?",inputAddress:"Please enter the {symbol} address",addCoin:"Please add at least one address",diy:"DIY"}}}}}]);