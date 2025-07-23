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

initLoader();

// Display Default Project Task + Add Task Modal's HTML
function initLoader() {
  ProjectTasks(defaultUser);
  AddTaskModal();
  attachEventListeners();
  console.log(defaultUser);
};

function attachEventListeners() {
  const addTaskButton = document.querySelector('.add-task-button');
  const mainDialog = document.querySelector('#addTaskDialog');
  const submitButton = document.querySelector('.submit-button');
  const cancelButton = document.querySelector('.cancel-button');
  const formCloseButton = document.querySelector('.form-close-button');
  const taskName = document.querySelector('#task-name');
  const taskDescription = document.querySelector('#task-description');
  const taskDueDate = document.querySelector('#task-date');
  const taskPriority = document.querySelector('#task-priority');

  // + Add Task button to popup dialog

  addTaskButton.addEventListener("click", (e) => 
    mainDialog.showModal()
  );

  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    mainDialog.close();
  });

  formCloseButton.addEventListener("click", (e) => {
    e.preventDefault();
    mainDialog.close();
  });

  submitButton.addEventListener("click", taskSubmit);

  // Add new Task Data to User
  function taskSubmit(e) {
    e.preventDefault();

    if (taskName.value.length > 0) {
      defaultUser.projects[0].addTodo(
        TodoFactory ({
          title: taskName.value,
          description: taskDescription.value,
          dueDate: taskDueDate.value,
          priority: taskPriority.value
        })
      );
      // Reload updated DOM and event listeners
      mainDialog.textContent = "";
      initLoader();
    } else {
      window.alert("Task name is required");
      return false;
    };
    mainDialog.close();
  };
}



