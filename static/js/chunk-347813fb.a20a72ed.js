(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347813fb"],{"269e":function(e,_,t){var a=t("e0cf");a("asyncIterator")},5937:function(e,_,t){"use strict";t.d(_,"a",(function(){return a}));t("29ed"),t("5d80"),t("7479"),t("269e"),t("6359"),t("7fe9"),t("9bdd");function a(e){var _;if("undefined"!==typeof Symbol&&(Symbol.asyncIterator&&(_=e[Symbol.asyncIterator]),null==_&&Symbol.iterator&&(_=e[Symbol.iterator])),null==_&&(_=e["@@asyncIterator"]),null==_&&(_=e["@@iterator"]),null==_)throw new TypeError("Object is not async iterable");return _.call(e)}},"9b2f":function(e,_,t){},"9f33":function(e,_,t){"use strict";t("9b2f")},bf98:function(e,_,t){e.exports=t.p+"static/img/airdrops-bg-pc.4be98079.png"},c540:function(e,_,t){"use strict";var a,n=t("55ae");_["a"]={zh:{airdrops:(a={title:"空投查询神器",desc:"使用CoinTool空投查询多个项目的空投资格，领取价值1000+美元空投",search:"查询",support_num:"CoinTool 已支持 {number}+ 项目查询，快分享给朋友吧~",wait:"待查询",no_qualification:"没有资格"},Object(n["a"])(a,"no_qualification","没有资格"),Object(n["a"])(a,"available","可领取"),Object(n["a"])(a,"network_error","网络错误"),Object(n["a"])(a,"end_time","结束时间"),Object(n["a"])(a,"activities","进行中"),Object(n["a"])(a,"end","已结束"),a)},en:{airdrops:{title:"Find unclaimed airdrops",desc:"Check eligibility for airdrop of multiple items and receive $1000+",search:"Search",support_num:"CoinTool already supports {number}+ projects",wait:"Wait",no_qualification:"No qualification",available:"Available",network_error:"Network Error",end_time:"End time",activities:"Activities",end:"End"}}}},c605:function(e,_,t){"use strict";t.r(_);var a=function(){var e=this,_=e.$createElement,a=e._self._c||_;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("div",{staticClass:"headerBox"},[a("img",{staticClass:"img",attrs:{src:t("bf98")}}),a("h1",[e._v(e._s(e.$t("airdrops.title")))]),a("p",{staticClass:"desc"},[e._v(e._s(e.$t("airdrops.desc")))]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter EVM Address.. e.g"},domProps:{value:e.address},on:{input:function(_){_.target.composing||(e.address=_.target.value)}}}),a("i",{directives:[{name:"show",rawName:"v-show",value:""!==e.address,expression:"address !== ''"}],staticClass:"el-icon-error close",on:{click:function(_){e.address=""}}}),a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.onSearch}},[e._v(e._s(e.$t("airdrops.search")))])])])]),a("div",{staticClass:"list"},[a("p",{staticClass:"remark"},[e._v(e._s(e.$t("airdrops.support_num",{number:e.list.length})))]),a("ul",{staticClass:"ul"},e._l(e.list,(function(_,t){return a("li",{key:t,on:{click:function(t){return e.onGoWeb(_.web)}}},[a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:_.logo,alt:"logo"}})]),a("h6",[a("span",[e._v(e._s(_.name))]),a("el-popover",{attrs:{placement:"top-start",width:"250",trigger:e.isPc?"hover":"click",content:_.desc}},[a("i",{staticClass:"el-icon-question icon",attrs:{slot:"reference"},slot:"reference"})])],1),a("div",{staticClass:"result"},[_.loading?a("i",{staticClass:"el-icon-loading loading"}):a("p",[null===_.balance?a("span",[e._v(e._s(e.$t("airdrops.wait")))]):0===_.balance?a("span",[e._v(e._s(e.$t("airdrops.no_qualification")))]):_.balance>0?a("span",[e._v(e._s(e.$t("airdrops.available"))+": "+e._s(_.balance)+" "+e._s(_.symbol))]):-1===_.balance?a("span",[e._v(e._s(e.$t("airdrops.network_error")))]):e._e()])]),a("p",{staticClass:"time"},[e._v(e._s(e.$t("airdrops.end_time"))+"："+e._s(_.endTime))]),1===_.status?a("div",{staticClass:"status start_status"},[e._v(e._s(e.$t("airdrops.activities")))]):a("div",{staticClass:"status end_status"},[e._v(e._s(e.$t("airdrops.end")))])])})),0)])])},n=[],r=t("d718"),s=r["a"],i=(t("9f33"),t("5d22")),o=Object(i["a"])(s,a,n,!1,null,"0cc2b442",null);_["default"]=o.exports},d718:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("4833"),_Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("efe2"),_Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("5937"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("37de"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("1e34"),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("6a61"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__),vuex__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("52c1"),_local__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("c540"),viewName="airdrops";__webpack_exports__["a"]={name:viewName,inject:["onCheckConnect"],components:{},data:function(){return{address:"0x9407ca600a2b955273dc78ecae1bf22d652df0f1",list:[{balance:null,symbol:"BTC",loading:!0,name:"1inch",logo:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/airdrops/1inch.png",desc:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。",endTime:"2020-09-23 17:21:40",web:"https://www.baidu.com",status:1,apiProxy:!0,apiUrl:"https://governance.1inch.exchange/v1.0/distribution/{{address}}",apiData:{},apiMethod:"get",returnFn:"\n            if (res.error) {\n              num = 0\n            } else {\n              num = Number((parseInt(res.amount) / 1000000000000000000).toFixed(4))\n            }\n          "}]}},computed:Object(_Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["a"])({},Object(vuex__WEBPACK_IMPORTED_MODULE_6__["b"])(["isConnect","account","isPc","language"])),watch:{account:function(e){e&&(this.address=e,this.onSearch())}},created:function(){this.$i18n.getLocaleMessage("en")[viewName]||(this.$i18n.mergeLocaleMessage("en",_local__WEBPACK_IMPORTED_MODULE_7__["a"].en),this.$i18n.mergeLocaleMessage("zh",_local__WEBPACK_IMPORTED_MODULE_7__["a"].zh))},mounted:function(){},methods:{onGoWeb:function(e){window.open(e,"_blank")},onSearch:function(){var e=this;return Object(_Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["a"])(regeneratorRuntime.mark((function _(){var t,a,n,r,s,i,o,c,l;return regeneratorRuntime.wrap((function(_){while(1)switch(_.prev=_.next){case 0:t=0,a=!0,n=!1,_.prev=3,s=Object(_Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_2__["a"])(e.list);case 5:return _.next=7,s.next();case 7:return i=_.sent,a=i.done,_.next=11,i.value;case 11:if(o=_.sent,a){_.next=23;break}return c=o,e.$set(e.list,t,Object(_Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["a"])({},e.list[0]),{},{loading:!0})),_.next=17,e.getData(c);case 17:l=_.sent,e.$set(e.list,t,Object(_Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["a"])({},e.list[0]),{},{balance:l,loading:!1})),t++;case 20:a=!0,_.next=5;break;case 23:_.next=29;break;case 25:_.prev=25,_.t0=_["catch"](3),n=!0,r=_.t0;case 29:if(_.prev=29,_.prev=30,a||null==s.return){_.next=34;break}return _.next=34,s.return();case 34:if(_.prev=34,!n){_.next=37;break}throw r;case 37:return _.finish(34);case 38:return _.finish(29);case 39:case"end":return _.stop()}}),_,null,[[3,25,29,39],[30,,34,38]])})))()},getData:function getData(item){var _this2=this;return Object(_Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["a"])(regeneratorRuntime.mark((function _callee2(){var _url,apiData,key,num,res;return regeneratorRuntime.wrap((function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:for(key in _url=item.apiUrl.replace("{{address}}",_this2.address),item.apiProxy&&(_url="https://proxy.cointool.workers.dev/?url=".concat(encodeURIComponent(_url))),apiData=Object(_Users_chenzejiang_code_coin_coin_tool_vue_i18n_node_modules_babel_runtime_7_14_0_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["a"])({},item.apiData),item.apiData)"string"===typeof item.apiData[key]&&(apiData[key]=item.apiData[key].replace("{{address}}",_this2.address));return num=0,_context2.prev=5,_context2.next=8,_this2.$ajax({url:_url,method:item.apiMethod,data:apiData});case 8:res=_context2.sent,eval(item.returnFn),_context2.next=15;break;case 12:_context2.prev=12,_context2.t0=_context2["catch"](5),num=-1;case 15:return _context2.abrupt("return",num);case 16:case"end":return _context2.stop()}}),_callee2,null,[[5,12]])})))()}}}}}]);