(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6504abf9"],{"017d":function(e,t,s){"use strict";s("6f75")},"0d48":function(e,t,s){"use strict";s("a62a")},11:function(e,t){},12:function(e,t){},13:function(e,t){},2093:function(e,t,s){"use strict";s("7680")},"23ca":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"resultList"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:e.$t("editorInput.wait_result_list")+"("+e.waitList.length+")"}},[s("div",{staticClass:"listBox"},[s("el-input",{attrs:{value:e.waitListText,type:"textarea",rows:7}}),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.waitList.length>0,expression:"waitList.length > 0"},{name:"clipboard",rawName:"v-clipboard:copy",value:e.waitListText,expression:"waitListText",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"btn",attrs:{type:"primary",size:"mini"}},[e._v(" "+e._s(e.$t("common.copy"))+" ")])],1)]),s("el-tab-pane",{attrs:{label:e.$t("editorInput.success_result_list")+"("+e.successList.length+")"}},[s("div",{staticClass:"listBox"},[s("el-input",{attrs:{value:e.successListText,type:"textarea",rows:7}}),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.successList.length>0,expression:"successList.length > 0"},{name:"clipboard",rawName:"v-clipboard:copy",value:e.successListText,expression:"successListText",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"btn",attrs:{type:"primary",size:"mini"}},[e._v(" "+e._s(e.$t("common.copy"))+" ")])],1)]),s("el-tab-pane",{attrs:{label:e.$t("editorInput.error_result_list")+"("+e.errorList.length+")"}},[s("div",{staticClass:"listBox"},[s("el-input",{attrs:{value:e.errorListText,type:"textarea",rows:7}}),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.errorList.length>0,expression:"errorList.length > 0"},{name:"clipboard",rawName:"v-clipboard:copy",value:e.errorListText,expression:"errorListText",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"btn",attrs:{type:"primary",size:"mini"}},[e._v(" "+e._s(e.$t("common.copy"))+" ")])],1)])],1)],1)},a=[],r=s("efe2"),i=(s("f597"),s("8b79"),s("fdea"),s("a9b5"),s("403f"),s("297b"),s("52c1")),o={inject:["onCopySuccess"],components:{},props:{allList:{type:Array,default:function(){return[]}},errorList:{type:Array,default:function(){return[]}},successList:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["language","isZh","isPc"])),{},{successListText:function(){var e="";return this.successList.forEach((function(t){e+="".concat(t.address,",").concat(t.amount,"\n")})),e},errorListText:function(){var e="";return this.errorList.forEach((function(t){e+="".concat(t.address,",").concat(t.amount,"\n")})),e},waitListText:function(){var e="";return this.waitList.forEach((function(t){e+="".concat(t.address,",").concat(t.amount,"\n")})),e},waitList:function(){var e=this;return this.allList.filter((function(t){var s=e.successList.concat(e.errorList).map((function(e){return e.address}));return!s.includes(t.address)}))}}),created:function(){this.chainName=this.$route.meta.chainName},mounted:function(){},methods:{}},u=o,c=(s("2093"),s("5d22")),l=Object(c["a"])(u,n,a,!1,null,"369a0b7e",null);t["a"]=l.exports},"2ff9":function(e,t,s){"use strict";s("6261")},"3cae":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("OneToMoreHeader",{attrs:{"support-networks":e.supportNetworks,title:e.oneToMoreHeaderTitle,"chain-name":"sui"}}),s("div",{staticClass:"containerBg"},[s("div",{staticClass:"oneToMoreBox"},[s("div",{staticClass:"stepBox"},[s("el-steps",{attrs:{active:e.stepActive,"align-center":"","process-status":"finish","finish-status":"finish"}},[s("el-step",{attrs:{title:e.$t("editorInput.prepare")}}),s("el-step",{attrs:{title:e.$t("editorInput.confirm")}}),s("el-step",{attrs:{title:e.$t("editorInput.send")}})],1)],1),s("Step1",{directives:[{name:"show",rawName:"v-show",value:0===e.stepActive,expression:"stepActive === 0"}],on:{onStep1Confirm:e.onStep1Confirm}}),s("Step2",{directives:[{name:"show",rawName:"v-show",value:1===e.stepActive,expression:"stepActive === 1"}],attrs:{"queue-list":e.queueList,"step-active":e.stepActive,"token-info":e.tokenInfo},on:{onStep2Prev:e.onStep2Prev,onStep2Next:e.onStep2Next,onStep2Confirm:e.onStep2Confirm}}),s("Step3",{directives:[{name:"show",rawName:"v-show",value:2===e.stepActive,expression:"stepActive === 2"}],attrs:{send_tx:e.send_tx,"token-info":e.tokenInfo,"step-active":e.stepActive,"current-fee":e.currentFee,"array-limit":e.arrayLimit,"queue-list":e.queueList},on:{onStep3Prev:e.onStep3Prev}})],1)])],1)},a=[],r=s("4833"),i=s("efe2"),o=(s("6a61"),s("52c1")),u=s("850d"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step1"},[s("div",{staticClass:"inputBox"},[s("div",{staticClass:"inputContext inputContextAddress"},[s("div",{staticClass:"label"},[s("span",[e._v(" "+e._s("Token")+" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.suiAccount,expression:"suiAccount"},{name:"clipboard",rawName:"v-clipboard:copy",value:e.contractName,expression:"contractName",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copyBox"},[s("svg-icon",{attrs:{"icon-class":"copy"}})],1)]),e.isPc&&e.tokenInfo.symbol?s("el-tag",[e._v(" Balance: "+e._s(e.tokenInfo.balance>0&&e.tokenInfo.decimals?e.tokenInfo.balance/Math.pow(10,e.tokenInfo.decimals):0)+" "+e._s(e.tokenInfo.symbol)+" ")]):e._e()],1),s("el-select",{staticClass:"selectBox",staticStyle:{width:"100%"},attrs:{clearable:"",size:"large",filterable:"","filter-method":e.handleFilterAddress},on:{change:e.onSelectChange},model:{value:e.contractName,callback:function(t){e.contractName=t},expression:"contractName"}},e._l(e.addressOptions,(function(t,n){return s("el-option",{key:n,attrs:{label:t.symbol,value:t.coinType}},[s("span",{staticClass:"nameBox",staticStyle:{float:"left"}},[e._v(" "+e._s(t.symbol)+" ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"0x1"!==t.contract,expression:"item.contract !== '0x1'"}],staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(e._f("autoAddress")(t.coinType)))])])})),1)],1)]),s("div",{staticClass:"label"},[s("span",[e._v(e._s(e.$t("editorInput.address_amount")))]),s("span",{staticClass:"btnText",on:{click:e.onBulkAmount}},[e._v(e._s(e.$t("editorInput.auto_amount")))]),e.isInput?s("span",{staticClass:"btnText",on:{click:e.onToggleInputType}},[e._v(e._s(e.$t("editorInput.upload_file")))]):s("span",{staticClass:"btnText",on:{click:e.onToggleInputType}},[e._v(e._s(e.$t("editorInput.iinsert_manually")))])]),s("el-row",[s("el-col",{attrs:{xs:{span:24}}},[e.isInput?s("Editor",{ref:"editor",on:{changed:e.onChangeEditor},model:{value:e.editorValue,callback:function(t){e.editorValue=t},expression:"editorValue"}}):s("upload-excel-component",{attrs:{"on-success":e.onUploadFileSuccess,"before-upload":e.beforeUpload}})],1)],1),s("div",{staticClass:"label label-remark"},[e.isInput?s("span",[e._v(e._s(e.$t("editorInput.inputAlert_3")))]):s("span",[e._v(e._s(e.$t("editorInput.inputAlert_2")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.isInput,expression:"!isInput"}],staticClass:"btnText"},[s("a",{attrs:{target:"_blank",href:"/example.xlsx"}},[e._v(e._s(e.$t("editorInput.download_examples")))])]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.isInput,expression:"isInput"}],staticClass:"btnText",on:{click:e.onExample}},[e._v(e._s(e.$t("editorInput.show_examples")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errInfoList.length>0,expression:"errInfoList.length > 0"}],staticClass:"errInfoBox"},[s("div",{staticClass:"label label-remark"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.repeat,expression:"!repeat"}]},[e._v(e._s(e.$t("editorInput.inputAlert_4")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}]},[e._v(e._s(e.$t("editorInput.inputAlert_12")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.repeat,expression:"!repeat"}],staticClass:"btnText",on:{click:e.onDeleteErr}},[e._v(e._s(e.$t("editorInput.delete_err")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(1)}}},[e._v(e._s(e.$t("editorInput.repeat_1")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(2)}}},[e._v(e._s(e.$t("editorInput.repeat_2")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(3)}}},[e._v(e._s(e.$t("editorInput.repeat_3")))])]),s("ul",e._l(e.errInfoList,(function(t){return s("li",{key:t},[e._v(e._s(t))])})),0)]),s("div",{staticClass:"btnBox"},[s("el-button",{attrs:{size:"large",disabled:e.errInfoList.length>0,type:"primary"},on:{click:e.onNext}},[e._v(e._s(e.$t("editorInput.next")))]),s("div",{staticClass:"rightBox"},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isZh,expression:"!isZh"}],attrs:{size:"large",type:"success"},on:{click:function(t){return e.$router.push({path:"/createToken/sui"})}}},[e._v(e._s(e.$t("route.createToken")))])],1)],1)],1)},l=[],p=s("5af6"),d=s("5937"),f=(s("37de"),s("22f9"),s("7479"),s("9bdd"),s("96e6"),s("a9b5"),s("4898"),s("476c"),s("f597"),s("c9f2"),s("c774"),s("fdea"),s("8b79"),s("3796")),m=s("fa7e"),v=s("986e"),h=s("ed08"),_=s("32e9"),b={name:"Step1",inject:["suiWalletStateTest","onCopySuccess"],components:{UploadExcelComponent:f["a"],Editor:m["a"]},data:function(){return{checkLoading:!1,contractName:"SUI",balance:{},tokenInfo:{},repeat:!1,repeat_status:!1,loading_address:!1,stepActive:1,addressOptions:[],addressOptionsCopy:[],isInput:!0,editorValue:"",queueList:[],errInfoList:[]}},computed:Object(i["a"])({},Object(o["b"])(["isPc","isZh","suiNetwork","suiAccount","suiWallet","suiClient"])),watch:{editorValue:function(e){this.onEditCheck(e)},contractName:function(e){e||(this.addressOptions=this.addressOptionsCopy)},suiAccount:{immediate:!0,handler:function(e){""!==e&&this.init()}}},created:function(){v["h"].$on(v["g"],(function(e){}))},mounted:function(){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{checkReg:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,n,a,r,i,o,u,c,l,f,m,v,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=e.editorValue.split("\n"),n=[],a=[],r=!0,i=!1,t.prev=5,u=Object(d["a"])(s.entries());case 7:return t.next=9,u.next();case 9:return c=t.sent,r=c.done,t.next=13,c.value;case 13:if(l=t.sent,r){t.next=21;break}f=l,m=Object(p["a"])(f,2),v=m[0],m[1],h=s[v].trim().split(","),a.push(h);case 18:r=!0,t.next=7;break;case 21:t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](5),i=!0,o=t.t0;case 27:if(t.prev=27,t.prev=28,r||null==u.return){t.next=32;break}return t.next=32,u.return();case 32:if(t.prev=32,!i){t.next=35;break}throw o;case 35:return t.finish(32);case 36:return t.finish(27);case 37:e.queueList=a,e.errInfoList=n;case 39:case"end":return t.stop()}}),t,null,[[5,23,27,37],[28,,32,36]])})))()},init:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(_["b"])(e.suiAccount);case 2:return s=t.sent,e.tokenInfo=Object.assign({},s[0],{decimals:9,symbol:"SUI"}),n=s.map((function(e){var t=e.coinType.split("::");return{symbol:t[t.length-1],coinType:e.coinType,coinObjectId:e.coinObjectId,coinObjectIdArr:e.coinObjectIdArr,balance:e.balance}})),e.addressOptions=n,e.addressOptionsCopy=n,t.next=9,Object(h["z"])(200);case 9:e.contractName="0x2::sui::SUI";case 10:case"end":return t.stop()}}),t)})))()},onSelectChange:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var n,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return console.log("onSelectChange"),t.tokenInfo.balance=-1,n=t.addressOptions.find((function(t){return t.coinType===e})),t.onEditCheck(t.editorValue),s.next=6,window.suiProvider.getCoinMetadata({coinType:n.coinType});case 6:a=s.sent,t.tokenInfo=Object.assign({},n,a),t.addressOptions=t.addressOptionsCopy;case 9:case"end":return s.stop()}}),s)})))()},onExample:function(){var e=["0x92db03280a3490d32686a5ecb2404dce17e6b0a65b7411194a56cf682c223de2,0.0005","0x36a209b2865f18a0ce4d04335a45458cfafb614c569cd1bcfddd5160d0c5266b,0.0005"];this.editorValue=e.join("\n")},onBulkAmount:function(){var e=this;this.$prompt(this.$t("editorInput.auto_amount"),this.$t("editorInput.inputAlert_5"),{confirmButtonText:this.$t("editorInput.confirm"),cancelButtonText:this.$t("editorInput.close")}).then((function(t){var s=t.value,n=e.editorValue.split("\n"),a="";for(var r in n){var i=n[r].split(",");i[1]&&(n[r]=i[0]),parseInt(r)+1===n.length?a+=n[r]+","+s:a+=n[r]+","+s+"\n"}e.editorValue=a})).catch((function(){}))},onNext:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.suiAccount){t.next=3;break}return e.$message.error(e.$t("common.connect_wallet_tips")),t.abrupt("return");case 3:if(""!==e.editorValue){t.next=6;break}return e.$message.error(e.$t("editorInput.inputAlert_6")),t.abrupt("return");case 6:if(e.tokenInfo&&!(e.tokenInfo.balance<0)){t.next=9;break}return e.$message.error(e.$t("editorInput.select_token_tips")),t.abrupt("return");case 9:if(!(e.errInfoList.length>0)){t.next=11;break}return t.abrupt("return");case 11:e.$emit("onStep1Confirm",{queueList:e.queueList,tokenInfo:e.tokenInfo});case 12:case"end":return t.stop()}}),t)})))()},onDeleteErr:function(){var e=this,t="",s=[];for(var n in this.queueList)s.push(this.queueList[n]);this.queueList=s,this.queueList.forEach((function(s,n){var a=n===e.queueList.length-1?"":"\n";t+=e.queueList[n].join()+a})),this.editorValue=t},onRepeat:function(e){var t=this,s="",n=[],a=[];for(var r in this.queueList)n[this.queueList[r][0]]&&1===e?delete this.queueList[r]:n[this.queueList[r][0]]&&2===e?(a[this.queueList[r][0]]+=parseFloat(this.queueList[r][1]),delete this.queueList[r]):(n[this.queueList[r][0]]=!0,2===e&&(a[this.queueList[r][0]]=parseFloat(this.queueList[r][1]),delete this.queueList[r]));if(2===e)for(var i in a)this.queueList.push([i,a[i]]);3===e&&(this.repeat_status=!0,this.repeat=!1,this.errInfoList=[]);var o=[];for(var u in this.queueList)o.push(this.queueList[u]);this.queueList=o,this.queueList.forEach((function(e,n){var a=n===t.queueList.length-1?"":"\n";s+=t.queueList[n].join()+a})),this.editorValue=s},onEditCheck:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var n,a,r,i,o,u,c,l,f,m,v,h,_,b,w,x,g;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(t.suiAccount){s.next=2;break}return s.abrupt("return",!1);case 2:if(""!==e){s.next=7;break}return t.queueList=[],t.errInfoList=[],t.repeat_status=!1,s.abrupt("return");case 7:t.checkLoading=!0,n=e.split("\n"),t.allListArr=n,a=[],r=[],i=[],o=!1,u=!1,c=!0,l=!1,s.prev=17,m=Object(d["a"])(n.entries());case 19:return s.next=21,m.next();case 21:return v=s.sent,c=v.done,s.next=25,v.value;case 25:if(h=s.sent,c){s.next=49;break}if(_=h,b=Object(p["a"])(_,2),w=b[0],b[1],x=parseInt(w)+1,g=n[w].trim().split(","),2!==g.length){s.next=41;break}if(g[0].startsWith("0x")&&66===g[0].length){s.next=35;break}return o=!0,r.push(t.$t("editorInput.inputAlert_7",{line:x,str:g[0]})),s.abrupt("continue",46);case 35:if(!(parseFloat(g[1])<0)&&parseFloat(g[1])){s.next=39;break}return o=!0,r.push(t.$t("editorInput.inputAlert_8",{line:x,str:g[1]})),s.abrupt("continue",46);case 39:s.next=44;break;case 41:return o=!0,r.push(t.$t("editorInput.inputAlert_9",{line:x,str:g[0]})),s.abrupt("continue",46);case 44:i[g[0]]&&!t.repeat_status?(u=!0,o=!0,r.push(t.$t("editorInput.inputAlert_11",{line:x,str:g[0]}))):i[g[0]]=!0,a.push(g);case 46:c=!0,s.next=19;break;case 49:s.next=55;break;case 51:s.prev=51,s.t0=s["catch"](17),l=!0,f=s.t0;case 55:if(s.prev=55,s.prev=56,c||null==m.return){s.next=60;break}return s.next=60,m.return();case 60:if(s.prev=60,!l){s.next=63;break}throw f;case 63:return s.finish(60);case 64:return s.finish(55);case 65:return t.repeat=u,t.queueList=a,t.errInfoList=r,t.checkLoading=!1,s.abrupt("return",o);case 70:case"end":return s.stop()}}),s,null,[[17,51,55,65],[56,,60,64]])})))()},handleFilterAddress:function(e){var t=e.trim().toLowerCase();t?(this.addressOptions=this.addressOptionsCopy.filter((function(e){return-1!==e.coinType.toLowerCase().indexOf(t)||-1!==e.symbol.toLowerCase().indexOf(t)})),this.contractName=t):this.addressOptions=this.addressOptionsCopy},onToggleInputType:function(){this.isInput=!this.isInput},beforeUpload:function(e){var t=e.size/1024/1024<10;return!!t||(this.$message({message:"Please do not upload files larger than 10m in size.",type:"warning"}),!1)},onChangeEditor:function(e){this.editorValue=e},onUploadFileSuccess:function(e){var t=e.results,s=(e.header,"");t.forEach((function(e,n){var a=n===t.length-1?"":"\n";s+="".concat(e.Address,",").concat(e.Amount).concat(a)})),this.editorValue=s,this.onToggleInputType()}}},w=b,x=(s("956f"),s("5d22")),g=Object(x["a"])(w,c,l,!1,null,"278688c2",null),k=g.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.tokenInfo?s("div",{staticClass:"step2"},[s("div",{staticClass:"label"},[s("span",[e._v(e._s(e.$t("editorInput.addressList")))])]),s("el-table",{staticStyle:{width:"100%","border-radius":"10px"},attrs:{data:e.tableData,height:e.tableData.length>7?250:null}},[s("el-table-column",{attrs:{prop:"address",label:"Address",width:e.isPc?"410px":"auto"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[s("span",[s("a",{attrs:{href:e.$ethUtils.getScanLink("sui","address",n.address),target:"_blank"}},[e._v(" "+e._s(e._f("miniAddress")(n.address))+" ")])])]}}],null,!1,3679206952)}),s("el-table-column",{attrs:{prop:"amount",label:"Amount"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[e._v(" "+e._s(s.amount)+" "+e._s(e.tokenInfo.symbol)+" ")]}}],null,!1,2479941859)}),s("el-table-column",{attrs:{width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.handleDelete(t.$index,t.row)}}},[e._v(" "+e._s(e.$t("editorInput.remove"))+" ")])]}}],null,!1,2294174239)})],1),s("div",{staticClass:"label"},[s("span",[e._v(e._s(e.$t("editorInput.summary")))])]),s("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.step2_loading,expression:"step2_loading"}],staticClass:"abstract"},[s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.address_count))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("editorInput.total_address_num")))])]),s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.send_amount)+" "+e._s(e.tokenInfo.symbol))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("editorInput.total_send_token_num")))])]),s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.send_tx))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("editorInput.total_send_tx_num")))])]),s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.tokenBalance)+" "+e._s(e.tokenInfo.symbol))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("editorInput.you_balance",{symbol:e.tokenInfo.symbol})))])]),s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.fees)+" "+e._s("SUI"))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("editorInput.operation_fee")))])]),s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.remaining)+" "+e._s(e.tokenInfo.symbol))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("editorInput.remaining")))])]),e.isNativeToken?e._e():s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.suiBalance)+" "+e._s("SUI"))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("editorInput.you_balance",{symbol:"SUI"})))])]),e.isNativeToken?e._e():s("li",[s("span",{staticClass:"number"},[e._v(e._s(e.suiBalance-e.suiConfig["multiSender_fees"][e.suiNetwork])+" "+e._s("SUI"))]),s("span",{staticClass:"remark"},[e._v(e._s(e.$t("editorInput.remaining")))])])]),s("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.approve_status,expression:"approve_status"}],staticClass:"tips",attrs:{title:e.$t("editorInput.inputAlert_10"),type:"success",closable:!1,effect:"dark"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errInfoList.length>0,expression:"errInfoList.length > 0"}],staticClass:"errInfoBox"},[s("ul",e._l(e.errInfoList,(function(t){return s("li",{key:t},[e._v(e._s(t))])})),0)]),s("div",{staticClass:"btnBox"},[s("el-button",{attrs:{size:"large",type:"primary",icon:"el-icon-arrow-left"},on:{click:e.onPrev}}),s("el-button",{attrs:{loading:e.step2_loading,size:"large",type:"primary",disabled:e.isDisabledSend},on:{click:e.onNext}},[e._v(e._s(e.$t("editorInput.next")))])],1)],1):e._e()},y=[],I=(s("65f0"),s("05d6"),s("b893")),C=s("7921"),O=s.n(C),S={name:"Step2",components:{},props:{queueList:{type:Array,required:!0},tokenInfo:{type:Object,required:!0},stepActive:{type:Number,required:!0}},data:function(){return{suiConfig:_["a"],web3:{},send_tx:0,approve_status:!1,send_amount:0,address_count:0,step2_loading:!1,allowance_select:2,suiBalance:null,tokenBalance:0,isDisabledSend:!1,errInfoList:[],arrayLimit:200,tableData:[],sliderMarks:{}}},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["isPc","suiNetwork","suiAccount","suiWallet","suiClient"])),{},{remaining:function(){var e=this.isNativeToken?_["a"]["multiSender_fees"][this.suiNetwork]:0;return Number(Number(this.tokenBalance-this.send_amount-e).toFixed(5))},fees:function(){return _["a"]["multiSender_fees"][this.suiNetwork]},isNativeToken:function(){return"0x2::sui::SUI"===this.tokenInfo.coinType}}),watch:{step2_loading:function(e){v["h"].$emit(v["g"],e)},stepActive:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(1!==e){s.next=4;break}return t.propQueueListl=t.queueList,s.next=4,t.init();case 4:case"end":return s.stop()}}),s)})))()}},created:function(){},mounted:function(){},methods:{handleDelete:function(e,t){var s=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=s.propQueueListl.filter((function(e){return e[0]!==t.address})),s.propQueueListl=n,s.init();case 3:case"end":return e.stop()}}),e)})))()},init:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.errInfoList=[],e.tableData=[],e.isDisabledSend=!1,e.step2_loading=!0,t.next=6,e.onUpdateBalance();case 6:return t.next=8,window.suiProvider.getBalance({owner:e.suiAccount,coinType:"0x2::sui::SUI"});case 8:for(n in s=t.sent,e.suiBalance=new O.a(s.totalBalance).div(Math.pow(10,9)).toFixed(),e.propQueueListl)e.tableData.push({address:e.propQueueListl[n][0],amount:e.propQueueListl[n][1]});for(r in e.address_count=e.propQueueListl.length,e.arrayLimit=30,e.send_tx=Math.ceil(e.propQueueListl.length/e.arrayLimit),a=0,e.propQueueListl)a=I["a"].numAdd(a,e.propQueueListl[r][1]);e.send_amount=a,e.step2_loading=!1,e.tokenBalance<e.send_amount+e.fees&&(e.isDisabledSend=!0,e.errInfoList.push(e.$t("editorInput.insufficient_balance",{symbol:e.tokenInfo.symbol,amount:e.send_amount+e.fees})));case 19:case"end":return t.stop()}}),t)})))()},onNext:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$emit("onStep2Confirm",{queueList:e.propQueueListl,send_tx:e.send_tx,arrayLimit:e.arrayLimit});case 1:case"end":return t.stop()}}),t)})))()},onPrev:function(){this.$emit("onStep2Prev")},onUpdateBalance:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.tokenBalance=new O.a(e.tokenInfo.balance).div(Math.pow(10,e.tokenInfo.decimals)).toFixed();case 1:case"end":return t.stop()}}),t)})))()}}},$=S,N=(s("017d"),Object(x["a"])($,L,y,!1,null,"6ca013cb",null)),A=N.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step3"},[s("div",{staticClass:"label"},[s("span",[e._v(" "+e._s(e.$t("editorInput.step3_alert_1",{a:e.send_status.allCount,b:e.send_status.remaining})))]),s("span",{directives:[{name:"show",rawName:"v-show",value:0===e.send_status.remaining&&!e.all_send,expression:"send_status.remaining === 0 && !all_send"}]},[e._v(e._s(e.$t("editorInput.step3_alert_2")))])]),s("DealList",{attrs:{list:e.dealList}}),s("el-alert",{directives:[{name:"show",rawName:"v-show",value:0===e.send_status.remaining&&e.all_send,expression:"send_status.remaining === 0 && all_send"}],staticClass:"tips",attrs:{title:e.$t("editorInput.step3_alert_3"),type:"success",closable:!1,effect:"dark"}}),s("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.waitMetamask,expression:"waitMetamask"}],staticClass:"tips",attrs:{type:"success",closable:!1,center:"",effect:"dark"}},[s("i",{staticClass:"el-icon-loading icon"}),e._v(e._s(e.$t("editorInput.wait_confirm")))]),s("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.send_close,expression:"send_close"}],staticClass:"tips",attrs:{title:e.$t("editorInput.step3_alert_4"),closable:!1,type:"error"}}),s("div",{staticClass:"btnBox"},[s("el-button",{attrs:{size:"large",type:"primary",icon:"el-icon-arrow-left"},on:{click:e.onPrev}}),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.send_close,expression:"send_close"}],attrs:{size:"large",type:"primary"},on:{click:function(t){return e.onSend(e.now_slice)}}},[e._v(e._s(e.$t("editorInput.step3_alert_5",{d:e.now_slice+1})))])],1),s("BatchSenderResultList",{attrs:{"all-list":e.allList,"error-list":[],"success-list":e.successList}}),s("div",{staticClass:"faqBox"},[s("p",{staticClass:"faqTitle"},[e._v(e._s(e.$t("editorInput.faq_title")))]),s("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[s("el-collapse-item",{attrs:{title:e.$t("suiOneToMore.faq1_title"),name:"1"}},[e._v(" "+e._s(e.$t("suiOneToMore.faq1_content"))+" ")])],1)],1)],1)},q=[],T=s("22e1"),R=s("e7e7"),B=(s("4a32"),s("05e4")),E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{directives:[{name:"show",rawName:"v-show",value:e.list.length>0,expression:"list.length > 0"}],staticClass:"dealList"},e._l(e.list,(function(t,n){return s("li",{key:t.address},[s("div",{staticClass:"left"},[s("span",{staticClass:"index"},[e._v(e._s(n+1))]),s("a",{staticClass:"address",attrs:{target:"_blank",href:e.$ethUtils.getScanLink("sui","tx",t.address)}},[e._v(e._s(t.address))])]),s("div",{staticClass:"right"},[s("span",{staticClass:"status"},[0===t.status?s("i",{staticClass:"el-icon-loading"}):1===t.status?s("i",{staticClass:"el-icon-success"}):2===t.status?s("i",{staticClass:"el-icon-error",staticStyle:{color:"#F05252"}}):e._e()])])])})),0)},P=[],M={props:{list:{type:Array,required:!0}},data:function(){return{}},computed:Object(i["a"])({},Object(o["b"])(["isPc","aptosNetwork","aptosAccount","aptosWallet","aptosClient"])),created:function(){},mounted:function(){},methods:{}},F=M,U=(s("2ff9"),Object(x["a"])(F,E,P,!1,null,"7603e868",null)),V=U.exports,z=s("23ca"),D={name:"Step3",components:{DealList:V,BatchSenderResultList:z["a"]},props:{send_tx:{type:Number,required:!0},arrayLimit:{type:Number,required:!0},tokenInfo:{type:Object,required:!0},queueList:{type:Array,required:!0},stepActive:{type:Number,required:!0}},data:function(){return{activeNames:["1"],dealList:[],send_close:!1,successList:[],send_status:{allCount:1,remaining:1},queueArr:[],all_send:!1,now_slice:0,web3:{},waitMetamask:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["isPc","suiNetwork","suiAccount","suiWallet","suiClient"])),{},{allList:function(){return this.queueList.map((function(e,t){return{address:e[0],amount:e[1]}}))},multiSenderFee:function(){return _["a"]["multiSender_fees"][this.suiNetwork]}}),watch:{stepActive:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(2!==e){s.next=3;break}return s.next=3,t.init();case 3:case"end":return s.stop()}}),s)})))()}},created:function(){},mounted:function(){},methods:{forSend:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=0;case 1:if(!(s<e.queueArr.length)){t.next=12;break}if(!(s<e.now_slice)){t.next=4;break}return t.abrupt("continue",9);case 4:return t.next=6,e._multisend(s);case 6:if(n=t.sent,n){t.next=9;break}return t.abrupt("break",12);case 9:s++,t.next=1;break;case 12:0===e.send_status.remaining&&(e.all_send=!0);case 13:case"end":return t.stop()}}),t)})))()},init:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dealList=[],e.queueArr=Object(h["A"])(e.queueList,e.arrayLimit),e.send_status={allCount:e.queueArr.length,remaining:e.queueArr.length},e.successList=[],e.send_close=!1,e.all_send=!1,e.now_slice=0,t.next=9,e.forSend();case 9:case"end":return t.stop()}}),t)})))()},onPrev:function(){this.send_close=!1,this.$emit("onStep3Prev")},onSend:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.send_close=!1,e.next=3,t.forSend();case 3:case"end":return e.stop()}}),e)})))()},batchTransfer:function(e,t,s){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var r,i,o,u,c,l,d,f,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=new B["d"],console.log(e),"0x2::sui::SUI"===e.coinType?(i=r.splitCoins(r.gas,s.map((function(e){return r.pure(e)}))),t.forEach((function(e,t){r.transferObjects([i[t]],r.pure(e))}))):(o=r.object(e.coinObjectId),e.coinObjectIdArr.length>0&&r.mergeCoins(o,e.coinObjectIdArr.map((function(e){return r.object(e)}))),u=r.splitCoins(o,s.map((function(e){return r.pure(e)}))),t.forEach((function(e,t){r.transferObjects([u[t]],r.pure(e))}))),c=r.splitCoins(r.gas,[r.pure(n.multiSenderFee*Math.pow(10,9))]),l=Object(p["a"])(c,1),d=l[0],f=_["a"]["multiSender_fees_address"][n.suiNetwork],r.transferObjects([d],r.pure(f,"address")),a.next=8,window.suiWallet.signAndExecuteTransactionBlock({transactionBlock:r,options:{showEffects:!0,showObjectChanges:!0,showEvents:!0}},"WaitForLocalExecution");case 8:return m=a.sent,a.abrupt("return",m.digest);case 10:case"end":return a.stop()}}),a)})))()},_multisend:function(){var e=arguments,t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var n,a,r,i,o,u;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:0,a=t.queueArr[n].map((function(e,t){return{address:e[0],amount:e[1]}})),s.prev=2,t.waitMetamask=!0,r=a.map((function(e){return e.address})),i=a.map((function(e){var s=new O.a(e.amount).times(Math.pow(10,t.tokenInfo.decimals)).toFixed(0);return s.toString()})),s.next=8,t.batchTransfer(t.tokenInfo,r,i);case 8:return o=s.sent,console.log(o,"txHash111"),t.dealList.push({address:o,status:1}),o&&(t.successList=[].concat(Object(R["a"])(t.successList),Object(R["a"])(a))),t.send_status={allCount:t.queueArr.length,remaining:t.queueArr.length-(n+1)},s.abrupt("return",!0);case 16:return s.prev=16,s.t0=s["catch"](2),u="","string"===typeof s.t0?u=s.t0:"object"===Object(T["a"])(s.t0)&&(u=s.t0.message),t.send_close=!0,t.$message.error(u),s.abrupt("return",!1);case 23:return s.prev=23,t.waitMetamask=!1,t.now_slice=n,s.finish(23);case 27:case"end":return s.stop()}}),s,null,[[2,16,23,27]])})))()}}},Q=D,W=(s("0d48"),Object(x["a"])(Q,j,q,!1,null,"468d4624",null)),H=W.exports,Z="multiSender",J={name:Z,components:{OneToMoreHeader:u["a"],Step1:k,Step2:A,Step3:H},data:function(){return{stepActive:0,send_tx:0,arrayLimit:0,tokenInfo:{},c_address:"",address:"",currentFee:0,queueList:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["isPc","suiNetwork","suiAccount","suiWallet","suiClient"])),{},{oneToMoreHeaderTitle:function(){return this.$t("common.welcomeOneToMore",{appName:this.$shortName,chainName:"Sui"})},supportNetworks:function(){return[{icon:"",name:"mainnet",symbol:"mainnet".toLowerCase(),value:"mainnet"},{icon:"",name:"devnet",symbol:"devnet".toLowerCase(),value:"devnet"},{icon:"",name:"testnet",symbol:"testnet".toLowerCase(),value:"testnet"}]}}),watch:{},created:function(){},mounted:function(){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{onStep1Confirm:function(e){var t=e.queueList,s=e.tokenInfo;this.queueList=t,this.tokenInfo=s,this.stepActive=1},onStep2Confirm:function(e){var t=e.queueList,s=e.send_tx,n=e.arrayLimit,a=e.currentFee;this.queueList=t,this.send_tx=s,this.arrayLimit=n,this.currentFee=a,this.stepActive=2},onStep2Prev:function(){this.stepActive=0},onStep2Next:function(){this.stepActive=2},onStep3Prev:function(){this.stepActive=1},onChangeEditor:function(e){this.editorValue=e}}},G=J,K=(s("7f46"),Object(x["a"])(G,n,a,!1,null,"1657832d",null));t["default"]=K.exports},"3f4c":function(e,t,s){},6261:function(e,t,s){},"6f75":function(e,t,s){},7680:function(e,t,s){},"7f46":function(e,t,s){"use strict";s("3f4c")},"956f":function(e,t,s){"use strict";s("a91d")},a62a:function(e,t,s){},a91d:function(e,t,s){}}]);