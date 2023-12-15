import { addProject } from "./project";
import { createProjectList } from "./projectList";
import { addTodo } from "./todo";
import { toggleAddButton, toggleInputBox } from "./utils";

const projectList = createProjectList("Project list");
const projectListElement = document.getElementById("project-list");

document
  .getElementById("createProjectButton")
  .addEventListener("click", function () {
    addProject(projectList);
  });

document.getElementById("addTodoButton").addEventListener("click", function () {
  toggleAddButton("addTodoButton");
  toggleInputBox("todoInputContainer", "todoInput");
});

document
  .getElementById("createTodoButton")
  .addEventListener("click", function () {
    addTodo();
    toggleAddButton("addTodoButton");
    toggleInputBox("todoInputContainer", "todoInput");
  });
