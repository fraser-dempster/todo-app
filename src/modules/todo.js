import { Project } from "./project";

function createTodo(title, description, project) {
  return {
    title: title,
    description: description,
    project: project,
    completed: false,
    toggleCompleted: function () {
      this.completed = !this.completed;
    },
    editTitle: function (newTitle) {
      this.title = newTitle;
    },
    editDescription: function (newDescription) {
      this.description = newDescription;
    },
    createTodoElement: function () {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";
      todoItem.setAttribute("data-project", this.project.name);
      todoItem.textContent = this.title;

      return todoItem;
    },
  };
}

function focusCursorOnInput(inputId) {
  document.getElementById(inputId).focus();
}

function setInputValueToEmptyString(inputId) {
  document.getElementById(inputId).value = "";
}

function toggleTodoInput() {
  const todoInputContainer = document.getElementById("todoInputContainer");
  todoInputContainer.style.display =
    todoInputContainer.style.display === "block" ? "none" : "block";

  if (todoInputContainer.style.display === "block") {
    focusCursorOnInput("todoInput");
  } else {
    setInputValueToEmptyString("todoInput");
  }
}

function toggleAddTodoButton() {
  const addTodoButton = document.getElementById("addTodoButton");
  addTodoButton.style.display =
    addTodoButton.style.display === "none" ? "block" : "none";
}

function addTodo() {
  const project = new Project("default");

  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();
  const todoList = document.getElementById("todo-list");
  const newTodo = createTodo(todoText, "", project);
  project.todos.push(newTodo);

  const todoElement = newTodo.createTodoElement();
  todoList.appendChild(todoElement);

  project.todos.forEach((item) => console.log(item));
}

document.getElementById("addTodoButton").addEventListener("click", function () {
  toggleAddTodoButton();
  toggleTodoInput();
});

document
  .getElementById("createTodoButton")
  .addEventListener("click", function () {
    addTodo();
    toggleAddTodoButton();
    toggleTodoInput();
  });
// this.editDescription = (newDescription) => {
//   this.description = newDescription;
// };

// this.editDueDate = (newDueDate) => {
//   this.dueDate = newDueDate;
// };

// this.editPriority = (newPriority) => {
//   this.priority = newPriority;
// };

// this.completeTodo = () => {
//   this.completed = true;
// };

// this.incompleteTodo = () => {
//   this.completed = false;
// };

// this.getAllInformation = () => {
//   return {
//     title: this.title,
//     description: this.description,
//     dueDate: this.dueDate,
//     priority: this.priority,
//     completed: this.completed,
//   };
// };
