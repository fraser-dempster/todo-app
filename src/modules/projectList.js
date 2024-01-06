export function createProjectList(name) {
  return {
    name: name,
    projects: [],
    pushToProjectList(newProject) {
      this.projects.push(newProject);
    },
    findProjectByID(id) {
      let project;
      this.projects.forEach((item) => {
        if (item.id == id) {
          project = item;
        }
      });
      return project;
    },
  };
}
