export default class Project {
  constructor({name, todos}) {
    this.name = name || this.defaultProjectName;
    this.todos = todos; // new Todos object
  }
  
  get defaultProjectName() {
    return "New Project";
  }

  get getTodos() {
    return this.todos.todosList;
  }
 
  addTodo(todo) {
    this.todos.createTodo(todo); 
  }

  deleteTodo(index) {
    this.todos.removeTodo(index);
  }
  
}
