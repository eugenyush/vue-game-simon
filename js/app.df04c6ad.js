(function(t){function n(n){for(var e,i,r=n[0],l=n[1],u=n[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);c&&c(n);while(p.length)p.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,n=0;n<a.length;n++){for(var o=a[n],e=!0,r=1;r<o.length;r++){var l=o[r];0!==s[l]&&(e=!1)}e&&(a.splice(n--,1),t=i(i.s=o[0]))}return t}var e={},s={app:0},a=[];function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,n,o){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)i.d(o,e,function(n){return t[n]}.bind(null,e));return o},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/vue-game-simon/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var u=0;u<r.length;u++)n(r[u]);var c=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,n,o){t.exports=o("56d7")},"56d7":function(t,n,o){"use strict";o.r(n);o("e260"),o("e6cf"),o("cca6"),o("a79d");var e=o("2b0e"),s=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app"}},[o("SimonGame")],1)},a=[],i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"simon"},[o("div",{staticClass:"simon-title"},[t._v("The Game Simon")]),o("div",{staticClass:"simon-button"},[o("div",{staticClass:"button button-num1",class:{ishoverbtn:t.buttons[0].hoverbtn},on:{click:function(n){return n.preventDefault(),t.onClick(0)}}}),o("div",{staticClass:"button button-num2",class:{ishoverbtn:t.buttons[1].hoverbtn},on:{click:function(n){return n.preventDefault(),t.onClick(1)}}}),o("div",{staticClass:"button button-num3",class:{ishoverbtn:t.buttons[2].hoverbtn},on:{click:function(n){return n.preventDefault(),t.onClick(2)}}}),o("div",{staticClass:"button button-num4",class:{ishoverbtn:t.buttons[3].hoverbtn},on:{click:function(n){return n.preventDefault(),t.onClick(3)}}})]),o("div",{staticClass:"panel"},[o("div",{staticClass:"panel-round"},[t._v("Round:"+t._s(t.round))]),o("button",{staticClass:"panel-btn",attrs:{disabled:t.disableBtn},on:{click:t.start}},[t._v("Start")]),o("div",{staticClass:"panel-options"},[t._v("Game options:")]),o("div",{staticClass:"panel-radiobtn"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.option,expression:"option"}],attrs:{disabled:t.disableBtn,id:"easy",type:"radio",name:"option",value:"easy"},domProps:{checked:t._q(t.option,"easy")},on:{change:function(n){t.option="easy"}}}),o("label",{attrs:{for:"easy"}},[t._v("Easy")])]),o("div",{staticClass:"panel-radiobtn"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.option,expression:"option"}],attrs:{disabled:t.disableBtn,id:"normal",type:"radio",name:"option",value:"normal"},domProps:{checked:t._q(t.option,"normal")},on:{change:function(n){t.option="normal"}}}),o("label",{attrs:{for:"normal"}},[t._v("Normal")])]),o("div",{staticClass:"panel-radiobtn"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.option,expression:"option"}],attrs:{disabled:t.disableBtn,id:"hard",type:"radio",name:"option",value:"hard"},domProps:{checked:t._q(t.option,"hard")},on:{change:function(n){t.option="hard"}}}),o("label",{attrs:{for:"hard"}},[t._v("Hard")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.lose,expression:"lose"}],staticClass:"panel-lose"},[t._v("YOU LOSE!")])])])},r=[],l={data:function(){return{massPr:[],massPo:[],interval:null,probably:!1,disableBtn:!1,round:0,lose:!1,option:"easy",buttons:[{sound:"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",hoverbtn:!1},{sound:"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",hoverbtn:!1},{sound:"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",hoverbtn:!1},{sound:"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",hoverbtn:!1}]}},methods:{start:function(){this.reset(),this.addNewBtn()},reset:function(){this.massPr=[],this.probably=!1,this.disableBtn=!0,this.lose=!1,this.round=0},addNewBtn:function(){var t=this;this.massPr.push(Math.floor(3*Math.random()));var n=0,o=this.selectOption();this.massPo=[],this.interval=setInterval((function(){n>=t.massPr.length&&(clearInterval(t.interval),t.probably=!0),t.hoverBtn(t.massPr[n]),t.soundPlay(t.buttons[t.massPr[n]].sound),n++}),o)},onClick:function(t){this.probably&&(this.massPo.push(t),this.soundPlay(this.buttons[t].sound),this.hoverBtn(t),this.checkResult())},checkResult:function(){for(var t=0;t<this.massPo.length;t++){if(this.massPo[t]!==this.massPr[t])return this.probably=!1,this.disableBtn=!1,void(this.lose=!0);this.massPo.length===this.massPr.length&&(this.round++,this.probably=!1,this.addNewBtn())}},hoverBtn:function(t){var n=this;this.buttons[t].hoverbtn=!0,setTimeout((function(){return n.buttons[t].hoverbtn=!1}),300)},soundPlay:function(t){var n=new Audio(t);n.play()},selectOption:function(){var t=0;return"easy"===this.option?t=1500:"normal"===this.option?t=1e3:"hard"===this.option&&(t=400),t}}},u=l,c=(o("b4c9"),o("2877")),d=Object(c["a"])(u,i,r,!1,null,"4293e422",null),p=d.exports,h={name:"App",components:{SimonGame:p}},v=h,m=(o("5c0b"),Object(c["a"])(v,s,a,!1,null,null,null)),b=m.exports;e["a"].config.productionTip=!1,e["a"].config.devtools=!0,new e["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,n,o){"use strict";o("9c0c")},"8d1b":function(t,n,o){},"9c0c":function(t,n,o){},b4c9:function(t,n,o){"use strict";o("8d1b")}});
//# sourceMappingURL=app.df04c6ad.js.map