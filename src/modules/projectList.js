export function createProjectList(name) {
  return {
    name: name,
    projects: [],
    pushToProjectList(newProject) {
      this.projects.push(newProject);
    },
    findProjectByName(name) {
      let project;
      this.projects.forEach((item) => {
        if (item.name === name) {
          project = item;
        }
      });
      return project;
    },
  };
}
