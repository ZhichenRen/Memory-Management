(function(e){function t(t){for(var n,c,a=t[0],o=t[1],u=t[2],d=0,p=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==i[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},i={app:0},s=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Memory-Management/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=o;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function i(e,t,r,i,s,c){var a=Object(n["i"])("Home");return Object(n["g"])(),Object(n["c"])(a)}var s={class:"my-auto"},c=Object(n["f"])("div",{class:"text-3xl mb-5 mx-auto text-center mt-3"},"内存分页模拟",-1),a={class:"grid grid-cols-5 gap-4 ml-8 mr-8 mt-0"};function o(e,t,r,i,o,u){var l=Object(n["i"])("Frame"),d=Object(n["i"])("Operation");return Object(n["g"])(),Object(n["c"])("div",s,[c,Object(n["f"])("div",a,[Object(n["f"])(l,{frame_id:0,switch_page:o.switch_page[0],page_id:o.page_list[0],hit:e.hit[0]},null,8,["switch_page","page_id","hit"]),Object(n["f"])(l,{frame_id:1,switch_page:o.switch_page[1],page_id:o.page_list[1],hit:e.hit[1]},null,8,["switch_page","page_id","hit"]),Object(n["f"])(l,{frame_id:2,switch_page:o.switch_page[2],page_id:o.page_list[2],hit:e.hit[2]},null,8,["switch_page","page_id","hit"]),Object(n["f"])(l,{frame_id:3,switch_page:o.switch_page[3],page_id:o.page_list[3],hit:e.hit[3]},null,8,["switch_page","page_id","hit"]),Object(n["f"])(d,{miss:o.miss,total:o.total,instruction_address:o.instruction_address,algorithm:o.algorithm,execute_type:o.execute_type,onExecute:u.execute,instruction_number:o.instruction_number,onSet_execute_type:u.setExecuteType,onSet_algorithm:u.setAlgorithm,onReset:u.reset},null,8,["miss","total","instruction_address","algorithm","execute_type","onExecute","instruction_number","onSet_execute_type","onSet_algorithm","onReset"])])])}r("a9e3");var u={class:"\r\n      container\r\n      px-4\r\n      mx-auto\r\n      flex-col\r\n      border-black border-2\r\n      rounded-2xl\r\n      text-center\r\n    "},l={class:"text-xl mb-3 mt-3"},d=Object(n["f"])("br",null,null,-1),p=Object(n["e"])(" Current Page:"),b=Object(n["f"])("br",null,null,-1),h={class:"text-center text-sm"};function m(e,t,r,i,s,c){return Object(n["g"])(),Object(n["c"])("div",u,[Object(n["f"])("div",l,[Object(n["e"])(" Frame "+Object(n["j"])(r.frame_id)+" ",1),d,Object(n["f"])("div",{class:["mb-3 py-2 max-w-xs mx-auto shadow-md items-center rounded-xl",{"bg-red-400":1==r.switch_page,"bg-green-300":0==r.switch_page}]},[p,b,Object(n["e"])(Object(n["j"])(-1==r.page_id?"None":r.page_id),1)],2)]),(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(c.memory_address,(function(e){return Object(n["g"])(),Object(n["c"])("ul",{key:e.physical_address},[Object(n["f"])("div",{class:["mb-3 py-2 max-w-xs mx-auto shadow-md items-center rounded-xl",{"bg-gray-300":0==r.switch_page&&r.hit!=e.physical_address%10,"bg-green-300":0==r.switch_page&&r.hit==e.physical_address%10,"bg-yellow-500":1==r.switch_page}]},[Object(n["f"])("div",h,Object(n["j"])(e.physical_address),1)],2)])})),128))])}var f={name:"Frame",props:{frame_id:Number,switch_page:Number,page_id:Number,hit:Number},data:function(){return{}},setup:function(){},computed:{memory_address:{get:function(){var e=[];if(this.page_id>=0&&this.page_id<32)for(var t=0;t<10;++t)e.push({physical_address:10*this.page_id+t});else for(var r=0;r<10;++r)e.push({physical_address:"EMPTY"});return e}}}};f.render=m;var _=f,g={class:"container px-6 mx-auto border-black border-2 rounded-2xl text-center"},x={class:"px-0.5 mx-auto mb-3 mt-3"},y={class:"\r\n          text-xl\r\n          mb-3\r\n          py-2\r\n          max-w-xs\r\n          mx-auto\r\n          bg-gray-300\r\n          shadow-md\r\n          items-center\r\n          rounded-xl\r\n        "},O={class:"\r\n          text-xl\r\n          mb-3\r\n          py-2\r\n          max-w-xs\r\n          mx-auto\r\n          bg-gray-300\r\n          shadow-md\r\n          items-center\r\n          rounded-xl\r\n        "},v=Object(n["e"])(" 下一条指令地址"),j=Object(n["f"])("br",null,null,-1),w=Object(n["f"])("br",null,null,-1),S={class:"text-xl mb-3 mx-auto"},k=Object(n["f"])("br",null,null,-1),I={class:"grid grid-cols-2"},T=Object(n["f"])("br",null,null,-1),M={class:"\r\n        text-xl\r\n        mb-3\r\n        py-2\r\n        max-w-xs\r\n        mx-auto\r\n        bg-gray-300\r\n        shadow-md\r\n        items-center\r\n        rounded-xl\r\n      "};function N(e,t,r,i,s,c){var a=this;return Object(n["g"])(),Object(n["c"])("div",g,[Object(n["f"])("div",x,[Object(n["f"])("div",y," 已执行"+Object(n["j"])(r.instruction_number)+"条指令 ",1),Object(n["f"])("div",O,[v,j,Object(n["e"])(Object(n["j"])(-1==r.instruction_address?"无已执行指令":r.instruction_address),1)])]),Object(n["f"])("button",{class:"\r\n        bg-blue-500\r\n        hover:bg-blue-700\r\n        text-white\r\n        font-bold\r\n        py-1\r\n        px-5\r\n        rounded-full\r\n        mb-3\r\n      ",onClick:t[1]||(t[1]=function(e){return a.$emit("set_algorithm","FIFO")})}," FIFO "),w,Object(n["f"])("button",{class:"\r\n        bg-blue-500\r\n        hover:bg-blue-700\r\n        text-white\r\n        font-bold\r\n        py-1\r\n        px-5\r\n        rounded-full\r\n        mb-3\r\n      ",onClick:t[2]||(t[2]=function(e){return a.$emit("set_algorithm","LRU")})}," LRU "),Object(n["f"])("div",S,"当前算法:"+Object(n["j"])(r.algorithm),1),Object(n["f"])("button",{class:["text-white font-bold py-1 px-5 rounded-full mb-3",{"bg-blue-500 hover:bg-blue-700":"连续执行"==r.execute_type,"bg-gray-300":"停止执行"==r.execute_type}],onClick:t[3]||(t[3]=function(){return c.executeOnce&&c.executeOnce.apply(c,arguments)}),disabled:"停止执行"==r.execute_type}," 单条执行 ",10,["disabled"]),k,Object(n["f"])("div",I,["停止执行"==r.execute_type?(Object(n["g"])(),Object(n["c"])("button",{key:0,class:"\r\n          bg-blue-500\r\n          hover:bg-blue-700\r\n          text-white\r\n          font-bold\r\n          py-1\r\n          px-3\r\n          rounded-full\r\n          mb-3\r\n          mx-1\r\n        ",onClick:t[4]||(t[4]=function(){return c.normalSpeed&&c.normalSpeed.apply(c,arguments)})}," ×1 ")):Object(n["d"])("",!0),"停止执行"==r.execute_type?(Object(n["g"])(),Object(n["c"])("button",{key:1,class:"\r\n          bg-blue-500\r\n          hover:bg-blue-700\r\n          text-white\r\n          font-bold\r\n          py-1\r\n          px-3\r\n          rounded-full\r\n          mb-3\r\n          mx-1\r\n        ",onClick:t[5]||(t[5]=function(){return c.twoTimesSpeed&&c.twoTimesSpeed.apply(c,arguments)})}," ×2 ")):Object(n["d"])("",!0),"停止执行"==r.execute_type?(Object(n["g"])(),Object(n["c"])("button",{key:2,class:"\r\n          bg-blue-500\r\n          hover:bg-blue-700\r\n          text-white\r\n          font-bold\r\n          py-1\r\n          px-3\r\n          rounded-full\r\n          mb-3\r\n          mx-1\r\n        ",onClick:t[6]||(t[6]=function(){return c.fiveTimesSpeed&&c.fiveTimesSpeed.apply(c,arguments)})}," ×5 ")):Object(n["d"])("",!0),"停止执行"==r.execute_type?(Object(n["g"])(),Object(n["c"])("button",{key:3,class:"\r\n          bg-blue-500\r\n          hover:bg-blue-700\r\n          text-white\r\n          font-bold\r\n          py-1\r\n          px-3\r\n          rounded-full\r\n          mb-3\r\n          mx-1\r\n        ",onClick:t[7]||(t[7]=function(){return c.tenTimesSpeed&&c.tenTimesSpeed.apply(c,arguments)})}," ×10 ")):Object(n["d"])("",!0)]),Object(n["f"])("button",{class:["text-white font-bold py-1 px-5 rounded-full mb-3",{"bg-blue-500 hover:bg-blue-700":"连续执行"==r.execute_type,"bg-red-500 hover:bg-red-700":"停止执行"==r.execute_type}],onClick:t[8]||(t[8]=function(){return c.continueExecute&&c.continueExecute.apply(c,arguments)})},Object(n["j"])(r.execute_type),3),T,Object(n["f"])("button",{class:["text-white font-bold py-1 px-5 rounded-full mb-3",{"bg-blue-500 hover:bg-blue-700":"连续执行"==r.execute_type,"bg-gray-300":"停止执行"==r.execute_type}],onClick:t[9]||(t[9]=function(e){return a.$emit("reset")}),disabled:"停止执行"==r.execute_type}," 复位 ",10,["disabled"]),Object(n["f"])("div",M," 换页率："+Object(n["j"])(c.missing_rate)+"% ",1)])}var F={name:"Operation",props:{miss:Number,total:Number,algorithm:String,instruction_address:Number,execute_type:String,instruction_number:Number},data:function(){return{interval:Object,period:Number}},setup:function(){},created:function(){this.period=1e3},methods:{executeOnce:function(){this.instruction_number>=320?"停止执行"==this.execute_type&&(alert("指令执行完毕！"),this.$emit("set_execute_type","连续执行"),clearInterval(this.interval)):this.$emit("execute",this.period)},continueExecute:function(){"连续执行"==this.execute_type?(this.$emit("set_execute_type","停止执行"),this.interval=setInterval(this.executeOnce,this.period)):(this.$emit("set_execute_type","连续执行"),clearInterval(this.interval),this.period=1e3)},normalSpeed:function(){this.period=1e3,clearInterval(this.interval),this.interval=setInterval(this.executeOnce,this.period)},twoTimesSpeed:function(){this.period=500,clearInterval(this.interval),this.interval=setInterval(this.executeOnce,this.period)},fiveTimesSpeed:function(){this.period=200,clearInterval(this.interval),this.interval=setInterval(this.executeOnce,this.period)},tenTimesSpeed:function(){this.period=100,clearInterval(this.interval),this.interval=setInterval(this.executeOnce,this.period)}},computed:{missing_rate:{get:function(){return 0==this.total?0:Math.floor(this.miss/this.total*100)}}}};F.render=N;var C=F,P={name:"Home",components:{Frame:_,Operation:C},data:function(){return{page_list:Array,switch_page:Array,call_in_time:Array,priority:Array,instruction_address:Number,algorithm:String,execute_type:String,miss:Number,total:Number,instruction_number:Number}},mounted:function(){document.title="Page Management"},created:function(){this.page_list=[-1,-1,-1,-1],this.hit=[-1,-1,-1,-1],this.switch_page=[0,0,0,0],this.instruction_address=100,this.algorithm="FIFO",this.execute_type="连续执行",this.miss=0,this.total=0,this.priority=[0,0,0,0],this.instruction_number=0;var e=new Date;this.call_in_time=[];for(var t=0;t<4;++t)this.call_in_time.push(e.getTime())},methods:{setAlgorithm:function(e){this.algorithm=e},getRandomIntInclusive:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},execute:function(e){var t=this,r=Math.random(),n=0;n=r<.5?(this.instruction_address+1)%320:r>=.5&&r<.75?this.getRandomIntInclusive(this.instruction_address+1,319):this.getRandomIntInclusive(0,this.instruction_address-1);for(var i=Math.floor(n/10),s=n%10,c=0;c<4;++c)this.priority[c]++;for(var a=!0,o=function(r){if(t.page_list[r]==i)return a=!1,t.priority[r]=0,t.hit[r]=s,setTimeout((function(){t.hit[r]=-1}),.75*e),"break"},u=0;u<this.page_list.length;++u){var l=o(u);if("break"===l)break}if(a)if(this.miss++,"FIFO"==this.algorithm){for(var d=0,p=1e15,b=0;b<4;++b)this.call_in_time[b]<p&&(d=b,p=this.call_in_time[b]);this.page_list[d]=i,this.call_in_time[d]=(new Date).getTime(),this.priority[d]=0,this.switch_page[d]=1,setTimeout((function(){t.switch_page[d]=0}),.75*e)}else{for(var h=0,m=0,f=0;f<4;++f)this.priority[f]>=m&&(h=f,m=this.priority[f]);this.page_list[h]=i,this.priority[h]=0,this.switch_page[h]=1,setTimeout((function(){t.switch_page[h]=0}),.75*e)}this.total++,this.instruction_address=n,this.instruction_number+=1},setExecuteType:function(e){this.execute_type=e},reset:function(){this.instruction_address=0,this.execute_type="连续执行",this.miss=0,this.total=0,this.page_list=[-1,-1,-1,-1],this.hit=[-1,-1,-1,-1],this.switch_page=[0,0,0,0],this.instruction_address=0,this.priority=[0,0,0,0],this.instruction_number=0;var e=new Date;this.call_in_time=[];for(var t=0;t<4;++t)this.call_in_time.push(e.getTime())}}};P.render=o;var E=P,A={name:"App",components:{Home:E}};A.render=i;var R=A;r("def6");Object(n["b"])(R).mount("#app")},def6:function(e,t,r){}});
//# sourceMappingURL=app.494d6cda.js.map