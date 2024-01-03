export function createProject(name) {
  return {
    name: name,
    todos: [],

    addTodo(todo) {
      this.todos.push(todo);
    },

    getTodoItems() {
      return this.todos;
    },

    findTodoByName(name) {
      let todo;
      this.todos.forEach((item) => {
        if (item.name === name) {
          todo = item;
        }
      });
      return todo;
    },

    createProjectElement() {
      const projectElement = document.createElement("button");
      projectElement.classList.add("projectElement");
      projectElement.id = name;

      projectElement.textContent = this.name;

      return projectElement;
    },
  };
}

export function addProject(projectList) {
  const projectInput = document.getElementById("projectInput");
  const projectText = projectInput.value.trim();
  const projectListElement = document.getElementById("project-list");

  if (projectText) {
    const newProject = createProject(projectText);

    const projectElement = newProject.createProjectElement();
    projectList.pushToProjectList(newProject);

    projectListElement.appendChild(projectElement);

    projectElement.click();
    projectElement.focus();
  }
}
