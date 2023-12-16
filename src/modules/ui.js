import { addProject, createProject } from "./project";
import { createProjectList } from "./projectList";
import { addTodo } from "./todo";
import { toggleAddButton, toggleInputBox } from "./utils";

var selectedProject;

export function setUpUI() {
  const projectList = createProjectList("Project list");
  const projectListElement = document.getElementById("project-list");

  const defaultProject = createProject("Default");

  projectListElement.appendChild(defaultProject.createProjectElement());

  projectList.pushToProjectList(defaultProject);
  // selectedProject = defaultProject;

  selectedProject = projectList.findProjectByName("Default");

  document
    .getElementById("project-list")
    .addEventListener("click", function (e) {
      selectedProject = projectList.findProjectByName(e.target.id);
      console.log(selectedProject.getTodoItems());
      // projectList.selectedProject = e.target;
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
      addTodo(selectedProject);
      toggleAddButton("addTodoButton");
      toggleInputBox("todoInputContainer", "todoInput");
    });
}
