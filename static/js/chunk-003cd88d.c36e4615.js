(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-003cd88d"],{"060a":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"li"},[s("div",{staticClass:"imgBox"},[s("el-badge",{staticClass:"item",attrs:{value:e.index}},[s("img",{attrs:{src:e.img}})])],1),s("div",{staticClass:"inputBox"},[s("el-input",{attrs:{placeholder:"",disabled:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}},[s("template",{slot:"prepend"},[e._v(" "+e._s(e.$t("common.address"))+" ")]),s("template",{slot:"append"},[s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.address,expression:"address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}]},[e._v(" "+e._s(e.$t("common.copy"))+" ")])],1)],2),e.address2?s("el-input",{attrs:{placeholder:"",disabled:""},model:{value:e.address2,callback:function(t){e.address2=t},expression:"address2"}},[s("template",{slot:"prepend"},[e._v(" ERC20 "+e._s(e.$t("common.address"))+" ")]),s("template",{slot:"append"},[s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.address2,expression:"address2",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}]},[e._v(" "+e._s(e.$t("common.copy"))+" ")])],1)],2):e._e(),s("el-input",{attrs:{placeholder:"",disabled:""},model:{value:e.keys,callback:function(t){e.keys=t},expression:"keys"}},[s("template",{slot:"prepend"},[e._v(" "+e._s(e.$t("common.key"))+" ")]),s("template",{slot:"append"},[s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.keys,expression:"keys",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}]},[e._v(" "+e._s(e.$t("common.copy"))+" ")])],1)],2),e.base58?s("el-input",{attrs:{placeholder:"",disabled:""},model:{value:e.base58,callback:function(t){e.base58=t},expression:"base58"}},[s("template",{slot:"prepend"},[e._v(" "+e._s(e.$t("common.base58_key"))+" ")]),s("template",{slot:"append"},[s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.base58,expression:"base58",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}]},[e._v(" "+e._s(e.$t("common.copy"))+" ")])],1)],2):e._e(),s("el-input",{directives:[{name:"show",rawName:"v-show",value:""!==e.viewKey,expression:"viewKey !== ''"}],attrs:{placeholder:"",disabled:""},model:{value:e.viewKey,callback:function(t){e.viewKey=t},expression:"viewKey"}},[s("template",{slot:"prepend"},[e._v(" "+e._s(e.$t("common.viewKey"))+" ")]),s("template",{slot:"append"},[s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.viewKey,expression:"viewKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}]},[e._v(" "+e._s(e.$t("common.copy"))+" ")])],1)],2),s("el-input",{directives:[{name:"show",rawName:"v-show",value:""!==e.mnemonic,expression:"mnemonic !== ''"}],attrs:{placeholder:"",disabled:""},model:{value:e.mnemonic,callback:function(t){e.mnemonic=t},expression:"mnemonic"}},[s("template",{slot:"prepend"},[e._v(" "+e._s(e.$t("common.mnemonic"))+" ")]),s("template",{slot:"append"},[s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.mnemonic,expression:"mnemonic",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}]},[e._v(" "+e._s(e.$t("common.copy"))+" ")])],1)],2)],1)])},a=[],n=s("4833"),o=(s("6a61"),s("65f0"),{name:"KeyAddress",props:{address:{type:String,required:!0},address2:{type:String,required:!1},base58:{type:String,required:!1},keys:{type:String,required:!0},viewKey:{type:String,required:!1,default:""},mnemonic:{type:String,required:!1,default:""},img:{type:String,required:!0},index:{type:[Number,String],required:!1,default:""}},data:function(){return{}},mounted:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){},methods:{onCopySuccess:function(e){this.$message.success(this.$t("common.copySuccess"))},onCopyError:function(){this.$message.error(this.$t("common.copyError"))}}}),i=o,c=(s("fa1b"),s("5d22")),l=Object(c["a"])(i,r,a,!1,null,"1708fc5f",null);t["a"]=l.exports},"0812f":function(e,t,s){"use strict";s("9d3a")},3337:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"box"},[s("VanityOptionForm",{attrs:{form:e.form,running:e.running},on:{onStartGen:e.onStartGen,onStopGen:e.onStopGen}})],1),s("div",{staticClass:"box"},[s("InfoBox",{ref:"InfoBox",attrs:{form:e.form,status:e.status,"first-tick":e.firstTick}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:""!==e.result.address,expression:"result.address !== ''"}],staticClass:"box"},[s("KeyAddress",{attrs:{img:e.result.img,keys:e.result.privateKey,address:e.result.address}})],1)])},a=[],n=s("4833"),o=s("efe2"),i=(s("6a61"),s("37de"),s("1e34"),s("d51e"),s("c9f2"),{zh:{vanityAddressGenerator:{number:"数量:",title:"ETH单位转换",chain:"选择链",tableKey:"私钥",tableAddress:"地址",createBtn:"立即创建",exportBtn:"导出",case_sensitive:"是否区分大小写",mode:"前缀还是后缀",generate:"生成",threads:"线程(根据自身设备性能调整)",difficulty:"难度",probability:"可能性",speed:"速度",status:"状态",suffix:"后缀",prefix:"前缀",vanityOptions:"靓号生成配置",infoDesc:"钱包生成过程均在本地电脑完成，{appName}无法获取到任何信息",inputLabel:"输入你要生成的靓号字符串 比如: 00000",start:"生成",stop:"暂停",eth_hex_err:"靓号生成规则限制字符串: 0-9, A-F, a-f",no_supper_worker:"当前浏览器不支持此功能，请切换到Chrome浏览器",donation_alert:"生成靓号成功，祝大哥发财！"}},en:{vanityAddressGenerator:{number:"Number:",title:"ETthereum Unit Converter",chain:"Chain",tableKey:"Key",tableAddress:"tableAddress",createBtn:"Create",exportBtn:"export",case_sensitive:"Case Sensitive",mode:"Mode",generate:"Generate",threads:"Threads",difficulty:"Difficulty",probability:"probability",speed:"Speed",status:"Status",suffix:"Suffix",prefix:"Prefix",vanityOptions:"Vanity Generator Options",infoDesc:"Wallet generation process is completed in the local computer, {appName} can not get any information",inputLabel:"Enter your vanity string. ex: c0ffee",start:"Start",stop:"Stop",eth_hex_err:"Vanity must be hex. Allowed characters: 0-9, A-F, a-f.",no_supper_worker:"The current browser does not support this function. Switch to Chrome",donation_alert:"Vanity address create success!"}}});function c(){return new Worker(s.p+"static/js/vanity.3d6dcf3b.worker.js")}var l=s("060a"),d=s("5618"),u=s.n(d),p=s("a835"),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"optionBox"},[s("div",{staticClass:"info"},[s("div",{staticClass:"left"},[s("h5",[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"cool"}}),e._v(e._s(e.$t("vanityAddressGenerator.vanityOptions")))],1),s("p",{staticClass:"desc"},[e._v(e._s(e.$t("vanityAddressGenerator.infoDesc",{appName:e.$shortName})))])]),s("div",{staticClass:"right"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"certified"}})],1)]),s("el-form",{ref:"form",staticClass:"form",attrs:{"label-position":"top",rules:e.rules,model:e.form,"label-width":"160px"}},[e._e(),s("el-form-item",{attrs:{label:e.$t("vanityAddressGenerator.inputLabel"),prop:"hex"}},[s("el-input",{attrs:{size:"large",placeholder:e.form.suffix?e.$t("vanityAddressGenerator.suffix"):e.$t("vanityAddressGenerator.prefix"),disabled:e.running},model:{value:e.form.hex,callback:function(t){e.$set(e.form,"hex",t)},expression:"form.hex"}}),e.inputError?e._e():s("p",{staticClass:"demo"},[s("span",{staticClass:"label"},[e._v("E.g.")]),s("span",{staticClass:"value"},[e._v(e._s("xdc"===e.chainName?"xdc":"0x"))]),e.form.suffix?e._e():s("span",{staticClass:"value blue",domProps:{textContent:e._s(e.example.chosen)}}),s("span",{staticClass:"value",domProps:{textContent:e._s(e.example.random)}}),e.form.suffix?s("span",{staticClass:"value",domProps:{textContent:e._s(e.example.chosen)}}):e._e()])],1),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:e.$t("vanityAddressGenerator.case_sensitive")}},[s("el-radio-group",{model:{value:e.form.checksum,callback:function(t){e.$set(e.form,"checksum",t)},expression:"form.checksum"}},[s("el-radio",{attrs:{label:!0}},[e._v("YES")]),s("el-radio",{attrs:{label:!1}},[e._v("NO")])],1)],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:e.$t("vanityAddressGenerator.mode")}},[s("el-radio-group",{model:{value:e.form.suffix,callback:function(t){e.$set(e.form,"suffix",t)},expression:"form.suffix"}},[s("el-radio",{attrs:{label:!0}},[e._v(e._s(e.$t("vanityAddressGenerator.suffix")))]),s("el-radio",{attrs:{label:!1}},[e._v(e._s(e.$t("vanityAddressGenerator.prefix")))])],1)],1)],1)],1),s("el-form-item",{attrs:{label:e.$t("vanityAddressGenerator.threads")}},[s("el-input-number",{staticClass:"inputNum",staticStyle:{width:"100%"},attrs:{disabled:e.running,min:1,max:999},model:{value:e.form.threads,callback:function(t){e.$set(e.form,"threads",t)},expression:"form.threads"}})],1)],1),s("div",{staticClass:"btnBox"},[s("el-button",{staticClass:"btn",attrs:{loading:e.running,type:"primary"},on:{click:e.onStartGen}},[e._v(e._s(e.$t("vanityAddressGenerator.start")))]),s("el-button",{staticClass:"btn",attrs:{disabled:!e.running,type:"info"},on:{click:e.onStopGen}},[e._v(e._s(e.$t("vanityAddressGenerator.stop")))])],1)],1)},h=[],f=(s("7479"),s("4a32"),s("ed08")),v="vanityAddressGenerator",b={props:{running:{type:Boolean,default:!1},form:{type:Object}},data:function(){return{rules:{},chainName:""}},computed:{inputError:function(){return!this.isValidHex(this.form.hex)},example:function(){if(this.inputError)return"N/A";for(var e=this.form.checksum?this.form.hex:this.mixCase(this.form.hex),t="",s=0;s<40-this.form.hex.length;s++)t+=this.mixCase(Math.floor(16*Math.random()).toString(16));return{random:t,chosen:e}}},watch:{},created:function(){this.rules={hex:[{validator:this.validateHex,trigger:"change"}]},this.chainList=Object(f["i"])(v),this.chainName=this.$route.meta.chainName},methods:{onStartGen:function(){this.running||this.inputError?this.$message.error(this.$t("vanityAddressGenerator.eth_hex_err")):this.$emit("onStartGen")},onStopGen:function(){this.$emit("onStopGen")},validateHex:function(e,t,s){this.isValidHex(t)?s():s(new Error(this.$t("vanityAddressGenerator.eth_hex_err")))},onChangeChain:function(e){this.$message.success(this.$t("common.switchChainSuccess",{chain:e.toUpperCase()})),this.$router.replace({path:"/".concat(v,"/").concat(e),query:this.$route.query})},isValidHex:function(e){return!e.length||/^[0-9A-F]+$/g.test(e.toUpperCase())},mixCase:function(e){for(var t="",s=0;s<e.length;s++){var r=e.substr(s,1);t+=Math.random()<.5?r.toUpperCase():r.toLowerCase()}return t}}},y=b,x=(s("b492"),s("5d22")),g=Object(x["a"])(y,m,h,!1,null,"251e336c",null),_=g.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"panel"},[s("ul",{staticClass:"ul"},[s("li",[s("span",{staticClass:"label"},[e._v(e._s(e.$t("vanityAddressGenerator.difficulty")))]),s("span",{staticClass:"value",domProps:{textContent:e._s(e.formatNum(e.difficulty))}},[e._v("1")])]),s("li",[s("span",{staticClass:"label"},[e._v(e._s(e.$t("vanityAddressGenerator.generate")))]),s("span",{staticClass:"value",domProps:{textContent:e._s(e.formatNum(e.count)+(1===e.count?" address":" addresses"))}},[e._v("0 addresses")])]),s("li",[s("span",{staticClass:"label"},[e._v("50% "+e._s(e.$t("vanityAddressGenerator.probability")))]),s("span",{staticClass:"value",domProps:{textContent:e._s(e.probability50)}},[e._v("0 addresses")])]),s("li",[s("span",{staticClass:"label"},[e._v(e._s(e.$t("vanityAddressGenerator.speed")))]),s("span",{staticClass:"value"},[e._v(" "+e._s(e.speed)+" addr/s")])]),s("li",[s("span",{staticClass:"label"},[e._v(e._s(e.$t("vanityAddressGenerator.status")))]),s("span",{staticClass:"value"},[e._v(" "+e._s(e.status)+" ")])])]),s("div",{staticClass:"progressBox"},[s("el-progress",{attrs:{"text-inside":!0,"stroke-width":26,percentage:e.probability}})],1)])},C=[],k=(s("65f0"),{props:{form:Object,status:String,firstTick:Number},data:function(){return{speed:0,count:0}},computed:{difficulty:function(){if(this.inputError)return"N/A";var e=Math.pow(16,this.form.hex.length);return this.form.checksum?e*Math.pow(2,this.form.hex.replace(/[^a-f]/gi,"").length):e},probability50:function(){return this.inputError?"N/A":this.formatNum(Math.floor(Math.log(.5)/Math.log(1-1/this.difficulty)))+" addresses"},probability:function(){var e=function(e,t){return 1-Math.pow(1-1/e,t)};return Math.round(1e4*e(this.difficulty,this.count))/100}},watch:{"form.hex":function(){this.count=0},"form.checksum":function(){this.count=0}},created:function(){},methods:{emitEvent:function(e){this.count+=e>0?e:-this.count,this.speed=e>0?Math.floor(1e3*this.count/(performance.now()-this.firstTick)):0},formatNum:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}}),$=k,S=(s("d8be"),Object(x["a"])($,w,C,!1,null,"698505b2",null)),N=S.exports,G=s("52c1");s.p="/";var E="vanityAddressGenerator",A={name:E,inject:["onCanCoffee"],components:{VanityOptionForm:_,InfoBox:N,KeyAddress:l["a"]},data:function(){return{running:!1,status:"Waiting",workers:[],cores:0,result:{address:"",privateKey:"",img:""},firstTick:null,error:null,form:{hex:"",checksum:!0,suffix:!1,threads:2}}},computed:Object(o["a"])(Object(o["a"])({},Object(G["b"])(["isPc","account","chainId"])),{},{chainName:function(){return p["a"].chainIdToChainName(parseInt(this.chainId))}}),watch:{"form.threads":function(){this.running||this.initWorkers()}},created:function(){this.$i18n.getLocaleMessage("en")[E]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh)),this.initWorkers(),window["benchmark"]=this.benchmark,this.$root.$on("event",(function(e){window["umami"]&&window["umami"].trackEvent(e,"click")}))},methods:{displayResult:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.$refs.InfoBox.emitEvent(e.attempts),t.result.address=e.address,r=t.$route.meta.chainName,"xdc"===r&&(t.result.address=e.address.replace("0x","xdc")),t.result.privateKey=e.privKey,s.next=7,u.a.toDataURL(e.address);case 7:t.result.img=s.sent,t.status="Success",t.onCanCoffee({from:t.account,to:"0x11111111686b45EB94D9688F715815fc0CC0e5Ec",chain:t.chainName,title:t.$t("vanityAddressGenerator.donation_alert")});case 10:case"end":return s.stop()}}),s)})))()},clearResult:function(){this.result.address="",this.result.privateKey="",this.$refs.InfoBox.emitEvent(-1)},initWorkers:function(){var e=this;if(this.workers.length!==this.form.threads)if(this.workers.length>this.form.threads){for(var t=this.form.threads;t<this.workers.length;t++)this.workers[t].terminate();this.workers=this.workers.slice(0,this.form.threads)}else for(var s=this.workers.length;s<this.form.threads;s++)try{this.workers[s]=new c,this.workers[s].onmessage=function(t){return e.parseWorkerMessage(t.data)}}catch(r){this.error=r,this.status="Error",console.error(this.error);break}},parseWorkerMessage:function(e){return e.error?(this.onStopGen(),this.error=e.error,this.status="Error",void console.error(this.error)):e.address?(this.onStopGen(),this.displayResult(e)):void this.$refs.InfoBox.emitEvent(e.attempts)},onStartGen:function(){if(window.Worker){this.clearResult(),this.running=!0;for(var e=0;e<this.workers.length;e++)this.workers[e].postMessage(this.form);this.status="Running",this.firstTick=performance.now()}else this.$message.error(this.$t("vanityAddressGenerator.no_supper_worker"))},onStopGen:function(){this.running=!1,this.status="Stopped";for(var e=0;e<this.workers.length;e++)this.workers[e].terminate();this.workers=[],this.initWorkers()},benchmark:function(e){e=e||1e4;var t=500,s=new c,r=0,a=[],n=[],o=function(e,t){return Math.round(1e3*e/t)};s.onmessage=function(){a.push(performance.now()),1!==a.length&&(n.push(a[a.length-1]-a[a.length-2]),r+=t,r>=e&&(console.info("\nSpeed range: "+o(t,Math.max.apply(Math,n))+" - "+o(t,Math.min.apply(Math,n))+" addr/s"),console.info("Average: "+o(r,a[a.length-1]-a[0])+" addr/s"),s.terminate()))};var i={checksum:!0,hex:"f".repeat(5),suffix:!1};console.info("Starting benchmark with 1 core..."),s.postMessage(i)}}},M=A,K=(s("0812f"),Object(x["a"])(M,r,a,!1,null,"2da7ebc4",null));t["default"]=K.exports},"5bfa":function(e,t,s){},"5c3b":function(e,t,s){},"9d3a":function(e,t,s){},b492:function(e,t,s){"use strict";s("5c3b")},c9f2:function(e,t,s){var r=s("c194"),a=s("5960");r({target:"String",proto:!0},{repeat:a})},cc16:function(e,t,s){},d8be:function(e,t,s){"use strict";s("cc16")},fa1b:function(e,t,s){"use strict";s("5bfa")}}]);