export function createProjectList(name) {
  return {
    name: name,
    projects: [],

    addProject: (newProject) => {
      this.projects.push(newProject);
    },

    getAllProjects: () => {
      this.projects.forEach((project) => console.log(project.todos));
    },
  };
}
