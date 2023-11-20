(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f417aae2"],{"568b":function(e,s,r){"use strict";r.r(s);var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticStyle:{background:"#2b313c",height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[r("div",{staticClass:"pwd_box"},[r("header",[e._m(0),r("h3",[e._v(e._s(e.$t("randomPassword.randomPassword")))])]),r("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.y_password,expression:"y_password",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyError,expression:"copyError",arg:"error"}],staticClass:"pwd_show_wrap"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.y_password,expression:"y_password"}],attrs:{type:"text",placeholder:e.$t("randomPassword.password_display_box"),readonly:""},domProps:{value:e.y_password},on:{input:function(s){s.target.composing||(e.y_password=s.target.value)}}}),r("div",{staticClass:"copy"},[r("p",[e._v(e._s(e.$t("randomPassword.click_Copy")))])])]),r("div",{staticClass:"pwd_len_wrap"},[r("p",[e._v(e._s(e.$t("randomPassword.length"))+e._s(e.y_length))]),r("div",{staticClass:"len_box"},[r("span",[e._v("4")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.y_length,expression:"y_length"}],attrs:{type:"range",min:"4",max:"32"},domProps:{value:e.y_length},on:{__r:function(s){e.y_length=s.target.value}}}),r("span",[e._v("32")])])]),r("div",{staticClass:"pwd_settings_wrap"},[r("p",[e._v(e._s(e.$t("randomPassword.setting")))]),r("div",{staticClass:"settings_box"},[r("div",{staticClass:"setting"},[r("label",[e._v(e._s(e.$t("randomPassword.include_uppercase"))+" ")]),r("input",{attrs:{type:"checkbox"},domProps:{checked:e.y_upper},on:{click:e.isUpper}})]),r("div",{staticClass:"setting"},[r("label",[e._v(e._s(e.$t("randomPassword.include_lowercase"))+" ")]),r("input",{attrs:{type:"checkbox"},domProps:{checked:e.y_lower},on:{click:e.isLower}})]),r("div",{staticClass:"setting"},[r("label",[e._v(e._s(e.$t("randomPassword.include_number"))+" ")]),r("input",{attrs:{type:"checkbox"},domProps:{checked:e.y_number},on:{click:e.isNumber}})]),r("div",{staticClass:"setting"},[r("label",[e._v(e._s(e.$t("randomPassword.include_symbol"))+" ")]),r("input",{attrs:{type:"checkbox"},domProps:{checked:e.y_symbol},on:{click:e.isSymbol}})])])]),r("div",{staticClass:"submit"},[r("input",{attrs:{type:"submit"},domProps:{value:e.$t("randomPassword.generate_password")},on:{click:e.submit}})])])])},o=[function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"dot"},[r("span"),r("span"),r("span")])}],n=(r("fdea"),r("5e10"),r("f597"),r("5502"),r("d51e"),{zh:{randomPassword:{randomPassword:"随机密码生成器",password_display_box:"密码显示框:",click_Copy:"点击复制",setting:"设置",include_uppercase:"包含大写",include_lowercase:"包含小写",include_number:"包含数字",include_symbol:"包含符号",generate_password:"生成密码",length:"长度:"}},en:{randomPassword:{randomPassword:"Random Password Generator",password_display_box:"Password display box",click_Copy:"Click Copy",setting:"Setting",include_uppercase:"include uppercase",include_lowercase:"include lowercase",include_number:"include number",include_symbol:"include symbol",generate_password:"Generate password",length:"Length:"}}}),a="randomPassword",i={name:"RandomPassword",data:function(){return{y_upper:!0,y_lower:!0,y_number:!0,y_symbol:!1,y_length:8,y_password:"",numArr:["0","1","2","3","4","5","6","7","8","9"],upperArr:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],lowerArr:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],symArr:["_","-","$","%","&","@","+","!"],isCopyText:!0}},created:function(){this.$i18n.getLocaleMessage("en")[a]||(this.$i18n.mergeLocaleMessage("en",n.en),this.$i18n.mergeLocaleMessage("zh",n.zh))},methods:{copySuccess:function(e){this.$message.success(this.$t("common.copySuccess"))},copyError:function(){this.$message.error(this.$t("common.copyError"))},getUpper:function(){return this.getFunc(this.upperArr)},getLower:function(){return this.getFunc(this.lowerArr)},getNumber:function(){return this.getFunc(this.numArr)},getSymbol:function(){return this.getFunc(this.symArr)},getFunc:function(e){var s=Math.floor(Math.random()*e.length);return e[s]},isUpper:function(){this.y_upper=!this.y_upper},isLower:function(){this.y_lower=!this.y_lower},isNumber:function(){this.y_number=!this.y_number},isSymbol:function(){this.y_symbol=!this.y_symbol},submit:function(){var e={upper:this.getUpper,lower:this.getLower,number:this.getNumber,symbol:this.getSymbol};function s(s,r,t,o,n){var a="",i=r+t+o+n,c=[{upper:r},{lower:t},{number:o},{symbol:n}].filter((function(e){return Object.values(e)[0]}));if(0!==i){for(var l=0;l<s;l++)c.forEach((function(s){var r=Object.keys(s)[0];a+=e[r]()}));return a.slice(0,s)}alert("请至少选择一项")}this.y_password=s(this.y_length,this.y_upper,this.y_lower,this.y_number,this.y_symbol)}}},c=i,l=(r("98ec"),r("5d22")),d=Object(l["a"])(c,t,o,!1,null,"ef6d99e8",null);s["default"]=d.exports},"5c22":function(e,s,r){},"98ec":function(e,s,r){"use strict";r("5c22")}}]);