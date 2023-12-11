export class ProjectList {
  constructor() {
    this.projects = [];

    this.addProject = (newProject) => {
      this.projects.push(newProject);
    };

    // this.removeProject = (oldProject) => {
    //   this.projects.splice(this.projects.indexOf(oldProject), 1);
    // };

    // this.findProject = (project) => {
    //   if (this.projects.includes(project)) {
    //     return this.projects.indexOf(project);
    //   }
    // };

    this.getAllProjects = () => {
      this.projects.forEach((project) => console.log(project.todos));
    };
  }
}
