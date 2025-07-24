export default class Project {
  constructor({name, todos}) {
    this.name = name || this.defaultProjectName;
    this.todos = todos || this.initialTodos; // new Todos array
  }
  
  get defaultProjectName() {
    return "First Project";
  }

  get initialTodos() {
    return [];
  }

  get getTodos() {
    return this.todos;
  }
 
  addTodo(todo) {
    this.todos.push(todo); 
  }

  editTodo(index, todo) {
    this.todos.splice(index, 1, todo)
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
  
}
