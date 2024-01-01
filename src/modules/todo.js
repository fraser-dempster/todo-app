import { createTodoElementTemplate } from "./ui";

function createTodo(title, description, dueDate) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
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
  };
}

export function addTodo(selectedProject) {
  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todoInput");

  const todoText = todoInput.value.trim();

  if (todoText) {
    const newTodo = createTodo(todoText, "");
    const todoElement = createTodoElementTemplate(
      todoText,
      newTodo.description,
      newTodo.dueDate,
      newTodo.completed
    );
    todoList.innerHTML += todoElement;

    selectedProject.addTodo(newTodo);
  }
}
