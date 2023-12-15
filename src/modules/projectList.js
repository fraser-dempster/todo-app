export function createProjectList(name) {
  return {
    name: name,
    projects: [],
    pushToProjectList(newProject) {
      this.projects.push(newProject);
    },

    getAllProjects() {
      this.getProjects.forEach((project) => console.log(project.todos));
    },
  };
}
