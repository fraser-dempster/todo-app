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
    // createTodoElement: function () {
    //   const todoItem = document.createElement("div");
    //   todoItem.id = this.title;
    //   todoItem.className = "todo-item";
    //   todoItem.textContent = this.title;

    //   return todoItem;
    // },
  };
}

export function createTodoElementTemplate(
  title,
  description,
  dueDate,
  completed
) {
  return `
  <div id=${title} class="todo-item">
    <div class="todo-info">
      <div class="todo-title">${title}</div>
      <div class="todo-description">${description}
      <div class="due-date">Due Date: ${dueDate}</div>
      <dic class="completed">Completed: ${completed}</div>
    </div>
    <button class="edit-button">Edit</button>
  </div>
`;
}

export function addTodo(selectedProject) {
  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todoInput");

  const todoText = todoInput.value.trim();
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
