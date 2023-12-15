export function createProject(name) {
  return {
    name: name,
    todos: [],

    addTodo(todo) {
      this.todos.push(todo);
    },

    getTodoItems() {
      this.todos.forEach((element) => {
        console.log(element.title);
      });
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

  const newProject = createProject(projectText);

  const projectElement = newProject.createProjectElement();
  projectList.pushToProjectList(newProject);

  projectElement.addEventListener("click", function () {
    console.log("clicked project");
  });

  projectListElement.appendChild(projectElement);
}
