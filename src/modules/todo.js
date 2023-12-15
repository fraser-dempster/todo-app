function createTodo(title, description) {
  return {
    title: title,
    description: description,
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
      todoItem.id = this.title;
      todoItem.className = "todo-item";
      todoItem.textContent = this.title;

      return todoItem;
    },
  };
}

export function addTodo(selectedProject) {
  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todoInput");

  const todoText = todoInput.value.trim();
  const newTodo = createTodo(todoText, "");
  const todoElement = newTodo.createTodoElement();

  selectedProject.addTodo(newTodo);
  todoList.appendChild(todoElement);
}
