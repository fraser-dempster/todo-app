import { addProject } from "./project";
import { createProjectList } from "./projectList";

const projectList = createProjectList("Project list");
const projectListElement = document.getElementById("project-list");

document
  .getElementById("createProjectButton")
  .addEventListener("click", function () {
    addProject(projectList);
  });

// projectList.getAllProjects();
