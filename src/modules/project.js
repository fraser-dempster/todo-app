export class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];

    // this.getName = () => {
    //   return this.name;
    // };

    this.addTodo = (newTodo) => {
      this.todos.push(newTodo);
    };

    // this.removeTodo = (oldTodo) => {
    //   this.todos.splice(this.todos.indexOf(oldTodo), 1);
    // };

    // this.findTodo = (todo) => {
    //   if (this.todos.includes(todo)) {
    //     return this.todos.indexOf(todo);
    //   }
    // };

    // this.getAllTodos = () => {
    //   this.todos.forEach((item) => console.log(item));
    // };
  }
}
