(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20f4e8ea"],{"0e74":function(t,o,e){"use strict";e("2c2e")},"2c2e":function(t,o,e){},"2d22":function(t,o,e){},"624b":function(t,o,e){"use strict";e.d(o,"b",(function(){return c})),e.d(o,"c",(function(){return d})),e.d(o,"d",(function(){return f})),e.d(o,"a",(function(){return h}));var n=e("4833"),r=(e("6a61"),e("37de"),e("22f9"),e("63f1"),e("e3a7"),e("7479"),e("91cc"),e("2c1c"),e("48c5"),e("0f02"),e("782e"),e("fceb"),e("e5cb"),e("ecfe"),e("0e9c"),e("cfa9"),e("6bfd"),e("583c"),e("1e68"),e("b0c7"),e("6237"),e("7ad5"),e("ff5e"),e("b606"),e("3a56"),e("7e59"),e("5bf0"),e("f6ed"),e("3f1a"),e("eb26"),e("65f0"),e("1e34"),e("d51e"),e("4a32"),e("1735")),a=e.n(r),s=e("574c"),i=function(t,o){var e=document.createElement("canvas"),n=e.getContext("2d"),r=new Image;r.crossOrigin="Anonymous",r.onload=function(){e.height=r.height,e.width=r.width,n.drawImage(r,0,0);var t=e.toDataURL("image/png");o(t),e=null},r.src=t},l=function(t,o){var e=t.split(","),n=e[0].match(/:(.*?);/)[1],r=atob(e[1]),a=r.length,s=new Uint8Array(a);while(a--)s[a]=r.charCodeAt(a);return new File([s],o,{type:n})},c=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(o){var e,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>1&&void 0!==n[1]?n[1]:"imgName",t.abrupt("return",new Promise((function(t){i(o,(function(o){var n=l(o,e);t(n)}))})));case 2:case"end":return t.stop()}}),t)})));return function(o){return t.apply(this,arguments)}}(),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number(new Date),e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download",o);var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!0,!1,0,null),e.dispatchEvent(n)},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#pdfDom",o=["w6sqw7DCosKcwqLCmSE=","wrc3e3w=","ccOaAXvCqjgH","w7ISaT3DkMOXw6rCo8KsQQJt","w40dw6HCmk8ew6jCuA==","L8KEwowFw74HwpI9Ag==","UsOkwrfDpzMkHMK9","VsO/wqDDtjR3XMO8"];(function(t,o){var e=function(o){while(--o)t["push"](t["shift"]())};e(++o)})(o,386);var e=function t(e,n){e-=0;var r=o[e];if(void 0===t["DEoMmq"]){(function(){var t=function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(o){t=window}return t},o=t(),e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o["atob"]||(o["atob"]=function(t){for(var o,n,r=String(t)["replace"](/=+$/,""),a="",s=0,i=0;n=r["charAt"](i++);~n&&(o=s%4?64*o+n:n,s++%4)?a+=String["fromCharCode"](255&o>>(-2*s&6)):0)n=e["indexOf"](n);return a})})();var a=function(t,o){var e,n,r=[],a=0,s="",i="";t=atob(t);for(var l=0,c=t["length"];l<c;l++)i+="%"+("00"+t["charCodeAt"](l)["toString"](16))["slice"](-2);for(t=decodeURIComponent(i),n=0;n<256;n++)r[n]=n;for(n=0;n<256;n++)a=(a+r[n]+o["charCodeAt"](n%o["length"]))%256,e=r[n],r[n]=r[a],r[a]=e;n=0,a=0;for(var d=0;d<t["length"];d++)n=(n+1)%256,a=(a+r[n])%256,e=r[n],r[n]=r[a],r[a]=e,s+=String["fromCharCode"](t["charCodeAt"](d)^r[(r[n]+r[a])%256]);return s};t["NnQEnL"]=a,t["bckySF"]={},t["DEoMmq"]=!0}var s=t["bckySF"][e];return void 0===s?(void 0===t["DMUBWC"]&&(t["DMUBWC"]=!0),r=t["NnQEnL"](r,n),t["bckySF"][e]=r):r=s,r};(function(){var t=window[e("0x4","(Gz)")][e("0x2","JBPJ")][e("0x0","1Egg")]("www.",""),o=e("0x3","9ODp"),n=e("0x1","&qEF"),r=e("0x5","(Gz)");t!==n&&t!==o&&(window[e("0x6","JKC!")][e("0x7","l1FT")]=r+n)})();var n=document.querySelector(t);if(n){var r=n.querySelectorAll("svg");[].forEach.call(r,(function(t){var o=t.parentNode,e=new Image;e.src="data:image/svg+xml,".concat(encodeURIComponent((new XMLSerializer).serializeToString(t))),e.crossOrigin="anonymous",e.onload=function(){var n=t.getBoundingClientRect().width,r=t.getBoundingClientRect().height,a=document.createElement("canvas");a.width=n,a.height=r;var s=a.getContext("2d");s.drawImage(e,0,0,n,r),o.appendChild(a),o.removeChild(t),o.removeChild(e)},o.append(e)}))}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#pdfDom",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"CoinTool",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};a()(document.querySelector(t),{allowTaint:!0,useCORS:!0}).then((function(t){var n=t.width,r=t.height,a=n/592.28*841.89,i=r,l=0,c=595.28,d=592.28/n*r,f=t.toDataURL("image/jpeg",1),h=new s["a"]("","pt","a4");if(i<a)h.addImage(f,"JPEG",0,0,c,d);else while(i>0)h.addImage(f,"JPEG",0,l,c,d),i-=a,l-=841.89,i>0&&h.addPage();h.save(o+".pdf"),e()})).catch((function(t){console.log(t,"error"),e()}))}},8271:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("div",{staticClass:"leftBox"},[t._m(0),e("div",{staticClass:"drapBox",attrs:{id:"drapBox"}},[e("div",{staticClass:"shape"},[e("Shape",{attrs:{id:"svgDOM","start-color":t.form.startColorText,"end-color":t.form.endColorText,"only-color":t.form.onlyColor,shape:t.form.shape,"svg-id":Number(new Date)}}),e("div",{staticClass:"btnBox"},[e("el-button",{staticClass:"btn",attrs:{size:"lager",type:"info"},on:{click:t.onRandow}},[t._v(t._s(t.$t("shapeMaking.randow")))]),e("el-button",{staticClass:"btn",attrs:{size:"lager",type:"info"},on:{click:t.onDownload}},[t._v(t._s(t.$t("shapeMaking.download")))])],1)],1)])]),e("RightBox",{attrs:{form:t.form},on:{onChangeConfig:t.onChangeConfig}})],1)},r=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"gradient-bg"},[e("div",{staticClass:"gradient-top"}),e("div",{staticClass:"gradient-bottom"})])}],a=e("efe2"),s=(e("8b79"),e("52c1")),i={zh:{shapeMaking:{randow:"随机",download:"下载",shape:"形状",singleColor:"是否纯色?"}},en:{shapeMaking:{shape:"Shape",randow:"Randomize",download:"Download",singleColor:"Is it a single color?"}}},l=function(){var t=this,o=t.$createElement,e=t._self._c||o;return"star"===t.shape?e("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 150 150",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("defs",[e("linearGradient",{attrs:{id:t.svgId,x1:"50%",y1:"0%",x2:"50%",y2:"100%"}},[e("stop",{attrs:{"stop-color":t.startColor,offset:"0%"}}),t.onlyColor?t._e():e("stop",{attrs:{"stop-color":t.endColor,offset:"100%"}})],1)],1),e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("polygon",{attrs:{fill:"url(#"+t.svgId+")",points:"77 120 29.9771798 144.72136 38.9577393 92.3606798 0.915478696 55.2786405 53.4885899 47.6393202 77 0 100.51141 47.6393202 153.084521 55.2786405 115.042261 92.3606798 124.02282 144.72136"}})])]):"square"===t.shape?e("svg",{attrs:{viewBox:"0 0 280 280",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("defs",[e("linearGradient",{attrs:{id:t.svgId,x1:"50%",y1:"0%",x2:"50%",y2:"100%"}},[e("stop",{attrs:{"stop-color":t.startColor,offset:"0%"}}),t.onlyColor?t._e():e("stop",{attrs:{"stop-color":t.endColor,offset:"100%"}})],1)],1),e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("rect",{attrs:{fill:"url(#"+t.svgId+")",x:"0",y:"0",width:"280",height:"280"}})])]):"circle"===t.shape?e("svg",{attrs:{viewBox:"0 0 152 152",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("defs",[e("linearGradient",{attrs:{id:t.svgId,x1:"50%",y1:"0%",x2:"50%",y2:"100%"}},[e("stop",{attrs:{"stop-color":t.startColor,offset:"0%"}}),t.onlyColor?t._e():e("stop",{attrs:{"stop-color":t.endColor,offset:"100%"}})],1)],1),e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("circle",{attrs:{fill:"url(#"+t.svgId+")",cx:"76",cy:"76",r:"76"}})])]):"polygon"===t.shape?e("svg",{attrs:{viewBox:"0 0 192 181",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("defs",[e("linearGradient",{attrs:{id:t.svgId,x1:"50%",y1:"0%",x2:"50%",y2:"100%"}},[e("stop",{attrs:{"stop-color":t.startColor,offset:"0%"}}),t.onlyColor?t._e():e("stop",{attrs:{"stop-color":t.endColor,offset:"100%"}})],1)],1),e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("polygon",{attrs:{fill:"url(#"+t.svgId+")",points:"96 0 191.105652 69.0983006 154.778525 180.901699 37.2214748 180.901699 0.89434837 69.0983006"}})])]):"triangle"===t.shape?e("svg",{attrs:{viewBox:"0 0 94 94",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("defs",[e("linearGradient",{attrs:{id:t.svgId,x1:"50%",y1:"0%",x2:"50%",y2:"100%"}},[e("stop",{attrs:{"stop-color":t.startColor,offset:"0%"}}),t.onlyColor?t._e():e("stop",{attrs:{"stop-color":t.endColor,offset:"100%"}})],1)],1),e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("polygon",{attrs:{fill:"url(#"+t.svgId+")",points:"47 0 94 94 0 94"}})])]):t._e()},c=[],d=(e("65f0"),{props:{svgId:{type:[String,Number],require:!0},startColor:{type:String,require:!0},endColor:{type:String,require:!0},onlyColor:{type:Boolean,default:!1},shape:{type:String,default:"circle"}}}),f=d,h=e("5d22"),u=Object(h["a"])(f,l,c,!1,null,null,null),g=u.exports,w=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{class:"rightBox "+(t.isShow?"rightBoxHide":"rightBoxShow")},[e("div",{staticClass:"showBtn",on:{click:function(o){t.isShow=!t.isShow}}},[e("i",{class:(t.isShow?"el-icon-arrow-left":"el-icon-arrow-right")+" icon"})]),e("div",{staticClass:"sider"},[e("div",{staticClass:"box"},[e("h5",[t._v(t._s(t.$t("shapeMaking.shape")))]),e("ul",t._l(t.arr,(function(o){return e("li",{key:o,on:{click:function(e){return t.onShapeClick(o)}}},[e("Shape",{attrs:{"start-color":"#a4b2c1","end-color":"#a4b2c1","only-color":!0,shape:o,"svg-id":o}})],1)})),0)]),e("div",{staticClass:"box"},[e("h5",[t._v(t._s(t.$t("shapeMaking.singleColor")))]),e("div",{staticClass:"formBox"},[e("el-switch",{model:{value:t.form.onlyColor,callback:function(o){t.$set(t.form,"onlyColor",o)},expression:"form.onlyColor"}})],1)]),e("div",{staticClass:"box"},[e("h5",[t._v("Color1")]),e("div",{staticClass:"formBox"},[e("ColorPicker",{attrs:{color:t.form.startColor,"on-start-change":function(o){return t.onChange(o,"startColor")},"on-change":function(o){return t.onChange(o,"startColor")},"on-end-change":function(o){return t.onChange(o,"startColor")}}})],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.form.onlyColor,expression:"!form.onlyColor"}],staticClass:"box"},[e("h5",[t._v("Color2")]),e("div",{staticClass:"formBox"},[e("ColorPicker",{attrs:{color:t.form.endColor,"on-start-change":function(o){return t.onChange(o,"endColor")},"on-change":function(o){return t.onChange(o,"endColor")},"on-end-change":function(o){return t.onChange(o,"endColor")}}})],1)])])])},p=[],v=e("b169"),C={components:{Shape:g,ColorPicker:v["ColorPicker"]},props:{form:{require:!0,type:Object}},data:function(){return{arr:["star","square","circle","polygon","triangle"],loading:!0,isShowDialog:!1,isShow:!1}},computed:Object(a["a"])({},Object(s["b"])(["isPc"])),watch:{form:{deep:!0,handler:function(t){this.$emit("onChangeConfig",t)}}},created:function(){},mounted:function(){},methods:{onChange:function(t,o){"startColor"===o?(this.form.startColor=Object(a["a"])({},t),this.form.startColorText="rgba(".concat(t.red,", ").concat(t.green,", ").concat(t.blue,", ").concat(t.alpha,")")):(this.form.endColor=Object(a["a"])({},t),this.form.endColorText="rgba(".concat(t.red,", ").concat(t.green,", ").concat(t.blue,", ").concat(t.alpha,")"))},onShapeClick:function(t){this.form.shape=t}}},m=C,x=(e("0e74"),e("9132"),e("5218"),Object(h["a"])(m,w,p,!1,null,"4b6494d8",null)),b=x.exports,y=e("624b"),k="shapeMaking",S={name:k,inject:["onCheckConnect"],components:{Shape:g,RightBox:b},data:function(){return{form:{startColorText:"#000",endColorText:"#000",startColor:{red:0,green:0,blue:0,alpha:1},endColor:{red:0,green:0,blue:0,alpha:1},shape:"star",onlyColor:!1}}},computed:Object(a["a"])({},Object(s["b"])(["isConnect","account","isPc","language","isAndroid"])),created:function(){this.$i18n.getLocaleMessage("en")[k]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh))},mounted:function(){this.onRandow()},methods:{getRgb:function(){var t=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),e=Math.floor(256*Math.random());return{red:t,green:o,blue:e,alpha:1}},onChangeConfig:function(t){this.form=t,console.log("_form",t)},onRandow:function(){var t=this.getRgb();this.form.startColor=t,this.form.startColorText="rgba(".concat(t.red,", ").concat(t.green,", ").concat(t.blue,", ").concat(t.alpha,")");var o=this.getRgb();this.form.endColor=o,this.form.endColorText="rgba(".concat(o.red,", ").concat(o.green,", ").concat(o.blue,", ").concat(o.alpha,")")},onDownload:function(){var t=document.getElementById("svgDOM"),o=t.outerHTML,e="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(o)));Object(y["c"])(e)}}},M=S,_=(e("d963"),Object(h["a"])(M,n,r,!1,null,"48e8ae16",null));o["default"]=_.exports},9132:function(t,o,e){"use strict";e("c3cb")},c3cb:function(t,o,e){},d963:function(t,o,e){"use strict";e("2d22")}}]);