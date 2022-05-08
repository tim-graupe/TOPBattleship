(()=>{var t={863:(t,e,r)=>{const{showHit:o,showMiss:n,showLocations:a}=r(904),i=r(998);t.exports=()=>{let t=[],e=[],r=[];const a=[i("Patrol Boat",2),i("Submarine",3),i("Cruiser",3),i("Destroyer",4),i("Aircraft Carrier",5)];function s(){for(;r.length>0;)r.pop();a.map((t=>{let e=Math.floor(2*Math.random());if(t.coords=[],0===e){let e=0,o=t.hitpoints,n=Math.floor(10*Math.random()),a=Math.floor(10*Math.random());for(let i=0;i<o;i++)a+i>9?(e+=1,t.coords.push(JSON.stringify([n,a-e])),r.push(JSON.stringify([n,a-e]))):(t.coords.push(JSON.stringify([n,a+i])),r.push(JSON.stringify([n,a+i])));return t}{let e=0,o=t.hitpoints,n=Math.floor(10*Math.random()),a=Math.floor(10*Math.random());for(let i=0;i<o;i++)n+i>9?(e+=1,t.coords.push(JSON.stringify([n-e,a])),r.push(JSON.stringify([n-e,a]))):(t.coords.push(JSON.stringify([n+i,a])),r.push(JSON.stringify([n+i,a])));return t}}))}return{attackedSqs:e,ships:a,takenSpots:r,grid:t,createBoard:function(){for(let e=0;e<10;e++){let e=[];for(let t=0;t<10;t++)e.push(["","","","","","","","","",""]);t.push(e)}return t},receiveAttack:t=>{if(!e.includes(JSON.stringify(t))){let r=JSON.stringify(t);e.push(r);for(let e=0;e<a.length;e++){if(a[e].coords.some((e=>e[1]===t[1]&&e[3]===t[3])))return a[e].hit(r),o(t),void(a.every((t=>!0===t.isSunk()))&&alert("Game over!"));n(t)}}},placeShips:s,setHorizontal:function(){return a.map((t=>{let e=0,r=t.hitpoints,o=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());for(let a=0;a<r;a++)n+a>9?(e+=1,t.coords.push(JSON.stringify([o,n-e]))):t.coords.push(JSON.stringify([o,n+a]));return t.coords}))},setVertical:function(){return a.map((t=>{let e=0,r=t.hitpoints,o=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());for(let a=0;a<r;a++)o+a>9?(e+=1,t.coords.push(JSON.stringify([o-e,n]))):t.coords.push(JSON.stringify([o+a,n]));return t.coords}))},checkPositions:function(){let t=t=>t.filter(((e,r)=>t.indexOf(e)!=r));for(;t(r).length>0;)s()}}}},391:(t,e,r)=>{const o=r(863);t.exports=(t,e)=>{const r=o();let n=r.ships;return r.placeShips(),{playerBoard:r,playerShips:n,turn:e,cpuTurn:!1,attack:()=>{let t=document.querySelectorAll("#CPU-area > div");return t[Math.floor(Math.random()*t.length)].id}}}},998:t=>{t.exports=(t,e)=>{let r=[];return{name:t,hitpoints:e,coords:[],hits:r,isSunk:()=>e===r.length,hit:t=>{r.push(t)}}}},904:(t,e,r)=>{"use strict";r.r(e),r.d(e,{renderBoard:()=>u,showHit:()=>h,showLocations:()=>f,showMiss:()=>p});var o=r(863),n=r.n(o),a=r(391),i=r.n(a);r(998);const s=document.getElementById("new-game-btn"),l=i()("Player",!0),d=i()("Computer",!1);s.addEventListener("click",(()=>{d.playerBoard.checkPositions(),l.playerBoard.checkPositions(),console.log(d.playerBoard.ships),function(){let t=document.querySelectorAll("#play-area > div"),e=document.querySelectorAll("#CPU-area > div");for(let e=0;e<t.length;e++)t[e].addEventListener("click",(()=>{d.playerBoard.receiveAttack(t[e].id),l.playerBoard.receiveAttack(d.attack())}));for(let t=0;t<e.length;t++)e[t].addEventListener("click",(()=>{l.playerBoard.receiveAttack(e[t].id)}))}()})),document.getElementById("play-area");let c=n()().createBoard();function u(t,e){for(let r=0;r<c.length;r++)for(let o=0;o<c.length;o++){let n=document.createElement("div");n.className="square",n.id=JSON.stringify([r,o])+e,t.appendChild(n)}}function h(t){document.getElementById(t).style.backgroundColor="red"}function p(t){document.getElementById(t).style.backgroundColor="black"}function f(){}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=r(904);const e=document.getElementById("play-area"),o=document.getElementById("CPU-area");(0,t.renderBoard)(e,0),(0,t.renderBoard)(o,1)})()})();