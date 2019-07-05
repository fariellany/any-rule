(function(e){function t(t){for(var l,i,n=t[0],u=t[1],c=t[2],p=0,d=[];p<n.length;p++)i=n[p],s[i]&&d.push(s[i][0]),s[i]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);o&&o(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],l=!0,n=1;n<r.length;n++){var u=r[n];0!==s[u]&&(l=!1)}l&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var l={},s={app:0},a=[];function i(t){if(l[t])return l[t].exports;var r=l[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=l,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(r,l,function(t){return e[t]}.bind(null,l));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/any-rule/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var o=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"46e9":function(e,t){e.exports=[{title:"24小时制时间（HH-mm-ss）",rule:/^((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$)/},{title:"12小时制时间（hh-mm-ss）",rule:/^(1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/},{title:"base64格式",rule:/^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i,example:"data:image/gif;base64,xxxx=="},{title:"数字/货币金额（支持负数、千分位分隔符）",rule:/(^[-]?[1-9]\d{0,2}($|(,\d{3})*($|(\.\d{1,2}$))))|((^[0](\.\d{1,2})?)|(^[-][0]\.\d{1,2}))$/,example:"如: 100、-0.99、3,234.32、-1,900,235.09"},{title:"数字/货币金额 (只支持正数、不支持校验千分位分隔符)",rule:/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,example:"如: 0.99、8.99、666"},{title:"银行卡号（16或19位）",rule:/^([1-9]{1})(\d{15}|\d{18})$/,example:"如: 6222026006705354217"},{title:"中文姓名",rule:/^([\u4e00-\u9fa5·]{2,10})$/,example:"如: 葛二蛋、凯文·杜兰特"},{title:"新能源车牌号",rule:/[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/,example:"如: 京AD92035(小型)、甘G23459F(大型)"},{title:"非新能源车牌号",rule:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,example:"如: 京A00599、黑D23908"},{title:"车牌号(新能源+非新能源)",rule:/^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/,example:"如: 京A12345D、京A00599"},{title:"URL链接(网址)",rule:/^((https?|ftp|file):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/\w\.-]*)*\/?/,example:"如: www.qq.com 、file:///C:/Users/KD/index.js"},{title:"手机号(严谨), 根据工信部2019年最新公布的手机号段",rule:/^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,example:"如: 18311006933、17888829981"},{title:"手机号(宽松), 只要是13,14,15,16,17,18,19开头即可",rule:/^1[3-9]\d{9}$/,example:"如: 18311006933、17888829981"},{title:"日期, 如: 2000-01-01或2000-1-1",rule:/^\d{4}(-)([0-1][0-2]|\d)\1([0-2]\d|\d|30|31)$/,example:"如: 1990-12-12、2020-01-01"},{title:"email地址",rule:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,example:"如: 90203918@qq.com、nbilly@126.com"},{title:"国内座机电话,如: 0341-86091234",rule:/\d{3}-\d{8}|\d{4}-\d{7}/,example:"如: 0936-4211235"},{title:"一代身份证号(15位数字)",rule:/^\d{8}(0\d|11|12)([0-2]\d|30|31)\d{3}$/,example:"如: 622001790131123"},{title:"二代身份证号(18位数字),最后一位是校验位,可能为数字或字符X",rule:/^\d{6}(18|19|20)\d{2}(0\d|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/,example:"如: 62222319991205131x"},{title:"身份证号, 支持1/2代(15位/18位数字)",rule:/(^\d{8}(0\d|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,example:"如: 622223199912051311"},{title:"帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合",rule:/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,example:"如: justin、justin1989、justin_666"},{title:"纯中文/汉字",rule:/^[\u4E00-\u9FA5]+$/,example:"如: 正则、前端"},{title:"是否小数",rule:/^\d+\.\d+$/,example:"如: 0.0、0.09"},{title:"电话(座机)",rule:/^0\d{2,3}-\d{7,8}$/,example:"如: 0936-4211236"},{title:"纯数字",rule:/^\d{1,}$/,example:"如: 12345678"},{title:"是否html标签",rule:/<(.*)>.*<\/\1>|<(.*) \/>/,example:"如: <div> </div>"},{title:"是否qq号格式正确",rule:/^[1-9][0-9]{4,10}$/,example:"如: 903013545、9020304"},{title:"是否由数字和字母组成",rule:/^[A-Za-z0-9]+$/,example:"如: james666、haha233hi"},{title:"纯英文字母",rule:/^[a-zA-Z]+$/,example:"如: russel"},{title:"纯小写英文字母组成",rule:/^[a-z]+$/,example:"如: russel"},{title:"纯大写英文字母",rule:/^[A-Z]+$/,example:"如: ABC、KD"},{title:"密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符",rule:/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,example:"如: Kd@curry666"},{title:"用户名正则，4到16位（字母，数字，下划线，减号）",rule:/^[a-zA-Z0-9_-]{4,16}$/,example:"如: xiaohua_qq"},{title:"ipv4地址正则",rule:/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,example:"如: 172.16.0.0、127.0.0.0"},{title:"16进制颜色",rule:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,example:"如: #f00 、#F90、#000、 #fe9de8"},{title:"微信号，6至20位，以字母开头，字母，数字，减号，下划线",rule:/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,example:"如: github666、kd_-666"},{title:"中国邮政编码",rule:/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,example:"如: 734500、100101"},{title:"只包含中文和数字",rule:/^(([\u4E00-\u9FA5])|(\d))+$/,example:"如: 哈哈哈、你好6啊"},{title:"非字母",rule:/[^A-Za-z]$/,example:"如: 你好6啊、Q3Q、ABC@¥()！"}]},"56d7":function(e,t,r){"use strict";r.r(t);r("dac5"),r("6e26"),r("9604"),r("df67");var l=r("6e6d"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("article",{staticClass:"fixed"},[r("a",{staticClass:"github",attrs:{onclick:"_hmt.push(['_trackEvent', '交互', '点击github', '悬浮'])",href:"https://github.com/any86/any-rule",target:"_blank"}},[r("svg",{attrs:{height:"20",viewBox:"0 0 16 16",version:"1.1",width:"20","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})]),r("span",[e._v("github")])]),r("a",{staticClass:"message",attrs:{onclick:"_hmt.push(['_trackEvent', '交互', '留言'])",href:"https://github.com/any86/any-rule/issues/new",target:"_blank"}},[e._v("留言")])]),r("header",[r("h1",[e._v("正则大全")]),r("a",{staticClass:"github",staticStyle:{"margin-left":"15px",color:"#000"},attrs:{onclick:"_hmt.push(['_trackEvent', '交互', '点击github', '头部'])",href:"https://github.com/any86/any-rule",target:"_blank"}},[r("svg",{attrs:{height:"20",viewBox:"0 0 16 16",version:"1.1",width:"20","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})]),r("span",[e._v("github")])]),r("iframe",{staticStyle:{display:"block","margin-top":"15px"},attrs:{src:"https://ghbtns.com/github-btn.html?user=any86&repo=any-rule&type=star&count=true",frameborder:"0",scrolling:"0",width:"170px",height:"20px"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],ref:"searchInput",staticClass:"search-input",attrs:{autofocus:"",placeholder:"搜索关键词, 如'手机'",type:"text"},domProps:{value:e.keyword},on:{keyup:e.search,mouseenter:e.selectSearchInputText,focus:e.selectSearchInputText,input:function(t){t.target.composing||(e.keyword=t.target.value)}}})]),r("article",[0<e.rules.length?r("ul",{staticClass:"list"},e._l(e.rules,function(t,l){var s=t.title,a=t.rule,i=(t.events,t.example);return r("li",{key:s,staticClass:"row",on:{mouseenter:function(t){return e.mouseenterHandler(l)}}},[r("i",{staticClass:"border"}),r("h2",[e._v(e._s(s))]),r("p",{staticClass:"rule"},[r("span",{staticClass:"btn-copy",attrs:{"data-clipboard-text":a}},[e._v("点击复制")]),r("a",{staticClass:"btn-better",attrs:{href:"https://github.com/any86/any-rule/issues/new?title=我有更好的正则: "+s,target:"_blank"}},[e._v("我有不同意见")]),r("code",{ref:"code",refInFor:!0,staticClass:"javascript"},[e._v(e._s(a))])]),r("section",{staticClass:"verification"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.list[l].value,expression:"list[index].value"}],ref:"input",refInFor:!0,attrs:{placeholder:i},domProps:{value:e.list[l].value},on:{compositionstart:function(t){return e.check(l,"blur")},compositionupdate:function(t){return e.check(l,"blur")},compositionend:function(t){return e.check(l,"blur")},blur:function(t){return e.check(l,"blur")},keyup:function(t){return e.check(l,"keyup")},input:function(t){t.target.composing||e.$set(e.list[l],"value",t.target.value)}}}),r("span",{staticClass:"btn-clear",on:{click:function(t){return e.reset(l)}}},[e._v("清空")])]),r("div",{staticClass:"tip"},[void 0!==e.list[l].isOk?[e.list[l].isOk?r("p",{staticClass:"success"},[e._v("通过")]):r("p",{staticClass:"error"},[e._v("不通过")])]:e._e()],2)]),r("section",{staticClass:"trigger"},[r("h3",[e._v("验证时机")]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.list[l].events.blur,expression:"list[index].events.blur"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.list[l].events.blur)?e._i(e.list[l].events.blur,null)>-1:e.list[l].events.blur},on:{change:function(t){var r=e.list[l].events.blur,s=t.target,a=!!s.checked;if(Array.isArray(r)){var i=null,n=e._i(r,i);s.checked?n<0&&e.$set(e.list[l].events,"blur",r.concat([i])):n>-1&&e.$set(e.list[l].events,"blur",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.list[l].events,"blur",a)}}}),e._v(" blur\n                    ")]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.list[l].events.keyup,expression:"list[index].events.keyup"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.list[l].events.keyup)?e._i(e.list[l].events.keyup,null)>-1:e.list[l].events.keyup},on:{change:function(t){var r=e.list[l].events.keyup,s=t.target,a=!!s.checked;if(Array.isArray(r)){var i=null,n=e._i(r,i);s.checked?n<0&&e.$set(e.list[l].events,"keyup",r.concat([i])):n>-1&&e.$set(e.list[l].events,"keyup",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.list[l].events,"keyup",a)}}}),e._v(" keyup\n                    ")])])])}),0):r("p",{attrs:{align:"center"}},[e._v("无数据")])])])},a=[],i=(r("bae3"),r("46e9")),n=r.n(i),u=r("7cbd"),c=r.n(u),o={name:"app",components:{},data:function(){return Object.freeze(n.a),{timer:null,keyword:"",rules:n.a,list:n.a.map(function(){return{value:"",isOk:void 0,events:{blur:!0,keyup:!0}}})}},mounted:function(){var e=new c.a(".btn-copy");this.$on("hook:destroyed",function(){e.destroy()});var t=null;e.on("success",function(e){clearTimeout(t);var r=e.trigger;r.classList.contains("success")&&r.classList.remove("success"),r.classList.add("success"),t=setTimeout(function(){r.classList.remove("success")},1e3)})},methods:{search:function(){var e=this;""!==this.keyword?this.rules=this.rules.filter(function(t){var r=t.title;return-1!==r.indexOf(e.keyword.toLowerCase())}):this.rules=n.a,_hmt.push(["_trackEvent","交互","搜索","关键词",this.keyword])},selectSearchInputText:function(){this.$refs.searchInput.select()},autoFocus:function(e){this.$refs.input[e].focus()},mouseenterHandler:function(e){},reset:function(e){var t=this;this.$nextTick(function(){t.list[e].value="",t.list[e].isOk=void 0})},check:function(e,t){var r=this.list[e],l=r.events,s=r.value;if(""===s&&this.reset(e),l[t]){var a=this.rules[e].rule,i=this.list[e];i.isOk=a.test(i.value)}"blur"===t&&_hmt.push(["_trackEvent","交互","input框",this.list[e].value])}}},p=o,d=(r("729e"),r("17cc")),h=Object(d["a"])(p,s,a,!1,null,"5feb50b6",null),v=h.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(e){return e(v)}}).$mount("#app")},"729e":function(e,t,r){"use strict";var l=r("fa72"),s=r.n(l);s.a},fa72:function(e,t,r){}});
//# sourceMappingURL=app.11d4d85e.js.map