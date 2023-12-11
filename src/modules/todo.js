const { Project } = require("./project");

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

function toggleTodoInput() {
  const todoInputContainer = document.getElementById("todoInputContainer");
  const toggleButton = document.getElementById("toggleInput");
  todoInputContainer.style.display =
    todoInputContainer.style.display === "none" ? "block" : "none";

  if (todoInputContainer.style.display === "block") {
    document.getElementById("todoInput").focus();
    toggleButton.style.display = "none";
  }
}

function addTodo() {
  const project = new Project("default");

  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();
  const todoList = document.getElementById("todo-list");
  const newTodo = createTodo(todoText, "", project);

  const todoElement = newTodo.createTodoElement();
  todoList.appendChild(todoElement);
}

document.getElementById("toggleInput").addEventListener("click", function () {
  toggleTodoInput();
});

document
  .getElementById("createTodoButton")
  .addEventListener("click", function () {
    addTodo();
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
