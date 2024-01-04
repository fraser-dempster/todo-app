import { createTodoElementTemplate } from "./ui";

function createTodo(title, description, dueDate, priority) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    completed: false,
    priority,
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
  const fragment = document.createDocumentFragment();

  const todoText = todoInput.value.trim();

  if (todoText) {
    const newTodo = createTodo(todoText, "");
    const todoElement = createTodoElementTemplate(
      todoText,
      newTodo.description,
      newTodo.dueDate,
      newTodo.completed,
      newTodo.priority
    );
    fragment.appendChild(todoElement);
    todoList.appendChild(fragment);

    selectedProject.addTodo(newTodo);
  }
}
