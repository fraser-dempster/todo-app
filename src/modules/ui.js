// // create a project item
// // should have a title and be able to be selected
// // whichever one is selected you can then create tasks in it
// // create a task can just have a text element for now
// // when you create a project it should be using properties fromt
// // should show specific content in the content area for that project

// import { Project } from "./project";
// import { ProjectList } from "./projectList";
// import { Todo } from "./todo";

// const projectList = document.getElementById("project-list");
// const projects = new ProjectList();

// let projectObject = new Project("default project");

// const newProjectElement = document.createElement("button");
// newProjectElement.id = "default-project";
// newProjectElement.className = "project";
// newProjectElement.textContent = "default-project";

// projects.addProject(projectObject);
// console.log(projects);
// projectList.appendChild(newProjectElement);

// newProjectElement.addEventListener("click", function () {
//   console.log(projectObject.todos);
// });

// const createProjectItem = () => {
//   const projectList = document.getElementById("project-list");

//   const projectName = prompt("Enter your project name");
//   const userText = projectName || "New project";

//   let projectObject = new Project(userText);

//   const newProjectElement = document.createElement("button");
//   newProjectElement.id = projectObject.name;
//   newProjectElement.className = "project";
//   newProjectElement.textContent = projectObject.name;

//   projects.addProject(projectObject);
//   projectList.appendChild(newProjectElement);

//   newProjectElement.addEventListener("click", function () {
//     console.log(projectObject.todos);
//   });
// };

// const addProjectItem = () => {
//   const addProjectButton = document.getElementById("add-project-button");

//   addProjectButton.addEventListener("click", function () {
//     createProjectItem();
//   });
// };

// const addTodoItem = () => {
//   const taskName = prompt("What do you need to do?");
//   const userText = taskName || "New task";

//   let taskItem = new Todo(userText);

//   const newTaskElement = document.createElement("button");
//   newTaskElement.id = taskItem.title;
//   newTaskElement.className = "todo-item";
//   newTaskElement.textContent = taskItem.title;

//   const taskList = document.getElementById("task-list");
//   taskList.appendChild(newTaskElement);

//   projects.projects[0].addTodo(newTaskElement);

//   newTaskElement.addEventListener("click", () => {
//     taskItem.editTitle("hello");
//   });
// };

// const addTodoButton = () => {
//   const addTodoItemButton = document.getElementById("add-task-button");

//   addTodoItemButton.addEventListener("click", function () {
//     addTodoItem(projects[0], "default-project");
//   });
// };

// document.addEventListener("DOMContentLoaded", function () {
//   addProjectItem();
//   addTodoButton();
// });
