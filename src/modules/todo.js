import { createProject } from "./project";

const project = createProject("default");

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

export function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();
  const todoList = document.getElementById("todo-list");
  const newTodo = createTodo(todoText, "", project);

  project.addTodo(newTodo);

  const todoElement = newTodo.createTodoElement();
  todoList.appendChild(todoElement);

  project.getTodoItems();
}
