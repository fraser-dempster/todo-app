import { addProject, createProject } from "./project";
import { createProjectList } from "./projectList";
import { addTodo } from "./todo";
import { toggleAddButton, toggleInputBox } from "./utils";

export function setUpUI() {
  const projectList = createProjectList("Project list");
  const projectListElement = document.getElementById("project-list");

  const defaultProject = createProject("Default");

  projectListElement.appendChild(defaultProject.createProjectElement());

  projectList.pushToProjectList(defaultProject);

  document
    .getElementById(defaultProject.name)
    .addEventListener("click", function () {
      defaultProject.getTodoItems();
    });

  document
    .getElementById("createProjectButton")
    .addEventListener("click", function () {
      addProject(projectList);
    });

  document
    .getElementById("addTodoButton")
    .addEventListener("click", function () {
      toggleAddButton("addTodoButton");
      toggleInputBox("todoInputContainer", "todoInput");
    });

  document
    .getElementById("createTodoButton")
    .addEventListener("click", function () {
      addTodo(defaultProject);
      toggleAddButton("addTodoButton");
      toggleInputBox("todoInputContainer", "todoInput");
    });
}
