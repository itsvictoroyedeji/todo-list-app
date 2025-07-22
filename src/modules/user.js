export default class User {
  constructor({name, projects}) {
    this.name = name || this.defaultName;
    this.projects = projects || this.defaultProject; // New Project Array
  }

  get defaultName() {
    return "New User";
  }

  get defaultProject() {
    return [];
  }

  get getProjects() {
    return this.projects;
  }

  addNewProject(project) {
    this.projects.push(project);
  }

  deleteProject(index) {
    this.projects.splice(index, 1);
  }
}
