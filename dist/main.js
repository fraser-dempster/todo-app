(()=>{"use strict";function t(t){return{name:t,todos:[],addTodo(t){this.todos.push(t)},getTodoItems(){return this.todos},findTodoByName(t){let e;return this.todos.forEach((n=>{n.name===t&&(e=n)})),e},createProjectElement(){const e=document.createElement("button");return e.classList.add("projectElement"),e.id=t,e.textContent=this.name,e}}}function e(t,e,n,o){return`\n  <div id=${t} class="todo-item">\n    <div class="todo-info">\n      <div class="todo-title">${t}</div>\n      <div class="todo-description">${e}\n      <div class="due-date">Due Date: ${n}</div>\n      <dic class="completed">Completed: ${o}</div>\n    </div>\n    <button class="edit-button">Edit</button>\n  </div>\n`}function n(t,e){const n=document.getElementById(t);var o;n.style.display="block"===n.style.display?"none":"block","block"===n.style.display?(o=e,document.getElementById(o).focus()):function(t){document.getElementById(t).value=""}(e)}function o(t){const e=document.getElementById(t);e.style.display="none"===e.style.display?"block":"none"}var d;const c={name:"Project list",projects:[],pushToProjectList(t){this.projects.push(t)},findProjectByName(t){let e;return this.projects.forEach((n=>{n.name===t&&(e=n)})),e}};!function(){const i=document.getElementById("project-list"),s=t("Default");i.appendChild(s.createProjectElement()),c.pushToProjectList(s),d=c.findProjectByName("Default"),document.getElementById("project-list").addEventListener("click",(function(t){var n;document.getElementById("todo-list").innerHTML="",d=c.findProjectByName(t.target.id),n=t.target.id,c.projects,c.findProjectByName(n)===d&&(d=c.findProjectByName(n)).getTodoItems().map((t=>{const n=e(t.title,t.description,t.dueDate,t.completed);document.getElementById("todo-list").innerHTML+=n}))})),document.getElementById("createProjectButton").addEventListener("click",(function(){!function(e){const n=document.getElementById("projectInput").value.trim(),o=document.getElementById("project-list"),d=t(n),c=d.createProjectElement();e.pushToProjectList(d),o.appendChild(c),c.click()}(c)})),document.getElementById("addTodoButton").addEventListener("click",(function(){o("addTodoButton"),n("todoInputContainer","todoInput")})),document.getElementById("createTodoButton").addEventListener("click",(function(){!function(t){const n=document.getElementById("todo-list"),o=document.getElementById("todoInput").value.trim(),d={title:o,description:"",dueDate:undefined,completed:!1,toggleCompleted:function(){this.completed=!this.completed},editTitle:function(t){this.title=t},editDescription:function(t){this.description=t}};const c=e(o,d.description,d.dueDate,d.completed);n.innerHTML+=c,t.addTodo(d)}(d),o("addTodoButton"),n("todoInputContainer","todoInput")}))}()})();