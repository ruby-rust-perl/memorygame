!function(e){var t={};function a(c){if(t[c])return t[c].exports;var r=t[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(c,r,function(t){return e[t]}.bind(null,r));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t,a){"use strict";a.r(t);var c=class{constructor(){this.templateCardDeck=[{symbol:"fa-diamond",faceup:!1,matched:!1},{symbol:"fa-diamond",faceup:!1,matched:!1},{symbol:"fa-paper-plane-o",faceup:!1,matched:!1},{symbol:"fa-paper-plane-o",faceup:!1,matched:!1},{symbol:"fa-anchor",faceup:!1,matched:!1},{symbol:"fa-anchor",faceup:!1,matched:!1},{symbol:"fa-bolt",faceup:!1,matched:!1},{symbol:"fa-bolt",faceup:!1,matched:!1},{symbol:"fa-cube",faceup:!1,matched:!1},{symbol:"fa-cube",faceup:!1,matched:!1},{symbol:"fa-leaf",faceup:!1,matched:!1},{symbol:"fa-leaf",faceup:!1,matched:!1},{symbol:"fa-bicycle",faceup:!1,matched:!1},{symbol:"fa-bicycle",faceup:!1,matched:!1},{symbol:"fa-bomb",faceup:!1,matched:!1},{symbol:"fa-bomb",faceup:!1,matched:!1}]}shuffle(){let e,t,a=this.templateCardDeck,c=a.length;for(;0!==c;)t=Math.floor(Math.random()*c),e=a[c-=1],a[c]=a[t],a[t]=e;return a}};var r=class{buildDeckFragment(e){const t=document.createDocumentFragment();return e.forEach(e=>{const a=document.createElement("li");a.setAttribute("class","card");const c=document.createElement("i");c.setAttribute("class",`fa ${e.symbol}`),a.appendChild(c),t.appendChild(a)}),t}addCardListener(e){e.addEventListener("click",function(e){e.stopPropagation(),this.showCard(e.target)})}showCard(e){let t=e.getAttribute("class")+" open faceup ";e.setAttribute("class",t)}};(new class{constructor(){this.deck=new c,this.gameDeck=[],this.gameUI=new r,this.turnCounter=0,this.playerRating=3}getGameDeck(){return this.gameDeck}startNewGame(){this.gameDeck=this.deck.shuffle();const e=this.gameUI.buildDeckFragment(this.gameDeck),t=document.querySelector(".deck");t.appendChild(e),this.gameUI.addCardListener(t)}}).startNewGame()},function(e,t,a){e.exports=a(0)}]);