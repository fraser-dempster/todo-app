import { createTodoElementTemplate } from "./ui";

var numberOfTodos = 1;

function createTodo(title, description, dueDate, priority) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    completed: false,
    id: numberOfTodos,
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
    setDueDate: function (newDate) {
      this.dueDate = newDate;
    },
  };
}

export function addTodo(selectedProject) {
  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todoInput");
  const fragment = document.createDocumentFragment();

  const todoText = todoInput.value.trim();

  if (todoText) {
    const newTodo = createTodo(todoText);
    const todoElement = createTodoElementTemplate(
      todoText,
      newTodo.description,
      numberOfTodos
    );

    fragment.appendChild(todoElement);
    todoList.appendChild(fragment);

    selectedProject.addTodo(newTodo);
    numberOfTodos++;
  }
}
