import { addProject, createProject } from "./project";
import { createProjectList } from "./projectList";
import { addTodo, createTodoElementTemplate } from "./todo";
import { toggleAddButton, toggleInputBox } from "./utils";

var selectedProject;
const projectList = createProjectList("Project list");

export function setUpUI() {
  const projectListElement = document.getElementById("project-list");

  const defaultProject = createProject("Default");

  projectListElement.appendChild(defaultProject.createProjectElement());

  projectList.pushToProjectList(defaultProject);

  selectedProject = projectList.findProjectByName("Default");

  document
    .getElementById("project-list")
    .addEventListener("click", function (e) {
      clearTodoList();
      selectedProject = projectList.findProjectByName(e.target.id);
      displayTodos(e.target.id);
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

    todoItems.map((item) => {
      const todoElement = createTodoElementTemplate(
        item.title,
        item.description,
        item.dueDate,
        item.completed
      );
      document.getElementById("todo-list").innerHTML += todoElement;
    });
  }
}

function clearTodoList() {
  document.getElementById("todo-list").innerHTML = "";
}
