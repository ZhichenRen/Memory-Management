(function(e){function t(t){for(var n,a,c=t[0],u=t[1],o=t[2],d=0,h=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,o||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,c=1;c<i.length;c++){var u=i[c];0!==r[u]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},r={app:0},s=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/Memory-Management/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var l=u;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("e623"),i("e379"),i("5dc8"),i("37e1");var n=i("7a23"),r=Object(n["e"])("div",{class:"text-3xl mb-5 mx-auto text-center"},"内存分页模拟",-1),s={class:"grid grid-cols-5 gap-4 ml-8 mr-8 mt-0"};function a(e,t,i,a,c,u){var o=Object(n["h"])("Frame"),l=Object(n["h"])("Operation");return Object(n["f"])(),Object(n["c"])("div",null,[r,Object(n["e"])("div",s,[Object(n["e"])(o,{frame_id:0,switch_page:c.switch_page[0],page_id:c.page_list[0],hit:e.hit[0]},null,8,["switch_page","page_id","hit"]),Object(n["e"])(o,{frame_id:1,switch_page:c.switch_page[1],page_id:c.page_list[1],hit:e.hit[1]},null,8,["switch_page","page_id","hit"]),Object(n["e"])(o,{frame_id:2,switch_page:c.switch_page[2],page_id:c.page_list[2],hit:e.hit[2]},null,8,["switch_page","page_id","hit"]),Object(n["e"])(o,{frame_id:3,switch_page:c.switch_page[3],page_id:c.page_list[3],hit:e.hit[3]},null,8,["switch_page","page_id","hit"]),Object(n["e"])(l,{miss:c.miss,total:c.total,instruction_address:c.instruction_address,algorithm:c.algorithm,execute_type:c.execute_type,onExecute:u.execute,instruction_number:c.instruction_number,onSet_execute_type:u.setExecuteType,onSet_algorithm:u.setAlgorithm,onReset:u.reset},null,8,["miss","total","instruction_address","algorithm","execute_type","onExecute","instruction_number","onSet_execute_type","onSet_algorithm","onReset"])])])}i("a9e3");var c={class:"container px-4 mx-auto flex-col border-black border-2 rounded-2xl text-center"},u={class:"text-xl mb-3 mt-3 "},o=Object(n["e"])("br",null,null,-1),l=Object(n["d"])(" Current Page:"),d=Object(n["e"])("br",null,null,-1),h={class:"text-center text-sm"};function b(e,t,i,r,s,a){return Object(n["f"])(),Object(n["c"])("div",c,[Object(n["e"])("div",u,[Object(n["d"])(" Frame "+Object(n["i"])(i.frame_id)+" ",1),o,Object(n["e"])("div",{class:["mb-3 py-2 max-w-xs mx-auto shadow-md items-center rounded-xl",{"bg-red-400":1==i.switch_page,"bg-green-300":0==i.switch_page}]},[l,d,Object(n["d"])(Object(n["i"])(-1==i.page_id?"None":i.page_id),1)],2)]),(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(a.memory_address,(function(e){return Object(n["f"])(),Object(n["c"])("ul",{key:e.physical_address},[Object(n["e"])("div",{class:["mb-3 py-2 max-w-xs mx-auto shadow-md items-center rounded-xl",{"bg-gray-300":0==i.switch_page&&i.hit!=e.physical_address%10,"bg-green-300":0==i.switch_page&&i.hit==e.physical_address%10,"bg-yellow-500":1==i.switch_page}]},[Object(n["e"])("div",h,Object(n["i"])(e.physical_address),1)],2)])})),128))])}var m={name:"Frame",props:{frame_id:Number,switch_page:Number,page_id:Number,hit:Number},data:function(){return{}},setup:function(){},computed:{memory_address:{get:function(){var e=[];if(this.page_id>=0&&this.page_id<32)for(var t=0;t<10;++t)e.push({physical_address:10*this.page_id+t});else for(var i=0;i<10;++i)e.push({physical_address:"EMPTY"});return e}}}};m.render=b;var p=m,_={class:"container px-6 mx-auto border-black border-2 rounded-2xl text-center"},g={class:"px-0.5 mx-auto mb-3 mt-3"},f={class:"text-xl mb-3 py-2 max-w-xs mx-auto bg-gray-300 shadow-md items-center rounded-xl"},x={class:"text-xl mb-3 py-2 max-w-xs mx-auto bg-gray-300 shadow-md items-center rounded-xl"},y=Object(n["d"])(" 指令地址"),O=Object(n["e"])("br",null,null,-1),v=Object(n["e"])("br",null,null,-1),j={class:"text-xl mb-3 mx-auto"},w=Object(n["e"])("br",null,null,-1),M={class:"text-xl mb-3 py-2 max-w-xs mx-auto bg-gray-300 shadow-md items-center rounded-xl"};function k(e,t,i,r,s,a){var c=this;return Object(n["f"])(),Object(n["c"])("div",_,[Object(n["e"])("div",g,[Object(n["e"])("div",f," 已执行"+Object(n["i"])(i.instruction_number)+"条指令 ",1),Object(n["e"])("div",x,[y,O,Object(n["d"])(Object(n["i"])(-1==i.instruction_address?"无已执行指令":i.instruction_address),1)])]),Object(n["e"])("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded-full mb-3",onClick:t[1]||(t[1]=function(e){c.$emit("set_algorithm","FIFO")})}," FIFO "),v,Object(n["e"])("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded-full mb-3",onClick:t[2]||(t[2]=function(e){c.$emit("set_algorithm","LRU")})}," LRU "),Object(n["e"])("div",j," 当前算法:"+Object(n["i"])(i.algorithm),1),Object(n["e"])("button",{class:["text-white font-bold py-1 px-5 rounded-full mb-3",{"bg-blue-500 hover:bg-blue-700":"连续执行"==i.execute_type,"bg-gray-300":"停止执行"==i.execute_type}],onClick:t[3]||(t[3]=function(){return a.executeOnce&&a.executeOnce.apply(a,arguments)}),disabled:"停止执行"==i.execute_type}," 单条执行 ",10,["disabled"]),w,Object(n["e"])("button",{class:[" text-white font-bold py-1 px-5 rounded-full mb-3",{"bg-blue-500 hover:bg-blue-700":"连续执行"==i.execute_type,"bg-red-500 hover:bg-red-700":"停止执行"==i.execute_type}],onClick:t[4]||(t[4]=function(){return a.continueExecute&&a.continueExecute.apply(a,arguments)})},Object(n["i"])(i.execute_type),3),Object(n["e"])("div",M," 换页率："+Object(n["i"])(a.missing_rate)+"% ",1),Object(n["e"])("button",{class:["text-white font-bold py-1 px-5 rounded-full mb-3",{"bg-blue-500 hover:bg-blue-700":"连续执行"==i.execute_type,"bg-gray-300":"停止执行"==i.execute_type}],onClick:t[5]||(t[5]=function(e){c.$emit("reset")}),disabled:"停止执行"==i.execute_type}," 复位 ",10,["disabled"])])}var I={name:"Operation",props:{miss:Number,total:Number,algorithm:String,instruction_address:Number,execute_type:String,instruction_number:Number},data:function(){return{interval:Object}},setup:function(){},created:function(){},methods:{executeOnce:function(){this.instruction_number>=32?"停止执行"==this.execute_type&&(alert("指令执行完毕！"),this.$emit("set_execute_type","连续执行"),clearInterval(this.interval)):this.$emit("execute")},continueExecute:function(){"连续执行"==this.execute_type?(alert("开启连续执行！"),this.$emit("set_execute_type","停止执行"),this.interval=setInterval(this.executeOnce,1e3)):(alert("结束连续执行！"),this.$emit("set_execute_type","连续执行"),clearInterval(this.interval))}},computed:{missing_rate:{get:function(){return 0==this.total?0:Math.floor(this.miss/this.total*100)}}}};I.render=k;var N=I,S={name:"App",components:{Frame:p,Operation:N},data:function(){return{page_list:Array,switch_page:Array,call_in_time:Array,use_times:Array,instruction_address:Number,algorithm:String,execute_type:String,miss:Number,total:Number,instruction_number:Number}},mounted:function(){document.title="Page Management"},created:function(){this.page_list=[-1,-1,-1,-1],this.hit=[-1,-1,-1,-1],this.switch_page=[0,0,0,0],this.instruction_address=0,this.algorithm="FIFO",this.execute_type="连续执行",this.miss=0,this.total=0,this.use_times=[0,0,0,0],this.instruction_number=0;var e=new Date;this.call_in_time=[];for(var t=0;t<4;++t)this.call_in_time.push(e.getTime())},methods:{setAlgorithm:function(e){this.algorithm=e},getRandomIntInclusive:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},execute:function(){var e=this,t=Math.random(),i=0;i=t<.5?(this.instruction_address+1)%320:t>=.5&&t<.75?this.getRandomIntInclusive(this.instruction_address+1,319):this.getRandomIntInclusive(0,this.instruction_address-1);for(var n=Math.floor(i/10),r=i%10,s=0;s<4;++s)this.use_times[s]++;for(var a=!0,c=function(t){if(e.page_list[t]==n)return a=!1,e.use_times[t]=0,e.hit[t]=r,setTimeout((function(){e.hit[t]=-1}),800),"break"},u=0;u<this.page_list.length;++u){var o=c(u);if("break"===o)break}if(a)if(this.miss++,"FIFO"==this.algorithm){for(var l=0,d=1e15,h=0;h<4;++h)this.call_in_time[h]<d&&(l=h,d=this.call_in_time[h]);this.page_list[l]=n,this.call_in_time[l]=(new Date).getTime(),this.use_times[l]=1,this.switch_page[l]=1,setTimeout((function(){e.switch_page[l]=0}),800)}else{for(var b=0,m=0,p=0;p<4;++p)this.use_times[p]>=m&&(b=p,m=this.use_times[p]);this.page_list[b]=n,this.use_times[b]=1,this.switch_page[b]=1,setTimeout((function(){e.switch_page[b]=0}),800)}this.total++,this.instruction_address=i,this.instruction_number+=1},setExecuteType:function(e){this.execute_type=e},reset:function(){this.instruction_address=0,this.execute_type="连续执行",this.miss=0,this.total=0,this.page_list=[-1,-1,-1,-1],this.hit=[-1,-1,-1,-1],this.switch_page=[0,0,0,0],this.instruction_address=0,this.use_times=[0,0,0,0],this.instruction_number=0;var e=new Date;this.call_in_time=[];for(var t=0;t<4;++t)this.call_in_time.push(e.getTime())}}};S.render=a;var F=S;i("def6");Object(n["b"])(F).mount("#app")},def6:function(e,t,i){}});
//# sourceMappingURL=app.ee9994bb.js.map