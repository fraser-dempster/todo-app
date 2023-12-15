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
      todoItem.className = "todo-item";
      todoItem.textContent = this.title;

      return todoItem;
    },
  };
}

export function addTodo(selectedProject) {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();
  const todoList = document.getElementById("todo-list");
  const newTodo = createTodo(todoText, "");

  selectedProject.addTodo(newTodo);

  const todoElement = newTodo.createTodoElement();
  todoList.appendChild(todoElement);

  selectedProject.getTodoItems();
}
