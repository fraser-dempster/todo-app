(()=>{"use strict";function t(t){return{name:t,todos:[],addTodo(t){this.todos.push(t)},getTodoItems(){this.todos.forEach((t=>{console.log(t.title)}))},createProjectElement(){const e=document.createElement("button");return e.classList.add("projectElement"),e.id=t,e.textContent=this.name,e}}}function e(t,e){const o=document.getElementById(t);var n;o.style.display="block"===o.style.display?"none":"block","block"===o.style.display?(n=e,document.getElementById(n).focus()):function(t){document.getElementById(t).value=""}(e)}function o(t){const e=document.getElementById(t);e.style.display="none"===e.style.display?"block":"none"}!function(){const n={name:"Project list",projects:[],pushToProjectList(t){this.projects.push(t)},getAllProjects(){this.getProjects.forEach((t=>console.log(t.todos)))}},c=document.getElementById("project-list"),d=t("Default");c.appendChild(d.createProjectElement()),n.pushToProjectList(d),document.getElementById(d.name).addEventListener("click",(function(){d.getTodoItems()})),document.getElementById("createProjectButton").addEventListener("click",(function(){!function(e){const o=document.getElementById("projectInput").value.trim(),n=document.getElementById("project-list"),c=t(o),d=c.createProjectElement();e.pushToProjectList(c),d.addEventListener("click",(function(){console.log("clicked project")})),n.appendChild(d)}(n)})),document.getElementById("addTodoButton").addEventListener("click",(function(){o("addTodoButton"),e("todoInputContainer","todoInput")})),document.getElementById("createTodoButton").addEventListener("click",(function(){(function(t){const e=document.getElementById("todoInput").value.trim(),o=document.getElementById("todo-list"),n={title:e,description:"",completed:!1,toggleCompleted:function(){this.completed=!this.completed},editTitle:function(t){this.title=t},editDescription:function(t){this.description=t},createTodoElement:function(){const t=document.createElement("div");return t.className="todo-item",t.textContent=this.title,t}};t.addTodo(n);const c=n.createTodoElement();o.appendChild(c),t.getTodoItems()})(d),o("addTodoButton"),e("todoInputContainer","todoInput")}))}()})();