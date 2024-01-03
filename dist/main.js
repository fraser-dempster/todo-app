(()=>{"use strict";function t(t){return{name:t,todos:[],addTodo(t){this.todos.push(t)},getTodoItems(){return this.todos},findTodoByName(t){let e;return this.todos.forEach((n=>{n.title===t&&(e=n)})),e},createProjectElement(){const e=document.createElement("button");return e.classList.add("projectElement"),e.id=t,e.textContent=this.name,e}}}function e(e){const n=document.getElementById("projectInput").value.trim();let o=!1;const d=document.getElementById("project-list");document.getElementById("sidebar");for(let t=0;t<=e.projects.length-1;t++)e.projects[t].name===n&&(o=!0);if("Can't have two projects",n&&!o){const o=t(n),c=o.createProjectElement();e.pushToProjectList(o),d.appendChild(c),c.click(),c.focus()}else alert("You can't add a project that already exists!")}function n(t){const e=document.getElementById("todo-list"),n=document.getElementById("todoInput").value.trim();if(n){const o={title:n,description:"",dueDate:undefined,completed:!1,toggleCompleted:function(){this.completed=!this.completed},editTitle:function(t){this.title=t},editDescription:function(t){this.description=t}},d=l(n,o.description,o.dueDate,o.completed);e.innerHTML+=d,t.addTodo(o)}}function o(t,e){const n=document.getElementById(t);var o;n.style.display="block"===n.style.display?"none":"block","block"===n.style.display?(o=e,document.getElementById(o).focus()):function(t){document.getElementById(t).value=""}(e)}function d(t){const e=document.getElementById(t);e.style.display="none"===e.style.display?"block":"none"}var c;const i={name:"Project list",projects:[],pushToProjectList(t){this.projects.push(t)},findProjectByName(t){let e;return this.projects.forEach((n=>{n.name===t&&(e=n)})),e}};function l(t,e,n,o){return`\n  <div id=${t} class="todo-item">\n    <div class="todo-title">${t}</div>\n    <div class="due-date">Due Date: ${n}</div>\n    <dic class="completed">Completed: ${o}</div>\n  </div>\n`}!function(){const u=document.getElementById("project-list"),r=t("Default"),s=r.createProjectElement();u.appendChild(s),i.pushToProjectList(r),c=i.findProjectByName("Default"),document.getElementById("project-list").addEventListener("click",(function(t){var e;document.getElementById("todo-list").innerHTML="",c=i.findProjectByName(t.target.id),e=t.target.id,i.findProjectByName(e)===c&&(c=i.findProjectByName(e)).getTodoItems().map((t=>{const e=l(t.title,t.description,t.dueDate,t.completed);document.getElementById("todo-list").innerHTML+=e}))})),document.getElementById("createProjectButton").addEventListener("click",(function(){e(i),d("addProjectButton"),o("projectInputContainer","projectInput")})),document.getElementById("projectInput").addEventListener("keyup",(function(t){"Enter"===t.key&&(e(i),d("addProjectButton"),o("projectInputContainer","projectInput"))})),document.getElementById("content-grid").addEventListener("click",(function(t){const e=t.target.closest(".todo-item");if(e){const t=c.findTodoByName(e.id),n=document.getElementById("myModal"),o=document.getElementById("modalTitle"),d=document.getElementById("modalDescription");o.textContent=t.title,d.textContent="Description "+t.description,n.style.display="flex"}})),document.getElementById("addTodoButton").addEventListener("click",(function(){d("addTodoButton"),o("todoInputContainer","todoInput")})),document.getElementById("addProjectButton").addEventListener("click",(function(){d("addProjectButton"),o("projectInputContainer","projectInput")})),document.getElementById("todoInput").addEventListener("keyup",(function(t){"Enter"===t.key&&(n(c),d("addTodoButton"),o("todoInputContainer","todoInput"))})),document.getElementById("createTodoButton").addEventListener("click",(function(){n(c),d("addTodoButton"),o("todoInputContainer","todoInput")})),document.getElementById("cancelAddTodo").addEventListener("click",(function(){d("addTodoButton"),o("todoInputContainer","todoInput")})),document.getElementById("cancelAddProject").addEventListener("click",(function(){d("addProjectButton"),o("projectInputContainer","projectInput")})),window.addEventListener("click",(function(t){const e=document.getElementById("myModal");t.target===e&&(e.style.display="none")}))}()})();