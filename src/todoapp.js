import "./styles.css";
import { greeting } from "./greetings"; // remove this line and src/greetings.js file
import ProjectTasks from "./pages/projectTasks";
import AddTaskModal from "./modals/addTask";
import User from "./modules/user";
import Project from "./modules/project";
import TodoFactory from "./modules/todo-factory";
// import { defaultUser }  from "./modals/default-user";

let defaultUser;

// Initialize default user name and project if empty
if (defaultUser === undefined) {
  defaultUser = new User({
  name: "Victor",
  projects: [
    new Project({
  })
  ]
  });

  defaultUser.projects[0].addTodo(
    TodoFactory ({
      title: "First task",
      description: "First description",
      dueDate: new Date().toLocaleDateString(),
      priority: "Priority 4"
    })
  );
}



// Display Default Project Task + Add Task Modal's HTML
ProjectTasks(defaultUser);
AddTaskModal();

// + Add Task button to popup dialog
const addTaskButton = document.querySelector('.add-task-button');
const mainDialog = document.querySelector('#addTaskDialog');
const submitButton = document.querySelector('.submit-button');
const cancelButton = document.querySelector('.cancel-button');
const formCloseButton = document.querySelector('.form-close-button');

addTaskButton.addEventListener("click", () => {
  mainDialog.showModal();
});

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  mainDialog.close();
});

formCloseButton.addEventListener("click", (e) => {
  e.preventDefault();
  mainDialog.close();
});

submitButton.addEventListener("click", taskSubmit);
function taskSubmit(e) {
  e.preventDefault();
  console.log(e);
}

mainDialog.addEventListener("mouseover", (e) => {
  e.preventDefault();
})
