import { createErrorElementTemplate } from "./ui";

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
        if (item.title === name) {
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
  let projectExists = false;
  const projectListElement = document.getElementById("project-list");
  const sidebarElement = document.getElementById("sidebar");

  for (let i = 0; i <= projectList.projects.length - 1; i++) {
    if (projectList.projects[i].name === projectText) {
      projectExists = true;
    }
  }
  const errorElement = createErrorElementTemplate("Can't have two projects");

  if (projectText && !projectExists) {
    const newProject = createProject(projectText);

    const projectElement = newProject.createProjectElement();
    projectList.pushToProjectList(newProject);

    projectListElement.appendChild(projectElement);

    projectElement.click();
    projectElement.focus();
  } else {
    // sidebarElement.innerHTML += errorElement;
    alert("You can't add a project that already exists!");
  }
}
