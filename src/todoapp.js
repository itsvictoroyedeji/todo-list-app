import "./styles.css";
import { greeting } from "./greetings"; // remove this line and src/greetings.js file
import ProjectTasks from "./pages/projectTasks";
import { attachEventListeners } from "./helpers/attachEventListeners";
import AddTaskModal from "./modals/addTask";
import User from "./modules/user";
import Project from "./modules/project";
import TodoFactory from "./modules/todo-factory";
// import { defaultUser }  from "./modals/default-user";

document.addEventListener('DOMContentLoaded',() => {
   initLoader();
});

let defaultUser;

// Initialize default user name and project if empty
if (defaultUser === undefined) {
  defaultUser = new User({
    name: "Victor",
    projects: [
      new Project({})
    ]
  });

  defaultUser.projects[0].addTodo(
    TodoFactory ({
      title: "First task",
      description: "First description",
      dueDate: new Date().toLocaleDateString("en-CA"),
      priority: "Priority 4"
    })
  )
};

// Display Default Project Task + Add Task Modal's HTML + Event Listeners
function initLoader() {
  ProjectTasks(defaultUser);
  AddTaskModal();
  attachEventListeners();
  // console.log(defaultUser);
};
