import { addProject, createProject } from "./project";
import { createProjectList } from "./projectList";
import { addTodo } from "./todo";
import { toggleAddButton, toggleInputBox } from "./utils";

var selectedProject;
const projectList = createProjectList("Project list");

export function setUpUI() {
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
      displayTodos(e.target.id);
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

export function displayTodos(projectName) {
  const allProjects = projectList.projects;
  if (projectList.findProjectByName(projectName) === selectedProject) {
    selectedProject = projectList.findProjectByName(projectName);
    let todoItems = selectedProject.getTodoItems();

    for (let i = 0; i <= todoItems.length - 1; i++) {
      const todoItem = document.getElementById(todoItems[i].title);
      todoItem.style.display = "block";
    }
  }

  for (let i = 0; i <= allProjects.length - 1; i++) {
    if (allProjects[i] !== selectedProject) {
      const todoItems = allProjects[i].getTodoItems();

      for (let i = 0; i <= todoItems.length - 1; i++) {
        const todoItem = document.getElementById(todoItems[i].title);
        todoItem.style.display = "none";
      }
    }
  }
}
