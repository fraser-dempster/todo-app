(()=>{var t={189:(t,e,o)=>{"use strict";o.r(e),o.d(e,{Project:()=>n});class n{constructor(t){this.name=t,this.todos=[],this.addTodo=t=>{this.todos.push(t)}}}},62:(t,e,o)=>{const{Project:n}=o(189);document.getElementById("toggleInput").addEventListener("click",(function(){!function(){const t=document.getElementById("todoInputContainer"),e=document.getElementById("toggleInput");t.style.display="none"===t.style.display?"block":"none","block"===t.style.display&&(document.getElementById("todoInput").focus(),e.style.display="none")}()})),document.getElementById("createTodoButton").addEventListener("click",(function(){!function(){const t=new n("default"),e=document.getElementById("todoInput").value.trim(),o=document.getElementById("todo-list"),d=function(t,e,o){return{title:t,description:"",project:o,completed:!1,toggleCompleted:function(){this.completed=!this.completed},editTitle:function(t){this.title=t},editDescription:function(t){this.description=t},createTodoElement:function(){const t=document.createElement("div");return t.className="todo-item",t.setAttribute("data-project",this.project.name),t.textContent=this.title,t}}}(e,0,t).createTodoElement();o.appendChild(d)}()}))}},e={};function o(n){var d=e[n];if(void 0!==d)return d.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";o(62)})()})();