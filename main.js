(()=>{var t={863:(t,r,e)=>{const{showHit:o,showMiss:n,showLocations:s}=e(340),i=e(998);t.exports=()=>{let t=[],r=[],e=[];const s=[i("Patrol Boat",2),i("Submarine",3),i("Cruiser",3),i("Destroyer",4),i("Aircraft Carrier",5)];function a(){for(;e.length>0;)e.pop();s.map((t=>{let r=Math.floor(2*Math.random());if(t.coords=[],0===r){let r=0,o=t.hitpoints,n=Math.floor(10*Math.random()),s=Math.floor(10*Math.random());for(let i=0;i<o;i++)s+i>9?(r+=1,t.coords.push(JSON.stringify([n,s-r])),e.push(JSON.stringify([n,s-r]))):(t.coords.push(JSON.stringify([n,s+i])),e.push(JSON.stringify([n,s+i])));return t}{let r=0,o=t.hitpoints,n=Math.floor(10*Math.random()),s=Math.floor(10*Math.random());for(let i=0;i<o;i++)n+i>9?(r+=1,t.coords.push(JSON.stringify([n-r,s])),e.push(JSON.stringify([n-r,s]))):(t.coords.push(JSON.stringify([n+i,s])),e.push(JSON.stringify([n+i,s])));return t}}))}return{attackedSqs:r,ships:s,takenSpots:e,grid:t,createBoard:function(){for(let r=0;r<10;r++){let r=[];for(let t=0;t<10;t++)r.push(["","","","","","","","","",""]);t.push(r)}return t},receiveAttack:t=>{if(!r.includes(JSON.stringify(t))){let e=JSON.stringify(t);r.push(e);for(let r=0;r<s.length;r++){if(s[r].coords.some((r=>r[1]===t[1]&&r[3]===t[3])))return s[r].hit(e),o(t),void(s.every((t=>!0===t.isSunk()))&&alert("Game over!"));n(t)}}},placeShips:a,setHorizontal:function(){return s.map((t=>{let r=0,e=t.hitpoints,o=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());for(let s=0;s<e;s++)n+s>9?(r+=1,t.coords.push(JSON.stringify([o,n-r]))):t.coords.push(JSON.stringify([o,n+s]));return t.coords}))},setVertical:function(){return s.map((t=>{let r=0,e=t.hitpoints,o=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());for(let s=0;s<e;s++)o+s>9?(r+=1,t.coords.push(JSON.stringify([o-r,n]))):t.coords.push(JSON.stringify([o+s,n]));return t.coords}))},checkPositions:function(){let t=t=>t.filter(((r,e)=>t.indexOf(r)!=e));for(;t(e).length>0;)a()}}}},998:t=>{t.exports=(t,r)=>{let e=[];return{name:t,hitpoints:r,coords:[],hits:e,isSunk:()=>r===e.length,hit:t=>{e.push(t)}}}},340:(t,r,e)=>{"use strict";e.r(r),e.d(r,{renderBoard:()=>i,showHit:()=>a,showLocations:()=>d,showMiss:()=>l});var o=e(863),n=e.n(o);document.getElementById("play-area");let s=n()().createBoard();function i(t,r){for(let e=0;e<s.length;e++)for(let o=0;o<s.length;o++){let n=document.createElement("div");n.className="square",n.id=JSON.stringify([e,o])+r,t.appendChild(n)}}function a(t){document.getElementById(t).style.backgroundColor="red"}function l(t){document.getElementById(t).style.backgroundColor="black"}function d(){}}},r={};function e(o){var n=r[o];if(void 0!==n)return n.exports;var s=r[o]={exports:{}};return t[o](s,s.exports,e),s.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=e(340);const r=document.getElementById("play-area"),o=document.getElementById("CPU-area");(0,t.renderBoard)(r,0),(0,t.renderBoard)(o,1)})()})();