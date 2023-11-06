(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11b86fad"],{"1f50":function(e,t,a){"use strict";(function(e){var r=a("4833"),n=(a("96e6"),a("7479"),a("4a32"),a("37de"),a("1e34"),a("6a61"),a("20bb")),s=a("85d4"),i=a("8feb"),o=a.n(i),d=a("be70"),c=a.n(d),u=a("4672"),l=a.n(u),h=a("7921"),f=a.n(h),p="defi";t["a"]={name:"Defi",data:function(){return{searchInput:"",res:"",Balance:"",rpc:"https://rpc.ankr.com/bsc",id:56,formAddress:"",toAddress:"",sendamount:"",amount:1,gwei:100,time:"",stime:1e3,icon:""}},created:function(){this.$i18n.getLocaleMessage("en")[p]||(this.$i18n.mergeLocaleMessage("en",n["a"].en),this.$i18n.mergeLocaleMessage("zh",n["a"].zh))},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.icon="coin-heco";case 1:case"end":return t.stop()}}),t)})))()},methods:{onSearch:function(){if(""===this.rpc)return this.$message.error("Rpc cannot be empty"),!1;if(""===this.stime)return this.$message.error("Monitoring frequency cannot be empty"),!1;if(""===this.id)return this.$message.error("Chain Id cannot be empty"),!1;if(""===this.gwei)return this.$message.error("Gwei cannot be empty"),!1;if(""===this.amount)return this.$message.error("The trigger value cannot be empty"),!1;if(""===this.toAddress)return this.$message.error("Receiving address cannot be empty"),!1;if(""===this.searchInput)return this.$message.error("The private key cannot be empty"),!1;if(!l.a.isValidAddress(this.toAddress))return this.$message.error("Receiving address error"),!1;this.toAddress=this.toAddress.trim(),this.searchInput=this.searchInput.trim();try{this.formAddress=l.a.bufferToHex(l.a.privateToAddress(this.searchInput.trim()))}catch(e){return this.$message.error("Private key error"),!1}return!0},run:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.onSearch()){t.next=3;break}return e.$notify.error({title:"Error",message:"Please check the parameters"}),t.abrupt("return",!1);case 3:return t.prev=3,t.next=6,e.checkBalance();case 6:r=t.sent,null!==(a=r[0])&&void 0!==a&&a.result&&(e.Balance=o.a.fromWei(r[0].result,"ether"),n=new Date,e.time=n.toLocaleString(),e.Balance>=e.amount&&e.send(e.toAddress,r[0].result,parseInt(r[1].result),e.searchInput.trim())),t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](3);case 12:setTimeout(e.run,e.stime);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()},checkBalance:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a='[{"id":1,"jsonrpc":"2.0","method":"eth_getBalance","params":["'+e.formAddress+'","latest"]},{"id":2,"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["'+e.formAddress+'","latest"]}]',t.next=3,e.$ajax({url:e.rpc,method:"post",data:a});case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()},send:function(t,a,n,i){var d=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var u,l,h,p,m,v,g,w;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u=o.a.toWei(new f.a(d.gwei).times(21e3).toString(10),"gwei"),l="0x"+new f.a(a).minus(u).toString(16),d.sendamount=o.a.fromWei(l,"ether"),h={form:d.formAddress,to:t,value:l,gasPrice:"0x"+o.a.toWei(d.gwei,"gwei").toString(16),gasLimit:"0x5208",nonce:Object(s["toHex"])(n),chainId:d.id},p=new c.a(h),m=e.from(i.replace("0x",""),"hex"),p.sign(m),v="0x"+p.serialize().toString("hex"),g={method:"eth_sendRawTransaction",params:[v],id:1,jsonrpc:"2.0"},r.next=11,d.$ajax({url:d.rpc,method:"post",data:g});case 11:w=r.sent,null!==w&&void 0!==w&&w.result&&(d.res=null===w||void 0===w?void 0:w.result);case 13:case"end":return r.stop()}}),r)})))()}}}}).call(this,a("fd40").Buffer)},"20bb":function(e,t,a){"use strict";t["a"]={zh:{uniswap:{title:"Uniswap最新交易对"}},en:{uniswap:{title:"Uniswap latest trading pairs"}}}},3365:function(e,t,a){},"69b5":function(e){e.exports=JSON.parse('{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}')},"9b8e":function(e,t,a){"use strict";a("3365")},be70:function(e,t,a){"use strict";(function(t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=a("4672"),s=a("69b5"),i=n.BN,o=new i("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),d=function(){function e(a){r(this,e),a=a||{};var s=[{name:"nonce",length:32,allowLess:!0,default:new t([])},{name:"gasPrice",length:32,allowLess:!0,default:new t([])},{name:"gasLimit",alias:"gas",length:32,allowLess:!0,default:new t([])},{name:"to",allowZero:!0,length:20,default:new t([])},{name:"value",length:32,allowLess:!0,default:new t([])},{name:"data",alias:"input",allowZero:!0,default:new t([])},{name:"v",allowZero:!0,default:new t([28])},{name:"r",length:32,allowZero:!0,allowLess:!0,default:new t([])},{name:"s",length:32,allowZero:!0,allowLess:!0,default:new t([])}];n.defineProperties(this,s,a),Object.defineProperty(this,"from",{enumerable:!0,configurable:!0,get:this.getSenderAddress.bind(this)});var i=n.bufferToInt(this.v),o=Math.floor((i-35)/2);o<0&&(o=0),this._chainId=o||a.chainId||0,this._homestead=!0}return e.prototype.toCreationAddress=function(){return""===this.to.toString("hex")},e.prototype.hash=function(e){void 0===e&&(e=!0);var t=void 0;if(e)t=this.raw;else if(this._chainId>0){var a=this.raw.slice();this.v=this._chainId,this.r=0,this.s=0,t=this.raw,this.raw=a}else t=this.raw.slice(0,6);return n.rlphash(t)},e.prototype.getChainId=function(){return this._chainId},e.prototype.getSenderAddress=function(){if(this._from)return this._from;var e=this.getSenderPublicKey();return this._from=n.publicToAddress(e),this._from},e.prototype.getSenderPublicKey=function(){if((!this._senderPubKey||!this._senderPubKey.length)&&!this.verifySignature())throw new Error("Invalid Signature");return this._senderPubKey},e.prototype.verifySignature=function(){var e=this.hash(!1);if(this._homestead&&1===new i(this.s).cmp(o))return!1;try{var t=n.bufferToInt(this.v);this._chainId>0&&(t-=2*this._chainId+8),this._senderPubKey=n.ecrecover(e,t,this.r,this.s)}catch(a){return!1}return!!this._senderPubKey},e.prototype.sign=function(e){var t=this.hash(!1),a=n.ecsign(t,e);this._chainId>0&&(a.v+=2*this._chainId+8),Object.assign(this,a)},e.prototype.getDataFee=function(){for(var e=this.raw[5],t=new i(0),a=0;a<e.length;a++)0===e[a]?t.iaddn(s.txDataZeroGas.v):t.iaddn(s.txDataNonZeroGas.v);return t},e.prototype.getBaseFee=function(){var e=this.getDataFee().iaddn(s.txGas.v);return this._homestead&&this.toCreationAddress()&&e.iaddn(s.txCreation.v),e},e.prototype.getUpfrontCost=function(){return new i(this.gasLimit).imul(new i(this.gasPrice)).iadd(new i(this.value))},e.prototype.validate=function(e){var t=[];return this.verifySignature()||t.push("Invalid Signature"),this.getBaseFee().cmp(new i(this.gasLimit))>0&&t.push(["gas limit is too low. Need at least "+this.getBaseFee()]),void 0===e||!1===e?0===t.length:t.join(" ")},e}();e.exports=d}).call(this,a("fd40").Buffer)},f744:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"containerCenter"},[a("div",{staticClass:"header"},[a("svg-icon",{staticClass:"uniswapIcon",attrs:{"icon-class":e.icon}}),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.rpc,expression:"rpc"}],staticClass:"input",attrs:{placeholder:"RPC"},domProps:{value:e.rpc},on:{input:function(t){t.target.composing||(e.rpc=t.target.value)}}})]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],staticClass:"input",attrs:{placeholder:"chain Id"},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}})]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gwei,expression:"gwei"}],staticClass:"input",attrs:{placeholder:"Gwei"},domProps:{value:e.gwei},on:{input:function(t){t.target.composing||(e.gwei=t.target.value)}}})]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.stime,expression:"stime"}],staticClass:"input",attrs:{placeholder:"Monitoring Frequency:Milliseconds"},domProps:{value:e.stime},on:{input:function(t){t.target.composing||(e.stime=t.target.value)}}})]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"input",attrs:{placeholder:"Triggered when the balance is greater than this value"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}})]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],staticClass:"input",attrs:{placeholder:"Private key"},domProps:{value:e.searchInput},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)},input:function(t){t.target.composing||(e.searchInput=t.target.value)}}})]),a("div",{staticClass:"inputBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.toAddress,expression:"toAddress"}],staticClass:"input",attrs:{placeholder:"Receiving Address"},domProps:{value:e.toAddress},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)},input:function(t){t.target.composing||(e.toAddress=t.target.value)}}})]),a("div",{staticClass:"inputBox"},[a("el-divider"),a("el-button",{attrs:{type:"primary"},on:{click:e.run}},[e._v("Run")])],1)],1),a("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.formAddress.length>0,expression:"formAddress.length>0"}],attrs:{title:"Monitor Address "+e.formAddress+" Balance "+e.Balance+" Time:"+e.time,type:"success",effect:"dark"}}),a("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.res&&e.res.length>0,expression:"res && res.length>0"}],attrs:{title:"Send successfully "+e.sendamount+" Txhash "+e.res,type:"success",effect:"dark"}})],1)])},n=[],s=a("1f50"),i=s["a"],o=(a("9b8e"),a("5d22")),d=Object(o["a"])(i,r,n,!1,null,"be5886c2",null);t["default"]=d.exports}}]);