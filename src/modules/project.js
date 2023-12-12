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
      projectElement.className = "projectElement";
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
  projectList.projects.push(newProject);
  console.log(projectList);

  const projectElement = newProject.createProjectElement();

  projectListElement.appendChild(projectElement);
}

// document.getElementById("addTodoButton").addEventListener("click", function () {
//   toggleAddTodoButton();
//   toggleTodoInput();
// });
