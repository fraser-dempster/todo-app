import { addProject, createProject } from "./project";
import { createProjectList } from "./projectList";
import { addTodo } from "./todo";
import { toggleAddButton, toggleInputBox } from "./utils";
import { format } from "date-fns";

var selectedProject;
const projectList = createProjectList("Project list");

export function setUpUI() {
  const projectListElement = document.getElementById("project-list");

  const defaultProject = createProject("Default");
  const defaultProjectElement = defaultProject.createProjectElement();

  projectListElement.appendChild(defaultProjectElement);

  projectList.pushToProjectList(defaultProject);

  selectedProject = projectList.findProjectByID(0);

  document
    .getElementById("project-list")
    .addEventListener("click", function (e) {
      clearTodoList();
      selectedProject = projectList.findProjectByID(e.target.id);
      displayTodos(e.target.id);
    });

  document
    .getElementById("createProjectButton")
    .addEventListener("click", function () {
      addProject(projectList);
      toggleAddButton("addProjectButton");
      toggleInputBox("projectInputContainer", "projectInput");
    });

  document
    .getElementById("projectInput")
    .addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        addProject(projectList);
        toggleAddButton("addProjectButton");
        toggleInputBox("projectInputContainer", "projectInput");
      }
    });

  document
    .getElementById("content-grid")
    .addEventListener("click", function (event) {
      const targetTodoItem = event.target.closest(".todo-item");
      if (targetTodoItem && event.target.type !== "checkbox") {
        const todoItem = selectedProject.findTodoByName(targetTodoItem.id);
        const myModal = document.getElementById("myModal");
        const modalTitle = document.getElementById("modalTitle");
        const modalDescription = document.getElementById("modalDescription");

        modalTitle.textContent = todoItem.title;
        modalDescription.textContent = "Description " + todoItem.description;
        myModal.style.display = "flex";
      }
    });

  document
    .getElementById("content-grid")
    .addEventListener("click", function (event) {
      const targetTodoItem = event.target.closest(".todo-item");

      if (targetTodoItem && event.target.type === "checkbox") {
        const todoItem = selectedProject.findTodoByName(targetTodoItem.id);

        todoItem.toggleCompleted();

        if (todoItem.completed === false) {
          targetTodoItem.style.backgroundColor = "#ff8080";
        } else if (todoItem.completed === true) {
          targetTodoItem.style.backgroundColor = "#80ff80";
        }
      }
    });

  function formatDateDependingOnYear(fullDate) {}

  document.getElementById("set-date").addEventListener("click", function () {
    const modalElement = document.getElementById("modal-content");
    const todoItemElement = document.getElementById(modalTitle.textContent);
    const todoItem = selectedProject.findTodoByName(modalTitle.textContent);
    const dateDisplay = todoItemElement.getElementsByClassName("date")[0];

    if (modalElement.getElementsByClassName("due-date")[0].value) {
      todoItem.setDueDate(
        modalElement.getElementsByClassName("due-date")[0].value
      );

      if (
        format(
          modalElement.getElementsByClassName("due-date")[0].value,
          "yyyy"
        ) !== new Date().getFullYear().toString()
      ) {
        dateDisplay.innerHTML = "";
        dateDisplay.innerHTML +=
          format(todoItem.dueDate, "dd") +
          format(todoItem.dueDate, " MMM") +
          format(todoItem.dueDate, " yyyy");
      } else {
        dateDisplay.innerHTML = "";
        dateDisplay.innerHTML +=
          format(todoItem.dueDate, "dd") + format(todoItem.dueDate, " MMM");
      }
    } else {
      alert("Please select a date");
    }
  });

  document
    .getElementById("addTodoButton")
    .addEventListener("click", function () {
      toggleAddButton("addTodoButton");
      toggleInputBox("todoInputContainer", "todoInput");
    });

  document
    .getElementById("addProjectButton")
    .addEventListener("click", function () {
      toggleAddButton("addProjectButton");
      toggleInputBox("projectInputContainer", "projectInput");
    });

  document
    .getElementById("todoInput")
    .addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        addTodo(selectedProject);
        toggleAddButton("addTodoButton");
        toggleInputBox("todoInputContainer", "todoInput");
      }
    });

  document
    .getElementById("createTodoButton")
    .addEventListener("click", function () {
      addTodo(selectedProject);
      toggleAddButton("addTodoButton");
      toggleInputBox("todoInputContainer", "todoInput");
    });

  document
    .getElementById("cancelAddTodo")
    .addEventListener("click", function () {
      toggleAddButton("addTodoButton");
      toggleInputBox("todoInputContainer", "todoInput");
    });

  document
    .getElementById("cancelAddProject")
    .addEventListener("click", function () {
      toggleAddButton("addProjectButton");
      toggleInputBox("projectInputContainer", "projectInput");
    });

  window.addEventListener("click", function (event) {
    const myModel = document.getElementById("myModal");

    if (event.target === myModel) {
      myModel.style.display = "none";
    }
  });
}

export function displayTodos(projectName) {
  if (projectList.findProjectByID(projectName) === selectedProject) {
    selectedProject = projectList.findProjectByID(projectName);
    let todoItems = selectedProject.getTodoItems();

    todoItems.map((item) => {
      const todoElement = createTodoElementTemplate(item.title, item.dueDate);
      document.getElementById("todo-list").innerHTML += todoElement.innerHTML;
    });
  }
}

function clearTodoList() {
  document.getElementById("todo-list").innerHTML = "";
}

function formatDate(dueDate) {
  if (
    dueDate &&
    format(dueDate, "yyyy") === new Date().getFullYear().toString()
  ) {
    console.log("formatted");
    return format(dueDate, "dd") + format(dueDate, " MMM");
  } else if (
    dueDate &&
    format(dueDate, "yyyy") !== new Date().getFullYear().toString()
  ) {
    return (
      format(dueDate, "dd") + format(dueDate, " MMM") + format(dueDate, " yyyy")
    );
  } else {
    console.log("lol");
    return dueDate;
  }
}

export function createTodoElementTemplate(title, dueDate) {
  const todoItem = document.createElement("div");

  todoItem.innerHTML += `
  <div style="background-color: #ff8080" id=${title} class="todo-item">
    <div class="todo-title">${title}</div>
    <div id="date" class="date">${formatDate(dueDate)}</div>
    <label class="switch">
      <div class="completed" id="completed"></div> 
      <input class="regular-checkbox" type="checkbox" id="toggleCompleted">
      <span class="slider round"></span>
  </label>
  </div>
`;

  return todoItem;
}

export function createErrorElementTemplate(errorName) {
  return `
    <div style="color:red" id=${errorName}>${errorName}</div>
    `;
}
